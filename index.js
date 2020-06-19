'use strict';
// begin DATE section
function renderTime(){
	let myDate = new Date(); 
	let year = myDate.getFullYear();
		if(year < 1000){
			year += 1900;
		}
	let day = myDate.getDay();
	let month = myDate.getMonth();
	let daym = myDate.getDate();
	let monthm = myDate.getDate();
	let dayArray = 	["понедельник","вторник","среда ","четверг","пятница","суббота ","воскресенье"];
	let monthArray = ['январь', 'февраль', 'март', 'апрель','май',
	'июнь', 'июль', 'август','сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
           
	//DATE section end

	//Time section START
	let currentTime = new Date();
	let hour = currentTime.getHours();
		if(hour === 24){
			hour = 0;
		}else if(hour < 12){
				hour = hour - 0;
		}
	let minute = currentTime.getMinutes();
	let seconds = currentTime.getSeconds();

		if(minute < 10){
			minute = "0" + minute;
		}

		if(seconds < 10){
			seconds = "0" + seconds;
		}
		if(monthm < 10){
			monthm = "0" + monthm;
		}
// it's the end ??						
//OK
		let hourChange = function(){
			if(hour <= 4){
					return "часа";
			}else if(hour > 4 && hour < 21){
				return "часов";
			}else if(hour >= 21){
				return "час";
			}

		};
		
		let myClock = document.getElementById("clockDisplay1");
	
		myClock.innerText = "Сегодня " +dayArray[day] + ", " + daym + " " + monthArray[month] + " " + year + "года"+
		 ", " + hour + hourChange() + minute + " минут " + seconds + " секунды";
		 let myClock2 = document.getElementById("clockDisplay2");//'04.02.2020 - 21:05:33
			myClock2.innerText = daym +"."+ monthm +"."+ year +" - " + hour + ":" + minute + ":" + seconds;
}
setInterval(renderTime, 100);
