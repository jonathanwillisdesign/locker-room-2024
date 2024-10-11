import { Order } from '@/types/order'

export const inProgressOrders: Order[] = [
  {
    id: 16,
    name: 'Team P Home Kit',
    number: 'ORD016',
    teamId: 1,
    createdById: 1,
    date: '2023-08-01',
    status: 'IMAGE NOT APPROVED',
    parsedDate: new Date('2023-08-01'),
    customerId: 16,
    poNumber: 'PO016',
    submissionDate: '2023-08-01',
    adidasOrderNumber: 'ADI016',
    addressId: 16,
    itemIds: [30, 31],
    dates: {
      submitted: '2023-08-01',
      productionComplete: '2023-08-15',
      shipping: '2023-08-20',
      delivery: '2023-08-25'
    },
    quantities: {
      xs: 8,
      s: 12,
      m: 16,
      l: 12,
      xl: 8,
      total: 56
    },
    initiatedBy: 'retailer',
    canceled: false
  },
  {
    id: 17,
    name: 'Team Q Away Kit',
    number: 'ORD017',
    teamId: 2,
    createdById: 2,
    date: '2023-08-03',
    status: 'AWAITING APPROVAL',
    parsedDate: new Date('2023-08-03'),
    customerId: 17,
    poNumber: 'PO017',
    submissionDate: '2023-08-03',
    adidasOrderNumber: 'ADI017',
    addressId: 17,
    itemIds: [32, 33],
    dates: {
      submitted: '2023-08-03',
      productionComplete: '2023-08-18',
      shipping: '2023-08-23',
      delivery: '2023-08-28'
    },
    quantities: {
      xs: 7,
      s: 10,
      m: 15,
      l: 10,
      xl: 7,
      total: 49
    },
    initiatedBy: 'team_user',
    canceled: false
  },
  // Add more in-progress orders here...
]