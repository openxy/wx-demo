# wx-demo

> A Mpvue project


## 功能

一个简单的博客程序，主要用于演示:
* 基于jsonapi规范的后台数据的存取
* 小程序中基本restful操作

## 客户端
基于 https://github.com/wopian/kitsu 

结合 fly 进行了定制和修改

## 服务端

* 后端 json api 文档: https://ktt.openxyz.com/docs
* 后端地址 https://ktt.openxyz.com

> 当前仅有Post一个资源

## todo
* create 和 update 页面 
* included、sort、分页等查询
* 一对一关联的查询与更新
* 一对多关联的查询与更新
* 进一步封装为oop模式

## 提示

```
# create
api.create('posts', {    
    title:'test',
    content:'test',
})
```

```
# update
api.update('posts', {
    id:1,
    title:'test',
    content:'test',
})
```

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
