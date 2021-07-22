<template>
    <div class="container">
        <form @submit="updateProfile">
            <div class="row">
                <div class="col" style="height: 100px;">
                    <img src="https://placekitten.com/100/100" alt="" srcset="" style="border-radius: 50%;">
                </div>
                <div class="col">
                    <h1>{{ username }}</h1>
                    <p>Some quick example text to build on the card and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <input type="text" name="" id="username" placeholder="Jaber">
                </div>
                <div class="col">
                    <input type="text" name="" id="year" placeholder="third year">
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <input type="text" name="" id="mobile" placeholder="Mobile">
                </div>
                <div class="col">
                    <input type="text" name="" id="email" placeholder="Email">
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
            username: 'Jaber'
        };
    }
    ,methods: {
        updateProfile(){

        }
    }
}
</script>