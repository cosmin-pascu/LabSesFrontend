import {Injectable} from "@angular/core";
import {Hl7User} from "../domain/Hl7User";
import {User} from "../domain/User";
import {Name} from "../domain/Name";
import {Identifier} from "../domain/Identifier";

@Injectable({
  providedIn: 'root'
})
export class UserMappingService {

  mapHl7UserToUser(hl7user: Hl7User): User {
    let user = new User();

    user.userId = hl7user.id;
    user.firstName = hl7user.name?.given;
    user.lastName = hl7user.name?.family;
    user.email = hl7user.identifier?.email;
    user.password = hl7user.password;
    user.gender = hl7user.gender;
    user.birthDate = hl7user.birthDate;
    user.address = hl7user.address;
    user.phone = hl7user.phone;

    return user;
  }

  mapUserToHl7User(user: User): Hl7User {
    let hl7user = new Hl7User();

    hl7user.id = user.userId;

    let name = new Name();
    name.use = "official";
    name.given = user.firstName;
    name.family = user.lastName;
    hl7user.name = name;

    let identifier = new Identifier();
    identifier.use = "usual";
    identifier.email = user.email;
    hl7user.identifier = identifier;

    hl7user.gender = user.gender;
    hl7user.birthDate = user.birthDate;
    hl7user.address = user.address;
    hl7user.phone = user.phone;
    hl7user.password = user.password;

    return hl7user;
  }
}
