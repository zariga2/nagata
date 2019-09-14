$(function() {
    $("#sampleAffix").affix({
        offset: {
            top: function() {
                return (this.top = $("#pageHeader").outerHeight(true));
            },
            bottom: function() {
                return (this.bottom = $("#pageFooter").outerHeight(true) + 10);
            }
        }
    });

    $(".linkInThePage").click(function() {
        var hrefValue = $(this).attr("href");
        $(hrefValue).animatescroll();
    });
});
