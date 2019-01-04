var app = new Vue({
    el: '#app',
    data: {
        phone:'',
        code:'',
        fillCode:'',
        code_active:'',
        codeText:'获取验证码',
        codeNum:60,
        isClick:true,
        alertText:"请输入正确的手机号码",
        isDialog:false
    },
    methods:{
        requestCode:function () {
            var that=this;
            if(this.isClick){
                this.code_active="code-active";
                this.isClick=false;
                var url="";
                axios.get('url').then(function (response) {
                    var timer=setInterval(function () {
                        that.codeNum--;
                        if(that.codeNum<0){
                            that.codeText="获取验证码";
                            that.code_active="";
                            that.isClick=true;
                            that.codeNum=60;
                            clearTimeout(timer);
                        }else {
                            that.codeText=that.codeNum+"s";
                        }
                    },1000);
                }).catch(function (error) {
                    // 弹框提示
                    dialog(that,error);
                });

            }else {
                return ;
            }
        },
        login:function () {
            var that=this;
            if(this.code&&this.phone){
                axios.post('url',{
                    phone:that.phone,
                    code:that.code,
                }).then(function (response) {

                }).catch(function (error) {
                    // 弹框提示
                    dialog(that,error);
                });
            }else{
                // 弹框提示
                dialog(that,"请输入用户名或验证码哦");
            }

        }
    }
});



