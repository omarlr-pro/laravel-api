import { Outlet } from "react-router-dom";

function Guestlayout() {
    return ( 
    <>
    <main>
        <Outlet/>
    </main>
    </>
    
    );
}

export default Guestlayout;