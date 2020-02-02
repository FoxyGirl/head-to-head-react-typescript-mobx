import { firebaseAuth, playersRef } from './../utils/firebase';
import { observable } from 'mobx';
import { Player } from '../models';

class ViewStore {
  @observable authed: boolean = false;
  @observable isLoading: boolean = true;
  @observable user: any = null;
  @observable errorMessage: string = '';
  @observable players: Player[] = [];

  constructor() {
    this.fetchPlayers();
  }

  fetchPlayers = () => {
    playersRef.on('value', (snapshot: any) => {
      let players: Player[] = [];
      snapshot.forEach((childSnapshot: any) => {
        const player = childSnapshot.val();
        player.key = childSnapshot.key;
        players.push(player);
      });

      this.players = players;
    });
  };

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

  updatePlayer = (key: string, name: string) => {
    playersRef.child(key).set({ name });
  };
}

export default ViewStore;
