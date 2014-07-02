$(document).ready(function() {
	var $filmstrip_tap = $('#tap').find('.filmstrip-wrapper');
	var $filmstrip_tap_wrapper = $('#tap').find('.filmstrip-outer-wrapper');
	var $filmstrip_grain = $('#gif-body').find('.filmstrip-wrapper');
	var $filmstrip_grain_wrapper = $('#gif-body').find('.filmstrip-outer-wrapper');
	var filmstrip_grain_aspect_width = 1280;
	var filmstrip_grain_aspect_height = 720;
	var $filmstrip_rake = $('#rake').find('.filmstrip-wrapper');
	
	function size_filmstrip() {
	    var filmstrip_grain_width = $filmstrip_grain_wrapper.width();
	    var filmstrip_grain_height = Math.ceil((filmstrip_grain_width * filmstrip_grain_aspect_height) / filmstrip_grain_aspect_width);
	    var filmstrip_tap_width = $filmstrip_tap_wrapper.width();
	    var filmstrip_tap_height = Math.ceil((filmstrip_tap_width * filmstrip_grain_aspect_height) / filmstrip_grain_aspect_width);
	    
	    $filmstrip_grain.width(filmstrip_grain_width + 'px').height(filmstrip_grain_height + 'px');
	    $filmstrip_tap.width(filmstrip_tap_width + 'px').height(filmstrip_tap_height + 'px');
	    $filmstrip_rake.width(filmstrip_tap_width + 'px').height(filmstrip_tap_height + 'px');
	
	}

function setup_animations() {
    var prefixes = [ '-webkit-', '-moz-', '-o-', '' ];
    var keyframes = '';
    var filmstrip_steps = 17;
    for (var i = 0; i < prefixes.length; i++) {
        var filmstrip = '';
        for (var f = 0; f < filmstrip_steps; f++) {
            var current_pct = f * (100/filmstrip_steps);
            filmstrip += current_pct + '% {background-position:0 -' + (f * 100) + '%;' + prefixes[i] + 'animation-timing-function:steps(1);}';
        }
        keyframes += '@' + prefixes[i] + 'keyframes filmstrip {' + filmstrip + '}';
    }
    
    var s = document.createElement('style');
    s.innerHTML = keyframes;
    $('head').append(s);
    
}

function setup() {
setup_animations();
size_filmstrip();
}


setup();

$(".filmstrip").addClass("animated"); 


});