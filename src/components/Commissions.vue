<template>
    <div class="container">
        <div v-if="roleId==1||roleId==2">
            <b-button variant="success" @click="addCommittee">Add Committee</b-button>
        </div>
        <b-card-group v-for="com in result" :key="com.id">
            <b-card img-src="https://placekitten.com/150/150" img-alt="Card image" img-left class="mb-3">
                <b-card-text>
                    <h4>{{ com.name }}</h4>
                    <p>{{ com.description }}</p>
                </b-card-text>
            </b-card>
        </b-card-group>
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
        getAllCommissions(){
            this.getInfo();
            axios({
                method: 'get',
                url: 'http://graduationproject1.zahran4it.com/api/Commission/AllCommission',
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
        addCommittee(){

        },
        getInfo(){
            let userdata = JSON.parse(localStorage.getItem("user"));
            this.token = userdata.data.token;
            this.roleId = userdata.data.user.roleId;
        }
    },
    created() {
        this.getAllCommissions();
    },
}
</script>