import {
    BrowserRouter,
    Routes,
    Route,
    useParams,
} from "react-router-dom";
import { Login } from './pages/login/Login'
import { ShopCar } from './pages/shop-car/ShopCar'
import { NoFound } from "./pages/no-found/NoFound";
import { useEffect, useState } from "react";

export const App = () => {

    const [isLogin, setIsLogin] = useState(false)
    const parametros = useParams()

    useEffect(() => {
        console.log(parametros);
    }, [])

    const miFuncion = (params) => {
        console.log("desde el padre:", params);
    }   

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login bus={miFuncion} />} />
                <Route path="/shop" element={<ShopCar />} />
                <Route path="*" element={<NoFound />} />
            </Routes>
        </BrowserRouter>
    )
}