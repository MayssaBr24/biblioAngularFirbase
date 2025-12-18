import { Component } from '@angular/core';
import { Gestion } from '../gestion';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.html',
  styleUrls: ['./ajout.css'],
  standalone:false
})
export class Ajout {
  titre = '';
  constructor(private serv: Gestion) {}
  add() {
    this.serv.addLivre(this.titre);
    this.titre = '';
  }
}
