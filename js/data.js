// Logic:
const game = {
    user1: '',
    user2: '',
    markers: ['X', 'O'],
    randomNum: function () {
        return Math.floor(Math.random() * this.markers.length);
    },
    src: function () {
        let path1;
        let path2;
        if (this.randomNum() === 0) {
            path1 = './images/o.png';
            path2 = './images/x.png';
        } else {
            path1 = './images/x.png';
            path2 = './images/o.png';
        }

        return { path1, path2 };
    },
    gameBoard: ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8', 'box9'],
    // even: function (n) {
    //     if (n % 2 === 0) {
    //         return true;
    //     }
    // },
    score1: 0,
    score2: 0
};