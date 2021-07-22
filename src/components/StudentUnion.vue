<template>
    <div class="container">
        <h1>Student Union</h1>
        <b-card-group>
            <b-card>
                <div id="position-title">President</div>
                <b-card img-src="https://placekitten.com/1000/1000" img-alt="Card image" img-top>
                    <b-card-text>
                        <p>Aya</p>
                        Some quick example text to build on the card and make up the bulk of the card's content.
                    </b-card-text>
                </b-card>
            </b-card>
            
            <b-card>
                <div id="position-title">Vice-President</div>
                <b-card img-src="https://placekitten.com/1000/1000" img-alt="Card image" img-top>
                    <b-card-text>
                        <p>Arwa</p>
                        Some quick example text to build on the card and make up the bulk of the card's content.
                    </b-card-text>
                </b-card>
            </b-card>

            <b-card>
                <div id="position-title">Treasurer</div>
                <b-card img-src="https://placekitten.com/1000/1000" img-alt="Card image" img-top>
                    <b-card-text>
                        <p>Rawan</p>
                        Some quick example text to build on the card and make up the bulk of the card's content.
                    </b-card-text>
                </b-card>
            </b-card>

            
            
        </b-card-group>
    </div>
</template>
<style scoped>
h1 {
    font-size: 24px;
}
.card {
    /* width: 30% !important; */
    border: 1px solid #ddd !important;
    border-radius: 5px !important;
    margin: 5px;
}
img {
    border-radius: 50% !important;
    margin: 5px;
    padding: 5px;
}
#position-title {
    background-color: #a7cff7;
    padding: 5px 0px;
    margin: 5px 0px;
    border: 1px solid #a7cff7;
    border-radius: 5px;
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