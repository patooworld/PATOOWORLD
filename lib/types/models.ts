export interface Model {
  id: string
  name: string
  provider: string
  providerId: string
}

export const models: Model[] = [
  {
    id: 'gemini-2.0-flash-exp',
    name: 'Gemini Flash',
    provider: 'Google Generative AI',
    providerId: 'google'
  },
  {
    id: 'llama3-groq-8b-8192-tool-use-preview',
    name: 'Grok',
    provider: 'Groq',
    providerId: 'groq'
  },
  {
    id: 'gemini-1.5-pro-002',
    name: 'Gemini 99pace',
    provider: 'Google Generative AI',
    providerId: 'google'
  },
]
