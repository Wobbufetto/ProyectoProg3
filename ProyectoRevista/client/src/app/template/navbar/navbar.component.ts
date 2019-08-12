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
  numberRol: number = 0;
  rol: string = '';

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
      this.numberRol = userInfo.rol;
      if(this.numberRol == 1){
        this.rol = "Author User";
      }else if(this.numberRol == 2){
        this.rol = "Editor User";
      }else{
        this.rol = "Evaluator User"
      }
    }
  }
  
}
