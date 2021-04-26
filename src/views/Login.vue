<template>
    <div class="container-fluid">
        <div class="login">
            <!-- Esta es la parte de arriba del login, donde dice Login -->
            <h1>Log in</h1>
            <!-- Creo que por aqui debe estar la imagen del logo-->
            <!-- Creo que por aqui debe finalizar la imagen del logo-->

            <!--Aqui empieza el formulario del login-->
            <form @submit.prevent="Login">
                <input type="text" placeholder="Email" v-model="email">
                <input type="password" placeholder="Contraseña" v-model="password">
                <input type="submit" value="Iniciar Sesión">
                <p>¿No tienes una cuenta? <router-link to="/register">Registrate aquí</router-link></p>
            </form>
            <!--Aqui termina el formulario del login-->
        </div>
        <!--Aqui empieza el boton de login con gmail-->
        <div class="logInGoogle">
            <button @click="LoginG">Inicia sesion aquí con tu cuenta Google</button>
        </div>
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

