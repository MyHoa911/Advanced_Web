import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Ex63ProductService, Ex63Product } from '../../product';
import { Ex63CartService } from '../../cart';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  products: Ex63Product[] = [];
  cartCount: number = 0;
  addedProductId: string | null = null;
  errorMessage: string = '';
  loading: boolean = true;

  constructor(
    private productService: Ex63ProductService,
    private cartService: Ex63CartService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadCartCount();
  }

  loadProducts(): void {
    this.loading = true;
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Không thể tải danh sách sản phẩm. Server chưa chạy?';
        this.loading = false;
      },
    });
  }

  loadCartCount(): void {
    this.cartService.getCart().subscribe({
      next: (res) => (this.cartCount = res.cart.length),
      error: () => {},
    });
  }

  addToCart(product: Ex63Product): void {
    this.cartService.addToCart(product._id!, 1).subscribe({
      next: (res) => {
        this.cartCount = res.cart.length;
        this.addedProductId = product._id!;
        setTimeout(() => (this.addedProductId = null), 1500);
      },
      error: (err) => {
        this.errorMessage = 'Lỗi khi thêm vào giỏ hàng!';
      },
    });
  }

  goToCart(): void {
    this.router.navigate(['/ex63-cart']);
  }

  formatPrice(price: number): string {
    return price.toLocaleString('vi-VN') + ' ₫';
  }
}
