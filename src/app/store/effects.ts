import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as PostsActions from './actions';
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { Post } from "../interfaces/post.interface";

@Injectable()
export class PostsEffects {
  actions$ = inject(Actions);

  getPosts$ = createEffect(() => {
    return this.actions$.pipe(ofType(PostsActions.getPosts), 
    mergeMap(() => {
        //posts$ might represent a call to a service that returns an observable -- similar to a response from an API
        const posts$: Observable<Post[]> = of([
            {
               id: '1',
                title: "test",
                content: "test content"   
            }
        ]); //service
        return posts$.pipe(map((posts) => {
            return PostsActions.getPostsSuccess({posts});
        }),
        catchError((error) => of(PostsActions.getPostsFailure({error: error.message})))
        )//endof pipe
    }))
  })
}