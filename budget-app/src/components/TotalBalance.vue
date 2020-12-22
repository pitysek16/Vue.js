<template>
    <div class="total-value">Balance: {{ total }} </div>
</template>

<script>
export default {
    name: "TotalBalance",
    props: {
        total: {
            type: Number,
            default: 0
        }
    }
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