activateBtn();

//---- Start Chat Interface



$('#contBtn').on('click', function() {
    $(this).removeClass('activeBtn');
    $('.intro_cont').hide(500);
    firstMessage();
    startChatBot();
});

//---- Play Sound on Button Click

const clickSound = new Audio('audio/Button-click-sound.mp3');

startSound();

function startSound() {
    $('.click_sound').click(e => clickSound.play());
}

function startChatBot() {
    $('body').addClass('beginChat');
}

function firstMessage() {
    var name = $.trim($("#nameInput").val());

    $('.messages').append('<li class="bot"> Hello 👋 ' + name + '. Welcome to Church of Christ, ijeshatedo, Surulere Lagos 😊.</li>').delay(1000).queue(function (next) {
        $(this).append('<li class="bot">Should we get started?</li> <br />');
        next();
    });
}

function activateBtn() {
    $(function () {
        $('#nameInput').keyup(function () {
            if ($(this).val() == '') {
                $('#contBtn').removeClass('activeBtn');
            }
            else {
                $('#contBtn').addClass('activeBtn');
            }
        });
    });
}


$(function () {
    $('#messageBox').keyup(function () {
        if ($(this).val() == '') {
            $('#sendBtn').removeClass('activeSend');
        } else {
            $('#sendBtn').addClass('activeSend');
        }
    });
});


$(document).ready(function () {
    var chat_screen = $(".messages");
    var text_bar = $("#messageBox")
    $('#sendBtn').click(function () {
        chat_screen.append('<li class="user">' + text_bar.val() + '</li>');
        text_bar.val('');
    });
});
