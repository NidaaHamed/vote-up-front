<template>
    <div>
        <router-view></router-view>
       
    </div>
</template>
<script>
import router from '../router';

export default {
  
    data() {
        return {
            token: '',
            electionId: '',
        };
    },
    methods: {
         getInfo() {
            let userdata = JSON.parse(localStorage.getItem("user"));
            this.token = userdata.data.token;
            this.electionId = userdata.data.electionId;

        },
        pushview(){
            if(this.electionId==null){
                router.push('/electionManager');
            }else{
                router.push('/electionResults');
            }
        }
    },
     created() {
        this.getInfo();
        this.pushview();
     },
}
</script>