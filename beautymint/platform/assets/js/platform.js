mint.provide('chat',{
	urls: ["/checkout"],
	init: function(){
		var path = location.pathname;
		if($.inArray(path, mint.chat.urls) != -1) {
			setTimeout(function(){
				var $div = $("<div id='chat-modal'><h4>Can one of our customer care agents help you?</h4><a class='chat-now' target='_blank' href='https://chat2.livechatinc.com/licence/1069118/open_chat.cgi?lang=en&groups="+mint.config('store')+"'>Chat Now</a><a href='#' class='close'>No Thanks</a></div>").appendTo('body').slideDown();
				$div.find('.chat-now').click(function(){
					window.open('https://chat2.livechatinc.com/licence/1069118/open_chat.cgi?lang=en&groups='+mint.config('store'), 'Chat', 'height=600,width=600,scrollbars=yes,resizable=yes');
					if(window._jaq) {
						_jaq.push([
						'_trackPageview',
						'/chat'+path
						]);
					}
					return false;
				});
				$div.find('.close').click(function(){
					$div.slideUp();
				});
			}, 120000);
		}
	}
});

if(location.pathname.indexOf("order") > -1 && location.pathname.indexOf("thank") > -1){
	var j = mint.cookie("j");
	var e = mint.cookie("e");
	var l = mint.cookie("l");
	var u = mint.cookie("u");
	var jb = mint.cookie("jb");
	var mid = "";
	var link_id = "";
	var store = mint.config('store');
	if(store = 1){
		mid = "1060440";
		link_id = "100";
	}else if(store = 2){
		mid = "1059038";
		link_id = "200";
	}else if(store = 3){
		mid = "1061211";
		link_id = "300";
	}else if(store = 4){
		mid = "1062444";
		link_id = "400";
	}else{
		//return false;
	}
		
	if(j && j.length >0 && e && e.length >0 && l && l.length >0 && u && u.length >0 && jb && jb.length >0){
		setTimeout(function(){
			var xml = "<system><system_name>tracking</system_name><action>conversion</action>";
			xml += "<member_id>"+mid+"</member_id>";
			xml += "<job_id>"+j+"</job_id>";
			xml += "<email>"+e+"</email>";
			xml += "<list>"+l+"</list>";
			xml += "<original_link_id>"+u+"</original_link_id>";
			xml += "<BatchID>"+jb+"</BatchID>";
			xml += "<conversion_link_id>"+link_id+"</conversion_link_id>";
			xml += "<link_alias>orderthankyou</link_alias>";
			xml += "<display_order>1</display_order></system>";
			//console.log(xml);
			$("body").append($("<div>").attr("id","conversion-pixel").css({"position":"absolute","top":"0","left":"-2000px"}).append($("<img />").attr("href","http://click.exacttarget.com/conversion.aspx?xml="+xml).width("1px").height("1px")));
		}, 120);
	}
	/*<system>
		<system_name>tracking</system_name>
		<action>conversion</action>
		<member_id>20496</member_id>
		<job_id>13919</job_id>
		<email>joe@fictitiousdomain.com</email>
		<list>11456_HTML</list>
		<original_link_id>137476 </original_link_id>
		<BatchID>36</BatchID>  
		<conversion_link_id>2</conversion_link_id>
		<link_alias>KayakPage </link_alias>  
		<display_order>2</display_order>
		<data_set></data_set>
	</system>*/
}
