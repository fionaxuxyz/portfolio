import type { Copy, LinkCopy } from '../types'

export const ui = {
  skip: { zh: '跳到主要内容', en: 'Skip to content' } satisfies Copy,
  nav: {
    about: { zh: '关于', en: 'About' } satisfies Copy,
    works: { zh: '精选作品', en: 'Selected Works' } satisfies Copy,
    practice: { zh: '实践', en: 'Practice' } satisfies Copy,
    focus: { zh: '技术方向', en: 'Engineering' } satisfies Copy,
    contact: { zh: '联系', en: 'Contact' } satisfies Copy,
  },
  languageLabel: { zh: '语言', en: 'Language' } satisfies Copy,
  explore: { zh: '查看项目', en: 'Explore Project' } satisfies Copy,
  worksLink: { zh: '精选作品', en: 'Selected works' } satisfies Copy,
  back: { zh: '返回作品', en: 'Back to works' } satisfies Copy,
  stack: { zh: '技术栈', en: 'Stack' } satisfies Copy,
  stackTools: { zh: '技术栈 / 工具', en: 'Stack / Tools' } satisfies Copy,
  notFoundTitle: { zh: '没有找到这个项目', en: 'This project is not here' } satisfies Copy,
  notFoundBody: {
    zh: '这个地址没有对应的作品。可以回到首页继续看。',
    en: 'There is no project at this address. You can return to the homepage.',
  } satisfies Copy,
  home: { zh: '回到首页', en: 'Back home' } satisfies Copy,
  expand: { zh: '展开全文', en: 'Read the full note' } satisfies Copy,
  collapse: { zh: '收起', en: 'Collapse' } satisfies Copy,
  menu: { zh: '菜单', en: 'Menu' } satisfies Copy,
} as const

export const hero = {
  title: "Hi, it's Fiona! 💜",
  subtitle: 'AI × Product · Full-Stack · Agent · Creative Engineering',
  intro: {
    zh: '**你好呀，这里是 Fiona！** 一个喜欢探索新技术、设计交互体验，也热衷于把脑洞变成真实产品的开发者。热爱生活，也热爱互联网。喜欢一切新鲜有趣、值得亲自动手尝试的东西。✨',
    en: "**Hi, I'm Fiona!** I love exploring new technologies, designing interactive experiences, and turning the ideas in my head into real products. I'm equally excited about life and the internet, and I can never resist trying something new and interesting. ✨",
  } satisfies Copy,
  tags: ['Full-Stack', 'AI Agent', '3D Web', 'Creative Engineering'],
}

export const education = [
  {
    school: { zh: '悉尼大学', en: 'University of Sydney' } satisfies Copy,
    degree: { zh: '计算机科学硕士', en: 'Master of Computer Science' } satisfies Copy,
  },
  {
    school: { zh: '华南理工大学', en: 'South China University of Technology' } satisfies Copy,
    degree: {
      zh: '数学与应用数学学士',
      en: 'Bachelor of Mathematics and Applied Mathematics',
    } satisfies Copy,
  },
]

export const contact = {
  title: { zh: '联系我', en: 'Contact' } satisfies Copy,
  paragraphs: {
    zh: [
      '如果你也喜欢 AI、产品、交互体验，或者脑子里有各种奇怪但有趣的想法，欢迎来找我聊天、交流项目或合作！',
    ],
    en: [
      "If you're into AI, products, interactive experiences, or unusual ideas worth building, I'd love to chat, exchange ideas, or collaborate.",
    ],
  },
  links: [
    {
      href: 'https://github.com/fionaxuxyz',
      label: { zh: 'GitHub · fionaxuxyz', en: 'GitHub · fionaxuxyz' },
    },
    {
      href: 'mailto:fionaxuyuzu@outlook.com',
      label: { zh: 'Email · fionaxuyuzu@outlook.com', en: 'Email · fionaxuyuzu@outlook.com' },
    },
  ] satisfies LinkCopy[],
}

export const closing = {
  title: {
    zh: '谢谢你来到我的数字小角落！🌷',
    en: 'Thanks for visiting my little corner of the internet! 🌷',
  } satisfies Copy,
  body: {
    zh: '这里有认真打磨的产品，也有一时兴起的脑洞；有复杂的工程问题，也有一些纯粹因为觉得好玩而开始的实验。希望以后能继续把更多想法变成现实。',
    en: "You'll find carefully built products, spontaneous experiments, difficult engineering problems, and things I made simply because they seemed fun. I hope to keep bringing more ideas to life.",
  } satisfies Copy,
  sign: {
    zh: 'Built with curiosity, imagination, and way too many ideas. ✨',
    en: 'Built with curiosity, imagination, and way too many ideas. ✨',
  } satisfies Copy,
}

export const sectionTitles = {
  about: { zh: '关于我', en: 'About Me' } satisfies Copy,
  works: { zh: '精选作品', en: 'Selected Works' } satisfies Copy,
  practice: { zh: '更多工程实践', en: 'More Engineering Projects' } satisfies Copy,
  focus: { zh: '我的技术方向', en: 'Engineering Focus' } satisfies Copy,
  education: { zh: '教育背景', en: 'Education' } satisfies Copy,
}
