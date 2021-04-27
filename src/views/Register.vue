<template>
<div class="container-fluid gradient back"> 
    <div class="register">
        <!-- Esta es la parte de arriba del registro, donde dice registro-->
        <h1>Registro</h1>

        <!--Aqui empieza el formulario del registro-->
        <form @submit.prevent="Register">
            <div class="container">
                <input type="text" placeholder="Email" v-model="email"/><br><br>
                <input type="password" placeholder="Password" v-model="password"/><br><br>
                <input type="submit" value="Register">
                <p>¿Ya tienes una cuenta?<router-link to="/Login"> Inicia sesion aquí</router-link></p>
            </div>
        </form>
        <!--Aqui termina el formulario del registro-->
    </div> 
</div>
    
</template> 

<script>
import firebase from 'firebase';
import {ref} from 'vue';
export default {
    setup() {
        const email=ref("");
        const password=ref("");
        //Esta es la funcion para registrar usuarios
        const Register = () =>{
            firebase
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
                .then(user=>{
                    alert(user);
                })
                .catch(err=>alert(err.message));
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

