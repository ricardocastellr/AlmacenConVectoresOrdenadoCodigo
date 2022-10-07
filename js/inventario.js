class Producto{
    constructor(codigo,nombre,cantidad,costo){
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
    }
    informacionProductoHTML(){
        return document.getElementById("listado").innerHTML = 
        `<h3>CÓDIGO: ${this.codigo}.</h3>
        <h4>Nombre: ${this.nombre}.<br>
        Cantidad: ${this.cantidad}.<br>
        Costo: $${this.costo}.</h4>
        <p>-----------------------------------------</p>`;
    }
    informacionProducto(){
        return `${this.codigo} - ${this.nombre} - ${this.cantidad} - ${this.costo}`
    }
}

class Inventario{
    constructor(){
        this.productos = [];
    }

    agregar(producto){
        if(this.buscar(producto.codigo) == null && producto.codigo.length != 0){
            this.productos[this.productos.length] = producto;
            console.log(this.productos.length)
            for(let i=1; i < this.productos.length ;i++){
                const swap = this.productos[i].codigo;
                const aux = this.productos[i];
                let j = i - 1;

                while(j >= 0 && Number(this.productos[j].codigo) > Number(swap)){
                    this.productos[j+1] = this.productos[j];
                    j--;
                }
                this.productos[j+1] = aux;
            }
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

    buscar(codigo){
        let sup = 0;
        let inf = this.productos.length - 1;
        
        while(sup <= inf){
            let centro = Math.floor((sup + inf) / 2);

            if (this.productos[centro].codigo < codigo) 
                sup = centro + 1;
            else if (this.productos[centro].codigo > codigo) 
                inf = centro - 1;
            else if (this.productos[centro].codigo === codigo)
                return this.productos[centro];   
        }

        return null;
    }

    listar(){
        let productos = "";
        if(this.productos.length>0){
            for(let i=0; i<this.productos.length ;i++)
                productos += this.productos[i].informacionProductoHTML();
        }else 
            return false;
        
        return productos;
    }

    listarInverso(){
        let productos = "";
        if(this.productos.length>0){
            for(let i=this.productos.length-1; i>=0 ;i--)
                productos += this.productos[i].informacionProductoHTML();
        }else 
            return false;

        return productos;
    }
}