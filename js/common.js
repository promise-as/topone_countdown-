// 根字体设置
fontSize();

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
function fontSize() {
    var _root = document.documentElement,
        resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize',
        resizeCallback = function() {
            var clientWidth = _root.clientWidth,
                fontSize = 100;
            if (!clientWidth) return;
            if (clientWidth < 750) {
                fontSize = 100 * (clientWidth / 750);
            } else {
                fontSize = 100 * (750 / 750);
            }
            _root.style.fontSize = fontSize + 'px';
        };
    if (!document.addEventListener) return;
    window.addEventListener(resizeEvent, resizeCallback, false);
    document.addEventListener('DOMContentLoaded', resizeCallback, false);
}
//模拟泡泡
function pop(obj) {
    var popEl = obj.$refs.pop;
    var popLength = popEl.children.length;
    var popCurrent;
    var pop = setInterval(function () {
        obj.popNow++;
        popCurrent =obj.popNow - 1;
        if (obj.popNow >= popLength) {
            obj.popNow = 0;
        }
        for (var i = 0; i < popLength; i++) {
            if (i == popCurrent) {
                popEl.children[popCurrent].classList.add("fadeOutUp", "animated");
            } else {
                popEl.children[i].classList.remove("fadeOutUp", "animated");
            }
        }
    }, 2200);

}
// 弹框
function dialog(obj,text) {
    obj.alertText=text;
    obj.isDialog=true;
    setTimeout(function () {
        obj.isDialog=false;
    },3000)
}
//动态添加html
function appendHtml(elem,value){
    var node = document.createElement("div"),
    fragment = document.createDocumentFragment();
    node.innerHTML = value;
    childs = node.childNodes;
    for( var i = 0; i < childs.length; i++){
        fragment.appendChild(childs[i]);
    }
    elem.appendChild(fragment);
    childs = null;
    fragment = null;
    node = null;
}
// 判断是否有某个类名
function hasClass(obj,name) {
    var div=obj.getElementsByTagName('div');
    for(var i = 0;i <div.length;i++){
        if(div[i].className==name) {
            return true
        }
    }
    return false;
}
// 抽奖
function lottery(el,minSpeed,maxSpeed) {
    this.el = el;
    this.minSpeed = minSpeed;
    this.maxSpeed = maxSpeed;
    this.step = 50;
    this.speed = this.minSpeed;
    this.nowNum = 0;
    var endAnimate = null;
    this.stopFlag = -999;

    this.el.append(this.el.children[0].cloneNode(true));

    this.addAnimateListener = function (listener) {
        this.el.addEventListener('webkitTransitionEnd', listener);
    };
    this.removeAnimateListener = function (listener) {
        this.el.removeEventListener('webkitTransitionEnd',listener);
    };

    this.addAnimate = function (time, callback) {
        var that = this;
        if(this.endAnimate != null){
            this.removeAnimateListener(this.endAnimate);
        }

        this.endAnimate = function () {
            callback && callback();
        };
        this.addAnimateListener(this.endAnimate);

        this.el.style.webkitTransition = 'all linear ' + time + 's';
    };

    this.nextVal = function (callback) {
        var that = this;
        this.nowNum++;

        var myCallback;
        if (this.nowNum == 10) {
            myCallback = function () {
                window.requestAnimationFrame(function () {
                    that.nowNum = 0;
                    that.addAnimate(0);
                    that.el.style.marginTop = "0rem";
                    window.requestAnimationFrame(function () {
                        callback();
                    });
                });
            }
        } else {
            myCallback = callback;
        }

        this.addAnimate(this.speed / 1000.0, myCallback);
        this.el.style.marginTop = "-" + (1.1 * this.nowNum) + "rem";
    };

    this.start = function () {
        var that = this;
        this.stopFlag = -999;

        var task = function () {
            var stopModel = that.stopFlag >= 0;
            if (that.stopFlag == that.nowNum) {
                if (that.speed >= that.minSpeed) {
                    return;
                }
            }
            if (stopModel) {
                if (that.speed < that.minSpeed) {
                    that.speed += that.step * 1.5;
                //    1.5
                }
            } else {
                if (that.speed > that.maxSpeed) {
                    that.speed -= that.step;
                }
            }

            that.nextVal(task);
        };

        task();
    };

    this.stop = function (num) {
        this.stopFlag = num;
    };
}

//监听滚动是否到达底部
function Refresh(){
    this.flag = false;
    // 是否到达底部
    this.isBottom = function () {
        var doc=document.documentElement;
        var doc_body=document.body;
        //获取滚动条当前的位置
        this.scrollTop=function () {
            var scrollTop = 0;
            if(doc && doc.scrollTop) {
                scrollTop = doc.scrollTop;
            } else if(doc_body) {
                scrollTop = doc_body.scrollTop;
            }
            return scrollTop;
        };
        //获取当前可视范围的高度
        this.clientHeight=function () {
            var clientHeight = 0;
            if(doc_body.clientHeight && doc.clientHeight) {
                clientHeight = Math.min(doc_body.clientHeight, doc.clientHeight);
            } else {
                clientHeight = Math.max(doc_body.clientHeight, doc.clientHeight);
            }
            return clientHeight;
        };
        //获取文档完整的高度
        this.scrollHeight=function () {
            return Math.max(doc_body.scrollHeight, doc.scrollHeight);
        };
        if(this.scrollTop()+this.clientHeight()>= this.scrollHeight()) {
            return true
        }else{
            return false;
        }
    };
    // 是否在刷新
    this.isRefreshing = function () {
        return this.flag;
    };
    // 允许刷新
    this.allowRefresh = function(){
        this.flag = true;
    };
    //禁止刷新
    this.forbidRefresh = function(){
        this.flag = false;
    }
}



