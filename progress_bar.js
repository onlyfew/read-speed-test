// 进度条功能实现

// 添加进度条样式
function addProgressBarStyles() {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        /* 进度条浮层样式 */
        #mastery-progress-container {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: rgba(0, 0, 0, 0.7);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            padding: 10px 20px;
            display: flex;
            align-items: center;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            z-index: 100;
            transition: all 0.3s ease;
            color: white;
        }
        
        [data-theme="light"] #mastery-progress-container {
            background-color: rgba(255, 255, 255, 0.9);
            border: 1px solid rgba(0, 0, 0, 0.1);
            color: #333;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        .progress-label {
            margin-right: 10px;
            font-weight: 500;
            white-space: nowrap;
        }
        
        .progress-bar-container {
            width: 200px;
            height: 12px;
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 6px;
            overflow: hidden;
            margin-right: 10px;
        }
        
        [data-theme="light"] .progress-bar-container {
            background-color: rgba(0, 0, 0, 0.1);
        }
        
        #mastery-progress-bar {
            height: 100%;
            width: 0%;
            background: linear-gradient(90deg, #ff3366, #00ccff);
            border-radius: 6px;
            transition: width 0.5s ease-in-out;
        }
        
        #mastery-percentage {
            font-weight: bold;
            min-width: 40px;
            text-align: right;
        }
    `;
    document.head.appendChild(styleElement);
    
    // 初始更新进度条位置
    updateProgressBarPosition();
}

// 更新进度条位置
function updateProgressBarPosition() {
    const progressContainer = document.getElementById('mastery-progress-container');
    if (progressContainer) {
        // 确保进度条在底部居中
        progressContainer.style.bottom = '20px';
        progressContainer.style.left = '50%';
        progressContainer.style.transform = 'translateX(-50%)';
    }
}

// 更新掌握进度
function updateMasteryProgress() {
    // 计算掌握进度
    const totalLeafNodes = leafNodeIds.length;
    const masteredNodes = masteredAbilityIds.length;
    const progressPercentage = totalLeafNodes > 0 ? (masteredNodes / totalLeafNodes) * 100 : 0;
    
    // 更新进度条
    const progressBar = document.getElementById('mastery-progress-bar');
    const percentageText = document.getElementById('mastery-percentage');
    
    if (progressBar && percentageText) {
        progressBar.style.width = `${progressPercentage}%`;
        percentageText.textContent = `${Math.round(progressPercentage)}%`;
    }
}

// 导出函数
window.addProgressBarStyles = addProgressBarStyles;
window.updateProgressBarPosition = updateProgressBarPosition;
window.updateMasteryProgress = updateMasteryProgress;