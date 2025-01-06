import express from "express";

import {readData, fetchSummary} from './utils.js'



const app = express();

app.get('/get-summary', async (req, res) => {

    try{
        const data = readData();

        const summary = await fetchSummary(data);

        res.send({ summary });
        
    }catch(error){
        res.send({'error': error.message}).status(400);
    }

    res.send(JSON.stringify())
})

app.listen(8000, async () => {
    console.log("listening at 8000")
})