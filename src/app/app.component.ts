import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularMSAL';
  isIframe = false;
  loginDisplay = false;

  constructor(private authService: MsalService,
    private router: Router) { }

  ngOnInit() {
    this.isIframe = window !== window.parent && !window.opener;

    this.authService.loginPopup()
        .subscribe({
          next: (result) => {
            console.log(result);
            this.setLoginDisplay();
          },
          error: (error) => {console.log(error); this.router.navigateByUrl("/accessdenied")}
        });
    }

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }
}
