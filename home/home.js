const product=[
    {
        id:1,
        image:"https://cdn.shopify.com/s/files/1/2358/2817/products/Air-Jordan-4-Black-Cat-2_1.png?v=1672761534",
        title:"jordanNoir",
        price:"8000 Fcfa"
    },
    {
        id:2,
        image:"https://www.tudo.fr/img/cms/Guides/tudo_arts_martiaux_1272384855.jpg",
        title:"casque art martiaux",
        price:"20000 Fcfa"
    },
    {
        id:3,
        image:"https://www.tudo.fr/img/cms/Guides/tudo_arts_martiaux_866_1.jpg",
        title:"Gants de boxe",
        price:"15000 Fcfa"
    },
    {
        id:4,
        image:"https://www.waza-b-sport.be/medias/images/kimono-karate-kime.png",
        title:"tenue de Karate",
        price:"20000 Fcfa"
    },
    {
        id:5,
        image:"https://contents.mediadecathlon.com/p1615301/k$beb4c358ecf26ef9d3ba20c53c1b6709/1800x0/1182pt1182/2363xcr1091/default.jpg?format=auto",
        title:"Poids",
        price:"40000 Fcfa"
    },
    {
        id:6,
        image:"https://contents.mediadecathlon.com/p188464/k$6af4ff9996c33671bbbe61d2a3a5ec93?format=auto&f=500x500",
        title:"Poids de fitness",
        price:"20000 Fcfa"
    },
    {
        id:7,
        image:"https://www.totalsport.fr/media/wysiwyg/materiel-entrainement-football.png",
        title:"equipement de foot",
        price:"20000 Fcfa"
    },
    {
        id:8,
        image:"https://www.cdiscount.com/pdt2/1/2/1/1/700x700/mp11995121/rw/gant-de-baseball-en-cuir-de-haute-qualite-gauche-m.jpg",
        title:"Gant de base-ball",
        price:"10000 Fcfa"
    },
    {
        id:9,
        image:"https://contents.mediadecathlon.com/m4816859/k$a9b6fb5c1613a13683073b4e97736ae3/sq/13ce90cd-5795-4d7b-9116-5ace5b1b6779_c30.jpg?format=auto&f=800x0",
        title:"Batte de base-ball",
        price:"8000 Fcfa"
    },
    {
        id:10,
        image:"https://contents.mediadecathlon.com/p1830523/k$ed8c43f54d58640a8a5f9a4fd2213a87?format=auto&f=500x500",
        title:"Genouillere",
        price:"7000 Fcfa"
        
    }
]
/* const addToCartButtons = document.querySelectorAll('.addtocart');
const cartItemsDiv = document.getElementById('a');
addToCartButtons.forEach(button => {
    button.addEventListener('click', ajoutepanier);
});
function ajoutepanier(event){
    const productId = parseInt(event.target.getAttribute('data-product'));
    const selectedProduct = product.find(product => product.id === productId);

    // Ajoutez le produit au tableau des éléments du panier dans sessionStorage

    console.log(selectedProduct)
    console.log(productId)
}*/
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2> ${price}</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}
function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML= cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = 0;
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+parseInt(price.split(" ")[0]);
            console.log(total);
            document.getElementById("total").innerHTML = total+" Fcfa";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'> ${price}  </h2>`+
                `<svg xmlns="http://www.w3.org/2000/svg" style="cursor: pointer;heigth:30px;width:30px;" viewBox="0 0 24 24" fill="red" onclick='delElement("+ (j++) +")' class="w-6 h-6">
  <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
</svg>
</div>`
            );
        }).join('');
    }

}