<!--第一部分，模板-->
<template>
  <div>{{mag}}</div>
<div class="test">这是我的第一个组件</div>
</template>

<!-- 第二部分 js -->
<script>
export default {
  name: "MyFirst",
  props: {
    mag:String
  }
}
</script>

<!-- 第三部分 样式-->
<!-- 加了 scoped 就是只能用于当前文件，否则是所有都可以用-->
<style scoped>
.test {
  color: red;
}
</style>

