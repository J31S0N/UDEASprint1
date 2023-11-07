class Carrito{
    constructor(productos){
        this.productos=productos;
        this.itemsSeleccionados=[];
    }
    agregarItem(id){
        this.itemsSeleccionados.push(this.productos[id]);
        this.mostraItem();
    }
    eliminarItem(id){
        console.log(this.itemsSeleccionados);
        this.itemsSeleccionados.splice(id,1);
        console.log(this.itemsSeleccionados.splice(id, 1));
        this.mostraItem();
    }
    mostraItem(){
        let productoCodigoHTML = "";
        let total=0;
        for(let i=0; i<this.itemsSeleccionados.length; i++){
            let productoSeleccionado = `
            <li class="list-group-item align-items-center card d-flex" id="carrito-compras-lista">
                <img src="${this.itemsSeleccionados[i].img}" class="img-item">
                <p>${this.itemsSeleccionados[i].name}</p>
                <button type="button" class="btn btn-warning" onclick="eliminarClick(${i});">Eliminar</button>
                <p>$${this.itemsSeleccionados[i].price}UDS</p>
            </li>`;
            productoCodigoHTML += productoSeleccionado;
            total+=this.itemsSeleccionados[i].price;
        }
        document.getElementById("carrito-compras-lista").innerHTML = productoCodigoHTML;
        console.clear();
        console.log(total);
        document.getElementById("totalCarrito").innerHTML = "$" + total;
    }
}