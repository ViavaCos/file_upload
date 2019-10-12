// 引入express
const express = require('express');
// 引入multer包
const multer = require('multer');
// 配置multer
const upload = multer({
    dest: 'uploads/'
});


// 创建服务
const app = express();

// 托管静态资源
app.use(express.static('public'));






//监听路由
app.post('/uploadFile', upload.single('avatar'), (req, res, next) => {

    // req.file.filename = req.file.originalname;

    next();

}, (req, res) => {
    console.log('接口被访问了');
    // console.log(req.file);

    res.send({
        code: 200,
        msg: '文件上传成功！'
    });
})

// 监听端口
app.listen(8080, () => {
    console.log('8080: 服务器启动成功！');
})