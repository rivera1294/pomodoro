function Pomodoro() {
    var breakTime = 5;
    var breakLength = breakTime*60;
    var session = 25;
    var sessionLength = session*60;
    var count = $('.counter');
    var breakCount = $('.break-time');
    var interval;
    var breakInterval;
    var isOn = false;

    this.startTime = function() {
        isOn = true;
        $('.start').hide();
        $('.stop').show();
        if(sessionLength == 0) {
            breakInterval = setInterval(breakCountDown, 1000);
        }
        else{
            interval = setInterval(countDown, 1000);
        }
        
    }

    this.stopTime = function() {
        isOn = false;
        $('.stop').hide();
        $('.start').show();
        clearInterval(interval);
        clearInterval(breakInterval);
    }

    this.increaseSessionTime = function() {
        if(!isOn) {
            session++;
            sessionLength = session*60;
            console.log(session);
            console.log(sessionLength);
            count.html(session);
            $('.session-time').html(session);
        }
        else{
            return;
        }
        
    }

    this.decreaseSessionTime = function() {
        if(!isOn && session > 1) {
            session--;
            sessionLength = session*60;
            count.html(session);
            $('.session-time').html(session);
        }
        else{
            return;
        }
    }

    this.increaseBreakTime = function() {
        if(!isOn) {
            breakTime++;
            breakLength = breakTime*60;
            breakCount.html(breakTime);
        }
        else{
            return;
        }
    }

    this.decreaseBreakTime = function() {
        if(!isOn && breakTime > 1) {
            breakTime--;
            breakLength = breakTime*60;
            breakCount.html(breakTime);
        }
        else{
            return;
        }
    }

    function startBreakTime() {
        breakInterval = setInterval(breakCountDown, 1000);
    }

    function formatTime(t) {
        var time = t;
        var minutes = Math.floor(time/60);
        var seconds = Math.floor(time%60);
        if(seconds < 10) {
            seconds = "0" + seconds;    
        }
        
        return minutes + ":" + seconds;
    }

    function countDown() {
        if(sessionLength == 0){
            clearInterval(interval);
            startBreakTime();
        }
        else {
            sessionLength--;
            count.html(formatTime(sessionLength));
        }
    }

    function breakCountDown() {
        breakLength--;
        count.html(formatTime(breakLength));
        if(breakLength == 0){
            clearInterval(breakInterval);
        }
    }

   
}

