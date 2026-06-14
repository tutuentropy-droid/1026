export type Era = "classical" | "electromagnetic" | "quantum";
export type Difficulty = "easy" | "hard";

export interface Option {
  id: number;
  text: string;
  isHilarious: boolean;
}

export interface Question {
  id: number;
  physicist: string;
  portraitPrompt: string;
  catchphrase: string;
  famousQuote: string;
  question: string;
  options: Option[];
  correctOptionId: number;
  funFact: string;
  wrongRoast: string;
  era: Era;
  difficulty: Difficulty;
}

export const eraInfo: Record<Era, { name: string; description: string; emoji: string; color: string; physicists: string[] }> = {
  classical: {
    name: "经典力学时代",
    description: "17-19世纪，牛顿、伽利略、阿基米德奠定物理学基石",
    emoji: "🍎",
    color: "from-amber-400 to-orange-500",
    physicists: ["牛顿", "阿基米德", "伽利略"],
  },
  electromagnetic: {
    name: "电磁时代",
    description: "19世纪，法拉第、特斯拉、居里夫人揭开电磁与辐射的奥秘",
    emoji: "⚡",
    color: "from-blue-400 to-purple-500",
    physicists: ["法拉第", "特斯拉", "居里夫人"],
  },
  quantum: {
    name: "量子时代",
    description: "20世纪至今，爱因斯坦带领我们进入微观量子世界",
    emoji: "⚛️",
    color: "from-emerald-400 to-teal-500",
    physicists: ["爱因斯坦"],
  },
};

export const difficultyInfo: Record<Difficulty, { name: string; description: string }> = {
  easy: { name: "简单", description: "入门级趣闻，适合物理小白" },
  hard: { name: "困难", description: "进阶冷知识，挑战你的知识储备" },
};

export const questions: Question[] = [
  {
    id: 1,
    physicist: `牛顿`,
    portraitPrompt: `Isaac Newton cartoon portrait, 17th century wig, vintage style illustration, playful`,
    catchphrase: `站在巨人的肩膀上，我看得更远！`,
    famousQuote: `如果说我看得比别人更远些，那是因为我站在巨人的肩膀上。`,
    question: `牛顿被苹果启发思考万有引力时，他当时正在做什么？`,
    options: [
      { id: 1, text: `在花园里躲避瘟疫，悠闲地思考人生`, isHilarious: false },
      { id: 2, text: `在实验室里做苹果汁萃取实验`, isHilarious: true },
      { id: 3, text: `在果园里帮妈妈摘苹果卖钱`, isHilarious: true },
    ],
    correctOptionId: 1,
    funFact:
      `🍎 1665-1666年伦敦大瘟疫期间，剑桥大学停课，牛顿回到家乡伍尔索普庄园躲避。就是在这段"隔离假期"里，他在花园散步时看到苹果落地，由此启发了万有引力的思考！这段时间他还发明了微积分、研究了光学——堪称人类历史上最高产的"居家办公"时期！`,
    wrongRoast:
      `🍎 牛顿要是知道你把他想成苹果批发商，估计会气得从棺材里坐起来给你一筐苹果！人家那是在思考为什么苹果会往下掉而不是往上飞——这可是在撬动整个物理学的根基啊！下次看到水果落地，别急着流口水，先想想：这背后是不是有个万有引力定律在等你发现？`,
    era: "classical",
    difficulty: "easy",
  },
  {
    id: 2,
    physicist: `牛顿`,
    portraitPrompt: `Isaac Newton cartoon portrait, inserting needle into eye socket, strange science experiment, humorous illustration`,
    catchphrase: `站在巨人的肩膀上，我看得更远！`,
    famousQuote: `如果说我看得比别人更远些，那是因为我站在巨人的肩膀上。`,
    question: `牛顿为了研究光学，曾经对自己做过什么疯狂实验？`,
    options: [
      { id: 1, text: `用针刺入自己眼窝和眼球之间，观察视觉变化`, isHilarious: false },
      { id: 2, text: `连续三天不睡觉看星星，结果把眼睛看近视了`, isHilarious: true },
      { id: 3, text: `把各种颜色的果汁混合，试图制造彩虹`, isHilarious: true },
    ],
    correctOptionId: 1,
    funFact:
      `👁️ 牛顿在《光学》一书中记录了这个令人毛骨悚然的实验：他将一根钝针塞入眼窝和眼球之间，用针头挤压眼球，观察由此产生的各种颜色光斑。通过这个实验，他推测视觉是光线刺激视网膜产生的，而不是眼睛本身发出光线。这个实验告诉我们：伟大的科学家有时候真的很拼——甚至对自己下狠手！请勿模仿！`,
    wrongRoast:
      `👁️ 戳眼睛这种硬核操作，你居然能联想到调果汁？牛顿要是听到了，估计会当场演示一遍什么叫"视觉神经刺激实验"给你看！这位大佬为了搞清楚光的本质，连自己的眼睛都敢当实验品——这种科学精神，你怎么能和儿童手工课相提并论呢？下次看到针的时候，先想想牛顿的眼睛，再想想你自己的胆子！`,
    era: "classical",
    difficulty: "hard",
  },
  {
    id: 3,
    physicist: `爱因斯坦`,
    portraitPrompt: `Albert Einstein cartoon portrait, wild white hair, mustache, sticking out tongue, playful style`,
    catchphrase: `想象力比知识更重要！`,
    famousQuote: `想象力比知识更重要，因为知识是有限的，而想象力概括着世界的一切！`,
    question: `爱因斯坦那张著名的吐舌头照片，是在什么场合拍的？`,
    options: [
      { id: 1, text: `72岁生日宴会上，被摄影师追烦了做的鬼脸`, isHilarious: false },
      { id: 2, text: `相对论论文被拒绝时，表示不屑的表情`, isHilarious: true },
      { id: 3, text: `幼儿园毕业照，天生就爱搞怪`, isHilarious: true },
    ],
    correctOptionId: 1,
    funFact:
      `😛 1951年3月14日，爱因斯坦在普林斯顿参加自己72岁生日宴会后，被摄影师亚瑟·塞斯追着拍照。他已经坐了一整天，累得不行，就对着镜头吐了一下舌头。没想到这张照片成了20世纪最经典的肖像之一！爱因斯坦自己也很喜欢，还把它印成了圣诞贺卡送给朋友。原来天才也有不想营业的时候～`,
    wrongRoast:
      `😛 幼儿园？爱因斯坦要是在幼儿园就这么调皮，他老师估计要疯了！这张照片拍的时候他都72岁了，是被摄影师追烦了才做的鬼脸——说白了就是老人家不想营业了而已！你这年龄差算得，怕是把相对论都用到时间旅行上了吧？下次看到名人照片，先观察一下皱纹，再猜年龄！`,
    era: "quantum",
    difficulty: "easy",
  },
  {
    id: 4,
    physicist: `爱因斯坦`,
    portraitPrompt: `Albert Einstein cartoon portrait, forgetting address in taxi, confused expression, humorous illustration`,
    catchphrase: `想象力比知识更重要！`,
    famousQuote: `想象力比知识更重要，因为知识是有限的，而想象力概括着世界的一切！`,
    question: `爱因斯坦有次坐出租车忘记自己家地址，他对司机说了什么？`,
    options: [
      { id: 1, text: `不要告诉我我住哪儿，因为我忘了——这就是我为什么不想出名的原因！`, isHilarious: false },
      { id: 2, text: `随便开吧，反正我去哪儿都是思考相对论`, isHilarious: true },
      { id: 3, text: `你能打电话问问我太太吗？她应该记得`, isHilarious: true },
    ],
    correctOptionId: 1,
    funFact:
      `🚕 刚搬到普林斯顿时，爱因斯坦因为名气太大经常被人拦住，他自己也记不住新地址。有次坐出租车回住处，他居然想不起家在哪儿，就对司机说了这句经典的话。司机恰好认识爱因斯坦，笑着把他送回了家。看来伟大的大脑都用在思考宇宙奥秘上了，腾不出空间记地址这种小事！`,
    wrongRoast:
      `🚕 打电话问太太？爱因斯坦的傲娇可是出了名的！他宁愿让司机绕着普林斯顿转三圈，也不会承认自己连家在哪儿都记不住——毕竟大脑空间都用来装相对论了，腾不出地方放地址啊！下次你找不到家时，也可以试试说："我在思考时空弯曲，暂时迷失在四维空间里了"，看看司机会不会把你送到精神病院！`,
    era: "quantum",
    difficulty: "hard",
  },
  {
    id: 5,
    physicist: `阿基米德`,
    portraitPrompt: `Archimedes cartoon portrait, ancient Greek, running naked on street shouting Eureka, playful illustration`,
    catchphrase: `给我一个支点，我就能撬动整个地球！`,
    famousQuote: `给我一个支点，我就能撬动地球！`,
    question: `阿基米德喊着"尤里卡"裸奔上街时，他要去干什么？`,
    options: [
      { id: 1, text: `去王宫向国王展示王冠掺假的证据`, isHilarious: false },
      { id: 2, text: `去澡堂找衣服，因为跑得太急忘穿了`, isHilarious: true },
      { id: 3, text: `参加古希腊裸体运动会，顺便宣传新发现`, isHilarious: true },
    ],
    correctOptionId: 1,
    funFact:
      `👑 叙拉古国王让金匠做了一顶纯金王冠，但怀疑金匠掺了银，让阿基米德想办法鉴定。阿基米德苦思冥想多日，在洗澡时发现水位上升可以测量不规则物体体积，从而算出密度！他激动得立刻跳出浴缸，连衣服都忘了穿就往王宫跑，一路大喊"尤里卡（我找到了）！"这个故事告诉我们：灵感来临时，体面可以先放一放！`,
    wrongRoast:
      `👑 裸奔参加运动会？你这脑洞能装下整个地中海！阿基米德那是发现了浮力定律激动得忘乎所以——换作是你发现了一个能推翻两千年来认知的定律，你说不定也会边跑边喊"尤里卡"！不过友情提示：现代社会裸奔会被警察叔叔带走的，下次激动前先摸摸身上有没有穿衣服！`,
    era: "classical",
    difficulty: "easy",
  },
  {
    id: 6,
    physicist: `阿基米德`,
    portraitPrompt: `Archimedes cartoon portrait, using mirror to reflect sunlight burn Roman ships, war scene, humorous illustration`,
    catchphrase: `给我一个支点，我就能撬动整个地球！`,
    famousQuote: `给我一个支点，我就能撬动地球！`,
    question: `阿基米德用什么神奇武器，击退了罗马侵略者的舰队？`,
    options: [
      { id: 1, text: `用巨大的铜镜聚焦阳光，点燃了罗马战船`, isHilarious: false },
      { id: 2, text: `用杠杆原理把石头弹上天空当炸弹`, isHilarious: true },
      { id: 3, text: `用浮力原理让敌军船突然沉入海底`, isHilarious: true },
    ],
    correctOptionId: 1,
    funFact:
      `☀️ 公元前212年，罗马军队围攻叙拉古城。据记载，阿基米德设计了一种由许多面大铜镜组成的装置，将阳光聚焦在罗马战船上，使船只木质结构起火燃烧！虽然现代科学家对这一记载的可行性有争议，但2005年MIT学生用127块镜面真的成功点燃了一艘模型船——证明了这位古代科学奇才的想法并非天方夜谭！`,
    wrongRoast:
      `☀️ 弹石头当炸弹？你这是把阿基米德当成《愤怒的小鸟》里的绿猪了！人家用的是阳光聚焦的黑科技——127面镜子同时反射阳光，把罗马战船烤得外焦里嫩！下次你用放大镜烧蚂蚁的时候，要意识到你正在使用阿基米德发明的"死亡光线"技术，只是目标小了点而已！`,
    era: "classical",
    difficulty: "hard",
  },
  {
    id: 7,
    physicist: `伽利略`,
    portraitPrompt: `Galileo Galilei cartoon portrait, looking through telescope, stars and moons around, Renaissance style, playful`,
    catchphrase: `追求真理需要勇气，哪怕全世界都反对！`,
    famousQuote: `可是，地球仍然在转动！`,
    question: `伽利略用自制望远镜观察木星时，发现了什么震惊世界的现象？`,
    options: [
      { id: 1, text: `木星有四颗卫星绕着它转，证明不是所有天体都绕地球转`, isHilarious: false },
      { id: 2, text: `木星上面有大红斑，像一只大眼睛`, isHilarious: true },
      { id: 3, text: `木星是个气态行星，没有落脚的地方`, isHilarious: true },
    ],
    correctOptionId: 1,
    funFact:
      `🔭 1610年，伽利略用自己磨制的望远镜（放大30倍）对准木星，发现了四颗绕木星运行的卫星！这直接推翻了统治一千多年的"地心说"——如果木星有卫星，就说明不是所有天体都绕地球转！这四颗卫星被后人称为"伽利略卫星"（木卫一到木卫四）。为了纪念这一发现，NASA探测木星的探测器就叫"伽利略号"。`,
    wrongRoast:
      `🔭 大红斑？气态行星？你以为伽利略的望远镜是哈勃太空望远镜啊！他那自制的小望远镜只能放大30倍，能看到四个亮点就已经是当时的黑科技了！你这脑洞开得，怕是要看到木星人的广场舞了吧？下次看星空前先擦擦镜头，别把指纹当成外星人的UFO！`,
    era: "classical",
    difficulty: "easy",
  },
  {
    id: 8,
    physicist: `伽利略`,
    portraitPrompt: `Galileo Galilei cartoon portrait, dropping balls from Leaning Tower of Pisa, students watching below, humorous illustration`,
    catchphrase: `追求真理需要勇气，哪怕全世界都反对！`,
    famousQuote: `可是，地球仍然在转动！`,
    question: `伽利略在比萨斜塔做实验之前，人们普遍认为物体下落速度是什么样的？`,
    options: [
      { id: 1, text: `物体越重下落越快，越轻越慢（亚里士多德观点）`, isHilarious: false },
      { id: 2, text: `所有物体下落速度都一样，和重量无关`, isHilarious: true },
      { id: 3, text: `物体下落速度和风有关，和重量没关`, isHilarious: true },
    ],
    correctOptionId: 1,
    funFact:
      `🏛️ 从公元前4世纪亚里士多德提出"重物比轻物下落快"开始，这个错误观点统治了近2000年！伽利略不仅用实验推翻了它，还用逻辑论证了它的荒谬：如果把轻重两个物体绑在一起，按亚里士多德的说法，重的被轻的拖累变慢，轻的被重的拉着变快，整体速度应该介于两者之间；但绑在一起总重量更大，应该更快——这就矛盾了！所以伽利略在做实验前，就已经用逻辑赢了！`,
    wrongRoast:
      `🏛️ 和风有关？那伽利略做实验前是不是还要先查一下黄历"今日宜扔球"？亚里士多德要是知道你还在帮他维护这个错误观点，估计会气得从公元前4世纪穿越过来给你上一堂物理课！这个错误观点统治了2000年，结果被伽利略一个逻辑悖论就推翻了——你这智商，怕是要再被直觉骗2000年！`,
    era: "classical",
    difficulty: "hard",
  },
  {
    id: 9,
    physicist: `伽利略`,
    portraitPrompt: `Galileo Galilei cartoon portrait, before Inquisition trial, holding document, defiant expression, humorous illustration`,
    catchphrase: `追求真理需要勇气，哪怕全世界都反对！`,
    famousQuote: `可是，地球仍然在转动！`,
    question: `伽利略被宗教裁判所审判后，被迫悔过，传说他站起来后低声说了什么？`,
    options: [
      { id: 1, text: `"可是，地球仍然在转动！"（Eppur si muove）`, isHilarious: false },
      { id: 2, text: `"我投降，你们说啥就是啥！"`, isHilarious: true },
      { id: 3, text: `"等我出去再做个实验证明给你们看！"`, isHilarious: true },
    ],
    correctOptionId: 1,
    funFact:
      `⚖️ 1633年，70岁的伽利略因支持日心说被罗马宗教裁判所审判。为了避免火刑，他被迫公开悔过，承认"地球不动"。传说他念完悔过书站起来后，低声嘟囔了一句："可是，地球仍然在转动！"虽然史学家考证这句话可能是后人杜撰的，但它完美体现了伽利略对真理的执着！直到1992年，罗马教皇才正式为伽利略平反——这一错，就错了359年！`,
    wrongRoast:
      `⚖️ 投降？伽利略要是这么容易认输，他早就在亚里士多德的雕像前跪了！这位70岁的老人虽然被迫在悔过书上签字，但心里的真理之火从未熄灭！那句"可是地球仍然在转动"虽然可能是后人杜撰的，但完美诠释了什么叫"嘴上认怂，心里不服"！下次你被老板批评的时候，也可以学学伽利略——表面点头称是，心里默念"可是我是对的"！`,
    era: "classical",
    difficulty: "easy",
  },
  {
    id: 18,
    physicist: `伽利略`,
    portraitPrompt: `Galileo Galilei cartoon portrait, grinding telescope lens by hand, workshop full of tools, Renaissance style, humorous illustration`,
    catchphrase: `追求真理需要勇气，哪怕全世界都反对！`,
    famousQuote: `可是，地球仍然在转动！`,
    question: `伽利略的望远镜不是买来的，而是自己亲手做的。他磨制透镜时，为了追求极致精度，据说用了什么奇特的检验方法？`,
    options: [
      { id: 1, text: `用舌头舔透镜表面，通过味觉感受玻璃的均匀度`, isHilarious: false },
      { id: 2, text: `把透镜举到阳光下，看聚焦的光斑能不能烧穿纸片`, isHilarious: true },
      { id: 3, text: `让猫从透镜前走过，看能不能数清猫有几根胡须`, isHilarious: true },
    ],
    correctOptionId: 1,
    funFact:
      `👅 伽利略磨制透镜的技艺堪称一绝！他自己记录过一种奇特的检验方法：把透镜打磨好后，用舌头轻轻舔过表面，如果感觉玻璃表面"像丝绸一样光滑均匀"，就说明合格了。听起来很奇怪，但其实唾液能在玻璃表面形成一层极薄的液膜，微小的凹凸会通过液膜的张力变化被舌头敏锐地感知——这就是传说中的"舌尖上的光学"！`,
    wrongRoast:
      `👅 数猫胡须？你以为伽利略是猫奴啊！人家那是用舌头检验透镜精度——"舌尖上的光学"懂不懂？唾液能在玻璃上形成薄膜，微小的凹凸靠舌头就能感知！下次你拿到眼镜的时候，也可以试试舔一舔——不过小心被店员当成神经病赶出去！`,
    era: "classical",
    difficulty: "hard",
  },
  {
    id: 19,
    physicist: `伽利略`,
    portraitPrompt: `Galileo Galilei cartoon portrait, as a young music teacher playing lute, musical notes floating around, humorous illustration`,
    catchphrase: `追求真理需要勇气，哪怕全世界都反对！`,
    famousQuote: `可是，地球仍然在转动！`,
    question: `伽利略年轻时差点走上另一条人生道路——他曾经学过什么，并差点以此为职业？`,
    options: [
      { id: 1, text: `学过音乐和绘画，差点当画家或音乐家`, isHilarious: false },
      { id: 2, text: `学过医学，差点当医生给人看病`, isHilarious: true },
      { id: 3, text: `学过法律，差点当律师帮人打官司`, isHilarious: true },
    ],
    correctOptionId: 1,
    funFact:
      `🎨 伽利略的父亲是一位著名的琉特琴演奏家和音乐理论家！伽利略从小跟着父亲学音乐，琉特琴弹得相当好，绘画天赋也极高，年轻时甚至考虑过当画家！后来他虽然选择了科学，但艺术训练让他受益匪浅——他手绘的月球表面图精准细腻，堪比专业画家；音乐的节奏和韵律感，也让他对物理规律的和谐之美有着超乎常人的敏感度。`,
    wrongRoast:
      `🎨 当医生？当律师？伽利略要是听了你的，现在我们可能还以为太阳绕着地球转呢！人家从小跟着音乐家老爸学琉特琴，绘画也是专业级水准——差点就成了文艺复兴时期的斜杠艺术家！幸好最后选了物理，不然我们今天就得说"伽利略画的那幅日心说真好看"了！`,
    era: "classical",
    difficulty: "easy",
  },
  {
    id: 10,
    physicist: `法拉第`,
    portraitPrompt: `Michael Faraday cartoon portrait, 19th century scientist, electromagnetic coil experiment, sparks flying, playful illustration`,
    catchphrase: `工作，完成，出版！`,
    famousQuote: `一个婴儿有什么用呢？总有一天他会长大成人！`,
    question: `法拉第发现电磁感应后，有人问"这玩意儿有什么用？"，他如何巧妙回应？`,
    options: [
      { id: 1, text: `"一个婴儿有什么用呢？总有一天他会长大成人！"`, isHilarious: false },
      { id: 2, text: `"没用！就是做着玩的，你管得着吗？"`, isHilarious: true },
      { id: 3, text: `"可以用来发电，然后收电费赚大钱！"`, isHilarious: true },
    ],
    correctOptionId: 1,
    funFact:
      `💡 1831年法拉第发现电磁感应原理（变化的磁场产生电流），这就是发电机和变压器的基础。当时英国财政大臣格莱斯顿参观他的实验后问："这玩意儿有什么用？"法拉第给出了这个经典回答。后来格莱斯顿当了首相，看到电力工业蓬勃发展，特地跑来跟法拉第说："还好当初没听我的！"现在全球所有电力都来自这个"婴儿"——你说它有用吗？`,
    wrongRoast:
      `💡 收电费赚大钱？你这是把法拉第当成电力公司老板了！人家是纯粹的科学家，脑子里只有电场磁场没有钞票！法拉第这句"婴儿有什么用"成了科学史上最经典的回答之一——后来那个"婴儿"长成了电力工业，点亮了整个世界！下次看到你看不懂的新科技时，别急着否定，说不定那就是下一个"电磁婴儿"！`,
    era: "electromagnetic",
    difficulty: "easy",
  },
  {
    id: 11,
    physicist: `法拉第`,
    portraitPrompt: `Michael Faraday cartoon portrait, young man binding books in bookstore, dreaming of science, humorous illustration`,
    catchphrase: `工作，完成，出版！`,
    famousQuote: `一个婴儿有什么用呢？总有一天他会长大成人！`,
    question: `法拉第出身贫寒，他最初是靠什么接触到科学的？`,
    options: [
      { id: 1, text: `当装订工学徒，在装订的科学书籍里自学成才`, isHilarious: false },
      { id: 2, text: `在贵族家当仆人，偷听主人和科学家聊天`, isHilarious: true },
      { id: 3, text: `街头卖报纸时，被一位科学家看中收为徒弟`, isHilarious: true },
    ],
    correctOptionId: 1,
    funFact:
      `📚 法拉第的父亲是个铁匠，家里穷得叮当响，他13岁就去伦敦当报童，14岁成了装订工学徒。别人装订书只动手，他装订书还动脑——一边装订一边把书读了！尤其喜欢《大英百科全书》里关于电的条目。后来他把自己整理的精美笔记送给著名化学家戴维，戴维被他的才华打动，让他当了自己的助手。这大概是历史上最励志的"装订工逆袭"故事！`,
    wrongRoast:
      `📚 偷听主人聊天？你这是把法拉第的人生写成《装订工偷听记》了！人家的成功靠的是真才实学——一边装订书一边把书读透，还主动给科学家戴维送了自己整理的精美笔记！这才叫"知识改变命运"，不是靠偷听！下次你在打印店装订论文的时候，也顺便读读内容——说不定你就是下一个法拉第，只是还没遇到你的戴维而已！`,
    era: "electromagnetic",
    difficulty: "hard",
  },
  {
    id: 12,
    physicist: `法拉第`,
    portraitPrompt: `Michael Faraday cartoon portrait, giving Christmas lecture for children, audience of kids with big eyes, humorous illustration`,
    catchphrase: `工作，完成，出版！`,
    famousQuote: `一个婴儿有什么用呢？总有一天他会长大成人！`,
    question: `法拉第晚年坚持做一件事，让科学在孩子心中播下种子，这件事是？`,
    options: [
      { id: 1, text: `每年圣诞节为青少年做科普讲座（圣诞科学讲座）`, isHilarious: false },
      { id: 2, text: `免费给穷人孩子送电池和磁铁当礼物`, isHilarious: true },
      { id: 3, text: `在公园摆摊做电磁魔术表演，不收门票`, isHilarious: true },
    ],
    correctOptionId: 1,
    funFact:
      `🎄 法拉第从1827年开始，坚持在英国皇家学会做面向青少年的"圣诞科学讲座"，一做就是19年！他用生动有趣的实验（比如用铁丝、磁铁、蜡烛做演示）把深奥的科学讲得像魔术一样，让无数孩子爱上了科学。这个传统一直延续到今天，每年圣诞节BBC都会直播皇家学会的圣诞讲座。法拉第曾说："科学不应只是少数人的奢侈品，而应惠及所有人。"`,
    wrongRoast:
      `🎄 摆摊变魔术？你这是把法拉第当成庙会卖艺的了！人家是在英国皇家学会的讲台上，给贵族子弟做"圣诞科学讲座"，一做就是19年！他用蜡烛、磁铁做的实验比魔术还精彩，让无数孩子爱上了科学！下次你给亲戚家小孩讲科学时，别光说教，找点有趣的实验——说不定你也能成为孩子心中的"法拉第叔叔"！`,
    era: "electromagnetic",
    difficulty: "easy",
  },
  {
    id: 20,
    physicist: `法拉第`,
    portraitPrompt: `Michael Faraday cartoon portrait, being offered knighthood by Queen Victoria but declining, palace setting, humorous illustration`,
    catchphrase: `工作，完成，出版！`,
    famousQuote: `一个婴儿有什么用呢？总有一天他会长大成人！`,
    question: `英国女王维多利亚曾想授予法拉第爵士爵位，他却拒绝了！为什么？`,
    options: [
      { id: 1, text: `他认为自己只是普通平民科学家，不想搞特殊`, isHilarious: false },
      { id: 2, text: `他讨厌宫廷礼仪，拒绝穿贵族礼服`, isHilarious: true },
      { id: 3, text: `爵位需要交钱，他太穷付不起`, isHilarious: true },
    ],
    correctOptionId: 1,
    funFact:
      `👑 法拉第的科学成就太伟大了，维多利亚女王亲自提议授予他爵士爵位！但法拉第婉言谢绝，说："我生而平民，不愿以任何头衔脱离平民身份。"他甚至拒绝了担任英国皇家学会会长的提名（这可是科学界的最高荣誉之一！）。对他来说，最珍贵的头衔是"迈克尔·法拉第先生"——那个从装订工逆袭的、始终保持初心的科学家。`,
    wrongRoast:
      `👑 付不起钱？讨厌礼服？法拉第要是你想的这么小气和爱折腾，他早就去当电力公司CEO发财了！人家拒绝爵位是因为他不忘初心——"我生而平民，不愿以任何头衔脱离平民身份。"这种淡泊名利的精神，比起那些削尖脑袋想混个头衔的人，不知道高到哪里去了！`,
    era: "electromagnetic",
    difficulty: "hard",
  },
  {
    id: 21,
    physicist: `法拉第`,
    portraitPrompt: `Michael Faraday cartoon portrait, suffering from memory loss in old age, writing in journal with confused expression, humorous illustration`,
    catchphrase: `工作，完成，出版！`,
    famousQuote: `一个婴儿有什么用呢？总有一天他会长大成人！`,
    question: `法拉第晚年深受记忆力衰退困扰，他找到什么奇特的方法来对抗健忘？`,
    options: [
      { id: 1, text: `每天写极其详细的日记，把每个实验都记录下来`, isHilarious: false },
      { id: 2, text: `每天背诵电磁学公式，锻炼大脑`, isHilarious: true },
      { id: 3, text: `每天做20个磁铁小实验，刺激脑细胞`, isHilarious: true },
    ],
    correctOptionId: 1,
    funFact:
      `📔 法拉第晚年记忆力严重衰退，经常忘记自己做过什么实验。但他有一个绝招：坚持写日记！从21岁开始，直到76岁去世，法拉第写了超过40年的实验日记，超过3000多页，记录了超过16000个实验的详细过程！就连今天中午吃了什么、明天要见什么人，也都记得清清楚楚。这些日记后来成了科学史上最珍贵的文献之一——堪称"最强辅助记忆法"！`,
    wrongRoast:
      `📔 背诵公式？做磁铁实验？法拉第的记忆力差到连自己刚做过的实验都忘了，还背公式呢！人家靠的是笔杆子——写了40多年、3000多页、16000多个实验的日记！连午饭吃了啥都记下来。下次你健忘的时候，别喝什么补脑液，先买个日记本，学学法拉第！`,
    era: "electromagnetic",
    difficulty: "easy",
  },
  {
    id: 13,
    physicist: `居里夫人`,
    portraitPrompt: `Marie Curie cartoon portrait, in laboratory, glowing radium sample, protective gear, playful illustration`,
    catchphrase: `人生中没有什么可怕的事物，只有需要理解的事物！`,
    famousQuote: `我们要把人生变成一个科学的梦，然后再把梦变成现实。`,
    question: `居里夫人第一次获得诺贝尔奖的原因是什么？`,
    options: [
      { id: 1, text: `和丈夫皮埃尔共同研究放射性现象，发现镭和钋`, isHilarious: false },
      { id: 2, text: `单独发现了镭元素，是第一个发现放射性的人`, isHilarious: true },
      { id: 3, text: `因为在一战中用X光设备救治了无数伤员`, isHilarious: true },
    ],
    correctOptionId: 1,
    funFact:
      `🏆 1903年，居里夫妇和贝克勒尔共同获得诺贝尔物理学奖，以表彰他们对放射性现象的研究。居里夫人是历史上第一位获得诺贝尔奖的女性！更厉害的是，1911年她又因成功分离出金属镭获得了诺贝尔化学奖——成为历史上第一个（也是少有的）在两个不同科学领域获得诺贝尔奖的人！她的大女儿伊雷娜后来也获得了诺贝尔奖，堪称"诺奖世家"。`,
    wrongRoast:
      `🏆 单独发现镭？你把居里夫人的两个诺奖混在一起搅成了"放射性奶茶"！第一个诺奖是和丈夫皮埃尔一起拿的物理学奖，第二个才是化学奖，至于X光救人是一战的事。这位传奇女性拿了两个诺奖、上了战场救人、还培养了一个诺奖女儿——她的人生精彩到你需要分三次记！下次记不清时，就想想：一个诺奖是狗粮，两个诺奖是传奇！`,
    era: "electromagnetic",
    difficulty: "easy",
  },
  {
    id: 14,
    physicist: `居里夫人`,
    portraitPrompt: `Marie Curie cartoon portrait, driving x-ray truck during World War I, wounded soldiers around, humorous illustration`,
    catchphrase: `人生中没有什么可怕的事物，只有需要理解的事物！`,
    famousQuote: `我们要把人生变成一个科学的梦，然后再把梦变成现实。`,
    question: `第一次世界大战期间，居里夫人做了什么了不起的事情？`,
    options: [
      { id: 1, text: `组织了200多辆X光医疗车"居里小姐"，亲赴前线救伤员`, isHilarious: false },
      { id: 2, text: `把所有镭捐出来，造原子弹结束战争`, isHilarious: true },
      { id: 3, text: `在后方给士兵讲授辐射防护知识课`, isHilarious: true },
    ],
    correctOptionId: 1,
    funFact:
      `🚑 一战爆发后，居里夫人立刻停止了镭的研究，把所有精力投入到战争救护中。她不仅亲自学习驾驶和修理汽车、操作X光设备，还募集资金、培训了150多名妇女成为X光技师。这些被称为"小居里"（Petit Curie）的X光车在前线巡回，医生可以快速找到伤员体内的弹片位置，手术成功率大大提高。据估计，居里夫人的努力拯救了超过100万士兵的生命！这位伟大的女性，不仅拿了两个诺奖，还上了战场救人——简直是超人！`,
    wrongRoast:
      `🚑 捐镭造原子弹？你这是把一战和二战搅成了"时空混乱粥"！原子弹是1945年才有的，一战时连核武器的概念都没有！而且居里夫人是坚定的和平主义者，她把所有镭都用来救死扶伤了——200多辆X光医疗车、150名女技师、拯救100万士兵生命！下次看历史剧时注意看年份，别把爱因斯坦和居里夫人凑成"核武器CP"！`,
    era: "electromagnetic",
    difficulty: "hard",
  },
  {
    id: 15,
    physicist: `居里夫人`,
    portraitPrompt: `Marie Curie cartoon portrait, her notebooks in lead box, glowing green radiation symbol, humorous illustration`,
    catchphrase: `人生中没有什么可怕的事物，只有需要理解的事物！`,
    famousQuote: `我们要把人生变成一个科学的梦，然后再把梦变成现实。`,
    question: `居里夫人的实验笔记和手稿至今有什么特别之处？`,
    options: [
      { id: 1, text: `仍具有强烈放射性，必须存放在铅盒中，后人研究要穿防护服`, isHilarious: false },
      { id: 2, text: `笔迹潦草到至今无人能完全看懂`, isHilarious: true },
      { id: 3, text: `上面有很多神秘符号，据说藏着镭的配方`, isHilarious: true },
    ],
    correctOptionId: 1,
    funFact:
      `☢️ 居里夫人和丈夫当年工作条件极其简陋，没有任何辐射防护措施（当时人们还不知道辐射的危害）。他们的实验室笔记、手稿甚至食谱都被放射性元素严重污染，半衰期长达1600年的镭-226让这些文件在今天仍然发出强烈辐射！如果你想阅读居里夫人的原始笔记，必须先签署免责声明，然后穿着防护服进入法国国家图书馆的铅制保险箱中才能翻阅。——这位科学家留下的遗产，连她的笔记都"闪耀"着光芒！`,
    wrongRoast:
      `☢️ 神秘符号？你把居里夫人的笔记当成《达芬奇密码》续集了！人家的字迹工整得像印刷体，就是辐射太强了——半衰期1600年的镭-226让这些笔记再过一千年还是"闪闪发光"！下次翻你爷爷的旧笔记本时，先看看有没有发绿光——要是有，赶紧跑，别回头！`,
    era: "electromagnetic",
    difficulty: "easy",
  },
  {
    id: 22,
    physicist: `居里夫人`,
    portraitPrompt: `Marie Curie cartoon portrait, secretly teaching Polish children in underground classroom, patriotic scene, humorous illustration`,
    catchphrase: `人生中没有什么可怕的事物，只有需要理解的事物！`,
    famousQuote: `我们要把人生变成一个科学的梦，然后再把梦变成现实。`,
    question: `居里夫人年轻时在祖国波兰，曾做过什么勇敢的秘密工作？`,
    options: [
      { id: 1, text: `参加地下秘密学校，偷偷教波兰孩子母语和科学`, isHilarious: false },
      { id: 2, text: `偷偷把实验室的化学药品寄回家做实验`, isHilarious: true },
      { id: 3, text: `秘密印刷反俄传单，差点被抓进监狱`, isHilarious: true },
    ],
    correctOptionId: 1,
    funFact:
      `📖 居里夫人出生时，波兰被俄罗斯帝国占领，俄国人禁止波兰人说波兰语、教波兰文化。年仅17岁的玛丽（居里夫人的原名）和一群爱国青年组织了"流动大学"——一所秘密地下学校，偷偷给波兰农民和工人的孩子教波兰语、历史、数学和科学！她自己一边当家庭教师赚钱，一边给孩子们上课，还坚持学习，最终攒够钱去了巴黎留学。`,
    wrongRoast:
      `📖 印传单？偷药品？居里夫人的爱国方式可比你想的高级多了！人家17岁就办地下学校，偷偷给被压迫的波兰孩子教母语和科学——这叫"知识救国"！没有枪没有炮，靠的是粉笔和黑板。下次你抱怨学习苦的时候，想想居里夫人：冒着坐牢的风险教孩子读书，你那点作业算什么？`,
    era: "electromagnetic",
    difficulty: "hard",
  },
  {
    id: 23,
    physicist: `居里夫人`,
    portraitPrompt: `Marie Curie cartoon portrait, rejecting to patent radium isolation process, open science gesture, laboratory setting, humorous illustration`,
    catchphrase: `人生中没有什么可怕的事物，只有需要理解的事物！`,
    famousQuote: `我们要把人生变成一个科学的梦，然后再把梦变成现实。`,
    question: `居里夫人发现镭的提纯方法后，有人建议她申请专利赚大钱，她怎么做的？`,
    options: [
      { id: 1, text: `拒绝申请专利，把提纯方法公开，镭是全人类的财富`, isHilarious: false },
      { id: 2, text: `申请了专利，但把所有收入捐给了战争难民`, isHilarious: true },
      { id: 3, text: `申请了专利，用专利费建了世界上第一座核电站`, isHilarious: true },
    ],
    correctOptionId: 1,
    funFact:
      `💝 居里夫人成功分离出镭后，朋友和家人都劝她申请专利——这可是价值连城的技术！但她毫不犹豫地拒绝了，说："镭不是用来赚钱的，它是一种元素，是全人类的财富。"她把提纯方法公开，让全世界的科学家都可以免费研究。她甚至把自己获得的诺贝尔奖金的大部分，捐给了波兰的独立运动和贫困学生。`,
    wrongRoast:
      `💝 申请专利再捐钱？建核电站？你把居里夫人当成投资型企业家了！人家根本不稀罕钱——直接拒绝申请专利，让镭成为全人类的共同财富！这种精神是什么水平？放在今天，相当于有人发明了治愈癌症的方法，然后免费公开配方。下次你买一杯奶茶犹豫半天的时候，想想居里夫人拒绝亿万财富的魄力吧！`,
    era: "electromagnetic",
    difficulty: "easy",
  },
  {
    id: 16,
    physicist: `特斯拉`,
    portraitPrompt: `Nikola Tesla cartoon portrait, electric sparks, dramatic lighting, Tesla coil, playful illustration`,
    catchphrase: `电流是我的交响乐！`,
    famousQuote: `当下便是我的一切，过去与未来皆在此时交汇。`,
    question: `特斯拉为了证明交流电的安全，曾经做过什么惊人的表演？`,
    options: [
      { id: 1, text: `让百万伏高频交流电通过自己身体，点亮手中的灯泡`, isHilarious: false },
      { id: 2, text: `把电线接到电鳗身上，让它点亮整个房间`, isHilarious: true },
      { id: 3, text: `在雷雨天气爬到铁塔上，用风筝引雷电做实验`, isHilarious: true },
    ],
    correctOptionId: 1,
    funFact:
      `⚡ 1893年芝加哥世博会上，特斯拉做了一个震惊全场的表演：他站在一个绝缘台上，让特斯拉线圈产生的百万伏高频交流电通过自己的身体，从头到脚火花四溅，同时用手点亮了一个灯泡！当时爱迪生为了打压交流电，到处宣传"交流电会电死人"，特斯拉用这个表演证明：只要是高频交流电，哪怕电压再高也不会致命（因为电流只在皮肤表面流动）。这场表演让交流电瞬间获得了公众认可！`,
    wrongRoast:
      `⚡ 电鳗点灯？你这是把特斯拉当成《神奇动物在哪里》里的纽特了！人家可是"电流魔法师"，用百万伏高频交流电通过自己身体，点亮灯泡的同时还能装逼——这叫科学表演艺术！下次你在家插插座的时候可别学他，你家那是低频电，真的会把你电成"爆炸头"的！`,
    era: "electromagnetic",
    difficulty: "easy",
  },
  {
    id: 17,
    physicist: `特斯拉`,
    portraitPrompt: `Nikola Tesla cartoon portrait, feeding pigeons in park, white pigeon on shoulder, city background, humorous illustration`,
    catchphrase: `电流是我的交响乐！`,
    famousQuote: `当下便是我的一切，过去与未来皆在此时交汇。`,
    question: `特斯拉晚年独居纽约，他最要好的朋友是什么？`,
    options: [
      { id: 1, text: `纽约街头的鸽子，他每天亲自去喂，还给受伤的鸽子住酒店`, isHilarious: false },
      { id: 2, text: `一只会算数学题的天才乌鸦`, isHilarious: true },
      { id: 3, text: `马克·吐温，两人经常一起做电磁实验`, isHilarious: true },
    ],
    correctOptionId: 1,
    funFact:
      `🕊️ 特斯拉晚年住在纽约的酒店里，他最爱的事情就是去布莱恩特公园喂鸽子。据说他特别偏爱一只白色的母鸽子，每天都要去看她。当那只鸽子受伤时，特斯拉把它带回酒店照顾，还请了兽医。鸽子去世后，特斯拉悲痛万分，说"那只鸽子死了，我的生命之光也熄灭了"，从此他的健康状况急剧恶化。这位能驾驭闪电的天才，把他最后的温柔给了一群鸽子。（顺便说一句，他和马克·吐温确实是好朋友！）`,
    wrongRoast:
      `🕊️ 会算数学题的乌鸦？你这是把特斯拉的人生写成《疯狂动物城》了！人家晚年最好的朋友是纽约街头的鸽子——特别是一只白色的母鸽子，他每天亲自去喂，鸽子受伤了还带回酒店照顾！这位能驾驭闪电的天才，把最后的温柔都给了一群鸽子。下次你在公园喂鸽子时，记得对它们好一点——说不定其中就有特斯拉的老朋友！`,
    era: "electromagnetic",
    difficulty: "hard",
  },
];
