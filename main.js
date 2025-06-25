// 変数宣言
const hamburgerMenu = document.querySelector('.hamburger-menu')
const hamburgerNavigation = document.getElementById('hamburger-navigation')
const hamburgerMenuList = document.querySelector('.hamburger-menu-list')

//　ハンバーガーメニューをクリックしたときの処理
hamburgerMenu.addEventListener('click', function() {
    hamburgerMenu.classList.toggle('active')
    hamburgerNavigation.classList.toggle('active')
});


