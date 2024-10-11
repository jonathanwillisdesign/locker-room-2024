"use client"

import { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { orders } from '@/data/orders'
import { teams } from '@/data/teams'
import { users } from '@/data/users'

const OrdersPage = () => {
  const router = useRouter()
  const [statusFilter, setStatusFilter] = useState('draft')
  const [teamFilter, setTeamFilter] = useState('all')
  const [createdByFilter, setCreatedByFilter] = useState('all')
  const [sortColumn, setSortColumn] = useState<'name' | 'number' | 'date'>('date')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc')
  const [visibleOrders, setVisibleOrders] = useState(10)

  const filteredAndSortedOrders = useMemo(() => {
    let result = orders.filter(order => {
      const statusMatch = 
        (statusFilter === 'draft' && ['NEW CUSTOMER DRAFT', 'DRAFT'].includes(order.status)) ||
        (statusFilter === 'in-progress' && ['IMAGE NOT APPROVED', 'AWAITING APPROVAL', 'IN PRODUCTION'].includes(order.status)) ||
        (statusFilter === 'closed' && ['DELIVERED'].includes(order.status) && !order.canceled)
      const teamMatch = teamFilter === 'all' || order.teamId === parseInt(teamFilter)
      const createdByMatch = createdByFilter === 'all' || order.createdById === parseInt(createdByFilter)

      return statusMatch && teamMatch && createdByMatch
    })

    result.sort((a, b) => {
      if (sortColumn === 'date') {
        return sortDirection === 'asc' ? a.parsedDate.getTime() - b.parsedDate.getTime() : b.parsedDate.getTime() - a.parsedDate.getTime()
      } else {
        return sortDirection === 'asc' ? a[sortColumn].localeCompare(b[sortColumn]) : b[sortColumn].localeCompare(a[sortColumn])
      }
    })

    return result
  }, [statusFilter, teamFilter, createdByFilter, sortColumn, sortDirection])

  const handleSort = (column: 'name' | 'number' | 'date') => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }

  const loadMore = () => {
    setVisibleOrders(prevVisible => Math.min(prevVisible + 10, filteredAndSortedOrders.length))
  }

  const navigateToOrderDetails = (orderId: number) => {
    router.push(`/orders/${orderId}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Orders</h1>
      <div className="flex justify-between items-center mb-6">
        <div className="space-x-2">
          <button 
            className={`px-4 py-2 ${statusFilter === 'draft' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`} 
            onClick={() => setStatusFilter('draft')}
          >
            Draft
          </button>
          <button 
            className={`px-4 py-2 ${statusFilter === 'in-progress' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`} 
            onClick={() => setStatusFilter('in-progress')}
          >
            In Progress
          </button>
          <button 
            className={`px-4 py-2 ${statusFilter === 'closed' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`} 
            onClick={() => setStatusFilter('closed')}
          >
            Closed
          </button>
        </div>
        <div className="flex space-x-4">
          <Select value={teamFilter} onValueChange={setTeamFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Team" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Teams</SelectItem>
              {teams.map(team => (
                <SelectItem key={team.id} value={team.id.toString()}>{team.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={createdByFilter} onValueChange={setCreatedByFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Created By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Users</SelectItem>
              {users.map(user => (
                <SelectItem key={user.id} value={user.id.toString()}>{user.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px] cursor-pointer" onClick={() => handleSort('name')}>
                Order Name
                {sortColumn === 'name' && (sortDirection === 'asc' ? <ChevronUp className="inline ml-1" /> : <ChevronDown className="inline ml-1" />)}
              </TableHead>
              <TableHead className="w-[150px] cursor-pointer" onClick={() => handleSort('number')}>
                Order Number
                {sortColumn === 'number' && (sortDirection === 'asc' ? <ChevronUp className="inline ml-1" /> : <ChevronDown className="inline ml-1" />)}
              </TableHead>
              <TableHead className="w-[150px]">Team</TableHead>
              <TableHead className="w-[150px]">Created By</TableHead>
              <TableHead className="w-[150px] cursor-pointer" onClick={() => handleSort('date')}>
                Date Created
                {sortColumn === 'date' && (sortDirection === 'asc' ? <ChevronUp className="inline ml-1" /> : <ChevronDown className="inline ml-1" />)}
              </TableHead>
              <TableHead className="w-[150px]">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedOrders.slice(0, visibleOrders).map((order) => (
              <TableRow 
                key={order.id} 
                className="cursor-pointer hover:bg-muted"
                onClick={() => navigateToOrderDetails(order.id)}
              >
                <TableCell className="font-medium">{order.name}</TableCell>
                <TableCell>{order.number}</TableCell>
                <TableCell>{teams.find(t => t.id === order.teamId)?.name}</TableCell>
                <TableCell>{users.find(u => u.id === order.createdById)?.name}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {visibleOrders < filteredAndSortedOrders.length && (
        <div className="mt-4 text-center">
          <Button onClick={loadMore}>Load More</Button>
        </div>
      )}
    </div>
  )
}

export default OrdersPage