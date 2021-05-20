const data = [
    {
        imgSrc: "./images/product_1.jpg",
        rating: 4,
        name: `Woman's Long Dress`,
        price: 4500, //price in cents to prevent mistakes at math operations
        id: "womans_long_dress",
    },
];

function createProductElement(product) {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
    <div class="product_image"><img src="images/product_1.jpg" alt=""></div>
        <div class="rating rating_4" data-rating="4">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
        </div>
        <div class="product_content clearfix">
            <div class="product_info">
                <div class="product_name"><a href="product.html">Woman's Long Dress</a></div>
                <div class="product_price">$45.00</div>
            </div>
            <div class="product_options">
                <div class="product_buy product_option"><img src="images/shopping-bag-white.svg"
                    alt=""></div>
            <div class="product_fav product_option">+</div>
        </div>
    </div>
    `;
}

function loadProducts() {
    const root = document.getElementById("root");
    for (const product of data) {
    }
}

window.addEventListener("load", loadProducts);

// END ON 43 min
