document.addEventListener("DOMContentLoaded", function() {
    const uploadForm = document.getElementById("upload-form");
    
    uploadForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const formData = new FormData(uploadForm);
        const productName = formData.get("product-name");
        const productPrice = formData.get("product-price");
        const productCategory = formData.get("product-category");
        const productDescription = formData.get("product-description");
        const productImageFile = formData.get("product-image");
        
        const reader = new FileReader();
        reader.onload = function(e) {
            const productImageSrc = e.target.result;
            const product = {
                href: "#",
                imgSrc: productImageSrc,
                alt: productName,
                name: productName,
                price: productPrice,
                category: productCategory,
                description: productDescription
            };
            
            addProductToHomePage(product);
        };
        reader.readAsDataURL(productImageFile);
    });
    
    function addProductToHomePage(product) {
        const productGrid = document.getElementById("product-grid");
        
        const productElement = document.createElement("a");
        productElement.classList.add("product");
        productElement.href = product.href;
        productElement.innerHTML = `
            <img src="${product.imgSrc}" alt="${product.alt}">
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
            <p class="category">${product.category}</p>
            <p class="description">${product.description}</p>
        `;
        productGrid.appendChild(productElement);
    }
});