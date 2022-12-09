<template>
  <Layout>
    <template v-for="m in menu">
      <router-link :to="m.to">{{ m.text }}</router-link>
      |
    </template>
    <router-view />
  </Layout>
</template>

<script setup>
import Layout from "../../components/Layout/Layout.vue"
const menu = [
  { to: "/Member/", text: "Index" },
  { to: "/Member/Greeting", text: "Greeting" },
  { to: "/Member/Info", text: "Info" },
]
</script>

<style></style>
