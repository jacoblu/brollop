/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
    var modal = this;
    var hash = modal.id;
    var oldhash = window.location.hash;
    window.location.hash = hash;
    window.onhashchange = function() {
        if (!location.hash){
            $(modal).modal('hide');
        }
    }
    $(modal).on('hidden.bs.modal', function() {
        // If the url still has the modal hash, clear it by going back in the
        // history (to avoid scrolling which happens when setting
        // window.location.hash = "").
        if (window.location.hash == "#".concat(hash)) {
            window.history.back();
        }
    })
});
