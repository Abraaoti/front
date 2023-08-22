import { inject, ɵɵinject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../models/services/authentication.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree => {
    const router = inject(Router);
    const authService = inject(AuthService);


    if (!authService.isAutenticar()) {
        const usuarioPageId = route.params["id"];
       
        const attemptsToAccessItsOwnPage = usuarioPageId.id === usuarioPageId;
        return true;
    }

    router.navigate(["/login"]);

    return false;
}