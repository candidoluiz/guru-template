import { Component, OnInit } from '@angular/core';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from 'src/app/core/auth/auth.config';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
    selector: 'app-basic-login',
    templateUrl: './basic-login.component.html'
})
export class BasicLoginComponent implements OnInit {

    constructor(private authService: AuthService) { }

    ngOnInit() {
        document.querySelector('body').setAttribute('themebg-pattern', 'theme1');       
    } 

    login(){
        this.authService.login();
    }    

}
