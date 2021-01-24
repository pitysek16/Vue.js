<template>
    <div class="poster-page-bg" :style="posterStyle">

    </div>
</template>

<script>
export default {
    name: "PosterBg",
    props: {
        poster: {
            type: String,
            default: ''
        }
    },
    data: () => ({
        defaultBg: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'
    }),
    computed: {
        posterStyle(){
            return {
                'background-image': this.posterBg
            }
        },
        posterBg() {
            return this.poster ? `url(${this.poster})` : this.defaultBg
        }
    }
}

</script>

<style scoped>
    .poster-page-bg {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;        
        background-position: center;
        background-size: cover;
        transition: all .2s linear;
    }
     .poster-page-bg:before {
         position: absolute;
         content: '';
         top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
        opacity: 0.7
     }
</style>