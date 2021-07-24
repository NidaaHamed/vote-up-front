<template>
    <div>
        <div>
            <h1>Vote</h1>
        </div>
        <b-list-group style="border: 1px solid #eee;border-radius:5px;">
            <div id="position-title">President</div>
            <b-form-group v-slot="{ ariaDescribedby }">
                <b-list-group-item>
                    <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
                        <b-card-text>
                            <p>Ahmed</p>
                            <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" value="Ahmed"></b-form-radio>
                        </b-card-text>
                    </b-card>
                </b-list-group-item>
                <b-list-group-item>
                    <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
                        <b-card-text>
                            <p>Sayed</p>
                            <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" value="Sayed"></b-form-radio>
                        </b-card-text>
                    </b-card>
                </b-list-group-item>
                <b-list-group-item>
                    <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
                        <b-card-text>
                            <p>Amr</p>
                            <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" value="Amr"></b-form-radio>
                        </b-card-text>
                    </b-card>
                </b-list-group-item>
                <b-list-group-item>
                    <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
                        <b-card-text>
                            <p>Waeel</p>
                            <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" value="Waeel"></b-form-radio>
                        </b-card-text>
                    </b-card>
                </b-list-group-item>
            </b-form-group>
       </b-list-group>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return {
            selected: '',
            voterId: '',
            electionId: '',
            votes: [
                {
                userId: '',
                commissionId: ''
                }
            ]
        };
    },
    methods: {
        vote(event){
            event.preventDefault();
            let token = this.getToken();
            axios({
                method: 'post',
                url: '',
                data: {
                    voterId: this.voterId,
                    electionId: this.electionId,
                    votes: [
                        {
                        userId: this.votes.userId,
                        commissionId: this.votes.commissionId
                        }
                    ]
                },
                headers: {'Authorization' : `Bearer ${token}`},
            }).then(res => {
                console.log(res.data)
            })
        },
         getToken() {
            let userdata = JSON.parse(localStorage.getItem("user"));
            let token = userdata.data.token;
            return token;
        },
    }
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