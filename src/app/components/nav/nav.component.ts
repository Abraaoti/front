import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/models/services/authentication.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    constructor(private router: Router, private auth:AuthService) { }
    ngOnInit(): void {
       //this.router.navigate(['home']);
    }

    logout() {
        this.auth.logout();
    }
}
