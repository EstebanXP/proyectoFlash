<template>
    <div class="reminderEvents">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="h1Reminder">{{nameReminder}}</h1>
                </div>
            </div>
            <div class="row">
                <p class="pReminder">{{dayReminder}}</p>
            </div>
            <div class="row down-reminder">
                <div class="col-9">
                    <h1 class="hourReminder">{{hourReminder}}</h1>
                </div>
                <div class="col-1">
                    <img class="status"  src="../assets/ui-elements/status-done@2x.png" alt="">
                </div>
                <div class="col-1">
                    <img class="arr-down arr-up-down"  src="../assets/ui-elements/Icon-Bin@2x.png" alt="">
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import firebase from 'firebase';
export default{
    
    props: ['nameReminder'],
    data(){
        return{
            
        }

    },
    methods:{

    },

    setup(){
        
        var dayReminder = 'lunes';
        var hourReminder = '12:00';

        const getUser=()=>{
            console.log(firebase.auth().currentUser.uid);
        }
        getUser();
        return{
            
            dayReminder,
            hourReminder,
            getUser,
        }
    },
    
    
}


</script>
