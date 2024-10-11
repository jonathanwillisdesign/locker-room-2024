import { Image, ArtworkColor } from '@/types/image';

export const artworkColors: ArtworkColor[] = [
  // Existing colors...
  { id: 6, name: 'Green', hexCode: '#00FF00' },
  { id: 7, name: 'Purple', hexCode: '#800080' },
];

export const images: Image[] = [
  // Existing images...
  {
    id: 6,
    name: 'TEAM D AWAY KIT LOGO',
    filename: 'team-d-away-kit-logo.ai',
    fileSize: 450.75,
    uploadedBy: 'Johnson, Sarah',
    uploadDate: '15-JUN-2023',
    designId: 6,
    status: 'submitted',
    artworkColors: [artworkColors[1], artworkColors[3], artworkColors[6]],
  },
  {
    id: 7,
    name: 'TEAM E HOME KIT CREST',
    filename: 'team-e-home-kit-crest.ai',
    fileSize: 380.20,
    uploadedBy: 'Williams, Mark',
    uploadDate: '18-JUN-2023',
    designId: 7,
    status: 'draft',
    artworkColors: [artworkColors[0], artworkColors[2], artworkColors[5]],
  },
  {
    id: 8,
    name: 'TEAM F TRAINING KIT EMBLEM',
    filename: 'team-f-training-kit-emblem.ai',
    fileSize: 290.85,
    uploadedBy: 'Brown, Emily',
    uploadDate: '20-JUN-2023',
    designId: 8,
    status: 'approved',
    artworkColors: [artworkColors[1], artworkColors[4], artworkColors[7]],
  },
  // Add more images here...
]