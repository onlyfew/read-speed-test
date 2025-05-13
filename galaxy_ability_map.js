// 阅读能力体系数据
const readingAbilityData = {
    name: "我的阅读能力图谱",
    children: [
        {
            name: "解码与提取",
            children: [
                {
                    name: "提取与筛选信息",
                    children: [
                        { name: "借助外部提示，提取明显信息" },
                        { name: "运用圈画，提取关键信息" },
                        { name: "通过景物，提取关键信息" },
                        { name: "按照叙述顺序，提取关键信息" },
                        { name: "根据时间线索，提取关键信息" },
                        { name: "通过事物特点，提取关键信息" },
                        { name: "抓住事件要素，提取关键信息" },
                        { name: "抓住主要人物，提取关键信息" },
                        { name: "通过人物描写，提取关键信息" },
                        { name: "通过景物描写，提取关键信息" },
                        { name: "根据阅读目的，提取关键信息" },
                        { name: "借助关联信息，提取信息" },
                        { name: "通过重复、有规律的句式，提取核心信息" }
                    ]
                },
                {
                    name: "理解字词本意",
                    children: [
                        { name: "借助插图，理解字词句意思" },
                        { name: "通过文本外的演示，理解词语的意思" },
                        { name: "借助资料，理解字词句意思" },
                        { name: "借助表演，理解字词句的意思" },
                        { name: "联系近义词或反义词，理解字词句意思" },
                        { name: "联系上下文，理解字词句的意思" }
                    ]
                }
            ]
        },
        {
            name: "整合与概括",
            children: [
                {
                    name: "梳理思路",
                    children: [
                        { name: "借助关键信息，梳理思路" },
                        { name: "根据人物，梳理思路" },
                        { name: "借助图表，梳理思路" },
                        { name: "根据时间顺序，梳理思路" },
                        { name: "根据详略安排，梳理思路" }
                    ]
                },
                {
                    name: "概括大意",
                    children: [
                        { name: "借助插图，概括大意" },
                        { name: "借助关键信息，概括大意" },
                        { name: "借助图片，概括大意" },
                        { name: "联系生活，概括大意" },
                        { name: "运用串联段意的方法，概括大意" },
                        { name: "通过事件发展顺序，把握全文大意" },
                        { name: "通过主要人物，概括大意" },
                        { name: "整合提纲，概括大意" },
                        { name: "借助图表，概括大意" },
                        { name: "结合资料，概括大意" },
                        { name: "借助作品梗概，概括大意" }
                    ]
                }
            ]
        },
        {
            name: "解释与延展",
            children: [
                {
                    name: "理解隐含信息",
                    children: [
                        { name: "借助资料，理解字词句的隐含信息" },
                        { name: "联系上下文，理解字词句的隐含信息" },
                        { name: "结合生活经验，理解字词句的隐含信息" },
                        { name: "想象画面，理解字词句的隐含信息" },
                        { name: "借助关键词句，理解字词句的隐含信息" },
                        { name: "借助描写，理解字词句的隐含信息" }
                    ]
                },
                {
                    name: "想象拓展",
                    children: [
                        { name: "借助关键信息，展开想象" },
                        { name: "联系生活经验，展开想象" },
                        { name: "根据景物，展开想象" },
                        { name: "通过多角度，展开想象" },
                        { name: "结合情景，展开想象" },
                        { name: "借助事件，展开想象" },
                        { name: "调动多种感官，展开想象" },
                        { name: "借助描写，展开想象" },
                        { name: "联系上下文，展开想象" },
                        { name: "结合资料，展开想象" },
                        { name: "借助插图，展开想象" },
                        { name: "根据语言文字，展开想象" }
                    ]
                },
                {
                    name: "体会思想感情",
                    children: [
                        { name: "通过想象画面，体会思想感情" },
                        { name: "联系生活经验，体会思想感情" },
                        { name: "联系上下文，体会思想感情" },
                        { name: "通过描写，体会思想感情" },
                        { name: "抓住情节，体会思想感情" },
                        { name: "抓住人物，体会思想感情" },
                        { name: "借助抒情，体会思想感情" },
                        { name: "借助资料，体会思想感情" }
                    ]
                },
                {
                    name: "分析写作意图",
                    children: [
                        { name: "联系生活经验，分析写作意图" },
                        { name: "联系上下文，分析写作意图" },
                        { name: "通过描写，分析写作意图" },
                        { name: "抓住情节，分析写作意图" },
                        { name: "抓住人物，分析写作意图" },
                        { name: "借助抒情，分析写作意图" },
                        { name: "借助资料，分析写作意图" }
                    ]
                }
            ]
        },
        {
            name: "鉴赏与评判",
            children: [
                {
                    name: "赏析形象",
                    children: [
                        { name: "抓住对话，赏析形象" },
                        { name: "借助想象，赏析形象" },
                        { name: "通过提示语，赏析形象" },
                        { name: "抓住语言，赏析形象" },
                        { name: "抓住动作，赏析形象" },
                        { name: "抓住神态描写，赏析形象" },
                        { name: "抓住外貌描写，赏析形象" },
                        { name: "通过人物描写，赏析形象" },
                        { name: "借助环境描写，赏析形象" },
                        { name: "抓住情节变化，赏析形象" }
                    ]
                },
                {
                    name: "品析语言",
                    children: [
                        { name: "通过比较阅读，品析语言" },
                        { name: "通过修辞手法，品析语言" },
                        { name: "通过体会词句，品析语言" },
                        { name: "通过表达方法，品析语言" },
                        { name: "通过表现手法，品析语言" },
                        { name: "通过说明方法，品析语言" },
                        { name: "通过事例选取，品析语言" },
                        { name: "通过朗读，品析语言" }
                    ]
                },
                {
                    name: "评析结构",
                    children: [
                        { name: "通过详略结构评析" },
                        { name: "通过写作顺序评析" },
                        { name: "通过逻辑关系评析" },
                        { name: "通过句式结构评析" }
                    ]
                }
            ]
        },
        {
            name: "创意与应用",
            children: [
                {
                    name: "复述",
                    children: [
                        { name: "借助图片" },
                        { name: "借助提示" },
                        { name: "运用顺序关联词" },
                        { name: "借助表格" },
                        { name: "借助路线图" },
                        { name: "按一定顺序" },
                        { name: "用自己的话" },
                        { name: "根据情节主次" },
                        { name: "将对话变为转述" },
                        { name: "变换口吻" },
                        { name: "添加情节、对话等" },
                        { name: "模仿人物的动作、表情" },
                        { name: "综合训练学过的方法" }
                    ]
                },
                {
                    name: "创意表达",
                    children: [
                        { name: "运用积累的词语，进行表达" },
                        { name: "借助想象，进行表达" },
                        { name: "运用表现顺序的词语，进行表达" },
                        { name: "从不同方面写特点，进行表达" },
                        { name: "围绕关键句，进行表达" },
                        { name: "按顺序写事，进行表达" },
                        { name: "运用人物描写，进行表达" },
                        { name: "搜集资料，进行表达" },
                        { name: "运用点面结合，进行表达" },
                        { name: "运用环境描写，进行表达" },
                        { name: "围绕中心选材，进行表达" },
                        { name: "联系生活实际，进行表达" },
                        { name: "联系观点，进行表达" }
                    ]
                },
                {
                    name: "解决问题",
                    children: [
                        { name: "通过文本内容，解决问题" },
                        { name: "运用阅读中获得的思维方法，解决问题" },
                        { name: "通过信息加工，解决问题" },
                        { name: "通过查找资料，解决问题" }
                    ]
                }
            ]
        }
    ]
};

// 颜色映射 - 使用更鲜艳的颜色
const colorMap = {
    "解码与提取": "#ff3366", // 红色系
    "整合与概括": "#00ccff", // 青色系
    "解释与延展": "#ffcc00", // 黄色系
    "鉴赏与评判": "#9933ff", // 紫色系
    "创意与应用": "#33cc33"  // 绿色系
};

// 灰色表示未掌握的能力点
const GRAY_COLOR = "#888888";

// 存储已掌握的能力点ID
let masteredAbilityIds = [];

// 全局变量
let scene, camera, renderer, controls;
let simulation, nodes = [], links = [];
let nodeObjects = {}, linkObjects = {};
let raycaster, mouse, intersectedObject;
let particleSystem;
let isSimulationRunning = true;
let linkOpacity = 1;
let leafNodeIds = []; // 存储所有末级节点的ID

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化主题
    initTheme();
    
    // 初始化Three.js场景
    initThreeJS();
    
    // 创建星系可视化
    createGalaxyVisualization();
    
    // 添加背景粒子
    createStarfieldBackground();
    
    // 绑定事件监听器
    bindEventListeners();
    
    // 重置视图以显示整个星系图
    resetView();
    
    // 添加进度条样式
    addProgressBarStyles();
    
    // 开始动画循环
    animate();

    // toggleTheme();
});

// 初始化主题
function initTheme() {
    // 从localStorage获取保存的主题偏好
    // const savedTheme = localStorage.getItem('theme');
    const savedTheme = 'dark';
    
    // 如果有保存的主题偏好，则应用它
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
    
    // 在初始化时应用根节点颜色
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    // 延迟调用，确保节点已创建
    setTimeout(() => updateRootNodeColor(currentTheme), 500);
}

// 切换主题
function toggleTheme() {
    // 获取当前主题
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    
    // 切换主题
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // 应用新主题
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // 保存主题偏好到localStorage
    localStorage.setItem('theme', newTheme);
    
    // 更新根节点颜色
    updateRootNodeColor(newTheme);
}

// 更新主题相关的节点颜色
function updateRootNodeColor(theme) {
    // 更新根节点
    const rootNode = nodes.find(n => n.depth === 0);
    if (rootNode && nodeObjects[rootNode.id]) {
        const rootObj = nodeObjects[rootNode.id];
        const color = theme === 'light' ? "#ffffff" : "#333333";
        
        // 更新材质颜色
        if (rootObj.material) {
            rootObj.material.color.set(color);
            rootObj.material.emissive.set(color);
            // 确保在浅色模式下没有黑色边框
            rootObj.material.flatShading = false;
        }
        
        // 更新发光效果颜色
        if (rootObj.children && rootObj.children.length > 0) {
            const glowSphere = rootObj.children[0];
            if (glowSphere.material && glowSphere.material.uniforms) {
                glowSphere.material.uniforms.glowColor.value.set(color);
            }
        }
    }
    
    // 更新所有节点的材质属性，确保在浅色模式下没有黑色边框
    nodes.forEach(node => {
        const nodeObj = nodeObjects[node.id];
        if (nodeObj && nodeObj.material) {
            // 确保所有节点在浅色模式下没有黑色边框
            nodeObj.material.flatShading = false;
            nodeObj.material.needsUpdate = true;
        }
    });
}

// 初始化Three.js场景
function initThreeJS() {
    // 创建场景
    scene = new THREE.Scene();
    
    // 创建相机
    const width = document.getElementById('galaxy-scene').clientWidth;
    const height = document.getElementById('galaxy-scene').clientHeight;
    camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 10000);
    camera.position.z = 800; // 增加初始距离以显示整个星系图
    
    // 创建渲染器
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('galaxy-scene').appendChild(renderer.domElement);
    
    // 添加轨道控制器
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = true; // 启用平移功能
    controls.panSpeed = 1.2; // 增加平移速度
    controls.screenSpacePanning = true; // 使用屏幕空间平移
    controls.minDistance = 50; // 设置最小缩放距离
    controls.maxDistance = 1500; // 增加最大缩放距离以便查看全局视图
    controls.zoomToCursor = true; // 启用鼠标指针位置为中心的缩放
    controls.enableRotate = true; // 确保旋转功能启用
    controls.rotateSpeed = 0.8; // 设置旋转速度
    controls.keyPanSpeed = 20; // 键盘平移速度
    
    // 创建光线投射器用于鼠标交互
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    
    // 添加环境光和方向光
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);
    
    // 窗口大小调整事件
    window.addEventListener('resize', onWindowResize);
}

// 窗口大小调整
function onWindowResize() {
    const width = document.getElementById('galaxy-scene').clientWidth;
    const height = document.getElementById('galaxy-scene').clientHeight;
    
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

// 创建星系可视化
function createGalaxyVisualization() {
    // 将层次数据转换为图形数据
    const graphData = convertHierarchyToGraph(readingAbilityData);
    
    // 创建D3力导向布局 - 优化节点分布，减少交叉
    simulation = d3.forceSimulation(graphData.nodes)
        .force("link", d3.forceLink(graphData.links).id(d => d.id).distance(d => {
            // 为不同类型的节点设置不同的连接距离
            const sourceName = d.source.name;
            const targetName = d.target.name;
            const sourceDepth = d.source.depth;
            const targetDepth = d.target.depth;
            
            // 根节点到一级节点的连接距离更大，形成放射状结构
            if (sourceDepth === 0 || targetDepth === 0) {
                return 100;
            }
            // 一级节点到二级节点的连接
            else if ((sourceDepth === 1 && targetDepth === 2) || (sourceDepth === 2 && targetDepth === 1)) {
                return 70;
            }
            // 二级节点到三级节点（末级节点）的连接
            else if ((sourceDepth === 2 && targetDepth === 3) || (sourceDepth === 3 && targetDepth === 2)) {
                return 40;
            }
            // 其他连接使用默认距离
            else {
                return 50;
            }
        }))
        .force("charge", d3.forceManyBody().strength(d => {
            // 为不同深度的节点设置不同的排斥力
            switch(d.depth) {
                case 0: // 根节点
                    return -500;
                case 1: // 一级节点
                    return -300;
                case 2: // 二级节点
                    return -150;
                case 3: // 末级节点
                    return -80;
                default:
                    return -100;
            }
        }))
        .force("center", d3.forceCenter(0, 0))
        .force("collide", d3.forceCollide(d => {
            // 为不同深度的节点设置不同的碰撞半径
            const size = getNodeSize(d);
            return size * 2.5; // 增大碰撞半径，减少节点重叠
        }));
        
    // 添加X和Y方向的定位力，帮助分散节点
    simulation.force("x", d3.forceX().strength(0.05))
             .force("y", d3.forceY().strength(0.05));
             
    // 添加径向力，使节点按照深度分布在不同的同心圆上
    simulation.force("radial", d3.forceRadial(d => {
        // 根据节点深度设置不同的径向距离
        switch(d.depth) {
            case 0: return 0; // 根节点在中心
            case 1: return 150; // 一级节点
            case 2: return 250; // 二级节点
            case 3: return 350; // 末级节点
            default: return 200;
        }
    }).strength(0.3));
    
    // 存储节点和连接
    nodes = graphData.nodes;
    links = graphData.links;
    
    // 创建节点和连接的3D对象
    createNodesAndLinks();
    
    // 设置simulation的tick事件
    setupSimulationTick();
}

// 将层次数据转换为图形数据
function convertHierarchyToGraph(data) {
    const nodes = [];
    const links = [];
    let nodeId = 0;
    
    function processNode(node, parent = null, depth = 0) {
        const currentNode = {
            id: nodeId++,
            name: node.name,
            depth: depth,
            children: node.children ? node.children.length : 0
        };
        
        nodes.push(currentNode);
        
        if (parent !== null) {
            links.push({
                source: parent.id,
                target: currentNode.id,
                value: 1
            });
        }
        
        if (node.children) {
            node.children.forEach(child => {
                processNode(child, currentNode, depth + 1);
            });
        }
    }
    
    processNode(data);
    return { nodes, links };
}

// 创建节点和连接的3D对象
function createNodesAndLinks() {
    // 收集所有末级节点
    leafNodeIds = nodes.filter(node => node.depth === 3).map(node => node.id);
    
    // 随机选择70%的末级节点作为已掌握的能力点
    const masteryRate = 0.7;
    const numMastered = Math.floor(leafNodeIds.length * masteryRate);
    masteredAbilityIds = [];
    
    // 随机选择已掌握的能力点
    while (masteredAbilityIds.length < numMastered) {
        const randomIndex = Math.floor(Math.random() * leafNodeIds.length);
        const nodeId = leafNodeIds[randomIndex];
        if (!masteredAbilityIds.includes(nodeId)) {
            masteredAbilityIds.push(nodeId);
        }
    }
    
    // 更新进度条显示
    updateMasteryProgress();
    
    // 创建节点
    nodes.forEach(node => {
        // 确定节点大小和颜色
        const size = getNodeSize(node);
        const color = getNodeColor(node);
        
        // 创建发光球体
        const geometry = new THREE.SphereGeometry(size, 32, 32);
        const material = new THREE.MeshPhongMaterial({
            color: new THREE.Color(color),
            emissive: new THREE.Color(color),
            emissiveIntensity: node.depth === 3 && !masteredAbilityIds.includes(node.id) ? 0.2 : 0.5, // 未掌握的节点发光较弱
            shininess: 100,
            wireframe: false,
            flatShading: false, // 关闭平面着色，避免边缘锐化
            transparent: true,
            opacity: 1.0,
            depthWrite: true,
            side: THREE.FrontSide // 只渲染正面
        });
        
        const sphere = new THREE.Mesh(geometry, material);
        sphere.userData = { node: node };
        scene.add(sphere);
        
        // 添加发光效果
        const glowMaterial = new THREE.ShaderMaterial({
            uniforms: {
                "c": { value: 0.2 },
                "p": { value: 4.0 },
                glowColor: { value: new THREE.Color(color) },
                viewVector: { value: new THREE.Vector3() }
            },
            vertexShader: `
                uniform vec3 viewVector;
                uniform float c;
                uniform float p;
                varying float intensity;
                void main() {
                    vec3 vNormal = normalize(normal);
                    vec3 vNormel = normalize(viewVector);
                    intensity = pow(c - dot(vNormal, vNormel), p);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform vec3 glowColor;
                varying float intensity;
                void main() {
                    vec3 glow = glowColor * intensity;
                    // 使用强度值作为透明度，使边缘更加柔和
                    gl_FragColor = vec4(glow, intensity * 0.8);
                }
            `,
            side: THREE.BackSide,
            blending: THREE.AdditiveBlending,
            transparent: true
        });
        
        // 未掌握的末级节点发光效果较弱
        const glowSize = node.depth === 3 && !masteredAbilityIds.includes(node.id) ? size * 1.1 : size * 1.2;
        const glowSphere = new THREE.Mesh(
            new THREE.SphereGeometry(glowSize, 32, 32),
            glowMaterial
        );
        sphere.add(glowSphere);
        
        // 为所有节点添加标签，不再限制只有第一层节点有标签
        createTextLabel(node, sphere);
        
        // 存储节点对象引用
        nodeObjects[node.id] = sphere;
    });
    
    // 创建连接线
    links.forEach(link => {
        // 处理link.source和link.target可能是对象或ID的情况
        const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
        const targetId = typeof link.target === 'object' ? link.target.id : link.target;
        
        const sourceNode = nodes.find(n => n.id === sourceId);
        const targetNode = nodes.find(n => n.id === targetId);
        
        // 确保sourceNode和targetNode都存在
        if (!sourceNode || !targetNode) {
            console.warn('找不到连接线的源节点或目标节点:', link);
            return; // 跳过这个连接
        }
        
        // 确定连接线颜色
        let color;
        if (sourceNode.depth === 0) {
            color = getNodeColor(targetNode);
        } else {
            color = getNodeColor(sourceNode);
        }
        
        // 创建连接线几何体
        const geometry = new THREE.BufferGeometry();
        
        // 使用发光材质，确保在任何缩放级别下连线都清晰可见
        const material = new THREE.LineBasicMaterial({
            color: new THREE.Color(color),
            transparent: true,
            opacity: linkOpacity,
            linewidth: 10, // 增加线宽，使连线更明显
            depthTest: false, // 禁用深度测试，确保线条始终可见
            depthWrite: false, // 禁用深度写入，防止被其他对象遮挡
            fog: false, // 禁用雾效果，确保在远距离也可见
            blending: THREE.AdditiveBlending, // 使用加法混合模式增强可见性
            toneMapped: false // 禁用色调映射，保持原始亮度
        });
        
        // 添加辉光效果，使连线在放大时更加明显
        material.onBeforeCompile = (shader) => {
            shader.fragmentShader = shader.fragmentShader.replace(
                'gl_FragColor = vec4( outgoingLight, diffuseColor.a );',
                'gl_FragColor = vec4( outgoingLight, diffuseColor.a );\                gl_FragColor.rgb += outgoingLight * 0.5;' // 增强辉光效果
            );
        };
        
        // 设置渲染顺序，确保连线在其他对象之上渲染
        material.renderOrder = 1;
        
        // 初始化顶点位置
        const positions = new Float32Array(6); // 两个点，每个点xyz坐标
        
        // 设置初始位置，确保连线可见
        if (sourceNode.x !== undefined && targetNode.x !== undefined) {
            positions[0] = sourceNode.x;
            positions[1] = sourceNode.y;
            positions[2] = sourceNode.z || 0;
            
            positions[3] = targetNode.x;
            positions[4] = targetNode.y;
            positions[5] = targetNode.z || 0;
        } else {
            // 如果节点位置尚未定义，设置一个临时位置
            positions[0] = 0;
            positions[1] = 0;
            positions[2] = 0;
            
            positions[3] = 0;
            positions[4] = 0;
            positions[5] = 0;
        }
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        const line = new THREE.Line(geometry, material);
        scene.add(line);
        
        // 存储连接线对象引用，使用正确的键格式
        linkObjects[`${sourceId}-${targetId}`] = line;
    });
}

// 创建文本标签
function createTextLabel(node, parent) {
    // 创建HTML元素作为标签
    const labelDiv = document.createElement('div');
    labelDiv.className = 'node-label';
    labelDiv.textContent = node.name;
    labelDiv.style.position = 'absolute';
    labelDiv.style.color = '#ffffff';
    labelDiv.style.padding = '2px 6px';
    
    // 根据节点深度设置不同的样式
    if (node.depth === 0) {
        // 根节点
        labelDiv.style.backgroundColor = 'rgba(0,0,0,0.7)';
        labelDiv.style.fontSize = '16px';
        labelDiv.style.fontWeight = 'bold';
        // 根据当前主题设置边框颜色
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const borderColor = currentTheme === 'light' ? '#333333' : '#ffffff';
        labelDiv.style.border = `1px solid ${borderColor}`;
        // 根节点标签始终可见
        labelDiv.style.opacity = '1';
    } else if (node.depth === 1) {
        // 一级节点
        labelDiv.style.backgroundColor = 'rgba(0,0,0,0.7)';
        labelDiv.style.fontSize = '14px';
        labelDiv.style.fontWeight = 'bold';
        // 使用节点对应的颜色作为边框
        const color = getNodeColor(node);
        labelDiv.style.border = `1px solid ${color}`;
        // 一级节点标签默认隐藏，将根据距离动态显示
        labelDiv.style.opacity = '0';
    } else if (node.depth === 2) {
        // 二级节点
        labelDiv.style.backgroundColor = 'rgba(0,0,0,0.7)';
        labelDiv.style.fontSize = '13px';
        // 使用节点对应的颜色作为边框
        const color = getNodeColor(node);
        labelDiv.style.border = `1px solid ${color}`;
        // 二级节点标签默认隐藏
        labelDiv.style.opacity = '0';
    } else {
        // 其他节点
        labelDiv.style.backgroundColor = 'rgba(0,0,0,0.6)';
        labelDiv.style.fontSize = '12px';
        // 默认隐藏
        labelDiv.style.opacity = '0';
    }
    
    labelDiv.style.borderRadius = '4px';
    labelDiv.style.whiteSpace = 'nowrap';
    labelDiv.style.transition = 'opacity 0.3s';
    labelDiv.style.textShadow = '0 0 3px rgba(0,0,0,0.8)';
    labelDiv.style.cursor = 'pointer'; // 添加鼠标指针样式
    
    // 添加点击事件监听器，实现与节点相同的点击效果
    labelDiv.addEventListener('click', function(event) {
        // 阻止事件冒泡，避免触发画布的点击事件
        event.stopPropagation();
        event.preventDefault();
        
        // 检查标签透明度，低于20%则不触发点击效果
        if (parseFloat(labelDiv.style.opacity) < 0.2) {
            return;
        }
        
        // 获取关联的节点对象
        const nodeObj = parent;
        const nodeData = node;
        
        // 防止短时间内多次触发
        if (nodeObj.userData.isAnimating) {
            return;
        }
        nodeObj.userData.isAnimating = true;
        
        // 处理标签显示/隐藏
        if (window.activeNode === nodeObj) {
            // 如果点击的是当前活跃节点的标签，隐藏其标签
            hideAllLabels();
            window.activeNode = null;
        } else {
            // 隐藏所有标签，然后显示当前点击节点的标签
            hideAllLabels();
            showNodeLabel(nodeObj);
            window.activeNode = nodeObj;
        }
        
        // 触发爆炸式展开效果
        explodeNode(nodeData);
        
        // 1秒后重置动画状态标志
        setTimeout(() => {
            nodeObj.userData.isAnimating = false;
        }, 1000);
    });
    
    // 将标签添加到DOM中
    document.getElementById('galaxy-scene').appendChild(labelDiv);
    
    // 将标签与节点对象关联
    parent.userData.label = labelDiv;
    parent.userData.node = node;
}

// 更新标签位置
function updateLabels() {
    for (const nodeId in nodeObjects) {
        const obj = nodeObjects[nodeId];
        if (obj.userData.label) {
            const vector = new THREE.Vector3();
            vector.setFromMatrixPosition(obj.matrixWorld);
            
            // 计算节点到相机的距离
            const distance = camera.position.distanceTo(obj.position);
            
            // 投影到屏幕坐标
            vector.project(camera);
            
            const x = (vector.x * 0.5 + 0.5) * renderer.domElement.clientWidth;
            const y = -(vector.y * 0.5 + 0.5) * renderer.domElement.clientHeight + renderer.domElement.clientHeight;
            
            const label = obj.userData.label;
            label.style.left = `${x}px`;
            label.style.top = `${y}px`;
            
            // 如果节点在屏幕外，隐藏标签
            if (vector.z > 1 || Math.abs(vector.x) > 1 || Math.abs(vector.y) > 1) {
                label.style.opacity = '0';
            }
            
            // 如果不是当前活跃节点，根据深度决定标签可见性
            if (obj !== window.activeNode) {
                // 根据节点深度和距离调整标签可见性
                const node = obj.userData.node;
                
                // 只有根节点的标签默认可见
                if (node.depth === 0) {
                    // 如果在屏幕内，则始终显示
                    if (!(vector.z > 1 || Math.abs(vector.x) > 1 || Math.abs(vector.y) > 1)) {
                        label.style.opacity = '1'; // 始终可见
                    }
                } else {
                    // 其他深度的节点（包括一级节点）根据距离动态调整可见性
                    // 设置不同深度节点的可见距离阈值
                    const visibilityThresholds = {
                        1: 1200,  // 一级节点在较远距离可见
                        2: 1000,  // 二级节点在较近距离可见
                        3: 800,   // 三级节点需要更近的距离才可见
                        4: 80     // 四级及更深节点在非常近的距离可见
                    };
                    
                    // 获取当前节点深度的可见阈值，如果没有特定设置则使用最后一个值
                    const threshold = visibilityThresholds[node.depth] || visibilityThresholds[4];
                    
                    // 根据距离计算透明度
                    if (distance < threshold) {
                        // 在阈值范围内，根据距离计算透明度
                        // 距离越近，透明度越高（越清晰）
                        const opacity = Math.min(0.9, 1 - (distance / threshold) * 0.5);
                        label.style.opacity = opacity.toFixed(2);
                    } else {
                        // 超出阈值范围，隐藏标签
                        label.style.opacity = '0';
                    }
                }
            }
        }
    }
}

// 显示指定节点的标签
function showNodeLabel(node) {
    if (node && node.userData && node.userData.label) {
        const label = node.userData.label;
        label.style.opacity = '1';
        // 增加标签的可见性
        label.style.backgroundColor = 'rgba(0,0,0,0.8)';
        label.style.border = `2px solid ${getNodeColor(node.userData.node)}`;
        label.style.zIndex = '1000';
        label.style.boxShadow = '0 0 10px rgba(255,255,255,0.5)';
    }
}

// 隐藏所有节点标签
function hideAllLabels() {
    for (const nodeId in nodeObjects) {
        const obj = nodeObjects[nodeId];
        if (obj.userData.label) {
            const label = obj.userData.label;
            const node = obj.userData.node;
            
            // 重置标签样式
            if (node.depth === 0) {
                // 根节点
                label.style.backgroundColor = 'rgba(0,0,0,0.7)';
                label.style.border = '1px solid #ffffff';
            } else if (node.depth === 1) {
                // 一级节点
                label.style.backgroundColor = 'rgba(0,0,0,0.7)';
                const color = getNodeColor(node);
                label.style.border = `1px solid ${color}`;
            } else {
                // 其他节点
                label.style.backgroundColor = 'rgba(0,0,0,0.6)';
                label.style.border = 'none';
            }
            
            label.style.zIndex = '';
            label.style.boxShadow = 'none';
            
            // 默认隐藏标签，让updateLabels函数根据距离动态调整可见性
            label.style.opacity = '0';
        }
    }
}

// 获取节点大小
function getNodeSize(node) {
    // 根据深度和子节点数量确定大小
    const baseSize = 10 - node.depth * 1.6; // 基础大小增加一倍
    const childBonus = node.children ? Math.min(node.children, 10) * 0.6 : 0; // 子节点奖励系数增加一倍
    return Math.max(baseSize + childBonus, 3); // 最小节点大小增加一倍
}

// 获取节点颜色
function getNodeColor(node) {
    // 如果是末级节点且未掌握，返回灰色
    if (node.depth === 3 && !masteredAbilityIds.includes(node.id)) {
        return GRAY_COLOR;
    }
    
    if (node.depth === 0) {
        // 根据主题设置根节点颜色
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        return currentTheme === 'light' ? "#ffffff" : "#333333"; // 浅色主题下为白色，深色主题下为黑灰色
    } else if (node.depth === 1) {
        return colorMap[node.name] || "#ff3366";
    } else {
        // 查找节点所属的一级节点
        let currentNode = node;
        let parentNode;
        
        // 向上查找直到找到一级节点
        while (currentNode.depth > 1) {
            parentNode = findParentNode(currentNode);
            if (!parentNode) break;
            currentNode = parentNode;
            if (currentNode.depth === 1) {
                return colorMap[currentNode.name] || "#ff3366";
            }
        }
        
        // 如果无法找到一级节点，使用默认颜色
        return "#ff3366";
    }
}

// 查找父节点
function findParentNode(node) {
    return nodes.find(n => {
        return links.some(link => {
            const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
            const targetId = typeof link.target === 'object' ? link.target.id : link.target;
            return sourceId === n.id && targetId === node.id;
        });
    });
}

// 创建星空背景
function createStarfieldBackground() {
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 1,
        transparent: true,
        opacity: 0.8,
        map: createStarTexture(),
        blending: THREE.AdditiveBlending
    });
    
    const starsVertices = [];
    for (let i = 0; i < 10000; i++) {
        const x = THREE.MathUtils.randFloatSpread(2000);
        const y = THREE.MathUtils.randFloatSpread(2000);
        const z = THREE.MathUtils.randFloatSpread(2000);
        starsVertices.push(x, y, z);
    }
    
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    particleSystem = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(particleSystem);
}

// 创建星星纹理
function createStarTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const context = canvas.getContext('2d');
    
    const gradient = context.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
    );
    
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.2, 'rgba(240,240,255,1)');
    gradient.addColorStop(0.4, 'rgba(220,220,255,0.8)');
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    return texture;
}

// 绑定事件监听器
function bindEventListeners() {
    // 工具栏折叠功能
    const toggleControlsBtn = document.getElementById('toggle-controls');
    const controlsPanel = document.querySelector('.controls');
    
    // 设置初始状态为隐藏
    controlsPanel.style.display = 'none';
    controlsPanel.style.opacity = '0';
    
    toggleControlsBtn.addEventListener('click', function() {
        if (controlsPanel.style.display !== 'none') {
            // 折叠工具栏
            controlsPanel.style.opacity = '0';
            toggleControlsBtn.textContent = '工具栏 ▲';
            
            // 等待过渡效果完成后完全隐藏元素
            setTimeout(() => {
                controlsPanel.style.display = 'none';
            }, 300); // 与CSS过渡时间相匹配
        } else {
            // 展开工具栏
            controlsPanel.style.display = 'flex';
            // 使用setTimeout确保display更改已应用
            setTimeout(() => {
                controlsPanel.style.opacity = '1';
            }, 10);
            toggleControlsBtn.textContent = '工具栏 ▼';
        }
    });

    
    const galaxyScene = document.getElementById('galaxy-scene');
    
    // 鼠标移动事件
    galaxyScene.addEventListener('mousemove', onMouseMove);
    
    // 鼠标点击事件
    galaxyScene.addEventListener('click', onMouseClick);
    
    // 添加鼠标按下和抬起事件，优化平移体验
    galaxyScene.addEventListener('mousedown', function(event) {
        // 中键（滚轮按下）或右键按下时，优先用于平移
        if (event.button === 1 || event.button === 2) {
            controls.enablePan = true;
        }
    });
    
    // 阻止右键菜单，使右键可用于平移
    galaxyScene.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });
    
    // 添加触摸事件处理，防止双指缩放时触发页面缩放
    galaxyScene.addEventListener('touchstart', function(event) {
        // 如果有多个触摸点（如双指缩放），阻止默认行为
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, { passive: false });
    
    galaxyScene.addEventListener('touchmove', function(event) {
        // 如果有多个触摸点，阻止默认行为
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, { passive: false });
    
    galaxyScene.addEventListener('wheel', function(event) {
        // 阻止滚轮事件冒泡，防止页面滚动
        event.stopPropagation();
    });
    
    // 控制面板事件
    document.getElementById('search-btn').addEventListener('click', searchNode);
    document.getElementById('search-input').addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            searchNode();
        }
    });
    document.getElementById('reset-view').addEventListener('click', resetView);
    document.getElementById('toggle-simulation').addEventListener('click', toggleSimulation);
    document.getElementById('explode-view').addEventListener('click', explodeView);
    document.getElementById('toggle-theme').addEventListener('click', toggleTheme);
    document.getElementById('link-opacity').addEventListener('input', updateLinkOpacity);
    
    // 添加键盘事件支持平移
    document.addEventListener('keydown', function(event) {
        // 方向键控制平移
        switch(event.key) {
            case 'ArrowUp':
                controls.pan(0, controls.keyPanSpeed);
                break;
            case 'ArrowDown':
                controls.pan(0, -controls.keyPanSpeed);
                break;
            case 'ArrowLeft':
                controls.pan(controls.keyPanSpeed, 0);
                break;
            case 'ArrowRight':
                controls.pan(-controls.keyPanSpeed, 0);
                break;
        }
    });
}

// 鼠标移动事件处理
function onMouseMove(event) {
    // 计算鼠标位置的标准化设备坐标
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
    // 更新光线投射器
    raycaster.setFromCamera(mouse, camera);
    
    // 检查与节点的交叉
    const nodeObjectsArray = Object.values(nodeObjects);
    const intersects = raycaster.intersectObjects(nodeObjectsArray);
    
    // 隐藏信息面板
    const nodeInfo = document.getElementById('node-info');
    
    if (intersects.length > 0) {
        const intersectedNode = intersects[0].object;
        
        // 如果是新的交叉对象
        if (intersectedObject !== intersectedNode) {
            // 恢复之前的交叉对象
            if (intersectedObject) {
                resetHighlight(intersectedObject);
            }
            
            // 高亮当前交叉对象
            highlightNode(intersectedNode);
            intersectedObject = intersectedNode;
            
            // 显示节点信息
            const nodeData = intersectedNode.userData.node;
            document.getElementById('info-title').textContent = nodeData.name;
            document.getElementById('info-description').textContent = getNodeDescription(nodeData);
            
            // 定位信息面板
            const vector = new THREE.Vector3();
            vector.setFromMatrixPosition(intersectedNode.matrixWorld);
            vector.project(camera);
            
            const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
            const y = -(vector.y * 0.5 + 0.5) * window.innerHeight;
            
            nodeInfo.style.left = `${x + 20}px`;
            nodeInfo.style.top = `${y}px`;
            nodeInfo.classList.remove('hidden');
        }
    } else {
        // 如果没有交叉对象，恢复之前的交叉对象
        if (intersectedObject) {
            resetHighlight(intersectedObject);
            intersectedObject = null;
        }
        
        // 隐藏信息面板
        nodeInfo.classList.add('hidden');
    }
}

// 高亮节点
function highlightNode(node) {
    // 增大节点
    node.scale.set(1.3, 1.3, 1.3);
    
    // 增强发光效果
    if (node.children.length > 0) {
        const glowSphere = node.children[0];
        glowSphere.material.uniforms.c.value = 0.3;
        glowSphere.material.uniforms.p.value = 3.0;
    }
}

// 重置高亮
function resetHighlight(node) {
    // 恢复节点大小
    node.scale.set(1, 1, 1);
    
    // 恢复发光效果
    if (node.children.length > 0) {
        const glowSphere = node.children[0];
        glowSphere.material.uniforms.c.value = 0.2;
        glowSphere.material.uniforms.p.value = 4.0;
    }
}

// 全局变量，用于跟踪当前显示标签的节点
window.activeNode = null;

// 鼠标点击事件处理
function onMouseClick(event) {
    // 计算鼠标位置的标准化设备坐标
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
    // 更新光线投射器
    raycaster.setFromCamera(mouse, camera);
    
    // 检查与节点的交叉
    const nodeObjectsArray = Object.values(nodeObjects);
    const intersects = raycaster.intersectObjects(nodeObjectsArray);
    
    if (intersects.length > 0) {
        const intersectedNode = intersects[0].object;
        const nodeData = intersectedNode.userData.node;
        
        // 防止短时间内多次触发
        if (intersectedNode.userData.isAnimating) {
            return;
        }
        intersectedNode.userData.isAnimating = true;
        
        // 处理标签显示/隐藏
        if (window.activeNode === intersectedNode) {
            // 如果点击的是当前活跃节点，隐藏其标签
            hideAllLabels();
            window.activeNode = null;
        } else {
            // 隐藏所有标签，然后显示当前点击节点的标签
            hideAllLabels();
            showNodeLabel(intersectedNode);
            window.activeNode = intersectedNode;
        }
        
        // 触发爆炸式展开效果
        explodeNode(nodeData);
        
        // 1秒后重置动画状态标志
        setTimeout(() => {
            intersectedNode.userData.isAnimating = false;
        }, 1000);
    } else {
        // 点击空白区域，隐藏所有标签
        hideAllLabels();
        activeNode = null;
    }
}

// 爆炸式展开节点
function explodeNode(nodeData) {
    // 找到所有与该节点相关的子节点
    const childNodes = [];
    const childLinks = [];
    
    links.forEach(link => {
        if (link.source === nodeData.id) {
            childNodes.push(nodes.find(n => n.id === link.target));
            childLinks.push(link);
        }
    });
    
    if (childNodes.length === 0) return;
    
    // 计算爆炸方向
    const explosionFactor = 2;
    
    childNodes.forEach(childNode => {
        const nodeObj = nodeObjects[childNode.id];
        if (!nodeObj) return;
        
        // 获取当前位置
        const currentPos = nodeObj.position.clone();
        
        // 计算爆炸方向（从中心点向外）
        const direction = currentPos.clone().normalize();
        
        // 应用爆炸效果
        const targetPos = currentPos.clone().add(
            direction.multiplyScalar(explosionFactor * 20)
        );
        
        // 创建动画
        const duration = 1000; // 毫秒
        const startTime = Date.now();
        
        function animateExplosion() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // 使用缓动函数使动画更自然
            const easeOutBack = function(t) {
                const c1 = 1.70158;
                const c3 = c1 + 1;
                return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
            };
            
            const easedProgress = easeOutBack(progress);
            
            // 更新位置
            nodeObj.position.lerpVectors(
                currentPos,
                targetPos,
                easedProgress
            );
            
            if (progress < 1) {
                requestAnimationFrame(animateExplosion);
            }
        }
        
        animateExplosion();
    });
}

// 搜索节点
function searchNode() {
    const searchText = document.getElementById('search-input').value.trim().toLowerCase();
    
    if (!searchText) return;
    
    // 搜索匹配的节点
    const foundNode = nodes.find(node => node.name.toLowerCase().includes(searchText));
    
    if (foundNode) {
        // 聚焦到找到的节点
        const nodeObj = nodeObjects[foundNode.id];
        if (nodeObj) {
            // 创建动画，将相机移动到节点位置
            const targetPosition = nodeObj.position.clone();
            const startPosition = camera.position.clone();
            const direction = new THREE.Vector3().subVectors(targetPosition, startPosition).normalize();
            const distance = startPosition.distanceTo(targetPosition);
            const newPosition = new THREE.Vector3().addVectors(
                targetPosition,
                direction.multiplyScalar(-distance * 0.8)
            );
            
            // 动画相机移动
            const duration = 1000; // 毫秒
            const startTime = Date.now();
            
            function animateCamera() {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // 使用缓动函数
                const easeOutCubic = function(t) {
                    return 1 - Math.pow(1 - t, 3);
                };
                
                const easedProgress = easeOutCubic(progress);
                
                // 更新相机位置
                camera.position.lerpVectors(
                    startPosition,
                    newPosition,
                    easedProgress
                );
                
                // 更新控制器目标
                controls.target.lerpVectors(
                    new THREE.Vector3(),
                    targetPosition,
                    easedProgress
                );
                
                controls.update();
                
                if (progress < 1) {
                    requestAnimationFrame(animateCamera);
                } else {
                    // 高亮节点
                    highlightNode(nodeObj);
                    setTimeout(() => resetHighlight(nodeObj), 2000);
                }
            }
            
            animateCamera();
        }
    } else {
        alert('未找到匹配的内容');
    }
}

// 重置视图
function resetView() {
    // 重置相机位置到更远距离以显示整个星系图
    camera.position.set(0, 0, 800);
    controls.target.set(0, 0, 0);
    controls.update();
    
    // 重置节点位置
    simulation.alpha(1).restart();
}

// 切换物理模拟
function toggleSimulation() {
    isSimulationRunning = !isSimulationRunning;
    const button = document.getElementById('toggle-simulation');
    button.textContent = isSimulationRunning ? '暂停物理模拟' : '启动物理模拟';
    
    if (isSimulationRunning) {
        simulation.alpha(1).restart();
    } else {
        simulation.stop();
    }
}

// 爆炸视图
function explodeView() {
    const explosionFactor = 1.5;
    
    nodes.forEach(node => {
        const nodeObj = nodeObjects[node.id];
        if (!nodeObj) return;
        
        // 获取当前位置
        const currentPos = nodeObj.position.clone();
        
        // 计算爆炸方向（从中心点向外）
        const direction = currentPos.clone().normalize();
        
        // 应用爆炸效果
        const targetPos = currentPos.clone().add(
            direction.multiplyScalar(explosionFactor * 100)
        );
        
        // 创建动画
        const duration = 1500; // 毫秒
        const startTime = Date.now();
        
        function animateExplosion() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // 使用缓动函数
            const easeOutCubic = function(t) {
                return 1 - Math.pow(1 - t, 3);
            };
            
            const easedProgress = easeOutCubic(progress);
            
            // 更新位置
            nodeObj.position.lerpVectors(
                currentPos,
                targetPos,
                easedProgress
            );
            
            if (progress < 1) {
                requestAnimationFrame(animateExplosion);
            }
        }
        
        animateExplosion();
    });
    
    // 暂停物理模拟
    simulation.stop();
    isSimulationRunning = false;
    document.getElementById('toggle-simulation').textContent = '启动物理模拟';
}

// 更新连接线透明度
function updateLinkOpacity() {
    linkOpacity = parseFloat(document.getElementById('link-opacity').value);
    
    // 更新所有连接线的透明度
    for (const key in linkObjects) {
        const line = linkObjects[key];
        line.material.opacity = linkOpacity;
        
        // 确保连接线的渲染顺序和其他属性保持不变
        line.material.renderOrder = 1;
        line.material.depthTest = false;
        line.material.depthWrite = false;
        line.material.needsUpdate = true; // 确保材质更新
    }
}

// 获取节点描述
function getNodeDescription(node) {
    // 根据节点类型返回不同的描述
    if (node.depth === 0) {
        return '阅读能力体系是一个综合性的框架，包含了从基础的解码与提取到高级的创意与应用等多个维度的能力。点击各个节点可以展开相应的子能力点。';
    } else if (node.depth === 1) {
        switch (node.name) {
            case '解码与提取':
                return '解码与提取是阅读的基础能力，包括从文本中提取信息和理解字词本意的能力。这是阅读理解的第一步，为后续的深度理解奠定基础。';
            case '整合与概括':
                return '整合与概括能力帮助读者将分散的信息组织起来，形成对文本的整体理解。这包括梳理思路和概括大意两个关键方面。';
            case '解释与延展':
                return '解释与延展能力使读者能够理解文本的隐含信息，通过想象力拓展文本内容，体会思想感情，并分析写作意图。';
            case '鉴赏与评判':
                return '鉴赏与评判能力让读者能够赏析形象、品析语言和评析结构，是较高层次的阅读能力。';
            case '创意与应用':
                return '创意与应用是阅读能力的最高层次，包括复述、创意表达，以及运用阅读解决实际问题的能力。';
            default:
                return '这是阅读能力体系的重要组成部分。';
        }
    } else if (node.depth === 2) {
        // 二级能力点的描述
        const descriptions = {
            '提取与筛选信息': '从文本中识别和提取关键信息的能力，是阅读理解的基础。',
            '理解字词本意': '准确理解词语、句子基本含义的能力，是文本解码的重要环节。',
            '梳理思路': '将文本信息进行分类整理，理清文本逻辑关系的能力。',
            '概括大意': '抓住文本主要内容，提炼中心思想的能力。',
            '理解隐含信息': '理解文本中未明确表达但暗含的信息和意义的能力。',
            '想象拓展': '基于文本进行合理想象和延伸思考的能力。',
            '体会思想感情': '感受和理解作者在文本中表达的情感和态度的能力。',
            '分析写作意图': '理解作者写作目的和意图的能力。',
            '赏析形象': '欣赏和分析文本中塑造的人物形象的能力。',
            '品析语言': '欣赏和评价文本语言运用的能力。',
            '评析结构': '分析和评价文本结构安排的能力。',
            '复述': '用自己的话语复述文本内容的能力。',
            '创意表达': '将阅读所得转化为个人创意表达的能力。',
            '解决问题': '运用阅读策略和方法解决实际问题的能力。'
        };
        return descriptions[node.name] || '这是阅读能力的重要组成部分。';
    } else {
        // 具体能力点的描述
        return '这是一种具体的阅读方法和策略，通过练习可以提升相应的阅读能力。';
    }
}

// 动画循环
function animate() {
    requestAnimationFrame(animate);
    
    // 更新轨道控制器
    controls.update();
    
    // 更新物理模拟
    if (isSimulationRunning) {
        simulation.tick();
        
        // 更新节点位置
        nodes.forEach(node => {
            const obj = nodeObjects[node.id];
            if (obj && node.x !== undefined && node.y !== undefined) {
                obj.position.x = node.x;
                obj.position.y = node.y;
                obj.position.z = node.z || 0;
                
                // 更新发光效果的视图向量
                if (obj.children.length > 0) {
                    const glowSphere = obj.children[0];
                    glowSphere.material.uniforms.viewVector.value = 
                        new THREE.Vector3().subVectors(camera.position, obj.position);
                }
            }
        });
        
        // 更新连接线位置和可见性
        links.forEach(link => {
            // 处理link.source和link.target可能是对象或ID的情况
            const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
            const targetId = typeof link.target === 'object' ? link.target.id : link.target;
            
            const line = linkObjects[`${sourceId}-${targetId}`];
            if (line) {
                const sourceObj = nodeObjects[sourceId];
                const targetObj = nodeObjects[targetId];
                
                if (sourceObj && targetObj) {
                    const positions = line.geometry.attributes.position.array;
                    
                    positions[0] = sourceObj.position.x;
                    positions[1] = sourceObj.position.y;
                    positions[2] = sourceObj.position.z;
                    
                    positions[3] = targetObj.position.x;
                    positions[4] = targetObj.position.y;
                    positions[5] = targetObj.position.z;
                    
                    line.geometry.attributes.position.needsUpdate = true;
                    
                    // 计算连线中点到相机的距离
                    const midPoint = new THREE.Vector3(
                        (sourceObj.position.x + targetObj.position.x) / 2,
                        (sourceObj.position.y + targetObj.position.y) / 2,
                        (sourceObj.position.z + targetObj.position.z) / 2
                    );
                    const distanceToCamera = camera.position.distanceTo(midPoint);
                    
                    // 确保连线在任何缩放级别下都保持可见
                    // 根据相机距离动态调整不透明度，距离越远不透明度越高
                    // 这样在放大时连线不会消失
                    const minOpacity = 0.3; // 最小不透明度
                    const maxOpacity = 1.0; // 最大不透明度
                    const distanceFactor = Math.min(1, distanceToCamera / 1000);
                    const dynamicOpacity = minOpacity + (maxOpacity - minOpacity) * distanceFactor;
                    
                    // 更新线条不透明度，确保始终可见
                    line.material.opacity = Math.max(linkOpacity, dynamicOpacity);
                    line.material.visible = true; // 确保线条始终可见
                }
            }
        });
    }
    
    // 更新标签位置
    updateLabels();
    
    // 旋转背景粒子系统
    if (particleSystem) {
        particleSystem.rotation.y += 0.0001;
        particleSystem.rotation.x += 0.00005;
    }
    
    // 更新控制器
    controls.update();
    
    // 渲染场景
    renderer.render(scene, camera);
}

// 在D3力导向布局的每次tick时更新节点位置
// 确保simulation已定义后再添加事件监听器
function setupSimulationTick() {
    // 不需要在这里添加tick事件监听器
    // 因为我们已经在animate函数中直接调用simulation.tick()
    // 这样可以避免重复更新和可能的冲突
    console.log('物理模拟初始化完成');
}