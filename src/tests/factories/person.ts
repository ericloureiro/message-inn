import { Person } from "../../models/person";
import faker from "faker";

const personFactory = (params: Person | Object): Person => ({
  id: faker.datatype.uuid(),
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  avatar: faker.internet.avatar(),
  ...params,
});

const PersonFactory = {
  create: (params = {}) => personFactory(params),
};

export default PersonFactory;
