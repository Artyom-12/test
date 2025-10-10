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

let k = 0;


const mainOffersItems = document.querySelector(".main-offers__items");

function shiftLeft() {
	event.preventDefault();
	// console.log(4-Math.abs(k%5));
	document.querySelector(`.item_${4 - Math.abs(k%5) + 1}`).remove();
	mainOffersItems.insertAdjacentHTML(
		'afterBegin',
		`<article class="main-offers__item ${listSpecialOffers["item"][4 - Math.abs(k%5)]}">
			<figure>
    			<div class="main-offers__img">
    				<img src="${listSpecialOffers["url"][4 - Math.abs(k%5)]}">
    			</div>
    			<h3>${listSpecialOffers["h3"][4 - Math.abs(k%5)]}</h3>
    			<div class="main-offers__location">
    				<h4>${listSpecialOffers["h4"][4 - Math.abs(k%5)]}</h4>
    				<p>${listSpecialOffers["locationP"][4 - Math.abs(k%5)]}</p>
    			</div>
    			<figcaption class="main-offers__paragraph">
    				<p>${listSpecialOffers["paragraphP"][4 - Math.abs(k%5)][0]}</p>
    				<p>${listSpecialOffers["paragraphP"][4 - Math.abs(k%5)][1]}</p>
    			</figcaption>
   			</figure>
   		</article>`
	);
	k--;
	// console.log(k);
	// console.log(4-Math.abs(k%5));
}

function shiftRight() {
	event.preventDefault();
	document.querySelector(`.item_${Math.abs(k%5) + 1}`).remove();
	mainOffersItems.insertAdjacentHTML(
		'beforeEnd',
		`<article class="main-offers__item ${listSpecialOffers["item"][Math.abs(k%5)]}">
			<figure>
    			<div class="main-offers__img">
    				<img src="${listSpecialOffers["url"][Math.abs(k%5)]}">
    			</div>
    			<h3>${listSpecialOffers["h3"][Math.abs(k%5)]}</h3>
    			<div class="main-offers__location">
    				<h4>${listSpecialOffers["h4"][Math.abs(k%5)]}</h4>
    				<p>${listSpecialOffers["locationP"][Math.abs(k%5)]}</p>
    			</div>
    			<figcaption class="main-offers__paragraph">
    				<p>${listSpecialOffers["paragraphP"][Math.abs(k%5)][0]}</p>
    				<p>${listSpecialOffers["paragraphP"][Math.abs(k%5)][1]}</p>
    			</figcaption>
   			</figure>
   		</article>`
	);
	k++;
}

function addTags() {
	mainOffersItems.insertAdjacentHTML(
		'afterBegin',
		`<article class="main-offers__item ${listSpecialOffers["item"][4 - Math.abs(k%5)]}">
			<figure>
    			<div class="main-offers__img">
    				<img src="${listSpecialOffers["url"][4 - Math.abs(k%5)]}">
    			</div>
    			<h3>${listSpecialOffers["h3"][4 - Math.abs(k%5)]}</h3>
    			<div class="main-offers__location">
    				<h4>${listSpecialOffers["h4"][4 - Math.abs(k%5)]}</h4>
    				<p>${listSpecialOffers["locationP"][4 - Math.abs(k%5)]}</p>
    			</div>
    			<figcaption class="main-offers__paragraph">
    				<p>${listSpecialOffers["paragraphP"][4 - Math.abs(k%5)][0]}</p>
    				<p>${listSpecialOffers["paragraphP"][4 - Math.abs(k%5)][1]}</p>
    			</figcaption>
   			</figure>
   		</article>`
	);
}

arrowLeft.addEventListener("click", shiftLeft);
// console.log(document.querySelector(".main-offers__item"));
arrowRight.addEventListener("click", shiftRight);