<template>
  <div id="book">
    <table border="1">
      <thead>
      <tr>
        <td>id</td>
        <td>书籍名称</td>
      </tr>
      </thead>
      <tbody v-for="book in books" :key="book">
      <tr>
        <td>{{book.id}}</td>
        <!--动态路由跳转 book_detail 是路由名称-->
        <td><router-link :to="{name:'book_detai', params:{id:book.id}}">{{ book.name }}</router-link></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "books",
  data() {
    return {
      books: [],
    }
  },
  created() {
    this.getBooks()
  },
  methods: {
    getBooks() {
      this.$axios.get("/vue/get_books").then((res) => {
        console.log(res)
        this.books = res.data.books
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}

</script>
<style scoped>

#book {
  margin-left: 45%;
  margin-top: 20px;
  padding: 20px;
}

</style>