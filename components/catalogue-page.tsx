"use client"

import { useState, useMemo } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { catalogueItems } from '@/data/catalogueItems'

const CataloguePage = () => {
  const [genderFilters, setGenderFilters] = useState<string[]>([])
  const [sportFilters, setSportFilters] = useState<string[]>([])
  const [categoryFilters, setCategoryFilters] = useState<string[]>([])
  const [expandedSections, setExpandedSections] = useState({
    gender: true,
    sport: true,
    category: true,
  })

  const filteredItems = useMemo(() => {
    return catalogueItems.filter(item => 
      (genderFilters.length === 0 || genderFilters.includes(item.gender)) &&
      (sportFilters.length === 0 || sportFilters.includes(item.sport)) &&
      (categoryFilters.length === 0 || categoryFilters.includes(item.category))
    )
  }, [genderFilters, sportFilters, categoryFilters])

  const toggleFilter = (filterType: 'gender' | 'sport' | 'category', value: string) => {
    const setFilter = {
      gender: setGenderFilters,
      sport: setSportFilters,
      category: setCategoryFilters,
    }[filterType]

    setFilter((prev) => 
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    )
  }

  const toggleSection = (section: 'gender' | 'sport' | 'category') => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  const FilterSection = ({ title, options, filters, filterType }: { 
    title: string, 
    options: string[], 
    filters: string[], 
    filterType: 'gender' | 'sport' | 'category' 
  }) => (
    <div className="mb-4">
      <Button
        variant="ghost"
        className="w-full justify-between px-4 py-2"
        onClick={() => toggleSection(filterType)}
      >
        {title}
        {expandedSections[filterType] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </Button>
      {expandedSections[filterType] && (
        <div className="mt-1">
          {options.map((option) => (
            <div key={option} className="flex items-center px-4 py-2 hover:bg-accent">
              <Checkbox
                id={`${filterType}-${option}`}
                checked={filters.includes(option)}
                onCheckedChange={() => toggleFilter(filterType, option)}
              />
              <label htmlFor={`${filterType}-${option}`} className="ml-2 text-sm cursor-pointer flex-grow">
                {option}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Catalog</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 mb-4 md:mb-0 md:mr-4">
          <h2 className="text-lg font-semibold mb-2">Filters</h2>
          <FilterSection 
            title="Gender" 
            options={['Men', 'Women', 'Youth']} 
            filters={genderFilters} 
            filterType="gender" 
          />
          <FilterSection 
            title="Sport" 
            options={['Soccer', 'Basketball']} 
            filters={sportFilters} 
            filterType="sport" 
          />
          <FilterSection 
            title="Category" 
            options={['Apparel', 'Accessories']} 
            filters={categoryFilters} 
            filterType="category" 
          />
        </div>
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-4">
                  <div className="aspect-square bg-gray-200 mb-2">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-semibold text-sm truncate">{item.name}</h3>
                  <p className="text-xs text-gray-600">{item.gender}</p>
                  <p className="text-xs text-gray-600">{item.sport}</p>
                  <p className="text-xs text-gray-600">{item.category}</p>
                  <p className="text-sm font-semibold mt-1">${item.price.toFixed(2)}</p>
                  <p className="text-xs text-gray-600">SKU: {item.sku}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CataloguePage