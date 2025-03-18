import { useCoinStore } from "../store/coinStore";

function addCoin(){
    const addCoin = useCoinStore((state)=> state.addCoin);
    return(
        <div>
            {/* <h1>Coin : {coins}</h1> */}
            <button onClick={() => addCoin()}>Add Coin</button>
            </div>
    )
}
export default addCoin;