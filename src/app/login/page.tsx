import LoginInput from "@/components/Login/LoginInput";
import Link from "next/link";

export default function Login(){
    return(
        <div className="login">
            <h1>Login</h1>
            <LoginInput/>
            <div>Belum punya akun? Lakukan <Link href="/register">Register</Link></div>
        </div>
    )
}