import { Component } from '@angular/core';

@Component({
  selector: 'app-learnbinding',
  imports: [],
  templateUrl: './learnbinding.html',
  styleUrl: './learnbinding.css',
})
export class Learnbinding {
  student_id: string = "K234111389"
  student_name: string = "Nguyen Van A"
  student_address: string = "123 Le Loi, Da Nang"
  red_text_style={
    color: 'red',
  };
}
