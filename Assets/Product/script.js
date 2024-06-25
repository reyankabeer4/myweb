let products=[
    {name:"T-Shirt",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, fugit.",image:"../pictures/t-shirt.jpg",prices:"1.99$"},  
    {name:"Shoes",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, fugit.",image:"../pictures/shoes.jpg",prices:"1.99$"},  
    {name:"Wallet",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, fugit.",image:"../pictures/wallet.jpg",prices:"1.99$"},  
]

let productImage=document.getElementById("productImage")
let productName=document.getElementById("productName")
let pDescription=document.getElementById("pDescription")

let queryParams=new URLSearchParams(window.location.search)
let paramId=queryParams.get("p")

productImage.src=products[paramId].image
productName.innerHTML=products[paramId].name
pDescription.innerHTML=products[paramId].description