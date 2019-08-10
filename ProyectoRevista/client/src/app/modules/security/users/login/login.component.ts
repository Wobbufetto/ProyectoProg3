import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }


  email: string = '';
  password: string = '';
  ngOnInit() {
  }

  onLoginBtnClick(): void{
    this.userService.loginUser(this.email, this.password).subscribe(item =>{
      //console.warn(item.user);
      this.userService.saveToken(item.id);
      this.userService.saveUserInformation(item.user);
    })
  }

}
