$(document).ready(function() {
	var controls = 'popular-slider__controls';
	var area = 'popular';
	
	$('.' + controls).click(function(event) {
		event.preventDefault();
		
		var slide = $('.popular-slider__item:not(.popular-slider__item--all)').parent();
		var doc_w = $(document).width();
		
		var slide_class;
		var slide_interval;
		
		if (doc_w > 991) {
			slide_class = 'slide-show';
			slide_interval = 5;
		} else if (doc_w > 767) {
			slide_class = 'slide-show-sm';
			slide_interval = 3;
		} else {
			slide_class = 'slide-show-xs';
			slide_interval = 1;
		}

		var slide_show = $('.' + area + ' .' + slide_class);
		var slide_show_id = slide.index(slide_show[0]);
		var slide_show_id_l = slide.index(slide_show[(slide_show.length - 1)]);

		if ($(this).hasClass(controls + '--left') && slide_show_id > 0) {

			slide_show.removeClass(slide_class);

			var new_slide = slide.slice((slide_show_id - slide_interval), (slide_show_id));
			new_slide.addClass(slide_class);

		} else if ($(this).hasClass(controls + '--right') && slide_show_id_l < (slide.length-1)) {

			slide_show.removeClass(slide_class);

			var new_slide = slide.slice((slide_show_id_l+1), (slide_show_id_l + slide_interval + 1));
			new_slide.addClass(slide_class);
		}
	});
});

$(document).ready(function() {
	$(".news-menu__item-title p").dotdotdot({
		watch: true
	});
	
	$(".news-item__text").dotdotdot({
		watch: true,
		after: 'a.news-item__link'
	});
});

$(document).ready(function() {
	var controls = 'news-menu__controls';
	var area = 'news';
	
	$('.' + controls).click(function(event) {
		event.preventDefault();
		
		var slide = $('.news-menu__item').parent();
		var doc_w = $(document).width();
		
		var slide_class;
		
		if (doc_w > 991) {
			slide_class = 'slide-show';
		} else if (doc_w > 767) {
			slide_class = 'slide-show-sm';
		} else {
			slide_class = 'slide-show-xs';
		}

		var slide_show = $('.' + area + ' .' + slide_class);
		var slide_show_id = slide.index(slide_show[0]);
		var slide_show_id_l = slide.index(slide_show[(slide_show.length - 1)]);

		if ($(this).hasClass(controls + '--left') && slide_show_id > 0) {

			$(slide[slide_show_id_l]).removeClass(slide_class);

			$(slide[(slide_show_id - 1)]).addClass(slide_class);

		} else if ($(this).hasClass(controls + '--right') && slide_show_id_l < (slide.length-1)) {

			$(slide[slide_show_id]).removeClass(slide_class);

			$(slide[(slide_show_id_l + 1)]).addClass(slide_class);
		}
	});
});

//$(document).ready(function () {
//	$('.chart').easyPieChart({
//		scaleColor: false,
//		trackColor: '#e5e5e5',
//		barColor: '#3da8d0',
//		lineWidth: 6,
//		lineCap: 'butt',
//		size: 110
//	});
//	
//	var date = new Date();
//	var sec_chart, min_chart, hour_chart, day_chart;

//	var chartind = function() {
//
//	var date_new = new Date();
//
//	if (date != date_new) {
//		date = new Date();
//		
//		var mlsec = date.getMilliseconds();
//		var sec = date.getSeconds();
//		var min = date.getMinutes();
//		var hour = date.getHours();
//
//		sec_chart = parseInt(100 / 1000 * mlsec);
//		min_chart = parseInt(100 / 60 * sec);
//		hour_chart = parseInt(100 / 60 * min);
//		day_chart = parseInt(100 / 24 * hour);
//
//		$('#sec').data('easyPieChart').update(sec_chart);
//		$('#min').data('easyPieChart').update(min_chart);
//		$('#hour').data('easyPieChart').update(hour_chart);
//		$('#day').data('easyPieChart').update(day_chart);
//	}
//	
//	setTimeout(chartind, 100);
//	};
//	
//chartind();
//});


//function clock(){
//  //var pies = document.querySelectorAll('.pie');
//  
//	var charts = document.querySelectorAll('.chart');
//	
//  var now = new Date();
//  var mlsec = now.getMilliseconds();
//  var sec = now.getSeconds();
//  var min = now.getMinutes();
//  var hr  = now.getHours();
//  hr = hr>=12 ? hr-12 : hr;
//  
//  for (var i = 0; i < charts.length; i++) {
//    var chart = charts[i];
//	var pie = chart.querySelector('canvas');
//  
//  var ctx = pie.getContext('2d');
//    
//  ctx.save();
//  ctx.clearRect(0,0,150,150);
//  ctx.translate(75,75);
//  ctx.scale(0.4,0.4);
//  ctx.rotate(-Math.PI/2);
//  
//  var time;
//  if(chart.classList.contains('chart_day')) {
//    time = hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec;
//  } else if(chart.classList.contains('chart_hour')) {
//    time = (Math.PI/30)*min + (Math.PI/1800)*sec;
//  } else if(chart.classList.contains('chart_min')) {
//    time = sec * Math.PI/30;
//  } else {
//    time = (mlsec/10) * Math.PI/30;
//  }
//  
//  ctx.beginPath();
//  ctx.lineWidth = 14;
//  ctx.strokeStyle = '#325FA2';
//  ctx.arc(0,0,142,0,time,false);
//  ctx.stroke();
//
//  ctx.restore();
//  
//  };
//  
//  window.requestAnimationFrame(clock);
//  
//};

//clock();

