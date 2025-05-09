import OpenAI from "openai"
import dotenv from "dotenv"

dotenv.config()

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY
})

export const getOpenAICompletion = async (input: string): Promise<string> => {
    try{
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [{role: 'user', content: input}],
            store: true
        })
        return completion.choices[0].message?.content as string
    }catch(error){
        console.error(`Error getting OpenAI completion: ${error}`)
        return ''
    }
}