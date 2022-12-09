<script setup>
import { reactive, ref } from "vue"

defineProps({
  msg: String,
})

const count = ref(0)
const state = reactive({
  message: "empty",
})

function add() {
  console.log(count.value)
  return count.value++
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <h3>{{ state.message }}</h3>

  <div class="card">
    <button type="button" @click="add">count is {{ count }}</button>
  </div>
</template>
