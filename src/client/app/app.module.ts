import { NgModule } from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

//Angular-Material
import { MaterialModule }          from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Routing
import { AppRoutingModule }        from "./routing.module";

//Pages
import { AppComponent }            from './app.component';
import { UsersListComponent }      from "./pages/users.list/users.list";
import { PostsListComponent }      from "./pages/posts.list/posts.list";
import { CommentsListComponent }   from "./pages/comments.list/comments.list";

//Service
import { UserService }             from "./service/user.service";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    UsersListComponent,
    PostsListComponent,
    CommentsListComponent
  ],
  providers: [ UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
