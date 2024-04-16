import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-post-category',
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
  templateUrl: './post-category.component.html',
  styleUrls: ['./post-category.component.scss'],
})
export class PostCategoryComponent {
  categoryForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
  }

  addCategory(): void {
    if (this.categoryForm.valid) {
      this.adminService
        .addCategory(this.categoryForm.value)
        .subscribe((res) => {
          if (res.id !== null) {
            this.snackBar.open('Category Posted Succesfully!', 'Close', {
              duration: 5000,
            });
            this.router.navigateByUrl('/admin/dashboard');
          } else {
            this.snackBar.open(res.message, 'Close', {
              duration: 5000,
              panelClass: 'error-snackbar',
            });
          }
        });
    } else {
      this.categoryForm.markAllAsTouched();
    }
  }
}
