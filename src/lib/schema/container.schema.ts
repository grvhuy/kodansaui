export interface Author {
  name: string;
}

export interface Series {
  name: string;
  cover_url: string;
  cover_color: string | null;
  friendly_id: string;
  thumbnail_url: string;
  series_authors: Array<{ index: number; authors: Author[] }>;
  recent_publish_date: string | null;
}

export interface ContainerItem {
  news: any;
  type: string;
  index: number;
  series: Series | null;
  volume: any; // Đổi theo kiểu volume của bạn nếu có
  display_type: string;
}

export interface Container {
  created_at: string;
  index: number;
  type: string;
  title: string;
  sub_title: string | null;
  containers_items: ContainerItem[];
}