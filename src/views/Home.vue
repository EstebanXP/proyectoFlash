<template>
  <fragment>
    <div class="nav-head gradient">
      <div class="container" style="padding-top:1%">
        <div class="row">
<<<<<<< Updated upstream
          <div class="left-nav-arrow ">
            <img class="arrow" @click="Logout" src="../assets/ui-elements/Icon-Arrow@2x.png" alt="">
=======
          <div class="col">
            <button class="arrow" @click="Logout">
              <img class="arrow-icon" src="../assets/ui-elements/Icon-Arrow@2x.png" alt="">
            </button>
>>>>>>> Stashed changes
          </div>
          <div class="col">
            <img src="../assets/logo.png" style="width:20%; min-width:20px">
          </div>
          <div class="col">
            3 of 3
          </div>
        </div>
      </div>
    </div>
    <h1>Bienvenido, {{name}} te esperabamos</h1>
    <router-link to="/about"></router-link> <br>
<<<<<<< Updated upstream
=======
    
<<<<<<< HEAD

  
<form @submit.prevent="agregarRecordatorio">
=======
  </div>
>>>>>>> Stashed changes
<form @submit.prevent="mandarHoraFecha">
>>>>>>> parent of 7538642 (Ya jala guardar en firestore los recordatorios, solo falta el timestamp)
  <div class="container">
    <input type="date" v-model="fecha"/><br><br>
    <input type="time" v-model="hora"/><br><br>
    <input type="input" v-model="recordatorio"/><br><br>
    <input type="submit" value="Guardar recordatorio">
  </div>
</form>
  <div class="logout">
      <button class="logout" @click="Logout">Cerrar Sesión</button>
  </div>
</fragment>

</template>

<script>
// @ is an alias to /src
import {ref,onBeforeMount} from 'vue';
import firebase from 'firebase';
//const db=firebase.firestore();

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

     const mandarHoraFecha=()=>{
            console.log(hora.value+"+"+fecha.value+"+"+recordatorio.value);
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
      mandarHoraFecha,
      hora,
      fecha,
      recordatorio
    }
  }
}

</script>
