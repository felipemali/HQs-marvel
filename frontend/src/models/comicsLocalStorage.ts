interface ComicPrice {
  type: string;
  price: number;
}

interface Image {
  path: string;
  extension: string;
}

export interface MarvelComic {
  id: number;
  title: string;
  prices: ComicPrice[];
  thumbnail: Image;
}
