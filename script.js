/**
 * Created by tommy on 2016.08.21..
 */
$(document).ready(function () {

    $("#midcontent").load("welcome.html");

    $("#li-welcome").click(function () {
        $("#midcontent").load("welcome.html");
        $(".lis").removeClass("active");
        $("#li-welcome").addClass("active");
    });
    $("#li-projects").click(function () {
        $("#midcontent").load("projects.html");
        $(".lis").removeClass("active");
        $("#li-projects").addClass("active");
    });
    $("#li-contacts").click(function () {
        $("#midcontent").load("contacts.html");
        $(".lis").removeClass("active");
        $("#li-contacts").addClass("active");
    });
});