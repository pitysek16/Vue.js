<template>
  <div id="app">
    <Form @submitForm="onFormSubmit"/>
    <TotalBalace :total="totalBalance" :totalColor="totalColor"/>
    <BudgetList :list="list"/>
  </div>
</template>

<script>
import BudgetList from '@/components/BudgetList';
import TotalBalace from '@/components/TotalBalance';
import Form from '@/components/Form';

export default {
  name: 'App',
  components: {
    BudgetList, TotalBalace, Form
  },
  data: () => ({
    list: {
      1: {
          type: 'INCOME',
          value: 150,
          comment: 'some plus',
          id: 1
        },
      2:  {
          type: 'OUTCOME',
          value: 50,
          comment: 'some minus',
          id: 2
        },
      }
    }),
  computed: {
    totalBalance() {
      return Object.values(this.list).reduce((acc, item) => acc + this.typeOfComment(item.type)*item.value, 0);
    },
    totalColor() {
        if(this.totalBalance > 0){
          return "green";
        } else if(this.totalBalance < 0){
          return "red";
        } else {
          return "#000"
        }
    },
  },
  methods: {
    typeOfComment(type){
      return type === 'INCOME' ? 1 : -1;
    },
    onFormSubmit(data) {
      const newObj = {
        ...data,
        id: String(Math.random())
      };
      this.$set(this.list, newObj.id, newObj)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.green {
    color: green
}
.red {
    color: red
}
</style>