import { Component } from '@angular/core';
import { Gestion, Livre } from '../gestion';

@Component({
  selector: 'app-liste',
  standalone: false,
  templateUrl: './liste.html',
  styleUrls: ['./liste.css']
})

export class Liste {

  liste: any=[];
  constructor(private serv: Gestion) {
    this.liste = this.serv.getLivre(); }
  del(id: string) {
    this.serv.deleteLivre(id);
  }
}
