const appHello = Vue.createApp({
    data(){
        return {
            hello: 'Ciao! Questa è la prima cosa che ho creato con Vue.js',
            imgSRC: 'https://picsum.photos/500/300',
        }
    }
})

appHello.mount("#appHello");