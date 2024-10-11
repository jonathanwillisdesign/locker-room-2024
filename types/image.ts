export interface Image {
  id: number;
  name: string;
  filename: string;
  fileSize: number;
  uploadedBy: string;
  uploadDate: string;
  designId: number | null;
  status: 'draft' | 'submitted' | 'approved';
  artworkColors: ArtworkColor[];
}

export interface ArtworkColor {
  id: number;
  name: string;
  hexCode: string;
}