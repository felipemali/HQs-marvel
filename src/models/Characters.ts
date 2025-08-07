export interface MarvelAPIResponse {
  code: number;
  status: string;
  data: MarvelData;
}

export interface MarvelData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: MarvelCharacter[] | undefined;
}

export interface MarvelCharacter {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: MarvelThumbnail;
  resourceURI: string;
  comics: MarvelComics;
}

export interface MarvelThumbnail {
  path: string;
  extension: string;
}

export interface MarvelComics {
  available: number;
  returned: number;
  items: MarvelComicSummary[];
}

export interface MarvelComicSummary {
  resourceURI: string;
  name: string;
}
