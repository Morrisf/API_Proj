/**
 * Created by h205p3 on 2/7/17.
 */
$(document).ready(function() {
    $("#search").click(function() {
        $("#output").empty();
        $("#display").empty();
        $.ajax({
            url: "https://launchlibrary.net/1.1/launch/next/"+document.getElementById("numlaunches").value,
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            success: function (result) {

                output(result)
            },
            error: function () {
                document.getElementById("output").innerHTML = "Failed!"
            }
        })
    })
});

function output(result){
    for (var i = 0; i < document.getElementById("numlaunches").value; i++) {
        var button = document.createElement("button");
        button.innerHTML = result.launches[i].name;
        button.id = "button"+i;
        document.getElementById("output").appendChild(button);
        //button.onclick = function(){display(button.id, result)}
    }
}

//separate onclick iteration, overwritten by each iteration^^?

function display(id, result){
    var realID = id.substring(6, id.length);

    $("#display").empty();
    var highResult = result.launches[realID].rocket.name;
    var nameArr = [];
    var lowResult = highResult.toLowerCase();


    for (var i = 0; i < lowResult.length; i++){
         nameArr.push(lowResult[i])
    }

    if (nameArr[0] === ("a" || "e" || "i" || "o" || "u" || "y")) {
        document.getElementById("display").innerHTML = result.launches[realID].missions[0].name + " is launching on an " + result.launches[realID].rocket.name + " rocket. It will launch between " + result.launches[realID].windowstart + " and " + result.launches[realID].windowend + ". " + result.launches[realID].missions[0].description

    }
    else{
        document.getElementById("display").innerHTML = result.launches[realID].missions[0].name + " is launching on a " + result.launches[realID].rocket.name + " rocket. It will launch between " + result.launches[realID].windowstart + " and " + result.launches[realID].windowend + ". " + result.launches[realID].missions[0].description
    }
}









