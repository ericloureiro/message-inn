import { sortDatesByNew } from "./../../utils/functions/date";
import { Chat } from "../../models/chat";
import faker from "faker";
import { range } from "lodash";
import CommunicationFactory from "./communication";

const chatFactory = (params: Chat | Object): Chat =>
  new Chat({
    communication: CommunicationFactory.create(),
    last_message: faker.random.words(5),
    ...params,
  });

const createMany = (count: number, params: Object) => {
  return range(0, count).map(() => chatFactory(params));
};

const ChatFactory = {
  create: (params = {}) => chatFactory(params),
  createMany,
  createRecents: (count = 1, params = {}): Chat[] =>
    createMany(count, params).sort((a, b) =>
      sortDatesByNew(a.communication.date, b.communication.date)
    ),
};

export default ChatFactory;
