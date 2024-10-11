export interface Order {
  id: number
  name: string
  number: string
  teamId: number
  createdById: number
  date: string
  status: string
  parsedDate: Date
  customerId: number
  poNumber: string
  submissionDate: string
  adidasOrderNumber: string
  addressId: number
  itemIds: number[]
  dates: {
    submitted: string
    productionComplete: string
    shipping: string
    delivery: string
  }
  quantities: {
    xs: number
    s: number
    m: number
    l: number
    xl: number
    total: number
  }
  initiatedBy: 'retailer' | 'team_user'
  canceled: boolean
}