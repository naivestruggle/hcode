# hcode-front

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
# 目录结构
+ build ：项目构建(webpack)相关代码
+ config ：配置目录，包括端口号等。我们初学可以使用默认的。
+ node_modules ：npm加载的项目依赖模块
+ src ：这里是我们要开发的目录，基本上要做的事情都在这个目录里。里面包含了几个目录及文件：
  + assets ：放置一些图片，如logo等。
  + components ：目录里面放了一个组件文件，可以不用。
  + App.vue ：项目入口文件，我们也可以直接将组件写在这里，而不使用components目录。
  + main.js ：项目的核心文件
+ static ：静态资源目录，如图片、字体等。
+ test ：初始测试目录，可删除
+ .xxxx文件 ：这些是一些配置文件，包括语法配置，git配置等。
+ index.html ：首页入口文件，你可以添加一些meta信息统计代码啥的。
+ package.json ：项目配置文件。
+ README.md ：项目的说明文档，markdown格式
