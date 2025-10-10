let listSpecialOffers = {
	"url": ["img/offers/701041ebc9a99e7f85d39bea3214c8a26cb86d79.jpg", "img/offers/847f8e70ef9316e4726658eac01805560f43074c.jpg", "img/offers/d7a96ca08f4a9a569fa8cc5fd51c2a8222f0e3b8.jpg", "img/offers/f9fb1eaff98684b5e89f7f565021d191e13ee97b.png", "img/offers/b7c8c21d5eaefc769649c0138fb1f7c31898cda5.jpg"], 
	"h3": ["Statue of Liberty.", "The Great Wall", "Dizin", "Sajek Valley", "Osaka Castle"],
	"h4": ["New York", "China", "Iran", "Bangladesh", "Japan"],
	"locationP": ["4.8", "4.9", "4.6", "4.7", "4.7"],
	"paragraphP": [["4 Day 5 Nights", "$450/person"], ["7 Day 8 Nights", "$850/person"], ["5 Day 6 Nights", "$550/person"], ["3 Day 4 Nights", "$400/person"], ["4 Day 5 Nights", "$700/person"]],
};

 


function createDivsWithTemplate(containerId, count) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error('Контейнер с id "' + containerId + '" не найден.');
    return;
  }
  for (let i = 0; i < count; i++) {
    const article = document.createElement('article');
    article.className = 'main-offers__item swiper-slide';
    const htmlTemplate = `
      	<figure>
    		<div class="main-offers__img">
    			<img src="${listSpecialOffers["url"][i%5]}">
    		</div>
    		<h3>${listSpecialOffers["h3"][i%5]}</h3>
    		<div class="main-offers__location">
    			<h4>${listSpecialOffers["h4"][i%5]}</h4>
    			<p>${listSpecialOffers["locationP"][i%5]}</p>
    		</div>
    		<figcaption class="main-offers__paragraph">
    			<p>${listSpecialOffers["paragraphP"][i%5][0]}</p>
    			<p>${listSpecialOffers["paragraphP"][i%5][1]}</p>
    		</figcaption>
   		</figure>
    `;

    article.innerHTML = htmlTemplate;
    container.appendChild(article);
    console.log(i)
  }
}

createDivsWithTemplate('wrapper', 6);


new Swiper(".swiper", {

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},

	spaceBetween: 73,
	// slidesPerGroup: 1,
	loop: true,
	slidesPerView: 5,
	// freeMode: true,
	// watchOverflow: true,

	keyboard: {
		anabled: true,
		onlyInViewport: true,
	},
});
