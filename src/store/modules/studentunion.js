// import axios from "axios";
// // import user from 'user'
// const state = {
//     stUnion: []
// };
// const getters = {
//     getStUnion: (state) => state.stUnion
// };
// const actions = {
//     async fetchStUnion({ commit }){
//         let userdata = JSON.parse(localStorage.getItem("user"));
//         let token = userdata.data.token;
//         const response = await axios({
//             method: 'get',
//             url: 'http://graduationproject1.zahran4it.com/api/StudentUnion',
//             headers: {'Authorization':`Bearer ${token}`},
//         });
//         console.log(response.data);
//         commit('setStUnion', response.data);
//     }
// };
// const mutations= {
//     setStUnion: (state, stUnion) => (state.stUnion = stUnion)
// };

// export default {
//     state,
//     getters,
//     actions,
//     mutations
// }