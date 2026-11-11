
const $ = id => document.getElementById(id);

let choice = '';
let yesScale = 1;
let noClicks = 0;

// NO BUTTON: REJECTION LETTER
$('noBtn').addEventListener('click', () => {
    noClicks++;

    if (noClicks < 5) {
        noScale *= 1.25;
        $('noBtn').style.transform = `scale(${noScale})`;

        $('intro').textContent =
            'You clicked NO again?! 😭💗';

    } else if (noClicks === 5) {

        $('letterText').innerHTML = `
            Irish, I won’t lie and say it doesn’t hurt,
            because it does. But please don’t feel guilty
            for being honest with me.

            <br><br>

            I want you to know that I don’t regret meeting
            you, nor do I regret the feelings I’ve developed
            along the way. If anything, I’m grateful that
            I got to know someone as wonderful as you.

            <br><br>

            I may have hoped for a different answer, but I
            would never want you to choose me out of pity
            or pressure. You deserve to follow what your
            heart genuinely feels, even if it leads
            somewhere other than me.

            <br><br>

            And if our paths aren’t meant to meet in the
            way I once hoped, then I’ll learn to accept that.

            <br><br>

            Thank you for being someone worth writing all
            these words for. I’ll always wish you happiness,
            Irish, even if I’m not the person beside you
            when you find it.

            <br><br>

            Please take care of yourself. You deserve all
            the beautiful things life has to offer. 💗
        `;

        $('letterSignoff').textContent =
            '— SORRYYY FOR DISTURBING U ;-;';

        $('modal').classList.remove('hidden');
    }
});

// YES BUTTON
$('yesBtn').addEventListener('click', () => {
    $('ask').classList.add('hidden');
    $('yay').classList.remove('hidden');
});

// CONTINUE TO DATE PLANNER
$('continueBtn').addEventListener('click', () => {
    $('yay').classList.add('hidden');
    $('plan').classList.remove('hidden');
});

// SELECT DATE ACTIVITY
document.querySelectorAll('.option').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.option')
            .forEach(b => b.classList.remove('selected'));

        btn.classList.add('selected');
        choice = btn.dataset.choice;
    });
});

// LOCK DATE
$('lockBtn').addEventListener('click', () => {
    const d = $('date').value;

    if (!d || !choice) {
        alert('Pick a date and an activity first 💗');
        return;
    }

    const pretty = new Date(d + 'T12:00:00')
        .toLocaleDateString(undefined, {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });

    $('summary').textContent =
        `${pretty} · ${choice}. Can't wait to see you!`;

    $('plan').classList.add('hidden');
    $('done').classList.remove('hidden');
});
// YES BUTTON: ROMANTIC LOVE LETTER
vvvvvv
$('letterBtn').addEventListener('click', () => {

    $('letterText').innerHTML = `
        <strong>To my dearest Irish,</strong>

        <br><br>

        I don't think words will ever be enough to explain just how much you mean to me, but I'll try anyway.

        <br><br>

        You know, when I first met you, I never really thought I'd develop feelings for you. I didn't think much of you, nor did I expect you to become someone so special to me. But somewhere along the way, as I spent more time with you and got to know the person you truly are, I found myself slowly falling for you.

        <br><br>

        There's something about you that I can't quite put into words. You're unlike anyone I've ever met. You're like a diamond buried deep beneath the earth, something so rare and extraordinary that finding it takes patience. A diamond that takes millions of years to form, shaped by time, pressure, and everything it has endured. And somehow, that's how I see you. Someone worth taking the time to discover, someone whose beauty goes far beyond what the eyes can see.

        <br><br>

        If there's one thing I'd want you to know, it's that knowing you makes me want to become a better person. Not because you expect me to be perfect, but because you deserve a love that is patient, gentle, and sincere.

        <br><br>

        I'd choose my words carefully, even on days when my emotions get the best of me. I'd learn to be calmer, to listen more, and to understand before I speak. I'd rather swallow my pride than let it become the reason you go to sleep with a heavy heart.

        <br><br>

        I'd give you my time, even on the busiest days. I'd listen to your endless stories, remember the little things you tell me, and find joy in the simplest moments we share.

        <br><br>

        I want to know the little things that make you happy, the things that keep you awake at night, and even the thoughts you struggle to put into words.

        <br><br>

        I don't promise that I'll always know what to do, nor that I'll never make mistakes. But I promise that I'll always try to understand, communicate, and grow.

        <br><br>

        And if the world ever becomes too overwhelming, I hope my presence feels like a quiet place where you can finally breathe.

        <br><br>

        Irish, I want to love you in the ordinary moments just as much as in the extraordinary ones. In the laughter, the silence, the unexpected conversations, and even the days when neither of us has anything interesting to say.

        <br><br>

        Because to me, love isn't simply about grand gestures or beautiful promises. It's about choosing someone through the little things, over and over again.

        <br><br>

        I don't want to be someone who simply tells you that you're loved. I want to be someone who makes you feel it, even without saying a word.

        <br><br>

        So, if you ever wonder what I'd do for you, my answer will remain the same:

        <br><br>

        I'd choose kindness. I'd choose patience. I'd choose understanding.

        <br><br>

        And, if you'd let me, Irish, <strong>I'd choose you.</strong>

        <br><br>

        Not just for the person you are today, but for every version of yourself I'll have the privilege of getting to know.

        <br><br>

        <strong>With all the affection my heart could hold.</strong>
    `;

    $('letterSignoff').textContent = '';

    $('modal').classList.remove('hidden');
});


// CLOSE LETTER
$('closeModal').addEventListener('click', () => {
    $('modal').classList.add('hidden');
});

$('modal').addEventListener('click', e => {
    if (e.target === $('modal')) {
        $('modal').classList.add('hidden');
    }
    
});