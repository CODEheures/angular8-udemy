import {Component} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  message = 'Vous êtes déconnecté.';
  private name: string;
  private password: string;

  constructor(private authService: AuthService, private router: Router) { }

  // Informe l'utilisateur sur son authentfication.
  setMessage() {
    this.message = this.authService.isLoggedIn ?
      'Vous êtes connecté.' : 'Identifiant ou mot de passe incorrect.';
  }

  // Connecte l'utilisateur auprès du Guard
  login() {
    this.message = 'Tentative de connexion en cours ...';
    this.authService.login(this.name, this.password).subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Récupère l'URL de redirection depuis le service d'authentification
        // Si aucune redirection n'a été définis, redirige l'utilisateur vers la liste des pokemons.
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/pokemon/all';
        // Redirige l'utilisateur
        this.router.navigate([redirect]);
      } else {
        this.password = '';
      }
    });
  }

  // Déconnecte l'utilisateur
  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
