import { Person } from "./../../../models/person";
import {
  GET_USER_ERROR,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "./constants";
import { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  me: Person | Object;
  isLoadingUser: boolean;
}

const initialState: AuthState = {
  me: {},
  isLoadingUser: false,
};

export default function reducer(
  state = initialState,
  action: PayloadAction<AuthState>
) {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        isLoadingUser: false,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        isLoadingUser: false,
        me: action.payload,
      };
    case GET_USER_ERROR:
      return {
        ...state,
        isLoadingUser: false,
      };
    default:
      return state;
  }
}
