import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-reg',
  templateUrl: './basic-reg.component.html'
})
export class BasicRegComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }

}
