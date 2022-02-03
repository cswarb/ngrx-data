import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
    Permission: {
        additionalCollectionState: {
            something: 'NEW'
        }
    },
};

// const pluralNames = { Permission: 'Permissions' };

export const entityConfig = {
    entityMetadata,
    // pluralNames
};