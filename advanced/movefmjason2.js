
        function getStyle(obj, attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else {
        return getComputedStyle(obj, false)[attr];
    }
}

        function move(obj, jason, fn){
            var iStop = true;//for the stop condition
            clearInterval(obj.timer);

            obj.timer = setInterval(function(){
                for(var attr in jason){
                    var iWidth = 0;

                    if(attr == 'opacity'){
                        var iWidth = parseInt(parseFloat(getStyle(obj, attr)) * 100);
                    }else {
                        iWidth = parseInt(getStyle(obj, attr));
                    }

                    var iSpeed = (jason[attr] - iWidth) / 8;
                    iSpeed = iSpeed > 0 ? Math.ceil(iSpeed):Math.floor(iSpeed);
                    //set the stop condition
                    if(iWidth != jason[attr]){
                        iStop = false;
                    }

                        if(attr == 'opacity'){
                            obj.style.opacity= (iWidth + iSpeed )/100;
                        }else {
                            obj.style[attr]= iWidth + iSpeed + 'px';
                        }

                    }
                    if(iStop){
                        clearInterval(obj.timer);
                        if(fn){
                            fn();
                        }
                    }

            }, 30);
        }
