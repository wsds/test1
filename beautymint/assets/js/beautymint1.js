// Beautymint1.js

$(function(){
	mint.event.watch('signup', function(evt, data){

		try {
			if(data.session.data.styleId) {
				location.href = "http://" + location.host + "/results";
			} else {
				location.href = "http://" + location.host + "/skin-consultation";
			}
		} catch(e) {
			location.href = "http://" + location.host + "/results";
		}

	});
	mint.event.watch('login', function(evt, data){
		try {
			if(data.session.data.styleId) {
				location.href = "http://" + location.host + "/profile";
			} else {
				location.href = "http://" + location.host + "/skin-consultation";
			}
		} catch(e) {
			location.href = "http://" + location.host + "/profile";
		}
	});
	mint.event.watch('logout', function(){
		location.href = "http://" + location.host + "/logout";
	});
	mint.event.watch('cart-add', function(){
		$('.product-add').find('.mint-loading-placeholder').show().end().find('a').hide();
		location.href = "/checkout";
	});
	mint.event.watch('quiz_completed', function(){
		location.href = "/get-started";
	});
	mint.event.watch('checkoutComplete', function(){
		$('.mint-checkout-button-bar').hide();
		location.href = "/order/thank-you";
	});

	mint.event.watch('updateSettings',function(){
		mint.req.json("${baseUrl}/${store}/customer/monthly/get", function(data){
			console.log(data);
			if(data == "No Products Found"){
				$(".my-system-products").text("You don't have a system yet");
			}else{
				var system = $("<ol>").addClass("my-system").attr("data-stest","my-system");
				for(prod in data){
					system.append($("<li>").text(data[prod].name));
				}
				$(".my-system-products").html(system);
			}
		});
	});

	mint.event.watch('quizInit',function(){
		$('.mint-quiz-page').each(function(i){
			if(i != 16) {
				$(this).find('.mint-quiz-question').css({background: 'url(/assets/images/quiz/q'+(i+1)+'_bg.jpg) no-repeat 0 0'});
			}
		});
		$('.mint-quiz-page-5 .mint-quiz-answer-textonly').unbind('click').click(function(){

			$('.mint-quiz-page-5 .mint-quiz-answer-textonly:last').removeClass('mint-selected');
			$(this).toggleClass('mint-selected');
			return false
		});
		$('.mint-quiz-page-5 .mint-quiz-answer-textonly:last').unbind('click').click(function(){

			$('.mint-quiz-page-5 a').removeClass('mint-selected');
			$(this).addClass('mint-selected');
			return false
		});
		$('.mint-quiz-page-16 .mint-quiz-answer-textonly').unbind('click').click(function(){

			$('.mint-quiz-page-16 a').removeClass('mint-selected');
			$(this).addClass('mint-selected');
			$('.mint-quiz-next').click();
			return false
		});
	});
	mint.event.watch('quizQuestionChange',function(e, i){
		console.log(i);
		$('.progress-text strong').text(i+1);
		$('.quiz-progress li').each(function(liNumber) {
			if(liNumber == i) {
				$(this).addClass('completed');
			}
			if(liNumber == i+1) {
				$(this).removeClass('completed');
				return false;
			}
		});
	});

    /*  =Opens external hostnames in a new tab/window
		currently just targeting footer social links
    ----------------------------------------------- */
	$(".social a").filter(function(){
		return this.hostname && this.hostname !== location.hostname;
	}).each(function(){
		$(this).attr({
			target  : '_blank',
			title   : "Visit " + this.href
		}).addClass('external');
	});

	
	//Handle tile links on homepage to fix issue in IE9
	$(".home .slider .col").click(function(){
		var link = $(this).children("a").attr("href");
		//console.log(link);
		location.href = "http://" + location.host + link;

		return false;
	});
	
});
