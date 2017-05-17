import 'hammerjs';
import {async, ComponentFixture, TestBed, fakeAsync} from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import {DebugElement, Type } from '@angular/core';
import { AppComponent } from "../src/client/app/app.component";
import {UsersListComponent} from "../src/client/app/pages/users.list/users.list";
import {PostsListComponent} from "../src/client/app/pages/posts.list/posts.list";
import {CommentsListComponent} from "../src/client/app/pages/comments.list/comments.list";
import {UserService} from "../src/client/app/service/user.service";
import {RouterTestingModule} from "@angular/router/testing";
import {MaterialModule} from "@angular/material";
import {HttpModule, JsonpModule} from "@angular/http";
import { SpyLocation }         from '@angular/common/testing';
import { Router } from '@angular/router';

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let location = '/users-list';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UsersListComponent,
        PostsListComponent,
        CommentsListComponent
      ],
      providers: [UserService],
      imports: [
        RouterTestingModule,
        MaterialModule,
        HttpModule,
        JsonpModule
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch('Test');
  });

  it('should navigate to "users-list" immediately', fakeAsync(() => {
    expect(location).toEqual('/users-list');
  }));

});
