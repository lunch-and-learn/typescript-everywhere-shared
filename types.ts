export interface RefinementSessionDTO {
  id: number
  code: string
  tickets: TicketDTO[]
}

export interface TicketDTO {
  id: number
  jiraRef: string
}

export interface APIResponse<T> {
  data: T
  error?: string
}
