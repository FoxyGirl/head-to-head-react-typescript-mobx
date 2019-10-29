import { firebaseAuth, playersRef } from './../utils/firebase';
import { observable } from 'mobx';

class ViewStore {
  @observable authed: boolean = false;
  @observable isLoading: boolean = true;
  @observable user: any = null;
  @observable errorMessage: string = '';

  firebaseCheckAuth = () => {
    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        this.authed = true;
        this.isLoading = false;
        this.user = user;
      } else {
        this.authed = false;
        this.isLoading = false;
        this.user = null;
      }
    });
  };

  logError = (errorMessage: string): void => {
    this.errorMessage = errorMessage;
  };

  addPlayer = (playerName: string): void => {
    const playerKey = playersRef.push().key;
    playersRef.child(playerKey!).set({ name: playerName });
  };
}

export default ViewStore;
