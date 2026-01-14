import { Component } from '@angular/core';

@Component({
  selector: 'app-ptb1',
  imports: [],
  templateUrl: './ptb1.html',
  styleUrls: ['./ptb1.css'],
})
export class Ptb1 {
  get_solution(hsa: HTMLInputElement, hsb: HTMLInputElement, result: HTMLElement) {
    const a = parseFloat(hsa.value);
    const b = parseFloat(hsb.value);
    if (a==0 && b==0)
    {
      result.innerHTML="Phương trình vô số nghiệm!"
    }
    else if (a==0 && b!=0)
    {
      result.innerHTML="Phương trình vô nghiệm!"
    }
    else
    {
      let x = -b/a;
      result.innerHTML="Phương trình có nghiệm x = " + x
    }
  }
  clear_solution(hsa: HTMLInputElement, hsb: HTMLInputElement, result: HTMLElement) {
    hsa.value = '';
    hsb.value = '';
    result.innerHTML = '';
    hsa.focus();
  }
}
