//збільшення розміру елемента при наведенні
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

//забезпечення розгортання та згортання групи елементів
const groups = document.querySelectorAll('.group');
groups.forEach(group => {
    group.addEventListener('click', () => {
        group.classList.toggle('open');

        groups.forEach(otherGroup => {
            if (otherGroup !== group) {
                otherGroup.classList.remove('open');
            }
        });
    });
});

const dropdownToggle = document.getElementById('dropdown-toggle');
const dropdownList = document.getElementById('dropdown-list');
const arrowIcon = document.querySelector('.arrow');

dropdownToggle.addEventListener('click', function() {
    dropdownList.classList.toggle('show');

    arrowIcon.classList.toggle('rotate');
});

//перемикання стану іконки "лайк"
function toggleLike() {
    const likeIcon = document.getElementById("like-icon");
    const likedSrc = "img/main_buttons/liked-button.svg";
    const unlikedSrc = "img/main_buttons/like-button.svg";

    console.log("Поточний src:", likeIcon.src); 
    if (likeIcon.src.includes("like-button.svg")) {
        likeIcon.src = likedSrc;
        console.log("Змінено на liked-src");
    } else {
        likeIcon.src = unlikedSrc;
        console.log("Змінено на unliked-src");
    }
}

