"use client"

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Trash2, Upload } from 'lucide-react'
import { images } from '@/data/images'
import FixedActionBar from '@/components/fixed-action-bar'

const ImageLibraryPage = () => {
  const [selectedImages, setSelectedImages] = useState<number[]>([])

  const toggleImageSelection = (id: number) => {
    setSelectedImages(prev => 
      prev.includes(id) ? prev.filter(imageId => imageId !== id) : [...prev, id]
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <h1 className="text-2xl font-bold mb-6">My Images</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((image) => (
          <Card 
            key={image.id} 
            className={`cursor-pointer ${selectedImages.includes(image.id) ? 'ring-2 ring-primary' : ''}`}
            onClick={() => toggleImageSelection(image.id)}
          >
            <CardContent className="p-4">
              <div className="aspect-square bg-gray-200 mb-2 flex items-center justify-center text-gray-500">
                {image.name}
              </div>
              <h3 className="font-semibold text-sm truncate">{image.name}</h3>
              <p className="text-xs text-gray-600">{image.filename}</p>
              <p className="text-xs text-gray-600">{image.fileSize} kb</p>
              <p className="text-xs text-gray-600">Uploaded by: {image.uploadedBy}</p>
              <p className="text-xs text-gray-600">Date: {image.uploadDate}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <FixedActionBar
        rightContent={
          <Button>
            <Upload className="mr-2 h-4 w-4" /> Upload New Image
          </Button>
        }
      >
        {selectedImages.length > 0 && (
          <>
            <p className="mr-4">{selectedImages.length} image(s) selected</p>
            <Button variant="destructive">
              <Trash2 className="mr-2 h-4 w-4" /> Delete Selected
            </Button>
          </>
        )}
      </FixedActionBar>
    </div>
  )
}

export default ImageLibraryPage