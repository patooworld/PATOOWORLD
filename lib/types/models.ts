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
]
