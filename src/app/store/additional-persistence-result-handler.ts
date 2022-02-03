import { DefaultPersistenceResultHandler, EntityAction } from "@ngrx/data";
import { Action } from "@ngrx/store";

//Action updating
export class AdditionalPersistenceResultHandler extends DefaultPersistenceResultHandler {
    handleSuccess(originalAction: EntityAction): (data: any) => Action {
        const actionHandler = super.handleSuccess(originalAction);
        // return a factory to get a data handler to
        // parse data from DataService and save to action.payload
        return function (data: any) {
            const action = actionHandler.call(this, data);
            if (action && data && data.page) {
                // save the data.page to action.payload.page
                (action as any).payload.page = data.page;
            };

            //reducer for success actions requires that action.payload.data is an array of entities or an entity
            action.payload.data = data.data;

            return action;
        };
    }
}
