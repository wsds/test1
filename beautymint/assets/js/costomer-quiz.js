function json2str(o) {
	var arr = [];
	var fmt = function(s) {
		if (typeof s == 'object' && s != null)
			return json2str(s);
		return /^(string|number)$/.test(typeof s) ? "'" + s + "'" : s;
	};
	for ( var i in o)
		arr.push("'" + i + "':" + fmt(o[i]));
	return '{' + arr.join(',') + '}';
}

testUI = {
	
	register : function (name, obj) {
		if (obj.init) {
			obj._init = obj.init;
			delete obj.init;
		}
		//this.widgets[name] = this.baseWidget.extend(obj);
	}
};
//testUI.register('customer-quiz', customer_quiz_ui);
var zz;

var customer_quiz_ui = {
	options : {
		width : 950,
		height : 480,
		extra_params : null,
		quiz : false,
		hidePrev : false,
		hideNext : false,
		loadUrl : '${baseUrl}/${store}/customer/quiz/get',
		ajaxUrl : '${baseUrl}/${store}/customer/quiz/submit',
		getProductUrl : '${baseUrl}/${store}/catalog/product/summary',
		image_dir : '',
		question_prefix : 'q',
		// check this parameter in the query string to see if they want to save
		// a product to their showroom when they register
		showroomAddProductParam : "product",
		// product id of the product we would want to add to our showroom upon
		// successful registration
		addProductId : false
	},
	init : function () {
		var z = this,
		zz = z;
		question_ids = [],
		possibleProductId = mint.util.getParameterByName(this.options.showroomAddProductParam);
		
		/* $.each(customer_quiz_ui, function (i) {
		$.each(z.options.quiz.pages[i].questions, function (j, v) {
		question_ids.push(v);
		});
		}); */
		
		$('.tip-link').live('click', function () {
			if ($('.tip').is(':visible')) {
				$(this).next().hide();
			} else {
				$(this).next().show();
			}
			return false;
		});
		
		$('.tip .close').live('click', function () {
			$(this).parent().hide();
			return false;
		});
		
		// get the information about the product they wanted to add to their showroom
		// (which is why they are taking the quiz and registering)
		if (possibleProductId) {
			
			mint.req.json(this.options.getProductUrl, {
				product : possibleProductId
			}, function (data) {
				if (!data.product) {
					return false;
				} else { // product is verified as existing
					z.addProductId = possibleProductId;
				}
				
				var image = {
					height : 265,
					width : 212,
					name : "212x265"
				},
				tmpl = mint.tmpl.catalog.product.product_modal,
				$el;
				
				image.src = data.product.images.base[0][image.name.toLowerCase()]// lowercase the X in between the dims
					
					// build the template with the data and add to the DOM
					if (tmpl) {
						$el = $.tmpl(tmpl, {
								image : image
							});
						$(document.body).append($el);
						$el.delegate("a", "click", function (e) {
							e.preventDefault();
							$el.fadeOut("fast");
						});
						$el.fadeIn("fast");
					} else {
						throw new Error("product modal template not found");
						return;
					}
			});
		}
		z.render_quiz(quiz_data);
		// load and render the quiz
		
	},
	
	render_quiz : function (data) {
		var
		z = this;
		if (!data.questions) {
			console.log("No questions returned. Shutting down", data);
			return;
		}
		z.options.qs = data.questions;
		z.options.baseUrl = mint.config('baseUrl');
		//console.log(z.options);
		//z.render();
		
		z.$el.find(".mint-quiz-answers").each(function () {
			$(this).find('li:last').addClass('mint-last-answer');
		});
		
		z.$el.find(".mint-quiz-slider-answers li:first-child").addClass("mint-selected");
		
		z.loadImages();
		
		if (location.hash == '#quick-complete') {
			try {
				mint.tracking.track().setTrackingQParams();
			} catch (e) {}
			z.$el.find(".mint-quiz-question").each(function () {
				$(this).find(".mint-quiz-answer:first").addClass('mint-selected');
			});
			var answers = [];
			z.$el.find(".mint-selected").each(function () {
				answers.push(this.id.replace("mint-quiz-answer-", ""));
			});
			
			mint.ui.factory('util-loading', z.$el);
			
			var inv_token = null;
			if (z.options.extra_params) {
				inv_token = JSON.parse(z.options.extra_params);
				inv_token = inv_token.inv;
			}
			mint.req.json(z.options.ajaxUrl, {
				answers : answers.join(","),
				addProductId : z.addProductId,
				link_token : inv_token
			}, function (data, error) {
				try {
					mint.session._obj.data.styleId = data.style_bucket_key;
					mint.session.set();
				} catch (e) {}
				
				mint.event.trigger('quiz_completed', data);
			});
		}
	},
	
	loadImages : function () {
		/* To get the image height, we must load images first */
		var
		z = this,
		$images = z.$el.find(".mint-quiz-page-0 .mint-quiz-answer img");
		
		if ($images.length == 0) {
			z.initCycle();
		} else {
			var oldImage = $images[$images.length - 1];
			if (!oldImage.height) {
				var image = new Image();
				$(image).load(function () {
					z.initCycle();
				}).bind('error', function () {
					z.initCycle();
				}).attr('src', oldImage.src);
			} else {
				z.initCycle();
			}
		}
	},
	initCycle : function () {
		var
		z = this,
		init = false,
		submitting = false,
		totalWidth = z.$el.find(".mint-quiz-status").width(),
		currentPage = 0;
		
		z.$el.find(".mint-quiz-status-bar").width(0);
		
		z.pageCycle = z.$el
			.css({
				width : z.options.width,
				overflow : 'hidden'
			})
			.find('.mint-quiz-page').css({
				width : z.options.width
			}).end()
			.find('.mint-quiz-pages').cycle({
				fx : 'scrollHorz',
				timeout : 0,
				containerResize : 0,
				slideResize : false,
				speed : 1000,
				nowrap : true,
				height : z.options.height,
				before : function (c, n) {
					if (currentPage == 0) {
						z.$el.find(".mint-quiz-prev").hide();
					} else {
						z.$el.find(".mint-quiz-prev").show();
					}
					
					$(c).find('.tip').hide();
					
					if (!$(n).data("height")) {
						$(n).data("height", $(n).height());
					}
					$(n).show();
					//z.$el.find('.mint-quiz-pages').height($(c).data("height")).animate({height: $(n).data("height")}, 1000);
					
					//var percentComplete = Math.ceil(100*(currentPage)/(z.options.quiz.pages.length));
					var newWidth = Math.ceil(totalWidth * (currentPage + 1) / (z.options.quiz.pages.length));
					z.$el.find(".mint-quiz-status-text").html((currentPage + 1) + "/" + z.options.quiz.pages.length);
					z.$el.find(".mint-quiz-status-bar").animate({
						width : newWidth
					}, 1000);
					
					/*if(init == true) {
					$('html, body').animate({scrollTop: z.$el.offset().top + 'px'}, 1000);
					}*/
					init = true;
					
					mint.event.trigger('quizQuestionChange', currentPage);
					
					if (window._jaq) {
						_jaq.push([
								'_trackPageview',
								'/quiz/page/' + currentPage
							]);
					}
				},
				prevNextClick : function (b, i) {
					currentPage = i;
				}
			});
		
		var next = function () {
			
			if (!z.validatePage(currentPage) || submitting)
				return false;
			
			if (currentPage < z.options.quiz.pages.length - 1) {
				z.pageCycle.cycle('next');
				return false;
			}

			
			var answers = [];
			z.$el.find(".mint-selected").each(function () {
				answers.push(this.id.replace("mint-quiz-answer-", ""));
			});
			
			mint.ui.factory('util-loading', z.$el);
			
			var inv_token = null;
			if (z.options.extra_params) {
				inv_token = JSON.parse(z.options.extra_params);
				inv_token = inv_token.inv;
			}
			alert(json2str(answers));
			alert('test done');
			window.location.pathname="/get-started/"
			submitting = true;
			mint.req.json(z.options.ajaxUrl, {
				answers : answers.join(","),
				addProductId : z.addProductId,
				link_token : inv_token
			}, function (data, error) {
				mint.msg.loading.show();
				try {
					mint.session._obj.data.styleId = data.style_bucket_key;
					mint.session.set();
				} catch (e) {}
				mint.event.trigger('quiz_completed', data);
				mint.msg.loading.hide();
			});
			
			if (window._jaq) {
				_jaq.push([
						'_trackPageview',
						'/quiz/page/' + currentPage
					]);
			}
			
			return false;
		};
		
		z.$el.find(".mint-quiz-answer").click(function () {
			
			var $el = $(this);
			var $ul = $el.closest(".mint-quiz-answers");
			
			if ("mint-quiz-page-" + currentPage != $ul.closest('.mint-quiz-page').attr('data-stest')) {
				return false;
			}
			
			if ($ul.hasClass("mint-quiz-multiple-answers")) {
				$el.toggleClass('mint-selected').closest(".mint-quiz-question").removeClass("mint-error");
			} else {
				var numOfQuestions = $ul.find(".mint-quiz-answer").removeClass("mint-selected").closest(".mint-quiz-question").removeClass("mint-error").parent().find('.mint-quiz-question').length;
				$el.addClass('mint-selected');
				if (numOfQuestions === 1) {
					next();
				}
				else{
				alert('test done');
				}
			}
			return false;
		});
		
		z.$el.find(".mint-quiz-slider-answers-count-4 li:first-child").css("margin-right", "81px");
		z.$el.find(".mint-quiz-slider-answers-count-4 li:nth-child(2)").css("margin-right", "83px");
		z.$el.find(".mint-quiz-slider-answers-count-4 li:nth-child(3)").css("margin-right", "82px");
		z.$el.find(".mint-quiz-slider-answers-count-4 li:last-child").css("margin-right", "0px");
		z.$el.find(".mint-quiz-slider-answers-count-3 li:last-child").css("margin-right", "0px");
		
		z.$el.find(".mint-quiz-slider-answers li").click(function () {
			var clicked = $(this);
			if (!clicked.hasClass("mint-selected")) {
				var all = clicked.parent().find('li');
				var slider = clicked.parent().siblings(".slider-container").find(".slider");
				var pos = all.index(clicked);
				var perc = 0;
				if (pos != 0) {
					perc = pos / (all.length - 1);
				}
				perc *= 100;
				slider.find(".ui-slider-handle").animate({
					left : perc + "%"
				}, function () {
					next();
				});
				slider.find(".ui-slider-range").animate({
					width : perc + "%"
				});
				clicked.parent().find(".mint-selected").removeClass("mint-selected");
				clicked.addClass("mint-selected");
			}
		});
		
		var sliders = z.$el.find(".slider");
		sliders.each(function () {
			var slide = $(this);
			var numquestions = parseInt(slide.attr("rel"));
			slide.slider({
				range : 'min',
				step : 1,
				max : numquestions - 1,
				animate : true,
				slide : function (event, ui) {
					var num = ui.value + 1;
					var all = $(this).parent().siblings(".mint-quiz-slider-answers");
					var s = all.find("li:nth-child(" + num + ")");
					all.find(".mint-selected").removeClass("mint-selected");
					s.addClass("mint-selected");
				},
				stop : function (event, ui) {
					next();
				}
			});
		});
		
		z.$el.find(".mint-quiz-next").click(next)
		.end()
		.find('.mint-quiz-prev').click(function () {
			z.pageCycle.cycle('prev');
			return false;
		});
		
		mint.event.trigger('quizInit');
	},
	validatePage : function (page) {
		var z = this,
		passed = true,
		$page = z.$el.find(".mint-quiz-page:eq(" + page + ")");
		
		$page.find(".mint-quiz-question").removeClass("mint-error").each(function () {
			var $q = $(this);
			
			if ($q.find(".mint-selected").length === 0) {
				passed = false;
				$q.addClass("mint-error");
			}
		});
		
		if (!passed) {
			mint.msg.create(null, "Please select an answer below.", "error");
		}
		return passed;
	},
	render : function (data) {
		var obj = mint.tmpl,
		n = this.templateName.split('-'),
		v = obj;
		while ((obj = v) && n.length)
			v = obj[n.shift()];
		if (this.options.tmpl) {
			$(this.options.tmpl).tmpl(data || this.options).appendTo(this.$el.html(''));
		} else {
			$.tmpl(v, data || this.options).appendTo(this.$el.html(''));
		}
	}
	
};

function registerUI() {
	customer_quiz_ui.options.quiz = options.quiz;
	customer_quiz_ui.templateName = "customer-quiz";
	customer_quiz_ui.$el = $('.mint-customer-quiz');
	//testUI.register('customer-quiz', customer_quiz_ui);
	customer_quiz_ui.init();
};

$(document).ready(function() {
	registerUI();
});
