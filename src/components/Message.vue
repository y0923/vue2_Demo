<template>
  <div>
    <ul>
      <li v-for="m in MessageList" :key="m.id">
        <!-- Router中query传参数到Detail组件中 -->
        <!-- <Router-link :to="{
          path:'/Detail',
          query:{
            id:m.id,
            title:m.title
          }

        }">{{m.title}}
        </Router-link> -->
        <Router-link :to="{
          name:'xiangqing',
          params:{
            id:m.id,
            title:m.title
          }
          }">{{m.title}}</Router-link>
        <button @click="showpush(m)">push查看</button>
        <button @click="showreplace(m)">replace查看</button>

      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>

</template>

<script>
  export default {
    name: "Message",
    data() {
      return {
        MessageList: [{
          id: '01',
          title: "消息01"
        }, {
          id: '02',
          title: '消息02'
        }, {
          id: '03',
          title: "消息03"
        }]

      }
    },
    methods: {
      showpush(m) {
        // console.log(this.$route)
        this.$router.push({
          name: 'xiangqing',
          params: {
            id: m.id,
            title: m.title
          }
        })
      },
      showreplace(m) {
        this.$router.replace({
          name: 'xiangqing',
          params: {
            id: m.id,
            title: m.title
          }
        })
      }
    }
  }
</script>

<style>

</style>