// User Interface:
$(document).ready(() => {

    // start button
    $('#start').on('click', () => {
        $('a').attr('href', '#name');
    });

    // GO button
    $('#go').on('click', () => {
        $('a').attr('href', '#game');

        const name1 = $('#user1-name').val();
        const name2 = $('#user2-name').val();

        if (name1 && name2) {

            $('#name1').attr('value', name1);
            $('#name2').attr('value', name2);

            const sources = game.src();

            $('<img id="marker1" class="sign inline">').appendTo('.info1');
            $('#marker1').attr('src', sources.path1);

            $('<img id="marker2" class="sign inline">').appendTo('.info2')
            $('#marker2').attr('src', sources.path2);
        }
    });

    // play game
    // $('.cell').on('click', () => {
    //     let position;
    //     let i = 1;
    //     if (i % 2 === 0) {
    //         $('img').attr('src', sources.path2);

    //     } else {
    //         $('img').attr('src', sources.path1);
    //     }
    //     i++;

    //     $('img').appendTo('.cell');
    // });











    // restart button
    $('#restart').on('click', () => {
        if ($('#p1').val() && $('#p2').val()) {
            $('#p1').attr('value', 0);
            $('#p2').attr('value', 0);
        }
    });

    // finish button 
    $('#finish').on('click', () => {
        $('a').attr('href', '#home');

        $('#name #user1-name').val() = '';
        $('#name #user2-name').val() = '';
    });

});
