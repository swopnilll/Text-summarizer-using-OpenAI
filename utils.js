import { OpenAI } from "openai";

import dotenv from "dotenv";

import fs from "fs";

dotenv.config(); // Load .env file into process.env

const apiKey = process.env.OPENAI_API_KEY;

export const readData = () => {
  const data = fs.readFileSync("./data.txt", "utf-8");
  return data;
};

export const fetchSummary = async (text) => {
  try {
    // Instantiate the OpenAI client
    const openai = new OpenAI({ apiKey });

    // Create a chat completion request
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Replace with the correct model name if necessary
      store: true,
      messages: [
        {
          role: "system",
          content: "Generate a summarized text for the given input text.",
        },
        {
          role: "user",
          content: text,
        },
      ],
    });

    // Return the summarized text
    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching summary:", error);
    throw error; // Propagate error for further handling if needed
  }
};
