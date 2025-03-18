import {useCoinStore} from "../store/coinStore";
import AddCoin from "../components/AddCoin";
import ResetCoin from "../components/ResetCoin";

function CoinPage(){
    // const {coins, addCoin, removeCoin} = useCoinStore();
    const coins = useCoinStore((state) => state.coins);

    return(
            <div>
            <h1>Coin : {coins}</h1>
            <AddCoin />
            <ResetCoin />
            </div>
    )
}

export default CoinPage;