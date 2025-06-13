export interface Iglesia {
  id: number;
  name: string;
  description: string;
  image: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  pastor: string;
  services: string[];
  city: string;
  region: string;
  country: string;
  latitude: number;
  longitude: number;
  createdAt: Date | null;
  updatedAt: Date | null;
  status: string;
}

export type Zona = {
  id: number;
  name: string;
  description: string;
  iglesias: Iglesia[];
};

export type Doctrina = {
  id: number;
  name: string;
  description: string;
  verses: string[];
};

export type Evento = {
  id: number;
  name: string;
  description: string;
  dateStart: Date;
  dateEnd: Date;
  horarios: string[];
  location: string;
  map?: string;
  image: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
};
