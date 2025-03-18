import { useEffect, useState } from "react";

function MieInstan(){
    const [mie, setMie] = useState("Belum dimasak");

    useEffect(() => {
        async function masakMie(){
            await new Promise((resolve) => setTimeout(resolve, 3000));
            console.log("Mie sudah matang");
            setMie("Sudah dimasak");
        }
        masakMie();
    }, []);

    return (
        <div>
            <h1>🍜Masak Mie Instan </h1>
            <p>Status Mie : {mie}</p>
        </div>
    );
}