<template>
    <div>
       
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