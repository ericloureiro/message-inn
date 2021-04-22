import { StatusType } from "./../enums";
import { CallType, StreamType } from "../enums";
import faker from "faker";

const randomize = (obj: Object): number => {
  const count = Object.keys(obj).length / 2;

  return faker.datatype.number(count);
};

export const randomizeStreamType = (): StreamType => {
  const index = randomize(StreamType);

  switch (index) {
    case 0:
      return StreamType.phone;
    default:
      return StreamType.video;
  }
};

export const randomizeCallType = (): CallType => {
  const index = randomize(CallType);

  switch (index) {
    case 0:
      return CallType.callMade;
    case 1:
      return CallType.callMissed;
    default:
      return CallType.callReceived;
  }
};

export const randomizeStatusType = (): StatusType => {
  const index = randomize(StatusType);

  switch (index) {
    case 0:
      return StatusType.recent;
    case 1:
      return StatusType.seen;
    default:
      return StatusType.silent;
  }
};

// To mock a network request
export const sleep = (time: number = 1000) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};
