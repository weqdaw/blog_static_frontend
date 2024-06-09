const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/save', (req, res) => {
    const markdownText = req.body.markdown;
    fs.writeFile('a.txt', markdownText, (err) => {
        res.send('博客保存成功');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
