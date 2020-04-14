const app = new Vue({
el: '#app',
data: {
    titulo: 'RUTINA GYM CON VUE.JS',
    tareas: [],
    nuevaTarea: ''
},
methods:{
    agregarTarea()
    {
        this.tareas.push({
            nombre: this.nuevaTarea,
            estado: false

        })
        this.nuevaTarea ='';
        //setItem(Donde Se va a guardar, qué se va a guardar)
        localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
    },
    editarTarea(index)
    {
        this.tareas[index].estado = true;
        localStorage.setItem('gym-vue', JSON.stringify(this.tareas));

    },
    eliminar(index)
    {
        //splice(Indice a eliminar, Cantidad de elemetos a eliminar)
        this.tareas.splice(index,1);
        localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
    }
},
created()
{
    let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
    if(datosDB === null)
    {
        this.tareas = [];
    }else{
        this.tareas = datosDB;
    }
}
});
