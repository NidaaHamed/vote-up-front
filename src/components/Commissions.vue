<template>
    <div class="container">
        <b-card img-src="https://placekitten.com/150/150" img-alt="Card image" img-left class="mb-3">
            <b-card-text>
                <h4>Committee of families</h4>
                <p>The activity of families aims to :- Closer links between students. - Closer links between students and teachers. - Development of the ability to cooperate and work in groups. - Develop the capacity to take responsibility. </p>
            </b-card-text>
        </b-card>
        <b-card img-src="https://placekitten.com/150/150" img-alt="Card image" img-left class="mb-3">
            <b-card-text>
                <h4>Committee for the sports activity</h4>
                <p>Sports activity aims to :
                - Spread sports spirit among students and encourage sports talent and work on their development.
                - Development of team spirit and sense of responsibility and discretion and self-satisfaction.
                - Helping students acquire the skills and individual sports and the practice of healthy living.</p>
            </b-card-text>
        </b-card>
        <b-card img-src="https://placekitten.com/150/150" img-alt="Card image" img-left class="mb-3">
            <b-card-text>
                <h4>Committee for cultural activity</h4>
                <p>Cultural activities aim to:
- The development of literary and poetic talent among students.
- To develop the ability to write right through the wall magazines and other types of magazines.
- Foster a spirit of cooperation among students and increase their capacity for collective action.  </p>
            </b-card-text>
        </b-card>
        <b-card img-src="https://placekitten.com/150/150" img-alt="Card image" img-left class="mb-3">
            <b-card-text>
                <h4>Committee for artistic activity</h4>
                <p> Artistic activity aims to : - Discover to the artistic talents of students and their development. - Spent Leisure time properly, fruitful and useful in the hills during the concerts, plays .. Etc.. - Feeling students a sense of national events, and opportunities to express. </p>
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            
        }
    },
    methods: {
        getCommissions(){
            axios({
                method: 'get',
                url: 'http://graduationproject1.zahran4it.com/api/Candidate/Commissions',
            }).then(res =>{
                console.log(res.data);
            });
        }
    }
}
</script>