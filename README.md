# Vue3 仿 Apple Music Player

## 服务端

调用：[NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)  
接口文档：[网易云音乐 NodeJS 版 API](https://binaryify.github.io/NeteaseCloudMusicApi)

## 技术栈

- Vue3.0
- Vite
- Vuex
- Vue Router
- Sass
- Typescript

## 项目结构

```tree
.
├── node_modules
├── config
│   ├── dev.js
│   ├── index.js
│   └── prod.js
├── dist
├── public
├── src
│   ├── App.vue
│   ├── apis
│   ├── assets
│   │   ├── styles
│   │   ├── iconfont
│   │   └── media
│   ├── components
│   ├── main.js
│   ├── router
│   ├── store
│   ├── utils
│   └── views
├── index.html
├── package.json
├── jsconfig.json
├── tsconfig.json
├── vite.config.js
├── README.md
└── yarn.lock
```

## 开始

### debug

```sh
yarn # or npm i
yarn dev  # or npm run dev
```

### build

```sh
yarn build:prod # or npm run build:prod
```
