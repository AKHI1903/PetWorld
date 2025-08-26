// Data
const pets = [
    {
        id: 1,
        name: "Max",
        breed: "Golden Retriever",
        type: "dog",
        age: "3 months",
        gender: "male",
        price: 45000,
        description: "Friendly and energetic Golden Retriever puppy. Vaccinated and health checked.",
        image: "https://i.pinimg.com/originals/69/7a/8d/697a8d680ea087027d174bd4fc42c268.jpg",
        status: "available"
    },
    {
        id: 2,
        name: "Luna",
        breed: "Persian Cat",
        type: "cat",
        age: "2 months",
        gender: "female",
        price: 18000,
        description: "Beautiful Persian kitten with blue eyes. Very gentle and loving.",
        image: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=600&h=400&fit=crop",
        status: "available"
    },
    {
        id: 3,
        name: "Rocky",
        breed: "German Shepherd",
        type: "dog",
        age: "4 months",
        gender: "male",
        price: 35000,
        description: "Intelligent and loyal German Shepherd puppy. Great family dog.",
        image: "https://www.allthingsdogs.com/wp-content/uploads/2019/08/Close-up-photo-of-a-white-German-shepherd-1.jpg",
        status: "reserved"
    },
    {
        id: 4,
        name: "Bella",
        breed: "Labrador",
        type: "dog",
        age: "6 months",
        gender: "female",
        price: 25000,
        description: "Playful and friendly Labrador puppy. Perfect for families with children.",
        image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&h=400&fit=crop",
        status: "available"
    },
    {
        id: 5,
        name: "Whiskers",
        breed: "British Shorthair",
        type: "cat",
        age: "3 months",
        gender: "male",
        price: 15000,
        description: "Calm and affectionate British Shorthair with beautiful gray coat.",
        image: "https://i2.wp.com/thumbs.dreamstime.com/b/gray-british-shorthair-katze-72989125.jpg",
        status: "available"
    },
    {
        id: 6,
        name: "Buddy",
        breed: "Beagle",
        type: "dog",
        age: "5 months",
        gender: "male",
        price: 32000,
        description: "Energetic Beagle with excellent temperament. Loves to play and explore.",
        image: "https://th.bing.com/th/id/R.a576c93c95718d7da589056b353ae69f?rik=YYBPN4zfS8ISoA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-TGbPfC9vxg8%2fUAa-P3trzAI%2fAAAAAAAAAH0%2fYKd_ai8tKk0%2fs1600%2fBeagle-Dog-Breed-Pic.jpg&ehk=O6ltQ3%2fgPKQQazbVxCJ0%2bstKMXIY81Xzndh7%2fk1zwJw%3d&risl=&pid=ImgRaw&r=0",
        status: "available"
    },
    {
        id: 7,
        name: "snoopy",
        breed: "Pug",
        type: "dog",
        age: "6 months",
        gender: "male",
        price: 32000,
        description: "Cute,small personality with a wrinkled face.",
        image: "https://wallpapers.com/images/hd/pug-t7s7uobo475tjhg9.jpg",
        status: "available"
    },
    {
        id: 8,
        name: "Simba",
        breed: "Maine Coon",
        type: "cat",
        age: "8 months",
        gender: "male",
        price: 80000,
        description: "Large,Gentle.",
        image: "https://framerusercontent.com/images/T8je8KOib5f8aE1iKk0icDxALU.jpeg?width=1000&height=1052",
        status: "available"
    },
    {
        id: 9,
        name: "Tiger",
        breed: "Bengal Cat",
        type: "cat",
        age: "5 months",
        gender: "male",
        price: 25000,
        description: "Exotic,active,leopard-like spots.",
        image: "https://spotpetinsurance.ca/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fm5ehn3s5t7ec%2Fwp-image-197606%2F673d0bc11558a640ec3e388c50770636%2FHow-Much-is-a-Bengal-Cat.webp&w=3840&q=75",
        status: "available"
    },
    {
        id: 10,
        name: "Tank",
        breed: "American Bull Dog",
        type: "dog",
        age: "12 months",
        gender: "male",
        price: 87000,
        description: "Calm,Strong,yet affectionate.",
        image: "https://media.istockphoto.com/id/1255915151/photo/a-white-american-bulldog-mixed-breed-dog-with-brown-spots.jpg?s=612x612&w=0&k=20&c=axwlRQyzjovlocZrmzGzbBB-y_TBJWb-C3SdzyzV3l4=",
        status: "available"
    },
    {
        id: 11,
        name: "Milo",
        breed: "Ragdoll Cat",
        type: "cat",
        age: "7 months",
        gender: "male",
        price: 14000,
        description: "Relaxed,cuddly,family-friendly.",
        image: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:420,cw:1080,ch:1080,q:80,w:1080/PAyDK8eyvNTtwHXHeWTiiD.jpg",
        status: "available"
    },
    {
        id: 11,
        name: "Snowy",
        breed: "Pomeranian",
        type: "dog",
        age: " 3 months",
        gender: "male",
        price: 4000,
        description: "Small,fluffy,and lively.",
        image: "https://cdn-ilbfemn.nitrocdn.com/SMbNqQVgokVBOKPHqgPbhvowhPKWFJah/assets/images/optimized/rev-f1db8fa/canna-pet.com/wp-content/uploads/2017/09/common-pomeranian-health-issues_canna-pet-1024x683.jpg",
        status: "available"
    },
     {
        id: 12,
        name: "Mimi",
        breed: "Scottish Fold",
        type: "cat",
        age: "3 months",
        gender: "male",
        price: 2000,
        description: "Folded ears,calm and sweet.",
        image: "https://profile.perfectpets.au/2987/19017275835e9af9a89356e3.62368203-profile-2987.jpeg",
        status: "available"
    },
    {
        id: 13,
        name: "Sky",
        breed: "Siberian Husky",
        type: "dog",
        age: "14 months",
        gender: "male",
        price: 60000,
        description: "Energetic,striking blue eyes,loves cold.",
        image: "https://i.pinimg.com/736x/26/4b/94/264b94b898ca630d800bd0c798cc4236.jpg",
        status: "available"
    }
];

const products = [
    {
        id: 1,
        name: "Royal Canin Adult Dog Food",
        description: "Premium nutrition for adult dogs. Complete and balanced diet.",
        price: 1050,
        category: "food",
        petType: "dog",
        image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=300&fit=crop"
    },
    {
        id: 2,
        name: "Biscuits & Cookies",
        description: "Crunchy treats for training and rewards.",
        price: 800,
        category: "food",
        petType: "dog",
        image: "https://www.thecookierookie.com/wp-content/uploads/2013/12/dog-treat-recipe-7.jpg"
    },
    {
        id: 3,
        name: "Dry Kibble",
        description: "Crunchy pellets,easy to store.",
        price: 650,
        category: "food",
        petType: "cat",
        image: "https://media.istockphoto.com/id/1131841641/photo/dry-pet-food.jpg?s=612x612&w=0&k=20&c=zNKlNVZ-gCYC-b6VUjfrardCC0bYkfPk-C3qlnFxfts="
    },
    {
        id: 4,
        name: "Kitten Formula",
        description: "Extra nutrition for fast-growing kittens.",
        price: 230,
        category: "food",
        petType: "cat",
        image: "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/78bd9f8f12ab4e5c89a9d7b13415e2c6.jpg?dpr=2&format=auto",
    },
    {
        id: 5,
        name: "Interactive Cat Toy Bundle",
        description: "Set of 5 interactive toys to keep your cat entertained and active.",
        price: 1200,
        category: "toys",
        petType: "cat",
        image: "https://tse3.mm.bing.net/th/id/OIP.jhQUfrTXQbLdg6fba_rYJAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: 6,
        name: "Premium Leather Collar Set",
        description: "High-quality leather collar with matching leash for dogs.",
        price: 950,
        category: "accessories",
        petType: "dog",
        image: "https://thumbs.dreamstime.com/b/young-woman-golden-retriever-dog-summer-park-young-woman-golden-retriever-185261108.jpg"
    },
    {
        id: 7,
        name: "Squeaky Dog Toys",
        description: "Set of colorful squeaky toys for endless fun and entertainment.",
        price: 800,
        category: "toys",
        petType: "dog",
        image: "https://img.freepik.com/premium-photo/cute-puppy-playing-with-toy-having-fun-showing-its-playful-side_124507-160435.jpg?w=2000"
    },
    {
        id: 8,
        name: "Pet Shampoo & Conditioner",
        description: "Natural pet shampoo for soft and shiny coat.",
        price: 650,
        category: "accessories",
        petType: "both",
        image: "https://th.bing.com/th/id/OIP.t5rEmoCMpBL8nhhGC2Z23QHaE8?w=297&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
        id: 9,
        name: "Dog Beds",
        description: "Soft & cozy beds for comforrtable sleep.",
        price: 450,
        category: "accessories",
        petType: "both",
        image: "https://m.media-amazon.com/images/I/91dC4aGb3NL._UF1000,1000_QL80_.jpg"
    },
    {
        id: 10,
        name: "Scratching Posts & Towers",
        description: "Essential for scratching and climbing.",
        price: 2499,
        category: "accessories",
        petType: "cat",
        image: "https://media.very.co.uk/i/very/VHYKV_SQ7_0000000099_N_A_SLd5?$pdp_300x400_x2$&fmt=jpg"
    },
    {
        id: 11,
        name: "Chew Toys",
        description: "Durable rubber toys for teething & Dental health.",
        price: 300,
        category: "toys",
        petType: "dog",
        image: "https://kutkutstyle.com/cdn/shop/files/kutkutstyle-teether-blue-kutkut-dog-chew-toys-for-aggressive-chewers-large-breed-non-toxic-natural-rubber-indestructible-dog-toys-tough-durable-puppy-chew-toy-for-medium-large-dogs-fu_1de9b293-908e-4415-932b-46ef2354fb35.jpg?v=1753373912"
    },
    {
        id: 12,
        name: "Laser Pointers",
        description: "Keeps cats active with endless chasing fun.",
        price: 150,
        category: "toys",
        petType: "cat",
        image: "https://www.dailypaws.com/thmb/aBjoXcqs0Psms1JYVW6izQwNs8c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/are-laser-pointers-bad-for-cats-1249980070-2000-12e44904760d4bf7bc3c17588e210347.jpg"
    },
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Utility functions
function formatPrice(price) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
    }).format(price);
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Navigation
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`[href="#${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // Scroll to section
    targetSection.scrollIntoView({ behavior: 'smooth' });
}

// Render pets
function renderPets(petList = pets) {
    const petsGrid = document.getElementById('petsGrid');
    petsGrid.innerHTML = petList.map(pet => `
        <div class="pet-card">
            <div class="pet-image">
                <img src="${pet.image}" alt="${pet.name}">
                <div class="pet-status ${pet.status}">${pet.status}</div>
            </div>
            <div class="pet-info">
                <div class="pet-name">${pet.name}</div>
                <div class="pet-breed">${pet.breed}</div>
                <div class="pet-details">${pet.age} • ${pet.gender}</div>
                <div class="pet-description">${pet.description}</div>
                <div class="pet-footer">
                    <div class="pet-price">${formatPrice(pet.price)}</div>
                    <button class="inquiry-btn" ${pet.status !== 'available' ? 'disabled' : ''} onclick="inquireAboutPet(${pet.id})">
                        <i class="fas fa-message"></i>
                        ${pet.status === 'available' ? 'Inquire' : pet.status}
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter pets
function filterPets(type) {
    const filteredPets = type === 'all' ? pets : pets.filter(pet => pet.type === type);
    renderPets(filteredPets);
    
    // Update filter buttons
    document.querySelectorAll('#pets .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Show pets section
    showSection('pets');
}

// Render products
function renderProducts(productList = products) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = productList.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-category ${product.category}">${product.category}</div>
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-footer">
                    <div class="product-price">${formatPrice(product.price)}</div>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter products
function filterProducts(category) {
    const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
    renderProducts(filteredProducts);
    
    // Update filter buttons
    document.querySelectorAll('#products .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Show products section
    showSection('products');
}

// Cart functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    saveCart();
    showToast('Added to cart!');
    renderCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
    showToast('Removed from cart');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    saveCart();
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
                <p>Add some products to get started</p>
            </div>
        `;
        cartTotal.textContent = '₹0';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = formatPrice(total);
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    
    cartSidebar.classList.toggle('open');
    overlay.classList.toggle('active');
    
    if (cartSidebar.classList.contains('open')) {
        renderCart();
    }
}

function checkout() {
    if (cart.length === 0) {
        showToast('Your cart is empty');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showToast(`Order placed for ${formatPrice(total)}! Thank you for shopping with PetWorld.`);
    
    // Clear cart
    cart = [];
    saveCart();
    renderCart();
    toggleCart();
}

function inquireAboutPet(petId) {
    const pet = pets.find(p => p.id === petId);
    if (pet) {
        showToast(`Inquiry sent for ${pet.name}! We'll contact you soon.`);
    }
}

// Search functionality
function searchItems() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.toLowerCase();
    
    if (!query) return;
    
    // Search pets
    const matchingPets = pets.filter(pet => 
        pet.name.toLowerCase().includes(query) ||
        pet.breed.toLowerCase().includes(query) ||
        pet.type.toLowerCase().includes(query)
    );
    
    // Search products
    const matchingProducts = products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );
    
    if (matchingPets.length > 0) {
        showSection('pets');
        renderPets(matchingPets);
    } else if (matchingProducts.length > 0) {
        showSection('products');
        renderProducts(matchingProducts);
    } else {
        showToast('No results found');
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initial render
    renderPets();
    renderProducts();
    updateCartCount();
    
    // Navigation clicks
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const sectionId = href.substring(1);
            showSection(sectionId);
        });
    });
    
    // Search on Enter key
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchItems();
        }
    });
    
    // Close cart when clicking outside
    document.addEventListener('click', function(e) {
        const cartSidebar = document.getElementById('cartSidebar');
        const cartBtn = document.querySelector('.cart-btn');
        
        if (!cartSidebar.contains(e.target) && !cartBtn.contains(e.target) && cartSidebar.classList.contains('open')) {
            toggleCart();
        }
    });
});

// Initialize
window.onload = function() {
    // Show home section by default
    document.querySelector('#home').style.display = 'block';
};
