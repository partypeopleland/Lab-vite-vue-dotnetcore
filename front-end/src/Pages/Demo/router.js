import { createRouter, createWebHistory } from "vue-router"
import About from "./Components/About.vue"
import Init from "./Components/Init.vue"
import Index from "./Components/Index.vue"

const routes = [
  { name: "demo-index", path: "/Demo/", component: Index },
  { name: "demo-init ", path: "/Demo/Init", component: Init },
  { name: "demo-about ", path: "/Demo/About", component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
