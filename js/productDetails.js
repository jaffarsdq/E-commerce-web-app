document.addEventListener("DOMContentLoaded",() =>{
    async function populateProductDetail()  {
        const queryParams = getQueryParams();
        if(queryParams['id']) {
            const productId = queryParams['id'];
            const product = await fetchProductById(productId); 
            console.log(product);
            const image = document.getElementById('productImage');
            const title = document.getElementById('productTitle');
            const price = document.getElementById('productPrice');
            const description = document.getElementById('productDescription')
    
            title.textContent = product.title;
            price.innerHTML = `&dollar;${product.price}`
            description.textContent = product.description;
            image.src = product.image;
            removeLoader();
        }

    }
    populateProductDetail()
})