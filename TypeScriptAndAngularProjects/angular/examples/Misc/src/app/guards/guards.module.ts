import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {UserComponent} from './user/user.component';
import {AdminComponent} from './admin/admin.component';
import {GuardsHomeComponent} from './guards-home/guards-home.component';
import {AdminService} from './admin.service';
import {IsAdminGuard} from './is-admin.guard';
import {FormsModule} from '@angular/forms';

const routes: Route[] = [
  {
    path: 'guards',
    component: GuardsHomeComponent,
    children: [
      {path: 'user', component: UserComponent},
      {path: 'admin', component: AdminComponent, canActivate: [IsAdminGuard]},
      {path: '**', redirectTo: 'user'}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    UserComponent,
    AdminComponent,
    GuardsHomeComponent
  ],
  exports: [
    GuardsHomeComponent
  ],
  providers: [
    AdminService,
    IsAdminGuard
  ]
})
export class GuardsModule {
}
