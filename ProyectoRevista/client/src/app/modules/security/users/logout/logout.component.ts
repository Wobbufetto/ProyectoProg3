import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    //setTimeout("this.logoutUser", 2000);
    this.logoutUser();
  }

  logoutUser(): void{
    this.userService.logoutUser();
    this.router.navigate(["/home"]);
  }

}
