
//-------------- Button - show ------------------------
var $link = $('.about_showPrinciples');

$link.click (function(e) {

		var $principlesH = $('.about_principlesH');
		
		$principlesH.show();

		$link.hide();
});


//--------------- Slider buttons --------------------------------
var $headerCss1 ={
	'backgroundImage': 'url(static/img/slider1.jpg)',
	'backgroundSize': 'cover',
	'height': '100vh',
}

var $headerCss2 ={
	'backgroundImage': 'url(static/img/slider2.jpg)',
	'backgroundSize': 'cover',
	'height': '100vh'
}

var $headerCss3 ={
	'backgroundImage': 'url(static/img/slider3.jpg)',
	'backgroundSize': 'cover',
	'height': '100vh'
}

var $header = $('.header');

var $linkSlide1 = $('.cover1');
 
$linkSlide1.click (function(slide1){

	$header.css($headerCss1);
});


var $linkSlide2 = $('.cover2');
 
$linkSlide2.click (function(slide2){

	$header.css($headerCss2);
});



var $linkSlide3 = $('.cover3');
 
$linkSlide3.click (function(slide3){

	$header.css($headerCss3);
});


