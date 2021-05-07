<template>
<div class="container-fluid gradient back"> 
    <div id="reg-head">
        <router-link to="/Login">
            <img class="arrow-icon" src="../assets/ui-elements/Icon-Arrow@2x.png" alt="">
        </router-link>
    </div>
    <div class="register">
        <!-- Esta es la parte de arriba del registro, donde dice registro-->
        
        <div class="pad-top">
                <img src="../assets/logo.png" style="width:11%; min-width:140px"  >
        </div>
        <h1 class="pad-top">registrate</h1>
        <!--Aqui empieza el formulario del registro-->
        <form @submit.prevent="Register">
            <div class="container">
                <input class="inp" type="text" placeholder="email" v-model="email"/>
                <input class="inp" type="password" placeholder="password" v-model="password"/>
                <div style="padding-top:20px"></div>
                <input class="btn yellow-button" type="submit" value="confirmar">
                <h1 class="pad-top">¿Ya tienes una cuenta?<router-link to="/Login"> <br> Inicia sesion aquí</router-link></h1>
            </div>
        </form>
        <!--Aqui termina el formulario del registro-->
    </div> 
</div>
    
</template> 

<script>
import firebase from 'firebase';
import {ref} from 'vue';
const db=firebase.firestore();

export default {
    setup() {
        const email=ref("");
        const password=ref("");
        

        //Esta es la funcion para registrar usuarios
        const Register = () =>{
            firebase
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
                .then(cred=>{
                    return db.collection('usuarios').doc(cred.user.uid).set({
                        emailU : email.value
                    });
                })
                .catch(err=>err.message);
        }

       

        //Estas variables son las que hacen que se puedan llamar externamente las funciones
        return{
            Register,
            email,
            password
        }
    }
    
}
</script>

