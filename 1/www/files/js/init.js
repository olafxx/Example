jQuery(function($) { 
   
					
		$.Placeholder.init();
				
		
		$(".btn_hide").on("click",function(){
			
			marker = "web_tx";
			if($(".layout").width()<770) marker = "mob_tx";
			
			$($(this).attr("href")).slideToggle();
			$(this).find("b").toggleClass("top");
			$(this).find("span").data(marker)==$(this).find("span").text() ? $(this).find("span").text("Убрать") : $(this).find("span").text($(this).find("span").data(marker));
	 
			return false;
		})
	
	
	/**/
	
		var replaceBlocks = function(){
		
			
			if ($(".layout").width()>=830){

				   $(".b-grid > div").eq(5).after($("#sport"));			   
				   $(".b-grid > div").eq(2).after($("#landscape"));
			
			}else if ($(".layout").width()>600 && $(".layout").width()<830){

				   $(".b-grid > div").eq(2).after($("#sport"));			   
				   $(".b-grid > div").eq(5).after($("#landscape"));
			
			}else if($(".layout").width()<600){

				   $(".b-grid > div").eq(5).after($("#sport"));			   
				   $(".b-grid > div").eq(5).after($("#landscape"));
				   
			}
			
		
		}
		
		replaceBlocks();
 		
		$(window).resize(function(){
		  replaceBlocks();
		})
 
 
	/**/
	
		var replaceBlocksSh = function(){
		
			
			if ($(".layout").width()>=830){

				   $(".b-grid > div").eq(5).after($("#farmerShop"));			   
				   $(".b-grid > div").eq(2).after($("#phermacy"));
			
			}else if ($(".layout").width()>600 && $(".layout").width()<830){

				   $(".b-grid > div").eq(2).after($("#farmerShop"));			   
				   $(".b-grid > div").eq(5).after($("#phermacy"));
			
			}else if($(".layout").width()<600){

				   $(".b-grid > div").eq(3).after($("#phermacy"));
				   
			}
			
		
		}
		
 		replaceBlocksSh();
		
		$(window).resize(function(){
		  replaceBlocksSh();
		})
 
    /**/
		
		$(".b-nav__mobile_btn").on("click",function(e){
		
			var self = $(this);
									  
				if(self.closest("li").children().is("ul")) { 			  
				
					self.toggleClass("active");
					self.closest("li").children("ul").slideToggle();
					
				}
					 
		   e.preventDefault();
 
		});
	
	/**/
	
	/* b-tabs */
	
		$(".b-tabs__nav").on("click mousedown selectstart",".b-tabs__btn",function(e){
		
			var self = $(this);
			
			self.closest(".b-tabs__nav").find(".b-tabs__btn").removeClass("selected");
			self.addClass("selected");						  
				 
			var id = "#" + self.data("show");
		 
			self.closest(".b-tabs").find(".b-tabs__cell").hide();
			$(id).show();						  
				 
		   e.preventDefault();

		});
	 
	/**/
	
	
	/* b-cell__hover */
		var bCellHover = (function(){
		
			var duration = 500;
			 
			 
			$(".b-grid").on("mouseenter",".b-cell",function(){
			
				var self = $(this);
				
				if(self.find(".b-cell__hover").length == 0) return;
										 
				self.find(".b-cell__hover").stop(true,true).show().animate({"opacity":"1"},duration,function(){
				
					$(this).css({"position":"relative"});
					$(this).find(".b-cell__hover_content").css({"padding":"0"});
					self.find(".b-cell__content").stop(true,true).hide();
				
				});							 
											 
			});
			
			$(".b-grid").on("mouseleave",".b-cell",function(){
			
				var self = $(this);
			
				if(self.find(".b-cell__hover").length == 0) return;
				
				self.find(".b-cell__content").stop(true,true).css({"position":"absolute"});
				 
				self.find(".b-cell__hover").stop(true,true).animate({"opacity":"0"},0,function(){ 
					
					$(this).hide().css({"position":"absolute"});	
					$(this).find(".b-cell__hover_content").css({"padding":"10px"});
					self.find(".b-cell__content").css({"position":"relative"});	
					self.find(".b-cell__content").stop(true,true).show();
					
				});	
				
														   
			});
			
		})//();		
	/**/
	
	
						
	/* switch */
	
		$(".main").on("mousedown",".switch", function(){
		
			 var hide = $(this).data("hide");
			 var show = $(this).data("show");
		 
			 $(hide).hide();
			 $(show).show();
			  
		});		
		
		$(".main").on("mousedown selectstart",".switch", function(){
 
			 return false

		});
					
	/**/
		 

	
	
 
	 
});