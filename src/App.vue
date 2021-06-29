<template>
  <!--  <div>-->
  <!--    <a-button type="default">这是一个按钮</a-button>-->
  <!--    <a-button type="danger">这是一个按钮</a-button>-->
  <!--    &lt;!&ndash;    to属性就是  你要到哪里啊？ &ndash;&gt;-->
  <!--    <router-link to="/">-->
  <!--      <a-button>首页</a-button>-->
  <!--    </router-link>-->

  <!--    <router-link to="/index">home</router-link>-->
  <!--    <router-view></router-view>-->
  <!--    &lt;!&ndash; 路由匹配到的组件将渲染在这里 route-view &ndash;&gt;-->

  <!--  </div>-->


  <div>
    <a-menu v-model:selectedKeys="current" mode="horizontal">
      <a-menu-item key="mail"><mail-outlined/><router-link to="/">首页</router-link></a-menu-item>
      <a-menu-item key="book"><mail-outlined/><router-link to="/books">书籍</router-link></a-menu-item>
      <a-menu-item key="submit"><mail-outlined/><router-link to="/post_test">post表单</router-link></a-menu-item>
      <a-menu-item key="upload_file"><mail-outlined/><router-link to="/upload_file">文件上传</router-link></a-menu-item>
      <a-menu-item key="app" disabled>
        <appstore-outlined/>
        不能点击
      </a-menu-item>
      <a-sub-menu>
        <template #title>
        <span class="submenu-title-wrapper">
          <setting-outlined/>
          Navigation Three - Submenu
        </span>
        </template>
        <a-menu-item-group title="Item 1">
          <a-menu-item key="setting:1">Option 1</a-menu-item>
          <a-menu-item key="setting:2">Option 2</a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group title="Item 2">
          <a-menu-item key="setting:3">Option 3</a-menu-item>
          <a-menu-item key="setting:4">Option 4</a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-menu-item key="alipay">
        <router-link to="/home">home</router-link>
      </a-menu-item>
    </a-menu>
    <router-view></router-view>

  </div>
</template>
<script>

export default {
  name: 'App',
  components: {}
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

a {
  margin: 0;
}

.site-button-ghost-wrapper {
  padding: 26px 16px 16px;
  background: rgb(190, 200, 200);
}
</style>
