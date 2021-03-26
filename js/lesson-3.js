'use strict';

// ===== num_1 =====
function writeNumber() {
	for (let i = 0; i < 11; i++) {
		if (i == 0) {
			console.log(`${i} - это ноль`);
		} else if (i % 2 == 0) {
			console.log(`${i} - четное число`);
		} else {
			console.log(`${i} - нечетное число`);
		}
	}
}

writeNumber();

// ===== num_2 =====
const post = {
	author: "John", //вывести этот текст
	postId: 23,
	comments: [{
			userId: 10,
			userName: "Alex",
			text: "lorem ipsum",
			rating: {
				likes: 10,
				dislikes: 2 //вывести это число
			}
		},
		{
			userId: 5, //вывести это число
			userName: "Jane",
			text: "lorem ipsum 2", //вывести этот текст
			rating: {
				likes: 3,
				dislikes: 1
			}
		},
	]
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// ===== num_3 =====
const products = [{
		id: 3,
		price: 200,
	},
	{
		id: 4,
		price: 900,
	},
	{
		id: 1,
		price: 1000,
	},
];

products.forEach(function (product) {
	product.discount = product.price / 100 * 15;
});

// ===== num_4 =====
const productsInInternet = [{
		id: 3,
		price: 127,
		photos: [
			"1.jpg",
			"2.jpg",
		]
	},
	{
		id: 5,
		price: 499,
		photos: []
	},
	{
		id: 10,
		price: 26,
		photos: [
			"3.jpg"
		]
	},
	{
		id: 8,
		price: 78,
	},
];

const productsWithPhotos = productsInInternet.filter(function (product) {
	return 'photos' in product && product.photos.length > 0;
});

console.log(productsWithPhotos);

const sortedPriceProducts = productsInInternet.sort(function (item1, item2) {
	return item1.price - item2.price;
});

console.log(sortedPriceProducts);

// ===== num_5 =====
for (let i = 0; i < 10; console.log(i++));

// ===== num_6 =====
let x = '';
for (let i = 0; i < 20; i++) {
	x += 'x';
	console.log(x);
}