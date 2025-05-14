# 项目路由
所谓路由：KV键值对
    key:URL地址栏中的路径
    value:相应的路由组件

## 路由组件
    Home首页路由组件
    search路由组件
    login登陆路由组件

### 路由组件的搭建
使用vue-router，因为现在主要是用的是vue3,在vue2上如果安装vue-router 需要制定版本
    ```bash
    npm i vue-router@3
    ```
路由组件放置的位置一般是在views文件夹下,当然你可以根据自己的习惯更改views的名字

### 配置路由
一般存放的文字在router文件夹下
在main.js 中注册路由信息的时，其组件身上都拥有$route，$router属性
    $route :一般获取路由信息【路径、query、params等等】
    $router: 一般进行编程式导航进行路由跳转【push,replace】

### 路由的跳转
- 声明式导航
    router-link 
    必须要有to属性
        ```html
        <router-link to=""></router-link>
        ```
- 编程式导航
    push|replace

> 注意：
> 声明式导航能做的，编程式导航都能做，但是编程式导航除了可以进行路由跳转，还可以做一些其他的业务逻辑

## 非路由组件
    header路由组件
    footer路由组件

### 创建组件
1. 需要注意组件结构+ 组件的样式+图片资源
2. 需要采用的是less/scss样式，浏览器是不识别这两种样式的， 需要安装插件将其转变为css样式
    ```bash
      # less 
      npm i less less-loader
      # scss
      npm i scss scss-loader
    ```
   并且在style 标签中加入 lang=less/scss

### 使用组件的步骤（非路由组件）
- 创建或定义
- 引入

    ```js
    import Header from '组件文件'
    ```

- 注册

```js
export default{
    components:{
        Header  //组件名称
    }
}

```
- 使用
    


# 隐藏与显示组件
## 方式一
根据组件身上的$route获取当前路由的信息，通过v-show 来控制
这种方法灵活性不好，如果页面上百，操作性很差

## 方式二
通过路由元信息来处理
```js
meta:{
   //路由元信息
 }

```

# 路由传参
## 传参方式
### params参数
属于路径当中的一部分，需要注意，在配置路由的时候，需要占位
### query参数
不属于路径当中的一部分，类似于ajax中的queryString 不需要占位


