import { Injectable } from '@angular/core';
import {
    EntityCollectionServiceBase,
    EntityCollectionServiceElementsFactory
} from '@ngrx/data';

export interface Hero {
    id: string;
}

@Injectable({ providedIn: 'root' })
export class HeroService extends EntityCollectionServiceBase<Hero> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Hero', serviceElementsFactory);
    }
}