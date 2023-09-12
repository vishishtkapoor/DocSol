import React from 'react'
import { useEffect, useState } from 'react';
import { Connection, clusterApiUrl, PublicKey } from '@solana/web3.js';
import * as web3 from '@solana/web3.js';
import { Button } from '@nextui-org/react';
const WalletConnect = () => {
    const [provider, setProvider] = useState(null);
    const [connected, setConnected] = useState(false);
    const [wallet, setWallet] = useState(null);

    useEffect(() => {
        const connectWallet = async () => {
          if (window.solana) {
            setProvider(window.solana);
    
            try {
              await window.solana.connect();
              setConnected(true);
              const wallet = new web3.Wallet(window.solana);
              setWallet(wallet);
            } catch (error) {
              console.error('Error connecting to wallet:', error);
            }
          }
        };
    
        connectWallet();
      }, []);

      const handleSignTransaction = async () => {
        if (wallet) {
          // Implement your transaction logic here
        }
      };
  
  return (
   <>
     <div>
      <h2>Solana Wallet Integration</h2>
      {connected ? (
        <Button onClick={handleSignTransaction}>Sign Transaction</Button>
      ) : (
        <p>Connect a Solana wallet to get started.</p>
      )}
    </div>
   </>
  )
}

export default WalletConnect