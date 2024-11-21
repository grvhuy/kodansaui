export interface Product {
  friendly_id: string;
  name: string;
  rating?: string;
  status?: string;
  description?: string;
  cover_url?: string;
  thumbnail_url?: string;
  tags?: string[];
  cover_color?: string | null;
  series_id?: string;
  properties: {
    ISBN: string;
    print_format?: string;
    print_release?: string;
    pages?: number;
    price?: number;
    publish_date?: string;
  };
}