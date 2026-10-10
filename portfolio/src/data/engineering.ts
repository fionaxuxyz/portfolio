import type { Copy, LinkCopy } from '../types'

/**
 * Body copy is the full bilingual Engineering Focus from the profile README
 * before it was flattened into the SVG grid (commit 1a8f88acb2).
 * Titles stay bilingual in both languages. Do not replace this with the
 * shortened card text.
 */
export interface FocusArea {
  index: string
  mark: string
  title: Copy
  body: { zh: string[]; en: string[] }
  stack: string[]
}

export const focusAreas: FocusArea[] = [
  {
    index: '01',
    mark: '🎀',
    title: {
      zh: '产品工程与前端开发',
      en: 'Product & Front-End Engineering',
    },
    body: {
      zh: [
        '我喜欢从产品本身出发思考技术问题。比起单纯实现一个页面，我更在意整个交互流程是否自然、功能是否真正解决问题，以及代码是否能够支撑产品继续迭代。',
        '熟悉 React 生态，有复杂交互、状态同步、数据可视化和完整 Web 应用开发经验。也很喜欢研究界面设计与产品体验，希望把工程能力和审美结合起来。',
      ],
      en: [
        "I like approaching engineering problems from the product's point of view. Beyond implementing a page, I care about whether the flow is intuitive, the feature solves a genuine problem, and the code can support future iteration.",
        'I work with the React ecosystem and have experience in complex interactions, synchronized state, data visualization, and end-to-end web products. I enjoy combining engineering rigor with visual judgment.',
      ],
    },
    stack: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Vite',
      'REST API',
      'Responsive Design',
    ],
  },
  {
    index: '02',
    mark: '🤖',
    title: {
      zh: 'AI Native 与 Agent Harness',
      en: 'AI-Native & Agent Harness',
    },
    body: {
      zh: [
        '我对 AI 的兴趣，始于它让很多过去只能停留在想象中的产品有了实现的可能。',
        '但真正开始做 Agent 之后，我发现让大模型回答问题，和让一个 AI 系统可靠地完成任务，完全是两回事。',
        '我关注如何把 LLM 与业务工具、数据检索、长期记忆和真实应用结合起来，构建能够理解意图、获取证据、使用工具并持续交互的 AI Native 产品。',
        '同时，也在实践 Agent Harness 相关工程能力，包括工具执行边界、结构化校验、失败恢复、错误分类、Tracing、评测与回归测试。',
        '我希望做的不只是聪明的 AI Demo，而是真正可以交付和长期使用的 AI 应用。',
      ],
      en: [
        'What first excited me about AI was its ability to turn previously unrealistic product ideas into something buildable.',
        'But after building agents, I learned that making a model answer a question and making an AI system execute tasks reliably are two very different challenges.',
        "I'm interested in connecting LLMs with business tools, retrieval, persistent memory, and real applications — building AI-native experiences that interpret requests, gather evidence, use tools, and maintain context.",
        'I also work on agent harness concerns such as execution boundaries, structured validation, failure recovery, error classification, tracing, evaluation, and regression testing.',
        'I want to build more than clever AI demos: I want to build systems people can actually depend on.',
      ],
    },
    stack: [
      'Python',
      'FastAPI',
      'LLM API',
      'Tool Calling',
      'AI Agent',
      'RAG',
      'Embedding',
      'Vector Search',
      'PostgreSQL / pgvector',
      'Memory',
      'Evaluation',
      'Tracing',
    ],
  },
  {
    index: '03',
    mark: '🛠',
    title: {
      zh: '全栈开发与系统工程',
      en: 'Full-Stack & Systems',
    },
    body: {
      zh: [
        '虽然现在最喜欢的方向是前端与 AI，但我的项目经历并不局限于浏览器。',
        '我也做过不少 Java 后端开发，接触过完整的 Web 业务系统、数据库设计、消息队列与容器化环境。',
        '在开发 WiseSpend 时，也独立打通了 React、Spring Boot、PostgreSQL 与 Python AI Service 的完整链路。',
        '我喜欢理解一个产品从界面到服务器、从 API 到数据存储的整个运行过程，而不只是负责其中的一小部分。',
      ],
      en: [
        'Although front-end and AI engineering are my current favorites, my experience extends beyond the browser.',
        "I've worked on Java backends, full-stack business applications, database design, message queues, and containerized environments.",
        'For WiseSpend, I independently connected the full application path across React, Spring Boot, PostgreSQL, and a Python AI service.',
        'I like understanding how a product works end to end — from interface to server and from APIs to persistent data — rather than only owning one isolated part.',
      ],
    },
    stack: [
      'Java',
      'Spring Boot',
      'Python',
      'FastAPI',
      'PostgreSQL',
      'SQL',
      'Redis',
      'RabbitMQ',
      'Docker',
      'REST API',
      'Git',
    ],
  },
  {
    index: '04',
    mark: '🧊',
    title: {
      zh: '3D Web 与 Blender 建模',
      en: '3D Web & Blender',
    },
    body: {
      zh: [
        '我对 3D 的兴趣，来自一种很简单的想法：如果能把脑子里想象的东西直接做出来，一定很好玩。',
        '从浏览器端的 Three.js 交互，到 Blender 中的建筑与场景建模，我都很喜欢研究几何、空间、材质和用户交互之间的关系。',
        '在 3D 厨房设计项目中，我实践了参数化家具资产、坐标与尺寸体系、三维交互和设计状态联动。',
        '在山塘街项目中，我又尝试从建模与场景创作的角度表达空间和文化氛围。',
        '我希望未来能够继续探索 3D、Web 和 AI 结合的更多可能。',
      ],
      en: [
        'My interest in 3D started with a simple thought: it would be incredible to build the things I can imagine.',
        'From interactive Three.js experiences in the browser to architecture and scene modeling in Blender, I enjoy exploring the relationships between geometry, space, materials, and interaction.',
        'In the kitchen designer, I worked on parametric furniture, coordinate and dimension systems, spatial interaction, and synchronized design state.',
        "In Shantang Street, I explored how modeling and scene composition can express a place's spatial and cultural character.",
        "I'd love to keep exploring what becomes possible when 3D, the web, and AI meet.",
      ],
    },
    stack: [
      'Three.js',
      'React Three Fiber',
      'Blender',
      'WebGL',
      'Procedural Geometry',
      '3D Modeling',
      'Scene Composition',
    ],
  },
]

export interface PracticeProject {
  id: string
  index: string
  title: Copy
  body: { zh: string[]; en: string[] }
  practice: Copy
  stack: string
  link?: LinkCopy
}

export const practiceProjects: PracticeProject[] = [
  {
    id: 'personal-finance',
    index: '01',
    title: {
      zh: '个人财务管理系统 / Budget Tracker',
      en: 'Personal Finance Management System / Budget Tracker',
    },
    body: {
      zh: [
        '在这个团队项目中，我们围绕日常财务管理需求开发了一套 Web 应用，覆盖账户管理、交易记录、财务报表和数据分析等功能。',
        '它是我参与完整前后端协作的一次实践，也让我更系统地接触了业务数据管理、API 交互和前端可视化。',
      ],
      en: [
        'In this team project, we developed a personal finance web application covering account management, transactions, reports, and analytics.',
        'It gave me practical experience collaborating across the front-end and back-end, working with business data, integrating APIs, and building financial visualizations.',
      ],
    },
    practice: {
      zh: '参与账户、交易与报表模块开发；使用 React 构建可视化页面；通过 Spring Boot API 处理业务数据；支持报表分析与导出。',
      en: 'Contributed to account, transaction, and reporting workflows; built React data views; integrated Spring Boot APIs; supported analysis and report export.',
    },
    stack: 'React · Spring Boot · PostgreSQL · 团队项目 / Team project',
  },
  {
    id: 'online-store',
    index: '02',
    title: {
      zh: '企业电商系统',
      en: 'Enterprise Online Store',
    },
    body: {
      zh: [
        '一个围绕真实电商业务流程构建的后端工程项目。订单完成之后，还涉及配送请求、状态更新、消息通知等一系列异步操作。',
        '我们使用 Spring Boot、RabbitMQ 和 PostgreSQL 构建相关流程，探索如何通过消息机制让不同业务模块协作，而不是将所有操作紧密耦合在一起。',
      ],
      en: [
        'A back-end engineering project built around realistic e-commerce workflows. After placing an order, delivery requests, status updates, and notifications need to be coordinated asynchronously.',
        'We used Spring Boot, RabbitMQ, and PostgreSQL to explore how message-driven workflows can connect services without tightly coupling every operation.',
      ],
    },
    practice: {
      zh: 'RabbitMQ 异步消息、Spring Boot 服务与接口、PostgreSQL 数据存储、Docker 环境管理，以及事件驱动的模块解耦。',
      en: 'Asynchronous RabbitMQ messaging, Spring Boot services, PostgreSQL persistence, Docker-managed infrastructure, and event-driven decoupling.',
    },
    stack: 'Java · Spring Boot · RabbitMQ · PostgreSQL · Docker',
    link: {
      href: 'https://github.com/fionaxuxyz/Enterprise-Online-Store-',
      label: { zh: '查看代码', en: 'View repository' },
    },
  },
  {
    id: 'quiz-game',
    index: '03',
    title: {
      zh: 'Quiz Game · 互动答题小游戏',
      en: 'Quiz Game · Interactive Quiz',
    },
    body: {
      zh: [
        'Quiz Game 是一个围绕答题互动开发的 Web 项目，重点练习前端交互逻辑、用户操作反馈和应用状态管理。',
        '做小游戏很有意思的一点是：功能本身可能并不复杂，但想让每次点击、切换和反馈都顺畅自然，依然需要认真设计。',
      ],
      en: [
        'Quiz Game is a browser-based interactive quiz built to practice front-end interaction logic, feedback, and application state management.',
        'Even when the basic mechanics are simple, making each click, transition, and response feel natural takes careful thought.',
      ],
    },
    practice: {
      zh: 'JavaScript 答题流程、状态更新、用户反馈、HTML/CSS 页面结构与交互细节。',
      en: 'JavaScript quiz flows, state updates, user feedback, HTML/CSS page structure, and interaction details.',
    },
    stack: 'JavaScript · HTML · CSS',
    link: {
      href: 'https://github.com/fionaxuxyz/Quiz-Game-',
      label: { zh: '查看代码', en: 'View repository' },
    },
  },
]
