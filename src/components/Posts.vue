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
            token:'',
            post: '',
            userId: '',
            image: ''
        };
    },
    methods: {
        onFileSelected(event) {
            const selectedImg = event.target.files[0];
            const preview = document.querySelector('#img');
            var reader = new FileReader();
            console.log("next");
            
            reader.addEventListener("load",function () {
                preview.src = reader.result;
                this.image = reader.result.replace("data:", "")
                    .replace(/^.+,/, "");
                console.log(this.image);
            },false) ;
            reader.readAsDataURL(selectedImg);
        },
        addPost(event) {
            event.preventDefault();
            let img = this.image;
            let imgs = [];
            imgs.push(img);
            axios({
                method: 'post',
                url: 'http://graduationproject1.zahran4it.com/api/Posts/AddPost',
                data: {
                    id : '',
                    text : this.post,
                    userId : this.userId,
                    images : imgs
                },
                headers: {'Authorization' : `Bearer ${this.token}`}
            }).then(res => {
                console.log(res.data);
            });
        },
        getInfo(){
            let userdata = JSON.parse(localStorage.getItem("user"));
            this.userId = userdata.data.user.id;
            this.token = userdata.data.token;
            console.log(this.userId);
            console.log(this.token);
        }
    },
    created() {
        this.getInfo();
    },

}
</script>