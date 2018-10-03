$(document).ready(function () {
    $('#fullpage').fullpage({
        // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
        anchors: ['start', 'themediums'],
        autoScrolling: true,
        scrollOverflow: false,
        verticalCentered: false,
        scrollingSpeed: 1000
    });
});

$(document).on('click', '#secNext', function () {
    $.fn.fullpage.moveSectionDown();
});

$(document).on('click', '#turnOff', function () {
    $.fn.fullpage.setAllowScrolling(false);
});