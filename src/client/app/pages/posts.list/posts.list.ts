import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// Service
import { UserService }            from "../../service/user.service";
// Interface
import { Post }                   from "../../../interfaces/post.interface";

@Component({
    selector: 'posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
    public id: number = null;
    private sub: any = null;
    public posts: Post[] = null;
    public postOwnerName: string = '';
    public postOwnerEmail: string = '';

    constructor(
        private route: ActivatedRoute,
        public userService: UserService,
        private router: Router
    ) {}

    ngOnInit(){
        this.sub = this.route.params
            .subscribe(params => {
                this.id = +params['id'];
                this.getPosts(this.id);
            });
    }

    getPosts(id: number) {
        this.userService.getUsers()
            .subscribe(
                data => {
                    this.postOwnerName = data[id].name;
                    this.postOwnerEmail = data[id].email;
                    this.posts = data[id].posts;
                },
                error =>  {
                    console.log(error);
                }
            );
    }

    public getComment(post: Post){
        this.router.navigate([`posts-list/${this.id}/comments-list`, post.id]);
    }
}
