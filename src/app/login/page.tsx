//login page

import GoogleLogo from "@/components/GoogleLogo/GoogleLogo";
import LoginInput from "@/components/Login/LoginInput";
import Link from "next/link";

export default function Login(){
    return(
        <div className="login">
            <LoginInput/>
            <div className="login-google"><Link href="http://localhost:4000/api/auth/google/login"><GoogleLogo/>Login dengan Google</Link></div>
            <p>Belum punya akun? Lakukan <Link href="/register">Register</Link></p>
        </div>
    )
}