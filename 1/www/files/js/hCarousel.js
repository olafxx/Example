$.fn.hCarousel = function(){
   
   //scrollAll - slide one or some cell 
   
  	var self = $(this);
	var selector = $(this).selector;
	
	
	mesure = {
	
	   widthBlock : function() { 
			return content.width();
			},
			
	   widthContent : function() { 
			return ul.width();
			}
			
    };	 
 
	var options = {
		bgPrev : "iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlEMzc4RDk3NTJBMzExRTM4OUU3ODkyN0Y2N0Y0OTI1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlEMzc4RDk4NTJBMzExRTM4OUU3ODkyN0Y2N0Y0OTI1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUQzNzhEOTU1MkEzMTFFMzg5RTc4OTI3RjY3RjQ5MjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUQzNzhEOTY1MkEzMTFFMzg5RTc4OTI3RjY3RjQ5MjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5v57TYAAABUElEQVR42qyUMVLDMBBFZeUEbikonCM4dJSEjhJKymRyAnOE+ARMfATcpgKXlNYRkoKGMm3K/M18zWh21obCmtnRSJbe/i+tlTmj3T9ucnTPiBJRcPqICIj2+/P9pPdkBqRCJ5E7uwmkRjQpMFMqvqgiLu6wOPB7QZUxicwvIywF9YQ0iDdLfpJwi1ilsFli55Vy1z+H/jxgy8k3xP52fneD4RPnuoySe9pZWEqw5po92kzmD7yMuadvkVuPQHaID9pKW81+JaAHDtoRiCR4MRLFPaXnAQe9SEGW2pY07ulEjKctDSkIcbzB4P5onpBcZZIqXnO4Bbj8D0iylfogAWsIuxaqBeMeOePO06Pj7bkRmHVrcU/wPHmxVxkLU5h1axX7ZoaqPKFKIz2XqjWqOSB+la0dbUn9tZP9a9P//ZO9RwMvZEGFjgqOQy/kRYABALqTxtzNi5RaAAAAAElFTkSuQmCC",
		bgNext : "iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIwNzY2Mzg2NTJBMzExRTM4MUFGQTI2NzdGMTFGMTNGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIwNzY2Mzg3NTJBMzExRTM4MUFGQTI2NzdGMTFGMTNGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjA3NjYzODQ1MkEzMTFFMzgxQUZBMjY3N0YxMUYxM0YiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjA3NjYzODU1MkEzMTFFMzgxQUZBMjY3N0YxMUYxM0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5fMrRaAAABXElEQVR42qxUoZLCMBBNg0LWIhDwCeXcSQ6HhE+gwxeAvHNUohj6CVeLgkpw5BNAYJC1yHvLPGYyme1hmpmlJNl9u3n7ksgo43M0j/GZwBJYj8tXmIMVx/2mCmMiBWAGW8Biow8ByQCWqUAEObCKpzOzX7kv60MviVT39aouUkBy2FIr3/NdsXIHv4Gst+Sn2//4Jic5NtLb5fyoOZaRPdgOMR1Mx/jK/BQhg5B5ETIB0g+yS4UJ1vOays485sCyRENOQsdf2Bb/ZyEQj54RaGLJi4xCcZySeBXMixladqLUyMXaszN1YIwRn8SaN4NgS0635DTUVfwWiISvOE1fuvKGcFQJUCnHI7kayIHOadg9xoiPszyjoY60rqkgQUxpqWRD6WtdS//R0YIcFS2osoI621RpR1TrqfgOcxp38F2z4z9ItGvsrjV7+xt9j2peyJ53hRxfSfWF/BNgAK7GweLZycAsAAAAAElFTkSuQmCC",	
	    scrollAll:true
	};
	
 	
	var style = "\
		<style>\
			"+selector+" {\
				position:relative;\
				padding:0 24px;\
				margin-bottom:20px;\
				}\
				"+selector+"__content {\
					position:relative;\
					overflow:hidden;\
					}\
					"+selector+"__move {\
						width:9999px;\
						position:relative;\
						margin-left:0;\
						}\
						"+selector+"__content ul {\
							padding:0;\
							margin:0;\
							float:left;\
							overflow:hidden;\
							}\
							"+selector+"__content li {\
								padding:0 5px;\
								margin:0;\
								float:left;\
								position:relative;\
								list-style-type: none;\
								}\
	\
						"+selector+"__prev, "+selector+"__next {\
							position:absolute;\
							top:50%;\
							margin-top:-9px;\
							width:19px;\
							height:19px;\
							cursor:pointer;\
							display:block;\
							}\
						"+selector+"__prev {\
							background:url(data:image/png;base64,"+options.bgPrev+") top no-repeat;\
							left:0; }\
						"+selector+"__next {\
							background:url(data:image/png;base64,"+options.bgNext+") top no-repeat;\
							right:0;\
							}\
	\
	\
						"+selector+"__prev:hover  { opacity:0.5; }\
						"+selector+"__next:hover  { opacity:0.5; }\
	\
	    </style>"; 
		

			
	var ul = $(selector).find("ul");

		var marker = true;
		var speed = 1000;
	  

		self.find("ul").wrap("<div class=\""+selector.substr(1)+"__move\"></div>");
		self.find(selector+"__move").wrap("<div class=\""+selector.substr(1)+"__content\"></div>");
		var move = $(selector+"__move");

		var content = $(selector).find(selector+"__content");
		
		jQuery.extend(jQuery.easing,
		{
			easeOutExpo: function (x, t, b, c, d) {
				return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
			}  
			
		});		
		
	
    self.append(style);
    self.append("<span class=\""+selector.substr(1)+"__prev\"></span><span class=\""+selector.substr(1)+"__next\"></span>");
 
 	var widthCell = $(selector).find(selector+"__content img").width() + parseInt($(selector).find(selector+"__content img").closest("li").css("padding-left")) + parseInt($(selector).find(selector+"__content img").closest("li").css("padding-right"))
		
	var nav = function(){

 	    widthCell = $(selector).find(selector+"__content img").width() + parseInt($(selector).find(selector+"__content img").closest("li").css("padding-left")) + parseInt($(selector).find(selector+"__content img").closest("li").css("padding-right"))
	 
		if(mesure.widthBlock()>mesure.widthContent()) {
			
			marker = false;
			$(selector+"__prev, "+selector+"__next").hide();
			
		}else {
		
			marker = true;
			$(selector+"__prev, "+selector+"__next").show();
			
		}	

	};
	
	nav();
	
 	
	$(window).resize(function(){
	    nav();
	});
	 	
		
	var activateLeftArr = function() {
		
		    var marker = false;
			
			$(selector+"__prev").css({"opacity":1, "cursor":"pointer"});
 			
			if(mesure.widthContent() + parseInt(move.css("margin-left")) - mesure.widthBlock() <= 0) {  
 				marker = true; 
			}
			
 
			if(mesure.widthContent() + parseInt(move.css("margin-left")) - mesure.widthBlock() <= 0) {  
	  
				$(selector+"__next").css({"opacity":0.1, "cursor":"default"});

			} 
			  
 			return marker;
		
		}	
		
		var activateRightArr = function() {
		
		    var marker = false;
			
 			$(selector+"__next").css({"opacity":1, "cursor":"pointer"});
			
            if(parseInt(move.css("margin-left")) >= 0) {  
		
				marker = true;
				$(selector+"__prev").css({"opacity":0.1, "cursor":"default"});			
				
			}
			 
 			 
 			return marker;
			
		}
	
	activateLeftArr();
	activateRightArr();


	var scrollRightAll = function () {
	        
 			if(activateRightArr()) return false; 				
 			
			marker = false;			
 
			move.animate({
				'margin-left': parseInt(move.css("margin-left")) + mesure.widthBlock()
			}, speed, 'easeOutExpo', function () {

				marker = true;
				activateRightArr();

			});
			
			
			return false;

		}
	

	var scrollLeftAll = function() {
		
 			if(activateLeftArr()) return false; 				
			
			marker = false;
	 	
			move.animate({
				'margin-left':  parseInt(move.css("margin-left")) - mesure.widthBlock()
			}, speed, 'easeOutExpo', function () {

				marker = true;
				activateLeftArr();

			});
			
			
			return false;

		}

 	
		
	var scrollRight = function () {
	        
			if(options.scrollAll)  return scrollRightAll();

			marker = false;
			ul.find("li:last").prependTo(ul);

			move.css("margin-left", -widthCell).animate({
				'margin-left': 0
			}, speed, 'easeOutExpo', function () {

				marker = true;

			});

		}
		

	var scrollLeft = function() {

			if(options.scrollAll)  return scrollLeftAll();
			
			marker = false;
	 	
			move.animate({
				'margin-left': -widthCell
			}, speed, 'easeOutExpo', function () {
 
				ul.find("li:first").appendTo(ul);
				move.css("margin-left", "0");

				marker = true;

			});

		}
		
		
		


		self.on("mousedown selectstart", selector+"__next", function () {

			if(marker) scrollLeft();
			
			return false;
		});

		self.on("mousedown selectstart", selector+"__prev", function () {

			if(marker) scrollRight();
			
			return false;			
		});
		
	 
		self.mousewheel(function(objEvent, intDelta){ 
 
			if (intDelta < 0 && marker) scrollLeft();
			if (intDelta > 0 && marker) scrollRight();
			
			return false;
		});	
  
  
 		  var startX = 0;
 		  var koef = 20;
 
		  self.on("touchstart",function(event){		
 		
			    startX = event.originalEvent.touches[0].clientX;				
  				 
 				self.on("touchmove",function(e){
			
						var posX = e.originalEvent.touches[0].clientX;

 						
						if(startX-posX>0 && Math.abs(startX-posX)>koef && marker){
					
						   scrollLeft();						  
 						   
						   return false;

						}else if(startX-posX<0 && Math.abs(startX-posX)>koef && marker){
			  
						   scrollRight();
 						   
						    return false;
							
						}
						  
				}); 	
					
				self.on("touchend",function(event){
					 
					 self.unbind("touchmove");
					   
				})  
				
		 })  
 
 
} 