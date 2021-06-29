<template>
  <div>
    <!--注意了，这个貌似不是全局变量$route-->
    <!--当匹配到 /book_detail/:id 下的任意路由时，参数值会被设置到 this.$route.params 下，所以通过这个属性可以获取到动态参数，如：-->
    这是详情页

    {{book.id}}
    {{book.name}}
  </div>
</template>
<script>
export default {
  name: "book_detail",
  created() {
    this.get_book_detail();
  },
  data() {
    return {book: []};
  },
  methods: {
    get_book_detail() {
      console.log(this.$route.params.id)
      this.$axios.get("/vue/get_book_detail", {
        params: {
          id: this.$route.params.id
        }
      }).then((res) => {
        console.log(res)
        this.book = res.data.books
      }).catch((err) => {
        console.log(err)
      });
    },
  },
}
</script>
<style scoped>

</style>