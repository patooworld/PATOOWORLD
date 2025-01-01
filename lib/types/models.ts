export interface Model {
  id: string
  name: string
  provider: string
  providerId: string
}

export const models: Model[] = [
{
    id: 'gemini-1.5-pro-002',
    name: 'Gemini 1.5 Pro',
    provider: 'Google Generative AI',
    providerId: 'google'
  },
  {
    id: 'gemini-2.0-flash-exp',
    name: 'Gemini 2.0 Flash',
    provider: 'Google Generative AI',
    providerId: 'google'
  },
  {
    id: 'llama3-groq-8b-8192-tool-use-preview',
    name: 'LLama 3 Groq 8B Tool Use',
    provider: 'Groq',
    providerId: 'groq'
  },
  {
    id: 'qwen2.5',
    name: 'Qwen 2.5',
    provider: 'Ollama',
    providerId: 'ollama'
  }, 
]
