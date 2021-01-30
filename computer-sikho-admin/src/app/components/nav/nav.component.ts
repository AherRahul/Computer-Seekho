import { Component, Input, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  constructor(
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    
  }

  isLoggedIn() {
    return this.tokenService.GetToken();
  }

  userLoggedOut() {
    this.tokenService.DeleteToken();
  }
  
}
