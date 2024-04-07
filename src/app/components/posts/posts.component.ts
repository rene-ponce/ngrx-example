import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../types/app-state.interface';
import { Observable } from 'rxjs';
import { isLoadingSelector, postsSelector, errorSelector } from '../../store/selectors';

import * as PostsActions from "../../store/actions";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {
  private readonly store: Store<AppState> = inject(Store);
  //return the isloading slice of the state
  readonly isLoading$: Observable<any> = this.store.select(isLoadingSelector);
  //posts
  readonly posts$: Observable<any> = this.store.select(postsSelector);
  //error
  readonly error$: Observable<any> = this.store.select(errorSelector);

  // fetch store data
  public fetchStoreData() {
    // This also triggers the effects
    this.store.dispatch(PostsActions.getPosts());
  }

  ngOnInit() {
    this.fetchStoreData();
  }
}
