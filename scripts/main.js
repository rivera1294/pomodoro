var $startTimer = $('.start');
var $stopTimer = $('.stop');
var $incrementSession = $('.session-plus');
var $decrementSession = $('.session-minus');
var $incrementBreak = $('.break-plus');
var $decrementBreak = $('.break-minus');


var clock = new Pomodoro();

$startTimer.on('click', clock.startTime);
$stopTimer.on('click', clock.stopTime);
$incrementSession.on('click', clock.increaseSessionTime);
$decrementSession.on('click', clock.decreaseSessionTime);
$decrementBreak.on('click', clock.decreaseBreakTime);
$incrementBreak.on('click', clock.increaseBreakTime);


