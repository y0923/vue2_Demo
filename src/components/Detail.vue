<template>
  <div>
    <!-- <ul>消息编号：{{$route.query.id}}</ul>
    <ul>消息内容：{{$route.query.title}}</ul> -->
    <ul>消息内容：{{id}}</ul>
    <ul>消息内容：{{title}}</ul>
  </div>
</template>

<script>
  export default {
    name: 'Detail',
    props: ['id', 'title'],
    mounted() {
      console.log(this.$route);
    }

  }
</script>

<style>

</style>