<template>
    <div class="budget-list-wrap">
        <ElCard :header="header">
            <template v-if="!isEmpty">
               <BudgetListItem  v-for="(item, prop) in list" :key="prop" :list="list" :item="item" @deleteItem="onDeleteItem"/>
            </template>
            <ElAlert v-else type="info" :title="emptyTitle" :closable="false"/>
        </ElCard>
    </div>
</template>

<script>
import BudgetListItem from '@/components/BudgetListItem';

export default {
    name: "BudgetList",
    components: {
        BudgetListItem
    },
    props: {
        list: {
            type: Object,
            default: () => ({})
        },
        colorComment: {
            type:String,
            default: ''
        }
    },
    data: () => ({
        header: "Budget List",
        emptyTitle: "Empty List",
    }),
    computed: {
        isEmpty() {
            return !Object.keys(this.list).length;
        }
    },
     methods: {
            onDeleteItem(id) {
            this.$delete(this.list, id)
        },
    }
}
</script>

<style scoped>
.budget-list-wrap {
    max-width: 500px;
    margin: auto;
}
</style>