<template>
    <div class="container">
        <div v-if="roleId==1">
            <b-button v-b-toggle.collapse-1 variant="success" style="margin-bottom: 10px;">Add Committee</b-button>
            <b-collapse id="collapse-1" class="mt-2">
                <b-card>
                    <!-- <b-form @submit="addCommittee" @reset="onReset">
                        <b-form-group
                            id="input-group-1"
                            label="Committee Name:"
                            label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            v-model="form.name"
                            placeholder="Enter Committee Name"
                            required
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-2" label="Description:" label-for="input-2">
                            <b-form-input
                            id="input-2"
                            v-model="form.desc"
                            placeholder="Enter Description"
                            required
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-3">
                            <input
                            style="display: none;"
                            type="file"
                            @change="onFileSelected"
                            ref="fileInput">
                            <a
                            type="button"
                            @click="$refs.fileInput.click()"
                            >
                            <i 
                            class="far fa-image"
                            style="font-size: 50px;
                                    color: #39f;
                                    float: left;
                                    margin-top: 10px;"
                            >
                            </i>
                            </a>
                            <img id="img" src="" height="200" alt="" style="display:block;">
                        </b-form-group>

                        <b-button type="submit" variant="primary">Submit</b-button>
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </b-form> -->
                </b-card>
            </b-collapse>
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
            result: [],
            // form: {
            //     name: '',
            //     desc: '',
            //     image: []
            // }
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