import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EntityCollectionReducerRegistry, EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { Action, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { entityConfig } from './store/entity-metadata';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ }),
    EffectsModule.forRoot([ ]),
    EntityDataModule.forRoot(entityConfig),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private e: EntityCollectionReducerRegistry) {
    const permissionEcr = this.e.getOrCreateReducer('Permission');

    function userListReducer(state, action) {
      console.log('>>> ', action, state);
      return permissionEcr(state, action);
    }

    this.e.registerReducer('Permission', userListReducer);
  }
}
