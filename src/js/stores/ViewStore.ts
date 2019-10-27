import { firebaseAuth } from './../utils/firebase';
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
    console.log('addPlayer', playerName);
  };
}

export default ViewStore;
