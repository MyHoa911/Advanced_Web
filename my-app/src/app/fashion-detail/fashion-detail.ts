import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FashionAPIService } from '../myservices/fashion-apiservice';

@Component({
  selector: 'app-fashion-detail',
  templateUrl: './fashion-detail.html',
  styleUrls: ['./fashion-detail.css'],
})
export class FashionDetail {
  fashion: any;
  errMessage: string = '';

  constructor(
    private _service: FashionAPIService,
    private route: Router,
    private activeRouter: ActivatedRoute
  ) {
    activeRouter.paramMap.subscribe((params) => {
      let id = params.get('id');
      if (id != null) {
        this.searchFashion(id);
      }
    });
  }

  searchFashion(fashionId: string) {
    this._service.getFashion(fashionId).subscribe({
      next: (data) => {
        this.fashion = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  view_detail(id: any) {
    this.route.navigate(['/ex53']);
  }


}
