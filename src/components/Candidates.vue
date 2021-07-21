<template>
    <div>
       <h1>Candidates</h1>
       <div>
           <b-list-group style="border: 1px solid #eee;border-radius:5px;">
                <div id="position-title">Commitee Name</div>
                <b-list-group-item>
                    <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
                        <b-card-text>
                            <p>Ahmed</p>
                        </b-card-text>
                    </b-card>
                </b-list-group-item>
                <b-list-group-item>
                    <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
                        <b-card-text>
                            <p>Sayed</p>
                        </b-card-text>
                    </b-card>
                </b-list-group-item>
                <b-list-group-item>
                    <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
                        <b-card-text>
                            <p>Amr</p>
                        </b-card-text>
                    </b-card>
                </b-list-group-item>
                <b-list-group-item>
                    <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
                        <b-card-text>
                            <p>Waeel</p>
                        </b-card-text>
                    </b-card>
                </b-list-group-item>
            </b-list-group>
       </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            electionId: '',
            PageNo: null,
            ItemsPerPage: null,
            SearchText: ''
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
                }
            })
            .then(res => {
                console.log(res.data);
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