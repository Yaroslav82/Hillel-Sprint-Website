// burger menu
const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav');
const btnBox = document.querySelector('.btn-box');

burgerMenu.addEventListener('click', () => {
    nav.classList.toggle('show-nav');
    btnBox.classList.toggle('show-btn');
});



// discover cards
const buttons = document.querySelectorAll('.discover__button');
const cardsBlocks = document.querySelectorAll('.discover__cards');

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        buttons.forEach(button => {
            button.classList.remove('active');
        });

        button.classList.add('active');

        const blockType = button.dataset.for;

        cardsBlocks.forEach(block => {
            const type = block.dataset.tab;
            if (type == blockType) {
                block.classList.add('active');
            } else {
                block.classList.remove('active');
            }
        })
    });
});



// courses dropdown
function dropdown(moduleName) {
    const dropdownLink = document.querySelector('.'+ moduleName +'__dropdown-link');
    const dropdownMenu = document.querySelector('.'+ moduleName +'__dropdown-menu');
    const arrowImg = document.querySelector('.'+ moduleName +'-arrow');

    dropdownLink.addEventListener('click', () => {
        arrowImg.classList.toggle('arrow-up');
        if (dropdownMenu.classList.contains('hidden')) {
            dropdownMenu.classList.remove('hidden');
        } else {
            dropdownMenu.classList.add('dropdown-fading');
            setTimeout(() => {
                dropdownMenu.classList.remove('dropdown-fading');
                dropdownMenu.classList.add('hidden');
            }, 400);
        }
    });
}

dropdown('courses');
dropdown('language');