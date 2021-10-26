const number = 3;
let pCount = 0;
let tempo = 128;
let beat = 4;
const kick = [];
const kickTime = [];
let kickCount = 0;
const snare = [];
const snareTime = [];
let snareCount = 0;
const hihat = [];
const hihatTime = [];
let hihatCount = 0;
let start = [];
let detach = '';
let metronome = '';

$(document).on('keydown', function (e) {

    switch (e.keyCode) {
        case 13:
            console.log('start!');
            start = performance.mark('start');
            break;
        case 66:
            kick.push(start);
            kick.push(performance.mark('kick' + kickCount));
            console.log(kick);
            kickTime.push(kick[kickCount + 1].startTime - kick[kickCount].startTime);
            $('#kick').get(0).play();
            setTimeout(function () {
                $('#kick').get(0).pause();
                $('#kick').get(0).currentTime = 0;
            }, 100);
            kickCount++;
            break;
        case 83:
            snare.push(start);
            snare.push(performance.mark('snare' + snareCount));
            console.log(snare);
            snareTime.push(snare[snareCount + 1].startTime - snare[snareCount].startTime);
            $('#snare').get(0).play();
            setTimeout(function () {
                $('#snare').get(0).pause();
                $('#snare').get(0).currentTime = 0;
            }, 100);
            snareCount++;
            break;
        case 72:
            hihat.push(start);
            hihat.push(performance.mark('hihat' + hihatCount));
            console.log(hihat);
            hihatTime.push(hihat[hihatCount + 1].startTime - hihat[hihatCount].startTime);
            $('#hihat').get(0).play();
            setTimeout(function () {
                $('#hihat').get(0).pause();
                $('#hihat').get(0).currentTime = 0;
            }, 100);
            hihatCount++;
            break;
    }
});

$('#play').on('click', function () {
    for (let i = 0; i < kick.length; i++) {
        setTimeout(function () {
            $('#kick').get(0).play();
            setTimeout(function () {
                $('#kick').get(0).pause();
                $('#kick').get(0).currentTime = 0;
            }, 100);
        }, kickTime[i]);
        setTimeout(function () {
            $('#snare').get(0).play();
            setTimeout(function () {
                $('#snare').get(0).pause();
                $('#snare').get(0).currentTime = 0;
            }, 100);
        }, snareTime[i]);
        setTimeout(function () {
            $('#hihat').get(0).play();
            setTimeout(function () {
                $('#hihat').get(0).pause();
                $('#hihat').get(0).currentTime = 0;
            }, 100);
        }, hihatTime[i]);
    }
});

$('#start').on('click', function () {
    let metronome = setInterval(function () {
        $('#low').get(0).volume = 1;
        $('#low').get(0).play();
        setTimeout(function () {
            $('#low').get(0).pause();
            $('#low').get(0).currentTime = 0;
        }, 100)
        $('#stop').on('click', function () {
            clearInterval(metronome);
        });
    }, 60 / tempo * 1000);
});