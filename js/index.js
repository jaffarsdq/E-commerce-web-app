console.log("index js loaded");

async function fetchCategories () {
    const response = await fetch("https://fakestoreapi.com/products/categories");
    const data = await response.json();
    return data;

}

async function populateCatogories() {
    const categories = await fetchCategories();
    removeLoader();
    categories.forEach(category => {
        const categoryHolder = document.getElementById("categories-list");
        const categoryLink = document.createElement("a");
        categoryLink.href = `Product-list.html?category=${category}`;
        categoryLink.textContent = category;
        categoryLink.classList.add("col-12","col-sm-6", "col-md-4","col-lg-2","m-2","all-products")
        categoryHolder.appendChild(categoryLink);
    });

}

populateCatogories();