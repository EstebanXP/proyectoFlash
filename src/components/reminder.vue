<template>
    <div class="reminderEvents" v-bind:class="color">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="h1Reminder">{{nameReminder}}</h1>
                </div>
            </div>
            <div class="row">
                <p class="pReminder">{{dayReminder}}</p>
            </div>
            <div class="row down-reminder">
                <div class="col-9">
                    <h1 class="hourReminder">{{hourReminder}}</h1>
                </div>
                <div class="col-1">
                    <img class="status"  src="../assets/ui-elements/status-done@2x.png" alt="" @click="editarRecordatorios(this.reminderId)">
                </div>
                <div class="col-1">
                    <img class="arr-down arr-up-down"  src="../assets/ui-elements/Icon-Bin@2x.png" alt="" @click="borrarRecordatorio(this.reminderId)">
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import firebase from 'firebase';
import {bdd} from '../main.js'
//import swal from 'sweetalert';
import Swal from 'sweetalert2'
export default{
    name:"reminder",
    props: ['nameReminder','dayReminder', 'hourReminder', 'colorReminder','reminderId'],
    data(){
        return{
            fecha:this.dayReminder,
        }
    },
    methods: {
        editarRecordatorios(idRecor){
            const user1 = firebase.auth().currentUser.uid;
            Swal.fire({
               title: 'Puedes editar ahora!',
                html: `<input type="text" id="rAux" class="swal2-input" placeholder="Nuevo recordatorio">
                <input type="date" id="fAux" class="swal2-input" placeholder="Password">
                <input type="time" id="hAux" class="swal2-input" placeholder="Password">`,
                showCancelButton: true,
                confirmButtonText: `Guardar`,
                confirmButtonColor: "#2CBA0D",  
                cancelButtonText: `Cancelar`,
                cancelButtonColor: "#DD6B55",
                closeOnCancel: true,
                
                preConfirm: () => {
                const recAux = Swal.getPopup().querySelector('#rAux').value
                const fechAux = Swal.getPopup().querySelector('#fAux').value
                const horaAux = Swal.getPopup().querySelector('#hAux').value
                return { rAux:recAux,fAux:fechAux,hAux:horaAux}
            }
            }).then(result=>{
                if(result.isConfirmed){
                    bdd.collection('usuarios').doc(user1).collection('recordatorios').doc(idRecor).update({
                        recordatorio:result.value.rAux,
                        fecha:firebase.firestore.Timestamp.fromDate(new Date(result.value.fAux+"T"+result.value.hAux)),
                    })
                    //Aqui termina el if
                }
            })
        },
        borrarRecordatorio(idRecor){
        const user1 = firebase.auth().currentUser.uid;
            Swal.fire({
                title: 'Estas seguro?',
                text: "Una vez borrado no se puede recuperar!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, quiero borrarlo!'
                }).then((result) => {
                if (result.isConfirmed) {
                bdd.collection("usuarios").doc(user1).collection("recordatorios").doc(idRecor).delete();
                    Swal.fire(
                    'Borrado!',
                    'El recordatorio a sido borrado con exito.',
                    'success'
                    )
                }
                })
        }
    },
    computed:{
        color: function () {
            return {
                azul: this.colorReminder == 1,
                verde: this.colorReminder == 2,
                amarillo: this.colorReminder == 3,
                rojo: this.colorReminder == 4,
            }
        }
    },
    mounted(){
        var tis=this;
        function changeDate(){
            var dia=new Date(tis.fecha*1000);
            return dia.getDay();
        }
        function getDay(){
            switch(changeDate()){
            case 1: console.log("Lunes");
                break;
            case 2: console.log("Martes");
                break;
            case 3: console.log("Miercoles");
                break;
            case 4: console.log("Jueves");
                break;
            case 5: console.log("Viernes");
                break;
            case 6: console.log("Sabado");
                break;
            case 7: console.log("Domingo");
                break;
        }
        }
        getDay();
        
        
    },
    setup(){
        
            
        return{  
        
        }
    },
}


</script>
