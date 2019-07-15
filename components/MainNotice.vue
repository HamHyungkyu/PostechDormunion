<template>
  <v-card flat style="height: 100%">
    <v-card-title><h2>공지사항</h2></v-card-title>
  <v-data-table
    :headers="headers"
    :items="desserts"
    hide-actions
    hide-headers
    no-data-text="데이터가 없습니다."
  >
    <template v-slot:items="props">
      <td class="table-data">{{ props.item.title }}</td>
      <td class="table-data">{{ props.item.author }}</td>
      <td class="table-data">{{ props.item.date }}</td>
    </template>
  </v-data-table>
  </v-card>
</template>
<script>
export default {
    data () {
      return {
        headers: [
          {
            text: '제목',
            align: 'left',
            sortable: false,
            value: 'title'
          },
          { text: '글쓴이', value: 'author', sortable: false, },
          { text: '날짜', value: 'date', sortable: false, },
        ],
        desserts: [
          {
            title: '[생활관자치회] 동대표 선거 결과',
            author: '생활관자치회',
            date: '2019-02-28',
          },
        ]
      }
    }
  }
</script>
<style>
.table-data {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: normal;
}
</style>

