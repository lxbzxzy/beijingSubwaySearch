const app = getApp()

Page({
  route: [
    /*'1号线' '2号线' '4号线大兴线' '5号线' '6号线' '7号线' '8号线（北段）' '8号线（南段）' '9号线' '10号线' '13号线' 
    '14号线（东段）' '14号线（西段）' '15号线' */
    {
      name: '1号线', loop: false,
      station: [
        { name: '苹果园', transfer: [null] },
        { name: '古城', transfer: [null] },
        { name: '八角游乐园', transfer: [null] },
        { name: '八宝山', transfer: [null] },
        { name: '玉泉路', transfer: [null] },
        { name: '五棵松', transfer: [null] },
        { name: '万寿路', transfer: [null] },
        { name: '公主坟', transfer: ['10号线'] },
        { name: '军事博物馆', transfer: ['9号线'] },
        { name: '木樨地', transfer: [null] },
        { name: '南礼士路', transfer: [null] },
        { name: '复兴门', transfer: ['2号线'] },
        { name: '西单', transfer: ['4号线大兴线'] },
        { name: '天安门西', transfer: [null] },
        { name: '天安门东', transfer: [null] },
        { name: '东单', transfer: ['5号线'] },
        { name: '建国门', transfer: ['2号线'] },
        { name: '永安里', transfer: [null] },
        { name: '国贸', transfer: ['10号线'] },
        { name: '大望路', transfer: ['14号线（东段）'] },
        { name: '四惠', transfer: ['八通线'] },
        { name: '四惠东', transfer: ['八通线'] },
      ]
    },
    {
      name: '2号线', loop: true,
      station: [
        { name: '积水潭', transfer: [null] },
        { name: '鼓楼大街', transfer: ['8号线（北段）'] },
        { name: '安定门', transfer: [null] },
        { name: '雍和宫', transfer: ['5号线'] },
        { name: '东直门', transfer: ['13号线', '首都机场线'] },
        { name: '东四十条', transfer: [null] },
        { name: '朝阳门', transfer: ['6号线'] },
        { name: '建国门', transfer: ['1号线'] },
        { name: '北京站', transfer: [null] },
        { name: '崇文门', transfer: ['5号线'] },
        { name: '前门', transfer: [null] },
        { name: '和平门', transfer: [null] },
        { name: '宣武门', transfer: ['4号线大兴线'] },
        { name: '长椿街', transfer: [null] },
        { name: '复兴门', transfer: ['1号线'] },
        { name: '阜成门', transfer: [null] },
        { name: '车公庄', transfer: ['6号线'] },
        { name: '西直门', transfer: ['4号线大兴线', '13号线'] },
      ]
    },
    {
      name: '4号线大兴线', loop: false,
      station: [
        { name: '天宫院', transfer: [null] },
        { name: '生物医药基地', transfer: [null] },
        { name: '义和庄', transfer: [null] },
        { name: '黄村火车站', transfer: [null] },
        { name: '黄村西大街', transfer: [null] },
        { name: '清源路', transfer: [null] },
        { name: '枣园', transfer: [null] },
        { name: '高米店南', transfer: [null] },
        { name: '高米店北', transfer: [null] },
        { name: '西红门', transfer: [null] },
        { name: '新宫', transfer: [null] },
        { name: '公益西桥', transfer: [null] },
        { name: '角门西', transfer: ['10号线'] },
        { name: '马家堡', transfer: [null] },
        { name: '北京南站', transfer: [null] },
        { name: '陶然亭', transfer: [null] },
        { name: '菜市口', transfer: ['7号线'] },
        { name: '宣武门', transfer: ['2号线'] },
        { name: '西单', transfer: ['1号线'] },
        { name: '灵境胡同', transfer: [null] },
        { name: '西四', transfer: [null] },
        { name: '平安里', transfer: ['6号线'] },
        { name: '新街口', transfer: [null] },
        { name: '西直门', transfer: ['2号线', '13号线'] },
        { name: '动物园', transfer: [null] },
        { name: '国家图书馆', transfer: ['9号线'] },
        { name: '魏公村', transfer: [null] },
        { name: '人民大学', transfer: [null] },
        { name: '海淀黄庄', transfer: ['10号线'] },
        { name: '中关村', transfer: [null] },
        { name: '北京大学东门', transfer: [null] },
        { name: '圆明园', transfer: [null] },
        { name: '西苑', transfer: ['16号线'] },
        { name: '北宫门', transfer: [null] },
        { name: '安河桥北', transfer: [null] },
      ]
    },
    {
      name: '5号线', loop: false,
      station: [
        { name: '天通苑北', transfer: [null] },
        { name: '天通苑', transfer: [null] },
        { name: '天通苑南', transfer: [null] },
        { name: '立水桥', transfer: ['13号线'] },
        { name: '立水桥南', transfer: [null] },
        { name: '北苑路北', transfer: [null] },
        { name: '大屯路东', transfer: ['15号线'] },
        { name: '惠新西街北口', transfer: [null] },
        { name: '惠新西街南口', transfer: ['10号线'] },
        { name: '和平西桥', transfer: [null] },
        { name: '和平里北街', transfer: [null] },
        { name: '雍和宫', transfer: ['2号线'] },
        { name: '北新桥', transfer: [null] },
        { name: '张自忠路', transfer: [null] },
        { name: '东四', transfer: ['6号线'] },
        { name: '灯市口', transfer: [null] },
        { name: '东单', transfer: ['1号线'] },
        { name: '崇文门', transfer: ['2号线'] },
        { name: '磁器口', transfer: ['7号线'] },
        { name: '天坛东门', transfer: [null] },
        { name: '蒲黄榆', transfer: ['14号线（东段）'] },
        { name: '刘家窑', transfer: [null] },
        { name: '宋家庄', transfer: ['10号线', '亦庄线'] },
      ]
    },
    {
      name: '6号线', loop: false,
      station: [
        { name: '金安桥', transfer: ['S1线'] },
        { name: '杨庄', transfer: [null] },
        { name: '西黄村', transfer: [null] },
        { name: '廖公庄', transfer: [null] },
        { name: '田村', transfer: [null] },
        { name: '海淀五路居', transfer: [null] },
        { name: '慈寿寺', transfer: ['10号线'] },
        { name: '花园桥', transfer: [null] },
        { name: '白石桥南', transfer: ['9号线'] },
        { name: '车公庄西', transfer: [null] },
        { name: '车公庄', transfer: ['2号线'] },
        { name: '平安里', transfer: ['4号线大兴线'] },
        { name: '北海北', transfer: [null] },
        { name: '南锣鼓巷', transfer: ['8号线（北段）'] },
        { name: '东四', transfer: ['5号线'] },
        { name: '朝阳门', transfer: ['2号线'] },
        { name: '东大桥', transfer: [null] },
        { name: '呼家楼', transfer: ['10号线'] },
        { name: '金台路', transfer: ['14号线（东段）'] },
        { name: '十里堡', transfer: [null] },
        { name: '青年路', transfer: [null] },
        { name: '褡裢坡', transfer: [null] },
        { name: '黄渠', transfer: [null] },
        { name: '常营', transfer: [null] },
        { name: '草房', transfer: [null] },
        { name: '物资学院路', transfer: [null] },
        { name: '通州北关', transfer: [null] },
        { name: '北运河西', transfer: [null] },
        { name: '北运河东', transfer: [null] },
        { name: '郝家府', transfer: [null] },
        { name: '东夏园', transfer: [null] },
        { name: '潞城', transfer: [null] },
      ]
    },
    {
      name: '7号线', loop: false,
      station: [
        { name: '北京西站', transfer: ['9号线'] },
        { name: '湾子', transfer: [null] },
        { name: '达官营', transfer: [null] },
        { name: '广安门内', transfer: [null] },
        { name: '菜市口', transfer: ['4号线大兴线'] },
        { name: '虎坊桥', transfer: [null] },
        { name: '珠市口', transfer: ['8号线（南段）'] },
        { name: '桥湾', transfer: [null] },
        { name: '磁器口', transfer: ['5号线'] },
        { name: '广渠门内', transfer: [null] },
        { name: '广渠门外', transfer: [null] },
        { name: '九龙山', transfer: ['14号线（东段）'] },
        { name: '大郊亭', transfer: [null] },
        { name: '百子湾', transfer: [null] },
        { name: '化工', transfer: [null] },
        { name: '南楼梓庄', transfer: [null] },
        { name: '欢乐谷景区', transfer: [null] },
        { name: '垡头', transfer: [null] },
        { name: '双合', transfer: [null] },
        { name: '焦化厂', transfer: [null] },
      ]
    },
    {
      name: '8号线（北段）', loop: false,
      station: [
        { name: '中国美术馆', transfer: [null] },
        { name: '南锣鼓巷', transfer: ['6号线'] },
        { name: '什刹海', transfer: [null] },
        { name: '鼓楼大街', transfer: ['2号线'] },
        { name: '安德里北街', transfer: [null] },
        { name: '安华桥', transfer: [null] },
        { name: '北土城', transfer: ['10号线'] },
        { name: '奥体中心', transfer: [null] },
        { name: '奥林匹克公园', transfer: ['15号线'] },
        { name: '森林公园南门', transfer: [null] },
        { name: '林翠桥', transfer: [null] },
        { name: '永泰庄', transfer: [null] },
        { name: '西小口', transfer: [null] },
        { name: '育新', transfer: [null] },
        { name: '霍营', transfer: ['13号线'] },
        { name: '回龙观东大街', transfer: [null] },
        { name: '平西府', transfer: [null] },
        { name: '育知路', transfer: [null] },
        { name: '朱辛庄', transfer: ['昌平线'] },
      ]
    },
    {
      name: '8号线（南段）', loop: false,
      station: [
        { name: '珠市口', transfer: ['7号线'] },
        { name: '天桥', transfer: [null] },
        { name: '永定门外', transfer: ['14号线（东段）'] },
        { name: '木樨园', transfer: [null] },
        { name: '海户屯', transfer: [null] },
        { name: '大红门南', transfer: [null] },
        { name: '和义', transfer: [null] },
        { name: '东高地', transfer: [null] },
        { name: '火箭万源', transfer: [null] },
        { name: '五福堂', transfer: [null] },
        { name: '德茂', transfer: [null] },
        { name: '瀛海', transfer: [null] },
      ]
    },
    {
      name: '9号线', loop: false,
      station: [
        { name: '国家图书馆', transfer: ['4号线大兴线'] },
        { name: '白石桥南', transfer: ['6号线'] },
        { name: '白堆子', transfer: [null] },
        { name: '军事博物馆', transfer: ['1号线'] },
        { name: '北京西站', transfer: ['7号线'] },
        { name: '六里桥东', transfer: [null] },
        { name: '六里桥', transfer: ['10号线'] },
        { name: '七里庄', transfer: ['14号线（西段）'] },
        { name: '丰台东大街', transfer: [null] },
        { name: '丰台南路', transfer: [null] },
        { name: '科怡路', transfer: [null] },
        { name: '丰台科技园', transfer: [null] },
        { name: '郭公庄', transfer: ['房山线'] },
      ]
    },
    {
      name: '10号线', loop: true,
      station: [
        { name: '巴沟', transfer: ['西郊线'] },
        { name: '苏州街', transfer: [null] },
        { name: '海淀黄庄', transfer: ['4号线大兴线'] },
        { name: '知春里', transfer: [null] },
        { name: '知春路', transfer: ['13号线'] },
        { name: '西土城', transfer: [null] },
        { name: '牡丹园', transfer: [null] },
        { name: '健德门', transfer: [null] },
        { name: '北土城', transfer: ['8号线（北段）'] },
        { name: '安贞门', transfer: [null] },
        { name: '惠新西街南口', transfer: ['5号线'] },
        { name: '芍药居', transfer: ['13号线'] },
        { name: '太阳宫', transfer: [null] },
        { name: '三元桥', transfer: ['首都机场线'] },
        { name: '亮马桥', transfer: [null] },
        { name: '农业展览馆', transfer: [null] },
        { name: '团结湖', transfer: [null] },
        { name: '呼家楼', transfer: ['6号线'] },
        { name: '金台夕照', transfer: [null] },
        { name: '国贸', transfer: ['1号线'] },
        { name: '双井', transfer: [null] },
        { name: '劲松', transfer: [null] },
        { name: '潘家园', transfer: [null] },
        { name: '十里河', transfer: ['14号线（东段）'] },
        { name: '分钟寺', transfer: [null] },
        { name: '成寿寺', transfer: [null] },
        { name: '宋家庄', transfer: ['5号线', '亦庄线'] },
        { name: '石榴庄', transfer: [null] },
        { name: '大红门', transfer: [null] },
        { name: '角门东', transfer: [null] },
        { name: '角门西', transfer: ['4号线大兴线'] },
        { name: '草桥', transfer: ['大兴机场线'] },
        { name: '纪家庙', transfer: [null] },
        { name: '首经贸', transfer: [null] },
        { name: '丰台站', transfer: [null] },
        { name: '泥洼', transfer: [null] },
        { name: '西局', transfer: ['14号线（西段）'] },
        { name: '六里桥', transfer: ['9号线'] },
        { name: '莲花桥', transfer: [null] },
        { name: '公主坟', transfer: ['1号线'] },
        { name: '西钓鱼台', transfer: [null] },
        { name: '慈寿寺', transfer: ['6号线'] },
        { name: '车道沟', transfer: [null] },
        { name: '长春桥', transfer: [null] },
        { name: '火器营', transfer: [null] },
      ]
    },
    {
      name: '13号线', loop: false,
      station: [
        { name: '西直门', transfer: ['2号线', '4号线大兴线'] },
        { name: '大钟寺', transfer: [null] },
        { name: '知春路', transfer: ['10号线'] },
        { name: '五道口', transfer: [null] },
        { name: '上地', transfer: [null] },
        { name: '西二旗', transfer: ['昌平线'] },
        { name: '龙泽', transfer: [null] },
        { name: '回龙观', transfer: [null] },
        { name: '霍营', transfer: ['8号线（北段）'] },
        { name: '立水桥', transfer: ['5号线'] },
        { name: '北苑', transfer: [null] },
        { name: '望京西', transfer: ['15号线'] },
        { name: '芍药居', transfer: ['10号线'] },
        { name: '光熙门', transfer: [null] },
        { name: '柳芳', transfer: [null] },
        { name: '东直门', transfer: ['2号线', '首都机场线'] },
      ]
    },
    {
      name: '14号线（东段）', loop: false,
      station: [
        { name: '北京南站', transfer: ['4号线大兴线'] },
        { name: '永定门外', transfer: ['8号线（南段）'] },
        { name: '景泰', transfer: [null] },
        { name: '蒲黄榆', transfer: ['5号线'] },
        { name: '方庄', transfer: [null] },
        { name: '十里河', transfer: ['10号线'] },
        { name: '北工大西门', transfer: [null] },
        { name: '平乐园', transfer: [null] },
        { name: '九龙山', transfer: ['7号线'] },
        { name: '大望路', transfer: ['1号线'] },
        { name: '金台路', transfer: ['6号线'] },
        { name: '朝阳公园', transfer: [null] },
        { name: '枣营', transfer: [null] },
        { name: '东风北桥', transfer: [null] },
        { name: '将台', transfer: [null] },
        { name: '望京南', transfer: [null] },
        { name: '阜通', transfer: [null] },
        { name: '望京', transfer: ['15号线'] },
        { name: '东湖渠', transfer: [null] },
        { name: '来广营', transfer: [null] },
        { name: '善各庄', transfer: [null] },
      ]
    },
    {
      name: '14号线（西段）', loop: false,
      station: [
        { name: '西局', transfer: [null] },
        { name: '七里庄', transfer: ['9号线'] },
        { name: '大井', transfer: [null] },
        { name: '郭庄子', transfer: [null] },
        { name: '大瓦窑', transfer: [null] },
        { name: '园博园', transfer: [null] },
        { name: '张郭庄', transfer: [null] },
      ]
    },
    {
      name: '15号线', loop: false,
      station: [
        { name: '清华东路西口', transfer: [null] },
        { name: '六道口', transfer: [null] },
        { name: '北沙滩', transfer: [null] },
        { name: '奥林匹克公园', transfer: ['8号线（北段）'] },
        { name: '安立路', transfer: [null] },
        { name: '大屯路东', transfer: ['5号线'] },
        { name: '关庄', transfer: [null] },
        { name: '望京西', transfer: ['13号线'] },
        { name: '望京', transfer: ['14号线（东段）'] },
        { name: '望京东', transfer: [null] },
        { name: '崔各庄', transfer: [null] },
        { name: '马泉营', transfer: [null] },
        { name: '孙河', transfer: [null] },
        { name: '国展', transfer: [null] },
        { name: '花梨坎', transfer: [null] },
        { name: '后沙峪', transfer: [null] },
        { name: '南法信', transfer: [null] },
        { name: '石门', transfer: [null] },
        { name: '顺义', transfer: [null] },
        { name: '俸伯', transfer: [null] },
      ]
    },
    {
      name: '16号线', loop: false,
      station: [
        { name: '西苑', transfer: ['4号线大兴线'] },
        { name: '农大南路', transfer: [null] },
        { name: '马连洼', transfer: [null] },
        { name: '西北旺', transfer: [null] },
        { name: '永丰南', transfer: [null] },
        { name: '永丰', transfer: [null] },
        { name: '屯佃', transfer: [null] },
        { name: '稻香湖路', transfer: [null] },
        { name: '温阳路', transfer: [null] },
        { name: '北安河', transfer: [null] },
      ]
    },
    {
      name: '八通线', loop: false,
      station: [
        { name: '四惠', transfer: ['1号线'] },
        { name: '四惠东', transfer: ['1号线'] },
        { name: '高碑店', transfer: [null] },
        { name: '传媒大学', transfer: [null] },
        { name: '双桥', transfer: [null] },
        { name: '管庄', transfer: [null] },
        { name: '八里桥', transfer: [null] },
        { name: '通州北苑', transfer: [null] },
        { name: '果园', transfer: [null] },
        { name: '九棵树', transfer: [null] },
        { name: '梨园', transfer: [null] },
        { name: '临河里', transfer: [null] },
        { name: '土桥', transfer: [null] },
      ]
    },
    {
      name: '亦庄线', loop: false,
      station: [
        { name: '宋家庄', transfer: ['5号线', '10号线'] },
        { name: '肖村', transfer: [null] },
        { name: '小红门', transfer: [null] },
        { name: '旧宫', transfer: [null] },
        { name: '亦庄文化园', transfer: [null] },
        { name: '万源街', transfer: [null] },
        { name: '荣京东街', transfer: [null] },
        { name: '荣昌东街', transfer: [null] },
        { name: '同济南路', transfer: [null] },
        { name: '经海路', transfer: [null] },
        { name: '次渠南', transfer: [null] },
        { name: '次渠', transfer: [null] },
        { name: '亦庄火车站', transfer: [null] },
      ]
    },
    {
      name: 'S1线', loop: false,
      station: [
        { name: '金安桥', transfer: ['6号线'] },
        { name: '四道桥', transfer: [null] },
        { name: '桥户营', transfer: [null] },
        { name: '上岸', transfer: [null] },
        { name: '栗园庄', transfer: [null] },
        { name: '小园', transfer: [null] },
        { name: '石厂', transfer: [null] },
      ]
    },
    {
      name: '房山线', loop: false,
      station: [
        { name: '郭公庄', transfer: ['9号线'] },
        { name: '大葆台', transfer: [null] },
        { name: '稻田', transfer: [null] },
        { name: '长阳', transfer: [null] },
        { name: '篱笆房', transfer: [null] },
        { name: '广阳城', transfer: [null] },
        { name: '良乡大学城北', transfer: [null] },
        { name: '良乡大学城', transfer: [null] },
        { name: '良乡大学城西', transfer: [null] },
        { name: '良乡南关', transfer: [null] },
        { name: '苏庄', transfer: [null] },
        { name: '阎村东', transfer: ['燕房线'] },
      ]
    },
    {
      name: '燕房线', loop: false,
      station: [
        { name: '阎村东', transfer: ['房山线'] },
        { name: '紫草坞', transfer: [null] },
        { name: '阎村', transfer: [null] },
        { name: '星城', transfer: [null] },
        { name: '大石河东', transfer: [null] },
        { name: '马各庄', transfer: [null] },
        { name: '饶乐府', transfer: [null] },
        { name: '房山城关', transfer: [null] },
        { name: '燕山', transfer: [null] },
      ]
    },
    {
      name: '西郊线', loop: false,
      station: [
        { name: '巴沟', transfer: ['10号线'] },
        { name: '颐和园西门', transfer: [null] },
        { name: '茶棚', transfer: [null] },
        { name: '万安', transfer: [null] },
        { name: '植物园', transfer: [null] },
        { name: '香山', transfer: [null] },
      ]
    },
    {
      name: '昌平线', loop: false,
      station: [
        { name: '西二旗', transfer: ['13号线'] },
        { name: '生命科学园', transfer: [null] },
        { name: '朱辛庄', transfer: ['8号线'] },
        { name: '巩华城', transfer: [null] },
        { name: '沙河', transfer: [null] },
        { name: '沙河高教园', transfer: [null] },
        { name: '南邵', transfer: [null] },
        { name: '北邵洼', transfer: [null] },
        { name: '昌平东关', transfer: [null] },
        { name: '昌平', transfer: [null] },
        { name: '十三陵景区', transfer: [null] },
        { name: '昌平西山口', transfer: [null] },
      ]
    },
    {
      name: '首都机场线', loop: false,
      station: [
        { name: '东直门', transfer: ['13号线', '2号线'] },
        { name: '三元桥', transfer: ['10号线'] },
        { name: '航站楼', transfer: [null] },
      ]
    },
    {
      name: '大兴机场线', loop: false,
      station: [
        { name: '草桥', transfer: ['10号线'] },
        { name: '大兴新城', transfer: [null] },
        { name: '大兴机场', transfer: [null] },
      ]
    },
  ],

  data:{
    routeResult:''
  },

  getStation: function(startingPoint){
    var startingStationFGS={name:startingPoint,success:false,transfer:['','']};
    for(let a in this.route){
      if (startingStationFGS.success){break;}
      for (let b in this.route[a].station){
        if(this.route[a].station[b].name===startingPoint){
          startingStationFGS.success=true;
          if(this.route[a].station[b].transfer[0]==null/*array cannot be compared using == or ===*/){
            startingStationFGS.transfer=[this.route[a].name];
          }
          else{
            /*console.log('transfer');*/
            startingStationFGS.transfer = this.route[a].station[b].transfer.concat(this.route[a].name);
          }
        }
      }
    }
    return startingStationFGS;
  },

  straiteWay:function(startingStation,endStation){
    var checkStraite={straite:false,line:null,interval:70,derection:''}
    var a=0,b=0,loop=false;var mm=0;
    for(let i in startingStation.transfer){
      for(let j in endStation.transfer){
        if(startingStation.transfer[i]==endStation.transfer[j]){
          var line = startingStation.transfer[i];var loop=true;
          checkStraite.straite=true;
          /*console.log('straiteWay');*/
          for (var m=0; m<this.route.length;m++) {
            if (this.route[m].name == line) {
              loop=this.route[m].loop;
              for (var n=0;n<this.route[m].station.length;n++){
                if (this.route[m].station[n].name == startingStation.name) { a = n;}
                if (this.route[m].station[n].name == endStation.name) { b = n; }
                mm=m;
              }
              break;
            }
          }
          var gap;
          if(!loop){
            gap=Math.abs(a-b);
          }
          else { 
            var loopLength = this.route[mm].station.length;
            gap = Math.min(Math.abs(a - b), loopLength - Math.abs(a - b));
          }
          if(gap<checkStraite.interval){
            /*console.log(a);*/
            checkStraite.interval=gap;
            checkStraite.line = startingStation.transfer[i];
            if (!loop) {
              if (a > b) { checkStraite.direction = '开往' + this.route[m].station[0].name }
              else { checkStraite.direction = '开往' + this.route[mm].station[this.route[mm].station.length - 1].name }
            }
            else {
              if ((a > b && a - b < 0.5 * loopLength) || (a < b && a - b > 0.5 * loopLength)) { checkStraite.direction = '外环' }
              else { checkStraite.direction = '内环' }
            }
          }
        }
      }
    }
    /*if(!checkStraite.straite){console.log('need transfer');}*/
    return checkStraite;
  },

  straiteWayTip:function(startingStation,endStation){
    var method = this.straiteWay(startingStation, endStation);
    this.setData({stationNum:this.data.stationNum+method.interval});
    return '从' + startingStation.name + '站出发乘坐' + method.direction + '方向的' + method.line + '经' + method.interval +'站到达'+endStation.name+'站';
  },

  midMayStation:function(startingStation){
    var midMay=new Array();var a=0;
    for (var x = 0; x < startingStation.transfer.length; x++) {
      for (var y = 0; y < this.route.length; y++) {
        if (this.route[y].name == startingStation.transfer[x]) {
          for (var z = 0; z < this.route[y].station.length; z++) {
            if (this.route[y].station[z].transfer[0] != null) {
              midMay[a] = this.getStation(this.route[y].station[z].name);a++
            }
          }
        }
      }
    }
    return midMay;
  },

  oneTransfer: function (startingStation, endStation){
    var checkOneTransfer= { onetransfer: false,  mid:null, totalinterval:80};
    var stationvar;
    var intermediateStation = null;
    var midStation = this.midMayStation(startingStation)
    for(let i in midStation){
      if (this.straiteWay(midStation[i], endStation).straite) {
        checkOneTransfer.onetransfer = true;
        stationvar = this.straiteWay(midStation[i], endStation).interval + this.straiteWay(midStation[i], startingStation).interval;
        if (stationvar<checkOneTransfer.totalinterval) {
          checkOneTransfer.totalinterval = stationvar;
          checkOneTransfer.mid = midStation[i];
        }
      }
    }
    return checkOneTransfer;
  },
  
  oneTransferTip: function (startingStation, midStation,endStation){
    return this.straiteWayTip(startingStation, midStation) + '，再' + this.straiteWayTip(midStation, endStation);
  },

  twoTransfers: function (startingStation, endStation) {
    var checkTwoTransfers = { twotransfers: false, mid1: null, mid2: null, totalinterval: 80 };
    var stationvar;
    var intermediateStation = null;
    var midStation = this.midMayStation(startingStation)
    for (let i in midStation) {
      if (this.oneTransfer(midStation[i], endStation).onetransfer) {
        checkTwoTransfers.twotransfers = true;
        stationvar = this.oneTransfer(midStation[i], endStation).totalinterval + this.straiteWay(midStation[i], startingStation).interval;
        if (stationvar < checkTwoTransfers.totalinterval) {
          checkTwoTransfers.totalinterval = stationvar;
          checkTwoTransfers.mid1 = midStation[i];
          checkTwoTransfers.mid2 = this.oneTransfer(midStation[i], endStation).mid;
        }
      }
    }
    return checkTwoTransfers;
  },

  twoTransfersTip: function (startingStation, midStation1,midStation2, endStation) {
    return this.straiteWayTip(startingStation, midStation1) + '，再' + this.straiteWayTip(midStation1, midStation2) + '，再' + this.straiteWayTip(midStation2, endStation);
  },

  threeTransfers: function (startingStation, endStation) {
    var checkThreeTransfers = { threetransfers: false, mid1: null, mid2: null,mid3:null, totalinterval: 80 };
    var stationvar;
    var intermediateStation = null;
    var midStation = this.midMayStation(startingStation)
    for (let i in midStation) {
      var twotransfersHERE = this.twoTransfers(midStation[i], endStation);
      if (twotransfersHERE.twotransfers) {
        checkThreeTransfers.threetransfers = true;
        stationvar = twotransfersHERE.totalinterval + this.straiteWay(midStation[i], startingStation).interval;
        if (stationvar < checkThreeTransfers.totalinterval) {
          checkThreeTransfers.totalinterval = stationvar;
          checkThreeTransfers.mid1 = midStation[i];
          checkThreeTransfers.mid2 = twotransfersHERE.mid1;
          checkThreeTransfers.mid3 = twotransfersHERE.mid2;
        }
      }
    }
    return checkThreeTransfers;
  },

  threeTransfersTip: function (startingStation, midStation1, midStation2, midStation3,endStation) {
    return this.straiteWayTip(startingStation, midStation1) + '，再' + this.straiteWayTip(midStation1, midStation2) + '，再' + this.straiteWayTip(midStation2, midStation3) + '，再' + this.straiteWayTip(midStation3, endStation);
  },

  fourTransfers: function (startingStation, endStation) {
    var checkFourTransfers = { fourtransfers: false, mid1: null, mid2: null, mid3: null,mid4:null, totalinterval: 80 };
    var stationvar;
    var intermediateStation = null;
    var midStation = this.midMayStation(startingStation)
    for (let i in midStation) {
      /*console.log(1);*/
      var threetransfersHERE = this.threeTransfers(midStation[i], endStation);
      if (threetransfersHERE.threetransfers) {
        checkFourTransfers.fourtransfers = true;
        stationvar = threetransfersHERE.totalinterval + this.straiteWay(midStation[i], startingStation).interval;
        checkFourTransfers.totalinterval = stationvar;
        checkFourTransfers.mid1 = midStation[i];
        checkFourTransfers.mid2 = threetransfersHERE.mid1;
        checkFourTransfers.mid3 = threetransfersHERE.mid2;
        checkFourTransfers.mid4 = threetransfersHERE.mid3;
        break;
      }
    }
    return checkFourTransfers;
  },

  fourTransfersTip: function (startingStation, midStation1, midStation2, midStation3, midStation4,endStation) {
    return this.straiteWayTip(startingStation, midStation1) + '，再' + this.straiteWayTip(midStation1, midStation2) + '，再' + this.straiteWayTip(midStation2, midStation3) + '，再' + this.straiteWayTip(midStation3, midStation4) + '，再' + this.straiteWayTip(midStation4, endStation);
  },

  fiveTransfers: function (startingStation, endStation) {
    var checkFiveTransfers = { fivetransfers: false, mid1: null, mid2: null, mid3: null, mid4: null,mid5:null, totalinterval: 80 };
    var stationvar;
    var intermediateStation = null;
    var midStation = this.midMayStation(startingStation)
    for (let i in midStation) {
      var fourtransfersHERE = this.fourTransfers(midStation[i], endStation);
      /*console.log(1)*/
      if (fourtransfersHERE.fourtransfers) {
        checkFiveTransfers.fivetransfers = true;
        stationvar = fourtransfersHERE.totalinterval + this.straiteWay(midStation[i], startingStation).interval;
        checkFiveTransfers.totalinterval = stationvar;
        checkFiveTransfers.mid1 = midStation[i];
        checkFiveTransfers.mid2 = fourtransfersHERE.mid1;
        checkFiveTransfers.mid3 = fourtransfersHERE.mid2;
        checkFiveTransfers.mid4 = fourtransfersHERE.mid3;
        checkFiveTransfers.mid5 = fourtransfersHERE.mid4;
        break;
      }
    }
    return checkFiveTransfers;
  },

  fiveTransfersTip: function (startingStation, midStation1, midStation2, midStation3, midStation4,midStation5, endStation) {
    /*console.log(2);*/
    return this.straiteWayTip(startingStation, midStation1) + '，再' + this.straiteWayTip(midStation1, midStation2) + '，再' + this.straiteWayTip(midStation2, midStation3) + '，再' + this.straiteWayTip(midStation3, midStation4) + '，再' + this.straiteWayTip(midStation4, midStation5) + '，再' + this.straiteWayTip(midStation5, endStation);
  },

  showresult:function(result){
    console.log(result);
    this.setData({routeResult:result});
  },

  guideMetro:function(startname,endname){
    var startingStation = this.getStation(startname);
    var endStation = this.getStation(endname);
    var notransfer = this.straiteWay(startingStation, endStation);
    if (notransfer.straite){
      this.showresult(this.straiteWayTip(startingStation,endStation));return;
    }
    var transfer1 = this.oneTransfer(startingStation, endStation);
    var transfer2 = this.twoTransfers(startingStation, endStation);
    if (transfer1.onetransfer && transfer1.totalinterval <= transfer2.totalinterval+2) { this.showresult(this.oneTransferTip(startingStation, transfer1.mid, endStation)); return; } 
    else if(transfer2.twotransfers) {
      this.showresult(this.twoTransfersTip(startingStation, transfer2.mid1, transfer2.mid2, endStation)); return;
    }
    var transfer3 = this.threeTransfers(startingStation, endStation);
    if (transfer3.threetransfers) {
      this.showresult(this.threeTransfersTip(startingStation, transfer3.mid1, transfer3.mid2,transfer3.mid3, endStation)); return;
    }
    var transfer4 = this.fourTransfers(startingStation, endStation);
    if (transfer4.fourtransfers) {
      this.showresult(this.fourTransfersTip(startingStation, transfer4.mid1, transfer4.mid2, transfer4.mid3,transfer4.mid4, endStation)); return;
    }
    var transfer5 = this.fiveTransfers(startingStation, endStation);
    if (transfer5.fivetransfers) {
      this.showresult(this.fiveTransfersTip(startingStation, transfer5.mid1, transfer5.mid2, transfer5.mid3, transfer5.mid4, transfer5.mid5, endStation)); return;
    }
  },

  onLoad: function () {
    this.guideMetro('五道口','欢乐谷景区');
    this.guideMetro('圆明园', '木樨地');
    this.guideMetro('什刹海', '朝阳公园');
    this.guideMetro('五道口', '大兴机场');
    this.guideMetro('天桥', '中国美术馆');
    this.guideMetro('沙河高教园', '良乡大学城');
    this.guideMetro('昌平', '燕山');
  },

})
