const userModel = require('./usersModel')

let arr = [
  {
    "title": "hi",
    "src": "",
    "pointer": [
      "点击左侧的导航开始探索",
      "点击右侧的视图进行体验"
    ],
    "codeShow": [
      " modulesname:\"基础组件\",",
      " moduless:[",
      "{path:\"countdown\",name:\"倒计时\"},",
      "{path:\"Refresh\",name:\"下拉刷新\"},",
      "{path:\"SlideInOut\",name:\"滑入滑出\"},",
      "{path:\"HoverComponent\",name:\"二级菜单\"},",
      "{path:\"LiColor\",name:\"隔行变色\"},",
      "{path:\"userRegister\",name:\"用户注册\"},",
      "{path:\"AddressList\",name:\"新增地址\"},",
      "{path:\"GoodCard\",name:\"购物车功能\"},",
      "{path:\"GoodStandard\",name:\"商品规格\"},",
      "{path:\"AddressWrite\",name:\"添加地址\"},",
      "{path:\"discoupon\",name:\"优惠券\"},",
      "{path:\"FindHeader\",name:\"头部下拉\"},",
      "{path:\"goTops\",name:\"回到顶部\"},",
      "{path:\"ContentPerson\",name:\"编辑信息\"},",
      "{path:\"pagebtn\",name:\"分页器\"},"
    ]
  },
  {
    "title": "倒计时",
    "src": "countdown",
    "pointer": [
      "var countdown=Vue.component(\"seckIll\",{",
      "data(){",
      "return{",
      "hour:2,",
      "minute:52",
      "second:44"
    ],
    "codeShow": [
      "<div class=\"sk_cd\">",
      "<div class=\"cd\">",
      "<div class=\"cd_item cd_hour\">",
      "<span  class=\"cd_item_txt\" id=\"cd_item_txt3\">{{hour}}</span>",
      "</div>",
      " <div class=\"cd_item cd_minute\">",
      " <span class=\"cd_item_txt\" id=\"cd_item_txt2\">{{minute}}</span>",
      "</div>"
    ]
  },
  {
    "title": "下拉刷新",
    "src": "Refresh",
    "pointer": [
      "var Refresh = Vue.component(\"Refresh\", {",
      "  template: `<div class=\"pull-to-refresh-app\"><div class=\"content-box\"><div class=\"refreshing-box\"><div>{{tipText}}</div></div><div>基础用法 <br>刷新次数：<span>{{count}}</span></div></div></div>`,"
    ],
    "codeShow": [
      "/**\n     * 判断pc还是移动\n     */",
      " isPC() {",
      "       var Agents = new Array(\"Android\", \"iPhone\", \"SymbianOS\", \"Windows Phone\", \"iPad\");//判断用户代理头信息\n",
      "       var flag = true;\n",
      " for (i = 0; i < Agents.length; i++) {",
      "  if (userAgentInfo.indexOf(Agents[i]) != -1) {",
      " flag = false;",
      "  break;",
      "   }",
      "   }",
      " return flag;//true PC    false 移动端"
    ]
  },
  {
    "title": "滑入滑出",
    "src": "SlideInOut",
    "pointer": [
      "import { Button } from 'vant';",
      "Vue.use(Button);"
    ],
    "codeShow": [
      "var SlideInOut = Vue.component(\"SlideInOut\", {",
      "template: `<div class=\"slideBox\" >",
      "<a @click=\"flag=!flag\">点击滑入滑出</a>",
      "<transition>",
      "<div v-if=\"flag\" class=\"box\">",
      "  <h1>欢迎进入</h1>",
      " </div>",
      "</transition>",
      " </div>`,"
    ]
  },
  {
    "title": "二级菜单",
    "src": "HoverComponent",
    "pointer": [
      "var HoverComponent = Vue.component(\"HoverComponent\", {",
      " template: `<div class=\"menuBox\">",
      " <h1 class=\"title nav\">划过二级菜单组件</h1>",
      " <ul>",
      " <a href=\"javascript:;\">",
      " template: `<div class=\"menuBox\">",
      "</li>",
      "</a>"
    ],
    "codeShow": [
      "<ul class=\"uls\" id=\"ul3\">",
      "<li><a href=\"javascript:;\">menu10-1</a></li>",
      " <li><a href=\"javascript:;\">menu10-2</a></li>",
      " <li><a href=\"javascript:;\">menu10-3</a></li>",
      " </ul>",
      "  </li>",
      "<li class=\"menu11 lis\" id=\"menu11\">",
      " <a href=\"javascript:;\"><span>menu11</span></a>"
    ]
  },
  {
    "title": "点击变色",
    "src": "LiColor",
    "pointer": [
      "var ShowHiden = Vue.component(\"ShowHiden\", {",
      "data() {",
      "return {",
      "      show: false",
      "    }",
      "  },",
      "  methods: {",
      "    showCont() {",
      "      this.show = !this.show;\n",
      "    }\n",
      "  },\n"

    ],
    "codeShow": [
      "template: `<div ><div @click=\"showCont\" id=\"box\">展开</div><div v-if=\"show\" id=\"open\">"
    ]
  },
  {
    "title": "用户注册",
    "src": "userRegister",
    "pointer": [
      "var userRegister = Vue.component(\"paneCount\", {",
      "data() {",
      "    return {\n",
      "      email: \"\",\n",
      "      name: \"\",\n",
      "      phone: \"\",\n",
      "      password: \"\",\n",
      "      pwd: \"\",\n"
    ],
    "codeShow": [
      "    checkemail: function () {",
      "      var regEmail = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\\d{8})$/;\n",
      "      if (this.email == '') {\n",
      "        this.email = \"请输入邮箱\";\n",
      "      } else if (!regEmail.test(this.email)) {\n",
      "        this.email = \"邮箱格式不正确\";\n",
      "}",
      "      if (this.email == '') {\n"
    ]
  },
  {
    "title": "新增地址",
    "src": "AddressList",
    "pointer": [
      "  methods: {",
      "    changeAddress() {",
      "      this.show = !this.show;\n",
      "    },\n",
      "    add() {\n",
      "      alert('新增地址');\n",
      "}"
    ],
    "codeShow": [
      "<div class=\"addressList\" v-for=\"(p,index) in list\">\n",
      "          <div class=\"listLeft\">\n",
      "              <input type=\"radio\" name=\"selects\" class=\"inputSel\"/>\n",
      "          </div>\n",
      "          <div class=\"listCenter\">\n",
      "              <p class=\"nameNumber\">{{p.name}}，{{p.tel}}</p>\n",
      "              <span class=\"addressPeo\">{{p.address}}</span>\n",
      "          </div>\n",
      "          <div class=\"listRight\">\n",
      "              <div class=\"change\" @click=\"changeAddress\" >修改</div>\n",
      "          </div>\n"
    ]
  },
  {
    "title": "购物车功能",
    "src": "GoodCard",
    "pointer": [
      "var GoodCard = Vue.component(\"GoodCard\", {\n",
      "  data() {",
      "     return {\n",
      "       goods: []",
      "  methods: {\n",
      "     delGoods(index) {\n",
      "        this.showFade = !this.showFade;\n",
      "       return index;\n",
      "    },\n",
      "     del(index) {",
      "       this.goods.splice(index, 1);\n",
      "       this.showFade = !this.showFade;\n",
      "    },\n",
      "     noDel() {\n",
      "         this.showFade = !this.showFade;\n",
      "    },\n"
    ],
    "codeShow": [
      "            <div class=\"clothes\" v-for=\"(p,index) in goods\" :key=\"index\" >\n",
      "                <div class=\"clothesPic\">\n",
      "                                    </div>\n",
      "                   <div class=\"clothesRight\">",
      "                        <div class=\"clothesInfo\">",
      "                    <p class=\"clothesTit\">{{p.tit}}</p>",
      "                   </div>",
      "                   <div class=\"clothesPrice\">",
      "                     <span class=\"price\">￥{{p.price}}</span>",
      "                    <div class=\"clothesAddReduce\">",
      "                    <div class=\"imgs\">商品图片</div>\n"
    ]
  },
  {
    "title": "商品规格",
    "src": "GoodStandard",
    "pointer": [
      "  methods: {",
      " specificationBtn: function (item, n, event, index) {",
      "   var self = this;",
      " if (self.selectArr[n] != item) {",
      "  self.selectArr[n] = item;",
      "  self.subIndex[n] = index;"
    ],
    "codeShow": [
      "var GoodStandard = Vue.component(\"GoodStandard\", {\n",
      "  template: `",
      "<div id=\"vmsimulatedDATA\" class=\"productBox\">\n",
      "  <div class=\"productConten\">\n",
      "      <div class=\"product-delcom\" v-for=\"(ProductItem,n) in simulatedDATA.specifications\">\n",
      "          <p>{{ProductItem.name}}</p>\n",
      "          <ul class=\"product-footerlist clearfix\">\n",
      "              <li v-for=\"(oItem,index) in ProductItem.item\" v-on:click=\"specificationBtn(oItem.name,n,$event,index)\" v-bind:class=\"[oItem.isShow?'':'noneActive',subIndex[n] == index?'productActive':'']\">{{oItem.name}}</li>\n",
      "          </ul>\n",
      "      </div>\n"
    ]
  },
  {
    "title": "添加地址",
    "src": "AddressWrite",
    "pointer": [
      "      user: {\n",
      "        name: \"\",\n",
      "      intrs: [],",
      "      selCity: {",
      "        pro: \"\",",
      "        ci: \"\",",
      "          qu: \"\""
    ],
    "codeShow": [
      " <h2>地址填写模板</h2>",
      "        <div class=\"adressBox\">\n",
      "              <p>地址填写</p>\n",
      "     <p>姓名：<input type=\"text\" v-model=\"user.name\" placeholder=\"收货人姓名\"></p>",
      "              <p>电话：<input type=\"text\" v-model=\"user.phone\" placeholder=\"收货人手机号\"></p>\n",
      "              <p>地区选择：\n",
      "                     <select v-model=\"user.selCity.pro\">\n",
      "                    <option :value=\"p\" v-for=\"p in cityData\">{{p.province}}</option>\n",
      "                </select>\n"
    ]
  },
  {
    "title": "优惠券",
    "src": "discoupon",
    "pointer": [
      "var discoupon = Vue.component(\"seckAll\", {\n",
      "  data() {\n",
      "     return {\n",
      "        msg: \"你有两个可用优惠\",\n",
      "        form: [\n",
      "          {text: '', type: 'sdfas'},\n",
      " ]"
    ],
    "codeShow": [
      "    add: function () {\n",
      " console.log('add')",
      " this.form.push({text: this.form.length, type: 'sdfas'})",
      "      let win = document.getElementsByClassName(\"win\")[0]\n",
      "       win.style.display = \"block\"\n",
      "       setTimeout(function () {\n",
      "         win.style.display = \"none\"\n",
      "       }, 2000);\n"
    ]
  },
  {
    "title": "头部下拉",
    "src": "FindHeader",
    "pointer": [
      "  methods: {\n",
      "    Appear() {\n",
      "        this.appear = !this.appear\n",
      "       },\n",
      "       UnAppear() {\n",
      "         this.appear = !this.appear;\n",
      "}"
    ],
    "codeShow": [
      "<header class=\"headers\">",
      "                <div class=\"headerTopImg\">头像</div>\n",
      "                <div class=\"titleList\" >\n",
      "     <a href=\"javascript:0\" class=\"header_a\">{{tit}}</a>\n",
      "                                   <a href=\"javascript:0\" class=\"header_a\" v-for=\"p in titleInfo\">{{p.type}}</a>\n",
      "       </div>\n",
      "          <a href=\"javascript:0\" class=\"header_a\" @click=\"Appear\">\n",
      "                                </a>\n"
    ]
  },
  {
    "title": "编辑信息",
    "src": "ContentPerson",
    "pointer": [
      "var ContentPerson = Vue.component(\"menus\", {\n",
      "  template: `\n",
      "  <div class=\"personAll\">",
      "  <div class=\"menus\" @click=\"addPerson\">",
      "      <div class=\"header\">\n",
      "    <a href=\"javascript:;\"><i class=\"iconfont icon-fanhui\"></i></a>",
      "  <span>Contact联系人</span>"
    ],
    "codeShow": [
      " <div class=\"basic\">",
      "基础用法",
      "</div>",
      " <div class=\"add\">",
      "<div class=\"spans\">",
      "        <span><i class=\"iconfont icon-jiahao\"></i></span>\n",
      "  <span>添加联系人</span>",
      "    </div>"
    ]
  },
  {
    "title": "分页器",
    "src": "pagebtn",
    "pointer": [
      "    prevOrNext(n) {\n",
      "          this.currentPage < 1\n",
      "             ? this.currentPage = 1\n",
      "             : this.currentPage > this.totalPagess\n",
      "      ? this.currentPage = this.totalPagess",
      "     : null",
      "      this.currentPage += n\n"
    ],
    "codeShow": [
      " <div class=\"fen_top\"> youzan.githun.io</div>",
      " <div class=\"fen_nav\">",
      "  <i class=\"iconfont icon-jiantou2\"></i>",
      "  <p>Pagination分页</p>",
      "  <i class=\"iconfont icon-yidongappxiexiaoxi\"></i>",
      "   </div>",
      "   <div class=\"fen_v\">基础用法</div>",
      " <p class=\"p1\">当前第{{currentPage}}页</p>"
    ]
  },
  {
    "title": "首页",
    "src": "dangdangindex",
    "pointer": [
      " var dangdangindex = Vue.component(\"ddindex\",{",
      "data(){",
      "  return{",
      " info:{",
      " \"nav\":[\"导航1\",\"导航2\",\"导航3\",\"导航4\",\"导航5\",\"导航6\",\"导航7\",\"导航8\",\"导航9\",\"导航1",
      " \"list\":[ {\"name\":\"榜单1\",\"pic\":\"img/n1.jpg\",\"name1\":\"nav1\",\"pic1\":\"img/n6.jpg\"}]",
      " \"goods1\":[ {\n\"name\":\"product-name\",\n \"pic\":\"img/public-product.jpg\",\n\"now\":0.01,\n\"old\":65.00\n  }]"
    ],
    "codeShow": [
      " window.addEventListener('scroll', function () {",
      " var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;",
      " if (scrollTop>=150){",
      "  document.querySelectorAll(\"header\")[0].style = \"position:fixed;z-index:",
      " }else{",
      "  document.querySelectorAll(\"header\")[0].style = \"position:static;backgro",
      "  }"
    ]
  },
  {
    "title": "搜索页",
    "src": "searCh",
    "pointer": [
      "let g = Vue.component(\"shopList\", {",
      "template: ` <div class=\"clonesBox\">内容一</div>`",
      "})\n",
      "var searCh=Vue.component(\"searCh\", {\n",
      "  data() {}",
      "template: ` <div class=\"clonesBox\">内容一</div>`"
    ],
    "codeShow": [
      "<van-button type='default'>默认按钮7</van-button>",
      "<van-button type='primary'>主要按钮</van-button>",
      "<van-button type=\"warning\">警告按钮</van-button>"
    ]
  },
  {
    "title": "发现页面",
    "src": "AllGop",
    "pointer": [
      "   goo(){",
      " document.documentElement.scrollTop =0",
      "this.$refs.opac.style.opacity = 0",
      "  },"
    ],
    "codeShow": [
      "that.div.onmousedown=(event)=>{",
      "that.div.onmousemove=null",
      "  start = event.pageY;",
      "  if(this.ul.offsetTop>=0) {",
      "   let time = setInterval(()=>{",
      "   this.ul.style.top = this.ul.offsetTop -3 +'px';"
    ]
  },
  {
    "title": "购物车",
    "src": "dangdangCart",
    "pointer": [
      "var ddCartProducts=Vue.component(\"Products\",{",
      " <input type=\"checkbox\" :class=\"isCheck\" :checked=\"flag\" @click=\"dis\">",
      " <a class=\"pro_img\" href=\"javascript:0;\">",
      " <img :src=\"info.pic\" alt=\"\">",
      " </a>"
    ],
    "codeShow": [
      "that.div.onmousedown=(event)=>{",
      "that.div.onmousemove=null",
      "  start = event.pageY;",
      "  if(this.ul.offsetTop>=0) {",
      "   let time = setInterval(()=>{",
      "   this.ul.style.top = this.ul.offsetTop -3 +'px';"
    ]
  },
  {
    "title": "个人中心",
    "src": "MineBig",
    "pointer": [
      "<div id=\"article\">",
      " <div id=\"uls\">",
      " <div id=\"textRefush\">下拉刷新</div>",
      "  <div class=\"top_box\" ref=\"top_box\">",
      "  <div class=\"user_box\">",
      "<div class=\"user_left\">",
      " <a href=\"javascript:0;\">",
      " <div id=\"uls\">",
      "  \" <div id=\\\"uls\\\">\""
    ],
    "codeShow": [
      " window.addEventListener('scroll', function () {",
      " var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;",
      " if (scrollTop>=150){",
      "  document.querySelectorAll(\"header\")[0].style = \"position:fixed;z-index:",
      " }else{",
      "  document.querySelectorAll(\"header\")[0].style = \"position:static;backgro",
      "  }"
    ]
  },
  {
    "title": "商品详情",
    "src": "productxq",
    "pointer": [
      "      joincart(){",
      " let tipBox = document.querySelector('.tipBox')",
      " this.joincartnum++;",
      "  tipBox.innerHTML = '成功加入'+this.joincartnum",
      "  this.showhidden()"
    ],
    "codeShow": [
      "shouc(){",
      "this.shouc_toggle = !this.shouc_toggle",
      " let shoucdoms = document.querySelector('.icon-xin');",
      "let tipBox = document.querySelector('.tipBox')",
      " if(this.shouc_toggle){",
      " shoucdoms.style.color = \"#eb1411\"",
      " tipBox.style.display = 'block'",
      "tipBox.innerHTML = '收藏成功'",
      " this.showhidden()",
      "  }else{}"
    ]
  }
]

for(let i=0;i<arr.length;i++){
    userModel.add(
      {name:"李心艾"},
        (error,result)=>{
            console.log(error)
            console.log(result)
        }
    )
}



