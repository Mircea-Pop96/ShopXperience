import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-post-product-faq',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  templateUrl: './post-product-faq.component.html',
  styleUrl: './post-product-faq.component.scss',
})
export class PostProductFaqComponent {
  productId: number = this.activatedRoute.snapshot.params['productId'];
  FAQForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private adminService: AdminService,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.FAQForm = this.fb.group({
      question: [null, [Validators.required]],
      answer: [null, [Validators.required]],
    });
  }

  postFAQ() {
    this.adminService
      .postFAQ(this.productId, this.FAQForm.value)
      .subscribe((res) => {
        if (res.id != null) {
          this.snackBar.open('FAQ Posted Succesfully!', 'Close', {
            duration: 5000,
          });
          this.router.navigateByUrl('/admin/dashboard');
        } else {
          this.snackBar.open('Something went wrong!', 'Close', {
            duration: 5000,
            panelClass: 'error-snackbar',
          });
        }
      });
  }
}
