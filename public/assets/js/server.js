const express = require('express');
const cors = require('cors'); 
const path = require('path');
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.get ('*', (req,res) => {
res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/apinotes', (req,res) => {});
app.listen(PORT, () => {
    console.log('server is running on http://localhost:${PORT}');
});

