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
    <h1>Bienvenido, {{name}} te esperabamos</h1>
    <router-link to="/about"></router-link> <br>
    <div id="backEventsHome">
      <form @submit.prevent="agregarRecordatorio">
        <div class="container">
          <input type="date" v-model="fecha"/><br><br>
          <input type="time" v-model="hora"/><br><br>
          <input type="input" v-model="recordatorio"/><br><br>
          <input type="submit" value="Guardar recordatorio">
        </div>
      </form>
    </div>
  
    <!-- Aqui es la mitad de la página-->
    <div class="container conf">
      <div class="row align-items-center">
        <div class="col">
          <router-link to="/Config-notis">
            <img class="settings"  src="../assets/ui-elements/Icon-Settings@2x.png" alt="">
          </router-link>
        </div>
        <div class="col">
          
          <p style="color:black">próximos</p>
          
        </div>
        <div class="col">
          <img class="arr-down"  src="../assets/ui-elements/arrow-down@2x.png" alt="">
        </div>
        
      </div>
    </div>
    <!--Aqui van los componentes de recordatorios-->
    <h1>recordarroiso</h1>
    <div>

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
// @ is an alias to /src
import {ref,onBeforeMount} from 'vue';
import firebase from 'firebase';
//import moment from 'moment'

export default {
  setup() {

    const name = ref("");
    const hora=ref("");
    const fecha=ref("");
    const recordatorio=ref("");
    onBeforeMount(()=>{
      const user = firebase.auth().currentUser;
      if(user){
        name.value=user.email.split('@')[0];
      }
    });

    const agregarRecordatorio=  ()=>{
      /* Moment es la función que vamos a utilizar para calcular los días que faltan para terminar un pendiente
        var fecha1 = moment('2016-07-12');
        var fecha2 = moment('2016-08-01');

      console.log(fecha2.diff(fecha1, 'days'), ' dias de diferencia');
      */
        const user1 = firebase.auth().currentUser.uid;
        //Obtiene el id del documento
       firebase.firestore().collection('usuarios').doc(user1).collection('recordatorios').doc().set({
          recordatorio:recordatorio.value,
          fecha:fecha.value,
          hora:hora.value,
          color:1,
          status:false,
          //buscar como añadir la hora y fecha en el formato timestamp de firebase
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
