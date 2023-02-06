export const REGISTER_USER = 'REGISTER_USER';

export interface RegisterUserActionInterface {
    type: typeof REGISTER_USER;
    payload: {
      username: string;
      email: string;
      password: string;
    };
}
  
export interface StateInterface {
    users: Array<{
      username: string;
      email: string;
      password: string;
    }>;
}