import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Login } from './login/login';
import { Singup } from './singup/singup';
import { Toy } from './toy/toy';

export const routes: Routes = [
    {path: '', title: 'Home', component: Home},
    {path: 'about', title: 'About', component: About},
    {path: 'login', title: 'Login', component: Login},
    {path: 'singup', title: 'Signup', component: Singup},
    {path: 'toy/:path', title: 'Toy', component: Toy},
    {path: '**', redirectTo: 'home' }
    
];
