<template>
    <div>
        <div class="list-item"  :class="colorComment">
            <template>
                <span v-if="item.type === 'INCOME'"><i class="el-icon-top"></i> </span>
                <span v-else><i class="el-icon-bottom"></i> </span>
            </template>
            <span class="budget-comment"> {{ item.comment }} </span>
            <span class="budget-value"> {{ item.type === "OUTCOME" ? '-' + item.value : item.value }} </span>
            <ElButton type="danger" size="mini" @click="deleteItem(item.id)">Delete</ElButton>
        </div>
    </div>
</template>


<script>
export default {
    name: "BudgetListItem",
    props: {
        item: {
            type: Object,
            default: () => ({})
        },
    },
    methods: {
        deleteItem(id) {
            this.$emit('deleteItem', id)
        }
    },
    computed: {
        colorComment() {
            return (this.item.type === 'INCOME' ? 'green' : 'red')
        }
    }
}
</script>

<style scoped>
.list-item{
    display: flex;
    align-items: center;
    padding: 10px 15px;
}
.budget-value {
    font-weight: bold;
    margin-left: auto;
    margin-right: 20px;
}
</style>