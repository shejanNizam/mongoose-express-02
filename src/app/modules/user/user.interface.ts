export type IFullName = {
  fastName: string;
  lastName: string;
};
export type IAddress = {
  street: string;
  city: string;
  country: string;
};

export type IUser = {
  userId: number;
  userName: string;
  password: string;
  fullName: IFullName;
  age: number;
  email: string;
  isActive: true | false;
  hobbies: string[];
  address: IAddress;
};
