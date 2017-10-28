import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserProvider {
  firedata = firebase.database().ref('/chatusers');
  constructor(public afireauth: AngularFireAuth) {
  }

  passwordreset(email) {
      var promise = new Promise((resolve, reject) => {
        firebase.auth().sendPasswordResetEmail(email).then(() => {
          resolve({ success: true });
        }).catch((err) => {
          reject(err);
        })
      })
      return promise;
    }
  adduser(newuser) {
    var promise = new Promise((resolve, reject) => {
      this.afireauth.auth.createUserWithEmailAndPassword(newuser.email, newuser.password).then(() => {
        //Estamos utilizando createUserwithEmailAndPassword () en la biblioteca angularfire2 / auth para crear un nuevo usuario.
        this.afireauth.auth.currentUser.updateProfile({
          //Una vez que se crea el usuario, entonces estoy usando el método upadateProfile en la misma biblioteca para agregar el displayName para el usuario
          displayName: newuser.displayName,
          photoURL: ''
          //Una vez hecho esto, estamos creando un niño en la colección de chatusers con el uid del usuario recién registrado como la clave. Mientras creé este hijo, también estoy agregando el photoURL (una URL ficticia de marcador de posición).
        }).then(() => {
        /*
       aqui estamos almacenando información sobre todos los
         usuarios en nuestra colección de chatusers. Esto se debe principalmente
          a que no podremos obtener información sobre todos los usuarios de firebase. 
          Esto es para evitar problemas y proporcionar un mayor nivel de seguridad.
        */ 
          this.firedata.child(this.afireauth.auth.currentUser.uid).set({
            uid: this.afireauth.auth.currentUser.uid,
            displayName: newuser.displayName,
            photoURL: ''
          }).then(() => {
            resolve({ success: true });
            }).catch((err) => {
              reject(err);
          })
          }).catch((err) => {
            reject(err);
        })
      }).catch((err) => {
        reject(err);
      })
    })
    return promise;
  }

  updateimage(imageurl) {
        var promise = new Promise((resolve, reject) => {
            this.afireauth.auth.currentUser.updateProfile({
                displayName: this.afireauth.auth.currentUser.displayName,
                photoURL: imageurl      
            }).then(() => {
                firebase.database().ref('/users/' + firebase.auth().currentUser.uid).update({
                displayName: this.afireauth.auth.currentUser.displayName,
                photoURL: imageurl,
                uid: firebase.auth().currentUser.uid
                }).then(() => {
                    resolve({ success: true });
                    }).catch((err) => {
                        reject(err);
                    })
            }).catch((err) => {
                  reject(err);
               })  
        })
        return promise;
    }
}