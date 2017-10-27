$(document).foundation();

// Navbar Menu Icon closes dropdown when clicked
$('.navicon-button').click(function(e) {
	e.preventDefault();
	$(this).toggleClass('open');
	$('.top-bar').toggleClass('open');
});

$('.top-bar ul li a').click(function(e) {
	e.preventDefault();
	$('.top-bar').toggleClass('open');
	$('.navicon-button').toggleClass('open');
});



// Listens to sticky trigger on navbar to change fill of logo
// window.onload=function() {
// 	$('.sticky').on('mutateme.zf.trigger', function(e) {
// 		//console.log('closed');
// 		e.preventDefault();
// 		$('object#nav-logo').toggleClass('white');
// 		$('.brand').toggleClass('dont-show');
//
// 		if ($('#sticky-container').hasClass('is-stuck')) {
// 			 //$(this).parent().addClass('active');
// 			 var object = document.getElementById("nav-logo");
// 			 var svgDocument = object.contentDocument;
// 			 var svgb1 = svgDocument.getElementsByClassName("tribtower-container");
// 			 svgb1[0].setAttribute("fill", "#08459b");
// 		}
// 		else {
// 			var object = document.getElementById("nav-logo");
// 			var svgDocument = object.contentDocument;
// 			var svgb1 = svgDocument.getElementsByClassName("tribtower-container");
// 			svgb1[0].setAttribute("fill", "#FFFFFF");
// 		}
//
// 	 });
//  };

// Start CD Tabs and functions
jQuery(document).ready(function($){
	var tabs = $('.cd-tabs');

	tabs.each(function(){
		var tab = $(this),
			tabItems = tab.find('ul.cd-tabs-navigation'),
			tabContentWrapper = tab.children('ul.cd-tabs-content'),
			tabNavigation = tab.find('nav');

		tabItems.on('click', 'a', function(event){
			event.preventDefault();
			var selectedItem = $(this);
			if( !selectedItem.hasClass('selected') ) {
				var selectedTab = selectedItem.data('content'),
					selectedContent = tabContentWrapper.find('li[data-content="'+selectedTab+'"]'),
					selectedContentHeight = selectedContent.innerHeight();

				tabItems.find('a.selected').removeClass('selected');
				selectedItem.addClass('selected');
				selectedContent.addClass('selected').siblings('li').removeClass('selected');
				//animate tabContentWrapper height when content changes
				tabContentWrapper.animate({
					'height': selectedContentHeight
				}, 200);
			}
		});

		//hide the .cd-tabs::after element when tabbed navigation has scrolled to the end (mobile version)
		checkScrolling(tabNavigation);
		tabNavigation.on('scroll', function(){
			checkScrolling($(this));
		});
	});

	$(window).on('resize', function(){
		tabs.each(function(){
			var tab = $(this);
			checkScrolling(tab.find('nav'));
			tab.find('.cd-tabs-content').css('height', 'auto');
		});
	});

	function checkScrolling(tabs){
		var totalTabWidth = parseInt(tabs.children('.cd-tabs-navigation').width()),
		 	tabsViewport = parseInt(tabs.width());
		if( tabs.scrollLeft() >= totalTabWidth - tabsViewport) {
			tabs.parent('.cd-tabs').addClass('is-ended');
		} else {
			tabs.parent('.cd-tabs').removeClass('is-ended');
		}
	}
});
