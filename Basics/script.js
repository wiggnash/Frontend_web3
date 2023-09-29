console.log("Hello fromm the script")

const connectWallet = document.getElementById("connectWallet");
connectWallet.onclick = connect;

async function connect() {
    if(typeof window.ethereum !== undefined){
        await window.ethereum.request({method:"eth_requestAccounts"})
    }
}