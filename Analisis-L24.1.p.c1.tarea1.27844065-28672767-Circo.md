> Repositorio: https://github.com/oatc-1003/L24.1.p.c1.tarea1.27844065-28672767-Circo.git

---
### Enunciado

Para un espectáculo de circo se tienen 3 tipos de entrada: niños (hasta 12 años), adolescentes (hasta 18) y adultos (mayores de 18, respectivamente), el precio de la entrada general es de 15$. Por cada espectador se tiene: nombre, edad y sexo. Además, se sabe que si el espectador es niño o adolescente obtiene un descuento del 10%. Se requiere mostrar: a) Precio Cancelado por cada espectador, b) Promedio de las Ventas hechas a espectadores adolescentes, c) Entre niños y adolescentes cuál asistió más al circo, d) Porcentaje que representa la cantidad de niños que asistieron al circo con respecto al total de espectadores procesados. El circo suministra la siguiente información demostrativa, para 4 espectadores: (nombre, edad, sexo) (Ana, 8, F) (Luis, 15, M) (Valeria, 12, F) (Fabian, 21, M)

### Análisis

- Clase: Espectáculo
	- Atributos:
		- contEspectadores
		- contAdolescentes
		- contNinos
		- accMontoEntradasAdolescentes
		- mayorAsistencia
	- Métodos:
		- procesarEspectador
		- promedioVentasAdolescentes
		- porcentajeAsistenciaNinos
- Clase: Espectador
	- Atributos:
		- PRECIO_BASE
		- nombre
		- edad
		- sexo
		- entradaPrecio
	- Métodos:
		- set sexo(sexo){ this._sexo=sexo.toUpperCase(); }
		- get sexo(){return this._sexo}
		- .
		- .
		- .
		- calcPrecioEntrada

#### Tabulación

| Nombre  | Edad | Sexo | Descuento | Precio entrada |
| ------- | ---- | ---- | --------- | -------------- |
| Ana     | 8    | F    | 10%       | 13.5           |
| Luis    | 15   | M    | 10%       | 13.5           |
| Valeria | 12   | M    | 10%       | 13.5           |
| Fabian  | 21   | M    | 0%        | 15             |
#### Requerimientos

- a: PRECIO_BASE - (PRECIO_BASE * 0.1)
- b: accMontoEntradasAdolescentes/contAdolescentes
- c: relativo mayor/menor
- d: (contNinos/contEspectadores) * 100