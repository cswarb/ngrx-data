import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Permission } from "./my.service";

@Injectable({ providedIn: 'root' })
export class ModifierService extends DefaultDataService<Permission> {
    constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
        super('Permission', http, httpUrlGenerator);
    }

    //https://github.com/johnpapa/angular-ngrx-data/blob/master/docs/entity-dataservice.md
    //Affects each returned result in the entity, rather than the entity as a whole
    getWithQuery(query): Observable<Permission[]> {
        return super.getWithQuery(query).pipe(
            map((perms) => {
                const d = (perms as any).data.map((perm) => {
                    const c = this.mapPerm(perm);
                    return c
                });
                return {
                    ...perms,
                    data: d
                }
            })
        );
    }

    private mapPerm(perm: Permission): Permission {
        return { ...perm, dateLoaded: new Date() };
    }
}
