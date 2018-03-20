# vv-ui

> vue components 移动端UI组件库
>



## Build Setup

``` bash
# install dependencies
npm install vv-ui --save-dev

# 全局注册组件
import Vue from 'vue'
import 'vv-ui/lib/style/theme/index.css'
import VVUI from 'vv-ui'
Vue.use(VVUI)

# 单个注册组件(Button示例)
import Vue from 'vue'
import 'vv-ui/lib/style/theme/button.css'
import { Button } from 'vv-ui' // or import Button from 'vv-ui/lib/button'
import install from 'vv-ui/src/components/install' // 全局安装一次即可
install(Vue)
Vue.component(Button.name, Button)


# 修改UI主题风格
##### 修改src/components/style/src/variable.scss变量后运行以下命令即可
npm run build:theme
```

