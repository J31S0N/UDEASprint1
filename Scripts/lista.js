let listaProductos=[
{
    name:"Detergente Ecológico",
    price:101,
    description: "Detergente ecológico 1 litro",
    img: "https://cdn-icons-png.flaticon.com/256/2975/2975185.png",
},
{
    name:"Producto Ecológico 2",
    price: 101,
    description: "Descripción del producto ecológico 2",
    img: "https://i.pinimg.com/564x/17/45/13/1745138821f7ea38cee180a9777047f3.jpg",
},
{
    name:"Producto Ecológico 3",
    price:101,
    description: "Descripción del producto ecológico 3",
    img: "https://cdn-icons-png.flaticon.com/256/2975/2975185.png",
},
{
    name:"Detergente Ecológico",
    price:101,
    description: "Detergente ecológico 1 litro",
    img: "https://cdn-icons-png.flaticon.com/256/2975/2975185.png",
},
{
    name:"Producto Ecológico 2",
    price: 101,
    description: "Descripción del producto ecológico 2",
    img: "https://cdn-icons-png.flaticon.com/256/2975/2975185.png",
},
{
    name:"Producto Ecológico 3",
    price:101,
    description: "Descripción del producto ecológico 3",
    img: "https://cdn-icons-png.flaticon.com/256/2975/2975185.png",
}
]

function doClick(id){
    console.log("Hiciste click", id);
    eCommerceShop.agregarItem(id);
}
function eliminarClick(id){
    console.log("Hiciste click", id);
    eCommerceShop.eliminarItem(id);

}
function mostrarProductos(){
    let productoCodigoHTML = "";
    for(let i=0; i<listaProductos.length; i++){
        let producto=`
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card d-flex" style="width: 18rem">
                <div class="card-body">
                    <img class="card-img-top d-flex align-self-center" src="${listaProductos[i].img}" alt="Producto Ecológico 1">
                    <h5 class="card-title">${listaProductos[i].name}</h5>
                    <p class="card-text">${listaProductos[i].description}</p>
                    <p class="card-title price" id="price 1">${listaProductos[i].price}</p>
                    <a href="#" class="btn btn-primary" onclick="doClick(${i});">Comprar</a>
                </div>
            </div>
        </div>
        `;
        productoCodigoHTML+=producto;   
}
    document.getElementById("catalogo-productos").innerHTML = productoCodigoHTML;
}
mostrarProductos();
let eCommerceShop = new Carrito(listaProductos);