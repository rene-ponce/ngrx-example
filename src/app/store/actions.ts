import { createAction, props } from "@ngrx/store";
import { Post } from "../interfaces/post.interface";

export const getPosts = createAction('[Posts] Get Posts');

export const getPostsSuccess = createAction(
  '[Posts] Get Posts Success',
  props<{ posts: Post[] }>()
);

export const getPostsFailure = createAction(
  '[Posts] Get Posts Failure',
  props<{ error: string }>()
);

export const addPost = createAction(
  '[Posts] Add Post',
  props<{ post: Post }>()
);

export const removePost = createAction(
  '[Posts] Remove Post',
  props<{ id: string }>()
);