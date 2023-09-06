import { Injectable } from '@angular/core';
import EC from "elliptic";
const ec = new EC("secp256k1");

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  public blockchainInstance = new BlockChain();
  public walletKeys = [];

  constructor() { 
    this.blockchainInstance.difficulty = 1;
    this.blockchainInstance.minePendingTransactions("my-wallet-address");

    this.generateWalletKeys();
   }

   private generateWalletKeys(){
    const ec = new EC.ec("elliptic");
    const key = ec.geyKeyPair();
   }
}
