/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {
$(document).ready(function() {

//-- report current media query -- comment out for production
/* $('body').prepend('<div class="s1 screen-width"><p>Baby Bear</p></div><div class="s2 screen-width"><p>Brother Bear <strong>min-width:480px</strong></p></div><div class="s3 screen-width"><p>Mama Bear <strong>min-width:600px</strong></p></div><div class="s4 screen-width"><p>Papa Bear <strong>min-width: 960px</strong></p></div>'); */

//--report the window width -- comment out for production
/*
$('body').prepend('<div class="window-width"></div>');
$(window).resize(function() {
  $('.window-width').replaceWith('<div class="window-width">' + $('body').width() + 'px wide</div>');
});
*/


$('.flickr-wrap:odd').addClass('odd');
$('.flickr-wrap:even').addClass('even');


});
})(jQuery, Drupal, this, this.document);
