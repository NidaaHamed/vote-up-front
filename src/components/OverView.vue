<template>
    <div class="container posts-content">
        <div v-for="post in posts" :key="post.id" class="row">
            <div style="width: 80%;margin:auto;">
                <div class="card mb-4">
                <div class="card-body">
                    <div class="media mb-3 d-flex">
                    <img :src="post.userImage" class="d-block ui-w-50 rounded-circle" alt="">
                    <div class="media-body ml-3">
                        {{ post.userName }}
                        <div class="text-muted small">{{ post.date }}</div>
                    </div>
                    </div>
                
                    <p>{{ post.text }}</p>
                    <img :src="post.images[0]" alt="" style="width:90%;"> 
                </div>
                <div class="card-footer d-flex" style="justify-content: space-around;">
                    <a class="d-inline-block text-muted">
                        <i class="far fa-thumbs-up"></i> Like
                    </a>
                    <a class="d-inline-block text-muted ml-3">
                        <i class="far fa-comments"></i> Comment
                    </a>
                    
                </div>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return {
            pageNo: 1,
            itemsPerPage: '100',
            searchText: '',
            allPages: null,
            posts: []
        };
    },
    methods: {
        getAllPosts() {
            let token = this.getToken();
                axios({
                    method: 'get',
                    url: 'http://graduationproject1.zahran4it.com/api/Posts/AllPosts',
                    params: {
                        PageNo: this.pageNo,
                        ItemsPerPage: this.itemsPerPage,
                        SearchText: this.searchText
                    },
                    headers: {'Authorization':`Bearer ${token}`},
                }).then(res => {
                    console.log(res.data);
                    this.posts = res.data.data.result;
                    console.log(this.posts);
                });
        },
         getToken() {
            let userdata = JSON.parse(localStorage.getItem("user"));
            let token = userdata.data.token;
            return token;
        },
    },
    created() {
        this.getAllPosts();
    },
}
</script>
<style scoped>
body {
    background:#eee;
}
.posts-content{
    margin-top:20px;    
}
.ui-w-50 {
    width: 50px !important;
    height: 50px !important;
}
.default-style .ui-bordered {
    border: 1px solid rgba(24,28,33,0.06);
}
.ui-bg-cover {
    background-color: transparent;
    background-position: center center;
    background-size: cover;
}
.ui-rect {
    padding-top: 50% !important;
}
.ui-rect, .ui-rect-30, .ui-rect-60, .ui-rect-67, .ui-rect-75 {
    position: relative !important;
    display: block !important;
    padding-top: 100% !important;
    width: 100% !important;
}
.d-flex, .d-inline-flex, .media, .media>:not(.media-body), .jumbotron, .card {
    -ms-flex-negative: 1;
    flex-shrink: 1;
}
.bg-dark {
    background-color: rgba(24,28,33,0.9) !important;
}
.card-footer, .card hr {
    border-color: rgba(24,28,33,0.06);
}
.ui-rect-content {
    position: absolute !important;
    top: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    left: 0 !important;
}
.default-style .ui-bordered {
    border: 1px solid rgba(24,28,33,0.06);
}
a {
    text-decoration: none;
}

</style>