<template>
    <!-- <div class="total-value" :style="{color: totalColor}">Total Balance: {{ total }} </div> -->
    <div class="total-value">Total Balance: <span :class="totalColor"><b>{{ total }}</b></span> </div>
</template>

<script>
export default {
    name: "TotalBalance",
    props: {
        total: {
            type: Number,
            default: 0
        },
        totalColor: {
            type: String,
            default: ''
        }
    },

}

</script>

<style scoped>
.total-value {
    font-size: 26;
    padding: 20px;
    text-align: center;
    text-transform: uppercase;
}
</style>