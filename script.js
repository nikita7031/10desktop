/* функция добавления ведущих нулей */
/* (если число меньше десяти, перед числом добавляем ноль) */
function zero_first_format(value)
{
    if (value < 10)
    {
        value='0'+value;
    }
    return value;
}

/* функция получения текущей даты и времени */
function time()
{
    var current_time = new Date();
    var hours = current_time.getHours();
    var minutes = zero_first_format(current_time.getMinutes());
    //var seconds = zero_first_format(current_time.getSeconds());

    // return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds;
    return hours+":"+minutes;//+":"+seconds;
}

function date()
{
    var current_date = new Date();
    var day = zero_first_format(current_date.getDate());
    var month = zero_first_format(current_date.getMonth()+1);
    var year = current_date.getFullYear();

    return day+"."+month+"."+year;
}

document.getElementById('tray_time_up').innerHTML = time();
document.getElementById('tray_time_down').innerHTML = date();

setInterval(function () {
    document.getElementById('tray_time_up').innerHTML = time();
    document.getElementById('tray_time_down').innerHTML = date();
}, 1000);



//volume slider left color fill
for (let e of document.querySelectorAll('input[type="range"].slider-progress')){
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
    e.oninput=()=>document.getElementById('volume_toast_number').innerHTML=e.value;  //это капец а не джаваскрипт
}



