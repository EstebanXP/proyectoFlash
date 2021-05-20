<template>
  <fragment>
    <div class="gradient">
      <div class="container nav">
        <div class="row align-items-center">
          <div class="col">
            <router-link to="/login" @click="Logout">
              <img class="arrow"  src="../assets/ui-elements/Icon-Arrow@2x.png" alt="">
            </router-link>
          </div>
          <div class="col-6">
            <img class="logo" src="../assets/logo.png">
          </div>
          <div class="col">
            <router-link to="/Edit">
              <img class="bell"  src="../assets/ui-elements/Icon-Bell@2x.png" alt="">
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!--aqui acaba la barra de navegacion-->
    <router-link to="/about"></router-link> <br>
    <div class="container-fluid">
      <div id="backEventsHome">
        
          <div class="row" style="padding-top:.6em">
            <div class="col-8">
              <h1 class="h1EventsHome" id="h1Events" style="font-family: 'CodeNext'">añadir un recordatorio rápido</h1>
            </div>
            <div class="col">
              
            </div>
          </div>
 
        <div class="calendar">
          <form @submit.prevent="agregarRecordatorio">
            <div class="container calendar">
              <input type="date" id = "fecha" v-model="fecha"/><br><br>
              <input type="time" id="hora" v-model="hora"/><br><br>
              <input type="input" id ="recordatorio" v-model="recordatorio"/><br><br>
              <input type="submit" value="Guardar recordatorio">
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- Aqui es la mitad de la página-->
    <div class="container conf">
        <div class="row">
          <div class="col">
          </div>
          <div class="col-8">
            <div class="row" style="margin-left:12%">
              <div class="col-2">
                <router-link to="/Edit">
                  <img class="settings"  src="../assets/ui-elements/Icon-Settings@2x.png" alt="">
                </router-link>
              </div>
              <div class="col-6" style="min-width:120px">
                <h1 class="subtitles" id="auto-sub">Próximos</h1>
              </div>
              <div class="col-2">
                
              </div>
            </div>
          </div>
          <div class="col">
          </div>
        </div>
    </div>
    <!--Aqui van los componentes de recordatorios-->
    <div >
     <reminder v-for="item in arre" :key="item.id" v-bind:nameReminder="item.recordatorio" 
     v-bind:dayReminder="item.fecha.seconds"
     v-bind:hourReminder="item.fecha.seconds"
     v-bind:colorReminder="item.color"
     v-bind:reminderId="item.id"
     >

     </reminder>

    </div>
  
</fragment>

</template>

<script>
import reminder from "../components/reminder.vue";
// @ is an alias to /src
import {ref} from 'vue';
import firebase from 'firebase';
import {loadRercords} from '../main.js'

//import moment from 'moment'

export default {
  name: 'App',
  components: {
    reminder,
    
  },
  reminderProps: {
    nameReminder: 'Hello' ,
    dayReminder:  'Hi',
    hourReminder: 'Hola',
    colorReminder: 2,
  },
  data(){
    return{
    }
  },
  methods: {
    getUser() {
      return firebase.auth().currentUser.uid;
    },
    
  },
  mounted() {
  },
  
  setup() {
    const name = ref("");
    const hora=ref("");
    const fecha=ref("");
    const recordatorio=ref("");
    const user1=firebase.auth().currentUser.uid;
    var arre=[];
    arre=loadRercords(user1);

    
    const agregarRecordatorio= async ()=>{
        const user1 =await firebase.auth().currentUser.uid;

       firebase.firestore().collection('usuarios').doc(user1).collection('recordatorios').doc().set({
          recordatorio:recordatorio.value,
          color:1,
          status:false,
          fecha:firebase.firestore.Timestamp.fromDate(new Date(fecha.value+"T"+hora.value)),
          
       });
        
      
    }
     

    const Logout = () =>{
      firebase
        .auth()
        .signOut()
        .then(()=>console.log("sesion Cerrada"))
        .catch(err=>alert(err.message));
    } 

    

    return{
      name,
      Logout,
      agregarRecordatorio,
      hora,
      fecha,
      recordatorio,
      arre,
      user1
    }
  }
}

</script>
