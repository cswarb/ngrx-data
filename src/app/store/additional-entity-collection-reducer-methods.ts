import { EntityCollectionReducerMethods, EntityDefinition, EntityCollection, EntityAction } from "@ngrx/data";

//Reducer updating
export class AdditionalEntityCollectionReducerMethods<T> extends EntityCollectionReducerMethods<T> {
    constructor(public entityName: string, public definition: EntityDefinition<T>) {
        super(entityName, definition);
    }
    
    protected queryManySuccess(
        collection: EntityCollection<T>,
        action: EntityAction<T[]>
    ): EntityCollection<T> {
        const ec = super.queryManySuccess(collection, action);
        if ((action.payload as any).page) {
            // save the page property from action.payload to entityCollection instance
            (ec as any).page = (action.payload as any).page;

            (ec as any).dateLoaded = new Date().toISOString();

            //Update just a reducer property that is derived (for illustration)
            (ec as any).numResults = (action.payload as any).data.length.toFixed(1)
        };

        return ec;
    }
}