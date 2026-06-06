const siteContent = {
  zh: {
    meta: {
      lang: 'zh-CN',
      title: '星翊科技有限公司｜数字基础设施解决方案',
      description: '星翊科技有限公司，区域适配型 ICT + AI 基础设施解决方案提供商，业务覆盖智算基础设施、通信网络、全光网络与新能源储能。'
    },
    brand: {
      name: '星翊科技',
      subtitle: 'STARWING TECHNOLOGY CO., LTD.',
      logoAlt: '星翊科技标志'
    },
    navigation: [
      { label: '首页', target: 'hero' },
      { label: '产品实景', target: 'products' },
      { label: '核心业务', target: 'business' },
      { label: '技术优势', target: 'advantages' },
      { label: '服务能力', target: 'services' },
      { label: '行业应用', target: 'industries' },
      { label: '关于我们', target: 'about' },
      { label: '联系我们', target: 'contact' }
    ],
    header: {
      consult: '立即咨询',
      languageLabel: 'EN',
      languageAria: 'Switch to English',
      openMenu: '打开菜单',
      closeMenu: '关闭菜单'
    },
    hero: {
      kicker: '通信｜算力｜光网｜能源｜连接无限可能',
      title: '星耀数字时代',
      highlight: '连接无限可能',
      description: '星翊科技有限公司聚焦通信网络、智算基础设施、全光网络与新能源储能，面向不同国家、区域与产业阶段，提供区域适配型 ICT + AI 基础设施解决方案。',
      tags: ['一国一策', '一域一网', '5G-A', '算网融合', '绿色低碳', '规建优维营'],
      primaryAction: '查看产品实景',
      secondaryAction: '获取解决方案',
      visualTitle: '真实业务场景',
      products: [
        { label: '智算基础设施', image: 'figs/business-ai-card.jpg' },
        { label: '通信网络建设', image: 'figs/business-5g-card.jpg' },
        { label: '全光网络解决方案', image: 'figs/business-optical-card.jpg' },
        { label: '新能源与储能', image: 'figs/business-energy-card.jpg' }
      ],
      stats: [
        { value: '4', label: '核心业务方向' },
        { value: '5', label: '技术优势体系' },
        { value: '8', label: '行业应用场景' },
        { value: '7×24', label: '运维响应保障' }
      ]
    },
    products: {
      eyebrow: 'Real Product Showcase',
      title: '真实产品与场景展示',
      description: '图片选自企业资料中的真实设备与项目场景，直观呈现星翊科技在数字基础设施领域的产品集成与交付能力。',
      items: [
        {
          title: '智算机房实景',
          image: 'figs/business-ai-real.jpg',
          desc: '展示智算基础设施、算力中心和高密服务器部署场景。'
        },
        {
          title: '5G-A 通信站点',
          image: 'figs/business-5g-real.jpg',
          desc: '展示 5G / 5G-A 网络建设、站点部署与无线覆盖能力。'
        },
        {
          title: '全光接入与高速传输',
          image: 'figs/business-optical-real.jpg',
          desc: '展示全光接入、园区光网与数据中心互联场景。'
        },
        {
          title: '工商业储能项目',
          image: 'figs/business-energy-real.jpg',
          desc: '展示光储融合、工商业储能和绿色低碳能源项目。'
        },
        {
          title: '储能系统设备',
          image: 'figs/product-energy-system.png',
          desc: '面向储能与能源基础设施场景的一体化系统设备。'
        },
        {
          title: '智算硬件设备',
          image: 'figs/product-compute-module.png',
          desc: '面向服务器与模块化数据中心部署的智算硬件设备。'
        }
      ]
    },
    business: {
      eyebrow: 'Core Business',
      title: '四大核心业务',
      description: '聚焦数字基础设施建设，构建通信、算力、光网与能源协同发展的解决方案能力。',
      items: [
        {
          title: '智算基础设施',
          subtitle: 'AI 驱动 · 算力未来',
          image: 'figs/business-ai-card.jpg',
          intro: '围绕训练、推理、机房建设与高密算力部署，构建从硬件到平台的一体化智算底座。',
          tags: ['GPU 服务器与集群', 'AI 训练 / 推理平台', '算力中心建设', '液冷高密部署'],
          items: [
            '支持 GPU 服务器与集群规划部署',
            '支持训练、推理与边缘算力节点建设',
            '支持数据中心和算力中心整体建设',
            '支持液冷与高密部署，便于后续扩容'
          ]
        },
        {
          title: '通信网络建设',
          subtitle: '极速连接 · 智联未来',
          image: 'figs/business-5g-card.jpg',
          intro: '围绕 5G / 5G-A、承载网与专网建设，形成面向不同区域与场景的连接能力。',
          tags: ['5G / 5G-A 网络', '核心网与云网融合', 'OTN 光传输网络', '专网定制优化'],
          items: [
            '面向城市、园区、港口与矿山等场景进行网络规划',
            '支持 5G-A、确定性专网与云网协同建设',
            '提供承载网、OTN 光传输与接入优化能力',
            '兼顾覆盖、容量、低时延与高可靠需求'
          ]
        },
        {
          title: '全光网络解决方案',
          subtitle: '全光接入 · 高速可靠',
          image: 'figs/business-optical-card.jpg',
          intro: '围绕 50G PON、园区全光网和数据中心互联，打造高速、稳定、可扩展的光网络基础设施。',
          tags: ['50G PON 全光接入', '园区 / 企业全光网', '数据中心互联 DCI', '400G / 800G OTN'],
          items: [
            '提供园区、企业与校园等场景的全光网建设',
            '支持数据中心互联与高速传输网络规划',
            '具备面向未来演进的全光接入与承载能力',
            '帮助客户构建低时延、高可靠的连接底座'
          ]
        },
        {
          title: '新能源与储能',
          subtitle: '绿色低碳 · 可持续发展',
          image: 'figs/business-energy-card.jpg',
          intro: '围绕工商业储能、光储融合与智能 BMS，打造通信与能源双网协同的绿色基础设施能力。',
          tags: ['工商业储能系统', '光储融合方案', '智能 BMS 管理', '绿色低碳解决方案'],
          items: [
            '面向工商业场景提供储能系统与能源集成能力',
            '支持光储融合、混合供电与绿色站点建设',
            '支持智能 BMS 管理与能源监测',
            '助力客户降低能耗并提升供电韧性与运营效率'
          ]
        }
      ]
    },
    advantages: {
      eyebrow: 'Technical Strength',
      title: '五大技术优势',
      description: '围绕区域适配、算网协同、绿色低碳与全周期交付，构建可复制、可扩展、可运营的基础设施能力。',
      items: [
        {
          index: '01',
          title: '5G-A 全域连接',
          desc: '基于分区分级网络架构，构建精品网、专网与普惠网精准适配的连接体系。',
          bullets: ['适配核心城市、产业园区与偏远地区等多样化区域', '兼顾覆盖、体验、确定性与后续演进需求']
        },
        {
          index: '02',
          title: 'HI-NET 算网融合',
          desc: '统筹承载网络与算力资源规划，实现“用户在哪里，算力就在哪里”。',
          bullets: ['支撑数据中心互联、边缘算力部署与业务调度', '提升 AI、低时延与高价值业务的承载能力']
        },
        {
          index: '03',
          title: '绿色双网协同',
          desc: '通信网络与能源系统协同设计，支持低碳站点、储能系统与节能数据中心建设。',
          bullets: ['兼顾供电韧性、能耗控制与可持续发展', '适配不同区域的电力成本与供电条件']
        },
        {
          index: '04',
          title: '智慧行业赋能',
          desc: '以统一云网底座承载差异化行业应用，形成可复制、可扩展、可运营的行业方案。',
          bullets: ['覆盖工业园区、校园、港口、政府与教育等场景', '实现一套底座适配多场景并持续升级']
        },
        {
          index: '05',
          title: '全周期交付',
          desc: '围绕规、建、优、维、营一体化，提供从方案、交付到运维与持续增长的全流程服务。',
          bullets: ['项目管理、工程交付与运维支持一体协同', '服务价值从项目落地延伸至后续运营增长']
        }
      ]
    },
    services: {
      eyebrow: 'Service Capability',
      title: '我们的服务能力',
      description: '从前期咨询、方案设计到工程交付和持续运维，打造端到端服务闭环。',
      items: [
        { icon: '✦', title: '方案设计', desc: '需求分析、架构设计、项目梳理与定制化整体方案输出。' },
        { icon: '⬢', title: '产品集成', desc: '优质产品选型、系统集成与端到端方案打包交付。' },
        { icon: '⚙', title: '工程交付', desc: '专业施工、项目管理、联调验收与高质量按期交付。' },
        { icon: '☎', title: '运维服务', desc: '7×24 小时响应、远程支持、巡检维护与全生命周期保障。' },
        { icon: '✓', title: '技术支持', desc: '专家团队快速响应，持续优化升级与疑难问题支撑。' }
      ],
      processEyebrow: 'Delivery Process',
      processTitle: '项目交付流程',
      process: ['需求沟通', '现场调研', '方案设计', '产品集成', '工程实施', '交付验收', '运维保障']
    },
    industries: {
      eyebrow: 'Industry Application',
      title: '行业应用',
      description: '面向多行业数字化转型场景，提供稳定、高效、绿色的基础设施支撑。',
      items: [
        { icon: '📡', title: '运营商', desc: '网络升级、承载网与站点建设' },
        { icon: '🌐', title: '互联网', desc: '云网底座、数据中心与高速连接' },
        { icon: '🏛', title: '政府', desc: '数字治理、园区平台与信息化底座' },
        { icon: '💳', title: '金融', desc: '高可靠网络与低时延算力承载' },
        { icon: '⚡', title: '能源', desc: '储能系统、能源协同与低碳升级' },
        { icon: '🏭', title: '制造', desc: '园区专网、工业视觉与数字化应用' },
        { icon: '🎓', title: '教育', desc: '校园全光网、智慧教学与运维支撑' },
        { icon: '🚆', title: '交通', desc: '站点连接、视频回传与智能调度' }
      ]
    },
    about: {
      eyebrow: 'About Starwing',
      title: '星翊科技有限公司',
      introBefore: '星翊科技定位为',
      introStrong: '区域适配型 ICT + AI 基础设施解决方案提供商',
      introAfter: '，坚持“一国一策、一域一网”的核心理念，围绕通信网络、智算基础设施、全光网络与新能源储能等方向，帮助客户打造持续演进的数字基础设施能力。',
      points: [
        '区域适配型 ICT + AI 基础设施解决方案提供商',
        '面向不同国家、区域与产业阶段提供差异化方案',
        '围绕通信、算力、光网与能源提供一体化基础设施能力',
        '形成从方案设计到交付运维的端到端服务闭环'
      ],
      valuesLabel: '核心价值观',
      values: ['客户为本', '创新驱动', '实干笃行', '协同共赢'],
      visionLabel: '企业愿景',
      vision: '星耀数字时代，翊联万物未来。'
    },
    contact: {
      eyebrow: 'Contact Us',
      title: '获取专属解决方案',
      description: '欢迎留下项目需求。我们将结合建设场景、区域特征、预算与周期，为您提供更适配的数字基础设施方案。',
      labels: { phone: '电话：', email: '邮箱：', address: '地址：', website: '官网：' },
      info: {
        phone: '136 2848 9787',
        email: 'cqxingyi@163.com',
        address: '中国 · 重庆',
        website: 'www.starwingtech.com',
        qr: 'figs/qr-code.png'
      },
      qrAlt: '星翊科技二维码',
      qrTitle: '扫码关注',
      qrDescription: '了解更多企业信息与业务内容',
      form: {
        name: '您的姓名',
        company: '公司 / 单位名称',
        phone: '联系电话',
        requirement: '请选择需求类型',
        options: ['智算基础设施', '通信网络建设', '全光网络解决方案', '新能源与储能'],
        details: '请简单描述您的项目需求',
        submit: '提交需求',
        success: '提交成功，我们将尽快与您联系！'
      }
    },
    footer: {
      copyright: '© 2026 星翊科技有限公司 STARWING TECHNOLOGY CO., LTD. 保留所有权利。',
      backToTop: '返回顶部 ↑'
    }
  },
  en: {
    meta: {
      lang: 'en',
      title: 'Starwing Technology | Digital Infrastructure Solutions',
      description: 'Starwing Technology provides region-adaptive ICT and AI infrastructure solutions across intelligent computing, communications, all-optical networks, and energy storage.'
    },
    brand: {
      name: 'Starwing Technology',
      subtitle: 'ICT + AI INFRASTRUCTURE SOLUTIONS',
      logoAlt: 'Starwing Technology logo'
    },
    navigation: [
      { label: 'Home', target: 'hero' },
      { label: 'Showcase', target: 'products' },
      { label: 'Business', target: 'business' },
      { label: 'Strengths', target: 'advantages' },
      { label: 'Services', target: 'services' },
      { label: 'Industries', target: 'industries' },
      { label: 'About', target: 'about' },
      { label: 'Contact', target: 'contact' }
    ],
    header: {
      consult: 'Contact Us',
      languageLabel: '中文',
      languageAria: '切换至中文',
      openMenu: 'Open menu',
      closeMenu: 'Close menu'
    },
    hero: {
      kicker: 'CONNECTIVITY | COMPUTING | OPTICAL | ENERGY',
      title: 'Powering the Digital Era',
      highlight: 'Connecting Possibilities',
      description: 'Starwing Technology delivers region-adaptive ICT and AI infrastructure solutions across communications, intelligent computing, all-optical networks, and new energy storage for markets at different stages of development.',
      tags: ['Country-Specific', 'Region-Adapted', '5G-A', 'Compute-Network', 'Green & Low-Carbon', 'Full Lifecycle'],
      primaryAction: 'View Showcase',
      secondaryAction: 'Get a Solution',
      visualTitle: 'Real-World Applications',
      products: [
        { label: 'Intelligent Computing', image: 'figs/business-ai-card.jpg' },
        { label: 'Communication Networks', image: 'figs/business-5g-card.jpg' },
        { label: 'All-Optical Networks', image: 'figs/business-optical-card.jpg' },
        { label: 'New Energy & Storage', image: 'figs/business-energy-card.jpg' }
      ],
      stats: [
        { value: '4', label: 'Core Business Areas' },
        { value: '5', label: 'Technical Strengths' },
        { value: '8', label: 'Industry Scenarios' },
        { value: '24/7', label: 'Operations Support' }
      ]
    },
    products: {
      eyebrow: 'Real Product Showcase',
      title: 'Products and Project Showcase',
      description: 'Selected from real equipment and project materials, these images demonstrate Starwing Technology’s integration and delivery capabilities across digital infrastructure.',
      items: [
        {
          title: 'AI Computing Facility',
          image: 'figs/business-ai-real.jpg',
          desc: 'High-density server deployment for intelligent computing and data center environments.'
        },
        {
          title: '5G-A Communication Site',
          image: 'figs/business-5g-real.jpg',
          desc: '5G and 5G-A network construction, site deployment, and wireless coverage.'
        },
        {
          title: 'All-Optical Connectivity',
          image: 'figs/business-optical-real.jpg',
          desc: 'All-optical access, campus networks, and data center interconnection.'
        },
        {
          title: 'Commercial Energy Storage',
          image: 'figs/business-energy-real.jpg',
          desc: 'Solar-storage integration and low-carbon energy projects for commercial use.'
        },
        {
          title: 'Energy Storage System',
          image: 'figs/product-energy-system.png',
          desc: 'Integrated equipment for energy storage and energy infrastructure deployments.'
        },
        {
          title: 'Computing Hardware',
          image: 'figs/product-compute-module.png',
          desc: 'Hardware designed for server and modular data center deployment.'
        }
      ]
    },
    business: {
      eyebrow: 'Core Business',
      title: 'Four Core Business Areas',
      description: 'Building coordinated capabilities across communications, computing, optical networks, and energy infrastructure.',
      items: [
        {
          title: 'Intelligent Computing Infrastructure',
          subtitle: 'AI-Driven · Compute the Future',
          image: 'figs/business-ai-card.jpg',
          intro: 'An integrated computing foundation spanning hardware, platforms, training, inference, data center construction, and high-density deployment.',
          tags: ['GPU Servers & Clusters', 'AI Training / Inference', 'Compute Centers', 'Liquid Cooling'],
          items: [
            'GPU server and cluster planning and deployment',
            'Training, inference, and edge computing nodes',
            'End-to-end data center and compute center construction',
            'Liquid-cooled, high-density designs ready for expansion'
          ]
        },
        {
          title: 'Communication Network Construction',
          subtitle: 'High-Speed Connectivity · Intelligent Future',
          image: 'figs/business-5g-card.jpg',
          intro: '5G, 5G-A, transport, and private network capabilities tailored to diverse regions and operating scenarios.',
          tags: ['5G / 5G-A', 'Core & Cloud Networks', 'OTN Transport', 'Private Networks'],
          items: [
            'Network planning for cities, campuses, ports, and mines',
            '5G-A, deterministic private networks, and cloud-network coordination',
            'Transport, OTN optical transmission, and access optimization',
            'Balanced coverage, capacity, low latency, and reliability'
          ]
        },
        {
          title: 'All-Optical Network Solutions',
          subtitle: 'All-Optical Access · High-Speed Reliability',
          image: 'figs/business-optical-card.jpg',
          intro: 'High-speed, stable, and scalable optical infrastructure built around 50G PON, campus all-optical networks, and data center interconnects.',
          tags: ['50G PON', 'Campus / Enterprise', 'Data Center DCI', '400G / 800G OTN'],
          items: [
            'All-optical networks for campuses, enterprises, and education',
            'Data center interconnect and high-speed transport planning',
            'Future-ready optical access and transport capabilities',
            'Low-latency, highly reliable connectivity foundations'
          ]
        },
        {
          title: 'New Energy and Storage',
          subtitle: 'Green Infrastructure · Sustainable Growth',
          image: 'figs/business-energy-card.jpg',
          intro: 'Green infrastructure combining commercial energy storage, solar-storage integration, intelligent BMS, communications, and energy systems.',
          tags: ['Commercial Storage', 'Solar + Storage', 'Intelligent BMS', 'Low-Carbon Solutions'],
          items: [
            'Energy storage systems and integration for commercial applications',
            'Solar-storage integration, hybrid power, and green sites',
            'Intelligent BMS management and energy monitoring',
            'Lower energy use with stronger power resilience and efficiency'
          ]
        }
      ]
    },
    advantages: {
      eyebrow: 'Technical Strength',
      title: 'Five Technical Strengths',
      description: 'Scalable, repeatable, and operable infrastructure built on regional adaptation, compute-network coordination, sustainability, and full-lifecycle delivery.',
      items: [
        {
          index: '01',
          title: 'Ubiquitous 5G-A Connectivity',
          desc: 'Tiered network architecture precisely aligns premium, private, and inclusive networks with local requirements.',
          bullets: ['Adapted for major cities, industrial parks, and remote regions', 'Balances coverage, experience, determinism, and evolution']
        },
        {
          index: '02',
          title: 'HI-NET Compute-Network Integration',
          desc: 'Coordinated planning of transport networks and computing resources brings computing power closer to every user.',
          bullets: ['Supports DCI, edge computing deployment, and workload scheduling', 'Strengthens AI, low-latency, and high-value service delivery']
        },
        {
          index: '03',
          title: 'Green Dual-Network Coordination',
          desc: 'Communication and energy systems are designed together for low-carbon sites, storage systems, and efficient data centers.',
          bullets: ['Balances power resilience, energy control, and sustainability', 'Adapts to regional power costs and supply conditions']
        },
        {
          index: '04',
          title: 'Industry Intelligence',
          desc: 'A unified cloud-network foundation supports differentiated applications and repeatable industry solutions.',
          bullets: ['Covers industrial parks, campuses, ports, government, and education', 'One foundation supports multiple scenarios and continuous upgrades']
        },
        {
          index: '05',
          title: 'Full-Lifecycle Delivery',
          desc: 'Integrated planning, construction, optimization, maintenance, and operations from solution design through long-term growth.',
          bullets: ['Coordinated project management, engineering, and operations support', 'Extends value from initial delivery to ongoing operations']
        }
      ]
    },
    services: {
      eyebrow: 'Service Capability',
      title: 'End-to-End Service Capabilities',
      description: 'A complete service loop from early consulting and solution design to engineering delivery and ongoing operations.',
      items: [
        { icon: '✦', title: 'Solution Design', desc: 'Requirements analysis, architecture design, project planning, and tailored solution development.' },
        { icon: '⬢', title: 'Product Integration', desc: 'Product selection, system integration, and packaged end-to-end delivery.' },
        { icon: '⚙', title: 'Engineering Delivery', desc: 'Professional implementation, project management, integration testing, and acceptance.' },
        { icon: '☎', title: 'Operations Services', desc: '24/7 response, remote support, inspections, maintenance, and lifecycle assurance.' },
        { icon: '✓', title: 'Technical Support', desc: 'Expert response, continuous optimization, upgrades, and complex issue resolution.' }
      ],
      processEyebrow: 'Delivery Process',
      processTitle: 'Project Delivery Process',
      process: ['Requirements', 'Site Survey', 'Solution Design', 'Integration', 'Implementation', 'Acceptance', 'Operations']
    },
    industries: {
      eyebrow: 'Industry Applications',
      title: 'Industries We Serve',
      description: 'Stable, efficient, and sustainable infrastructure for digital transformation across diverse industries.',
      items: [
        { icon: '📡', title: 'Telecom', desc: 'Network upgrades, transport networks, and site construction' },
        { icon: '🌐', title: 'Internet', desc: 'Cloud-network foundations, data centers, and high-speed connectivity' },
        { icon: '🏛', title: 'Government', desc: 'Digital governance, campus platforms, and information infrastructure' },
        { icon: '💳', title: 'Finance', desc: 'Highly reliable networks and low-latency computing transport' },
        { icon: '⚡', title: 'Energy', desc: 'Storage systems, energy coordination, and low-carbon upgrades' },
        { icon: '🏭', title: 'Manufacturing', desc: 'Campus private networks, machine vision, and digital applications' },
        { icon: '🎓', title: 'Education', desc: 'All-optical campuses, smart learning, and operations support' },
        { icon: '🚆', title: 'Transportation', desc: 'Site connectivity, video backhaul, and intelligent dispatch' }
      ]
    },
    about: {
      eyebrow: 'About Starwing',
      title: 'Starwing Technology Co., Ltd.',
      introBefore: 'Starwing Technology is a ',
      introStrong: 'region-adaptive ICT and AI infrastructure solution provider',
      introAfter: '. Guided by country-specific and region-adapted strategies, we help customers build continuously evolving digital infrastructure across communications, intelligent computing, all-optical networks, and new energy storage.',
      points: [
        'Region-adaptive ICT and AI infrastructure solutions',
        'Differentiated strategies for countries, regions, and development stages',
        'Integrated communications, computing, optical, and energy capabilities',
        'End-to-end service from solution design to delivery and operations'
      ],
      valuesLabel: 'Core Values',
      values: ['Customer First', 'Innovation Driven', 'Execution Focused', 'Shared Success'],
      visionLabel: 'Our Vision',
      vision: 'Power the digital era and connect the possibilities of tomorrow.'
    },
    contact: {
      eyebrow: 'Contact Us',
      title: 'Request a Tailored Solution',
      description: 'Tell us about your project. We will consider your operating environment, regional requirements, budget, and timeline to develop a better-fit digital infrastructure solution.',
      labels: { phone: 'Phone: ', email: 'Email: ', address: 'Address: ', website: 'Website: ' },
      info: {
        phone: '+86 136 2848 9787',
        email: 'cqxingyi@163.com',
        address: 'Chongqing, China',
        website: 'www.starwingtech.com',
        qr: 'figs/qr-code.png'
      },
      qrAlt: 'Starwing Technology QR code',
      qrTitle: 'Scan to Connect',
      qrDescription: 'Discover more about our company and capabilities',
      form: {
        name: 'Your name',
        company: 'Company / Organization',
        phone: 'Phone number',
        requirement: 'Select a solution area',
        options: ['Intelligent Computing', 'Communication Networks', 'All-Optical Networks', 'New Energy & Storage'],
        details: 'Tell us briefly about your project',
        submit: 'Submit Inquiry',
        success: 'Thank you. We will contact you shortly.'
      }
    },
    footer: {
      copyright: '© 2026 Starwing Technology Co., Ltd. All Rights Reserved.',
      backToTop: 'Back to Top ↑'
    }
  }
};
