<template>
    <div class="container-fluid gradient back">
        <div class="login">
             <h1 class="pad-top">bienvenido de<br>nuevo, estudiante</h1>
            <div class="pad-top">
                <img src="../assets/logo.png" style="width:11%; min-width:140px"  >
            </div>
            
            <!-- Esta es la parte de arriba del login, donde dice Login -->
            <h1 class="pad-top">REGISTRATE</h1>

            <!--Aqui empieza el formulario del login-->
            <form @submit.prevent="Login">
                <input type="text" class="inp" placeholder="email" v-model="email"><br>
                <input type="password" class="inp" placeholder="contraseña" v-model="password"><br>
                <input type="submit" class="btn-inis" value="Iniciar Sesión">
            </form>
            <div class="logInGoogle">
                <button @click="LoginG" class="btn-google">Inicia sesion aquí con tu cuenta Google</button>
            </div>
            <h1>O</h1>  
            <div class="btn yellow-button">
                <router-link to="/register"><h1>crea una <br> cuenta nueva</h1></router-link>
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

