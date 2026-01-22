import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  student_id: string = 'SV123'
  student_name: string = 'Nguyễn Thị Long Lanh'
  student_email: string = "longlanh@gmail.com"
  my_uni_logo='UEL_Logo.png'
}
