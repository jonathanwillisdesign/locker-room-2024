import { Order } from '@/types/order'

export const closedOrders: Order[] = [
  {
    id: 19,
    name: 'Team S Home Kit',
    number: 'ORD019',
    teamId: 4,
    createdById: 4,
    date: '2023-07-01',
    status: 'DELIVERED',
    parsedDate: new Date('2023-07-01'),
    customerId: 19,
    poNumber: 'PO019',
    submissionDate: '2023-07-01',
    adidasOrderNumber: 'ADI019',
    addressId: 19,
    itemIds: [36, 37],
    dates: {
      submitted: '2023-07-01',
      productionComplete: '2023-07-15',
      shipping: '2023-07-20',
      delivery: '2023-07-25'
    },
    quantities: {
      xs: 6,
      s: 9,
      m: 12,
      l: 9,
      xl: 6,
      total: 42
    },
    initiatedBy: 'team_user',
    canceled: false
  },
  {
    id: 20,
    name: 'Team T Away Kit',
    number: 'ORD020',
    teamId: 5,
    createdById: 5,
    date: '2023-07-05',
    status: 'DELIVERED',
    parsedDate: new Date('2023-07-05'),
    customerId: 20,
    poNumber: 'PO020',
    submissionDate: '2023-07-05',
    adidasOrderNumber: 'ADI020',
    addressId: 20,
    itemIds: [38, 39],
    dates: {
      submitted: '2023-07-05',
      productionComplete: '2023-07-20',
      shipping: '2023-07-25',
      delivery: '2023-07-30'
    },
    quantities: {
      xs: 5,
      s: 8,
      m: 10,
      l: 8,
      xl: 5,
      total: 36
    },
    initiatedBy: 'retailer',
    canceled: false
  },
  // Add more closed orders here...
]