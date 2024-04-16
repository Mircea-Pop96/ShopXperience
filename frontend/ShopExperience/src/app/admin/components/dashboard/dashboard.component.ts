import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule, RouterModule, MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  products: any[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.products = [];
    this.adminService.getAllProducts().subscribe((res) => {
      res.forEach((element) => {
        element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
        this.products.push(element);
      });
    });
  }
}
