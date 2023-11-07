//Carro de compras


class car{
    constructor(productos){
        this.productos=productos;
        this.itemsSeleccionados=[];
    }
    agregarProducto(id){
        this.itemsSeleccionados.push(this.productos[id]);
        this.mostraProductos();
    }
    eliminarProductos(id){
        this.mostraProductos();
    }
    mostraProductos(){
        let productoCodigoHTML = "";
        for(let i=0; i<this.itemsSeleccionados.length; i++){
            let productoSeleccionado = `<li class="list-group-item align-items-center" id="carrito-compras.lista">
            <p>Producto Ecologico 1</p>
            <button type="button" class="btn btn-warning ">Eliminar</button>
            <p>
                <i>$101 UDS</i>
            </p>
        </li>`;
            productoCodigoHTML += productoSeleccionado;
        }
        document.getElementById("carrito-compras.lista").innerHTML=productoCodigoHTML;
    }





























// Obtén una referencia a los botones que quieres escuchar
const buttons = document.querySelectorAll('.container.mt-5 .card-body .btn.btn-primary');

// Objeto para almacenar los productos y precios
const productos = {};

// Agrega un solo evento clic para todos los botones
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const cardBody = event.currentTarget.closest('.card-body');
        const botonSales = cardBody.querySelector('.price');
        const nameProduct = cardBody.querySelector('h5').textContent;
        let price = botonSales.textContent;

        // Almacena el producto y su precio en el objeto 'productos'
        productos[nameProduct] = price;

        // Imprime el objeto productos
        // console.log(productos);
    });
});













