let root = document.getElementById('root');
    let cartContent = document.getElementById('cart-content');
    let cart = document.getElementById('cart');
console.log(root);
//let product = {
   // name: 'carrot',
    //count: 10,
    //color: 'yellow'
//}
//console.log(product1)

let products = [
    {
        img: "potation/carrot.jpg",
        name: 'carrot',
        count: 1,
        color: 'yellow',
        price: 2 + "$"    
    },
    {
        img: "potation/potatoes.jpg",
        name: 'potates',
        count: 1,
        color: 'brown',  
        price: 2 + "$"    
    },
    {   
        img: "potation/onion.jpg",
        name: 'onion',
        count: 20,
        color: 'white',  
        price: 2 + "$"    
    },
    {
        img: "potation/broccoli.jpg",
        name: 'broccoli', 
        count: 15,
        color: 'green',
        price: 2 + "$"       
    },
    {
        img: "potation/tomato.jpg",
        name: 'tomato',
         count: 30, 
         color: 'red',
         price: 2 + "$"
    },
    {
        img: "potation/cucumber.jpeg",
        name: 'cucumber',
        count: 25,
         color: 'green',
         price: 2 + "$"
    },
    {
        img: "potation/bell pepper.jpg",
        name: 'bell pepper',
         count: 12,
          color: 'yellow',
          price: 2 + "$"
    },
    {
        img: "potation/spinach.webp",
        name: 'spinach',
         count: 18, 
         color: 'green',
         price: 2 + "$"
    },
    {
        img: "potation/zucchini.webp",
        name: 'zucchini', 
        count: 8,
         color: 'green',
         price: 2 + "$"
    },
    {
        img: "potation/eggplant.jpg",
        name: 'eggplant', 
        count: 10,
         color: 'purple',
         price: 2 + "$"
    },
    {
        img: "potation/lettuce.webp",
        name: 'lettuce',
         count: 22, 
         color: 'green',
         price: 2 + "$"
    },
    {
        img: "potation/cabbage.jpg",
        name: 'cabbage', 
        count: 14, 
        color: 'green',
        price: 2 + "$"
    },
    {
        img: "potation/radish.webp",
        name: 'radish', 
        count: 17,
         color: 'red',
         price: 2 + "$"
    },
    {
        img: "potation/kale.webp",
        name: 'kale', 
        count: 10, 
        color: 'green',
        price: 2 + "$"
    },
    {
        img: "potation/cauliflower.jpg",
        name: 'cauliflower',
         count: 12,
          color: 'white',
          price: 2 + "$"
    },
    {
        img: "potation/sweet potato.jpg",
        name: 'sweet potato',
         count: 15, 
         color: 'orange',
         price: 2 + "$",
    },
    {
        img: "potation/asparagus.jpg",
        name: 'asparagus', 
        count: 8, 
        color: 'green',
        price: 2 + "$"
    },
    {
        img: "potation/brussels sprouts.jpeg",
        name: 'brussels sprouts',
         count: 10, 
         color: 'green',
         price: 2 + "$"
    },
    {
        img: "potation/green beans.jpg",
        name: 'green beans', 
        count: 20, 
        color: 'green',
        price: 2 + "$"
    },
    {
        img: "potation/peas.jpg",
        name: 'peas', 
        count: 15,
        color: 'green',
        price: 2 + "$"
    },
]

for (let i = 0; i < products.length; i++) {
    let productContainer = document.createElement('div');
    productContainer.className = 'container';
    productContainer.innerHTML = `
        <div class="box">
            <img class="ImgSource" src="${products[i].img}" alt="${products[i].name}">
            <div class="title">${products[i].name}</div>
            <div class="price">${products[i].price}</div>
            <div class="count">${products[i].count} kg</div>
            <button class="btn" onclick="addToCart(${i})">Buy</button>
        </div>
    `;
    root.appendChild(productContainer);
}

function addToCart(index) {
    let product = products[index];
    let cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
        <span>${product.name} - ${product.count} kg</span>
        <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
    `;
    cartContent.appendChild(cartItem);
}

function removeFromCart(index) {
    // Remove the item from the array
    products.splice(index, 1);
    // Remove the item from the cart content
    cartContent.removeChild(cartContent.children[0]);
}
function toggleCart() {
    cart.style.display = cart.style.display === 'none' ? 'block' : 'none';
}

let itemsPerPage = 8; // Set the number of items to display per page
let currentPage = 1;

function displayProducts(pageNumber) {
    root.innerHTML = ''; // Clear the root container
    let startIndex = (pageNumber - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;

    for (let i = startIndex; i < endIndex && i < products.length; i++) {
        let productContainer = document.createElement('div');
        productContainer.className = 'container';
        productContainer.innerHTML = `
            <div class="box">
                <img class="ImgSource" src="${products[i].img}" alt="${products[i].name}">
                <div class="title">${products[i].name}</div>
                <div class="price">${products[i].price}</div>
                <div class="count">${products[i].count} kg</div>
                <button class="btn" onclick="addToCart(${i})">Buy</button>
            </div>
        `;
        root.appendChild(productContainer);
    }
}

function displayPagination() {
    let totalPages = Math.ceil(products.length / itemsPerPage);
    let pagination = document.querySelector('.pagination');
    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        let pageItem = document.createElement('li');
        pageItem.className = 'page-item';
        pageItem.innerHTML = `<button class="page-link" onclick="changePage(${i})">${i}</button>`;
        pagination.appendChild(pageItem);
    }
}

function changePage(pageNumber) {
    currentPage = pageNumber;
    displayProducts(currentPage);
}

// Call these functions initially
displayProducts(currentPage);
displayPagination();



