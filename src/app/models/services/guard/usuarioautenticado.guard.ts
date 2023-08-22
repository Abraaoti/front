import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/models/services/authentication.service';

export const usuarioautenticadoGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    const authService = inject(AuthService);
    if (authService.logado) {
        return true;
    }
    router.navigate(['login']);
    return false;
};
