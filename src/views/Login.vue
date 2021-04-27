<template>
    <div class="container-fluid gradient back">
        <div class="login">
             <h1 class="pad-top title">bienvenido de<br>nuevo, estudiante</h1>
        <div class="pad-top">
                <img src="../assets/logo.png" style="width:11%; min-width:140px"  >
            </div>
            
            <!-- Esta es la parte de arriba del login, donde dice Login -->
            <h1 class="pad-top">INICIA SESIÓN</h1>

            <!--Aqui empieza el formulario del login-->
            <form @submit.prevent="Login" class="form-in">
                <input type="text" class="inp" placeholder="email" v-model="email"><br>
                <input type="password" class="inp" placeholder="contraseña" v-model="password"><br>
                <div style="padding-top:10px"></div>
                <input type="submit" class="btn yellow-button" value="aceptar">
            </form>
            <div style="padding-top:20px"></div>
            <div class="logInGoogle">
                <img class="btn-google" src="../assets/google.png" @click="LoginG" style="width:40%">
            </div>
            
            <h1 id="o">o puedes </h1>  
            <div id=bord></div>
            <div id=bord1></div>
            <div class="btn yellow-button">
                <router-link to="/register">crear una cuenta nueva</router-link>
            </div>
                
            <!--Aqui termina el formulario del login-->
        </div>
        <!--Aqui empieza el boton de login con gmail-->
        
        <!--Aqui termina el boton de login con gmail-->
        </div>
        <div>
    </div>
</template>

<script>
import {ref} from 'vue';
import firebase from 'firebase';

export default {
    setup(){
        const email = ref("");
        const password = ref("");
        //Esta es la funcion que hace que jale el login con usuario y contraseña
        const Login = () =>{
            firebase
                .auth()
                .signInWithEmailAndPassword(email.value,password.value)
                .then(data=>console.log(data))
                .catch(err=>alert(err.message))
        }
        //Esta es la funcion que hace que jale el login con gmail
        const LoginG=()=>{
            const provider= new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then(()=>{
                alert("Sesion iniciada");
            }).catch(err=>{
                console.log(err);
            });
        }

        
        //Estas variables son las que hacen que se puedan llamar externamente las funciones
        return{
            Login,
            email,
            password,
            LoginG
        
        }
    }

    


}

</script>

<style>

</style>

