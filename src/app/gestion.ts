import { Injectable } from '@angular/core';
import {
  Firestore,collection, collectionData, addDoc, doc, updateDoc, deleteDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
export type Livre = { id?: string; titre: string;};
@Injectable({ providedIn: 'root',})
export class Gestion {

  constructor(private firestore:Firestore){ }

  private colRef() { return collection(this.firestore, 'livre'); }

  getLivre(): Observable<Livre[]> {
    return collectionData(this.colRef(), { idField: 'id' }) as     Observable<Livre[]>;
  }
  addLivre(titre: string) {
    return addDoc(this.colRef(), { titre, done: false });
  }
  deleteLivre(id: string) {
    return deleteDoc(doc(this.firestore, 'livre', id));
  }
}
