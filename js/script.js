$(document).ready(function() {
    $("#p").click(function(){
    $("#tit1").hide();
    $("#tit2").hide();
    $("#tit3").hide();
    $("#des").hide();
    $("#dev").hide();
    $("#produ").hide();
});
});
$(document).ready(function() {
    $('#design').click(function() {
        $('img#icon1').slideToggle();
        $('label#icon1').slideToggle();
        $('h5#tit1').slideToggle();
        $('p#des').slideToggle();
    });
});
$(document).ready(function() {
    $('#dev').click(function() {
        $('img#icon2').toggle();
        $('label#icon2').toggle();
        $('h5#tit2').toggle();
        $('p#devl').toggle();
    });
});
$(document).ready(function() {
    $('#prod').click(function() {
        $('img#icon3').toggle();
        $('label#icon3').toggle();
        $('h5#tit3').toggle();
        $('p#produ').toggle();
    });
});
$(document).ready(function() {
    $('#contact').submit(function(event) {
        var myName = $('#name').val();
        var myEmail = $('#email').val();
        var comment = $('#textarea').val();
        if (myName === '' || myEmail === '' || comment === '') {
            alert('Please fill in the required data');
        } else {
            alert(myName + ' ,we have received your message.Thank you for reaching out to us.');
        }
        event.preventDefault();
        $('#name').val('');
        $('#email').val('');
        $('#textarea').val('');
    });
});
$(document).ready(function() {
    $('#jwork4').mouseover(function() {
        $('#work4').show();
    });
    $('#jwork4').mouseleave(function() {
        $('#work4').hide();
    });
    $('#jwork3').mouseover(function() {
        $('#work3').show();
    });
    $('#jwork3').mouseleave(function() {
        $('#work3').hide();
    });
    $('#jwork2').mouseover(function() {
        $('#work2').show();
    });
    $('#jwork2').mouseleave(function() {
        $('#work2').hide();
    });
    $('#jwork1').mouseover(function() {
        $('#work1').show();
    });
    $('#jwork1').mouseleave(function() {
        $('#work1').hide();
    });
    $('#jwork5').mouseover(function() {
        $('#work5').show();
    });
    $('#jwork5').mouseleave(function() {
        $('#work5').hide();
    });
    $('#jwork6').mouseover(function() {
        $('#work6').show();
    });
    $('#jwork6').mouseleave(function() {
        $('#work6').hide();
    });
    $('#jwork7').mouseover(function() {
        $('#work7').show();
    });
    $('#jwork7').mouseleave(function() {
        $('#work7').hide();
    });
    $('#jwork8').mouseover(function() {
        $('#work8').show();
    });
    $('#jwork8').mouseleave(function() {
        $('#work8').hide();
    });
});