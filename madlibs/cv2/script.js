(function(){
    'use strict';
    console.log('reading js');

    const madlib = document.querySelector('#madlib');
    const form = document.querySelector('form');
    const madlibOutput = document.querySelector('#madlib-output');
    const closeBtn = document.querySelector('#close');
    const errorMessage = document.querySelector('#error');

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const adjective = document.querySelector('#adjective').value;
        const body = document.querySelector('#body').value;
        const emotion = document.querySelector('#emotion').value;
        const place = document.querySelector('#place').value;
        const person = document.querySelector('#person').value;
        const animal = document.querySelector('#animal').value;
        const silly = document.querySelector('#silly').value;
        const verb = document.querySelector('#verb').value;
        const noun = document.querySelector('#noun').value;
        const adverb = document.querySelector('#adverb').value;

        let myText;

        if (adjective == '') {
            myText = "Hold the pickles! You need an adjective here.";
            document.querySelector('#adjective').focus();
            errorMessage.innerHTML = myText;
        } else if (body == '') {
            myText = "Hold the pickles! You need a part of the body here.";
            document.querySelector('#body').focus();
            errorMessage.innerHTML = myText;
        } else if (emotion == '') {
            myText = "Hold the pickles! You need an emotion here.";
            document.querySelector('#emotion').focus();
            errorMessage.innerHTML = myText;
        } else if (place == '') {
            myText = "Hold the pickles! You need a place here.";
            document.querySelector('#place').focus();
            errorMessage.innerHTML = myText;
        } else if (person == '') {
            myText = "Hold the pickles! You need a person here.";
            document.querySelector('#person').focus();
            errorMessage.innerHTML = myText;
        } else if (animal == '') {
            myText = "Hold the pickles! You need an animal here.";
            document.querySelector('#animal').focus();
            errorMessage.innerHTML = myText;
        } else if (silly == '') {
            myText = "Hold the pickles! You need a silly word here.";
            document.querySelector('#silly').focus();
            errorMessage.innerHTML = myText;
        } else if (verb == '') {
            myText = 'Hold the pickles! You need a verb ending in “-ing” here.';
            document.querySelector('#verb').focus();
            errorMessage.innerHTML = myText;
        } else if (noun == '') {
            myText = "Hold the pickles! You need a noun here.";
            document.querySelector('#noun').focus();
            errorMessage.innerHTML = myText;
        } else if (adverb == '') {
            myText = "Hold the pickles! You need an adverb here.";
            document.querySelector('#adverb').focus();
            errorMessage.innerHTML = myText;
        } else {
            errorMessage.innerHTML = '';
            myText = `<h3>Your Bikini Bottom Adventure!</h3>
                <p>SpongeBob felt very <span>${adjective}</span> as he stepped into the boatmobile for his very important driver’s test. His <span>${body}</span> wouldn’t stop sweating as he imagined disappointing Mrs. Puff yet again. Once the engine started, all he could feel was <span>${emotion}</span>.</p>
                <p>All he had to do was survive the drive to <span>${place}</span>, and then the nightmare would be over. Along the way, he passed <span>${person}</span>, who stared at him in complete disbelief. Suddenly, SpongeBob slammed on the brakes when a <span>${animal}</span> ran into the road. Miraculously, he swerved just in time and kept going.</p>
                <p>Shockingly, things were going well, and SpongeBob felt <span>${silly}</span> about the whole situation. As the test came to an end, only one thought echoed in his mind, that he would be <span>${verb}</span> no matter what happened. Mrs. Puff finally told him to pull over at the <span>${noun}</span>. SpongeBob’s driving test was officially over, and somehow, it had gone <span>${adverb}</span>.</p>`;

            document.querySelector('#adjective').value = '';
            document.querySelector('#body').value = '';
            document.querySelector('#emotion').value = '';
            document.querySelector('#place').value = '';
            document.querySelector('#person').value = '';
            document.querySelector('#animal').value = '';
            document.querySelector('#silly').value = '';
            document.querySelector('#verb').value = '';
            document.querySelector('#noun').value = '';
            document.querySelector('#adverb').value = '';

            madlib.innerHTML = myText;

            madlibOutput.style.display = "block";
        }
    });

    closeBtn.addEventListener('click', function(event){
        event.preventDefault();
        madlibOutput.style.display = "none";
    });

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape'){
            madlibOutput.style.display = "none";
        }
    });
})();