interface Owner {
  name: string;
  phone: number;
  location: string;
}

export interface Animal {
  name: string;
  owner: Owner;
  age: number;
  gender: string;
  type: string;
  weight: number;
  id?: string;
  images?: Array<string>;
  description?: string;
}

export enum AnimalType {
  Cat = 'Cat',
  Dog = 'Dog',
  Bird = 'Bird',
  Fish = 'Fish',
}
