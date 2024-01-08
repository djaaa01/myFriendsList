import { Injectable } from '@angular/core';
import {
  Auth,
  UserCredential,
  createUserWithEmailAndPassword,
} from '@angular/fire/auth';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc,
  setDoc,
  query,
  where,
  docData,
  deleteDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/core/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(
    private fireAuth: Auth,
    private firestore: Firestore,
    private authService: AuthService
  ) {}
  currentUser = this.authService.getCurrentUse()?.uid;

  async addCollentionData<T>(
    collectionName: string,
    data: any
  ): Promise<string> {
    const collectionRef = collection(this.firestore, collectionName);
    const dataRef = await addDoc(collectionRef, { ...data });
    return dataRef.id;
  }

  update<T>(data: any, collectionName: string): Promise<void> {
    const collectionRef = doc(this.firestore, `${collectionName}/${data.id}`);
    return setDoc(collectionRef, Object.assign({}, data));
  }

  register(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.fireAuth, email, password);
  }

  getCollention<T>(collectionName: string): Observable<T[]> {
    const q = query(
      collection(this.firestore, collectionName),
      where('userUID', '==', this.currentUser)
    );
    const getColectionData = collectionData(q, { idField: 'id' });

    return getColectionData as Observable<T[]>;
  }
}
