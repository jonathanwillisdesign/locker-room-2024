import { Order } from '@/types/order'

export const draftOrders: Order[] = [
  {
    id: 1,
    name: 'Team A Home Kit',
    number: 'ORD001',
    teamId: 1,
    createdById: 1,
    date: '2023-07-01',
    status: 'DRAFT',
    parsedDate: new Date('2023-07-01'),
    customerId: 1,
    poNumber: 'PO001',
    submissionDate: '2023-07-01',
    adidasOrderNumber: 'ADI001',
    addressId: 1,
    itemIds: [1, 2],
    dates: {
      submitted: '2023-07-01',
      productionComplete: '2023-07-15',
      shipping: '2023-07-20',
      delivery: '2023-07-25'
    },
    quantities: {
      xs: 5,
      s: 10,
      m: 15,
      l: 10,
      xl: 5,
      total: 45
    },
    initiatedBy: 'retailer',
    canceled: false
  },
  {
    id: 2,
    name: 'Team B Away Kit',
    number: 'ORD002',
    teamId: 2,
    createdById: 2,
    date: '2023-07-03',
    status: 'NEW CUSTOMER DRAFT',
    parsedDate: new Date('2023-07-03'),
    customerId: 2,
    poNumber: 'PO002',
    submissionDate: '2023-07-03',
    adidasOrderNumber: 'ADI002',
    addressId: 2,
    itemIds: [3, 4],
    dates: {
      submitted: '2023-07-03',
      productionComplete: '2023-07-18',
      shipping: '2023-07-23',
      delivery: '2023-07-28'
    },
    quantities: {
      xs: 6,
      s: 12,
      m: 18,
      l: 12,
      xl: 6,
      total: 54
    },
    initiatedBy: 'team_user',
    canceled: false
  },
  // Add more draft orders here...
]