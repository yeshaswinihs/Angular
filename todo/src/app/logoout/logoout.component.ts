import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-logoout',
  templateUrl: './logoout.component.html',
  styleUrls: ['./logoout.component.css']
})
export class LogooutComponent implements OnInit {

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
    this.hardcodedAuthenticationService.logout();
  }

}
