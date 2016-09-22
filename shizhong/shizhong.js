function showTime(){
    
    var nowTime = new Date();
    // 时 分 秒
    var hour = nowTime.getHours();
    
    var minute = nowTime.getMinutes();
    
    var second = nowTime.getSeconds();
    
    // 秒
    var m = document.getElementById('m');
    
    // second = second >= 10 ? second : "0" + second;
    
    // m.innerText = second;
    if( second < 10 ){
         m.innerHTML = "0" + second;
    }else{
        m.innerHTML = second;
    }
    
    // 分
    var f = document.getElementById('f');
    
    minute = minute >= 10 ? minute : "0" + minute;
    
    f.innerHTML = minute;
    
    // 时
    var s = document.getElementById('s');
    
    hour = hour >= 10 ? hour : "0" + hour;
    
    s.innerText = hour;
    
    // 年月日 星期
    var year = nowTime.getFullYear();
    
    var month = nowTime.getMonth() + 1 ;
    
    // alert(month)
    // alert(typeof(month) ) 
    
    var date = nowTime.getDate();
    
    // alert(date)
    
    var day = nowTime.getDay();
    
    // alert(day)
    
    var nyr = document.getElementById('nyr')
   
    switch( day ) {
        case 0 :
        day = '星期天';
        break;
       
        case 1 :
        day = '星期一';
        break;
        
        case 2 :
        day = '星期二';
        break;
        
        case 3 :
        day = '星期三';
        break;
        
        case 4 :
        day = '星期四';
        break;
        
        case 5 :
        day = '星期五';
        break;
        
        case 6 :
        day = '星期六';
        // alert(day)
        break;
    }
    
    nyr.innerHTML = year + "年" + month + "月" + date + "日" + "" + day; 
}

showTime();

setInterval(showTime,1000);