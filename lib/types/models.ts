export interface Model {
  id: string
  name: string
  provider: string
  providerId: string
}

export const models: Model[] = [
{
    id: 'gemini-1.5-pro-002',
    name: 'PATOOWORLD-AI',
    provider: 'Google Generative AI',
    providerId: 'google'
  },
 {
    id: 'llama3-groq-8b-8192-tool-use-preview',
    name: 'x-AI',
    provider: 'Groq',
    providerId: 'groq'
  },
]
