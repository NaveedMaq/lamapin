export type TGalleryItem = {
  _id: string;
  media: string;
  width: number;
  height: number;
  title: string;
  description: string;
  link: string;
  board?: string;
  tags: Array<string>;
  user: string;
};
