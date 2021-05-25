<template>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Сумма</th>
        <th>Дата</th>
        <th>Категория</th>
        <th>Тип</th>
        <th>Открыть</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(rec, index) in records" :key="rec.id">
        <td>{{ index + 1 }}</td>
        <td>{{ rec.amount | currency('UAH') }}</td>
        <td>{{ rec.date | date() }}</td>
        <td>{{ rec.categoryTitle }}</td>
        <td>
          <span class="white-text badge" :class="[rec.typeClass]">{{
            rec.typeTitle
          }}</span>
        </td>
        <td>
          <button
            class="btn-small btn"
            @click="$router.push('/detail/' + rec.id)"
          >
            <i class="material-icons">open_in_new</i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'HistoryTable',
  props: {
    records: {
      type: Array,
      required: true,
    },
  },
};
</script>
