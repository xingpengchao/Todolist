<template>
  <div class="todolist">
    <h1>我是Todolist2页面</h1>
    <p>
      <input type="text"
              v-model="inputValue"
              placeholder="请输入任务"
              @keyup.enter="handleAdd">
      <button @click="handleAdd">添加</button>
    </p>
    <div class="item">
      <div class="uncp-item">
        <span>待完任务</span>
        <ul>
          <li v-if="item.status === 1" v-for="(item, index) in list" :key="index">{{ item.inputValue }}
            <button @click="handleChangeStatusDone(index)">已完成</button>
            <button @click="handleDel(index)">删除</button>
          </li>
        </ul>
      </div>
      <div class="cped-item">
        <span>已完成任务</span>
        <ul>
          <li  v-if="item.status === 2" v-for="(item, index) in list" :key="index">{{ item.inputValue }}
            <button @click="handleChangeStatusDoing(index)">恢复</button>
            <button @click="handleDel(index)">删除</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
const name = 'Todolist'
export default {
  name,
  data () {
    return {
      inputValue: '',
      list: []
    }
  },
  computed: {
    done () {
      return {
      }
    }
  },
  methods: {
    handleAdd () {
      var obj = {
        inputValue: this.inputValue,
        status: 1
      }
      this.list.push(obj)
      this.inputValue = ''
    },
    handleChangeStatusDone (index) {
      this.list[index].status = 2
    },
    handleChangeStatusDoing (index) {
      this.list[index].status = 1
    },
    handleDel (index) {
      this.list.splice(index, 1)
    }
  }
}
</script>

<style scoped>

</style>
