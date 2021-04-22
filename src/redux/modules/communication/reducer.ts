import { PayloadAction } from "@reduxjs/toolkit";
import { Story } from "./../../../models/story";
import { Call } from "./../../../models/call";
import { Chat } from "./../../../models/chat";
import {
  GET_CHATS_REQUEST,
  GET_CHATS_SUCCESS,
  GET_CHATS_ERROR,
  GET_CALLS_REQUEST,
  GET_CALLS_SUCCESS,
  GET_CALLS_ERROR,
  GET_STATUS_REQUEST,
  GET_STATUS_SUCCESS,
  GET_STATUS_ERROR,
} from "./constants";

interface CommunicationState {
  chats: Chat[];
  calls: Call[];
  story: Story;
  isLoadingChats: boolean;
  isLoadingCalls: boolean;
  isLoadingStatus: boolean;
}

const initialState: CommunicationState = {
  chats: [],
  calls: [],
  story: {
    recent: [],
    seen: [],
    silent: [],
  },
  isLoadingChats: false,
  isLoadingCalls: false,
  isLoadingStatus: false,
};

export default function reducer(
  state = initialState,
  action: PayloadAction<CommunicationState>
) {
  switch (action.type) {
    case GET_CHATS_REQUEST:
      return {
        ...state,
        isLoadingChats: true,
      };
    case GET_CHATS_SUCCESS:
      return {
        ...state,
        isLoadingChats: false,
        chats: action.payload,
      };
    case GET_CHATS_ERROR:
      return {
        ...state,
        isLoadingChats: false,
      };
    case GET_CALLS_REQUEST:
      return {
        ...state,
        isLoadingCalls: false,
      };
    case GET_CALLS_SUCCESS:
      return {
        ...state,
        isLoadingCalls: false,
        calls: action.payload,
      };
    case GET_CALLS_ERROR:
      return {
        ...state,
        isLoadingCalls: false,
      };
    case GET_STATUS_REQUEST:
      return {
        ...state,
        isLoadingStatus: false,
      };
    case GET_STATUS_SUCCESS:
      return {
        ...state,
        isLoadingStatus: false,
        story: action.payload,
      };
    case GET_STATUS_ERROR:
      return {
        ...state,
        isLoadingStatus: false,
      };
    default:
      return state;
  }
}
