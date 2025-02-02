import { createReducer, on } from '@ngrx/store';
import { PostsState } from '../interfaces/posts-state.interface';

// actions
import * as PostsActions from './actions';

// initial global state
export const initialState: PostsState = {
    isLoading: false,
    posts: [],
    error: null
}

// reducers
export const reducers = createReducer(
  initialState,
  on(PostsActions.getPosts, state => ({ ...state, isLoading: true })),
  on(PostsActions.getPostsSuccess, (state, action) => ({ ...state, isLoading: false, posts: action.posts })),
  on(PostsActions.getPostsFailure, (state, action) => ({ ...state, isLoading: false, error: action.error })),
  on(PostsActions.addPost, (state, action) => ({...state, isLoading: false, posts: [...state.posts, action.post]}))
);