(function(){
    'use strict';
    console.log('reading js');

    // Page and navigation elements
    const cover = document.querySelector('#cover');
    const spread1 = document.querySelector('#spread1');
    const spread2 = document.querySelector('#spread2');
    const spread3 = document.querySelector('#spread3');
    const start = document.querySelector('#start');
    const close = document.querySelector('#close');
    const nav = document.querySelector('nav');
    const nextBtn = document.querySelector('#next');
    const prevBtn = document.querySelector('#previous');
    const pageCounter = document.querySelector('#page-counter');

    // Track which spread is currently showing
    let currentPage = 1;

    // Open scrapbook - hide cover and show first spread
    start.addEventListener('click', function(event){
        event.preventDefault();

        cover.classList.remove('showing');
        cover.classList.add('hidden');

        spread1.classList.remove('hidden');
        spread1.classList.add('showing');

        nav.classList.remove('hidden');
        close.classList.remove('hidden');
    });

    // Close scrapbook - hide all spreads and go back to cover
    close.addEventListener('click', function(event){
        event.preventDefault();

        spread1.classList.remove('showing');
        spread1.classList.add('hidden');
        spread2.classList.remove('showing');
        spread2.classList.add('hidden');
        spread3.classList.remove('showing');
        spread3.classList.add('hidden');

        cover.classList.remove('hidden');
        cover.classList.add('showing');

        nav.classList.add('hidden');
        close.classList.add('hidden');

        currentPage = 1;
        pageCounter.textContent = 'Page 1 of 3';
    });

    // Next button - move forward through the spreads
    nextBtn.addEventListener('click', function(){
        if(currentPage === 1){
            spread1.classList.remove('showing');
            spread1.classList.add('hidden');
            spread2.classList.remove('hidden');
            spread2.classList.add('showing');
            currentPage = 2;

        } else if(currentPage === 2){
            spread2.classList.remove('showing');
            spread2.classList.add('hidden');
            spread3.classList.remove('hidden');
            spread3.classList.add('showing');
            currentPage = 3;

        } else if(currentPage === 3){
            spread3.classList.remove('showing');
            spread3.classList.add('hidden');
            spread1.classList.remove('hidden');
            spread1.classList.add('showing');
            currentPage = 1;
        }

        pageCounter.textContent = `Page ${currentPage} of 3`;
    });

    // Previous button - move backward through the spreads
    prevBtn.addEventListener('click', function(){
        if(currentPage === 1){
            spread1.classList.remove('showing');
            spread1.classList.add('hidden');
            spread3.classList.remove('hidden');
            spread3.classList.add('showing');
            currentPage = 3;

        } else if(currentPage === 2){
            spread2.classList.remove('showing');
            spread2.classList.add('hidden');
            spread1.classList.remove('hidden');
            spread1.classList.add('showing');
            currentPage = 1;

        } else if(currentPage === 3){
            spread3.classList.remove('showing');
            spread3.classList.add('hidden');
            spread2.classList.remove('hidden');
            spread2.classList.add('showing');
            currentPage = 2;
        }

        pageCounter.textContent = `Page ${currentPage} of 3`;
    });
})();