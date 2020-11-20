$(document).ready(function(){

    let email = [];
    for (var i = 0; i < 10; i++) {
        $.ajax({
            url:'https://flynn.boolean.careers/exercises/api/random/mail',
            method: "GET",
            success: function(data){
                email.push(data.response);

                if (email.length == 10) {

                    for (var i = 0; i < email.length; i++) {
                        $('#email').append(`<li>${email[i]}</li>`);
                    }
                }
            },
            error: function(){
                alert("Qualcosa è andato storto");
            }
        });
    }
});
