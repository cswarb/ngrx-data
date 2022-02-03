import { Component, OnInit } from '@angular/core';
import { EntityCollection } from '@ngrx/data';
import { MemoizedSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Permission, Service } from './my.service';


//https://betterprogramming.pub/write-effects-for-actions-in-ngrx-data-214c93869758
//https://stackoverflow.com/questions/59073752/ngrx-data-how-can-i-extend-a-collection-reducer-replace-handling-of-the-res
//https://betterprogramming.pub/write-effects-for-actions-in-ngrx-data-214c93869758
//https://norato-felipe.medium.com/super-fast-stateful-crud-a-practical-guide-to-ngrx-data-9aaf89186348
//https://github.com/johnpapa/angular-ngrx-data
//https://ngrx.io/guide/data/entity-reducer#customizing-entity-reducer-behavior
//https://stackoverflow.com/questions/62828590/how-to-extend-custom-entity-collection-reducers-in-ngrx-data



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data$: Observable<Permission[]>;
  loading$: Observable<boolean>;
  page$: any;
  serviceCallState$: any;
  numResults$: any;
  dateLoaded$: any;

  constructor(private service: Service, private store: Store<any>) {
    this.data$ = this.service.entities$;
    this.loading$ = this.service.loading$;
  }

  ngOnInit() {
    this.service.getWithQuery('page=2');
    
    //custom property in store - https://ngrx.io/guide/data/entity-metadata
    this.page$ = this.service.selectors$.page$;
    this.numResults$ = this.service.selectors$.numResults$;
    this.dateLoaded$ = this.service.selectors$.dateLoaded$;
    
    this.store.select(this.service.selectors.selectPage as MemoizedSelector<any, EntityCollection<Permission>>).subscribe((r) => {
      console.log(r);
    });
  }
}
