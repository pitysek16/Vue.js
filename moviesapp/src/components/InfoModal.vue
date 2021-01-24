<template>
    <div class="movie-info-wrapp">
        <header class="movie-info-header">
            <h6 class="movie-header-title">More information about "{{ movie.Title }}"</h6>
        </header>
        <div class="movie-info-content">
            <b-row>
                <b-col sm="4">
                    <div class="movie-poster-wrap mb-3">
                        <div class="movie-poster" :style="posterStyle"></div>
                    </div>
                </b-col>
                <b-col sm="8" class="">
                    <h3 class="movie-title">{{ movie.Title }}</h3>
                     <b-form-rating v-model="movie.imdbRating" variant="warning" stars="10" readonly show-value precision="1" no-border show-value-max class="movie-rating" ></b-form-rating>
                     <p class="movie-desription">{{ movie.Plot }}</p>
                     <div class="mt-3 mb-4">
                        <b-badge variant="info" class="mr-2">{{ movie.Year }}</b-badge>
                        <b-badge variant="info" class="mr-2">{{ movie.Runtime }}</b-badge>
                        <b-badge variant="info" class="mr-2">{{ movie.Genre }}</b-badge>
                        <b-badge variant="info" class="mr-2">{{ movie.Language }}</b-badge>
                    </div>
                    <table class="table small">
                        <tbody>
                        <tr>
                            <th>Production</th>
                            <td>{{ movie.Production }}</td>
                        </tr>
                        <tr>
                            <th>Country</th>
                            <td>{{ movie.Country }}</td>
                        </tr>
                        <tr>
                            <th>Director</th>
                            <td>{{ movie.Director }}</td>
                        </tr>
                        <tr>
                            <th>Writer</th>
                            <td>{{ movie.Writer }}</td>
                        </tr>
                        <tr>
                            <th>Actors</th>
                            <td>{{ movie.Actors }}</td>
                        </tr>
                        <tr>
                            <th>Awards</th>
                            <td>{{ movie.Awards }}</td>
                        </tr>
                        </tbody>
                    </table>
                </b-col>
            </b-row>
        </div>

    </div>
</template>

<script>
export default {
    name: 'ModalInfoContent',
    props: {
        movie: {
            type: Object,
            required: true
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
            return this.movie ? `url(${this.movie.Poster})` : this.defaultBg
        }
    }
}
</script>

<style scoped>

.movie-info-header {
   padding: 10px;
   background: #343a40;
   color: #fff
}
.movie-info-content {
    background: #fff;
    padding: 10px;
}
.movie-poster-wrap {
    position: relative;
    padding-bottom: 150%;
    border-radius: 5px;
    overflow: hidden;
    transition: .2s linear;
}
.movie-poster {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: cover
}
.movie-title {
    font-weight: 300;
    font-size: 40px
}
.movie-rating{
    padding: 0
}
.movie-rating :focus{
    outline: none;
}
.movie-rating >>> .b-rating-star,
.movie-rating >>> .b-rating-value {
    justify-content: flex-start;
    flex-grow: 0!important;
    font-size: 15px;
    padding: 0;
}
.movie-rating >>> .b-rating-star + .b-rating-star {
    margin-left: 5px
}
.movie-rating >>> .b-rating-value {
    margin-left: 10px
}

</style>