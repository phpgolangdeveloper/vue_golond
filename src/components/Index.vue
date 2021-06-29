<template>
  <div>
    <!--    <router-link to="http://localhost:9999/vue/api_axios">测试axios</router-link>-->
    <a-button @click="TestAxios()">测试axios</a-button>
    <br/>
    <span>code:{{ code }}</span>
    <br/>
    <span>msg:{{ msg }}</span>
    <br/>
    <!-- 数组遍历   -->
    <span>数组遍历</span>
    <br>
    <span v-for="(arr,i) in arrs" :key="arr">key:{{ i }}
      <span>value:{{ arr }},</span>
          <br>
    </span>
    <br/>
    <!--  数组里面的结构体遍历  -->
    <span>数组里面的结构体遍历</span>
    <br>
    <span v-for="arr in arr_struct" :key="arr">
      {{ arr.Id }}
      {{ arr.Name }}
      <br>
    </span>
    <br>
    <span> map 里面的 struct</span>
    <br>
    <span v-if="map_struct.user != undefined">
<!--   map 里面的 struct -->
      {{map_struct.user.Id}}
    </span>
    <span v-else>
      暂无struct
    </span>
  </div>
</template>
<script>
import ant from 'ant-design-vue'

export default {
  name: "Index",
  data() {// 定义好变量
    return {
      code: "",
      msg: "",
      user: {},
      arrs: [],
      arr_struct: [],
      map_struct: {},
    }
  },
  // created 进入组件就执行
  // created() {
  //   this.TestAxios()
  // },
  // mounted() {
  //   this.TestAxios()
  // },
  computed: {
    [ant.name]: ant,
  },
  methods: {
    TestAxios() {
      // axios的两种回调
      // 第一种是匿名函数 then(function(data){ console.log(data)})
      // 第二种是箭头函数 then((res) => {console.log(data)})
      // 匿名函数和箭头函数的区别
      // 匿名函数的指针指向 -> 函数本身
      // 箭头函数的指针指向 -> 组件
      // 所有要想回显数据到组件，得用箭头函数 如下 如果不用箭头函数就不能使用 data() {return {}} 里面的变量，因为不是指向组件的
      this.$axios.get('/vue/api_axios').then((res) => {
        console.log(res.data.arrs);
        console.log(res.data.user);
        console.log(res.data.arr_struct);
        console.log(res.data.map_struct);
        this.code = res.data.code;
        this.msg = res.data.msg;
        this.arrs = res.data.arrs;
        this.user = res.data.user;
        this.arr_struct = res.data.arr_struct;
        this.map_struct = res.data.map_struct;

        //this.$router.push("/home")// 重定向
      }).catch(function (err) {
        console.log(err);
      });
    }
  }
}
</script>
<style scoped></style>