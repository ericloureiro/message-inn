import { Status } from "./../../models/status";
import { sortDatesByNew } from "./../../utils/functions/date";
import { randomizeStatusType } from "../../utils/functions/general";
import { range } from "lodash";
import faker from "faker";
import CommunicationFactory from "./communication";

const statusFactory = (params: Status | Object): Status =>
  new Status({
    communication: CommunicationFactory.create({
      date: faker.date.recent(1), // by default, stories last 24h
    }),
    count: faker.datatype.number(10),
    type: randomizeStatusType(),
    ...params,
  });

const createMany = (count: number, params: Object) => {
  return range(0, count).map(() => statusFactory(params));
};

const StatusFactory = {
  create: (params = {}) => statusFactory(params),
  createMany,
  createRecents: (count = 1, params = {}): Status[] =>
    createMany(count, params).sort((a, b) =>
      sortDatesByNew(a.communication.date, b.communication.date)
    ),
};

export default StatusFactory;
