import CallsFactory from "../../../tests/factories/calls";
import ChatFactory from "../../../tests/factories/chat";
import StatusFactory from "../../../tests/factories/status";
import { StatusType } from "../../../utils/enums";
import { sleep } from "../../../utils/functions/general";
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

const count = 50;

export const getChats = () => (dispatch: any) => {
  dispatch({ type: GET_CHATS_REQUEST });

  return sleep()
    .then(() => {
      const payload = ChatFactory.createRecents(count);

      dispatch({
        type: GET_CHATS_SUCCESS,
        payload,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_CHATS_ERROR,
        payload: error,
      });
    });
};

export const getCalls = () => (dispatch: any) => {
  dispatch({ type: GET_CALLS_REQUEST });

  return sleep()
    .then(() => {
      const payload = CallsFactory.createRecents(count);

      dispatch({
        type: GET_CALLS_SUCCESS,
        payload,
      });
    })
    .catch(({ json }) => {
      dispatch({
        type: GET_CALLS_ERROR,
        payload: json,
      });
    });
};

export const getStatus = () => (dispatch: any) => {
  dispatch({ type: GET_STATUS_REQUEST });

  return sleep(1000)
    .then(() => {
      const status = StatusFactory.createRecents(count);

      const payload = {
        recent: status.filter((s) => s.type === StatusType.recent),
        seen: status.filter((s) => s.type === StatusType.seen),
        silent: status.filter((s) => s.type === StatusType.silent),
      };

      dispatch({
        type: GET_STATUS_SUCCESS,
        payload,
      });
    })
    .catch(({ json }) => {
      dispatch({
        type: GET_STATUS_ERROR,
        payload: json,
      });
    });
};
