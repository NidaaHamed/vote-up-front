<template>
    <div>
       <div>
           <b-list-group v-for="com in details" :key="com.commissionId" style="border: 1px solid #eee;border-radius:5px;">
                <div id="position-title">{{ com.commissionName }}</div>
                <b-list-group-item v-for="can in com.candidates" :key="can.userId">
                    <b-card :img-src="can.userImage" img-alt="Card image" img-left class="mb-3">
                        <b-card-text>
                            <p>{{ can.userName }} , Year: {{ can.userYear }}</p>

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
            token: '',
            electionId: '',
            year: null,
            details: []
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
            });
        },
         getToken() {
            let userdata = JSON.parse(localStorage.getItem("user"));
            this.token = userdata.data.token;
        },
    },
     created() {
     this.getStudentUnion();
     },
}
</script>
<style scoped>
.list-group {
    border: 1px solid #a7cff7 !important;
    border-radius: 5px;
    width: 100%;
    margin: 0 auto 20px;
    padding: 5px;
    background-color: #fff;
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




