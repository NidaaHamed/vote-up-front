<template>
    <div class="container">
        <h1>Candidates</h1>
        <b-container class="bv-example-row mb-3">
            <b-row cols="3">
                <b-card-group v-for="can in candidates" :key="can.id">
                    <b-card class="bg-secondary">
                        <div id="position-title">{{ can.commissionName }}</div>
                        <b-card :img-src="can.userImage" img-alt="Card image" img-top>
                            <b-card-text>
                                <p>{{ can.userName }}</p>
                            </b-card-text>
                        </b-card>
                    </b-card>
                </b-card-group>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            token:'',
            electionId: '',
            PageNo: 1,
            ItemsPerPage: 100,
            SearchText: '',
            candidates: []
        }
    },
    methods: {
        getAllCandidates(){
            axios({
                method: 'get',
                url: 'http://graduationproject1.zahran4it.com/api/Candidate/AllCandidates',
                params: {
                    electionId: this.electionId,
                    PageNo: this.PageNo,
                    ItemsPerPage: this.ItemsPerPage,
                    SearchText: this.SearchText
                },
                headers: {'Authorization':`Bearer ${this.token}`}
            })
            .then(res => {
                console.log(res.data);
                this.candidates = res.data.data.result;
            });
        },
        getWaitingCandidates(){
            axios({
                method: 'get',
                url: 'http://graduationproject1.zahran4it.com/api/Candidate/WaitingCandidate',
                params: {
                    electionId: this.electionId,
                    
                }
            })
            .then(res => {
                console.log(res.data);
            });
        },
        getInfo(){
            let userdata = JSON.parse(localStorage.getItem('user'));
            this.electionId = userdata.data.electionId;
            this.token = userdata.data.token;
       },
       getCommissions(candidates){
           for(const can in candidates){
               this.commissions+=can.commissionName;
           }
           console.log(this.commissions);
       }
        
    },
    created() {
        this.getInfo();
        this.getAllCandidates();
    },
    
}
</script>


<style scoped>
h1 {
    font-size: 24px;
}
.card {
    /* width: 30% !important; */
    border: 1px solid #ddd !important;
    border-radius: 5px !important;
    margin: 5px;
}
img {
    border-radius: 50% !important;
    margin: 5px;
    padding: 5px;
    height: 175px;
}
#position-title {
    background-color: #a7cff7;
    padding: 5px 0px;
    margin: 5px 0px;
    border: 1px solid #a7cff7;
    border-radius: 5px;
}
</style>
