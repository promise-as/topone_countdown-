var app = new Vue({
  el: '#app',
  data: {
    // 底部导航数据
    nav_list: [
      {
        icon: "icon-home",
        text: "主页",
        href: "index.html"
      },
      {
        icon: "icon-trade",
        text: "交易",
        href: "trade.html"
      },
      {
        icon: "icon-c2c",
        text: "C2C",
        href: "C2C.html"
      },
      {
        icon: "icon-mine",
        text: "我的",
        href: "mine.html"
      }
    ],
    // 是否显示遮罩层
    isMask: false,
    // 自定义金额
    customSum: "自定义",
    // 输入的金额
    enterSum: "",
    // 60s和300s
    // sixMin: 60,
    // threeHundredMin: 300,
    // 记录60s进度条
    // sixtyTime: 60,
    // sixtyWidth: 100,
    // 记录300s进度条
    // threeHundredTime: 300,
    // threeHundredWidth: 100,
    // 进度条的高度
    // progressBarHeight: '0.26rem',
    // 定时器
    // timer: null,
    // 订单个数
    // orderNumber: 1,
    // 是否有手续费
    procedureFee: 2,
    // 糖果
    sweets: 1000,
    // 糖果抵多少ETH
    sweetsNum: 0.1,

    // 金额套餐
    num1: 0.1,
    num2: 1,
    num3: 2,
    num4: 3,
    num5: 4,
    num6: 5,
    num7: 6,


    // 进度条结束后提示
    isSucceed: 1, // 成功0，失败1
    isDialog: false,
    // alertText1: "神机妙算，收益xxxETH",
    // alertText2: "大神也会偶尔失误，下次再来",

    // 开奖后提示
    // isShowHint: false,
    alertText: "",
  },

  // 组件已挂载
  mounted: function () {
    // 60s倒计时
    /*if(this.sixtyTime === 60){
      this.timerSix = setInterval(() => {
        this.sixtyTime = this.sixtyTime -1;
        this.sixtyWidth = this.sixtyWidth - 1.66666667;
        if (this.sixtyWidth < 0) {
          clearInterval(this.timerSix)
          this.progressBarHeight = '0rem'
        }
      }, 1000)
    }*/

    // 300s倒计时
    /*if(this.threeHundredTime === 300){
      // 进度条
      this.timerThreeHundred = setInterval(() => {
        this.threeHundredWidth = this.threeHundredWidth -1;
        this.threeHundredTime = this.threeHundredTime - 3;
        if (this.threeHundredWidth < 0) {
          clearInterval(this.timerThreeHundred)
          this.progressBarHeight = '0rem'
        }
      }, 1000)
    }*/
  },
  // 方法
  methods: {



    // 自定义按钮
    changeSum: function () {
      this.isMask = true
    },
    // 确定金额
    assess: function (enterSum) {
      this.customSum = enterSum
      this.isMask = false

      axios.post('url', {}).then(function (response) {

      }).catch(function (error) {
        // 弹框提示
        dialog(this.enterSum, error)
      })
    },
    // 60s按钮切换
    /*timeSix: function () {
      // 清除定时器
      clearInterval(this.timerThreeHundred)
      // 清除定时器
      clearInterval(this.timerSix)

      this.timerSix = setInterval(() => {
        this.sixtyTime = this.sixtyTime -1;
        this.sixtyWidth = this.sixtyWidth - 1.66666667;
        if (this.sixtyWidth < 0) {
          clearInterval(this.timerSix)
          this.progressBarHeight = '0rem'
        }
      }, 1000)
    },*/
    // 300s按钮切换
    /*timeThreeHundred: function () {
      // 清除定时器
      clearInterval(this.timerSix)
      // 清除定时器
      clearInterval(this.timerThreeHundred)
      this.timerThreeHundred = setInterval(() => {
        this.threeHundredTime = this.threeHundredTime -3;
        this.threeHundredWidth = this.threeHundredWidth - 1;
        if (this.threeHundredWidth < 0) {
          clearInterval(this.timerThreeHundred)
          this.progressBarHeight = '0rem'
        }
      }, 1000)
    },*/

    // 金额套餐点击事件
    sum1: function () {
      console.log(this.num1)
      axios.post('url', {}).then(function (response) {

      }).catch(function (error) {
        // 弹框提示
        dialog(this.num1, error)
      })
    },
    sum2: function () {
      axios.post('url', {}).then(function (response) {

      }).catch(function (error) {
        // 弹框提示
        dialog(this.num2, error)
      })
    },
    sum3: function () {
      axios.post('url', {}).then(function (response) {

      }).catch(function (error) {
        // 弹框提示
        dialog(this.num3, error)
      })
    },
    sum4: function () {
      axios.post('url', {}).then(function (response) {

      }).catch(function (error) {
        // 弹框提示
        dialog(this.num4, error)
      })
    },
    sum5: function () {
      axios.post('url', {}).then(function (response) {

      }).catch(function (error) {
        // 弹框提示
        dialog(this.num5, error)
      })
    },
    sum6: function () {
      axios.post('url', {}).then(function (response) {

      }).catch(function (error) {
        // 弹框提示
        dialog(this.num6, error)
      })
    },
    sum7: function () {
      axios.post('url', {}).then(function (response) {

      }).catch(function (error) {
        // 弹框提示
        dialog(this.num7, error)
      })
    },


  },

  // 组件销毁的时候清除定时器
  beforeDestroy: function () {
    // clearInterval(this.timerSix)
    // clearInterval(this.timerThreeHundred)
  },
})



