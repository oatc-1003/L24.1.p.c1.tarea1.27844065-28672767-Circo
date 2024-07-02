export default class Espectador{
    constructor(nombre,edad,sexo){
        this.PRECIO_BASE=15;
        this.nombre=nombre;
        this.edad=edad;
        this.sexo=sexo;
        this.entradaPrecio=this.calcPrecioEntrada(edad);
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get nombre(){
        return this._nombre
    }
    set edad(edad){
        this._edad=edad;
    }
    get edad(){
        return this._edad
    }
    set sexo(sexo){
        this._sexo=sexo.toUpperCase();
    }
    get sexo(){
        return this._sexo
    }
    calcPrecioEntrada(edad){
        if(edad<=18){
            
            let _descuento=0.1 * this.PRECIO_BASE//10%
            let _nuevoPrecio=this.PRECIO_BASE - _descuento
            return _nuevoPrecio
        
        } 

        return this.PRECIO_BASE
    }

}