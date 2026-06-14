export interface Option {
  id: number;
  text: string;
  isHilarious: boolean;
}

export interface Question {
  id: number;
  physicist: string;
  portraitPrompt: string;
  question: string;
  options: Option[];
  correctOptionId: number;
  funFact: string;
  wrongRoast: string;
}

export const questions: Question[] = [
  {
    id: 1,
    physicist: "牛顿",
    portraitPrompt: "Isaac Newton cartoon portrait, 17th century wig, vintage style illustration",
    question: "牛顿被苹果砸中脑袋后，他最先想到的是什么？",
    options: [
      { id: 1, text: "为什么苹果不往天上飞？", isHilarious: false },
      { id: 2, text: "这苹果甜不甜？能再来一个吗？", isHilarious: true },
      { id: 3, text: "万物之间都有引力在拉扯", isHilarious: false },
    ],
    correctOptionId: 1,
    funFact:
      `🍎 牛顿虽然不是真的被苹果砸中脑袋才发现万有引力，但苹果的故事确实启发了他的思考！他意识到：让苹果落地的力和让月球绕地球转的力，本质上是同一种力——万有引力。这一发现统一了天上和地上的物理规律，堪称科学史上最伟大的一次"开窍"！`,
    wrongRoast:
      "🤣 你这是吃货的脑回路吧？牛顿要是跟你一样，物理学史就要改写成《烹饪艺术史》了！下次被东西砸到，建议先想想为什么，而不是先想想好不好吃～",
  },
  {
    id: 2,
    physicist: "爱因斯坦",
    portraitPrompt: "Albert Einstein cartoon portrait, wild white hair, mustache, playful style",
    question: "爱因斯坦说'如果你坐在漂亮姑娘旁边'，会感觉时间怎样？",
    options: [
      { id: 1, text: "时间会变慢，因为注意力分散了", isHilarious: false },
      { id: 2, text: "时间会变快，因为心跳加速了", isHilarious: false },
      { id: 3, text: "时间会消失，因为光顾着偷看了", isHilarious: true },
    ],
    correctOptionId: 1,
    funFact:
      "⏰ 爱因斯坦用这个幽默比喻解释了相对论的核心——时间的流逝不是绝对的，取决于观察者的参照系！在强引力场或高速运动中，时间确实会变慢，这就是著名的'时间膨胀'效应。GPS卫星每天都要修正这个效应，否则定位会偏差好几公里！",
    wrongRoast:
      "😄 时间消失？那你的约会对象一定很困惑：'你人呢？'爱因斯坦说的是相对论，不是隐形术！建议你下次约会时记得看表，别光顾着发呆～",
  },
  {
    id: 3,
    physicist: "阿基米德",
    portraitPrompt: "Archimedes cartoon portrait, ancient Greek, bathtub, playful illustration",
    question: "阿基米德在浴缸里大喊'尤里卡'时，他发现了什么？",
    options: [
      { id: 1, text: "洗澡水太烫了", isHilarious: true },
      { id: 2, text: "物体在液体中受到的浮力等于排开液体的重量", isHilarious: false },
      { id: 3, text: "水位上升可以测量不规则物体体积", isHilarious: false },
    ],
    correctOptionId: 2,
    funFact:
      "🛁 阿基米德在浴缸中发现浮力定律时激动得光着身子跑上街大喊'尤里卡'（我找到了）！他当时在帮国王鉴定王冠是否掺假，发现排水法可以测出不规则物体体积，进而算出密度。这个故事告诉我们：科学灵感随时可能降临，哪怕你正泡在浴缸里！",
    wrongRoast:
      "🤣 水太烫了？那你倒是加冷水啊，喊'尤里卡'干嘛！阿基米德要是跟你一样，浮力定律就得改名叫'调水温定律'了！下次洗澡前记得先试水温哦～",
  },
  {
    id: 4,
    physicist: "伽利略",
    portraitPrompt: "Galileo Galilei cartoon portrait, telescope, Renaissance style illustration",
    question: "伽利略在比萨斜塔上同时扔下两个不同重量的球，想证明什么？",
    options: [
      { id: 1, text: "重球先落地，轻球后落地", isHilarious: false },
      { id: 2, text: "两个球同时落地，自由落体与质量无关", isHilarious: false },
      { id: 3, text: "斜塔太斜了，球滚偏了", isHilarious: true },
    ],
    correctOptionId: 2,
    funFact:
      "🏟️ 伽利略的实验推翻了亚里士多德两千年的错误观点——重物比轻物下落更快。在没有空气阻力的情况下，所有物体都以相同加速度下落（g≈9.8m/s²）。1971年，阿波罗15号宇航员在月球上同时扔下锤子和羽毛，两者同时落地，完美验证了伽利略的结论！",
    wrongRoast:
      "😂 斜塔太斜了球滚偏了？你是不是对建筑学和物理学同时有误解！伽利略做的是自由落体实验，不是保龄球比赛！建议你先分清'滚'和'落'的区别～",
  },
  {
    id: 5,
    physicist: "特斯拉",
    portraitPrompt: "Nikola Tesla cartoon portrait, electric sparks, dramatic lighting",
    question: "特斯拉为什么和爱迪生闹翻了？",
    options: [
      { id: 1, text: "因为爱迪生欠他五万美金奖金不还", isHilarious: false },
      { id: 2, text: "因为两人抢同一个停车位", isHilarious: true },
      { id: 3, text: "因为直流电和交流电的技术路线之争", isHilarious: false },
    ],
    correctOptionId: 1,
    funFact:
      "⚡ 特斯拉刚到美国时，爱迪生承诺如果他改进直流发电机就给5万美元奖金。特斯拉夜以继日工作完成后，爱迪生却说'你不懂美式幽默'拒不兑现！这直接导致特斯拉出走，发明了交流电系统。如今全世界都在用交流电，而爱迪生的直流电系统早已被淘汰——这大概就是历史上最贵的'玩笑'了！",
    wrongRoast:
      "🅿️ 抢停车位？19世纪连汽车都没几辆，停什么车啊！特斯拉和爱迪生争的是电力系统的未来，不是小区车位！建议你下次猜答案前先想想年份～",
  },
];
