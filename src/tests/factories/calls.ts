import { sortDatesByNew } from "./../../utils/functions/date";
import {
  randomizeStreamType,
  randomizeCallType,
} from "../../utils/functions/general";
import { Call } from "../../models/call";
import { range } from "lodash";
import CommunicationFactory from "./communication";

const callsFactory = (params: Call | Object): Call =>
  new Call({
    communication: CommunicationFactory.create(),
    call_type: randomizeCallType(),
    stream_type: randomizeStreamType(),
    ...params,
  });

const createMany = (count: number, params: Object) => {
  return range(0, count).map(() => callsFactory(params));
};

const CallsFactory = {
  create: (params = {}) => callsFactory(params),
  createMany,
  createRecents: (count = 1, params = {}): Call[] =>
    createMany(count, params).sort((a, b) =>
      sortDatesByNew(a.communication.date, b.communication.date)
    ),
};

export default CallsFactory;
