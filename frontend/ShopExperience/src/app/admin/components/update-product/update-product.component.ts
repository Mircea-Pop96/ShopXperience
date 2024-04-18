import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatOptionModule,
  ],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.scss',
})
export class UpdateProductComponent {
  productId: number;
  productForm!: FormGroup;
  listOfCategories: any = [];
  selectedFile: File | null;
  imagePreview: string | ArrayBuffer | null;
  existingImage: string | null = null;
  imgChanged: boolean = false;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private adminService: AdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      categoryId: [null, [Validators.required]],
      name: [null, [Validators.required]],
      price: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
    this.productId = +this.activatedRoute.snapshot.params['productId'];

    this.getAllCategories();
    this.getProductById();
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.previewImage();
    this.imgChanged = true;

    this.existingImage = null;
  }

  previewImage() {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };

    reader.readAsDataURL(this.selectedFile);
  }

  getAllCategories() {
    this.adminService.getAllCategories().subscribe((res) => {
      this.listOfCategories = res;
    });
  }

  getProductById() {
    this.adminService.getProductById(this.productId).subscribe((res) => {
      this.productForm.patchValue(res);
      this.existingImage = 'data:image/jpeg;base64, ' + res.byteImg;
    });
  }

  updateProduct() {
    if (this.productForm.valid) {
      const formData: FormData = new FormData();

      if (this.imgChanged && this.selectedFile) {
        formData.append('img', this.selectedFile);
      }

      formData.append('categoryId', this.productForm.get('categoryId').value);
      formData.append('name', this.productForm.get('name').value);
      formData.append('description', this.productForm.get('description').value);
      formData.append('price', this.productForm.get('price').value);

      this.adminService
        .updateProduct(this.productId, formData)
        .subscribe((res) => {
          if (res.id != null) {
            this.snackBar.open('Product Updated Succesfully!', 'Close', {
              duration: 5000,
            });
            this.router.navigateByUrl('/admin/dashboard');
          } else {
            this.snackBar.open(res.message, 'ERROR', {
              duration: 5000,
            });
          }
        });
    } else {
      for (const i in this.productForm.controls) {
        this.productForm.controls[i].markAsDirty();
        this.productForm.controls[i].updateValueAndValidity();
      }
    }
  }
}
