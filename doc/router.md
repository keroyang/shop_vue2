# 项目路由
所谓路由：KV键值对
    key:URL地址栏中的路径
    value:相应的路由组件

路由组件
    Home首页路由组件
    search路由组件
    login登陆路由组件
非路由组件
    header路由组件
    footer路由组件

## 创建组件
1. 需要注意组件结构+ 组件的样式+图片资源
2. 需要采用的是less/scss样式，浏览器是不识别这两种样式的， 需要安装插件将其转变为css样式
    ```bash
      # less 
      npm i less less-loader
      # scss
      npm i scss scss-loader
    ```
   并且在style 标签中加入 lang=less/scss

## 使用组件的步骤（非路由组件）
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
    
