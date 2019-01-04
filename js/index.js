var app
app = new Vue({
  el: '#app',
  data: {
    select: 0,
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
    popNow: 0,
    tradeNow: 0,
    winNow: 0,
    pop_list: [
      {
        name: "top0",
        num: 234.6
      },
      {
        name: "top1",
        num: 234.6
      },
      {
        name: "top2",
        num: 234.6
      },
      {
        name: "top3",
        num: 234.6
      },
      {
        name: "top4",
        num: 234.6
      },
      {
        name: "top5",
        num: 234.6
      }
    ],
    isDeal: false,
    isAd: true,

    // 是否显示遮罩层
    isMask: true,
  },
  mounted: function () {
    var that = this
    this.$nextTick(function () {
      pop(that)

      // 中奖轮播
      var obj = []
      for (var i = 0; i < 6; i++) {
        var name = "lottery" + i
        obj[i] = new lottery(document.getElementById(name), 140, 500)
        obj[i].start()
      }
      // 中奖数字
      // for(var i=0;i<6;i++){
      //     obj[i].stop(i+1);
      // }
    })
  },
  methods: {
    adClose: function () {
      this.isAd = false
    }
  }
})





