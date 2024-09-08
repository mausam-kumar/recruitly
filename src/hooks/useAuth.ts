import { useCookies } from "react-cookie";
import { user } from "../constant";

const useAuth = () => {
    const [cookies, setCookie] = useCookies(["isLoggedIn"]);

    const login = ({ email, password }: { email: string, password: string }) => {
        if (user.email === email && user.password === password) {
            setCookie("isLoggedIn", true)
        }
    }

    const logout = () => {
        setCookie("isLoggedIn", false)
    }

    return { login, logout, isLoggedIn: cookies.isLoggedIn === true }
};

export default useAuth;