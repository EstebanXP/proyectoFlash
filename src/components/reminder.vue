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
                    <h1 class="hourReminder">{{hourReminder}}- {{reminderId}}</h1>
                </div>
                <div class="col-1">
                    <img class="status"  src="../assets/ui-elements/status-done@2x.png" alt="">
                </div>
                <div class="col-1">
                    <img class="arr-down arr-up-down"  src="../assets/ui-elements/Icon-Bin@2x.png" alt="">
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
//import firebase from 'firebase';
export default{
    name:"reminder",
    props: ['nameReminder','dayReminder', 'hourReminder', 'colorReminder','reminderId'],
    data(){
        return{
            fecha:this.dayReminder,
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
