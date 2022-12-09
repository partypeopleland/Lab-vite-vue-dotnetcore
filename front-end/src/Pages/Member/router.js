import { createRouter, createWebHistory } from "vue-router"
import Greeting from "./Components/Greeting.vue"
import Info from "./Components/Info.vue"
import Index from "./Components/Index.vue"

const routes = [
  { name: "member-index", path: "/Member/", component: Index },
  { name: "member-greeting ", path: "/Member/Greeting", component: Greeting },
  { name: "member-info ", path: "/Member/Info", component: Info },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
