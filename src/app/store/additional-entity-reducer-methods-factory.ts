import { Injectable } from "@angular/core";
import { EntityDefinitionService, EntityCollectionReducerMethodMap } from "@ngrx/data";
import { AdditionalEntityCollectionReducerMethods } from "./additional-entity-collection-reducer-methods";

@Injectable()
export class AdditionalEntityCollectionReducerMethodsFactory {
    constructor(private entityDefinitionService: EntityDefinitionService) { }
    /** Create the  {EntityCollectionReducerMethods} for the named entity type */
    create<T>(entityName: string): EntityCollectionReducerMethodMap<T> {
        const definition = this.entityDefinitionService.getDefinition<T>(entityName);
        const methodsClass = new AdditionalEntityCollectionReducerMethods(entityName, definition);
        return methodsClass.methods;
    }
}