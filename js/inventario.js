class Producto{
    constructor(codigo,nombre,cantidad,costo){
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
    }
    informacionProducto(){
        return document.getElementById("listado").innerHTML = 
        `<h3>CÓDIGO: ${this.codigo}.</h3>
        <h4>Nombre: ${this.nombre}.<br>
        Cantidad: ${this.cantidad}.<br>
        Costo: $${this.costo}.</h4>
        <p>-----------------------------------------</p>`;
    }
}

class Inventario{
    constructor(){
        this.productos= new Array();
    }

    agregar(producto){
        if(this.buscar(producto.codigo) == null && producto.codigo.length != 0){
            this.productos.push(producto);
            return true;
        }else
            return false;
    }

    eliminar(codigo){
        if(this.buscar(codigo) == null)
            return false;
        else{
            for(let i=0; i<this.productos.length ;i++){
                if(codigo == this.productos[i].codigo){
                    for(let j=i; j<this.productos.length-1 ;j++)
                        this.productos[j] = this.productos[j+1];
                }
            }
            this.productos.pop();
            return true;
        }
    }

    buscar(elemento){
        let inicio = 0;
        let final = this.productos.length - 1;
          
        while (inicio <= final) {
            let mitad = Math.floor((inicio + final) / 2);
          
            if (this.productos[mitad].codigo < elemento) {
                inicio = mitad + 1;
            } else if (this.productos[mitad].codigo > elemento) {
                final = mitad - 1;
            } else if (this.productos[mitad].codigo === elemento) {
                return this.productos[mitad];
            }
        }
        return null;
    }

    listar(){
        let productos = "";
        if(this.productos.length>0){
            for(let i=0; i<this.productos.length ;i++)
                productos += this.productos[i].informacionProducto();
        }else 
            return false;
        
        return productos;
    }

    listarInverso(){
        let productos = "";
        if(this.productos.length>0){
            for(let i=this.productos.length-1; i>=0 ;i--)
                productos += this.productos[i].informacionProducto();
        }else 
            return false;

        return productos;
    }
}