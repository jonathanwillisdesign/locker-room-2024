import { Order } from '@/types/order'
import { draftOrders } from './orders/draft'
import { inProgressOrders } from './orders/in-progress'
import { closedOrders } from './orders/closed'

export const orders: Order[] = [
  ...draftOrders,
  ...inProgressOrders,
  ...closedOrders
]