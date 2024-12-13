import './landing.css';
import { useEffect } from "react";

async function connectToPhantomWallet(){
    try{
     await window.phantom.solana.connect({network: 'devnet'});
     if (window.phantom.solana.isConnected) {
        window.location.href = "./main"
     }
    }catch(e){
        console.log(e)
    }
}

export default function Landing() {
    useEffect(() => {
        connectToPhantomWallet();
    }, [])

    return (
        <main>
            <div>
                <button onClick={connectToPhantomWallet} className="login-button">
                    Connect to phantom wallet
                </button>
            </div>
        </main>
    )
}