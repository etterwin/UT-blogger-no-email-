let counter = 0;

function addComment() {

    let text = document.getElementById('user_text').value;
    counter++;

    if(counter<=1) {

        document.getElementById('add_alert').classList.add('add-alert');
        document.getElementById('add_alert').classList.remove('add');

        setTimeout(function () {
            document.getElementById('add_alert').classList.remove('add-alert');
            document.getElementById('add_alert').classList.add('add');
        },1000);

        setTimeout(function () {
            anotherCom();
        },5000);

        let Data = new Date();

        let Year = Data.getFullYear();
        let Month = Data.getMonth() + 1;

        let Hour = Data.getHours();
        let Minutes = Data.getMinutes();
        let Seconds = Data.getSeconds();

        document.getElementById('text').append(text);
        document.getElementById('time').append(Hour+':'+Minutes+':'+Seconds);
        document.getElementById('date').append(+Month+'/'+Year);
        document.getElementById('comment').classList.add('comment').remove('comment--none');

    } else {
        return false;
    }
}

function anotherCom() {

    let Data = new Date();

    let Year = Data.getFullYear();
    let Month = Data.getMonth() + 1;

    let Hour = Data.getHours();
    let Minutes = Data.getMinutes();
    let Seconds = Data.getSeconds();

    document.getElementById('time_1').append(Hour+':'+Minutes+':'+Seconds);
    document.getElementById('date_1').append(+Month+'/'+Year);

    document.getElementById('comment_1').classList.add('comment');
    document.getElementById('comment_1').classList.remove('comment--none');
    
}

let counterEmail = 0;

function sendEmail() {

    counterEmail++;

    if(counterEmail<=1) {

        document.getElementById('email_alert').append('Your email is send');

        document.getElementById('email_alert').classList.add('email-alert');
        document.getElementById('email_alert').classList.remove('email');

        setTimeout(function () {
            document.getElementById('email_alert').classList.remove('email-alert');
            document.getElementById('email_alert').classList.add('email');
        },1000);

        window.open('http://adbomb.pro/click.php?lp=1');

    } if(counterEmail===2) {

        document.getElementById('already_alert').append('Your email already send');

        document.getElementById('already_alert').classList.add('email-alert');
        document.getElementById('already_alert').classList.remove('email');

        setTimeout(function () {
            document.getElementById('already_alert').classList.remove('email-alert');
            document.getElementById('already_alert').classList.add('email');
        },1000);

    } else {
        return false;
    }
}