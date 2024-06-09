$(document).ready(function() {
    let currentIndex = 0;
    const items = $('.carousel-item');
    const itemCount = items.length;

    function showItem(index) {
        items.removeClass('active').css('transform', `translateX(${-index * 100}%)`);
        items.eq(index).addClass('active');
    }

    $('.carousel-control-next').click(function() {
        currentIndex = (currentIndex + 1) % itemCount;
        showItem(currentIndex);
    });

    $('.carousel-control-prev').click(function() {
        currentIndex = (currentIndex - 1 + itemCount) % itemCount;
        showItem(currentIndex);
    });

    setInterval(function() {
        currentIndex = (currentIndex + 1) % itemCount;
        showItem(currentIndex);
    }, 3000);
});
