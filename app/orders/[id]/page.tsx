import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Order } from "@/types/order"
import { orders } from '@/data/orders'

export async function generateStaticParams() {
  return orders.map((order) => ({
    id: order.id.toString(),
  }))
}

export default function OrderDetailsPage({ params }: { params: { id: string } }) {
  const orderId = Number(params.id)
  const order = orders.find(o => o.id === orderId)

  if (!order) {
    return <div>Order not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Order {order.status}</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Customer Details</h2>
        <p>Customer: {order.customerId}</p>
        <p>Team: {order.teamId}</p>
        <p>Customer / PO Number: {order.poNumber}</p>
        <p>Order Name: {order.name}</p>
        <p>Submission Date: {order.submissionDate}</p>
        <p>Adidas Order Number: {order.adidasOrderNumber}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Items</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Design</TableHead>
              <TableHead>Article Name</TableHead>
              <TableHead>Total Cost</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Reference #</TableHead>
              <TableHead>Shipping #</TableHead>
              <TableHead>Tracking</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {order.itemIds.map((itemId) => (
              <TableRow key={itemId}>
                <TableCell>
                  <div className="w-16 h-16 bg-gray-200 flex items-center justify-center text-gray-500 text-xs">
                    Design {itemId}
                  </div>
                </TableCell>
                <TableCell>Article {itemId}</TableCell>
                <TableCell>$100.00</TableCell>
                <TableCell>10</TableCell>
                <TableCell>REF-{itemId}</TableCell>
                <TableCell>SHIP-{itemId}</TableCell>
                <TableCell>
                  <a href="#" className="text-blue-500 hover:underline">
                    Track Shipment
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Estimated Dates for This Order</h3>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Submitted</TableCell>
              <TableCell>Est. Production Complete</TableCell>
              <TableCell>Est. Shipping Date</TableCell>
              <TableCell>Est. Delivery Date</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{order.dates.submitted}</TableCell>
              <TableCell>{order.dates.productionComplete}</TableCell>
              <TableCell>{order.dates.shipping}</TableCell>
              <TableCell>{order.dates.delivery}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Quantities</h3>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>XS</TableCell>
              <TableCell>S</TableCell>
              <TableCell>M</TableCell>
              <TableCell>L</TableCell>
              <TableCell>XL</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{order.quantities.xs}</TableCell>
              <TableCell>{order.quantities.s}</TableCell>
              <TableCell>{order.quantities.m}</TableCell>
              <TableCell>{order.quantities.l}</TableCell>
              <TableCell>{order.quantities.xl}</TableCell>
              <TableCell>{order.quantities.total}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}