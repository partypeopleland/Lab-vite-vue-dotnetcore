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
  { to: "/Demo/", text: "Index" },
  { to: "/Demo/About", text: "About" },
  { to: "/Demo/Init", text: "Init" },
]
</script>

<style></style>
