interface RegisterUserAction {
  type: typeof REGISTER_USER;
  payload: {
    username: string;
    email: string;
    password: string;
  };
}

interface State {
  users: Array<{
    username: string;
    email: string;
    password: string;
  }>;
}

export const REGISTER_USER = 'REGISTER_USER';

const initialState: State = {
  users: [],
};

export function registerUser(userData: { username: string; email: string; password: string }): RegisterUserAction {
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