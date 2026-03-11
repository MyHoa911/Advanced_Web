import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Ex58Service } from '../ex58.service';

@Component({
  selector: 'app-ex58-client-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ex58-client-list.html',
  styleUrls: ['./ex58-client-list.css'],
})
export class Ex58ClientList implements OnInit {
  fashions: any[] = [];
  groupedFashions: { [style: string]: any[] } = {};
  styleList: string[] = [];
  searchStyle: string = '';
  errMessage: string = '';

  constructor(private service: Ex58Service, private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadFashions();
  }

  loadFashions() {
    this.service.getAllFashions().subscribe({
      next: (data) => {
        this.fashions = data;
        this.buildGroups(data);
        this.cdr.detectChanges();
      },
      error: (err) => { this.errMessage = err.message; this.cdr.detectChanges(); }
    });
  }

  buildGroups(data: any[]) {
    this.groupedFashions = {};
    this.styleList = [];
    for (const item of data) {
      const style = item.style || 'Other';
      if (!this.groupedFashions[style]) {
        this.groupedFashions[style] = [];
        this.styleList.push(style);
      }
      this.groupedFashions[style].push(item);
    }
    // Remove duplicates in styleList
    this.styleList = [...new Set(this.styleList)];
  }

  get filteredStyles(): string[] {
    return this.styleList;
  }

  search() {
    if (!this.searchStyle.trim()) {
      this.buildGroups(this.fashions);
      return;
    }
    this.service.getFashionsByStyle(this.searchStyle.trim()).subscribe({
      next: (data) => this.buildGroups(data),
      error: (err) => { this.errMessage = err.message; }
    });
  }

  clearSearch() {
    this.searchStyle = '';
    this.buildGroups(this.fashions);
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  viewDetail(id: string) {
    this.router.navigate(['/ex58', 'detail', id]);
  }

  goAdmin() {
    this.router.navigate(['/ex58', 'admin']);
  }
}
