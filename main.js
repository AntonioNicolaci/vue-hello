const appHello = Vue.createApp({
    data(){
        return {
            hello: 'Ciao! Questa è la prima cosa che ho creato con Vue.js',
        }
    }
    
});

// const appImg = Vue.createApp({
//     data(){
//         return {
//         img: 'https://picsum.photos/200/300',
//         }
//     }
// })

appHello.mount("#appHello");
// appImg.mount("#appImg");