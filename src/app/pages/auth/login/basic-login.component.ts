import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html'
})
export class BasicLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }

}
