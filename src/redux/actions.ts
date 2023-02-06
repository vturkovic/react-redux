import {REGISTER_USER, StateInterface, RegisterUserActionInterface } from '../interfaces';

const initialState: StateInterface = {
  users: [],
};

export function registerUser(userData: { username: string; email: string; password: string }): RegisterUserActionInterface {
  return {
    type: REGISTER_USER,
    payload: userData,
  };
}

export function registerReducer(state = initialState, action: any) {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        users: [...state.users, { username: action.payload.username, email: action.payload.email, password: action.payload.password }],
      };
    default:
      return state;
  }
}