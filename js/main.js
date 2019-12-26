activateBtn();

//---- Start Chat Interface

$('#contBtn').on('click', function() {
    $(this).removeClass('activeBtn');
    $('.intro_cont').hide(500);
    $('.name').text("Hello 👋 " + $("#nameInput").val() + ", I am LokaBot. I can take you anywhere.");
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
