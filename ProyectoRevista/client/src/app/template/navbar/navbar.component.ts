import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService) { }

  userLogged: boolean = false;
  completeName: string = '';
  dirEmail : string = '';

  ngOnInit() {
    this.showMenu();
  }

  showMenu(): void {
    let userInfo = this.userService.getUserInformation();
    if (isNullOrUndefined(userInfo)) {
      this.userLogged = false;
    } else {
      this.userLogged = true;
      this.completeName = userInfo.realm;
      this.dirEmail = userInfo.email;
    }
  }
  
}
