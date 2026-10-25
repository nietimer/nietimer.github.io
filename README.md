## 单文件网页

每个页面都是独立的一个 HTML 文件，样式和脚本全部内联，双击就能打开，不需要安装任何东西。

## 项目结构

```base
├ index.html      # 入口页，渲染整个列表
├ data.js         # 分类和项目数据都在这
└ projects/       # 所有单文件网页都放这里
```
## 查看使用

- 在线地址：[http://page.heycf.cc.cd/](http://page.heycf.cc.cd/)
- 本地查看：可以下载对应文件用浏览器打开`html`文件即可；或者克隆项目，打开`index.html`查看全部。

## 贡献

1. 在 projects/ 下新建一个 HTML 文件，样式和脚本尽量内联；

2. 在 data.js 对应分类的 items 里加一条 { name, href } 记录（可参考内部示例）；

3. 提交 PR。


