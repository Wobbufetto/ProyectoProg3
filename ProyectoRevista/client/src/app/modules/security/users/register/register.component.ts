import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { EncrDecrService } from 'src/app/services/encr-decr-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private EncrDecr: EncrDecrService) { }

  user: UserModel = {
    id: null,
    realm: null,
    username: null,
    email: null,
    password: null,
    rol: null,
    user: null

  }

  ngOnInit() {
    //var encrypted = this.EncrDecr.set('123456$#@$^@1ERF', 'Wingo2302');
    //var decrypted = this.EncrDecr.get('123456$#@$^@1ERF', encrypted);

    //console.log('Encrypted:' + encrypted);
    //console.log('Encrypted:' + decrypted);
  }

  saveNewUser(): void {
    this.userService.saveNewUser(this.user).subscribe(item => {
      alert("The user has been stored successfully");
      var encrypted = this.EncrDecr.set('123456$#@$^@1ERF', this.user.password);
      var decrypted = this.EncrDecr.get('123456$#@$^@1ERF', encrypted);
      console.log('Encrypted:' + encrypted);
      console.log('Encrypted:' + decrypted);
      this.router.navigate(["/articles/home"])
    })
  }

}
