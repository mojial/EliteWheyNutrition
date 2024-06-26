import { Injectable } from '@angular/core';
import { Auth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, User } from '@angular/fire/auth';
@Injectable({
    providedIn: 'root'
})

export class UserService{

    constructor(private auth: Auth) {}

    register({ email, password}: any){
        return createUserWithEmailAndPassword(this.auth, email, password);
    }

    login({email, password}: any){
        return signInWithEmailAndPassword(this.auth, email, password);
    }

    loginWithGoogle(){
        return signInWithPopup(this.auth, new GoogleAuthProvider());
    }

    logout(){
        return signOut(this.auth);
    }

    getUserEmail(): string | null {
        const user: User | null = this.auth.currentUser;
        return user ? user.email : null;
      }
      
}