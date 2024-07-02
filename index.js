import Espectaculo from "./classes/espectaculo.js";
import Espectador from "./classes/espectador.js";

let _espectador1=new Espectador("Ana", 8, "F")   
let _espectador2=new Espectador("Luis", 15, "M")   
let _espectador3=new Espectador("Valeria", 12, "f")   
let _espectador4=new Espectador("Fabian", 21, "m")   

let _espectaculo=new Espectaculo()

_espectaculo.procesarEspectador(_espectador1)
_espectaculo.procesarEspectador(_espectador2)
_espectaculo.procesarEspectador(_espectador3)
_espectaculo.procesarEspectador(_espectador4)

document.body.innerHTML=`
<br>
El espectador ${_espectador1.nombre} debe cancelar ${_espectador1.entradaPrecio}$
<br>
El espectador ${_espectador2.nombre} debe cancelar ${_espectador2.entradaPrecio}$
<br>
El espectador ${_espectador3.nombre} debe cancelar ${_espectador3.entradaPrecio}$
<br>
El espectador ${_espectador4.nombre} debe cancelar ${_espectador4.entradaPrecio}$
<br>
<br>
Promedio de las Ventas hechas a espectadores adolescentes ${_espectaculo.promedioVentasAdolescentes()}
<br>
<br>
Entre niños y adolescentes el espectador que asistió más al circo fue ${_espectaculo.mayorAsistencia}
<br>
<br>
Porcentaje que representa la cantidad de niños que asistieron al circo ${_espectaculo.porcentajeAsistenciaNinos()}%
`