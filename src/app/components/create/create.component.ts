import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../types/app-state.interface';
import { Post } from '../../interfaces/post.interface';

import * as PostsActions from "../../store/actions";

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  private readonly store: Store<AppState> = inject(Store);

  public postForm = new FormGroup({
    title: new FormControl<string | null>("", {validators: [Validators.required], nonNullable: true}),
    description: new FormControl<string | null>("", {validators: [Validators.required], nonNullable: true})
  });

  public addPost = () => {
    const {title, description} = this.postForm.value;

    const _post: Post = {
      id: Date.now().toString(),
      title,
      content: description
    }

    // add post to state
    this.store.dispatch(PostsActions.addPost({post: _post}));

    // reset form
    this.postForm.reset();
  };
}
