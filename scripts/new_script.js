let listSpecialOffers = {
	"item": ["item_1", "item_2", "item_3", "item_4", "item_5"],
	"url": ["img/offers/701041ebc9a99e7f85d39bea3214c8a26cb86d79.jpg", "img/offers/847f8e70ef9316e4726658eac01805560f43074c.jpg", "img/offers/d7a96ca08f4a9a569fa8cc5fd51c2a8222f0e3b8.jpg", "img/offers/f9fb1eaff98684b5e89f7f565021d191e13ee97b.png", "img/offers/b7c8c21d5eaefc769649c0138fb1f7c31898cda5.jpg"], 
	"h3": ["Statue of Liberty.", "The Great Wall", "Dizin", "Sajek Valley", "Osaka Castle"],
	"h4": ["New York", "China", "Iran", "Bangladesh", "Japan"],
	"locationP": ["4.8", "4.9", "4.6", "4.7", "4.7"],
	"paragraphP": [["4 Day 5 Nights", "$450/person"], ["7 Day 8 Nights", "$850/person"], ["5 Day 6 Nights", "$550/person"], ["3 Day 4 Nights", "$400/person"], ["4 Day 5 Nights", "$700/person"]],
};


const arrowLeft = document.querySelector(".main-offers__arrow_left a");
const arrowRight = document.querySelector(".main-offers__arrow_right a");
const mainOffersItems = document.querySelector(".main-offers__items");


function shiftLeft() {
	event.preventDefault();
	const startItem = document.querySelector(".start_item");
	const endItem = document.querySelector(".end_item");
	document.querySelector(".end_item").remove();
	mainOffersItems.insertAdjacentHTML(
		'afterBegin',
		endItem.outerHTML
	)
	document.querySelector(".start_item").classList.remove("start_item");
	document.querySelectorAll(".main-offers__item")[0].classList.add("start_item");
	document.querySelector(".end_item").classList.remove("end_item");
	document.querySelectorAll(".main-offers__item")[4].classList.add("end_item");
}


function shiftRight() {
	event.preventDefault();
	const startItem = document.querySelector(".start_item");
	const endItem = document.querySelector(".end_item");
	document.querySelector(".start_item").remove();
	mainOffersItems.insertAdjacentHTML(
		'beforeEnd',
		startItem.outerHTML
	)
	document.querySelector(".start_item").classList.remove("start_item");
	document.querySelectorAll(".main-offers__item")[0].classList.add("start_item");
	document.querySelector(".end_item").classList.remove("end_item");
	document.querySelectorAll(".main-offers__item")[4].classList.add("end_item");
}


arrowLeft.addEventListener("click", shiftLeft);
arrowRight.addEventListener("click", shiftRight);