<template>
    <div class="container">
        <form @submit="updateProfile">
            <div class="row">
                <div class="col" style="height: 100px;">
                    <img :src="image" alt="" srcset="" style="width: 100px;height: 100px;border-radius: 50%;">
                </div>
                <div class="col">
                    <h1>{{ name }}</h1>
                    <p>Some quick example text to build on the card and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <input type="text" name="" id="username" v-bind:placeholder="name">
                </div>
                <div class="col">
                    <input type="text" name="" id="year" v-bind:placeholder="year">
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <input type="text" name="" id="mobile" v-bind:placeholder="mobile">
                </div>
                <div class="col">
                    <input type="text" name="" id="email" v-bind:placeholder="email">
                </div>
            </div>
            
        </form>
    </div>
</template>
<style scoped>
input {
    margin: 5px;
}
</style>
<script>
export default {
    data(){
        return {
            name: '',
            year: '',
            mobile: '',
            email: '',
            image: ''
        };
    },
    methods: {
        updateProfile() {

        },
        getProfile() {
            let userdata = JSON.parse(localStorage.getItem("user"));
            this.name = userdata.data.user.name;
            this.year = userdata.data.user.year;
            this.mobile = userdata.data.user.mobile;
            this.email = userdata.data.user.email;
            this.image = userdata.data.user.image;

        },
    },
    created() {
        this.getProfile();
    },
}
</script>