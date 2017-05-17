import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

// pages
import { UsersListComponent }    from "./pages/users.list/users.list";
import { PostsListComponent }    from "./pages/posts.list/posts.list";
import { CommentsListComponent } from "./pages/comments.list/comments.list";

const appRoutes: Routes = [
    { path: '', redirectTo: '/users-list', pathMatch: 'full' },
];

const usersRoutes: Routes = [
    { path: 'users-list', component: UsersListComponent},
    { path: 'posts-list/:id', component: PostsListComponent},
    { path: 'posts-list/:parent-id/comments-list/:id', component: CommentsListComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes), RouterModule.forChild(usersRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
