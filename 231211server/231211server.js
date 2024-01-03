const express = require('express');
const router = express.Router();
const indexRouter = require('./routes/index.js');

let todos = [];
 
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// 使用 express.Router 來處理不同的路由
app.use('/', indexRouter);

// Serve靜態資源（React 打包後的檔案）
app.use(express.static(path.join(__dirname, '../231211myapp/build')));

// 處理所有其他請求，送回 React 應用程式的 HTML 頁面
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});