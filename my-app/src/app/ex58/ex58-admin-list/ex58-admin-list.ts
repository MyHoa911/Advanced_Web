import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Ex58Service } from '../ex58.service';

@Component({
  selector: 'app-ex58-admin-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex58-admin-list.html',
  styleUrls: ['./ex58-admin-list.css'],
})
export class Ex58AdminList implements OnInit {
  fashions: any[] = [];
  errMessage: string = '';
  successMessage: string = '';

  constructor(private service: Ex58Service, private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.getAllFashions().subscribe({
      next: (data) => { this.fashions = data; this.cdr.detectChanges(); },
      error: (err) => { this.errMessage = err.message; this.cdr.detectChanges(); }
    });
  }

  addNew() {
    this.router.navigate(['/ex58', 'admin', 'new']);
  }

  edit(id: string) {
    this.router.navigate(['/ex58', 'admin', 'edit', id]);
  }

  view(id: string) {
    this.router.navigate(['/ex58', 'detail', id]);
  }

  deleteFashion(id: string, subject: string) {
    const confirmed = window.confirm(`Delete "${subject}"? This cannot be undone.`);
    if (!confirmed) return;
    this.service.deleteFashion(id).subscribe({
      next: () => {
        this.successMessage = 'Deleted successfully.';
        this.fashions = this.fashions.filter(f => f._id !== id);
        setTimeout(() => this.successMessage = '', 3000);
      },
      error: (err) => { this.errMessage = err.message; }
    });
  }

  goClient() {
    this.router.navigate(['/ex58']);
  }
}
