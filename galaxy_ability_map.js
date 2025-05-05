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
                        { name: "通过重复、有规律的句式，提取核心信息" },
                        { name: "通过串联因果关系，提取关键词" },
                        { name: "根据简单提示，提取明显信息" },
                        { name: "根据生活经验，提取信息" }
                    ]
                },
                {
                    name: "理解字词本意",
                    children: [
                        { name: "通过文本外的演示，理解词语的意思" },
                        { name: "借助资料，理解字词句意思" },
                        { name: "借助表演，理解字词句的意思" },
                        { name: "联系近义词或反义词，理解字词句意思" }
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
                        { name: "借助图片，将关键信息分类" },
                        { name: "借助关键词，将信息分类" },
                        { name: "借助逻辑关系，列出信息间的关系" },
                        { name: "借助关键词，梳理事件的不同阶段" }
                    ]
                },
                {
                    name: "概括大意",
                    children: [
                        { name: "借助关键信息，概括大意" },
                        { name: "通过理解文言文的意思，把握文言文大意" },
                        { name: "运用串联段意的方法，概括大意" },
                        { name: "总结多个事件，把握全文大意" },
                        { name: "通过事件发展顺序，把握全文大意" },
                        { name: "结合不同方面的描写，把握全文大意" }
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
                        { name: "联系上下文，理解字词句在文中的意思" },
                        { name: "结合生活经验，理解字词句在文中的意思" },
                        { name: "想象画面，理解字词句在文中的的意思" },
                        { name: "借助多种资料，理解字词句在文中的意思" },
                        { name: "结合生活经验，理解词语的隐含意思" },
                        { name: "综合多种角度，理解文言字词的意思" }
                    ]
                },
                {
                    name: "分析思想感情或写作意图",
                    children: [
                        { name: "联系生活经验，把握思想感情和写作意图" },
                        { name: "联系上下文，把握思想感情和写作意图" },
                        { name: "通过想象画面，体会思想感情" },
                        { name: "通过具体情节描写，体会思想感情" },
                        { name: "结合具体描写，体会思想感情" },
                        { name: "综合多个方面，体会思想感情" },
                        { name: "借助抒情，把握思想感情和写作意图" },
                        { name: "借助资料，把握思想感情和写作意图" }
                    ]
                },
                {
                    name: "想象拓展",
                    children: [
                        { name: "根据插图，想象画面" },
                        { name: "根据文字描述，想象画面" },
                        { name: "联系生活经验，想象画面" },
                        { name: "联系生活经验，想象画面与情感" },
                        { name: "联系生活经验，想象画面与意境" },
                        { name: "结合多种背景资料，想象画面、情感与意境" }
                    ]
                }
            ]
        },
        {
            name: "鉴赏与评判",
            children: [
                {
                    name: "鉴赏语言与结构表达",
                    children: [
                        { name: "通过比较，体会表达效果" },
                        { name: "通过修辞手法，体会表达效果" },
                        { name: "通过不同句式，体会表达效果" },
                        { name: "通过拟声词，体会表达效果" },
                        { name: "通过表达方式，体会表达效果" },
                        { name: "通过语言风格，体会表达效果" },
                        { name: "通过写作手法，体会表达效果" },
                        { name: "通过说明方法，体会表达效果" },
                        { name: "通过写作顺序，体会表达效果" },
                        { name: "通过文章结构，体会表达效果" },
                        { name: "通过朗读，体会表达效果" }
                    ]
                },
                {
                    name: "评价文本内容",
                    children: [
                        { name: "借助人物，评价赏析文本" },
                        { name: "借助事件，评价赏析文本" },
                        { name: "联系生活实际，评价赏析文本" },
                        { name: "通过比较阅读，评价赏析文本" },
                        { name: "结合相关资料，评价赏析文本" }
                    ]
                }
            ]
        },
        {
            name: "创意与应用",
            children: [
                {
                    name: "思维表达",
                    children: [
                        { name: "根据文本内容，进行表达" },
                        { name: "发散想象，进行表达" },
                        { name: "转换角度，进行表达" },
                        { name: "通过改编，进行表达" },
                        { name: "结合资料，进行表达" },
                        { name: "联系观点，进行表达" }
                    ]
                },
                {
                    name: "解决问题",
                    children: [
                        { name: "通过阅读，解决问题" },
                        { name: "通过请教，解决问题" },
                        { name: "通过讨论，解决问题" },
                        { name: "通过观察记录，解决问题" }
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
let linkOpacity = 1.0;
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
    
    // 开始动画循环
    animate();
});

// 初始化主题
function initTheme() {
    // 从localStorage获取保存的主题偏好
    const savedTheme = localStorage.getItem('theme');
    
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

// 更新根节点颜色
function updateRootNodeColor(theme) {
    // 查找根节点
    const rootNode = nodes.find(n => n.depth === 0);
    if (rootNode && nodeObjects[rootNode.id]) {
        const rootObj = nodeObjects[rootNode.id];
        const color = theme === 'light' ? "#333333" : "#ffffff";
        
        // 更新材质颜色
        if (rootObj.material) {
            rootObj.material.color.set(color);
            rootObj.material.emissive.set(color);
        }
        
        // 更新发光效果颜色
        if (rootObj.children && rootObj.children.length > 0) {
            const glowSphere = rootObj.children[0];
            if (glowSphere.material && glowSphere.material.uniforms) {
                glowSphere.material.uniforms.glowColor.value.set(color);
            }
        }
    }
}

// 初始化Three.js场景
function initThreeJS() {
    // 创建场景
    scene = new THREE.Scene();
    
    // 创建相机
    const width = document.getElementById('galaxy-scene').clientWidth;
    const height = document.getElementById('galaxy-scene').clientHeight;
    camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 10000);
    camera.position.z = 500;
    
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
    controls.maxDistance = 1000; // 设置最大缩放距离
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
            shininess: 100
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
                    gl_FragColor = vec4(glow, 1.0);
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
        const material = new THREE.LineBasicMaterial({
            color: new THREE.Color(color),
            transparent: true,
            opacity: linkOpacity,
            linewidth: 1
        });
        
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
        // 一级节点标签始终可见
        labelDiv.style.opacity = '1';
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
    labelDiv.style.pointerEvents = 'none';
    labelDiv.style.whiteSpace = 'nowrap';
    labelDiv.style.transition = 'opacity 0.3s';
    labelDiv.style.textShadow = '0 0 3px rgba(0,0,0,0.8)';
    
    // 将标签添加到DOM
    document.getElementById('galaxy-scene').appendChild(labelDiv);
    
    // 存储标签引用到节点对象
    parent.userData.label = labelDiv;
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
            if (obj !== activeNode) {
                // 根据节点深度和距离调整标签可见性
                const node = obj.userData.node;
                
                // 只有根节点和第一级节点的标签默认可见
                if (node.depth <= 1) {
                    // 如果在屏幕内，则始终显示
                    if (!(vector.z > 1 || Math.abs(vector.x) > 1 || Math.abs(vector.y) > 1)) {
                        label.style.opacity = '1'; // 始终可见
                    }
                } else {
                    // 其他深度的节点根据距离动态调整可见性
                    // 设置不同深度节点的可见距离阈值
                    const visibilityThresholds = {
                        2: 1000,  // 二级节点在较近距离可见
                        3: 500,  // 三级节点需要更近的距离才可见
                        4: 300    // 四级及更深节点在非常近的距离可见
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
    const baseSize = 5 - node.depth * 0.8;
    const childBonus = node.children ? Math.min(node.children, 10) * 0.3 : 0;
    return Math.max(baseSize + childBonus, 1.5);
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
        return currentTheme === 'light' ? "#333333" : "#ffffff"; // 浅色主题下为黑灰色，深色主题下为白色
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
let activeNode = null;

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
        
        // 处理标签显示/隐藏
        if (activeNode === intersectedNode) {
            // 如果点击的是当前活跃节点，隐藏其标签
            hideAllLabels();
            activeNode = null;
        } else {
            // 隐藏所有标签，然后显示当前点击节点的标签
            hideAllLabels();
            showNodeLabel(intersectedNode);
            activeNode = intersectedNode;
        }
        
        // 触发爆炸式展开效果
        explodeNode(nodeData);
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
    // 重置相机位置
    camera.position.set(0, 0, 500);
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
                return '解释与延展能力使读者能够理解文本的隐含信息，分析作者的思想感情和写作意图，并通过想象力拓展文本内容。';
            case '鉴赏与评判':
                return '鉴赏与评判能力让读者能够欣赏文本的语言和结构表达，并对文本内容进行评价。这是较高层次的阅读能力。';
            case '创意与应用':
                return '创意与应用是阅读能力的最高层次，包括将阅读所得转化为思维表达，以及运用阅读解决实际问题的能力。';
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
            '分析思想感情或写作意图': '理解作者情感态度和写作目的的能力。',
            '想象拓展': '基于文本进行合理想象和延伸思考的能力。',
            '鉴赏语言与结构表达': '欣赏和评价文本语言运用和结构安排的能力。',
            '评价文本内容': '对文本内容进行分析、判断和评价的能力。',
            '思维表达': '将阅读所得转化为个人思考和表达的能力。',
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
        
        // 更新连接线位置
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