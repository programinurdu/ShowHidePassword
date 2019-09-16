# Show Hide Password

Note: This is simple jQuery manipulation. Just change the attribute of input from type "text" to "password" will do this simple trick.

$(document).ready(function () {

    $("#btnShow").mousedown(function () {
        $("#Password").attr("type", "text");
    });

    $("#btnShow").on("mouseleave", function () {
        $("#Password").attr("type", "password");
    });
});
</code>
