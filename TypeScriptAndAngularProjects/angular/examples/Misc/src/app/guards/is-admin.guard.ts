import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {AdminService} from './admin.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class IsAdminGuard implements CanActivate {
  constructor(private adminService: AdminService) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.adminService.isAdmin;
  }
}
