/* SweetCheck — product prototype with WorkBuddy Cloud persistence */
const IMG = {
  cheese: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=88',
  chocolate: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=88',
  strawberry: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=88',
  croissant: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=88',
  donut: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=88',
  tiramisu: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=88',
  macaron: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=900&q=88',
  cafe: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1100&q=85',
  shop: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1100&q=85',
  bakery: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1100&q=85',
  icecream: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=88',
  cone: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=900&q=88',
  gelato: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=88',
  toast: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=900&q=88',
  bread: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=900&q=88',
  pastry: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=900&q=88',
  tart: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=900&q=88',
  cakeslice: 'https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&w=900&q=88',
  eclair: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=900&q=88',
  mousse: 'https://images.unsplash.com/photo-1586985289906-406988974504?auto=format&fit=crop&w=900&q=88',
  chinese: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=900&q=88',
  cookie: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=88',
  cookie2: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=88',
  loaf: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?auto=format&fit=crop&w=900&q=88',
  roll: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&w=900&q=88',
  dessert: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=900&q=88'
};

const shops = [
  { id: 'holiland', name: '好利来 Holiland', category: '蛋糕', distance: .6, rating: 4.7, reviews: 328, image: IMG.cakeslice, address: '杭州市西湖区延安路 98 号', hours: '09:30–22:00', tags: ['芝士控天堂', '可颂', '伴手礼'], lat: 30.2551, lng: 120.1648 },
  { id: 'zhiweiguan', name: '知味观 · 湖滨糕点铺', category: '中式糕点', distance: .9, rating: 4.6, reviews: 412, image: IMG.cookie, address: '杭州市上城区湖滨路 12 号', hours: '08:00–21:00', tags: ['杭州老字号', '定胜糕', '伴手礼'], lat: 30.2512, lng: 120.1661 },
  { id: 'jiuyue', name: '九月生活', category: '面包烘焙', distance: 1.1, rating: 4.5, reviews: 203, image: IMG.loaf, address: '杭州市西湖区文三路 108 号', hours: '07:30–21:30', tags: ['社区烘焙', '北海道吐司', '平价'], lat: 30.2741, lng: 120.1325 },
  { id: 'second-round', name: '贰轮甜室', category: '蛋糕', distance: 1.2, rating: 4.8, reviews: 186, image: IMG.shop, address: '杭州市西湖区中山北路 217 号', hours: '10:00–21:30', tags: ['季节水果', '低甜奶油', '适合约会'], lat: 30.2663, lng: 120.1672 },
  { id: 'fulisenlin', name: '浮力森林', category: '面包烘焙', distance: 1.5, rating: 4.4, reviews: 176, image: IMG.bread, address: '杭州市拱墅区湖墅南路 236 号', hours: '08:00–21:00', tags: ['杭州老牌', '枫糖布丁', '童年回忆'], lat: 30.2843, lng: 120.1542 },
  { id: 'keshamier', name: '可莎蜜儿 C’EST MOI', category: '蛋糕', distance: 1.7, rating: 4.5, reviews: 158, image: IMG.strawberry, address: '杭州市西湖区教工路 66 号', hours: '09:00–21:30', tags: ['鲜奶蛋糕', '现挤泡芙', '生日蛋糕'], lat: 30.2788, lng: 120.1288 },
  { id: 'cycle', name: 'Cycle & Cycle', category: '面包烘焙', distance: 1.8, rating: 4.6, reviews: 249, image: IMG.cafe, address: '杭州市西湖区益乐路 39 号', hours: '08:30–20:30', tags: ['手作面包', '黄油香', '早餐首选'], lat: 30.2815, lng: 120.1201 },
  { id: 'wangbaolai', name: '汪保来 · 中式糕点', category: '中式糕点', distance: 2.0, rating: 4.7, reviews: 265, image: IMG.cookie2, address: '杭州市上城区解放路 89 号', hours: '09:00–21:00', tags: ['现烤糕点', '荷花酥', '低糖'], lat: 30.2468, lng: 120.1712 },
  { id: 'bc', name: 'B&C 黄油与面包', category: '面包烘焙', distance: 2.2, rating: 4.6, reviews: 341, image: IMG.croissant, address: '杭州市拱墅区延安路 385 号', hours: '10:00–22:00', tags: ['网红法包', '黄油香', '排队王'], lat: 30.2592, lng: 120.1622 },
  { id: 'foam-city', name: 'Foam City 甜品研究所', category: '法式甜品', distance: 2.4, rating: 4.5, reviews: 97, image: IMG.macaron, address: '杭州市上城区湖滨路 28 号', hours: '11:00–22:00', tags: ['高颜值', '创意口味', '季节限定'], lat: 30.2495, lng: 120.1653 },
  { id: 'chibata', name: '柴田西点 Chibata', category: '法式甜品', distance: 2.6, rating: 4.8, reviews: 122, image: IMG.mousse, address: '杭州市西湖区黄龙路 5 号', hours: '11:00–20:30', tags: ['日式法甜', '蒙布朗', '季节限定'], lat: 30.2672, lng: 120.1231 },
  { id: 'huanniu', name: '欢牛蛋糕屋', category: '蛋糕', distance: 2.9, rating: 4.6, reviews: 189, image: IMG.mousse, address: '杭州市西湖区古墩路 88 号', hours: '10:00–21:00', tags: ['杭州本地', '芋泥麻薯', '料足'], lat: 30.2901, lng: 120.1102 },
  { id: 'manji', name: '满记甜品', category: '糖水冰淇淋', distance: 3.2, rating: 4.3, reviews: 297, image: IMG.icecream, address: '杭州市上城区湖滨银泰 B1', hours: '10:00–22:00', tags: ['港式糖水', '杨枝甘露', '夜宵'], lat: 30.2501, lng: 120.1681 },
  { id: 'zidong', name: '资董窝玺 · 咖啡甜点', category: '咖啡甜品', distance: 3.5, rating: 4.7, reviews: 134, image: IMG.cafe, address: '杭州市西湖区天目山路 138 号', hours: '09:00–19:00', tags: ['精品咖啡', '巴斯克', '安静'], lat: 30.2701, lng: 120.1151 },
  { id: 'godiva', name: 'GODIVA 歌帝梵', category: '巧克力', distance: 3.8, rating: 4.5, reviews: 88, image: IMG.chocolate, address: '杭州市拱墅区杭州大厦 C 座', hours: '10:00–22:00', tags: ['比利时巧克力', '伴手礼', '浓郁'], lat: 30.2621, lng: 120.1602 },
  { id: 'nansong', name: '南宋胡记', category: '中式糕点', distance: 4.3, rating: 4.4, reviews: 156, image: IMG.tart, address: '杭州市上城区河坊街 176 号', hours: '08:30–20:30', tags: ['宋韵点心', '荷花酥', '手信'], lat: 30.2411, lng: 120.1701 }
];

const products = [
  { id: 'half-cheese', shopId: 'holiland', name: '半熟芝士', category: '蛋糕', price: 38, rating: 4.8, look: 4.6, reviews: 126, image: IMG.cheese, badge: '回购榜 No.1', desc: '轻盈芝士胚体，低温慢烤。冷藏后口感更绵密，是第一次到店最稳妥的选择。' },
  { id: 'lava', shopId: 'holiland', name: '冰山熔岩', category: '巧克力', price: 39, rating: 4.6, look: 4.9, reviews: 89, image: IMG.chocolate, badge: '浓郁巧克力', desc: '上层黑巧甘纳许，下层柔软蛋糕。可可风味浓郁，甜度偏高，推荐搭配美式。' },
  { id: 'honey-cake', shopId: 'holiland', name: '蜂蜜蛋糕', category: '蛋糕', price: 32, rating: 4.4, look: 4.1, reviews: 57, image: IMG.tiramisu, badge: '经典原味', desc: '质朴的蜂蜜香气与柔软蛋糕体，甜度适中，适合当作下午茶。' },
  { id: 'dingsheng', shopId: 'zhiweiguan', name: '定胜糕', category: '中式糕点', price: 12, rating: 4.6, look: 4.3, reviews: 208, image: IMG.strawberry, badge: '杭州老字号', desc: '米粉蒸制，豆沙夹心，粉红软糯带一点桂花香。杭州人的讨彩头点心。' },
  { id: 'longjing-su', shopId: 'zhiweiguan', name: '龙井茶酥', category: '中式糕点', price: 18, rating: 4.5, look: 4.7, reviews: 94, image: IMG.cookie, badge: '茶香清雅', desc: '酥皮里带龙井茶粉的清苦回甘，甜度克制，配绿茶刚好。' },
  { id: 'hokkaido-toast', shopId: 'jiuyue', name: '北海道吐司', category: '面包', price: 22, rating: 4.7, look: 4.2, reviews: 176, image: IMG.loaf, badge: '早餐首选', desc: '奶香足、组织绵软，撕着吃最有幸福感。复烤后外脆内软。' },
  { id: 'fresh-cream-cake', shopId: 'jiuyue', name: '轻乳鲜奶蛋糕', category: '蛋糕', price: 68, rating: 4.5, look: 4.6, reviews: 83, image: IMG.strawberry, badge: '生日推荐', desc: '动物奶油轻盈不糊口，胚体偏湿润，适合不爱甜的人。' },
  { id: 'strawberry', shopId: 'second-round', name: '草莓奶油蛋糕', category: '蛋糕', price: 42, rating: 4.9, look: 5, reviews: 78, image: IMG.strawberry, badge: '本周高分', desc: '当季草莓搭配轻盈动物奶油，果香明亮，酸甜平衡，颜值与风味同样出色。' },
  { id: 'tiramisu-cup', shopId: 'second-round', name: '微醺提拉米苏', category: '蛋糕', price: 36, rating: 4.6, look: 4.4, reviews: 43, image: IMG.tiramisu, badge: '咖啡酒香', desc: '咖啡液浸润手指饼干，马斯卡彭细腻顺滑，带一点克制的酒香。' },
  { id: 'maple-pudding', shopId: 'fulisenlin', name: '枫糖布丁', category: '甜点', price: 16, rating: 4.5, look: 4.4, reviews: 142, image: IMG.icecream, badge: '童年回忆', desc: '焦糖微苦、布丁滑嫩，是很多杭州人从小吃到大的那一口。' },
  { id: 'milk-toast', shopId: 'fulisenlin', name: '奶香片', category: '面包', price: 10, rating: 4.3, look: 4.0, reviews: 88, image: IMG.bread, badge: '平价好吃', desc: '烤得酥脆的面包片刷上炼乳，简单直接，配牛奶很合适。' },
  { id: 'light-cheesecake', shopId: 'keshamier', name: '轻乳酪蛋糕', category: '蛋糕', price: 32, rating: 4.6, look: 4.5, reviews: 119, image: IMG.cheese, badge: '招牌', desc: '比半熟芝士更清爽，入口即化，冰过之后口感更细。' },
  { id: 'cream-puff', shopId: 'keshamier', name: '香草泡芙', category: '甜点', price: 12, rating: 4.4, look: 4.3, reviews: 76, image: IMG.eclair, badge: '现挤奶油', desc: '现挤香草卡仕达，皮偏软，建议买完半小时内吃掉。' },
  { id: 'butter-croissant', shopId: 'cycle', name: '原味可颂', category: '面包', price: 18, rating: 4.7, look: 4.5, reviews: 92, image: IMG.croissant, badge: '早餐推荐', desc: '层次分明，外壳酥脆，内部保留柔韧与黄油香。出炉后两小时内风味最佳。' },
  { id: 'strawberry-donut', shopId: 'cycle', name: '草莓甜甜圈', category: '面包', price: 22, rating: 4.2, look: 4.8, reviews: 36, image: IMG.donut, badge: '季节限定', desc: '草莓巧克力淋面搭配松软面包体，颜值突出，适合喜欢高甜度的人。' },
  { id: 'lotus-pastry', shopId: 'wangbaolai', name: '荷花酥', category: '中式糕点', price: 9, rating: 4.8, look: 4.9, reviews: 231, image: IMG.cookie2, badge: '颜值天花板', desc: '层层酥皮炸开像一朵荷花，内馅清甜，趁热吃最酥。' },
  { id: 'mung-bean-cake', shopId: 'wangbaolai', name: '低糖绿豆糕', category: '中式糕点', price: 16, rating: 4.4, look: 4.2, reviews: 97, image: IMG.tart, badge: '清甜不腻', desc: '豆沙细腻、甜度压得很低，入口带一点冰凉感。' },
  { id: 'bc-strawberry-croissant', shopId: 'bc', name: '草莓奶油牛角', category: '面包', price: 28, rating: 4.7, look: 4.9, reviews: 268, image: IMG.croissant, badge: '排队必买', desc: '开酥牛角夹入厚奶油与新鲜草莓，视觉冲击强，建议两人分食。' },
  { id: 'bc-pistachio', shopId: 'bc', name: '开心果惠灵顿牛角', category: '面包', price: 32, rating: 4.5, look: 4.8, reviews: 112, image: IMG.pastry, badge: '季节限定', desc: '坚果香浓，酥皮掉渣厉害，口味偏浓郁，适合配黑咖啡。' },
  { id: 'pistachio-macaron', shopId: 'foam-city', name: '开心果马卡龙', category: '法式甜品', price: 26, rating: 4.5, look: 4.8, reviews: 31, image: IMG.macaron, badge: '坚果香', desc: '外壳轻脆，内馅带烘烤开心果香。建议配茶，一颗刚好。' },
  { id: 'rose-tart', shopId: 'foam-city', name: '玫瑰覆盆子挞', category: '法式甜品', price: 42, rating: 4.4, look: 4.9, reviews: 28, image: IMG.tart, badge: '创意口味', desc: '挞底酥脆，覆盆子酸度明亮，玫瑰香收在尾调，不冲。' },
  { id: 'mont-blanc', shopId: 'chibata', name: '栗子蒙布朗', category: '法式甜品', price: 48, rating: 4.9, look: 4.8, reviews: 156, image: IMG.mousse, badge: '本店第一', desc: '栗子泥绵密带颗粒感，甜度克制，底下的蛋白霜提供轻盈口感。' },
  { id: 'vanilla-eclair', shopId: 'chibata', name: '香草闪电泡芙', category: '法式甜品', price: 32, rating: 4.6, look: 4.7, reviews: 84, image: IMG.eclair, badge: '日式法甜', desc: '卡仕达顺滑、淋面薄脆，日式做法比传统法甜更清爽。' },
  { id: 'taro-mochi', shopId: 'huanniu', name: '芋泥麻薯盒子', category: '蛋糕', price: 39, rating: 4.7, look: 4.5, reviews: 203, image: IMG.gelato, badge: '料超足', desc: '芋泥厚实、麻薯拉丝，甜度中等，一盒两个人吃刚好。' },
  { id: 'strawberry-bomb', shopId: 'huanniu', name: '草莓炸弹蛋糕', category: '蛋糕', price: 128, rating: 4.6, look: 4.8, reviews: 67, image: IMG.strawberry, badge: '聚会推荐', desc: '整颗草莓堆满表面，奶油轻盈，适合生日或朋友聚会。' },
  { id: 'mango-pomelo', shopId: 'manji', name: '杨枝甘露', category: '糖水', price: 32, rating: 4.6, look: 4.4, reviews: 312, image: IMG.icecream, badge: '经典港式', desc: '芒果甜、西柚微苦，椰浆收尾，冰沙版本夏天更舒服。' },
  { id: 'durian-pancake', shopId: 'manji', name: '榴莲班戟', category: '糖水', price: 36, rating: 4.3, look: 4.2, reviews: 121, image: IMG.gelato, badge: '榴莲控', desc: '薄皮包整块榴莲果肉，气味浓烈，爱的人很爱。' },
  { id: 'basque', shopId: 'zidong', name: '焦香巴斯克', category: '蛋糕', price: 38, rating: 4.8, look: 4.6, reviews: 138, image: IMG.cheese, badge: '咖啡搭子', desc: '表面烤到微焦，中心保持流心，微苦焦香正好配手冲。' },
  { id: 'canele', shopId: 'zidong', name: '可露丽', category: '法式甜品', price: 22, rating: 4.5, look: 4.7, reviews: 59, image: IMG.donut, badge: '外脆内软', desc: '外壳焦糖脆、内里蜂窝软，带朗姆与香草香，出炉两小时内最佳。' },
  { id: 'truffle', shopId: 'godiva', name: '松露巧克力', category: '巧克力', price: 28, rating: 4.7, look: 4.8, reviews: 102, image: IMG.chocolate, badge: '经典', desc: '可可脂入口即化，苦甜平衡，适合配无糖茶。' },
  { id: 'chocolate-gelato', shopId: 'godiva', name: '黑巧冰淇淋', category: '巧克力', price: 45, rating: 4.5, look: 4.5, reviews: 64, image: IMG.cone, badge: '浓郁可可', desc: '浓度偏高、几乎不甜，融化后像一杯冰的甘纳许。' },
  { id: 'song-lotus', shopId: 'nansong', name: '宋式荷花酥', category: '中式糕点', price: 12, rating: 4.6, look: 4.9, reviews: 143, image: IMG.cookie, badge: '宋韵手信', desc: '造型考究、酥层分明，甜度比汪保来更低，适合当伴手礼。' },
  { id: 'osmanthus-cake', shopId: 'nansong', name: '桂花米糕', category: '中式糕点', price: 10, rating: 4.4, look: 4.3, reviews: 76, image: IMG.loaf, badge: '桂花季', desc: '米香软糯，桂花糖点缀，秋天限定，清甜不粘牙。' }
];

const state = {
  route: 'home', shopId: null, productId: null, search: '', category: '全部', showAllShops: false,
  session: null, reviews: [], likes: [], saved: [], reviewSort: 'newest',
  city: '杭州', pendingAction: null, pendingOtp: null, loginSending: false,
  publish: { taste: 5, look: 5, tags: [], image: '' }, luckyResult: null
};

const publicConfig = {
  endpoint: 'https://sweetcheck.app.workbuddy.host',
  oauthRelayBaseUrl: 'https://www.workbuddy.cn/v2/as/genie-baas/oauth',
  publishableKey: 'wbpk_17aKixJTJa2yNZrqX29eJe_55ezguHpRAfFIKHOl9tOQ2ZJJzP5j0hT'
};
const cloud = WorkBuddyCloud.createWorkBuddyCloud(publicConfig);

const paths = {
  home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v10h13V10M9 20v-6h6v6"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4.5 4.5"/>',
  pin: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  chevron: '<path d="m9 5 7 7-7 7"/>',
  down: '<path d="m6 9 6 6 6-6"/>',
  back: '<path d="m15 18-6-6 6-6M9 12h11"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>',
  star: '<path d="m12 2.8 2.8 5.7 6.3.9-4.5 4.4 1 6.2-5.6-3-5.6 3 1-6.2-4.5-4.4 6.3-.9L12 2.8Z"/>',
  sparkle: '<path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3ZM19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15ZM5 3l.7 2.3L8 6l-2.3.7L5 9l-.7-2.3L2 6l2.3-.7L5 3Z"/>',
  gift: '<path d="M20 12v9H4v-9M2 7h20v5H2zM12 7v14M12 7H7.5A2.5 2.5 0 1 1 10 4.5L12 7ZM12 7h4.5A2.5 2.5 0 1 0 14 4.5L12 7Z"/>',
  arrow: '<path d="M5 12h14m-5-5 5 5-5 5"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  camera: '<path d="M14.5 4h-5L7 7H3v13h18V7h-4l-2.5-3Z"/><circle cx="12" cy="13" r="4"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  bookmark: '<path d="M6 3h12v18l-6-4-6 4V3Z"/>',
  report: '<path d="M5 3h14v18H5zM9 8h6M9 12h6M9 16h4"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/>',
  shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/>',
  logout: '<path d="M10 4H4v16h6M14 8l4 4-4 4M8 12h10"/>',
  download: '<path d="M12 3v12m-5-5 5 5 5-5M4 20h16"/>',
  refresh: '<path d="M20 7v5h-5M4 17v-5h5"/><path d="M6.1 8a7 7 0 0 1 11.5-2L20 8M4 16l2.4 2a7 7 0 0 0 11.5-2"/>',
  message: '<path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5Z"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  cake: '<path d="M4 13h16v8H4zM4 17c2 2 3-2 5 0s3-2 5 0 3-2 6 0M8 13V9h8v4M12 9V6"/><path d="M12 3c1 1 1 2 0 3-1-1-1-2 0-3Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'
};
function icon(name, size = 20, fill = 'none') {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${fill}" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.cake}</svg>`;
}
function logo() {
  return `<span class="brand-mark">${icon('cake', 23)}</span><span><span class="brand-name">SweetCheck</span><span class="brand-sub">甜品避雷指南</span></span>`;
}
function esc(value = '') { return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function getShop(id) { return shops.find(s => s.id === id); }
function getProduct(id) { return products.find(p => p.id === id); }
function shopProducts(id) { return products.filter(p => p.shopId === id); }
function stars(n = 5) { return `<span class="score">${icon('star', 12, 'currentColor')} ${Number(n).toFixed(1)}</span>`; }
function avatar(name, extra = '') {
  const display = name || '甜';
  return `<span class="avatar ${extra}">${esc(display.slice(0,1))}</span>`;
}
function toast(message) {
  const el = document.getElementById('toast');
  el.textContent = message; el.classList.add('show');
  clearTimeout(toast.timer); toast.timer = setTimeout(() => el.classList.remove('show'), 2600);
}

function shell(content) {
  const active = state.route === 'shop' || state.route === 'product' ? 'home' : state.route;
  const nav = (route, label, ico) => `<button class="nav-item ${active === route ? 'active' : ''}" onclick="navigate('${route}')">${icon(ico,19)}<span>${label}</span>${active === route ? '<i class="nav-dot"></i>' : ''}</button>`;
  return `<div class="app-shell">
    <aside class="sidebar">
      <button class="brand" onclick="navigate('home')">${logo()}</button>
      <nav class="side-nav">${nav('home','发现甜品','compass')}${nav('favorites','我的收藏','heart')}${nav('profile','个人中心','user')}</nav>
      <div class="side-note"><div class="side-note-icon">${icon('shield',21)}</div><strong>真实体验，不接受充值</strong><p>每一条测评都来自真实味蕾。<br>好吃或避雷，都诚实表达。</p></div>
      <button class="side-profile" style="border:0;background:none;text-align:left" onclick="${state.session ? "navigate('profile')" : 'openLogin()'}">
        ${avatar(state.session?.user?.name || '游')}<span class="side-profile-text"><strong>${esc(state.session?.user?.name || '游客模式')}</strong><span>${state.session ? '继续记录甜蜜时刻' : '登录后写测评'}</span></span>
      </button>
    </aside>
    <main class="main">
      <header class="topbar">
        <button class="mobile-brand" style="border:0;background:none;padding:0" onclick="navigate('home')"><span class="brand-mark">${icon('cake',19)}</span><span class="brand-name">SweetCheck</span></button>
        <button class="location-button" onclick="openCity()">${icon('pin',16)}<div><strong>${state.city} · 西湖区</strong><br><span id="location-label">甜品在你身边</span></div>${icon('down',13)}</button>
        <div class="search-wrap">${icon('search',17)}<input class="search-input" id="global-search" value="${esc(state.search)}" oninput="handleSearch(this.value)" onkeydown="if(event.key==='Enter')navigate('home')" placeholder="搜索店名或想吃的单品…" aria-label="搜索店名或单品">${state.search ? `<button class="search-clear" onclick="clearSearch()">${icon('close',11)}</button>` : ''}</div>
        <button class="icon-button" onclick="toast('今天也要好好吃甜品')" aria-label="通知">${icon('bell',18)}<i class="notification-dot"></i></button>
      </header>
      ${content}
    </main>
  </div>
  <button class="fab" onclick="openLucky()" aria-label="今日甜品抽签">${icon('gift',24)}</button>
  <nav class="bottom-nav">
    ${nav('home','发现','compass')}
    ${nav('favorites','收藏','heart')}
    <button class="nav-item bottom-publish" onclick="startPublish()"><span class="publish-circle">${icon('plus',22)}</span><span>写测评</span></button>
    <button class="nav-item" onclick="openLucky()">${icon('gift',19)}<span>抽签</span></button>
    ${nav('profile','我的','user')}
  </nav>`;
}

function productCard(p) {
  return `<button class="product-card" onclick="openProduct('${p.id}')">
    <div class="product-image-wrap"><img class="product-image" src="${p.image}" alt="${p.name}" loading="lazy"><span class="product-badge">${p.badge}</span></div>
    <div class="product-copy"><div class="product-shop">${getShop(p.shopId).name}</div><h3 class="product-name">${p.name}</h3><div class="product-bottom"><span class="product-price">¥${p.price}</span>${stars(p.rating)}</div></div>
  </button>`;
}
function storeCard(s) {
  return `<button class="store-card" onclick="openShop('${s.id}')">
    <img class="store-image" src="${s.image}" alt="${s.name}" loading="lazy">
    <div class="store-info"><div class="store-kicker">${s.category.toUpperCase()}</div><h3 class="store-name">${s.name}</h3><div class="store-meta">${stars(s.rating)}<span>${s.distance.toFixed(1)} km</span><span>${s.reviews} 条真实测评</span></div><div class="store-tags">${s.tags.map(t=>`<span class="mini-tag">${t}</span>`).join('')}</div></div>
    <span class="store-arrow">${icon('chevron',18)}</span>
  </button>`;
}

function renderHome() {
  const q = state.search.trim().toLowerCase();
  const isBrowsing = !q && state.category === '全部';
  const filteredShops = shops.filter(s =>
    (state.category === '全部' || s.category === state.category) &&
    (!q || s.name.toLowerCase().includes(q) || s.tags.some(t => t.includes(q)) || shopProducts(s.id).some(p => p.name.toLowerCase().includes(q)))
  );
  const visibleShops = isBrowsing && !state.showAllShops ? filteredShops.slice(0, 6) : filteredShops;
  const hotProducts = products.filter(p => !q || p.name.toLowerCase().includes(q) || getShop(p.shopId).name.toLowerCase().includes(q)).slice().sort((a,b)=>b.rating-a.rating).slice(0,5);
  const cats = ['全部','蛋糕','面包烘焙','中式糕点','法式甜品','巧克力','糖水冰淇淋','咖啡甜品'];
  const content = `<div class="page"><div class="home-grid"><div class="home-main">
    <div class="welcome-row"><div><div class="eyebrow">A LITTLE SWEETNESS, A BETTER DAY</div><h1>把卡路里，留给<br>真正<em>值得的甜品。</em></h1></div><span class="weather">${icon('sun',17)} 杭州 18°C · 适合吃点甜</span></div>
    <section class="hero"><div class="hero-copy"><span class="hero-pill">${icon('sparkle',12)} 今日份的小确幸</span><h2>别只看店铺评分，<br>好吃的，是这一款。</h2><p>精确到 SKU 的真实测评，<br>让每一次选择都不踩雷。</p><button class="primary-button" onclick="openLucky()">抽一份今日甜 ${icon('arrow',14)}</button></div><img class="hero-image" src="${IMG.strawberry}" alt="草莓奶油蛋糕"></section>
    <div class="filter-row">${cats.map(c=>`<button class="filter-chip ${state.category===c?'active':''}" onclick="setCategory('${c}')">${c}</button>`).join('')}</div>
    <div class="section-head"><h2 class="section-title">${q ? `“${esc(state.search)}” 的结果` : (state.category === '全部' ? '离你很近的甜' : state.category + '好店')}<small>${filteredShops.length} 家好店</small></h2><button class="text-button" onclick="locateMe()">重新定位 ${icon('pin',12)}</button></div>
    <div class="store-list">${visibleShops.length ? visibleShops.map(storeCard).join('') : `<div class="empty-state"><div class="empty-icon">${icon('search',32)}</div><h3>暂时没有找到这份甜</h3><p>换个关键词试试，比如“芝士”或“可颂”。</p><button class="secondary-button" onclick="clearSearch();setCategory('全部')">看看全部甜品</button></div>`}</div>
    ${isBrowsing && filteredShops.length > 6 ? `<div class="show-all-wrap"><button class="secondary-button" onclick="toggleAllShops()">${state.showAllShops ? '收起列表' : `查看全部 ${filteredShops.length} 家甜品店`} ${icon('down',13)}</button></div>` : ''}
    <div class="section-head"><h2 class="section-title">值得专门去吃 <small>本周高分单品</small></h2><span class="text-button">真实打分 · 无广告</span></div>
    <div class="product-scroll">${hotProducts.map(productCard).join('')}</div>
  </div><aside class="right-rail">
    <div class="rail-card lucky-card"><div class="rail-head"><h3>今日甜品签</h3><span>DAILY SWEET</span></div><div class="lucky-illustration"><i class="lucky-circle"></i><img class="lucky-cake" src="${IMG.donut}" alt="甜品签"></div><h3>选择困难？交给味蕾</h3><p>从附近好店里，随机抽一份<br>专属于你的今日小确幸。</p><button class="primary-button" onclick="openLucky()">${icon('sparkle',15)} 开始抽签</button></div>
    <div class="rail-card"><div class="rail-head"><h3>杭州甜品口味趋势</h3><span>本周</span></div><p class="rail-summary">收录 ${shops.length} 家好店 · ${products.length} 款单品</p><div class="taste-row"><span>清甜</span><div class="taste-track"><i style="width:82%"></i></div><b>82%</b></div><div class="taste-row"><span>绵密</span><div class="taste-track"><i style="width:68%"></i></div><b>68%</b></div><div class="taste-row"><span>浓郁</span><div class="taste-track"><i style="width:51%"></i></div><b>51%</b></div><div class="taste-row"><span>酥脆</span><div class="taste-track"><i style="width:43%"></i></div><b>43%</b></div></div>
    <div class="rail-card quote-card"><p>“Life is short.<br>Make it sweet.”</p><span>— SWEETCHECK 日常</span></div>
  </aside></div></div>`;
  document.getElementById('app').innerHTML = shell(content);
}

function renderShop() {
  const s = getShop(state.shopId); if (!s) return navigate('home');
  const list = shopProducts(s.id);
  const content = `<div class="page detail-page"><button class="back-button" onclick="navigate('home')">${icon('back',16)} 返回附近</button>
    <section class="shop-hero"><img src="${s.image}" alt="${s.name}"><div class="shop-hero-copy"><div><h1>${s.name}</h1><p>${s.address} · ${s.hours}</p></div>${stars(s.rating)}</div></section>
    <div class="shop-summary"><div class="summary-item"><strong>${s.distance.toFixed(1)} km</strong><span>距你约 ${Math.ceil(s.distance*12)} 分钟</span></div><div class="summary-item"><strong>${list.length} 款</strong><span>在售单品已收录</span></div><div class="summary-item"><strong>${s.reviews}</strong><span>条真实测评</span></div></div>
    <div class="section-head"><h2 class="section-title">这次吃哪一款？<small>按测评热度排序</small></h2><button class="secondary-button" onclick="startPublish('${list[0]?.id || ''}')">${icon('plus',14)} 写测评</button></div>
    <div class="product-grid">${list.map(productCard).join('')}</div></div>`;
  document.getElementById('app').innerHTML = shell(content);
}

function reviewCard(r) {
  const count = state.likes.filter(l=>l.review_id===r.id).length;
  const liked = state.session && state.likes.some(l=>l.review_id===r.id && l.owner_id===state.session.user.id);
  const date = r.created_at ? new Date(r.created_at).toLocaleDateString('zh-CN',{month:'2-digit',day:'2-digit'}) : '近日';
  return `<article class="review-card"><div class="review-author">${avatar(r.owner_name || '甜品爱好者')}<div class="review-author-info"><strong>${esc(r.owner_name || '甜品爱好者')}</strong><span>${date} · 社区用户测评</span></div><span class="review-score">口味 ${Number(r.taste_rating).toFixed(1)}</span></div>
    <div class="review-body"><div><p class="review-comment">${esc(r.comment)}</p><div class="review-tags">${(r.tags||[]).map(t=>`<span class="taste-tag"># ${esc(t)}</span>`).join('')}</div></div>${r.image_data ? `<img class="review-image" src="${r.image_data}" alt="用户测评图片" loading="lazy">` : ''}</div>
    <div class="review-footer"><span>外观 ${Number(r.look_rating).toFixed(1)} · 真实体验，无商业合作</span><button class="like-button ${liked?'liked':''}" onclick="toggleLike(${r.id})">${icon('heart',14,liked?'currentColor':'none')} ${count || '赞'}</button></div></article>`;
}
function renderProduct() {
  const p = getProduct(state.productId); if (!p) return navigate('home');
  const s = getShop(p.shopId);
  let reviews = state.reviews.filter(r=>r.product_id===p.id);
  reviews.sort((a,b)=>state.reviewSort==='likes' ? state.likes.filter(l=>l.review_id===b.id).length-state.likes.filter(l=>l.review_id===a.id).length : new Date(b.created_at)-new Date(a.created_at));
  const fav = state.saved.some(x=>x.target_id===p.id&&x.item_type==='favorite');
  const content = `<div class="page detail-page"><button class="back-button" onclick="openShop('${s.id}')">${icon('back',16)} ${s.name}</button>
    <section class="product-detail-hero"><img class="product-detail-image" src="${p.image}" alt="${p.name}"><div class="product-detail-copy"><div class="eyebrow">${p.badge.toUpperCase()}</div><h1>${p.name}</h1><p>${s.name} · 基准价格 <b style="color:var(--ink)">¥${p.price}</b></p><p>${p.desc}</p><div class="rating-panel"><div class="big-score"><strong>${p.rating}</strong><span>${p.reviews + reviews.length} 人吃过</span></div><div class="rating-lines"><div class="rating-line"><span>口味</span><span class="stars score">★★★★★</span><b>${p.rating}</b></div><div class="rating-line"><span>外观</span><span class="stars score">★★★★★</span><b>${p.look}</b></div></div></div><div class="detail-actions"><button class="primary-button" onclick="startPublish('${p.id}')">${icon('plus',15)} 写下真实测评</button><button class="secondary-button" onclick="toggleFavorite('${p.id}')">${icon('heart',15,fav?'currentColor':'none')} ${fav?'已收藏':'收藏'}</button></div></div></section>
    <div class="section-head review-toolbar"><h2 class="section-title">大家怎么说 <small>${reviews.length} 条公开测评</small></h2><div class="review-tabs"><button class="review-tab ${state.reviewSort==='newest'?'active':''}" onclick="setReviewSort('newest')">最新</button><button class="review-tab ${state.reviewSort==='likes'?'active':''}" onclick="setReviewSort('likes')">最有用</button></div></div>
    <div class="review-list">${reviews.length ? reviews.map(reviewCard).join('') : `<div class="empty-state"><div class="empty-icon">${icon('message',32)}</div><h3>还没有这一款的真实测评</h3><p>成为第一个帮大家避雷或种草的人吧。</p><button class="primary-button" onclick="startPublish('${p.id}')">写第一条测评</button></div>`}</div></div>`;
  document.getElementById('app').innerHTML = shell(content);
}

function ownReviews() { return state.session ? state.reviews.filter(r=>r.owner_id===state.session.user.id) : []; }
function renderProfile() {
  const user = state.session?.user;
  const mine = ownReviews();
  const likes = state.likes.filter(l=>mine.some(r=>r.id===l.review_id)).length;
  const content = `<div class="page detail-page profile-page"><div class="profile-cover">${avatar(user?.name || '甜')}<div class="profile-user"><h1>${esc(user?.name || '甜品漫游者')}</h1><p>${user ? '认真吃甜，也认真记录每一口。' : '登录后，收藏与甜蜜战绩会一直保留。'}</p><button class="secondary-button" onclick="${user ? "toast('个人资料编辑即将开放')" : 'openLogin()'}">${user ? '编辑个人资料' : '登录 / 注册'}</button></div></div>
    <div class="stats-grid"><div class="stat-card"><span>今年吃过的单品</span><strong>${new Set(mine.map(r=>r.product_id)).size}<small>款</small></strong></div><div class="stat-card"><span>写过的真实测评</span><strong>${mine.length}<small>条</small></strong></div><div class="stat-card"><span>收获的赞</span><strong>${likes}<small>个</small></strong></div></div>
    <section class="annual-card"><div><div class="eyebrow">2026 SWEET MEMORIES</div><h2>你的年度甜蜜战绩</h2><p>这一年，你认真吃过的每一份甜，<br>都值得被好好收藏。</p><button class="primary-button" onclick="openAnnual()">${icon('report',15)} 生成年度报告</button></div><img class="annual-poster-mini" src="${IMG.strawberry}" alt="年度甜品报告"></section>
    <div class="section-head"><h2 class="section-title">我的甜品档案</h2></div><div class="menu-list"><button class="menu-item" onclick="navigate('favorites')">${icon('heart',19)}<span>我的收藏</span>${icon('chevron',15)}</button><button class="menu-item" onclick="showMyReviews()">${icon('message',19)}<span>我的测评</span>${icon('chevron',15)}</button><button class="menu-item" onclick="toast('已开启真实无广模式')">${icon('shield',19)}<span>真实无广承诺</span>${icon('chevron',15)}</button><button class="menu-item" onclick="${user ? 'signOut()' : 'openLogin()'}">${icon(user?'logout':'settings',19)}<span>${user?'退出登录':'账号与登录'}</span>${icon('chevron',15)}</button></div></div>`;
  document.getElementById('app').innerHTML = shell(content);
}

function renderFavorites() {
  const favs = state.saved.filter(x=>x.item_type==='favorite').map(x=>getProduct(x.target_id)).filter(Boolean);
  const content = `<div class="page detail-page"><div class="welcome-row"><div><div class="eyebrow">MY SWEET LIST</div><h1>收藏的心动甜品</h1></div></div>${!state.session ? `<div class="empty-state"><div class="empty-icon">${icon('heart',34)}</div><h3>登录后建立自己的甜品清单</h3><p>喜欢的单品不再找不到，收藏数据会安全保存。</p><button class="primary-button" onclick="openLogin()">立即登录</button></div>` : favs.length ? `<div class="product-grid">${favs.map(productCard).join('')}</div>` : `<div class="empty-state"><div class="empty-icon">${icon('bookmark',34)}</div><h3>收藏夹还空空的</h3><p>看到想吃的单品，点一下爱心就能留在这里。</p><button class="primary-button" onclick="navigate('home')">去发现甜品</button></div>`}</div>`;
  document.getElementById('app').innerHTML = shell(content);
}

function render() {
  if (state.route==='home') renderHome();
  else if (state.route==='shop') renderShop();
  else if (state.route==='product') renderProduct();
  else if (state.route==='profile') renderProfile();
  else if (state.route==='favorites') renderFavorites();
}
function navigate(route) { state.route=route; state.search = route==='home' ? state.search : ''; closeModal(); render(); window.scrollTo({top:0,behavior:'smooth'}); }
function openShop(id) { state.shopId=id; state.route='shop'; render(); window.scrollTo({top:0,behavior:'smooth'}); }
function openProduct(id) { state.productId=id; state.route='product'; render(); window.scrollTo({top:0,behavior:'smooth'}); }
function setCategory(c) { state.category=c; state.showAllShops=false; renderHome(); }
function setReviewSort(sort) { state.reviewSort=sort; renderProduct(); }
function handleSearch(value) { state.search=value; if (state.route!=='home') { state.route='home'; } renderHome(); const input=document.getElementById('global-search'); input?.focus(); if(input) input.setSelectionRange(value.length,value.length); }
function clearSearch() { state.search=''; state.showAllShops=false; renderHome(); }
function toggleAllShops() { state.showAllShops=!state.showAllShops; renderHome(); }

function openModal(html, cls='') { document.getElementById('modal-root').innerHTML=`<div class="modal-backdrop" onclick="if(event.target===this)closeModal()"><section class="modal ${cls}">${html}</section></div>`; document.body.style.overflow='hidden'; }
function closeModal() { document.getElementById('modal-root').innerHTML=''; document.body.style.overflow=''; state.luckyResult=null; }
function modalClose() { return `<button class="modal-close" onclick="closeModal()" aria-label="关闭">${icon('close',16)}</button>`; }

function openLogin(afterLogin) {
  if (afterLogin) state.pendingAction=afterLogin;
  openModal(`${modalClose()}<div class="login-logo">${icon('cake',30)}</div><div class="modal-head"><div class="eyebrow">JOIN SWEETCHECK</div><h2>登录，记录每一口真实</h2><p>无广告、无滤镜，和同好一起认真吃甜。</p></div>
    <div class="field"><label>手机号</label><input id="login-phone" type="tel" maxlength="11" inputmode="numeric" placeholder="请输入 11 位手机号" oninput="document.getElementById('phone-error').textContent=''"><div id="phone-error" class="field-error"></div></div>
    <div class="field"><label>短信验证码</label><div class="code-row"><input id="login-code" type="text" maxlength="6" inputmode="numeric" placeholder="6 位验证码"><button type="button" class="secondary-button" id="send-code" onclick="sendPhoneCode()">获取验证码</button></div></div>
    <button class="primary-button full-button" id="login-submit" onclick="submitPhoneLogin()">登录 / 注册</button><div class="login-divider">或</div><button class="wechat-button" onclick="wechatLogin()">${icon('message',18)} 微信快捷登录</button><p class="terms">继续即表示同意《用户协议》与《隐私政策》<br>你的手机号仅用于账号登录，不会公开展示。</p>`);
}
async function sendPhoneCode() {
  const phone=document.getElementById('login-phone').value.trim();
  if(!/^1\d{10}$/.test(phone)){document.getElementById('phone-error').textContent='请输入正确的 11 位手机号';return;}
  const btn=document.getElementById('send-code'); btn.disabled=true; btn.textContent='发送中…';
  const sent=await cloud.auth.sendOtp({phone});
  if(sent.error){toast(sent.error.message||'验证码发送失败，请稍后重试');btn.disabled=false;btn.textContent='获取验证码';return;}
  state.pendingOtp={phone,...sent.data}; toast('验证码已发送，请查收短信');
  let seconds=60; btn.textContent=`${seconds}s 后重发`;
  const timer=setInterval(()=>{seconds--; if(!document.getElementById('send-code')){clearInterval(timer);return;} if(seconds<=0){clearInterval(timer);btn.disabled=false;btn.textContent='重新发送';}else btn.textContent=`${seconds}s 后重发`;},1000);
}
async function submitPhoneLogin() {
  const phone=document.getElementById('login-phone').value.trim(); const token=document.getElementById('login-code').value.trim();
  if(!state.pendingOtp||state.pendingOtp.phone!==phone){toast('请先获取当前手机号的验证码');return;}
  if(!/^\d{6}$/.test(token)){toast('请输入 6 位短信验证码');return;}
  const btn=document.getElementById('login-submit');btn.disabled=true;btn.textContent='正在登录…';
  const completed=await cloud.auth.verifyOtp({phone:state.pendingOtp.phone,verificationId:state.pendingOtp.verificationId,isExistingUser:state.pendingOtp.isExistingUser,token});
  if(completed.error){toast(completed.error.message||'登录失败，请检查验证码');btn.disabled=false;btn.textContent='登录 / 注册';return;}
  state.pendingOtp=null; await afterSignedIn(completed.data);
}
async function wechatLogin() {
  const {data,error}=await cloud.auth.signInWithOAuth({provider:'wechat',redirectTo:location.origin});
  if(error){toast(error.message||'微信登录暂不可用');return;} location.assign(data.url);
}
async function afterSignedIn(session) {
  state.session=session; closeModal(); await loadUserData(); render(); toast(`欢迎回来，${session.user.name||'甜品爱好者'}`);
  if(state.pendingAction){const action=state.pendingAction;state.pendingAction=null;setTimeout(action,150);}
}
async function signOut() { const {error}=await cloud.auth.signOut(); if(error)return toast('退出失败，请重试'); state.session=null;state.saved=[];render();toast('已安全退出登录'); }
async function requireAuth(action) { if(state.session){action();return;} openLogin(action); }

function startPublish(productId) {
  requireAuth(()=>openPublish(productId||state.productId||products[0].id));
}
function openPublish(productId) {
  const p=getProduct(productId)||products[0]; state.productId=p.id; state.publish={taste:5,look:5,tags:[],image:''};
  openModal(`${modalClose()}<div class="modal-head"><div class="eyebrow">HONEST REVIEW</div><h2>这一口，值得吗？</h2><p>你的真实体验，会帮另一个人少踩一次雷。</p></div>
    <div class="publish-product"><img src="${p.image}" alt="${p.name}"><div><strong>${p.name}</strong><span>${getShop(p.shopId).name}</span></div></div>
    <div class="field"><label>上传真实照片 <span>建议一张，自动压缩</span></label><div class="upload-zone" id="upload-zone">${icon('camera',25)}<p>点击上传你拍的甜品</p><input type="file" accept="image/jpeg,image/png,image/webp" onchange="compressImage(this)"></div></div>
    <div class="field"><label>双维评分 <span>1 星避雷，5 星惊艳</span></label><div class="star-input"><span>口味评分</span><div class="stars-control" id="taste-stars"></div></div><div class="star-input"><span>外观评分</span><div class="stars-control" id="look-stars"></div></div></div>
    <div class="field"><label>一句话真实短评 <span id="comment-count">0 / 50</span></label><textarea id="review-comment" maxlength="50" placeholder="比如：芝士很香，口感绵密，两块刚好…" oninput="document.getElementById('comment-count').textContent=this.value.length+' / 50'"></textarea></div>
    <div class="field"><label>贴上口味标签 <span>最多 3 个</span></label><div class="tag-selector">${['刚刚好','太甜了','口感绵密','口感轻盈','颜值天花板','酥到掉渣','回购清单','适合分享'].map(t=>`<button class="tag-option" data-tag="${t}" onclick="selectTag('${t}',this)">${t}</button>`).join('')}</div></div>
    <div class="form-note">同一单品 24 小时内只能发布 1 次测评。请基于真实消费体验，不接受商家充值。</div><button class="primary-button full-button" id="publish-submit" onclick="submitReview()">发布真实测评</button>`);
  updateStars();
}
function updateStars() {
  for(const key of ['taste','look']){const el=document.getElementById(`${key}-stars`);if(el)el.innerHTML=[1,2,3,4,5].map(n=>`<button class="star-button ${state.publish[key]>=n?'active':''}" onclick="setRating('${key}',${n})">${icon('star',20,state.publish[key]>=n?'currentColor':'none')}</button>`).join('');}
}
function setRating(key,n){state.publish[key]=n;updateStars();}
function selectTag(tag,el){const idx=state.publish.tags.indexOf(tag);if(idx>=0){state.publish.tags.splice(idx,1);el.classList.remove('selected');}else if(state.publish.tags.length<3){state.publish.tags.push(tag);el.classList.add('selected');}else toast('最多选择 3 个口味标签');}
async function compressImage(input) {
  const file=input.files[0];if(!file)return;
  if(!['image/jpeg','image/png','image/webp'].includes(file.type)||file.size>10*1024*1024){toast('请选择 10MB 以内的 JPG、PNG 或 WebP 图片');return;}
  const data=await new Promise(resolve=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.readAsDataURL(file);});
  const img=await new Promise(resolve=>{const i=new Image();i.onload=()=>resolve(i);i.src=data;});
  const scale=Math.min(1,640/img.width);const canvas=document.createElement('canvas');canvas.width=Math.round(img.width*scale);canvas.height=Math.round(img.height*scale);canvas.getContext('2d').drawImage(img,0,0,canvas.width,canvas.height);
  state.publish.image=canvas.toDataURL('image/jpeg',.76);const zone=document.getElementById('upload-zone');zone.insertAdjacentHTML('afterbegin',`<img class="upload-preview" src="${state.publish.image}" alt="测评图片预览">`);toast('图片已压缩并添加');
}
async function submitReview() {
  const comment=document.getElementById('review-comment').value.trim();if(!comment){toast('写一句真实感受再发布吧');return;}
  if(!state.session){openLogin(()=>openPublish(state.productId));return;}
  const p=getProduct(state.productId);const s=getShop(p.shopId);const btn=document.getElementById('publish-submit');btn.disabled=true;btn.textContent='正在检查发布频率…';
  const hasRecent=ownReviews().some(r=>r.product_id===p.id&&Date.now()-new Date(r.created_at).getTime()<24*60*60*1000);
  if(hasRecent){toast('这一单品 24 小时内已经测评过啦，明天再来');btn.disabled=false;btn.textContent='发布真实测评';return;}
  btn.textContent='正在发布…';
  const payload={product_id:p.id,shop_name:s.name,product_name:p.name,taste_rating:state.publish.taste,look_rating:state.publish.look,comment,tags:state.publish.tags,owner_name:state.session.user.name||null};
  if(state.publish.image)payload.image_data=state.publish.image;
  const {data,error}=await cloud.database.from('reviews').insert(payload).select();
  if(error||!data?.length){toast(error?.code==='23505'?'今天已经发布过这一款了':(error?.message||'发布失败，请稍后重试'));btn.disabled=false;btn.textContent='发布真实测评';return;}
  closeModal();await loadCloudData();openProduct(p.id);toast('发布成功，感谢你的真实分享');
}

async function toggleFavorite(productId) {
  requireAuth(async()=>{
    const existing=state.saved.find(x=>x.target_id===productId&&x.item_type==='favorite');
    if(existing){const {error}=await cloud.database.from('saved_items').delete().eq('id',existing.id);if(error)return toast('操作失败，请重试');state.saved=state.saved.filter(x=>x.id!==existing.id);toast('已取消收藏');}
    else{const {data,error}=await cloud.database.from('saved_items').insert({target_id:productId,item_type:'favorite'}).select();if(error||!data?.length)return toast(error?.message||'收藏失败，请重试');state.saved.push(data[0]);toast('已加入心动收藏');}
    render();
  });
}
async function toggleLike(reviewId) {
  requireAuth(async()=>{
    const existing=state.likes.find(x=>x.review_id===reviewId&&x.owner_id===state.session.user.id);
    if(existing){const {error}=await cloud.database.from('review_likes').delete().eq('id',existing.id);if(error)return toast('操作失败，请重试');state.likes=state.likes.filter(x=>x.id!==existing.id);}
    else{const {data,error}=await cloud.database.from('review_likes').insert({review_id:reviewId}).select();if(error||!data?.length)return toast(error?.message||'点赞失败，请重试');state.likes.push(data[0]);}
    renderProduct();
  });
}

function openLucky() {
  state.luckyResult=null;
  openModal(`${modalClose()}<div class="modal-head"><div class="eyebrow">TODAY'S SWEET SIGN</div><h2>今天，吃哪一份甜？</h2><p>从 ${state.city} 的甜品库随机抽取，已排除你的避雷店铺。</p></div><div class="lucky-stage" id="lucky-stage"><img class="lucky-result-image" id="lucky-image" src="${IMG.macaron}" alt="甜品抽签"></div><div class="lucky-result" id="lucky-result"><h2>把选择交给一点点运气</h2><p>也许今天，会遇见意想不到的好味道。</p></div><button class="primary-button full-button" id="lucky-button" onclick="drawLucky()">${icon('sparkle',16)} 抽取今日甜品</button>`,'lucky-modal');
}
function drawLucky() {
  const blocked=state.saved.filter(x=>x.item_type==='blocked').map(x=>x.target_id);
  const pool=products.filter(p=>!blocked.includes(p.shopId));if(!pool.length)return toast('抽签池为空，先移除一些避雷店铺吧');
  const btn=document.getElementById('lucky-button');btn.disabled=true;btn.textContent='正在认真挑选…';document.getElementById('lucky-stage').classList.add('spinning');
  let ticks=0;const spinner=setInterval(()=>{document.getElementById('lucky-image').src=pool[ticks++%pool.length].image;},110);
  setTimeout(()=>{clearInterval(spinner);const p=pool[Math.floor(Math.random()*pool.length)];state.luckyResult=p;const s=getShop(p.shopId);document.getElementById('lucky-image').src=p.image;document.getElementById('lucky-stage').classList.remove('spinning');document.getElementById('lucky-result').innerHTML=`<div class="eyebrow">今日宜 · 吃点甜</div><h2>${p.name}</h2><p>${s.name} · ${s.distance.toFixed(1)} km · ¥${p.price}</p><div class="score" style="display:flex">${icon('star',15,'currentColor')} ${p.rating} 分 · ${p.badge}</div><div class="lucky-actions"><button class="secondary-button" onclick="blockShop('${s.id}')">不再推荐这家</button><button class="primary-button" onclick="closeModal();openProduct('${p.id}')">就是它了 ${icon('arrow',14)}</button></div>`;btn.style.display='none';},1000);
}
function blockShop(shopId){requireAuth(async()=>{const {error}=await cloud.database.from('saved_items').insert({target_id:shopId,item_type:'blocked'}).select();if(error&&error.code!=='23505')return toast('设置失败，请重试');await loadUserData();closeModal();toast('已加入避雷名单，下次抽签不会再出现');});}

function openAnnual() {
  requireAuth(()=>{
    const mine=ownReviews();const likes=state.likes.filter(l=>mine.some(r=>r.id===l.review_id)).length;
    openModal(`${modalClose()}<div class="modal-head"><div class="eyebrow">2026 ANNUAL REPORT</div><h2>年度甜品鉴定师</h2><p>把这一年的甜蜜，装进一张可以分享的长图。</p></div><div class="report-preview"><canvas id="report-canvas" width="720" height="1040"></canvas></div><div class="report-actions"><button class="secondary-button" onclick="closeModal()">继续记录</button><button class="primary-button" onclick="downloadReport()">${icon('download',15)} 保存长图</button></div>`);
    drawReport(mine,likes);
  });
}
function drawReport(mine,likes) {
  const c=document.getElementById('report-canvas');if(!c)return;const x=c.getContext('2d');
  const g=x.createLinearGradient(0,0,720,1040);g.addColorStop(0,'#FCE2E9');g.addColorStop(.6,'#FFF7F4');g.addColorStop(1,'#F7DCE5');x.fillStyle=g;x.fillRect(0,0,720,1040);
  x.strokeStyle='rgba(255,107,129,.22)';x.lineWidth=2;for(let r=140;r<650;r+=95){x.beginPath();x.arc(600,180,r,0,Math.PI*2);x.stroke();}
  x.fillStyle='#FF6B81';x.font='600 23px sans-serif';x.fillText('SWEETCHECK · 2026',56,72);
  x.fillStyle='#333333';x.font='700 57px sans-serif';x.fillText('年度甜品鉴定师',56,166);x.font='24px sans-serif';x.fillStyle='#8C6874';x.fillText('把平凡的日子，过成喜欢的甜度。',58,210);
  x.fillStyle='rgba(255,255,255,.78)';roundRect(x,50,282,620,350,36);x.fill();
  const stats=[[new Set(mine.map(r=>r.product_id)).size,'吃过的单品 / 款'],[mine.length,'写下的测评 / 条'],[likes,'收获的喜欢 / 个']];
  stats.forEach((s,i)=>{const cx=150+i*210;x.textAlign='center';x.fillStyle='#FF6B81';x.font='700 62px sans-serif';x.fillText(s[0],cx,410);x.fillStyle='#8D777E';x.font='21px sans-serif';x.fillText(s[1],cx,456);});x.textAlign='left';
  x.fillStyle='#5D454E';x.font='500 25px sans-serif';x.fillText(mine.length?'每一份认真品尝，都有回声。':'第一份甜蜜记忆，等你亲手写下。',100,550);
  x.fillStyle='#FF6B81';x.font='700 27px sans-serif';x.fillText('我的年度口味关键词',56,710);
  const tags=mine.length?[...new Set(mine.flatMap(r=>r.tags||[]))].slice(0,3):['轻盈','治愈','认真生活'];if(!tags.length)tags.push('甜品探索家');
  tags.forEach((t,i)=>{x.fillStyle='rgba(255,255,255,.8)';roundRect(x,56+i*205,750,180,62,31);x.fill();x.fillStyle='#E85D76';x.font='22px sans-serif';x.textAlign='center';x.fillText(`# ${t}`,146+i*205,790);});x.textAlign='left';
  x.fillStyle='#3F3237';x.font='italic 600 32px Georgia';x.fillText('Life is short. Make it sweet.',56,900);x.fillStyle='#947680';x.font='20px sans-serif';x.fillText(`${esc(state.session?.user?.name||'甜品爱好者')} · SweetCheck 年度甜蜜档案`,56,965);
}
function roundRect(x,a,b,w,h,r){x.beginPath();x.roundRect(a,b,w,h,r);}
function downloadReport(){const c=document.getElementById('report-canvas');const a=document.createElement('a');a.download='SweetCheck-2026年度甜品报告.png';a.href=c.toDataURL('image/png');a.click();toast('年度长图已保存');}
function showMyReviews(){if(!state.session)return openLogin();const mine=ownReviews();if(!mine.length)return toast('发布第一条测评后，就能在这里回顾');openProduct(mine[0].product_id);toast(`你已发布 ${mine.length} 条真实测评`);}

function openCity(){openModal(`${modalClose()}<div class="modal-head"><div class="eyebrow">CHOOSE YOUR CITY</div><h2>今天在哪里吃甜？</h2><p>切换城市后，将优先展示周边甜品。</p></div><div class="tag-selector">${['杭州','上海','北京'].map(c=>`<button class="tag-option ${state.city===c?'selected':''}" onclick="selectCity('${c}')">${c}</button>`).join('')}</div><div class="form-note">定位仅用于计算门店距离，不会公开或保存你的个人位置。</div>`);}
function selectCity(city){state.city=city;closeModal();render();toast(`已切换到${city}`);}
function locateMe(){if(!navigator.geolocation)return toast('当前浏览器不支持定位');const label=document.getElementById('location-label');if(label)label.textContent='正在定位…';navigator.geolocation.getCurrentPosition(pos=>{shops.forEach(s=>{s.distance=haversine(pos.coords.latitude,pos.coords.longitude,s.lat,s.lng);});shops.sort((a,b)=>a.distance-b.distance);render();toast('已按当前位置更新距离');},()=>{if(label)label.textContent='定位未开启';toast('定位未开启，当前使用西湖区默认位置');},{timeout:6000});}
function haversine(a,b,c,d){const rad=v=>v*Math.PI/180,R=6371;const x=rad(c-a),y=rad(d-b);const h=Math.sin(x/2)**2+Math.cos(rad(a))*Math.cos(rad(c))*Math.sin(y/2)**2;return R*2*Math.atan2(Math.sqrt(h),Math.sqrt(1-h));}

async function loadCloudData(){
  const [{data:reviews,error:re},{data:likes,error:le}]=await Promise.all([cloud.database.from('reviews').select('*').order('created_at',{ascending:false}).limit(100),cloud.database.from('review_likes').select('*').limit(500)]);
  if(re)toast('公开测评暂时加载失败，请刷新重试');else state.reviews=reviews||[];
  if(!le)state.likes=likes||[];
}
async function loadUserData(){
  if(!state.session)state.saved=[];
  else{const {data,error}=await cloud.database.from('saved_items').select('*');if(error)toast('私人收藏加载失败，请稍后重试');else state.saved=data||[];}
  await loadCloudData();
}
async function restoreAuth(){
  const url=new URL(location.href);
  if(url.searchParams.has('code')||url.searchParams.has('error')){
    const provider=url.searchParams.get('provider');
    if(provider==='wechat'&&typeof cloud.auth.handleWechatWebCallback==='function'){
      const {data:session,error}=await cloud.auth.handleWechatWebCallback();
      if(error)toast(error.message||'微信授权登录失败');
      else if(session){state.session=session;for(const k of ['code','state','provider'])url.searchParams.delete(k);history.replaceState(null,'',`${url.pathname}${url.search}${url.hash}`);}
    }else if(url.searchParams.has('code'))toast('授权回调缺少有效的登录方式，请重新登录');
  }else{const {data:session}=await cloud.auth.getSession();state.session=session||null;}
}

window.navigate=navigate;window.openShop=openShop;window.openProduct=openProduct;window.setCategory=setCategory;window.setReviewSort=setReviewSort;window.handleSearch=handleSearch;window.clearSearch=clearSearch;window.toggleAllShops=toggleAllShops;window.openLogin=openLogin;window.sendPhoneCode=sendPhoneCode;window.submitPhoneLogin=submitPhoneLogin;window.wechatLogin=wechatLogin;window.signOut=signOut;window.closeModal=closeModal;window.startPublish=startPublish;window.setRating=setRating;window.selectTag=selectTag;window.compressImage=compressImage;window.submitReview=submitReview;window.toggleFavorite=toggleFavorite;window.toggleLike=toggleLike;window.openLucky=openLucky;window.drawLucky=drawLucky;window.blockShop=blockShop;window.openAnnual=openAnnual;window.downloadReport=downloadReport;window.showMyReviews=showMyReviews;window.openCity=openCity;window.selectCity=selectCity;window.locateMe=locateMe;window.toast=toast;

(async function init(){render();await restoreAuth();await loadUserData();render();})();
