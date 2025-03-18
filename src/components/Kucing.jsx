import { useEffect, useState } from "react";

function Kucing(){
    const [makanan, setMakanan] = useState("Ikan");

    useEffect(() => {
        console.log("Makan", makanan);
    }, [makanan]);

    

    return (
        <div>
            <h1>Makan {makanan}</h1>
            <button onClick={() => setMakanan("Ikan")}>Ikan</button>
            <button onClick={() => setMakanan("Daging")}>Daging</button>
        </div>
    );
}
export default Kucing;