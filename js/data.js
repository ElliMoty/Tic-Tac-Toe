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
    options: [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9'], ['1', '5', '9'], ['3', '5', '7']]
};