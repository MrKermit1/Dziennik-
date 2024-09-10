import { Input } from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import GlownaHead from "../glownaHead";
import Stopka from "../Stopka";
import {Select, SelectSection, SelectItem} from "@nextui-org/select";
import { useState } from "react";

function DodajUsera(params) {

    const [typUsera, setTypUsera] = useState('')
    const [klasy, setKlasy] = useState([])
    return (
        <>
            <GlownaHead elements={[
                "Dodaj użytkownika",
                "Usuń użytkownika",
                "Dodaj klasę"]} 
                main="/admin"
            />

            <div className="flex flex-col items-center">
                    <h4 className=" text-center mt-10" >Wpisz dane aby dodać użytkownika</h4>
                    <div className="w-56 mt-40">

                        <div id="typ-usera">
                            <Select label="Wybierz typ użytkownika">
                                <SelectItem onClick={(e) => console.log("uczen")}>
                                    Uczeń
                                </SelectItem>
                                <SelectItem onClick={(e) => console.log("nauczyciel")}> 
                                    Nauczyciel
                                </SelectItem>
                                <SelectItem onClick={(e) => console.log("admin")}>
                                    Administrator
                                </SelectItem>
                            </Select>
                        </div>

                        <Input type="email" label="Email"  />
                        <Input type="password" label="Hasło"/>
                        

                    </div>
                    <Button color="primary" className=" mt-10">Zaloguj</Button>
                    <p className="text-red-600"></p>
            </div>

            <Stopka/>
        </>
    )
}export default DodajUsera