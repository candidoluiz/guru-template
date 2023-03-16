import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { Subject } from 'rxjs';
import { authConfig } from './auth.config';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public authenticationEventObservable: Subject<boolean> = new Subject<boolean>();

    constructor(private router: Router, private oauthService: OAuthService) {
        this.oauthService.configure(authConfig);
    }

    public login() {
        this.oauthService.loadDiscoveryDocumentAndLogin().then((result: boolean)=>{
            this.authenticationEventObservable.next(result);
        }).catch(error=>{
            this.logout();
        });

    }

    public logout() {
        this.oauthService.logOut();
    }

    public isAuthenticated(): boolean{
        if(this.oauthService.hasValidAccessToken() && this.oauthService.hasValidIdToken()){
            return true;
        }
        return false;
    }
}
