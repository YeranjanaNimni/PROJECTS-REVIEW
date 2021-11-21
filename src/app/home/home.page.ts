import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  public q1Answers = [
    {index: 'A', value:'-4'},
    {index: 'B', value:'-3'},
    {index: 'C', value:'4'},
    {index: 'D', value:'7'},
    {index: 'E', value:'12'}
  ];


  constructor() {}

  selectedAnswer(id: any){
    for(const each of this.q1Answers){
      document.getElementById(each.index).setAttribute('style','border:none');
    }
    if(id === 'C'){
      document.getElementById(id).setAttribute('style','border:1px solid green');
      document.getElementById('single-select').setAttribute('style','border:1px solid green');
    } else{
      document.getElementById(id).setAttribute('style','border:1px solid red');
      document.getElementById('single-select').setAttribute('style','border:1px solid red');
    }
  }
}
