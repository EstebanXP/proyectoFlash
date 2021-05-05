<template>
  <fragment>
    <div class="gradient">
      <div class="container nav">
        <div class="row align-items-center">
          <div class="col">
            <router-link to="/Time-notis">
              <img class="bell"  src="../assets/ui-elements/Icon-Bell@2x.png" alt="">
            </router-link>
          </div>
          <div class="col-6">
            <img class="logo" src="../assets/logo.png">
          </div>
          <div class="col">
            <img class="add"  src="../assets/ui-elements/Icon-Add@2x.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <!--aqui acaba la barra de navegacion-->
    <router-link to="/about"></router-link> <br>
    <div id="backEventsHome">
      <div class="container">
        <div class="row" style="padding-top:.6em">
          <div class="col-8">
           <h1 class="h1EventsHome" id="h1Events" style="font-family: 'CodeNext'">añadir un recordatorio rápido</h1>
          </div>
          <div class="col">
            <img class="arrHome arr-up-down arr-pad" src="../assets/ui-elements/arrow-up@2x.png" alt="">
          </div>
        </div>
      </div>
      <div class="calendar">
        <form @submit.prevent="agregarRecordatorio">
          <div class="container calendar">
            <input type="date" v-model="fecha"/><br><br>
            <input type="time" v-model="hora"/><br><br>
            <input type="input" v-model="recordatorio"/><br><br>
            <input type="submit" value="Guardar recordatorio">
          </div>
        </form>
      </div>
    </div>
    <!-- Aqui es la mitad de la página-->
    <div class="container conf">
        <div class="row">
          <div class="col">

          </div>
          <div class="col-8" style="float:center">
            <div class="row" style="margin-left:12%">
              <div class="col-2">
                <router-link to="/Config-notis">
                  <img class="settings"  src="../assets/ui-elements/Icon-Settings@2x.png" alt="">
                </router-link>
              </div>
              <div class="col-6" style="min-width:120px">
                <h1 class="subtitles" id="auto-sub">próximos</h1>
              </div>
              <div class="col-2">
                <img class="arr-down arr-up-down"  src="../assets/ui-elements/arrow-down@2x.png" alt="">
              </div>
            </div>
          </div>
          <div class="col">
          </div>
        </div>
    </div>
    <!--Aqui van los componentes de recordatorios-->
    <h1>recordarroiso</h1>
    <div>
      <reminder/>
    </div>
  <div class="logout">
      
      <button class="logout" @click="Logout"> 
        <img class="arrow" src="../assets/ui-elements/Icon-Arrow@2x.png" alt="">
        Cerrar Sesión
      </button>
  </div>
</fragment>

</template>

<script>
import reminder from "../components/reminder.vue";
// @ is an alias to /src
import {ref,onBeforeMount} from 'vue';
import firebase from 'firebase';
//import moment from 'moment'

export default {
  name: 'App',
  components: {
    reminder
  },
  setup() {

    const name = ref("");
    const hora=ref("");
    const fecha=ref("");
    const recordatorio=ref("");
    //let fechaFormato;
    //const horaFormato;
    onBeforeMount(()=>{
      const user = firebase.auth().currentUser;
      if(user){
        name.value=user.email.split('@')[0];
      }
    });

    const agregarRecordatorio=  ()=>{
        const user1 = firebase.auth().currentUser.uid;
        
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
      recordatorio
    }
  }
}

</script>
