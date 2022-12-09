import {resolve} from "path"
import {defineConfig} from "vite"
import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"
import Components from 'unplugin-vue-components/vite'
import {NaiveUiResolver} from 'unplugin-vue-components/resolvers'

const root = resolve(__dirname, "src", "Pages")
const outputDir = resolve(__dirname,"..","output","dist")
export default defineConfig({
    root,
    plugins: [
        vue(),
        AutoImport({
            imports: [
                'vue',
                {
                    'naive-ui': [
                        'useDialog',
                        'useMessage',
                        'useNotification',
                        'useLoadingBar'
                    ]
                }
            ],
        }),
        Components({
            resolvers: [NaiveUiResolver()]
        })
    ],
    build: {
        outDir: outputDir,
        rollupOptions: {
            input: {
                home: resolve(root, "index.html"),
                demo: resolve(root, "demo", "index.html"),
                member: resolve(root, "member", "index.html"),
            },
        },
    },
    resolve:{
        alias:{
            '@': resolve(__dirname, 'src')
        }
    }
})
