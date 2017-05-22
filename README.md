# relay4

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
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


See also:
- [Vue.js 2 Quickstart Tutorial 2017](https://medium.com/codingthesmartway-com-blog/vue-js-2-quickstart-tutorial-2017-246195cfbdd2)
- [Vue Component Spec](http://vue-loader.vuejs.org/en/start/spec.html)
- [Animation in Vue](https://css-tricks.com/intro-to-vue-5-animations/)
- [Static asset loading info](https://vuejs-templates.github.io/webpack/static.html)
- [Good router tutorial](https://snipcart.com/blog/vuejs-tutorial-seo-example)
- https://jsbin.com/bikadol/7/edit?html,js,output

Some notes on the setup:
- JavaScript inside Vue components are processed by babel-loader by default
- Can use scss in style blocks if you use lang="scss"
- Static assets in 'static' folder won't be vue-loaded; use root-relative urls (/static/asdf.jpg)
- To simulate production, run `python -m SimpleHTTPServer 8888` inside the dist folder
- Uses [Prerendering SPA plugin](https://github.com/chrisvfritz/prerender-spa-plugin)
- Don't forget to add endpoints for pre-rendering to webpack.prod.conf.js