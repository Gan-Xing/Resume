const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000; // 你可以更改端口号

// 让 Express 提供静态文件（index.html 所在目录）
app.use(express.static(__dirname));

// 监听 `/` 请求，返回 index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`🚀 服务器已启动！请在浏览器中访问：http://localhost:${PORT}`);
});