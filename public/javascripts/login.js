(function(){
    Kakao.init('{{authKey.kakao}}');
    
    socialService.addService("kakao", "login", Kakao.Auth.login, {
        success: function(authObj) {
          alert(JSON.stringify(authObj));
        },
        fail: function(err) {
          alert(JSON.stringify(err));
        }
    });


    socialService.addService("google", "login", alert, "구글로 로그인", "dsafsadf");

    socialService.addService("facebook", "login", console.log, "페이스북으로 로그인","a","b");

    socialService({
        el:document.getElementById("custom-login-btn")
    });

}());