import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable }              from 'rxjs/Observable';
import { User }                    from "../../interfaces/user.interface";

@Injectable()
export class UserService {
    private usersUrl = 'http://localhost:3000/users';

    constructor (private http: Http) {}

    getUsers(): Observable<User[]> {
        return this.http.get(this.usersUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }
    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}