<template>
  <n-space vertical>
    <n-layout>
      <n-layout-header :inverted="inverted" bordered>
        Header Header Header
        <n-menu mode="horizontal" :inverted="inverted" :options="menuOptions" />
        <n-switch v-model:value="inverted" />
      </n-layout-header>

      <n-layout has-sider>
        <n-layout-sider
          bordered
          show-trigger
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          :native-scrollbar="false"
          :inverted="inverted"
          style="max-height: 320px"
        >
          <n-menu
            :inverted="inverted"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
          />
        </n-layout-sider>

        <slot></slot>

        <n-layout style="max-height: 320px" />
      </n-layout>

      <n-layout-footer :inverted="inverted" bordered>
        Footer Footer Footer
      </n-layout-footer>
    </n-layout>
  </n-space>
</template>

<script>
import { h, defineComponent, ref } from "vue"
import { NIcon } from "naive-ui"
import { Home as HomeIcon } from "@vicons/carbon"

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: () => h("a", { href: "/", target: "_self" }, "首頁"),
    key: "home",
    icon: renderIcon(HomeIcon),
  },
  {
    label: () => h("a", { href: "/Demo/", target: "_self" }, "Demo"),
    key: "demo",
    icon: renderIcon(HomeIcon),
  },
  {
    label: () => h("a", { href: "/Member/", target: "_self" }, "Member"),
    key: "member",
    icon: renderIcon(HomeIcon),
  },
]

export default defineComponent({
  setup() {
    return {
      inverted: ref(false),
      menuOptions,
    }
  },
})
</script>
