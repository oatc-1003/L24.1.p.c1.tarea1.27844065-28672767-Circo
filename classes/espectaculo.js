export default class Espectaculo{
    constructor(){
        this.contEspectadores=0;
        this.contAdolescentes=0;
        this.contNinos=0;
        this.accMontoEntradasAdolescentes=0;
        this.mayorAsistencia="niños"
    }
    procesarEspectador(espectador){
        this.contEspectadores++

        if(espectador.edad<=12) this.contNinos++
        if(espectador.edad>12 && espectador.edad<=18) {
            this.contAdolescentes++
            this.accMontoEntradasAdolescentes+=espectador.entradaPrecio
        }
        if(this.contAdolescentes>this.contNinos)this.mayorAsistencia="adolescentes"

    }

    promedioVentasAdolescentes(){
        return this.accMontoEntradasAdolescentes/this.contAdolescentes
    }
    porcentajeAsistenciaNinos(){
        return (this.contNinos/this.contEspectadores) * 100 
    }



}