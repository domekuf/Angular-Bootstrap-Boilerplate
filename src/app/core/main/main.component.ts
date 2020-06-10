import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { getIsAdmin } from 'src/app/auth/store/auth.selectors';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isAdmin$: Observable<boolean>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.isAdmin$ = this.store.select(getIsAdmin);
  }

}
