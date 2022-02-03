import { Injectable } from '@angular/core';
import {
    EntityCollectionServiceBase,
    EntityCollectionServiceElementsFactory
} from '@ngrx/data';

export interface Permission {
    id: string;
    dateLoaded: any;
}

@Injectable({ providedIn: 'root' })
export class Service extends EntityCollectionServiceBase<Permission> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Permission', serviceElementsFactory);
    }
}
