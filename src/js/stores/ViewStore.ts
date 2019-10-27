import { firebaseAuth } from './../utils/firebase';
import { observable } from 'mobx';

class ViewStore {
  authed: boolean = false;
  isLoading: boolean = false;
  user: any = null;
  @observable errorMessage: string = '';

  firebaseCheckAuth = () => {
    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        this.authed = true;
        this.isLoading = false;
        this.user = user;
      } else {
        this.authed = true;
        this.isLoading = false;
        this.user = null;
      }
    });
  };

  logError = (errorMessage: string): void => {
    this.errorMessage = errorMessage;
  };
}

export default ViewStore;
