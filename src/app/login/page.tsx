import LoginInput from "@/components/Login/LoginInput";
import Link from "next/link";

export default function Login(){
    return(
        <div className="login">
            <LoginInput/>
            <Link href="http://localhost:4000/api/auth/google/login">Login dengan Google</Link>
            <p>Belum punya akun? Lakukan <Link href="/register">Register</Link></p>
        </div>
    )
}