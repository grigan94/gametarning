'use strict';
$(document).ready(function() {
    console.log('ready');

    $('#txtNickName').focus();

    $('#btnSend').on('click', function(e) {
        console.log('click');

        let nickName = $('#txtNickName');

        e.stopPropagation();

        if(nickName.val().length < 2) {

            e.preventDefault();
            nickName.focus();
            $('p').text('Ange nickname!');

        } 

    });

});