// User Interface:

const sources = game.src();

function gameInfo(n, element) {
    let place1;
    let place2;
    if (n % 2 === 1) {
        src = sources.path1;
        color = '#def1ff';
        place1 = element.attr('id');

    } else if (n % 2 === 0) {
        src = sources.path2;
        color = '#e8c0bd';
        place2 = element.attr('id');
    }

    return { src, color, place1, place2 };
}

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

            $('<img id="marker1" class="sign inline">').appendTo('.info1');
            $('#marker1').attr('src', sources.path1);

            $('<img id="marker2" class="sign inline">').appendTo('.info2')
            $('#marker2').attr('src', sources.path2);
        }
    });

    // play game

    let click = 1;
    let position1 = [];
    let position2 = [];
    let winner1;
    let winner2;

    $('.cell').on('click', function () {
        if (winner1 || winner2) {
            return;
        }

        let $this = $(this);
        const result = gameInfo(click, $this);

        $this.css('background-color', result.color);
        $('<img>').attr('src', result.src).appendTo($this);

        if (result.place1) {
            position1.push(result.place1);
        }
        if (result.place2) {
            position2.push(result.place2);
        }

        click++;

        if (click >= 5) {

            for (let i = 0; i < game.options.length; i++) {
                winner1 = true;
                winner2 = true;
                const option = game.options[i];
                for (let j = 0; j < option.length; j++) {
                    if (position1.indexOf(option[j]) < 0) {
                        winner1 = false;
                    }
                    if (position2.indexOf(option[j]) < 0) {
                        winner2 = false;
                    }
                    if (!winner1 && !winner2) {
                        break;
                    }
                }
                if (winner1 || winner2) {
                    break;
                }
            }

            if (winner1) {
                $('#p1').val('1');
            }
            if (winner2) {
                $('#p2').val('1');
            }
        };


    });

















































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
