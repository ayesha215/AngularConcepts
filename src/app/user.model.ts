export interface userModel {
  id: number;
  name: string;
  password: string;
  imageUrl: string;
  email: string;
  phoneNumber: number;
  dateOfBirth: string;
}

export interface productModel {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
}
