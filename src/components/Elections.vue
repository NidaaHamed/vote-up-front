<template>
    <div>
        <router-view></router-view>
        <!-- <div  v-if="electionId==null">
            <election-manager></election-manager>
        </div>
        <div v-else>
            <election-results></election-results>
        </div> -->
    </div>
</template>
<script>
import router from '../router';
// import ElectionManager from '../components/ElectionManager.vue';
// import ElectionResults from '../components/ElectionResults.vue';
export default {
    // components: {
    //     ElectionManager,
    //     ElectionResults
    // },
    data() {
        return {
            token: '',
            electionId: '',
        };
    },
    methods: {
         getInfo() {
            let userdata = JSON.parse(localStorage.getItem("user"));
            this.token = userdata.data.token;
            this.electionId = userdata.data.electionId;

        },
        pushview(){
            if(this.electionId==null){
                router.push('/electionManager');
            }else{
                router.push('/electionResults');
            }
        }
    },
     created() {
        this.getInfo();
        this.pushview();
     },
}
</script>