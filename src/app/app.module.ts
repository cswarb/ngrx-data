import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EntityActionFactory, EntityCollectionReducerMethodsFactory, EntityCollectionReducerRegistry, EntityDataModule, EntityDataService, EntityOp, PersistenceResultHandler } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { Action, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModifierService } from './modifier.service';
import { AdditionalEntityCollectionReducerMethodsFactory } from './store/additional-entity-reducer-methods-factory';
import { AdditionalPersistenceResultHandler } from './store/additional-persistence-result-handler';
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
  providers: [
    { provide: PersistenceResultHandler, useClass: AdditionalPersistenceResultHandler },
    {
      provide: EntityCollectionReducerMethodsFactory,
      useClass: AdditionalEntityCollectionReducerMethodsFactory
    },
    ModifierService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private e: EntityCollectionReducerRegistry, private entityDataService: EntityDataService, private mds: ModifierService) {
    //Example to see how to get the reducer for an entity...
    // const permissionEcr = this.e.getOrCreateReducer('Permission');
    // this.e.registerReducer('Permission', permissionEcr);
    
    this.entityDataService.registerService('Permission', this.mds);

  }
}
