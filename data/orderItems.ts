import { OrderItem } from '@/types/orderItem'

export const orderItems: OrderItem[] = [
  {
    id: 1,
    designId: 1,
    totalCost: 1000,
    quantity: 20,
    referenceNumber: 'REF001',
    shippingNumber: 'SHIP001',
    trackingLink: 'https://example.com/tracking/SHIP001'
  },
  {
    id: 2,
    designId: 2,
    totalCost: 1500,
    quantity: 10,
    referenceNumber: 'REF002',
    shippingNumber: 'SHIP002',
    trackingLink: 'https://example.com/tracking/SHIP002'
  },
  {
    id: 3,
    designId: 3,
    totalCost: 750,
    quantity: 30,
    referenceNumber: 'REF003',
    shippingNumber: 'SHIP003',
    trackingLink: 'https://example.com/tracking/SHIP003'
  },
  {
    id: 4,
    designId: 4,
    totalCost: 2000,
    quantity: 5,
    referenceNumber: 'REF004',
    shippingNumber: 'SHIP004',
    trackingLink: 'https://example.com/tracking/SHIP004'
  },
  {
    id: 5,
    designId: 5,
    totalCost: 1800,
    quantity: 25,
    referenceNumber: 'REF005',
    shippingNumber: 'SHIP005',
    trackingLink: 'https://example.com/tracking/SHIP005'
  }
]