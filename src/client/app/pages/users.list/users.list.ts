import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
// Service
import { UserService }       from "../../service/user.service";
// Interface
import { User }              from "../../../interfaces/user.interface";

@Component({
    selector: 'users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
    public users: User[];

    constructor(public userService: UserService, private router: Router){}

    ngOnInit(){
        this.getUsers()
    }

    getUsers(){
        this.userService.getUsers()
            .subscribe(
                data => {
                    this.users = data;
                },
                error =>  {
                    console.log(error);
                }
            );
    }

    public getPosts(user: User){
        this.router.navigate(['/posts-list', user.id]);
    }
}
