import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../shared/models/services/authentication.service';

@Injectable(
)
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private auth: AuthService) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
        let authenticated = this.auth.authenticated();
        if (authenticated) {
            return true;
        }

        this.router.navigate(['login']);
        return false;
    }
}