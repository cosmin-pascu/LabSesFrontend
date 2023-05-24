import {Identifier} from "./Identifier";
import {Name} from "./Name";

export class Hl7User {
  id?: string;
  identifier?: Identifier;
  name?: Name;
  gender?: string;
  birthDate?: string;
  address?: string;
  phone?: number;
  password?: string;
}
