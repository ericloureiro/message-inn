import { Communication } from "../../models/communication";
import { Chat } from "../../models/chat";
import faker from "faker";
import PersonFactory from "./person";
import { applyMiddleware } from "redux";

const communicationFactory = (params: Chat | Object): Communication => ({
  id: faker.datatype.uuid(),
  person: PersonFactory.create(),
  date: faker.date.recent(7),
  ...params,
});

const CommunicationFactory = {
  create: (params = {}) => communicationFactory(params),
};

export default CommunicationFactory;
