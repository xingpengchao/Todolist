<template>
  <div class="app">
    <h1>Vuexdemo</h1>
    <span>
      <button @click="increment">+</button>
        {{ this.$store.state.count }}
      <button @click="decrement">-</button>
    </span>
    <div class="user">
      <h1>欢迎用户{{ name }}!</h1>
      <span>
        姓名：{{ $store.state.user.name }}
        性别：{{ $store.state.user.sex }}
        年龄：{{ $store.state.user.age }}
        身高：{{ $store.state.user.height }}
        <button @click="updateInfo">更新信息</button>
      </span>
    </div>
  </div>
</template>

<script>
import { UPDATEINFO, INCREMENT, DECREMENT } from '../store/mutation-type.js'

const name = 'Vuexdemo'
export default {
  name,
  data () {
    return {
      name: '哈皮哥'
    }
  },
  methods: {
    [INCREMENT] () {
      this.$store.commit(INCREMENT)
    },
    [DECREMENT] () {
      this.$store.commit(DECREMENT)
    },
    [UPDATEINFO] () {
      this.$store.commit(UPDATEINFO, 170)
    }
  }
}
</script>

<style scoped>
</style>
