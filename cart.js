
const data = localStorage.getItem('cartItem');
const cartArr = JSON.parse(data);
console.log(cartArr);

const div = document.querySelector('#main-div');
const subtotalElement = document.querySelector('.subTotal');
const totalElement = document.querySelector('.totalPrice');

const shippingCost = 0 ;

function renderCart() {
    
    let subtotal = 0;

    if(cartArr.length > 0){
        for (let i = 0; i < cartArr.length; i++) {
            const item = cartArr[i];
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
        // for (let i = 0; i < cartArr.length; i++) {
            div.innerHTML += `
                <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <img src="${cartArr[i].img}" alt="product-image" class="w-full rounded-lg sm:w-40" />
                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div class="mt-5 sm:mt-0 ">
                    <h2 class="text-lg font-bold text-gray-900">${cartArr[i].brand}</h2>
                    <p class="mt-1 text-sm font-bold text-gray-700">${cartArr[i].model}</p>
                </div>
                <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div class="flex items-center border-gray-100">
                    <span class="cursor-pointer rounded-l bg-[#38bdf8] font-semibold text-white py-1 px-3.5 duration-100 hover:bg-[#00a4ec]" onclick="decreaseQuantity(${i})"> - </span>

                    <span class="h-8 w-8 p-2 font-semibold border bg-white text-center text-xs align-middle  outline-none"> ${cartArr[i].quantity}</span>

                    <span class="cursor-pointer rounded-r bg-[#38bdf8] font-semibold text-white py-1 px-3 duration-100 hover:bg-[#00a4ec]" onclick="increaseQuantity(${i})"> + </span>
                    </div>
                    <div class="items-center text-center space-x-4">

                    <p><span class="font-semibold text-sm"></span> ${cartArr[i].price * cartArr[i].quantity}</p>

                    
                    <button  class="bg-[#38bdf8] rounded-md px-2 py-1 text-white mt-4 hover:bg-[#00a4ec]" onclick="deleteItem(${i})">Delete</button>
                    
                    </div>
                </div>
                </div>
            </div>
            `
            const total = Math.round(subtotal + shippingCost);
        
        subtotalElement.textContent = subtotal.toFixed(0)+ ' PKR';
        totalElement.textContent = total.toFixed(0)+ ' PKR';
        }
    }else{
        div.innerHTML = '<h2 class="text-center text-3xl"> Cart Is Empty..</h2>'
        subtotalElement.textContent = '0 PKR';
        totalElement.textContent = '0 PKR';
    }
}

renderCart()

function increaseQuantity (index){
    div.innerHTML = ''
    console.log(cartArr[index])
    cartArr[index].quantity += 1
    renderCart()
}
function decreaseQuantity (index){
    div.innerHTML = ''
    console.log(cartArr[index])
    cartArr[index].quantity -= 1
    renderCart()
    if(cartArr[index].quantity === 0){
        div.innerHTML = ''
        cartArr.splice(index , 1)
        renderCart()
    }
}


function deleteItem(index){
    div.innerHTML = '';
    cartArr.splice(index , 1);
    renderCart()
}

function goToHome() {
    window.location = './index.html'
    localStorage.setItem('cartItem' , JSON.stringify(cartArr));
}

//relaoding Issue
window.onbeforeunload = function() {
    localStorage.setItem('cartItem' , JSON.stringify(cartArr));
};
