import { Component, OnInit } from '@angular/core';
import { EntityCollection } from '@ngrx/data';
import { MemoizedSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Permission, Service } from './my.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data$: Observable<Permission[]>;
  loading$: Observable<boolean>;
  something$: any;
  serviceCallState$: any;

  constructor(private service: Service, private store: Store<any>) {}

  ngOnInit() {
    this.service.getAll();
    this.data$ = this.service.entities$;
    this.loading$ = this.service.loading$;

    //custom property in store - https://ngrx.io/guide/data/entity-metadata
    //https://stackoverflow.com/questions/62828590/how-to-extend-custom-entity-collection-reducers-in-ngrx-data
    this.something$ = this.service.selectors$.something$;
    
    this.store.select(this.service.selectors.selectSomething as MemoizedSelector<any, EntityCollection<Permission>>).subscribe((r) => {
      console.log(r);
    });
  }
}
