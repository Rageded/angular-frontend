export class User {
  id: number;
  name: string;
  title: string;
  type: string;
  password: string;
  email: string;
}

export const types: any[] = [
	{ value: 'admin', name: 'Admin' },
	{ value: 'user', name: 'User' }
];