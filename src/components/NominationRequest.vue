<template>
    <div>
        <div>
            <h1>Manage Nomination Requests</h1>
        </div>
        <b-list-group v-for="can in data" :key="can.id">
            <b-list-group-item>
                <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
                    <b-card-text>
                        <p>{{ can.userName }}</p>
                        <b-button-group>
                            <b-button variant="success" @click="accept(can.id)">Accept</b-button>
                            <b-button variant="warning" @click="refuse(can.id)">Ignore</b-button>
                        </b-button-group>
                    </b-card-text>
                </b-card>
            </b-list-group-item>
       </b-list-group>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            electionId: null,
            token: '',
            data: []
        }
    },
    methods: {
        getWaitingCandidate(){
            this.getInfo();
            axios({
                method: 'get',
                url: 'http://graduationproject1.zahran4it.com/api/Candidate/WaitingCandidate',
                params: {
                    electionId : this.electionId,
                },
                headers: {'Authorization' : `Bearer ${this.token}`}
           }).then(res =>{
                this.data = res.data.data;
            });
        },
        addCommittee(){

        },
        getInfo(){
            let userdata = JSON.parse(localStorage.getItem("user"));
            this.token = userdata.data.token;
            this.electionId = userdata.data.electionId;
        },
        accept(canId) {
            axios({
                method: 'put',
                url: 'http://graduationproject1.zahran4it.com/api/candidate/AcceptCandidate',
                params: {
                    id : canId,
                },
                headers: {'Authorization' : `Bearer ${this.token}`}
           }).then(res =>{
               console.log(res.data); 
            });
        },
        refuse(canId) {
            axios({
                method: 'put',
                url: 'http://graduationproject1.zahran4it.com/api/candidate/RefuseCandidate',
                params: {
                    id : canId,
                },
                headers: {'Authorization' : `Bearer ${this.token}`}
           }).then(res =>{
               console.log(res.data); 
            });
        }
    },
    created() {
        this.getWaitingCandidate();
    },
}
</script>
<style scoped>
h1 {
    font-size: 24px;
}
.list-group-item {
    height: 80px;
    padding: 8px 8px 9px 8px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
.card {
    height: 100%;
    border: none;
}
img {
    border-radius: 50% !important;
}
.card-text {
    display: flex;
    justify-content: space-between;
}
.card-text .btn {
    margin-right: 5px;
    border-radius: 5px !important;
}
</style>