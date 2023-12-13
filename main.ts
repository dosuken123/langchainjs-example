import { OpenAI } from "langchain/llms/openai";

const llm = new OpenAI({
    openAIApiKey: "[REDACTED]",
  });

const text =
  "What would be a good company name for a company that makes colorful socks?";

const llmResult = await llm.predict(text);

console.log(llmResult);