(function(){
    function socialService(options){
        /*
        * el : document.getElementsByClassName("social") -default 
        * social(vender): 'social' -default 
        * fn : 'func' - default 
        */

        options = options || {};

        var els = options.el || document.getElementsByClassName("social"), 
            el,
            len=0,
            i=0,
            
                        //options 명 변경 
            customOpt = options.social || 'social',
            customFunc = options.fn || 'func',
            customAction = options.action || 'action',
            socialName,
            socialApi,
            action; // default
            
        els = els.length ? els : [els]; // el -> arr
        len = els.length;
        
        for(;i<len;i++){
            el = els[i]; //els Array -> el 
            socialName = el.dataset[customOpt];
            socialApi = el.dataset[customFunc];
            action = el.dataset[customAction] || 'click';
            

            //소셜 로그인 서비스가 존재하는지 확인.
            if(socialService[socialName] && socialService[socialName][socialApi]){
                el.addEventListener(action, socialService[socialName][socialApi]);
            }
        }
    }
                                                          //alert , "구글로 로그인"
    socialService.addService = function(socialName, apiName, func /*, rest */){
        //array like 
        
        var args = arguments,
            action = function(e){
              e.preventDefault(); //기존에 동작하던 이벤트를 취소 시킨다. 
              
              //rest 나머지 파라미터는 func를 호출 시키기 위해서 사용하는 파라미터 
              func.apply(null, /* rest */Array.prototype.slice.call(args, 3));
            }

        socialService[socialName] = socialService[socialName] || {};
        socialService[socialName][apiName] = action;
    }

    window.socialService = socialService;
}());