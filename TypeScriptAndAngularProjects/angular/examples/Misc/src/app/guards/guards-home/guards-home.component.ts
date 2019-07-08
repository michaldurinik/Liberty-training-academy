import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-guards-home',
  templateUrl: './guards-home.component.html',
  styleUrls: ['./guards-home.component.css']
})
export class GuardsHomeComponent implements OnInit {
  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  get isAdmin() {
    return this.adminService.isAdmin;
  }

  set isAdmin(value: boolean) {
    this.adminService.isAdmin = value;
  }
}
