import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';
import { Utills } from './utills';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected year = new Date().getFullYear();
  hasAuth(){
    return UserService.hasAuth();
  }

  getUserName(){
    const user = UserService.getActiveUser();
    return `${user.name} ${user.surname}`;
  }
  constructor(protected router: Router, private utills: Utills) {}
  
  doLogout(){
    this.utills.showDialog('Are you sure you want to logout?', () => {
      
      this.router.navigateByUrl('/');
         UserService.logout();
      
    },
    "Logout Now",
    "Dont Logout"
    )
   
  }
}
