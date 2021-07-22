<template>
    <div class="container p-5">
        <h1>Write Post</h1>
        <div style="width: 80%;padding:15px;margin:auto;">
            <b-form @submit="addPost">
                <b-form-textarea
                    id="textarea"
                    v-model="post"
                    placeholder="Enter something..."
                    rows="3"
                    max-rows="6"
                ></b-form-textarea>
                <b-form-file
                    v-model="images"
                    placeholder="Choose a img or drop it here..."
                    drop-placeholder="Drop img here..."
                    accept="image/*"
                    class="mt-3"
                ></b-form-file>
                
                <b-button type="submit" variant="success" class="mt-3">Add Post</b-button>
            </b-form>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            post: '',
            userId: '',
            images: []
        };
    },
    methods: {
        addPost(event) {
            event.preventDefault();
            console.log(this.post);
            axios({
                method: 'post',
                url: 'http://graduationproject1.zahran4it.com/api/Posts/AddPost',
                data: {
                    id: '',
                    text: this.post,
                    userId: this.userId,
                    images: ['']
                }
            }).then(res => {
                console.log(res.data);
            });
        },
    },
    created() {
        let userdata = JSON.parse(localStorage.getItem("user"));
        this.userId = userdata.data.user.id;
        console.log("user id : "+this.userId);
    },

}
</script>