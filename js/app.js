// 全局变量
let selectedGrade = null;
let currentReading = null;
let startTime = null;
let endTime = null;
let userAnswers = {};
let timerInterval = null;

// DOM元素
const welcomeScreen = document.getElementById('welcome-screen');
const instructionScreen = document.getElementById('instruction-screen');
const readingScreen = document.getElementById('reading-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const gradeButtons = document.querySelectorAll('.grade-btn');
const startBtn = document.getElementById('start-btn');
const beginTestBtn = document.getElementById('begin-test-btn');
const finishReadingBtn = document.getElementById('finish-reading-btn');
const submitAnswersBtn = document.getElementById('submit-answers-btn');
const tryAgainBtn = document.getElementById('try-again-btn');
const shareBtn = document.getElementById('share-btn');

const readingContent = document.getElementById('reading-content');
const quizContainer = document.getElementById('quiz-container');
const timer = document.getElementById('timer');

const readingTimeDisplay = document.getElementById('reading-time');
const accuracyDisplay = document.getElementById('accuracy');
const readingSpeedDisplay = document.getElementById('reading-speed');
const resultMessage = document.getElementById('result-message');
const badgeImage = document.getElementById('badge-image');
const badgeTitle = document.getElementById('badge-title');

// 初始化应用
function initApp() {
    // 年级选择事件
    gradeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除其他按钮的选中状态
            gradeButtons.forEach(btn => btn.classList.remove('selected'));
            // 添加当前按钮的选中状态
            button.classList.add('selected');
            // 保存选中的年级
            selectedGrade = parseInt(button.dataset.grade);
            // 启用开始按钮
            startBtn.disabled = false;
        });
    });

    // 开始测试按钮事件
    startBtn.addEventListener('click', () => {
        if (selectedGrade) {
            showScreen(instructionScreen);
        }
    });

    // 准备好了按钮事件
    beginTestBtn.addEventListener('click', () => {
        startTest();
    });

    // 阅读完成按钮事件
    finishReadingBtn.addEventListener('click', () => {
        endReading();
    });

    // 提交答案按钮事件
    submitAnswersBtn.addEventListener('click', () => {
        if (validateAnswers()) {
            calculateResults();
        } else {
            alert('请回答所有问题！');
        }
    });

    // 再测一次按钮事件
    tryAgainBtn.addEventListener('click', () => {
        resetTest();
        showScreen(welcomeScreen);
    });

    // 分享按钮事件
    shareBtn.addEventListener('click', () => {
        shareResults();
    });
}

// 显示指定屏幕
function showScreen(screen) {
    // 隐藏所有屏幕
    welcomeScreen.classList.remove('active');
    instructionScreen.classList.remove('active');
    readingScreen.classList.remove('active');
    quizScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    
    // 显示指定屏幕
    screen.classList.add('active');
}

// 开始测试
function startTest() {
    // 随机选择一篇适合年级的阅读材料
    const gradeReadings = readingData[selectedGrade];
    if (gradeReadings && gradeReadings.length > 0) {
        const randomIndex = Math.floor(Math.random() * gradeReadings.length);
        currentReading = gradeReadings[randomIndex];
        
        // 显示阅读内容
        readingContent.innerHTML = `<h3>${currentReading.title}</h3><div class="reading-text">${currentReading.content}</div>`;
        
        // 显示阅读屏幕
        showScreen(readingScreen);
        
        // 开始计时
        startTimer();
    } else {
        alert('抱歉，没有找到适合你年级的阅读材料！');
        showScreen(welcomeScreen);
    }
}

// 开始计时器
function startTimer() {
    startTime = new Date();
    let seconds = 0;
    
    timerInterval = setInterval(() => {
        seconds++;
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        timer.textContent = `${padZero(minutes)}:${padZero(remainingSeconds)}`;
    }, 1000);
}

// 数字补零
function padZero(num) {
    return num < 10 ? `0${num}` : num;
}

// 结束阅读
function endReading() {
    // 停止计时
    endTime = new Date();
    clearInterval(timerInterval);
    
    // 准备问题
    prepareQuestions();
    
    // 显示问题屏幕
    showScreen(quizScreen);
}

// 准备问题
function prepareQuestions() {
    quizContainer.innerHTML = '';
    
    if (currentReading && currentReading.questions) {
        currentReading.questions.forEach((question, index) => {
            const questionElement = document.createElement('div');
            questionElement.className = 'quiz-question';
            
            const questionText = document.createElement('p');
            questionText.textContent = `${index + 1}. ${question.question}`;
            questionElement.appendChild(questionText);
            
            const optionsContainer = document.createElement('div');
            optionsContainer.className = 'quiz-options';
            
            question.options.forEach((option, optionIndex) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'quiz-option';
                optionElement.dataset.questionIndex = index;
                optionElement.dataset.option = option.charAt(0);
                
                const radioInput = document.createElement('input');
                radioInput.type = 'radio';
                radioInput.name = `question-${index}`;
                radioInput.id = `question-${index}-option-${optionIndex}`;
                
                const optionLabel = document.createElement('label');
                optionLabel.htmlFor = `question-${index}-option-${optionIndex}`;
                optionLabel.textContent = option;
                
                optionElement.appendChild(radioInput);
                optionElement.appendChild(optionLabel);
                
                // 添加选项点击事件
                optionElement.addEventListener('click', () => {
                    // 移除同一问题其他选项的选中状态
                    document.querySelectorAll(`.quiz-option[data-question-index="${index}"]`).forEach(el => {
                        el.classList.remove('selected');
                    });
                    // 添加当前选项的选中状态
                    optionElement.classList.add('selected');
                    // 选中单选按钮
                    radioInput.checked = true;
                    // 保存用户答案
                    userAnswers[index] = option.charAt(0);
                });
                
                optionsContainer.appendChild(optionElement);
            });
            
            questionElement.appendChild(optionsContainer);
            quizContainer.appendChild(questionElement);
        });
    }
}

// 验证是否回答了所有问题
function validateAnswers() {
    if (!currentReading || !currentReading.questions) return false;
    
    return currentReading.questions.every((_, index) => userAnswers[index] !== undefined);
}

// 计算结果
function calculateResults() {
    // 计算阅读时间（秒）
    const readingTimeInSeconds = Math.round((endTime - startTime) / 1000);
    const readingTimeInMinutes = readingTimeInSeconds / 60;
    
    // 计算正确率
    let correctCount = 0;
    currentReading.questions.forEach((question, index) => {
        if (userAnswers[index] === question.correctAnswer) {
            correctCount++;
        }
    });
    
    const totalQuestions = currentReading.questions.length;
    const accuracy = Math.round((correctCount / totalQuestions) * 100);
    
    // 计算阅读速度（字/分钟）
    const readingSpeed = Math.round(currentReading.wordCount / readingTimeInMinutes);
    
    // 显示结果
    const minutes = Math.floor(readingTimeInSeconds / 60);
    const seconds = readingTimeInSeconds % 60;
    readingTimeDisplay.textContent = `${padZero(minutes)}:${padZero(seconds)}`;
    accuracyDisplay.textContent = `${accuracy}%`;
    readingSpeedDisplay.textContent = `${readingSpeed} 字/分钟`;
    
    // 根据阅读速度和正确率评定等级
    let badge, title, message;
    
    // 根据年级调整评分标准
    const gradeSpeedStandards = {
        3: { low: 200, medium: 300, high: 400 },
        4: { low: 250, medium: 350, high: 450 },
        5: { low: 300, medium: 400, high: 500 },
        6: { low: 350, medium: 450, high: 550 }
    };
    
    const standard = gradeSpeedStandards[selectedGrade];
    
    if (accuracy < 60) {
        // 理解度不足
        badge = 'images/badge-bronze.svg';
        title = '阅读新手';
        message = '你的阅读理解需要提高！建议放慢速度，认真理解文章内容。';
    } else if (readingSpeed < standard.low) {
        // 速度慢
        badge = 'images/badge-bronze.svg';
        title = '阅读新手';
        message = `你的阅读速度是 ${readingSpeed} 字/分钟，还有提升空间。多练习可以提高速度！`;
    } else if (readingSpeed < standard.medium) {
        // 速度中等
        badge = 'images/badge-silver.svg';
        title = '阅读达人';
        message = `不错！你的阅读速度是 ${readingSpeed} 字/分钟，继续努力可以更快！`;
    } else if (readingSpeed < standard.high) {
        // 速度较快
        badge = 'images/badge-silver.svg';
        title = '阅读达人';
        message = `很棒！你的阅读速度是 ${readingSpeed} 字/分钟，已经超过同龄人平均水平！`;
    } else {
        // 速度非常快
        badge = 'images/badge-gold.svg';
        title = '阅读小超人';
        message = `太厉害了！你的阅读速度是 ${readingSpeed} 字/分钟，你是真正的阅读小超人！`;
    }
    
    // 如果正确率很高，给予额外表扬
    if (accuracy >= 90) {
        message += ' 而且你的理解能力非常强，正确率高达' + accuracy + '%！';
    }
    
    badgeImage.src = badge;
    badgeTitle.textContent = title;
    resultMessage.textContent = message;
    
    // 显示结果屏幕
    showScreen(resultScreen);
}

// 重置测试
function resetTest() {
    selectedGrade = null;
    currentReading = null;
    startTime = null;
    endTime = null;
    userAnswers = {};
    
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    
    timer.textContent = '00:00';
    
    // 重置年级选择
    gradeButtons.forEach(btn => btn.classList.remove('selected'));
    startBtn.disabled = true;
}

// 分享结果
function shareResults() {
    // 获取结果数据
    const readingTime = readingTimeDisplay.textContent;
    const accuracy = accuracyDisplay.textContent;
    const readingSpeed = readingSpeedDisplay.textContent;
    const badge = badgeTitle.textContent;
    
    // 构建分享文本
    const shareText = `我在「阅读小超人」测试中获得了「${badge}」称号！\n阅读速度：${readingSpeed}\n正确率：${accuracy}\n阅读时间：${readingTime}\n快来挑战我吧！`;
    
    // 尝试使用Web Share API
    if (navigator.share) {
        navigator.share({
            title: '阅读小超人测试结果',
            text: shareText
        }).catch(error => {
            console.log('分享失败:', error);
            fallbackShare();
        });
    } else {
        fallbackShare();
    }
}

// 备用分享方法
function fallbackShare() {
    alert('请截图保存你的成绩，分享给朋友吧！');
}

// 初始化应用
document.addEventListener('DOMContentLoaded', initApp);