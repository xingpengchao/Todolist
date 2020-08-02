<template>
  <div class="todolist">
    <h1>我是Todolist1页面</h1>
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
          <li v-for="(item, index) in uncpList" :key="index">{{ item }}
            <button @click="handleAddToUped(item)">已完成</button>
            <button @click="handleDel(index)">删除</button>
          </li>
        </ul>
      </div>
      <div class="cped-item">
        <span>已完成任务</span>
        <ul>
          <li v-for="(item, index) in cpedList" :key="index">{{ item }}
            <button @click="handleDel2(index)">删除</button>
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
      uncpList: [],
      cpedList: []
    }
  },
  methods: {
    handleAdd () {
      const {inputValue} = this
      this.uncpList.push(inputValue)
      this.inputValue = ''
    },
    handleAddToUped (item) {
      let index = this.uncpList.indexOf(item)
      let currentItem = this.uncpList.slice(index, 1)[0]
      this.uncpList.splice(index, 1)
      this.cpedList.push(currentItem)
    },
    handleDel (index) {
      this.uncpList.splice(index, 1)
    },
    handleDel2 (index) {
      this.cpedList.splice(index, 1)
    }
  }
}
</script>

<style scoped>

</style>
