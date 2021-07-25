<template>
    <div>
        <div>
            <h1>Complaints</h1>
        </div>
        <b-list-group v-for="com in result" :key="com.id">
            <b-list-group-item>
                <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
                    <b-card-text>
                        <h4>{{ com.userName }}</h4>
                        <h6>{{ com.title }}</h6>
                        <p>{{ com.description }}</p>
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
            roleId: null,
            token: '',
            pageNo: '1',
            itemsPerPage: '20',
            searchText: '',
            result: []
        }
    },
    methods: {
        getNotSolvedComplaints(){
            this.getInfo();
            axios({
                method: 'get',
                url: 'http://graduationproject1.zahran4it.com/api/Complaint/AllNotSolvedComplaints',
                params: {
                    PageNo : this.pageNo,
                    ItemsPerPage : this.itemsPerPage,
                    SearchText : this.searchText
                },
                headers: {'Authorization' : `Bearer ${this.token}`}
           }).then(res =>{
                this.result = res.data.data.result;
            });
        },
        getInfo(){
            let userdata = JSON.parse(localStorage.getItem("user"));
            this.token = userdata.data.token;
            this.roleId = userdata.data.user.roleId;
        }
    },
    created() {
        this.getNotSolvedComplaints();
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

</style>