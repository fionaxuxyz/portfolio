import type { CoverId } from './covers'
import type { Copy, LinkCopy, NamedList } from '../types'

export type WorkLayout = 'feature' | 'split' | 'reverse' | 'type'

export interface Project {
  slug: string
  index: string
  layout: WorkLayout
  tone: 'butter' | 'lilac' | 'blush' | 'ink'
  title: Copy
  lede: Copy
  cover: CoverId | null
  coverAlt: Copy
  storyTitle: Copy
  story: { zh: string[]; en: string[] }
  groups: NamedList[]
  stackLabel: 'stack' | 'tools'
  stack: string
  meta: string
  links: LinkCopy[]
}

export const projects: Project[] = [
  {
    slug: 'wisespend',
    index: '01',
    layout: 'feature',
    tone: 'butter',
    title: { zh: '知省 WiseSpend', en: 'WiseSpend' },
    lede: {
      zh: 'AI 驱动的个人财务复盘助手',
      en: 'AI-powered personal finance reflection assistant',
    },
    cover: 'wisespend',
    coverAlt: {
      zh: '知省 WiseSpend 项目封面',
      en: 'WiseSpend — project cover',
    },
    storyTitle: {
      zh: '不只是记账，更是理解自己。',
      en: "Don't just track your money. Understand yourself.",
    },
    story: {
      zh: [
        '很多 P 人都经历过这样的时刻：某天突然决定认真理财，兴致勃勃下载记账软件，坚持记录每一笔消费，然后……就没有然后了。',
        '即使真的坚持记账，面对一堆数字和统计图表，也未必知道下一步该做什么。钱到底花在哪里了？哪些消费真正带来了快乐？哪些习惯值得调整？',
        '我想做一个不要求用户先成为理财高手，也不需要每天自律打卡的财务助手。于是有了 **知省 WiseSpend**。',
        '它希望降低财务管理的门槛，让不爱做计划的人，也能轻松开始理解自己的消费行为。',
        '知省不仅记录交易，还结合结构化财务分析、AI Agent、长期记忆和知识检索，让用户通过自然语言完成消费查询、预算分析与财务复盘。更重要的是，它能够结合历史交互理解用户的目标与偏好，让每一次对话不再从零开始。',
        '希望它能让财务管理少一点压力，多一点自我发现。',
      ],
      en: [
        'Many spontaneous, go-with-the-flow people know the pattern: one day you decide to take your finances seriously, enthusiastically download an expense tracker, log every purchase — and then quietly stop.',
        "Even if you keep tracking, a wall of numbers and charts doesn't necessarily tell you what to do next. Where did the money go? Which purchases actually made you happy? Which habits are worth changing?",
        "I wanted a finance companion that doesn't require you to become a budgeting expert or maintain a perfect daily routine. That's how **WiseSpend** began.",
        "WiseSpend lowers the barrier to personal finance reflection, especially for people who don't naturally enjoy detailed planning.",
        'Beyond recording transactions, it combines structured financial analysis, AI agents, long-term memory, and knowledge retrieval. Users can ask questions in natural language, review budgets, and explore spending patterns. By retaining relevant goals and preferences, the experience can continue across conversations instead of starting from scratch every time.',
        'My hope is to make financial management a little less stressful and a little more about self-discovery.',
      ],
    },
    groups: [
      {
        title: { zh: '核心产品体验', en: 'Product experience' },
        items: [
          {
            zh: '💬 **聊天就能查账：** 不需要研究复杂的筛选器，直接问 AI「上个月我是不是奶茶喝太多了？」。',
            en: '💬 **Ask your finances anything:** No complicated filters required. Just ask, “Did I spend too much on bubble tea last month?”',
          },
          {
            zh: '🧠 **有上下文的长期记忆：** 记住用户的重要目标、习惯与偏好，让后续交流更加自然。',
            en: '🧠 **Contextual long-term memory:** Retains important goals, habits, and preferences for more natural follow-up conversations.',
          },
          {
            zh: '📊 **消费复盘：** 分析支出趋势、预算执行情况和消费模式，让数字背后的行为变得清晰。',
            en: '📊 **Spending reflection:** Makes trends, budget progress, and behavioral patterns easier to understand.',
          },
          {
            zh: '📚 **知识辅助：** 结合 RAG 检索相关知识，为用户提供更有依据的解释与建议。',
            en: '📚 **Knowledge assistance:** Uses RAG to retrieve relevant context and support better-grounded explanations.',
          },
        ],
      },
      {
        title: { zh: '工程亮点', en: 'Engineering highlights' },
        items: [
          {
            zh: '独立设计 React 前端、Spring Boot 业务后端、PostgreSQL 数据层与 Python AI Service 协作的完整应用架构。',
            en: 'Independently designed the application architecture connecting React, a Spring Boot business backend, PostgreSQL, and a Python AI service.',
          },
          {
            zh: '基于 Tool Calling 构建可访问真实账本数据的 AI Agent，并通过结构化工具执行财务查询与分析。',
            en: 'Built a tool-calling AI agent that queries real ledger data through structured finance tools.',
          },
          {
            zh: '结合长期记忆与 RAG，支持有上下文的个性化交互与知识辅助。',
            en: 'Combined persistent memory and RAG for contextual interactions and knowledge-assisted responses.',
          },
          {
            zh: '设计 Agent Harness，围绕证据校验、工具调用、异常处理、Tracing 与回归评测构建可靠性机制。',
            en: 'Designed an agent harness with evidence validation, tool execution controls, error handling, tracing, and regression evaluation.',
          },
          {
            zh: '通过业务数据与 AI 推理分层，让模型负责理解和决策，让结构化数据与工具提供可验证的事实依据。',
            en: 'Separated business facts from model reasoning, keeping verifiable financial data in structured services rather than the LLM.',
          },
        ],
      },
    ],
    stackLabel: 'stack',
    stack: 'React · Spring Boot · FastAPI · PostgreSQL · pgvector · OpenAI Agents SDK',
    meta: '个人独立项目 / Independent project · 核心源代码未公开 / Source code private',
    links: [
      {
        href: 'https://github.com/fionaxuxyz/wisespend-case-study',
        label: { zh: '查看知省产品案例', en: 'Explore the case study' },
      },
    ],
  },
  {
    slug: 'kitchen',
    index: '02',
    layout: 'reverse',
    tone: 'lilac',
    title: { zh: '3D 厨房设计器', en: '3D Kitchen Designer' },
    lede: {
      zh: '基于浏览器的交互式 3D 厨房设计与报价平台',
      en: 'Browser-based interactive kitchen design and quotation platform',
    },
    cover: 'kitchen',
    coverAlt: {
      zh: '3D 厨房设计器项目封面',
      en: '3D Kitchen Designer — project cover',
    },
    storyTitle: {
      zh: '从空间想象，到真正看得见、改得动的设计方案。',
      en: 'From imagined spaces to designs you can see and change.',
    },
    story: {
      zh: [
        '装修时最让人头疼的事情之一，就是脑子里的设计想法和最终呈现的效果总有距离。平面图不够直观，三维效果难以自由调整，改完设计之后，报价又可能是另一回事。',
        '这个项目希望把空间设计、3D 可视化和报价流程整合到同一个产品中，让用户能够直接在浏览器里规划厨房、调整家具布局和尺寸，并查看相应的报价信息。',
        '在项目中，我担任 Team Leader 和核心前端开发者，主要负责 3D 产品链路的设计与实现，同时参与需求分析、团队协调和技术推进。',
        '这也是我第一次在一个完整的业务项目中，深入处理从三维几何、坐标体系到交互状态与报价逻辑的一整套工程问题。',
      ],
      en: [
        'One of the hardest parts of renovating a kitchen is translating an idea into a practical result. Floor plans can feel abstract, 3D previews can be difficult to adjust, and quotations may not stay in sync when designs change.',
        'This project brings space planning, interactive 3D visualization, and quotations together in the browser. Users can lay out a kitchen, resize and reposition furniture, and see how design decisions connect to pricing.',
        'I worked as Team Leader and core front-end engineer, owning much of the 3D product workflow while coordinating requirements, delivery, and technical decisions.',
        'It was also my first opportunity to solve an integrated set of production-style problems spanning geometry, coordinate systems, interaction state, and quotation logic.',
      ],
    },
    groups: [
      {
        title: { zh: '核心产品体验', en: 'Product experience' },
        items: [
          {
            zh: '🏠 **交互式 3D 设计：** 在浏览器中查看和编辑厨房空间，自由调整家具布局。',
            en: '🏠 **Interactive 3D design:** Explore and edit kitchen spaces directly in a browser.',
          },
          {
            zh: '📐 **参数化家具：** 根据实际业务尺寸动态生成与调整 3D 家具资产，而不只是展示固定模型。',
            en: '📐 **Parametric furniture:** Generate and resize furniture assets from real business dimensions instead of relying only on fixed models.',
          },
          {
            zh: '🔄 **2D / 3D 联动：** 平面编辑与三维场景保持数据一致，减少重复操作。',
            en: '🔄 **2D/3D synchronization:** Keep floor-plan edits and 3D scene state consistent.',
          },
          {
            zh: '💰 **设计与报价同步：** 将设计参数与业务报价连接起来，让设计方案不仅好看，也能被计算。',
            en: '💰 **Design-to-quote:** Connect design parameters to calculable quotation data.',
          },
        ],
      },
      {
        title: { zh: '工程亮点', en: 'Engineering highlights' },
        lines: {
          zh: [
            '作为团队负责人，推进核心 3D 产品链路的需求拆解、开发与交付。',
            '基于 React Three Fiber 与 Three.js 构建浏览器端 3D 交互系统。',
            '使用 Procedural Geometry 实现支持业务尺寸的参数化资产生成。',
            '统一业务坐标、Three.js 世界坐标、局部坐标与尺寸换算逻辑。',
            '实现 2D / 3D 设计状态同步与 Design-to-Quote 业务联动。',
            '优化三维资源加载、渲染性能及交互体验。',
          ],
          en: [
            'Led requirements breakdown and delivery for the core 3D product workflow.',
            'Built browser-based 3D interactions with React Three Fiber and Three.js.',
            'Used procedural geometry to generate parametric assets driven by business dimensions.',
            'Unified business-space, world-space, local-space, and dimensional transformations.',
            'Connected 2D/3D state with quotation logic and improved asset loading and rendering performance.',
          ],
        },
      },
    ],
    stackLabel: 'stack',
    stack: 'React · Three.js · React Three Fiber · Procedural Geometry',
    meta: '团队项目 / Team project · Team Leader & core 3D engineer · 商业项目源代码未公开 / Commercial source code private',
    links: [],
  },
  {
    slug: 'together',
    index: '03',
    layout: 'split',
    tone: 'blush',
    title: { zh: 'Together · 双人实时互动空间', en: 'Together · Shared Space for Two' },
    lede: {
      zh: '基于 WebRTC 的双人实时视频与共享场景应用',
      en: 'WebRTC-powered video and shared-scene app',
    },
    cover: 'together',
    coverAlt: {
      zh: 'Together 项目封面',
      en: 'Together — project cover',
    },
    storyTitle: {
      zh: '让距离不再意味着缺席。',
      en: "Distance shouldn't mean absence.",
    },
    story: {
      zh: [
        '做这个项目的起因其实很简单：我真的每天都很想念远距离的男朋友。💗',
        '普通视频通话当然能看到彼此，但我总觉得少了点什么。',
        '如果两个人不只是分别待在屏幕的两个小窗口里，而是能够出现在同一间房间、同一个风景里，甚至像真的坐在一起一样，会不会更有趣？',
        '我尝试过思考现有的视频应用能够提供哪些体验，却发现自己真正想要的东西其实很简单：足够流畅、足够自然，不需要下载复杂的软件，也不想为一堆用不上的附加功能付费。',
        '尤其是实时人物抠图与场景融合，我希望它看起来尽可能自然，而不是简单地把两个视频画面生硬地拼在一起。',
        '既然如此，不如自己做一个。',
        '于是有了 **Together**。',
        '它是我独立设计、开发并部署的一款双人实时互动 Web App，结合 WebRTC 音视频通信、人物画面处理与共享虚拟场景，让远距离的两个人能够拥有更有陪伴感的数字空间。',
        '产品围绕双人使用场景设计，尽量减少不必要的功能，专注于轻量、自然和有趣的互动体验。',
        '从本地开发到实际部署，我也完成了前后端的线上运行配置，使用阿里云与 Render 承载相关服务，让应用能够真正通过互联网使用，而不只是停留在本地 Demo。',
        '它可能不是一个宏大的商业项目，但确实解决了我自己很想解决的问题。',
      ],
      en: [
        'The reason I built this was pretty simple: I missed my long-distance boyfriend every day. 💗',
        "Regular video calls let us see each other, of course. But I kept thinking: what if we weren't confined to separate rectangles on a screen? What if we could appear in the same room, in the same scene, almost as though we were sitting together?",
        "I didn't want complicated software, unnecessary features, or another subscription just to create that feeling. I wanted something lightweight, smooth, and natural — especially when compositing people into a shared background.",
        'So I decided to build it.',
        '**Together** is an independently designed, built, and deployed web app combining WebRTC video, person-video processing, and synchronized virtual scenes. It\'s a focused product for two people who want a more shared sense of presence.',
        'I also took it beyond a local demo, configuring cloud deployment using Alibaba Cloud and Render so it could be used over the internet.',
        'It may not be a huge commercial platform, but it solves a problem that genuinely mattered to me.',
      ],
    },
    groups: [
      {
        title: { zh: '核心产品体验', en: 'Product experience' },
        items: [
          {
            zh: '📹 **实时音视频：** 两个人通过浏览器即可进行实时视频交流，无须安装独立客户端。',
            en: '📹 **Live audio and video:** Two people can connect directly through their browsers.',
          },
          {
            zh: '🌷 **共享虚拟场景：** 将双方画面组合进同一个场景，创造更自然的陪伴体验。',
            en: '🌷 **Shared virtual scenes:** Compose both participants into the same digital environment.',
          },
          {
            zh: '🪄 **自由布局：** 支持不同的画面组合和场景模式，调整人物的位置、缩放和前后景关系。',
            en: '🪄 **Flexible layouts:** Adjust scene modes, participant positions, scales, and foreground/background relationships.',
          },
          {
            zh: '📱 **响应式设计：** 兼顾桌面浏览器和手机端的布局与交互体验。',
            en: '📱 **Responsive design:** Adapt the experience for both desktop and mobile browsers.',
          },
          {
            zh: '💗 **轻量化体验：** 聚焦真正需要的双人互动功能，减少复杂配置和无关操作。',
            en: '💗 **Lightweight by design:** Prioritize the essential shared-space experience over feature bloat.',
          },
        ],
      },
      {
        title: { zh: '工程亮点', en: 'Engineering highlights' },
        lines: {
          zh: [
            '基于 WebRTC 构建浏览器端实时音视频通信流程。',
            '实现人物画面处理与共享场景组合，探索实时视频和创意前端交互的结合。',
            '设计 Room-Level Shared State，将场景模式、背景与前景归属、参与者 Transform 和场景配置纳入统一状态模型。',
            '实现双端状态同步，并将实时媒体传输与场景状态管理解耦。',
            '适配不同屏幕尺寸，支持桌面端与移动端使用。',
            '使用阿里云与 Render 完成线上部署和服务配置。',
          ],
          en: [
            'Built browser-based real-time audio/video communication using WebRTC.',
            'Combined processed participant video with interactive scene composition.',
            'Designed a room-level shared state containing scene mode, foreground/background ownership, transforms, and scene configuration.',
            'Synchronized layouts across clients while keeping media transport separate from scene-state logic.',
            'Adapted the interface for desktop and mobile and deployed services through Alibaba Cloud and Render.',
          ],
        },
      },
    ],
    stackLabel: 'stack',
    stack: 'React · TypeScript · WebRTC · Real-Time State Synchronization · Responsive Design',
    meta: '个人独立项目 / Independent project · 已部署 / Deployed · 源代码未公开 / Source code private',
    links: [],
  },
  {
    slug: 'shantang',
    index: '04',
    layout: 'type',
    tone: 'ink',
    title: { zh: '山塘街多媒体交互体验', en: 'Shantang Street' },
    lede: {
      zh: '以苏州山塘街为主题的交互式数字文化展示作品',
      en: '3D cultural heritage and interactive web showcase',
    },
    cover: null,
    coverAlt: { zh: '', en: '' },
    storyTitle: {
      zh: '用 3D 建模与数字交互，重新讲述城市文化。',
      en: 'Retelling cultural stories through 3D modeling and the web.',
    },
    story: {
      zh: [
        '说起来，这个项目最开始只是一门课程的 Assignment。',
        '课程本身并不是我最喜欢的部分，但看其他同学展示作品时，我反而很受触动。大家选了各种有趣的主题，认真建模、设计场景、展示自己的想法。',
        '原来同一道作业题，也可以被做成这么多完全不同的世界。',
        '我选择了苏州山塘街。',
        '比起单纯制作一个展示网页，我更想亲自动手把传统街巷的建筑、空间和氛围重新构建出来。从建筑外形、比例关系到模型资产与场景构图，我希望能通过 3D 建模，把那些具有江南特色的空间元素转化为可以在数字世界中呈现的作品。',
        '我很喜欢这种创作过程：先观察现实中的建筑，再研究如何用几何、材质与空间关系把它们重新表达出来。编程之外，数字建模本身也是一种很有趣的创造方式。',
      ],
      en: [
        'This project started as a university assignment.',
        "The course itself wasn't my favorite, but seeing classmates present their work genuinely moved me. Everyone chose different themes, built scenes, and expressed their ideas with care. It was amazing how one assignment could produce so many different worlds.",
        'I chose Shantang Street in Suzhou.',
        'Rather than build a conventional information page, I wanted to recreate some of the architecture, spatial character, and atmosphere of a traditional Jiangnan streetscape. I explored how architectural shapes, proportions, assets, materials, and scene composition could translate a real place into a digital one.',
        'I loved the process: observing physical buildings, then thinking through how geometry and spatial relationships could express them. Modeling became another form of making things, beyond coding.',
      ],
    },
    groups: [
      {
        title: { zh: '项目亮点', en: 'Project highlights' },
        items: [
          {
            zh: '🏮 **传统建筑建模：** 围绕山塘街的建筑语言与空间特征制作数字场景资产。',
            en: "🏮 **Traditional architecture modeling:** Created digital assets inspired by Shantang Street's architectural character.",
          },
          {
            zh: '🧊 **3D 场景构建：** 关注模型比例、空间布局、材质与整体视觉表现。',
            en: '🧊 **3D scene building:** Explored proportions, layout, materials, and visual composition.',
          },
          {
            zh: '🎨 **文化与视觉表达：** 将江南街巷的地域特色融入数字作品。',
            en: "🎨 **Cultural storytelling:** Translated Jiangnan's visual identity into a digital medium.",
          },
          {
            zh: '🌐 **Web 作品展示：** 将建模成果与网页呈现结合，制作可在线浏览的项目作品集。',
            en: '🌐 **Web showcase:** Presented the modeling work in an accessible online portfolio.',
          },
        ],
      },
    ],
    stackLabel: 'tools',
    stack: 'Blender · 3D Modeling · Scene Composition · Web Presentation',
    meta: '个人课程作品 / Individual coursework · 已部署展示版 / Deployed showcase',
    links: [
      {
        href: 'https://fionaxuxyz.github.io/shantang-street-portfolio/',
        label: { zh: '查看山塘街作品', en: 'Explore the Shantang portfolio' },
      },
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
