<template>
    <div class="container">
        <div class="row">
            <h1>Results</h1>
        </div>
        <div class="row">
            <b-card-group style="margin: 5px;">
                <b-card bg-variant="success" text-variant="white" header="All Voters" class="text-center" align="center">
                    <b-card-text>{{ allVoters }}</b-card-text>
                </b-card>

                <b-card bg-variant="warning" text-variant="white" header="Voted" class="text-center">
                    <b-card-text>{{ voted }}</b-card-text>
                </b-card>

                <b-card bg-variant="danger" text-variant="white" header="Not Voted" class="text-center">
                    <b-card-text>{{ notVoted }}</b-card-text>
                </b-card>
            </b-card-group>
        </div>
        <div class="row">
            <b-card-group style="margin: 5px;">
                <b-col col="3" v-for="com in details" :key="com.commissionId">
                    <b-card bg-variant="light" text-variant="dark" :header="com.commissionName" class="text-center" align="center">
                        <b-card-text>
                            <b-list-group style="max-width: 300px;" v-for="can in com.candidates" :key="can.userId">
                                <b-list-group-item class="d-flex align-items-center">
                                    <b-avatar class="mr-3"></b-avatar>
                                    <span>{{can.userName}}</span>
                                    <b-badge>{{can.votes}}</b-badge>
                                </b-list-group-item>
                            </b-list-group>
                        </b-card-text>
                    </b-card>
                </b-col>
            </b-card-group>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data (){
        return {
            allVoters: null,
            voted: null,
            notVoted: null,
            details: []
        };
    },
    methods: {
        getAllElections() {
            axios({
                method: 'get',
                url: 'http://graduationproject1.zahran4it.com/api/Election/currentElection',
                headers: {'Authorization':`Bearer ${this.token}`}
            })
            .then(res => {
                this.allVoters = res.data.data.allVoters;
                this.voted = res.data.data.voted;
                this.notVoted = res.data.data.notVoted;
                this.details = res.data.data.details;
            });
        },
        getInfo(){
            let userdata = JSON.parse(localStorage.getItem('user'));
            this.electionId = userdata.data.electionId;
            this.token = userdata.data.token;
       }
    },
    created() {
        this.getInfo();
        this.getAllElections();
    },
    
}
</script>
<style scoped>
.card {
    margin: 20px;
    border-radius: 10px !important;
}
.badge {
    background-color: #aaa;
    
}
</style>