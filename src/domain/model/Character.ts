export interface CharacterResume {
  name: string;
  status: string;
  species: string;
  image: string;
}

export interface Character extends CharacterResume {
  created: string;
  gender: string;
  id: number;
  location: Position;
  origin: Position;
  type: string;
  url: string;
}

interface Position {
  name: string;
  url: string;
}
