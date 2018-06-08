import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
// import { Store } from '@ngrx/store';
// import { go } from '@ngrx/router-store';
// import * as fromRoot from '../reducers';

@Injectable()
export class AuthGuardService implements CanActivate {

    /**
     * 用于判断是否可以激活该路由
     *
     * @param route
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return Observable.of(true);
    }

    // checkAuth(): Observable<boolean> {
    //     return this.store$
    //         .select(s => s.auth)
    //         .map(auth => {
    //             const result = auth.token !== undefined && auth.token !== null;
    //             if (!result) {
    //             this.store$.dispatch(go(['/login']));
    //             }
    //             return result;
    //         })
    //         .defaultIfEmpty(false);
    // }
}
