$(document).ready(function() {
    $('.block-countdown-timer').each(function() {
        var countdown = $(this);
        var date = new Date(countdown.data('datetime'));

        countdown.countdown(date, function(event) {
            $(this).html(
                event.strftime(
                    '<span class="countdown-minutes">%M</span><span class="countdown-separator">:</span>' +
                    '<span class="countdown-seconds">%S</span>'
                )
            );
        }).on('finish.countdown', function(event) {
            countdown.html(countdown.data('endedtext')).attr('class', 'countdown-ended');
        });
    });
});
