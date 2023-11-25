export type TFullName = {
  fastName: string;
  lastName: string;
};
export type TAddress = {
  street: string;
  city: string;
  country: string;
};

export type TUser = {
  userId: number;
  userName: string;
  password: string;
  fullName: TFullName;
  age: number;
  email: string;
  isActive: true | false;
  hobbies: string[];
  address: TAddress;
};
