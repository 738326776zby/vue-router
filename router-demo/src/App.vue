<template>
  <div id="app">
    <div v-for="item in listData">{{item.text}}
      <ul>
        <li v-for="m in item.childrens">
          <!--路由跳转 -->
          <span @click="$router.push({path:m.path})"> {{m.text}}</span>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      listData: {
        "canshuguanli": {
          text: "参数管理",
          childrens: {
            "huiyicanshu": {
              text: "会议参数",
              path:'/huiyicanshu'
            }
          }
        },
        "chanpinduanguanli": {
          text: "产品端管理",
          childrens: {
            "faxingjihua": {
              text: "发行计划",
              path:"/faxingjihua"
            }
          }
        }
      }
    }
  },
  methods:{
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
