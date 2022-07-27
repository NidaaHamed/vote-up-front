<template>
    <div class="container">
        <b-button variant="info" @click="startElection">Start Election</b-button>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return {
            token: '',
            roleId: ''

        };
    },
    methods: {
        startElection(){
            this.getInfo();
            axios({
                method: 'post',
                url: 'http://graduationproject1.zahran4it.com/api/Election/StartElection',
                data: {
                    startRequest : '',
                    endRequest : '',
                    startVoting : '',
                    endVoting : ''
                },
                headers: {'Authorization' : `Bearer ${this.token}`}
            }).then(res => {
                console.log(res.data);
            });
        },
        getInfo(){
            let userdata = JSON.parse(localStorage.getItem("user"));
            this.token = userdata.data.token;
            this.roleId = userdata.data.user.roleId;
        }

    }
}
</script>
<style scoped>

</style>