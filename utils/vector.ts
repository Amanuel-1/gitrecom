import {GoogleGenerativeAI} from '@google/generative-ai'

const genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)
const model = genAi.getGenerativeModel({
    model: "text-embedding-004",
  });
  
export const generateEmbedding = async (content:string,)=>{

    const embedResponse = await model.embedContent(content);
    console.log("this is the response embedding ",embedResponse)
    return embedResponse;
}