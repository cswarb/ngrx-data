import { createAction } from '@ngrx/store';

const myAction = createAction('', (response: any) => response.user);