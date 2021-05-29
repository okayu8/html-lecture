console.log('test');
var element = document.getElementsByClassName('js-test');
var elementResultText = document.getElementsByClassName('js-result');
var myName = 'まだ選択してないよ。';

function clickedButton () {
    console.log('clicked');
    console.log(element[0].innerText)
    if(element[0].innerText === 'コアラ') {
        element[0].innerText = 'ラッコ';
    }
    else {
        element[0].innerText = 'コアラ';
    }
}

function selectSatou () {
    myName = '佐藤'
}

function selectTanaka () {
    myName = '田中'
}

function displayResult () {
    console.log('Selected' + myName)
    elementResultText[0].innerText = '私の名前は' + myName + 'でございマッスル！'
}
