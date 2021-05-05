<template>

  <router-view/>
</template> 

<script>
import {onBeforeMount} from 'vue';
import { useRouter,useRoute} from 'vue-router';
import firebase from 'firebase';
import "./assets/css/secon.css";


export default {
  setup(){
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(()=>{
      firebase.auth().onAuthStateChanged((user) =>{
        if(!user){
          router.replace('/login');
        }else if(route.path=="/login"||route.path=="/register"){
          router.replace('/');
        }
      })
    });
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: "CodeNext";
  src: local("CodeNext"),
  url(./fonts/CodeNext-SemiBold.ttf) format("truetype");
}
@font-face {
  font-family: "CodeNextItalic";
  src: local("CodeNextItalic"),
  url(./fonts/CodeNext-SemiBoldItalic.ttf) format("truetype");
}


#app{
  font-family: Avenir,Arial, Helvetica, Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing:grayscale;
  text-align: center;
}
a{
  color:inherit;
}
</style>
