$(document).ready(function () {
//функция вызова таймера
function get_timer() {
	
	//Дата для обратного отсчета
	var date_new = "2015-06-18 22:00";
	////////////////////////////////////
	////////////////////////////////////
	
	//Объект даты для обратного отсчета
	var date_t = new Date(date_new);
	//Объект текущей даты
	var date = new Date();
	//Вычисляем сколько миллисекунд пройдет 
	//от текущей даты до даты отсчета времени
	var timer = date_t - date;
	
  //Проверяем не нужно ли закончить отсчет
	//если дата отсчета еще не истекла, то количество
	//миллисекунд в переменной date_t будет больше чем в переменной date
	if(date_t > date) {
		

  checking(timer);  

    
	}
	else {
		$("#timer").html("<span id='stop'>Отсчет закончен!!!</span>");
	}  
}
  
  var checking = function(timer) {
    		//Вычисляем сколько осталось дней до даты отсчета.
		//Для этого количество миллисекунд до даты отсчета делим
		//на количество миллисекунд в одном дне
		var day = parseInt(timer/(60*60*1000*24));
		//если полученное число меньше 10 прибавляем 0
		if(day < 10) {
			day = '0' + day;
		}
		//Приводим результат к строке
		day = day.toString();
			
		//Вычисляем сколько осталось часов до даты отсчета.
		//Для этого переменную timer делим на количество
		//миллисекунд в одном часе и отбрасываем дни
		var hour = parseInt(timer/(60*60*1000))%24;
		//если полученное число меньше 10 прибавляем 0
		if(hour < 10) {
			hour = '0' + hour;
		}
		//Приводим результат к строке
		hour = hour.toString();
			
		//Вычисляем сколько осталось минут до даты отсчета.
		//Для этого переменную timer делим на количество
		//миллисекунд в одной минуте и отбрасываем часы
		var min = parseInt(timer/(1000*60))%60;
		//если полученное число меньше 10 прибавляем 0
		if(min < 10) {
			min = '0' + min;
		}
		//Приводим результат к строке
		min = min.toString();
			
		//Вычисляем сколько осталось секунд до даты отсчета.
		//Для этого переменную timer делим на количество
		//миллисекунд в одной минуте и отбрасываем минуты
		var sec = parseInt(timer/1000)%60;
		//если полученное число меньше 10 прибавляем 0
		if(sec < 10) {
			sec = '0' + sec;
		}
		//Приводим результат к строке
		sec = sec.toString();
    
    //Выводим дни
		//Проверяем какие предыдущие цифры времени должны вывестись на экран
		//Для десятков дней
		if(day[1] == 9 && 
			hour[0] == 2 && 
			hour[1] == 3 && 
			min[0] == 5 && 
			min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($("#day0"),day[0]);
		}
		else {
			$("#day0").html(day[0]);
		}
		//Для единиц  дней
		if(hour[0] == 2 && 
			hour[1] == 3 && 
			min[0] == 5 && 
			min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($("#day1"),day[1]);
		}
		else {
			$("#day1").html(day[1]);
		}
		//Выводим часы
		//Проверяем какие предыдущие цифры времени должны вывестись на экран
		//Для десятков часов
		if(hour[1] == 3 && 
			min[0] == 5 && 
			min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($("#hour0"),hour[0]);
		}
		else {
			$("#hour0").html(hour[0]);
		}
		//Для единиц часов	
		if(min[0] == 5 && 
			min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($("#hour1"),hour[1]);
		}
		else {
			$("#hour1").html(hour[1]);
		}
			
		//Выводим минуты
		//Проверяем какие предыдущие цифры времени должны вывестись на экран
		//Для десятков минут
		if(min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($("#min0"),min[0]);
		}
		else {
			$("#min0").html(min[0]);
		}
		//Для единиц минут
		if(sec[0] == 5 && sec[1] == 9) {
			animation($("#min1"),min[1]);
		}
		else {
			$("#min1").html(min[1]);
		}
			
		//Выводим секунды
		//Проверяем какие предыдущие цифры времени должны вывестись на экран
		//Для десятков секунд
		if(sec[1] == 9) {
			animation($("#sec0"),sec[0]);
		}
		//Для единиц секунд
		else {
			$("#sec0").html(sec[0]);
		}
		animation($("#sec1"),sec[1]);	
		//Периодически вызываем созданную функцию, 
		//интервал вызова одна секунда(1000 милли секунд)
		setTimeout(get_timer,1000);
  }
  
  
  //Функция для красивого отображения времени.
  function animation(vibor,param) {
    vibor.html(param)
      .css({'marginTop':'-20px','opacity':'0'})
      .animate({'marginTop':'0px','opacity':'1'});
  }
  
  //Вызываем функцию на исполнение
//get_timer();

});









////--------------------------------------------------------------------------------
////--html--
//-var timer = [{time: 'day', text: 'дней'}, {time: 'hour', text: 'часов'}, {time: 'min', text: 'минут'}, {time: 'sec', text: 'секунд'}]
//
//input(type="radio" id="inp-slide1" name="inp" checked)
//input(type="radio" id="inp-slide2" name="inp")
//
//.slider
//  .slide.it-slide1
//    .item.item1 slide1
//    .date.date-slide1 2015-06-17 22:00
//    block timer_bl
//      ul.action-timer__counter#timer
//        each item in timer
//          li.chart(id=item.time class='chart_'+item.time)
//            //canvas
//            span.action-timer__counter--time
//              span(class=item.time+'0') 1
//              span(class=item.time+'1') 2
//            span.action-timer__counter--text=item.text
//  .slide.it-slide2
//    .item.item2 slide2
//    .date.date-slide2 2015-06-18 22:00
//    block timer_bl
//  
//
//.controls
//  label(for="inp-slide1" class="1") inp1
//  label(for="inp-slide2" class="2") inp2
//  
////--css--
//.slider {
//  background: gray;
//  width: 50%;
//  margin: 20px auto;
//  padding: 5px;
//  
//  &:after {
//    content: "";
//    display: table;
//    clear: both;
//  }
//}
//
//.slide {
//  float: left;
//  background: pink;
//  width: 45%;
//  margin: 10px;
//  border: 2px solid black;
//}
//
//.item {
//  background: white;
//  margin-bottom: 20px;
//  border-bottom: 2px solid black;
//}
//
//.date {display: none;}
//
//.action-timer__counter {
//  background: yellow;
//  border-top: 2px solid black;
//  list-style: none;
//  margin: 0;
//  padding: 0;
//  
//  li {
//    display: inline-block;
//  }
//}
//
////--js--
//$(document).ready(function () {
//  var date = new Date();
//  //console.log(date);
//  var item;
//  
//  var ctrl = $('input[type="radio"]:checked');
//  
//  function toggling() {
//  var item_class = '.date-' + ctrl.attr('id').slice(4);
//  item = $(item_class);
//  console.log(item.html());
//  return item;
//  };
//  
//  toggling();
//  
//$('.controls label').click(function(){
//  var a = $(this);
//  var ctrl_curr = $('#' + (a.attr('for')));
//  
//  if (ctrl.attr('id') !== a.attr('for')) {
//    ctrl = ctrl_curr;
//    toggling();
//  }
//});
//
//  console.log(item);
//  
//  function get_timer(date_new) {
//	
//	//Объект даты для обратного отсчета
//	var date_t = new Date(date_new);
//	
//	//Вычисляем сколько миллисекунд пройдет 
//	//от текущей даты до даты отсчета времени
//	var timer = date_t - date;
//	
//  //Проверяем не нужно ли закончить отсчет
//	//если дата отсчета еще не истекла, то количество
//	//миллисекунд в переменной date_t будет больше чем в переменной date
//	if(date_t > date) {
//		
//
//  checking(timer);  
//
//    
//	}
//	else {
//		$("#timer").html("<span id='stop'>Отсчет закончен!!!</span>");
//	}  
//}
//  
//  var checking = function(timer) {
//    		//Вычисляем сколько осталось дней до даты отсчета.
//		//Для этого количество миллисекунд до даты отсчета делим
//		//на количество миллисекунд в одном дне
//		var day = parseInt(timer/(60*60*1000*24));
//		//если полученное число меньше 10 прибавляем 0
//		if(day < 10) {
//			day = '0' + day;
//		}
//		//Приводим результат к строке
//		day = day.toString();
//			
//		//Вычисляем сколько осталось часов до даты отсчета.
//		//Для этого переменную timer делим на количество
//		//миллисекунд в одном часе и отбрасываем дни
//		var hour = parseInt(timer/(60*60*1000))%24;
//		//если полученное число меньше 10 прибавляем 0
//		if(hour < 10) {
//			hour = '0' + hour;
//		}
//		//Приводим результат к строке
//		hour = hour.toString();
//			
//		//Вычисляем сколько осталось минут до даты отсчета.
//		//Для этого переменную timer делим на количество
//		//миллисекунд в одной минуте и отбрасываем часы
//		var min = parseInt(timer/(1000*60))%60;
//		//если полученное число меньше 10 прибавляем 0
//		if(min < 10) {
//			min = '0' + min;
//		}
//		//Приводим результат к строке
//		min = min.toString();
//			
//		//Вычисляем сколько осталось секунд до даты отсчета.
//		//Для этого переменную timer делим на количество
//		//миллисекунд в одной минуте и отбрасываем минуты
//		var sec = parseInt(timer/1000)%60;
//		//если полученное число меньше 10 прибавляем 0
//		if(sec < 10) {
//			sec = '0' + sec;
//		}
//		//Приводим результат к строке
//		sec = sec.toString();
//    
//    //Выводим дни
//		//Проверяем какие предыдущие цифры времени должны вывестись на экран
//		//Для десятков дней
//		if(day[1] == 9 && 
//			hour[0] == 2 && 
//			hour[1] == 3 && 
//			min[0] == 5 && 
//			min[1] == 9 && 
//			sec[0] == 5 && 
//			sec[1] == 9) {
//			animation($("#day0"),day[0]);
//		}
//		else {
//			$("#day0").html(day[0]);
//		}
//		//Для единиц  дней
//		if(hour[0] == 2 && 
//			hour[1] == 3 && 
//			min[0] == 5 && 
//			min[1] == 9 && 
//			sec[0] == 5 && 
//			sec[1] == 9) {
//			animation($("#day1"),day[1]);
//		}
//		else {
//			$("#day1").html(day[1]);
//		}
//		//Выводим часы
//		//Проверяем какие предыдущие цифры времени должны вывестись на экран
//		//Для десятков часов
//		if(hour[1] == 3 && 
//			min[0] == 5 && 
//			min[1] == 9 && 
//			sec[0] == 5 && 
//			sec[1] == 9) {
//			animation($("#hour0"),hour[0]);
//		}
//		else {
//			$("#hour0").html(hour[0]);
//		}
//		//Для единиц часов	
//		if(min[0] == 5 && 
//			min[1] == 9 && 
//			sec[0] == 5 && 
//			sec[1] == 9) {
//			animation($("#hour1"),hour[1]);
//		}
//		else {
//			$("#hour1").html(hour[1]);
//		}
//			
//		//Выводим минуты
//		//Проверяем какие предыдущие цифры времени должны вывестись на экран
//		//Для десятков минут
//		if(min[1] == 9 && 
//			sec[0] == 5 && 
//			sec[1] == 9) {
//			animation($("#min0"),min[0]);
//		}
//		else {
//			$("#min0").html(min[0]);
//		}
//		//Для единиц минут
//		if(sec[0] == 5 && sec[1] == 9) {
//			animation($("#min1"),min[1]);
//		}
//		else {
//			$("#min1").html(min[1]);
//		}
//			
//		//Выводим секунды
//		//Проверяем какие предыдущие цифры времени должны вывестись на экран
//		//Для десятков секунд
//		if(sec[1] == 9) {
//			animation($("#sec0"),sec[0]);
//		}
//		//Для единиц секунд
//		else {
//			$("#sec0").html(sec[0]);
//		}
//		animation($("#sec1"),sec[1]);	
//		//Периодически вызываем созданную функцию, 
//		//интервал вызова одна секунда(1000 милли секунд)
//		setTimeout(get_timer,1000);
//  }
//  
//  
//  
//  
//  //Функция для красивого отображения времени.
//  function animation(vibor,param) {
//    vibor.html(param)
//      .css({'marginTop':'-20px','opacity':'0'})
//      .animate({'marginTop':'0px','opacity':'1'});
//  }
//  
//  //Вызываем функцию на исполнение
////get_timer();
//  
//  
//});
//
//$(document).ready(function () {
//    var date = new Date();
//    var item;
//    var ctrl = $('input[type="radio"]:checked');
//    function toggling() {
//        var item_class = '.date-' + ctrl.attr('id').slice(4);
//        item = $(item_class);
//        console.log(item.html());
//        return item;
//    }
//    ;
//    toggling();
//    $('.controls label').click(function () {
//        var a = $(this);
//        var ctrl_curr = $('#' + a.attr('for'));
//        if (ctrl.attr('id') !== a.attr('for')) {
//            ctrl = ctrl_curr;
//            toggling();
//        }
//    });
//    console.log(item);
//    function get_timer(date_new) {
//        var date_t = new Date(date_new);
//        var timer = date_t - date;
//        if (date_t > date) {
//            checking(timer);
//        } else {
//            $('#timer').html('<span id=\'stop\'>\u041E\u0442\u0441\u0447\u0435\u0442 \u0437\u0430\u043A\u043E\u043D\u0447\u0435\u043D!!!</span>');
//        }
//    }
//    var checking = function (timer) {
//        var day = parseInt(timer / (60 * 60 * 1000 * 24));
//        if (day < 10) {
//            day = '0' + day;
//        }
//        day = day.toString();
//        var hour = parseInt(timer / (60 * 60 * 1000)) % 24;
//        if (hour < 10) {
//            hour = '0' + hour;
//        }
//        hour = hour.toString();
//        var min = parseInt(timer / (1000 * 60)) % 60;
//        if (min < 10) {
//            min = '0' + min;
//        }
//        min = min.toString();
//        var sec = parseInt(timer / 1000) % 60;
//        if (sec < 10) {
//            sec = '0' + sec;
//        }
//        sec = sec.toString();
//        if (day[1] == 9 && hour[0] == 2 && hour[1] == 3 && min[0] == 5 && min[1] == 9 && sec[0] == 5 && sec[1] == 9) {
//            animation($('#day0'), day[0]);
//        } else {
//            $('#day0').html(day[0]);
//        }
//        if (hour[0] == 2 && hour[1] == 3 && min[0] == 5 && min[1] == 9 && sec[0] == 5 && sec[1] == 9) {
//            animation($('#day1'), day[1]);
//        } else {
//            $('#day1').html(day[1]);
//        }
//        if (hour[1] == 3 && min[0] == 5 && min[1] == 9 && sec[0] == 5 && sec[1] == 9) {
//            animation($('#hour0'), hour[0]);
//        } else {
//            $('#hour0').html(hour[0]);
//        }
//        if (min[0] == 5 && min[1] == 9 && sec[0] == 5 && sec[1] == 9) {
//            animation($('#hour1'), hour[1]);
//        } else {
//            $('#hour1').html(hour[1]);
//        }
//        if (min[1] == 9 && sec[0] == 5 && sec[1] == 9) {
//            animation($('#min0'), min[0]);
//        } else {
//            $('#min0').html(min[0]);
//        }
//        if (sec[0] == 5 && sec[1] == 9) {
//            animation($('#min1'), min[1]);
//        } else {
//            $('#min1').html(min[1]);
//        }
//        if (sec[1] == 9) {
//            animation($('#sec0'), sec[0]);
//        } else {
//            $('#sec0').html(sec[0]);
//        }
//        animation($('#sec1'), sec[1]);
//        setTimeout(get_timer, 1000);
//    };
//    function animation(vibor, param) {
//        vibor.html(param).css({
//            'marginTop': '-20px',
//            'opacity': '0'
//        }).animate({
//            'marginTop': '0px',
//            'opacity': '1'
//        });
//    }
//});