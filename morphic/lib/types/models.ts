export interface Model {
  id: string
  name: string
  provider: string
  providerId: string
}

export const models: Model[] = [
  {
    id: 'gemini-1.5-pro-002',
    name: 'PATOOWORLD',
      'Gemini 1.5 pro',
    provider: 'Google Generative AI',
    providerId: 'google'
  },
  {
    id: 'llama3-groq-8b-8192-tool-use-preview',
    name: '99PACE',
    'llama3-groq-8b-tool',
    provider: 'Groq',
    providerId: 'groq'
  },
  {
    id: 'gpt-4o',
    name: 'ATOLOG',
    'gpt-4o',
    provider: 'Azure',
    providerId: 'azure'
  },
]
