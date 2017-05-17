import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../service/user.service";
import {Comment} from '../../../interfaces/comment.interface';

@Component({
    selector: 'comments-list',
    templateUrl: './comments-list.component.html',
    styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {
    public parentId: number = null;
    public id: number = null;
    private sub: any = null;
    public comments: Comment[] = null;
    public postName: string = '';

    constructor(private route: ActivatedRoute, public userService: UserService){}

    ngOnInit() {
        this.sub = this.route.params
            .subscribe(params => {
                this.parentId = +params['parent-id'];
                this.id = +params['id'];
                this.getComments(this.parentId, this.id);
            });
    }

    getComments(parentId: number, id: number) {
        this.userService.getUsers()
            .subscribe(
                data => {
                    this.postName = data[parentId].posts[id].title;
                    this.comments = data[parentId].posts[id].comment;
                },
                error =>  {
                    console.log(error);
                }
            );
    }
}
