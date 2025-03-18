import { useCoinStore } from "../store/coinStore";

function ResetCoin(){
    const removeCoin = useCoinStore((state) => state.resetCoin);
    return(
        <div>
            {/* <h1>Coin : {coins}</h1> */}
            <button onClick={removeCoin}>Reset Coin</button>
            </div>
    )
}

export default ResetCoin;