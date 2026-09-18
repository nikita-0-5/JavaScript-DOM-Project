const services = [
  {
    id: 1,
    name: "Dry Cleaning",
    price: 200,
    image: "images/dry-cleaning.jpg",
  },
  {
    id: 2,
    name: "Shoe Cleaning",
    price: 150,
    image: "images/shoe-cleaning.jpg",
  },
  {
    id: 3,
    name: "Curtain Cleaning",
    price: 350,
    image: "images/curtain-cleaning.jpg",
  },
  {
    id: 4,
    name: "Laundry By KG",
    price: 80,
    image: "images/laundry-kg.jpg",
  },
  {
    id: 5,
    name: "Carpet Cleaning",
    price: 450,
    image: "images/carpet-cleaning.jpg",
  },
  {
    id: 6,
    name: "Steam Ironing",
    price: 120,
    image: "images/steam-ironing.jpg",
  },
  {
    id: 7,
    name: "Saree Cleaning",
    price: 250,
    image: "images/saree-cleaning.jpg",
  },
  {
    id: 8,
    name: "Commercial Laundry",
    price: 900,
    image: "images/commercial-laundry.jpg",
  },
];

const serviceCards = document.getElementById("serviceCards");

let currentService = 0;
let cart = [];
const cartItems = document.getElementById("cartItems");
const totalAmount = document.getElementById("totalAmount");
const emptyCart = document.getElementById("emptyCart");

const customerName = document.getElementById("CustomerName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const bookBtn = document.getElementById("bookBtn");
const bookingMessage = document.getElementById("bookingMessage");

function displayService() {
  if (currentService >= services.length) {
    serviceCards.innerHTML = ` 
        <div class = "card">
            <h2>🎉</h2>
            <h3>All Services Viewed</h3>
            <p>Please book your selected services.</p>
        </div>
        `;
    return;
  }

  serviceCards.innerHTML = `
        <div class="card">
            <img src="${services[currentService].image}" alt="${services[currentService].name}">
            <h3>${services[currentService].name}</h3>
            <span>Rs. ${services[currentService].price}</span>
            <div class="cardBtns">
                <button class="skipBtn">
                    Skip Service
                </button>

                <button class="addBtn">
                    Add Service
                </button>
            </div>
        </div>
    `;

  const skipBtn = document.querySelector(".skipBtn");

  skipBtn.addEventListener("click", () => {
    currentService++;
    displayService();
  });

  const addBtn = document.querySelector(".addBtn");

  addBtn.addEventListener("click", () => {
    cart.push(services[currentService]);
    currentService++;
    displayCart();
    displayService();
  });
}

function displayCart() {
  cartItems.innerHTML = "";
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    cartItems.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${cart[i].name}</td>
                <td>Rs. ${cart[i].price}</td>
            </tr>
        `;

    total += cart[i].price;
  }
  totalAmount.innerText = total;
  if (cart.length === 0) {
    emptyCart.style.display = "block";
  } else {
    emptyCart.style.display = "none";
  }
}

bookBtn.addEventListener("click", function () {
  if (cart.length === 0) {
    bookingMessage.innerText = "Please add at least one service to your cart.";
    bookingMessage.className = "message error";
    return;
  }
  if (customerName.value === "" || email.value === "" || password.value === "") {
    bookingMessage.innerText = "Please enter all the required fields.";
    bookingMessage.className = "message error";
    return;
  }

 

  bookingMessage.innerText = "Thank you for booking with Laundry Wallah! Your booking has been confirmed.";
  bookingMessage.className = "message success";
});

displayService();
