import express from 'express';
import cors from 'cors';

import eventrouter from './routes/Events.js'


const PORT = process.env.PORT || 5000;
const app = express();


app.use(express.json({extendex:true}));
app.use(cors())

app.use('/api/v3/app',eventrouter);

app.use('/', (req, res) => {
    res.send("Runing at the speed ")
})

app.listen(PORT, () => {
    console.log(`Server is running at
    http://localhost:${PORT}`)
})

