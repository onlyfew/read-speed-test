// 阅读测试数据
const readingData = {
    // 三年级阅读材料
    3: [
        {
            id: '3-1',
            title: '小猫钓鱼',
            content: `小猫咪咪很喜欢吃鱼。一天，它看见小狗在河边钓鱼，就想："我也要学钓鱼！"

第二天，咪咪带着鱼竿来到河边。它学着小狗的样子，把鱼线甩到水里，然后坐在岸边等待。

太阳渐渐升高，天气变得很热。咪咪等了很久，一条鱼也没钓到。它觉得很无聊，就趴在岸边看水里的倒影。

突然，水中出现了一条小鱼的影子。咪咪很兴奋，伸出爪子想抓住小鱼。它用力过猛，整个身体都掉进了河里。

"救命啊！"咪咪大声喊道。正在附近散步的小狗听到了，赶紧跑过来把咪咪救了上来。

咪咪浑身湿透了，它不好意思地对小狗说："谢谢你救了我。原来钓鱼没有我想象的那么简单。"

小狗笑着说："任何事情都需要耐心和正确的方法。如果你想学钓鱼，我可以教你。"`,
            wordCount: 342,
            questions: [
                {
                    question: '咪咪为什么想学钓鱼？',
                    options: [
                        'A. 因为它很无聊',
                        'B. 因为它喜欢吃鱼',
                        'C. 因为小狗邀请它',
                        'D. 因为河水很清澈'
                    ],
                    correctAnswer: 'B'
                },
                {
                    question: '咪咪为什么会掉进河里？',
                    options: [
                        'A. 因为它不小心滑倒了',
                        'B. 因为小狗推了它一下',
                        'C. 因为它想用爪子抓鱼',
                        'D. 因为它想游泳'
                    ],
                    correctAnswer: 'C'
                },
                {
                    question: '这个故事告诉我们什么道理？',
                    options: [
                        'A. 猫不应该钓鱼',
                        'B. 做事要有耐心并学习正确方法',
                        'C. 小狗比小猫聪明',
                        'D. 不要在河边玩耍'
                    ],
                    correctAnswer: 'B'
                },
                {
                    question: '故事中谁救了咪咪？',
                    options: [
                        'A. 小鱼',
                        'B. 小狗',
                        'C. 渔夫',
                        'D. 它自己游上岸'
                    ],
                    correctAnswer: 'B'
                },
                {
                    question: '故事最后咪咪学会钓鱼了吗？',
                    options: [
                        'A. 没有，它放弃了',
                        'B. 是的，它学会了',
                        'C. 故事没有提到',
                        'D. 它决定以后再学'
                    ],
                    correctAnswer: 'C'
                }
            ]
        }
    ],
    
    // 四年级阅读材料
    4: [
        {
            id: '4-1',
            title: '神奇的树屋',
            content: `李明和小红是好朋友，他们喜欢在放学后一起探险。一天，他们在学校后面的小树林里发现了一棵特别高大的橡树。

"看那里！"李明指着树上的一个奇怪的结构说，"好像是一个树屋！"

小红仔细一看，果然在树的高处有一个用木板搭建的小屋。两个人决定爬上去看看。他们小心翼翼地攀爬，终于到达了树屋。

树屋里面出乎意料地干净整洁，有一张小桌子，两把椅子，还有一个装满书的书架。墙上挂着一幅地图，上面标记着许多红色的X。

"这是什么地图？"小红好奇地问。

李明研究了一会儿说："我觉得这是一张藏宝图！这些X可能标记着宝藏的位置。"

正当他们兴奋地讨论时，听到树下有脚步声。他们紧张地往窗外看，发现是学校的王老师。

"你们在上面干什么？"王老师问道。

李明和小红只好下来，向王老师解释他们发现的树屋。

王老师笑了："原来你们发现了我的秘密基地。这是我为喜欢阅读的学生准备的。那张地图上的X标记的是世界上著名的图书馆位置。"

李明和小红恍然大悟，原来不是藏宝图。王老师邀请他们每周三放学后来树屋读书，还可以邀请其他同学一起来。从那以后，神奇的树屋成了孩子们最喜欢的地方。`,
            wordCount: 456,
            questions: [
                {
                    question: '李明和小红在哪里发现了树屋？',
                    options: [
                        'A. 在公园里',
                        'B. 在学校后面的小树林',
                        'C. 在李明家的后院',
                        'D. 在小红家附近'
                    ],
                    correctAnswer: 'B'
                },
                {
                    question: '树屋里有什么？',
                    options: [
                        'A. 玩具和游戏',
                        'B. 食物和饮料',
                        'C. 桌子、椅子和书架',
                        'D. 电视和电脑'
                    ],
                    correctAnswer: 'C'
                },
                {
                    question: '墙上的地图实际上标记的是什么？',
                    options: [
                        'A. 宝藏的位置',
                        'B. 著名的图书馆位置',
                        'C. 学校的位置',
                        'D. 王老师去过的地方'
                    ],
                    correctAnswer: 'B'
                },
                {
                    question: '树屋的主人是谁？',
                    options: [
                        'A. 李明',
                        'B. 小红',
                        'C. 王老师',
                        'D. 没有人知道'
                    ],
                    correctAnswer: 'C'
                },
                {
                    question: '故事最后，树屋变成了什么？',
                    options: [
                        'A. 一个秘密俱乐部',
                        'B. 一个游戏场所',
                        'C. 一个阅读场所',
                        'D. 一个科学实验室'
                    ],
                    correctAnswer: 'C'
                }
            ]
        }
    ]
}