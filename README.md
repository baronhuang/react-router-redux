# react-router-redux
react+router+redux的一个demo，主要实现利用`redux`来管理`react`的数据流，并可以使用服务器端渲染。<br><br>
用到技能包包括：`redux`, `react-router`, `redux`, `redux-saga`， `express`, `axios`, `webpack`, `http-proxy-middleware`等，
其中`redux-saga`是用来写逻辑，处理异步等，因为之前的项目使用~~redux-thunk~~来做异步处理，actions部分的代码一团糟，非常难维护。
用`redux-saga`可以把复杂的流程控制抽离出来，保证actions的纯洁，干净。<br><br>
前端使用`http-proxy-middleware`来代理后端的接口服务，跨域专用，后端服务在[koa2-server](https://github.com/baronhuang/koa2-server),
使用`express`渲染页面，利于seo。

# 用法
`npm run dev` 开发环境启动<br>
`npm run build` 编译压缩文件到dist目录<br>
`npm run prd` 启动生产环境



