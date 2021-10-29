let beat = 4;
let currentTempo = 80;
let newTempo = 0;
let kick = [];
let snare = [];
let closeHihat = [];
let openHihat = [];
let tom1 = [];
let tom2 = [];
let tom3 = [];
let crash = [];
let kickTime = [];
let snareTime = [];
let closeHihatTime = [];
let openHihatTime = [];
let tom1Time = [];
let tom2Time = [];
let tom3Time = [];
let crashTime = [];
let fixedKickTime = [];
let fixedSnareTime = [];
let fixedCloseHihatTime = [];
let fixedOpenHihatTime = [];
let fixedTom1Time = [];
let fixedTom2Time = [];
let fixedTom3Time = [];
let fixedCrashTime = [];
let kickCount = 1;
let snareCount = 1;
let closeHihatCount = 1;
let openHihatCount = 1;
let tom1Count = 1;
let tom2Count = 1;
let tom3Count = 1;
let crashCount = 1;
let start = '';
const inst = [kick, snare, closeHihat, openHihat, tom1, tom2, tom3, crash];
const instCount = [kickCount, snareCount, closeHihatCount, openHihatCount, tom1Count, tom2Count, tom3Count, crashCount];
const instTime = [kickTime, snareTime, closeHihatTime, openHihatTime, tom1Time, tom2Time, tom3Time, crashTime];
const fixedInstTime = [fixedKickTime, fixedSnareTime, fixedCloseHihatTime, fixedOpenHihatTime, fixedTom1Time, fixedTom2Time, fixedTom3Time, fixedCrashTime];
const diff = [];
const time = [];
let index = 0;
let option = '';

// ドラムパーツの画像を押したとき
$('#kick').on('click', function () {
    // キックの画像をハイライトする
    $('#kick').addClass('played');
    // キック音の再生開始位置を始点にセットする
    $('#kick-sound').get(0).currentTime = 0;
    // キック音を再生する（ループなし）
    $('#kick-sound').get(0).play();
    $('#kick-sound').get(0).loop = false;
    // キック画像ハイライト用のクラス属性を削除する
    setTimeout(function () {
        $('#kick').removeClass('played');
    }, 200);
});

$('#snare').on('click', function () {
    // キックの画像をハイライトする
    $('#snare').addClass('played');
    // キック音の再生開始位置を始点にセットする
    $('#snare-sound').get(0).currentTime = 0;
    // キック音を再生する（ループなし）
    $('#snare-sound').get(0).play();
    $('#snare-sound').get(0).loop = false;
    // キック画像ハイライト用のクラス属性を削除する
    setTimeout(function () {
        $('#snare').removeClass('played');
    }, 200);
});

$('#c-hihat').on('click', function () {
    // キックの画像をハイライトする
    $('#c-hihat').addClass('played');
    // キック音の再生開始位置を始点にセットする
    $('#c-hihat-sound').get(0).currentTime = 0;
    // キック音を再生する（ループなし）
    $('#c-hihat-sound').get(0).play();
    $('#c-hihat-sound').get(0).loop = false;
    // キック画像ハイライト用のクラス属性を削除する
    setTimeout(function () {
        $('#c-hihat').removeClass('played');
    }, 200);
});

$('#o-hihat').on('click', function () {
    // キックの画像をハイライトする
    $('#o-hihat').addClass('played');
    // キック音の再生開始位置を始点にセットする
    $('#o-hihat-sound').get(0).currentTime = 0;
    // キック音を再生する（ループなし）
    $('#o-hihat-sound').get(0).play();
    $('#o-hihat-sound').get(0).loop = false;
    // キック画像ハイライト用のクラス属性を削除する
    setTimeout(function () {
        $('#o-hihat').removeClass('played');
    }, 200);
});

$('#tom1').on('click', function () {
    // キックの画像をハイライトする
    $('#tom1').addClass('played');
    // キック音の再生開始位置を始点にセットする
    $('#tom1-sound').get(0).currentTime = 0;
    // キック音を再生する（ループなし）
    $('#tom1-sound').get(0).play();
    $('#tom1-sound').get(0).loop = false;
    // キック画像ハイライト用のクラス属性を削除する
    setTimeout(function () {
        $('#tom1').removeClass('played');
    }, 200);
});

$('#tom2').on('click', function () {
    // キックの画像をハイライトする
    $('#tom2').addClass('played');
    // キック音の再生開始位置を始点にセットする
    $('#tom2-sound').get(0).currentTime = 0;
    // キック音を再生する（ループなし）
    $('#tom2-sound').get(0).play();
    $('#tom2-sound').get(0).loop = false;
    // キック画像ハイライト用のクラス属性を削除する
    setTimeout(function () {
        $('#tom2').removeClass('played');
    }, 200);
});

$('#tom3').on('click', function () {
    // キックの画像をハイライトする
    $('#tom3').addClass('played');
    // キック音の再生開始位置を始点にセットする
    $('#tom3-sound').get(0).currentTime = 0;
    // キック音を再生する（ループなし）
    $('#tom3-sound').get(0).play();
    $('#tom3-sound').get(0).loop = false;
    // キック画像ハイライト用のクラス属性を削除する
    setTimeout(function () {
        $('#tom3').removeClass('played');
    }, 200);
});

$('#crash').on('click', function () {
    // キックの画像をハイライトする
    $('#crash').addClass('played');
    // キック音の再生開始位置を始点にセットする
    $('#crash-sound').get(0).currentTime = 0;
    // キック音を再生する（ループなし）
    $('#crash-sound').get(0).play();
    $('#crash-sound').get(0).loop = false;
    // キック画像ハイライト用のクラス属性を削除する
    setTimeout(function () {
        $('#crash').removeClass('played');
    }, 200);
});

// 録音開始ボタンを押したとき
$('#rec-start').on('click', function () {
    // 録音開始ボタンを非表示にする
    $('#rec-start').removeClass('active');
    // 録音停止ボタンを表示する
    $('#rec-stop').addClass('active');
    console.log('start!');
    // 録音開始時のタイムスタンプを押す
    start = performance.mark('start');

    // メトロノームを鳴らす
    let metronome = setInterval(function () {
        $('#low').get(0).play();
        setTimeout(function () {
            $('#low').get(0).pause();
            $('#low').get(0).currentTime = 0;
        }, 100)
        $('#rec-stop').on('click', function () {
            clearInterval(metronome);
        });
    }, 60 / currentTempo * 1000);

    // 各ドラムパーツごとの配列の中身が空だったら録音開始のタイムスタンプを追加する
    for (let i = 0; i < inst.length; i++) {
        if (inst[i].length === 0) {
            inst[i].push(start);
            // 古い録音開始のタイムスタンプが追加されていたらそれを消して新しいタイムスタンプを追加する
        } else if (inst[i].slice(-1)[0].name === 'start') {
            inst[i].length = 0;
            inst[i].push(start);
        }
    }

    // キーボードのキーを押したとき
    $(document).on('keydown', function (e2) {
        // Kキーを押したとき
        if (e2.keyCode === 75) {
            // キックの画像をハイライトする
            $('#kick').addClass('played');
            // Kキーが押されたときのタイムスタンプを追加する
            kick.push(performance.mark('kick' + kickCount));
            // Kキーが押された時間と録音開始ボタンを押した時間の差分をとる ←重要！
            kickTime.push(kick[kickCount].startTime - kick[0].startTime);
            // キック音の再生開始位置を始点にセットする
            $('#kick-sound').get(0).currentTime = 0;
            // キック音を再生する（ループなし）
            $('#kick-sound').get(0).play();
            $('#kick-sound').get(0).loop = false;
            // キック画像ハイライト用のクラス属性を削除する
            setTimeout(function () {
                $('#kick').removeClass('played');
            }, 200);
            // Kキーの入力回数をカウントする
            kickCount++;
            // 以下キーの種類が違うだけで処理は同じ
        } else if (e2.keyCode === 83) {
            $('#snare').addClass('played');
            snare.push(performance.mark('snare' + snareCount));
            snareTime.push(snare[snareCount].startTime - snare[0].startTime);
            $('#snare-sound').get(0).currentTime = 0;
            $('#snare-sound').get(0).play();
            $('#snare-sound').get(0).loop = false;
            setTimeout(function () {
                $('#snare').removeClass('played');
            }, 200);
            snareCount++;
        } else if (e2.keyCode === 72) {
            $('#c-hihat').addClass('played');
            closeHihat.push(performance.mark('o-hihat' + closeHihatCount));
            closeHihatTime.push(closeHihat[closeHihatCount].startTime - closeHihat[0].startTime);
            $('#c-hihat-sound').get(0).currentTime = 0;
            $('#c-hihat-sound').get(0).play();
            $('#c-hihat-sound').get(0).loop = false;
            setTimeout(function () {
                $('#c-hihat').removeClass('played');
            }, 200);
            closeHihatCount++;
        } else if (e2.keyCode === 74) {
            $('#o-hihat').addClass('played');
            openHihat.push(performance.mark('o-hihat' + openHihatCount));
            openHihatTime.push(openHihat[openHihatCount].startTime - openHihat[0].startTime);
            $('#o-hihat-sound').get(0).currentTime = 0;
            $('#o-hihat-sound').get(0).play();
            $('#o-hihat-sound').get(0).loop = false;
            setTimeout(function () {
                $('#o-hihat').removeClass('played');
            }, 200);
            openHihatCount++;
        } else if (e2.keyCode === 84) {
            $('#tom1').addClass('played');
            tom1.push(performance.mark('tom1' + tom1Count));
            tom1Time.push(tom1[tom1Count].startTime - tom1[0].startTime);
            $('#tom1-sound').get(0).currentTime = 0;
            $('#tom1-sound').get(0).play();
            $('#tom1-sound').get(0).loop = false;
            setTimeout(function () {
                $('#tom1').removeClass('played');
            }, 200);
            tom1Count++;
        } else if (e2.keyCode === 89) {
            $('#tom2').addClass('played');
            tom2.push(performance.mark('tom2' + tom2Count));
            tom2Time.push(tom2[tom2Count].startTime - tom2[0].startTime);
            $('#tom2-sound').get(0).currentTime = 0;
            $('#tom2-sound').get(0).play();
            $('#tom2-sound').get(0).loop = false;
            setTimeout(function () {
                $('#tom2').removeClass('played');
            }, 200);
            tom2Count++;
        } else if (e2.keyCode === 85) {
            $('#tom3').addClass('played');
            tom3.push(performance.mark('tom3' + tom3Count));
            tom3Time.push(tom3[tom3Count].startTime - tom3[0].startTime);
            $('#tom3-sound').get(0).currentTime = 0;
            $('#tom3-sound').get(0).play();
            $('#tom3-sound').get(0).loop = false;
            setTimeout(function () {
                $('#tom3').removeClass('played');
            }, 200);
            tom3Count++;
        } else if (e2.keyCode === 67) {
            $('#crash').addClass('played');
            crash.push(performance.mark('crash' + crashCount));
            crashTime.push(crash[crashCount].startTime - crash[0].startTime);
            $('#crash-sound').get(0).currentTime = 0;
            $('#crash-sound').get(0).play();
            $('#crash-sound').get(0).loop = false;
            setTimeout(function () {
                $('#crash').removeClass('played');
            }, 200);
            crashCount++;
        }
    });

    // 録音停止ボタンを押したら録音停止ボタンを非表示にして録音開始ボタンを表示する
    $('#rec-stop').on('click', function () {
        $('#rec-stop').removeClass('active');
        $('#rec-start').addClass('active');
        return;
    });
});

// 演奏再生ボタンを押したとき
$('#play-start').on('click', function () {
    // Kキーが押された回数だけ以下の処理を繰り返す
    for (let i = 0; i < kickTime.length; i++) {
        // メトロノームが8回鳴った後のキック音を再生する
        setTimeout(function () {
            $('#kick').addClass('played');
            $('#kick-sound').get(0).currentTime = 0;
            $('#kick-sound').get(0).play();
            $('#kick-sound').get(0).loop = false;
            setTimeout(function () {
                $('#kick').removeClass('played');
            }, 200);
        }, kickTime[i] - (8 * 60 / currentTempo * 1000));
    }
    // 以下キーの種類が違うだけで処理は同じ
    for (let i = 0; i < snareTime.length; i++) {
        setTimeout(function () {
            $('#snare').addClass('played');
            $('#snare-sound').get(0).currentTime = 0;
            $('#snare-sound').get(0).play();
            $('#snare-sound').get(0).loop = false;
            setTimeout(function () {
                $('#snare').removeClass('played');
            }, 200);
        }, snareTime[i] - (8 * 60 / currentTempo * 1000));
    }
    for (let i = 0; i < closeHihatTime.length; i++) {
        setTimeout(function () {
            $('#c-hihat').addClass('played');
            $('#c-hihat-sound').get(0).currentTime = 0;
            $('#c-hihat-sound').get(0).play();
            $('#c-hihat-sound').get(0).loop = false;
            setTimeout(function () {
                $('#c-hihat').removeClass('played');
            }, 200);
        }, closeHihatTime[i] - (8 * 60 / currentTempo * 1000));
    }
    for (let i = 0; i < openHihatTime.length; i++) {
        setTimeout(function () {
            $('#o-hihat').addClass('played');
            $('#o-hihat-sound').get(0).currentTime = 0;
            $('#o-hihat-sound').get(0).play();
            $('#o-hihat-sound').get(0).loop = false;
            setTimeout(function () {
                $('#o-hihat').removeClass('played');
            }, 200);
        }, openHihatTime[i] - (8 * 60 / currentTempo * 1000));
    }
    for (let i = 0; i < tom1Time.length; i++) {
        setTimeout(function () {
            $('#tom1').addClass('played');
            $('#tom1-sound').get(0).currentTime = 0;
            $('#tom1-sound').get(0).play();
            $('#tom1-sound').get(0).loop = false;
            setTimeout(function () {
                $('#tom1').removeClass('played');
            }, 200);
        }, tom1Time[i] - (8 * 60 / currentTempo * 1000));
    }
    for (let i = 0; i < tom2Time.length; i++) {
        setTimeout(function () {
            $('#tom2').addClass('played');
            $('#tom2-sound').get(0).currentTime = 0;
            $('#tom2-sound').get(0).play();
            $('#tom2-sound').get(0).loop = false;
            setTimeout(function () {
                $('#tom2').removeClass('played');
            }, 200);
        }, tom2Time[i] - (8 * 60 / currentTempo * 1000));
    }
    for (let i = 0; i < tom3Time.length; i++) {
        setTimeout(function () {
            $('#tom3').addClass('played');
            $('#tom3-sound').get(0).currentTime = 0;
            $('#tom3-sound').get(0).play();
            $('#tom3-sound').get(0).loop = false;
            setTimeout(function () {
                $('#tom3').removeClass('played');
            }, 200);
        }, tom3Time[i] - (8 * 60 / currentTempo * 1000));
    }
    for (let i = 0; i < crashTime.length; i++) {
        setTimeout(function () {
            $('#crash').addClass('played');
            $('#crash-sound').get(0).currentTime = 0;
            $('#crash-sound').get(0).play();
            $('#crash-sound').get(0).loop = false;
            setTimeout(function () {
                $('#crash').removeClass('played');
            }, 200);
        }, crashTime[i] - (8 * 60 / currentTempo * 1000));
    }
});

// ズレを補正ボタンを押したとき
$('#fix').on('click', function () {
    // 設定したテンポに対して無音の8分音符（ズレの補正先）を作成する
    for (let i = 0; i < 100; i++) {
        time.push(i * 60 / currentTempo * 500);
    }
    // ドラムパーツの数だけ以下の処理を行う
    for (let j = 0; j < inst.length; j++) {
        // 音を鳴らした回数分だけ以下の処理を行う
        for (let k = 0; k < instTime[j].length; k++) {
            // 音を鳴らしたタイミングとズレの補正先の差分を取り、最も0に近いズレの補正先のタイムスタンプを補正版に追加する
            const closest = time.reduce((prev, curr) => {
                return (Math.abs(curr - instTime[j][k]) < Math.abs(prev - instTime[j][k]) ? curr : prev);
            });
            fixedInstTime[j].push(closest);
        }
    }
    alert('Fixing Successed!(Maybe)');
});

// 補正版を再生ボタンを押したとき（以下の処理は演奏を再生ボタン押下時と同じ）
$('#fixed-play').on('click', function () {
    for (let i = 0; i < fixedKickTime.length; i++) {
        setTimeout(function () {
            $('#kick').addClass('played');
            $('#kick-sound').get(0).currentTime = 0;
            $('#kick-sound').get(0).play();
            $('#kick-sound').get(0).loop = false;
            setTimeout(function () {
                $('#kick').removeClass('played');
            }, 200);
        }, (fixedKickTime[i] - (8 * 60 / currentTempo * 1000)) * currentTempo / newTempo);
    }
    for (let i = 0; i < fixedSnareTime.length; i++) {
        setTimeout(function () {
            $('#snare').addClass('played');
            $('#snare-sound').get(0).currentTime = 0;
            $('#snare-sound').get(0).play();
            $('#snare-sound').get(0).loop = false;
            setTimeout(function () {
                $('#snare').removeClass('played');
            }, 200);
        }, (fixedSnareTime[i] - (8 * 60 / currentTempo * 1000)) * currentTempo / newTempo);
    }
    for (let i = 0; i < fixedCloseHihatTime.length; i++) {
        setTimeout(function () {
            $('#c-hihat').addClass('played');
            $('#c-hihat-sound').get(0).currentTime = 0;
            $('#c-hihat-sound').get(0).play();
            $('#c-hihat-sound').get(0).loop = false;
            setTimeout(function () {
                $('#c-hihat').removeClass('played');
            }, 200);
        }, (fixedCloseHihatTime[i] - (8 * 60 / currentTempo * 1000)) * currentTempo / newTempo);
    }
    for (let i = 0; i < fixedOpenHihatTime.length; i++) {
        setTimeout(function () {
            $('#o-hihat').addClass('played');
            $('#o-hihat-sound').get(0).currentTime = 0;
            $('#o-hihat-sound').get(0).play();
            $('#o-hihat-sound').get(0).loop = false;
            setTimeout(function () {
                $('#o-hihat').removeClass('played');
            }, 200);
        }, (fixedOpenHihatTime[i] - (8 * 60 / currentTempo * 1000)) * currentTempo / newTempo);
    }
    for (let i = 0; i < fixedTom1Time.length; i++) {
        setTimeout(function () {
            $('#tom1').addClass('played');
            $('#tom1-sound').get(0).currentTime = 0;
            $('#tom1-sound').get(0).play();
            $('#tom1-sound').get(0).loop = false;
            setTimeout(function () {
                $('#tom1').removeClass('played');
            }, 200);
        }, (fixedTom1Time[i] - (8 * 60 / currentTempo * 1000)) * currentTempo / newTempo);
    }
    for (let i = 0; i < fixedTom2Time.length; i++) {
        setTimeout(function () {
            $('#tom2').addClass('played');
            $('#tom2-sound').get(0).currentTime = 0;
            $('#tom2-sound').get(0).play();
            $('#tom2-sound').get(0).loop = false;
            setTimeout(function () {
                $('#tom2').removeClass('played');
            }, 200);
        }, (fixedTom2Time[i] - (8 * 60 / currentTempo * 1000)) * currentTempo / newTempo);
    }
    for (let i = 0; i < fixedTom3Time.length; i++) {
        setTimeout(function () {
            $('#tom3').addClass('played');
            $('#tom3-sound').get(0).currentTime = 0;
            $('#tom3-sound').get(0).play();
            $('#tom3-sound').get(0).loop = false;
            setTimeout(function () {
                $('#tom3').removeClass('played');
            }, 200);
        }, (fixedTom3Time[i] - (8 * 60 / currentTempo * 1000)) * currentTempo / newTempo);
    }
    for (let i = 0; i < fixedCrashTime.length; i++) {
        setTimeout(function () {
            $('#crash').addClass('played');
            $('#crash-sound').get(0).currentTime = 0;
            $('#crash-sound').get(0).play();
            $('#crash-sound').get(0).loop = false;
            setTimeout(function () {
                $('#crash').removeClass('played');
            }, 200);
        }, (fixedCrashTime[i] - (8 * 60 / currentTempo * 1000)) * currentTempo / newTempo);
    }
});

// ヘルプボタンを押したとき
$('#help').on('click', function () {
    // How to Useモーダルウィンドウを表示する
    $('#modal').addClass('appear');

    // 閉じるボタンを押したとき
    $('#close').on('click', function () {
        // How to Useモーダルウィンドウを非表示にする
        $('#modal').removeClass('appear');
    });
});

// テンポのセレクトボックスの中身を作成（BPM: 80〜240）
for (let i = 60; i <= 240; i++) {
    option += `<option value=${i}>` + i + '</option>';
}
// 上で作成したものをセレクトボックスの中に入れる
$('select').html(option);

// 演奏を保存ボタンを押したとき
$('#save').on('click', function () {
    // 保存するデータ（各ドラムパーツのズレを補正したタイムスタンプ）を定義する
    const data = {
        kick: fixedKickTime,
        snare: fixedSnareTime,
        closeHihat: fixedCloseHihatTime,
        openHihat: fixedOpenHihatTime,
        tom1: fixedTom1Time,
        tom2: fixedTom2Time,
        tom3: fixedTom3Time,
        crash: fixedCrashTime,
    }
    // 保存するデータをJSONデータ化する
    const jsonData = JSON.stringify(data);
    // JSONデータ化したデータを保存する
    localStorage.setItem('drums', jsonData);
    alert('Save Successed!');
});

// テンポボタン内のSaveを押したとき
$('#tempo-save').on('click', function () {
    oldTempo = Number($('#current-tempo').text());
    currentTempo = Number($('select option:selected').text());
    newTempo = Number($('select option:selected').text());
    $('#current-tempo').html(currentTempo);
    $('#new-tempo').html(currentTempo);

    const data = {
        old: oldTempo,
        current: currentTempo,
        new: newTempo,
    };
    const jsonData = JSON.stringify(data);
    localStorage.setItem('tempo', jsonData);
    alert('Tempo Save Successed!');
});

// テンポボタン内のChangeを押したとき
$('#tempo-change').on('click', function () {
    newTempo = Number($('select option:selected').text());
    $('#new-tempo').html(newTempo);
});

// 演奏を削除ボタンを押したとき
$('#clear').on('click', function () {
    // ローカルストレージに保存したデータを削除する
    localStorage.removeItem('drums');
    fixedKickTime.length = 0;
    fixedSnareTime.length = 0;
    fixedCloseHihatTime.length = 0;
    fixedOpenHihatTime.length = 0;
    fixedTom1Time.length = 0;
    fixedTom2Time.length = 0;
    fixedTom3Time.length = 0;
    fixedCrashTime.length = 0;
    alert('Clear Successed!');
});

// すでにローカルストレージに保存した演奏データが入っていた場合
if (localStorage.getItem('drums')) {
    const jsonData = localStorage.getItem('drums');
    const data = JSON.parse(jsonData);
    // ズレ補正版タイムスタンプの配列に保存していた演奏データのタイムスタンプを追加する
    fixedKickTime = fixedKickTime.concat(data.kick);
    fixedSnareTime = fixedSnareTime.concat(data.snare);
    fixedCloseHihatTime = fixedCloseHihatTime.concat(data.closeHihat);
    fixedOpenHihatTime = fixedOpenHihatTime.concat(data.openHihat);
    fixedTom1Time = fixedTom1Time.concat(data.tom1);
    fixedTom2Time = fixedTom2Time.concat(data.tom2);
    fixedTom3Time = fixedTom3Time.concat(data.tom3);
    fixedCrashTime = fixedCrashTime.concat(data.crash);
}

// すでにローカルストレージに保存したテンポデータが入っていた場合
if (localStorage.getItem('tempo')) {
    const jsonData = localStorage.getItem('tempo');
    const data = JSON.parse(jsonData);
    currentTempo = data.old;
    newTempo = data.current;
    $('select option').attr('selected', false);
    $('select').val(currentTempo);
    $('#current-tempo').html(currentTempo);
    $('#new-tempo').html(newTempo);
}