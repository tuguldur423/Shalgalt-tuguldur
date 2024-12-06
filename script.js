// class car {
//     constructor(name,year){
//         this.name=name;
//         this.year=year;
//     }
// }
// let a = new car ("prius" , 2000);
// console.log(a);
// Get all "Save" buttons
const saveButtons = document.querySelectorAll('.bg-green-500');

let savedProducts = [];

function saveToSags(event) {
  const card = event.target.closest('.bg-white'); 
  const title = card.querySelector('h3').textContent; 
  const price = card.querySelector('p.text-lg').textContent; 
  const imgSrc = card.querySelector('img').src; 

  const isAlreadySaved = savedProducts.some((product) => product.title === title);

  if (isAlreadySaved) {
    alert('This product is already saved!');
    return;
  }

  const product = { title, price, imgSrc };
  savedProducts.push(product);

  localStorage.setItem('savedProducts', JSON.stringify(savedProducts));

  alert(`${title} has been saved to your sags!`);
}

saveButtons.forEach((button) => {
  button.addEventListener('click', saveToSags);
});

  const productContainer = document.querySelector('.grid');

  const products = JSON.parse(localStorage.getItem('products')) || [];

  products.forEach((product) => {
    const productCard = `
      <div class="bg-white rounded-lg shadow-md p-4">
        <img 
          src="${product.image}" 
          alt="${product.title}" 
          class="w-full h-40 object-cover rounded-t-md"
        >
        <div class="p-4">
          <h3 class="text-xl font-bold text-gray-800 mb-2">${product.title}</h3>
          <p class="text-sm text-gray-600 mb-4">${product.introduction}</p>
          <p class="text-lg font-semibold text-gray-800 mb-4">$${product.price}</p>
        </div>
      </div>
    `;
    productContainer.insertAdjacentHTML('beforeend', productCard);
  });

