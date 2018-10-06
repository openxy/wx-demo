# wx-demo

> A Mpvue project


## 功能
一个简单的博客程序，主要演示基于jsonapi规范的网络存取与restful操作等

## 基于 json api 的文档
https://ktt.openxyz.com/docs

## 客户端
基于 https://github.com/wopian/kitsu 

结合 fly 进行了定制和修改

## 服务端
https://ktt.openxyz.com

当前仅有Post一个资源

基于fast jsonapi 

## todo
* create 和 update 页面
* included、sort、分页等查询
* 一对一关联的查询与更新
* 一对多关联的查询与更新

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
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
