import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { DatePipe, CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-view-ordered-products',
  standalone: true,
  imports: [
    DatePipe,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatChipsModule,
    MatMenuModule,
    MatRadioModule,
    MatDividerModule,
    MatDatepickerModule,
    MatDialogModule,
    MatTableModule,
    CommonModule,
  ],
  templateUrl: './view-ordered-products.component.html',
  styleUrl: './view-ordered-products.component.scss',
})
export class ViewOrderedProductsComponent {
  orderId: any;
  orderedProductDetailsList = [];
  totalAmount: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.orderId = this.activatedRoute.snapshot.params['orderId'];
    this.getOrderedProductDetailsByOrderId();
  }

  getOrderedProductDetailsByOrderId() {
    this.customerService.getOrderedProducts(this.orderId).subscribe((res) => {
      res.productDtoList.forEach((element) => {
        element.processedImg = 'data:image/jpeg;base64, ' + element.byteImg;
        this.orderedProductDetailsList.push(element);
      });

      this.totalAmount = res.orderAmount;
    });
  }

  goToReview(productId) {
    this.router.navigateByUrl(`/customer/review/${productId}`);
  }
}
