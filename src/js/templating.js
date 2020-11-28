// <!-- В этот список рендери разметку меню -->
// {/* <ul class="menu js-menu"></ul> */ }
import itemsTemplates from "../templates/food-card.hbs";
// console.log(itemsTemplates);
import card from "../menu.json";
// console.log(card);

const marcup = itemsTemplates(card);
// console.log(marcup);


const menuRef = document.querySelector(".js-menu");
menuRef.insertAdjacentHTML("beforeend", marcup )