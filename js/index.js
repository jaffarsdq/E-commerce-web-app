console.log("index js loaded");

async function fetchCategories () {
    const response = await fetch("https://fakestoreapi.com/products/categories");
    const data = await response.json();
    return data;

}

async function populateCatogories() {
    const categories = await fetchCategories();
    const categoriesList = document.getElementById("categories-list");
    categories.forEach(category => {
        const categoryHolder = document.createElement("div");
        const categoryLink = document.createElement("a");
        categoryLink.href = "#";
        categoryLink.textContent = category;
        categoryHolder.classList.add("col-12","col-sm-6", "col-md-4","col-lg-2","m-2","all-products")
        categoryHolder.appendChild(categoryLink);
        categoriesList.appendChild(categoryHolder)
    });

}

populateCatogories();