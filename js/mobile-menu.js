const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuNutrition = document.querySelector('.mobile-menu-nutrition');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
const menuBtnClose1 = document.querySelector('.menu-btn-close1');
const menuBtnClose2 = document.querySelector('.menu-btn-close2');
const menuBtnClose3 = document.querySelector('.menu-btn-close3');
const menuBtnClose4 = document.querySelector('.menu-btn-close4');

const menuBtnOpenNutrition = document.querySelector('.menu-btn-open-nutrition');
const menuBtnCloseNutrition = document.querySelector(
  '.menu-btn-close-nutrition',
);
const menuBtnClose1Nutrition = document.querySelector(
  '.menu-btn-close1-nutrition',
);
const menuBtnClose2Nutrition = document.querySelector(
  '.menu-btn-close2-nutrition',
);
const menuBtnClose3Nutrition = document.querySelector(
  '.menu-btn-close3-nutrition',
);
const menuBtnClose4Nutrition = document.querySelector(
  '.menu-btn-close4-nutrition',
);

const toggleMenu = () => mobileMenu.classList.toggle('is-open');
const toggleMenuNutrition = () =>
  mobileMenuNutrition.classList.toggle('is-open');
const disableScroll = () =>
  document.body.classList.toggle('is-scroll-disabled');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);
menuBtnClose1.addEventListener('click', toggleMenu);
menuBtnClose2.addEventListener('click', toggleMenu);
menuBtnClose3.addEventListener('click', toggleMenu);
menuBtnClose4.addEventListener('click', toggleMenu);

menuBtnOpen.addEventListener('click', disableScroll);
menuBtnClose.addEventListener('click', disableScroll);
menuBtnClose1.addEventListener('click', disableScroll);
menuBtnClose2.addEventListener('click', disableScroll);
menuBtnClose3.addEventListener('click', disableScroll);
menuBtnClose4.addEventListener('click', disableScroll);

menuBtnOpenNutrition.addEventListener('click', toggleMenuNutrition);
menuBtnCloseNutrition.addEventListener('click', toggleMenuNutrition);
menuBtnClose1Nutrition.addEventListener('click', toggleMenuNutrition);
menuBtnClose2Nutrition.addEventListener('click', toggleMenuNutrition);
menuBtnClose3Nutrition.addEventListener('click', toggleMenuNutrition);
menuBtnClose4Nutrition.addEventListener('click', toggleMenuNutrition);

menuBtnOpenNutrition.addEventListener('click', disableScroll);
menuBtnCloseNutrition.addEventListener('click', disableScroll);
menuBtnClose1Nutrition.addEventListener('click', disableScroll);
menuBtnClose2Nutrition.addEventListener('click', disableScroll);
menuBtnClose3Nutrition.addEventListener('click', disableScroll);
menuBtnClose4Nutrition.addEventListener('click', disableScroll);
