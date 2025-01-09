export interface Model {
  id: string
  name: string
  provider: string
  providerId: string
}

export const models: Model[] = [
  {
    id: 'gemini-2.0-flash-exp',
    name: '99pace (gemini 2.0-flas)',
    provider: '',
    providerId: 'google'
  },
  {
  id: 'gemini-1.5-pro-002',
  name: 'PATOOWORLD (gemini-1.5-pro)',
  provider: '',
  providerId: 'google'
  },
]
