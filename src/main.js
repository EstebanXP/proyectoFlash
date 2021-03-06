import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import './assets/css/main.css'
import  {ref,onUnmounted} from 'vue';

const firebaseConfig = {
    apiKey: "AIzaSyA1AHqjm0mQxyGRzgyAePdmL0DW6iqdBN4",
    authDomain: "flash-85bad.firebaseapp.com",
    projectId: "flash-85bad",
    storageBucket: "flash-85bad.appspot.com",
    messagingSenderId: "868891639608",
    appId: "1:868891639608:web:ef7cf7c174bb4a47e58bcd"
};

firebase.initializeApp(firebaseConfig);

export const bdd = firebase.firestore();

export const loadRercords = (idU)=>{
    const arre =ref([]);
    const close = bdd.collection('usuarios').doc(idU).collection('recordatorios').orderBy("fecha").onSnapshot(snapshot =>{
        arre.value =snapshot.docs.map(doc=>({id: doc.id, ...doc.data()}))
    })
    onUnmounted(close);
    return arre;
}

let app;
firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App).use(router).mount('#app');
    }
})