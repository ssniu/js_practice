
        function getStyle(obj, attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else {
        return getComputedStyle(obj, false)[attr];
    }
}

        function move(obj, attr, iTarget){

            clearInterval(obj.timer);
            //var iWidth = parseInt(getStyle(obj, attr));

            obj.timer = setInterval(function(){
                //change the opacity
                if(attr == 'opacity'){
                    //fix the bug of flicking

                    iWidth = parseInt(parseFloat(getStyle(obj, attr)) * 100);
                }else {
                    iWidth = parseInt(getStyle(obj, attr));
                }


                var iSpeed = (iTarget - iWidth) / 8;
                iSpeed = iSpeed > 0 ? Math.ceil(iSpeed):Math.floor(iSpeed);

                if(iWidth == iTarget){
                    clearInterval(obj.timer);
                }
                else {
                    if(attr == 'opacity'){
                        obj.style.opacity= (iWidth + iSpeed )/100;
                    }else {
                        obj.style[attr]= iWidth + iSpeed + 'px';
                    }

                }
            }, 30);
        }
