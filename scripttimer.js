let[seconds,mins,hours]=[0,0,0],displayTime=document.getElementById("displayTime"),timerinterval=null;var playbutton=document.getElementById("playpausebutton");function timer(){seconds<1&&mins<1&&hours<1?(clearInterval(timerinterval),playbutton.innerHTML="<strong>START</strong>",playbutton.style.background="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)"):(seconds--,seconds<0&&(mins>0?(mins--,seconds=59):hours>0&&(hours--,mins=59,seconds=59)));let e=hours<10?"0"+hours:hours,n=mins<10?"0"+mins:mins,t=seconds<10?"0"+seconds:seconds;displayTime.innerHTML=e+":"+n+":"+t}function watchStart(){"<strong>START</strong>"===playbutton.innerHTML?(playbutton.innerHTML="<strong>PAUSE</strong>",playbutton.style.background="green",timer(),timerinterval=setInterval(timer,1e3)):(playbutton.innerHTML="<strong>START</strong>",playbutton.style.background="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",clearInterval(timerinterval))}let[lastSetSeconds,lastSetMins,lastSetHours]=[0,0,0];function updateTimerValues(e,n,t){hours=parseInt(e,10),mins=parseInt(n,10),seconds=parseInt(t,10),lastSetSeconds=seconds,lastSetMins=mins,lastSetHours=hours,displayUpdatedTime()}function displayUpdatedTime(){let e=hours<10?"0"+hours:hours,n=mins<10?"0"+mins:mins,t=seconds<10?"0"+seconds:seconds;displayTime.innerHTML=e+":"+n+":"+t}function watchReset(){playbutton.innerHTML="<strong>START</strong>",playbutton.style.background="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",clearInterval(timerinterval),[seconds,mins,hours]=[lastSetSeconds,lastSetMins,lastSetHours],displayUpdatedTime()}function openAddFile(){var e=(window.screen.width-500)/2,n=(window.screen.height-400)/2;window.open("addbutton.html","_blank","width=500px, height=400px, top="+n+", left="+e),document.getElementById("overlay").style.display="block",document.body.classList.add("body")}function okbuttonfunctions(){var e=document.getElementById("input-hours").value,n=document.getElementById("input-minutes").value,t=document.getElementById("input-seconds").value;hours=parseInt(e,10),mins=parseInt(n,10),seconds=parseInt(t,10),hours=isNaN(hours)?0:hours,mins=isNaN(mins)?0:mins,seconds=isNaN(seconds)?0:seconds,window.opener.timer(),window.opener.updateTimerValues(hours,mins,seconds),window.close(),window.opener.document.getElementById("overlay").style.display="none",window.opener.document.body.classList.remove("body")}function updateTime(){var e=new Date,n=e.getHours(),t=e.getMinutes(),s=e.getSeconds(),o=`${addLeadingZero(n)}:${addLeadingZero(t)}:${addLeadingZero(s)}`;document.getElementById("time").innerHTML=o}function addLeadingZero(e){return(e<10?"0":"")+e}function showDate(){var e=new Date,n=e.getDate(),t=e.getMonth(),s=e.getFullYear(),o=`<strong>${addLeadingZero(n)}/${addLeadingZero(t+1)}/${addLeadingZero(s)}</strong>`;document.getElementById("date").innerHTML=o}document.getElementById("sec30").addEventListener("click",(function(){updateTimerValues(0,0,30)})),document.getElementById("mins1").addEventListener("click",(function(){updateTimerValues(0,1,0)})),document.getElementById("mins5").addEventListener("click",(function(){updateTimerValues(0,5,0)})),document.getElementById("home").addEventListener("click",(function(){window.open("space.com.html","_self")})),document.getElementById("weather").addEventListener("click",(function(){window.open("weather.html","_self")})),setInterval(updateTime,1e3),document.getElementById("calculator").addEventListener("click",(function(){window.open("calculator.html","_self")})),updateTime(),showDate();