<template>
  <component :is="state.currentLayout">
    <slot></slot>
  </component>
</template>

<script>
import { defineComponent, ref, computed, reactive } from "vue"
import NaiveLayout from "./NaiveLayout.vue"

const state = reactive({
  isDefaultLayout: ref(false),
  currentLayout: computed(() => "NaiveLayout"),
})

export default defineComponent({
  components: { NaiveLayout },
  setup() {
    return {
      state,
    }
  },
})
</script>

<style></style>
