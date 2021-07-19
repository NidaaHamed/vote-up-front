<template>
    <div class="container">
        <b-card-group class="row">
            <b-card img-src="https://placekitten.com/1000/1000" img-alt="Card image" img-top>
                <b-card-text>
                    <p>Aya</p>
                    Some quick example text to build on the card and make up the bulk of the card's content.
                </b-card-text>
            </b-card>
            <b-card img-src="https://placekitten.com/1000/1000" img-alt="Card image" img-top>
                <b-card-text>
                    <p>Arwa</p>
                Some quick example text to build on the card and make up the bulk of the card's content.
                </b-card-text>
            </b-card>
            <b-card img-src="https://placekitten.com/1000/1000" img-alt="Card image" img-top>
                <b-card-text>
                    <p>Basma</p>
                Some quick example text to build on the card and make up the bulk of the card's content.
                </b-card-text>
            </b-card>
        </b-card-group>
    </div>
</template>
<style scoped>
.card {
    width: 30% !important;
    border: 1px solid #ddd !important;
    border-radius: 5px !important;
    margin: 5px;
}
img {
    border-radius: 50% !important;
    margin: 5px;
    padding: 5px;
}
</style>
<script>
import axios from 'axios'
export default {
    methods: {
        getStudentUnion() {
            axios({
                method: 'get',
                url: 'http://graduationproject1.zahran4it.com/api/StudentUnion',
            }).then(res => {
                console.log(res.data);
            });
        }
    }
}
</script>