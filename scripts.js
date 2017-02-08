/**
 * Created by h205p3 on 2/7/17.
 */
$(document).ready(function() {
    $("button").click(function() {
        $.ajax({
            url: "https://launchlibrary.net/1.1/launch/next/1",
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            success: function (result) {
                var launch = result.launches[1];
                document.getElementById("output").innerHTML = launch
            },
            error: function () {
                document.getElementById("output").innerHTML = "Failed!"
            }
        })
    })
});

