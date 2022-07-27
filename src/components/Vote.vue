<template>
    <div>
        <div>
            <h1>Vote</h1>
        </div>
        <b-form-group v-slot="{ ariaDescribedby }" @submit="vote">
            <b-list-group v-for="com in details" :key="com.commissionId" style="border: 1px solid #eee;border-radius:5px;">
                    <b-form-group @submit="verify">
                        <div id="position-title">{{ com.commissionName }}</div>
                        <b-list-group-item v-for="can in com.candidates" :key="can.userId">
                            <b-card :img-src="can.userImage" img-alt="Card image" img-left class="mb-3">
                                <b-card-text>
                                    <p>{{ can.userName }} , Year: {{ can.userYear }}</p>
                                    <b-form-radio v-model="userId" :aria-describedby="ariaDescribedby" :value="can.userId" @select="increment"></b-form-radio>
                                </b-card-text>
                            </b-card>
                        </b-list-group-item>
                        <b-button variant="info" type="submit">verify</b-button>
                    </b-form-group>
            </b-list-group>
            <b-button variant="success" type="submit">Send</b-button>
        </b-form-group>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return {
            i: 0,
            userId: '',
            token: '',
            year: null,
            details: [],
            voterId: '',
            electionId: '',
            votes: []
        };
    },
    methods: {
        getStudentUnion() {
            this.getToken();
            axios({
                method: 'get',
                url: 'http://graduationproject1.zahran4it.com/api/StudentUnion',
                headers: {'Authorization':`Bearer ${this.token}`},
            }).then(res => {
                let stUnion = res.data;
                console.log(stUnion);
                this.electionId = stUnion.data.electionId
                this.year = stUnion.data.year;
                this.details = stUnion.data.details;
                this.prepVotes(this.details);
            });
        },
        prepVotes(details) {
            const preVotes = []
            for(const com in details){
                preVotes.push({userId: '',commissionId: com.commissionId});
            }
            this.votes = preVotes;
        },
        vote(event){
            event.preventDefault();
            axios({
                method: 'post',
                url: 'http://graduationproject1.zahran4it.com/api/Voting/Voting',
                data: {
                    voterId: this.voterId,
                    electionId: this.electionId,
                    votes: []
                },
                headers: {'Authorization' : `Bearer ${this.token}`},
            }).then(res => {
                console.log(res.data)
            })
        },
        verify(e){
            e.preventDefault();
            this.votes[this.i].userId=this.userId;
            this.i = this.i + 1;  
        },
         getToken() {
            let userdata = JSON.parse(localStorage.getItem("user"));
            this.token = userdata.data.token;
            this.voterId = userdata.data.user.id;
        },
    },
    created() {
       this.getStudentUnion();
    },
}
</script>
<style scoped>
h1 {
    font-size: 24px;
}
.list-group {
    border: 1px solid #a7cff7 !important;
    border-radius: 5px;
    width: 60%;
    margin: auto;
    padding: 5px;
}
#position-title {
    background-color: #a7cff7;
    padding: 5px 0px;
    margin: 5px 0px;
    border: 1px solid #a7cff7;
    border-radius: 5px;
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
