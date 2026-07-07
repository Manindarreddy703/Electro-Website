export interface GuestUser {
  name: string;
  email: string;
  isGuest: true;
  createdAt: string;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface GuestFormValues {
  name: string;
  email: string;
}
