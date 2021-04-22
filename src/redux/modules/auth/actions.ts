import PersonFactory from "../../../tests/factories/person";
import { sleep } from "../../../utils/functions/general";
import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from "./constants";

export const getUser = () => (dispatch: any) => {
  dispatch({ type: GET_USER_REQUEST });

  return sleep()
    .then(() => {
      const payload = PersonFactory.create();

      dispatch({
        type: GET_USER_SUCCESS,
        payload,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_USER_ERROR,
        payload: error,
      });
    });
};
