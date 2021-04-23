<template>
    <div class="register">
        <h1>Registro</h1>
        <form @submit.prevent="Register">
            <div class="container">
                <input type="text" placeholder="Email" v-model="email"/><br><br>
                <input type="password" placeholder="Password" v-model="password"/><br><br>
                <input type="submit" value="Register">
                <p>¿Ya tienes una cuenta?<router-link to="/Login"> Inicia sesion aquí</router-link></p>
            </div>
        </form>
    </div> 
</template> 

<script>
import firebase from 'firebase';
import {ref} from 'vue';
export default {
    setup() {
        const email=ref("");
        const password=ref("");
        
        const Register = () =>{
            firebase
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
                .then(user=>{
                    alert(user);
                })
                .catch(err=>alert(err.message));
        }

        return{
            Register,
            email,
            password
        }
    }
    
}
</script>

