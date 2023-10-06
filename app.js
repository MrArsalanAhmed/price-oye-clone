
const getMob = document.getElementById("item")

const phones = [

    {

        brand: 'Apple',
        img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-.jpg",
        model: 'Iphone 14 Pro Max',
        ram: 6,
        rom: 256,
        camera: '48 megapixel',
        price:590000,
    },
    {
        brand: 'Samsung',
        img:"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-ultra-5g.jpg",
        model: 'S23 Ultra',
        ram: 12,
        rom: 512,
        camera: '200 megapixel',
        price:380000,
    },
    {
        brand: 'Google',
        img:"https://fdn2.gsmarena.com/vv/bigpic/google-pixel7-pro-new.jpg",
        model: 'Pixel 7 Pro',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price:290000,
    },
    {
        brand: 'Xiomi',
        img:"https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note10-5g.jpg",
        model: 'Redmi Note 10 Pro',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 34999,
    },
    {
        brand: 'Infinix',
        img:"https://rakistan.pk/wp-content/uploads/2021/11/infinix-zero-x-pro-pakistan-priceoye-im0ai-500x500-1.webp",
        model: 'Z10',
        ram: 4,
        rom: 62,
        camera: '5 megapixel',
        price: 38999,
    },
    {
        brand: 'Tecno',
        img:"https://images.priceoye.pk/tecno-spark-10-pakistan-priceoye-2144l.jpg",
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 45999 ,
    },
    {
        brand: 'Samsung',
        img:"https://m.media-amazon.com/images/I/41KRhotx+PL.jpg",
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price:159000,
    },
    {
        brand: 'Oppo',
        img:"https://cf.shopee.com.my/file/cfb2a159ee8d06bc3d0a0046ec34d060",
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 35999,
    },
    {
        brand: 'Vivo',
        img:"https://newglacier.pk/wp-content/uploads/2022/09/y20.jpg",
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price:28999 ,
    },
    {
        brand: 'Huawei',
        img:"https://mobiles.dailypakistan.com.pk/wp-content/uploads/2020/08/HUAWEIP3-600x600.jpg",
        model: 'P30 Pro',
        ram: 8,
        rom: 512,
        camera: '40 megapixel',
        price:31999 ,
    },
];
const div = document.querySelector('.cardContainer');


for (let i = 0; i < phones.length; i++) {
    // console.log(phones[i]);
    div.innerHTML += `
    <div class="p-[2rem] border-black-200 border-solid border-2 rounded-lg drop-shadow-2xl bg-white justify-evenly">
            <div class="card-image flex h-48 justify-center">
                <img src="${phones[i].img}" class="">
            </div>
            <p><span class="font-bold text-lg">Brand:</span> ${phones[i].brand}</p>
            <p><span class="font-bold text-lg">Model:</span> ${phones[i].model}</p>
            <p><span class="font-bold text-lg">RAM:</span> ${phones[i].ram}</p>
            <p><span class="font-bold text-lg">ROM:</span> ${phones[i].rom}</p>
            <p><span class="font-bold text-lg">Camera:</span> ${phones[i].camera}</p>
            <p><span class="font-bold text-lg">Price:</span> ${phones[i].price}</p>
            <button onclick='addToCart(${i})' class="bg-[#38bdf8] rounded-md px-2 py-1 text-white mt-4 hover:bg-[#00a4ec]">Add to Cart</button>
    </div>
    `

}

const cartData = localStorage.getItem('cartItem');
const jsonData = JSON.parse(cartData);

let cartArr;
if(Array.isArray(jsonData)){
    cartArr = [...jsonData]

}else{
    cartArr = []
}
// const cartArr = []

function addToCart(index) {
    // console.log('includes in array ==>', cartArr.includes(phones[index]));
    if (cartArr.includes(phones[index])) {
        console.log('mujood ha');
        for (let i = 0; i < cartArr.length; i++) {
            if (cartArr[i] === phones[index]) {
                cartArr[i].quantity += 1
            }
        }
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Item quantity updated successfully',
            showConfirmButton: false,
            timer: 1500
        })
    } else {
        console.log('mujood NAHI ha');
        phones[index].quantity = 1
        cartArr.push(phones[index]);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Item added to cart successfully',
            showConfirmButton: false,
            timer: 1500
        })
    }
    console.log(cartArr);
}


function goToCart() {
    const cart = JSON.stringify(cartArr);
    localStorage.setItem('cartItem' , cart);
    console.log('cart called');
    window.location = './cart.html';
}