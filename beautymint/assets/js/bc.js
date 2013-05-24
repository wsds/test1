var createVideoModal = {
	init: function() {
		var bcExp;
		var modVP;
		var modExp;

		window.onTemplateLoaded = function(experienceID) {
			bcExp = brightcove.getExperience(experienceID);
			modVP = bcExp.getModule(APIModules.VIDEO_PLAYER);
			modExp = bcExp.getModule(APIModules.EXPERIENCE);
			modExp.addEventListener(BCExperienceEvent.CONTENT_LOAD, onContentLoad);
		}

		$.getScript('https://sadmin.brightcove.com/js/BrightcoveExperiences_all.js', function(){
			brightcove.createExperiences();
		});

		$(function() {
			// Video Carousel: Our Story,
			$('#video-carousel li').click(function(){
				$('#video-carousel li').removeClass('on');
				modVP.loadVideo($(this).addClass('on').find('img').attr('alt'));
				return false;
			});
		});
	}
};
createVideoModal.init();

$(function() {
	$('.hiw-video').click(function(){
		//mint.modal.create("How It Works", $("#modal-switch").html());
		$(this).hide().after($(".video-modal"));
		return false;
	});
	$('.why-video').click(function(){
		//mint.modal.create("The Science of BeautyMint", $("#modal-switch").html());
		$(this).hide().after($(".video-modal"));
		return false;
	});
	$('.welcome-video').click(function(){
		mint.modal.create("Welcome To <span>BeautyMint</span>", $("#modal-switch").html(), {}, '<span>close</span>', 'p-detail-content home');
		return false;
	});
});