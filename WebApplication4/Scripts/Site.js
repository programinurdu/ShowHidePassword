$(document).ready(function () {
    $("#btnShow").mousedown(function () {
        $("#Password").attr("type", "text");
    });

    $("#btnShow").on("mouseleave", function () {
        $("#Password").attr("type", "password");
    });
});