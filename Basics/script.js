console.log("Hello fromm the script")

const connectWallet = document.getElementById("connectWallet");
connectWallet.onclick = connect;

async function connect() {
    try{
        if(typeof window.ethereum !== undefined){
            await window.ethereum.request({method:"eth_requestAccounts"})
        }
    }catch(error){
        console.log(error);
    }

    const accounts = await window.ethereum.request({method:"eth_accounts"});
    console.log(accounts);
    const slicedAccount = `${accounts.slice(0,4)}...${accounts.length-4,accounts.length}`
    connectWallet.innerHTML = slicedAccount;
}