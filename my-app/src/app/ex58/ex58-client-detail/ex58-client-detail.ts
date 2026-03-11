import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Ex58Service } from '../ex58.service';

@Component({
  selector: 'app-ex58-client-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex58-client-detail.html',
  styleUrls: ['./ex58-client-detail.css'],
})
export class Ex58ClientDetail implements OnInit {
  fashion: any = null;
  safeDetail: SafeHtml = '';
  errMessage: string = '';

  constructor(
    private service: Ex58Service,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.service.getFashionById(id).subscribe({
          next: (data) => {
            this.fashion = data;
            this.safeDetail = this.sanitizer.bypassSecurityTrustHtml(data?.fashion_detail || '');
          },
          error: (err) => { this.errMessage = err.message; }
        });
      }
    });
  }

  goBack() {
    this.router.navigate(['/ex58']);
  }

}
