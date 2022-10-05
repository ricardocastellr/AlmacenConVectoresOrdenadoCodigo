const miInv = new Inventario();

//Boton agregar.
const agregar = document.getElementById("btnAgregar");
agregar.addEventListener("click",(e)=>{
    const codigo = document.getElementById("codigo").value;
    const nombre = document.getElementById("nombre").value;
    const cantidad = document.getElementById("cantidad").value;
    const costo = document.getElementById("costo").value;
    
    const producto = new Producto(codigo, nombre, cantidad, costo);
    if(miInv.agregar(producto))
        alert("Producto agregado de manera exitosa.");
    else
        alert("El código del producto ya existe en el inventario.");
        
    document.getElementById("listado").innerHTML = ``;
    e.preventDefault(); //Cancela el evento.
});

//Boton listado.
const listar = document.getElementById("btnListar")
listar.addEventListener("click", (e) => {
    if(miInv.listar())
        document.getElementById("listado").innerHTML = `${miInv.listar()}`;
    else
        alert("No hay productos en el almacen.");

    e.preventDefault(); //Cancela el evento.
});

//Boton listado inverso.
const listarInverso = document.getElementById("btnListarInverso")
listarInverso.addEventListener("click", (e) => {
    if(miInv.listarInverso())
        document.getElementById("listado").innerHTML = `${miInv.listarInverso()}`;
    else
        alert("No hay productos en el almacen.");
        
    e.preventDefault(); //Cancela el evento.
});

//Boton eliminar.
const eliminar = document.getElementById("btnEliminar")
eliminar.addEventListener("click", (e) => {
    const producto = miInv.eliminar(document.getElementById("delCodigo").value);
    document.getElementById("delCodigo").value = ``;
    if(producto == true)
        alert("El producto se eliminó con exito.");
    else 
        alert("El producto que desea eliminar no existe.");

    document.getElementById("listado").innerHTML = ``;
    e.preventDefault(); //Cancela el evento.
});

//Boton buscar.
const buscar = document.getElementById("btnBuscar")
buscar.addEventListener("click", (e) => {
    const producto = miInv.buscar(document.getElementById("busCodigo").value);
    document.getElementById("busCodigo").value = ``;
    if(producto != null)
        return `${producto.informacionProducto()}`;
    else{
        document.getElementById("listado").innerHTML = ``;
        alert("El producto que desea buscar no existe.");
    }
    e.preventDefault(); //Cancela el evento.
});