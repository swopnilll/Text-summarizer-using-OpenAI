import {OpenAI} from "openai"


import dotenv from 'dotenv';

import fs from "fs"

dotenv.config(); // Load .env file into process.env

const apiKey = process.env.OPENAI_API_KEY;

export const readData = () => {
    const data = fs.readFileSync('./data.txt', 'utf-8');
    return data;
}


export const fetchSummary = async (text) => {

    // Instantiate the OpenAI client
    const openai = new OpenAI({ apiKey: apiKey });

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "system",
                "content": `Generate a summarized text for the given input text`
            },
            {
                "role": "user",
                "content": text
            }
        ]
    });

     return response.choices[0].message.content;


}




