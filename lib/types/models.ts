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
    provider: 'PATOOWORLD',
    providerId: 'google'
  },
  {
    id: 'llama3-groq-8b-8192-tool-use-preview',
    name: 'Groq Speed',
    provider: '99PACE',
    providerId: 'groq'
  },
]
