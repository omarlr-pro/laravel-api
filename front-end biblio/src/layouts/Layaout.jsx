import { Outlet } from "react-router-dom";

function Layaout() {
    return ( 
    <>
    <main>
        <Outlet/>
    </main>
    </>
    
    );
}

export default Layaout;