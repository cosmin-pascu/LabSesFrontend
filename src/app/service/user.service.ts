import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../domain/User";
import {Hl7User} from "../domain/Hl7User";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private fullUrl = 'https://laboratoareses-default-rtdb.firebaseio.com/patients.json?auth=nWxrn5N9M2RybtanLvmnYG5bWV1ieJFduvBzj77a';

  private baseUrl = 'https://laboratoareses-default-rtdb.firebaseio.com/patients';

  private apiKey = 'auth=nWxrn5N9M2RybtanLvmnYG5bWV1ieJFduvBzj77a';

  constructor(private http: HttpClient) {
  }

  createUser(hl7user: Hl7User): Observable<any> {
    const url = this.fullUrl;

    return this.http.post(url, hl7user);
  }

  getAllUsers(): Observable<Array<Object>> {
    const url = this.fullUrl;

    return this.http.get<Array<Object>>(url);
  }

  getUserById(id: string): Observable<Hl7User> {
    const url = this.baseUrl + '/' + id + '.json?' + this.apiKey;

    return this.http.get<Hl7User>(url)
  }

  editUser(id: string, hl7User: Hl7User): Observable<any> {
    const url = this.baseUrl + '/' + id + '.json?' + this.apiKey;

    return this.http.put(url, hl7User);
  }

  deleteUser(id: string): Observable<any> {
    const url = this.baseUrl + '/' + id + '.json?' + this.apiKey;

    return this.http.delete(url);
  }
}
