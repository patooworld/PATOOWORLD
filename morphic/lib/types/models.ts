export interface Model {
  id: string
  name: string
  provider: string
  providerId: string
}

export const models: Model[] = [
  {
    id: 'gemini-1.5-pro-002',
    name: 'gemini 1.5 pro',
    provider: 'Google Generative AI',
    providerId: 'google'
  };
]
