const express = require('express');
const mongoose = require('mongoose');
const api = require('./api.js');
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/charm', {
    useNewUrlParser: true, // just to get rid of warnings
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use('/api/', api);
app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message})
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});
