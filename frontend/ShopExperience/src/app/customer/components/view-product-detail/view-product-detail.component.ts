import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
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
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-view-product-detail',
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
  templateUrl: './view-product-detail.component.html',
  styleUrl: './view-product-detail.component.scss',
})
export class ViewProductDetailComponent {
  productId: any;
  product: any;
  FAQS: any[] = [];
  reviews: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.params['productId'];
    this.getProductDetailsById();
  }

  getProductDetailsById() {
    this.customerService
      .getProductDetailById(this.productId)
      .subscribe((res) => {
        this.product = res.productDto;
        this.product.processedImg =
          'data:image/png;base64, ' + res.productDto.byteImg;

        this.FAQS = res.faqDtoList;

        res.reviewDtoList.forEach((element) => {
          element.processedImg =
            'data:image/png;base64, ' + element.returnedImg;
          this.reviews.push(element);
        });
      });
  }

  goToReview(productId) {
    this.router.navigateByUrl(`/customer/review/${productId}`);
  }
}
