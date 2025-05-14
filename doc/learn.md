## 项目结构说明

node_modules 文件夹
    项目依赖文件夹
public 文件夹
    放置静态资源，放在public文件夹中的静态资料， webpack 进行打包的时候会原封不动打包到dist文件夹中
src 文件夹
    assets文件夹
        一般也是放置静态资源，webpack打包时，webpack会把这些静态资源当作一个模块，打包js文件里面
    components文件夹
        一般放置的是非路由组建（全局组件）
    App.vue
        唯一的根组件，Vue当中的组件
    main.js
        程序入口文件，也是整个程序当中最先执行的文件
 
babel.config.js
    配置文件（babel相关）

package.json
    记录了项目的相关信息，有哪些依赖

package-lock.json
    缓存性文件
README.md
    说明文件

## 项目的配置操作
### 项目运行之后，浏览器自动打开
---package.json

```json
{
  "scripts": {
    "serve": "vue-cli-service serve --open",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  }
}

```

### eslint 校验功能关闭
--- 在根目录下的，vue.config.js中

```js
{
  // 关闭eslint
  lintOnSave:false
}
```

### src文件夹简写写法，配置别名
在jsconfig.json 配置别名@提示 
> 注意： @ 不能用在node_modules 
