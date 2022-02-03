import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
    Permission: {
        additionalCollectionState: {
            page: null,
            numResults: null,
            dateLoaded: null
        }
    },
};

// const pluralNames = { Permission: 'Permissions' };

export const entityConfig = {
    entityMetadata,
    // pluralNames
};