// agreagar los input disabled a los campos de hora y tarea 
// analizar la manera para poder habilitar los inputs disabled
// investigar sobre los nodos para ver si se puede seleccionar por ahi a los inputs
// analizar otra manera de utilizar contador en el addEvenListener para nombrar los ids de los inputs 
//          y asi seleccionarlos

let botonAgregar = document.getElementById("agregarTarea");
botonAgregar.addEventListener("click", () => {
    const fecha=document.getElementById("date")
    const tarea=document.getElementById("tarea")
    if(fecha.value!=""&&tarea.value!=""){ 
    document.getElementById("tabla").insertRow(-1).innerHTML =    `<tr>
    <td class="tdFecha">Fecha: <input id="inputFecha" type="date" value="${fecha.value}" disabled></td>
    <td class="tdTarea"><input id="inputTarea" type="text" value="${tarea.value}" disabled> </td>
    <td class="settingsTarea"><button id="editar" onClick="editarFila(this)">Editar</button><button id="eliminar" onClick="BorrarFila(this)">Eliminar</button></td>
    </tr>`
    fecha.value=""
    tarea.value=""
    }else{
        alert("Rellena los campos para poder guardar tu tarea")
    }
});

function BorrarFila(row){
    let idx=row.parentNode.parentNode.rowIndex;//primero subimos hasta estar al mismo nivel del nodo tr para despues obtener su indice
    document.getElementById("tabla").deleteRow(idx)
}
let cont=0;
function editarFila(row) {
    let tdFecha=row.parentNode.parentNode.childNodes[1].childNodes[1]
    let tdTarea=row.parentNode.parentNode.childNodes[3].childNodes[0]
    let btn=row
    if(cont%2==0){
        tdFecha.disabled=false
        tdTarea.disabled=false
        btn.textContent="Fin Edicion" 
    }else{
        tdFecha.disabled=true
        tdTarea.disabled=true
        btn.textContent="Editar"
    }
    cont++;
}