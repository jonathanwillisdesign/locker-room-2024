"use client"

import { useState, useMemo } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { designs as initialDesigns } from '@/data/designs'
import { users } from '@/data/users'
import { orders } from '@/data/orders'
import { toast } from '@/components/ui/use-toast'
import FixedActionBar from '@/components/fixed-action-bar'

const DesignsPage = () => {
  const [designs, setDesigns] = useState(initialDesigns)
  const [selectedDesigns, setSelectedDesigns] = useState<number[]>([])
  const [showAddToOrderModal, setShowAddToOrderModal] = useState(false)

  const toggleDesignSelection = (id: number) => {
    setSelectedDesigns(prev =>
      prev.includes(id) ? prev.filter(designId => designId !== id) : [...prev, id]
    )
  }

  const handleArchiveDesigns = () => {
    const updatedDesigns = designs.map(design =>
      selectedDesigns.includes(design.id) ? { ...design, status: 'Archived' } : design
    )
    setDesigns(updatedDesigns)
    setSelectedDesigns([])
    toast({
      title: "Designs Archived",
      description: `${selectedDesigns.length} design(s) have been archived.`,
    })
  }

  const draftOrders = orders.filter(order => order.status === 'DRAFT' || order.status === 'NEW CUSTOMER DRAFT')

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <h1 className="text-2xl font-bold mb-6">Designs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {designs.map((design) => (
          <Card 
            key={design.id} 
            className={`cursor-pointer ${selectedDesigns.includes(design.id) ? 'ring-2 ring-primary' : ''}`}
            onClick={() => toggleDesignSelection(design.id)}
          >
            <CardContent className="p-4">
              <div className="aspect-square bg-gray-200 mb-2 flex items-center justify-center text-gray-500">
                {design.name}
              </div>
              <h3 className="font-semibold text-sm truncate">{design.name}</h3>
              <p className="text-xs text-gray-600">{design.gender}</p>
              <p className="text-xs text-gray-600">Created by: {users.find(u => u.id === design.createdById)?.name}</p>
              <p className="text-xs text-gray-600">Date: {design.date}</p>
              <p className="text-xs text-gray-600">Status: {design.status}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      {selectedDesigns.length > 0 && (
        <FixedActionBar>
          <div className="flex items-center space-x-4">
            <p>{selectedDesigns.length} design(s) selected</p>
            <Button variant="secondary" onClick={() => setShowAddToOrderModal(true)}>
              Add to Order
            </Button>
            <Button variant="secondary" onClick={() => toast({ title: "Sharing designs", description: "This feature is not implemented yet." })}>
              Share Design(s)
            </Button>
            <Button variant="secondary" onClick={handleArchiveDesigns}>
              Archive Design(s)
            </Button>
          </div>
        </FixedActionBar>
      )}
      <Dialog open={showAddToOrderModal} onOpenChange={setShowAddToOrderModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add to Order</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="border p-4 rounded-md">
              <h3 className="font-semibold mb-2">Start a New Order</h3>
              <Button onClick={() => {
                toast({ title: "New Order", description: "Starting a new order. This feature is not fully implemented yet." })
                setShowAddToOrderModal(false)
              }}>
                Create New Order
              </Button>
            </div>
            <div className="border p-4 rounded-md">
              <h3 className="font-semibold mb-2">Add to Existing Order</h3>
              <Select onValueChange={(value) => {
                toast({ title: "Added to Order", description: `Designs added to order ${value}. This feature is not fully implemented yet.` })
                setShowAddToOrderModal(false)
              }}>
                <SelectTrigger>
                  <SelectValue placeholder="Select an order" />
                </SelectTrigger>
                <SelectContent>
                  {draftOrders.map((order) => (
                    <SelectItem key={order.id} value={order.id.toString()}>{order.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default DesignsPage