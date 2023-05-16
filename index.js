const cardOne = document.getElementById("card_one");
const cardTwo = document.getElementById("card_two");
const cardThree = document.getElementById("card_three");
const thing = document.getElementById("something");
const login = document.getElementById("logIn");
const addBtn = document.getElementById("add_btn");

addBtn.onmousedown = (e) => {
  cardThree.style.animationPlayState = "running";
  cardTwo.style.animationPlayState = "running";
  addBtn.style.opacity = 0;
};

cardOne.onmousedown = (e) => {
  cardOne.style.width = "100vw";
  cardOne.style.height = "100vh";
  cardOne.style.zIndex = "1000000";
  cardOne.style.left = "0";
  thing.style.zIndex = "-10";
  login.style.zIndex = "-10";
};
cardTwo.onmousedown = (e) => {
  cardTwo.style.width = "100vw";
  cardTwo.style.height = "100vh";
  cardTwo.style.left = "0";
};
cardThree.onmousedown = (e) => {
  cardThree.style.width = "100vw";
  cardThree.style.height = "100vh";
  cardThree.style.left = "0";
};
