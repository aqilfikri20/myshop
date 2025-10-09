import RegisterInput from "@/components/Register/RegisterInput";
import Link from "next/link";

export default function Register(){
    return(
        <div>
        <h1>Register</h1>
        <RegisterInput/>
        <div>Sudah punya akun? Lakukan <Link href="/login">Login</Link></div>
        </div>
    )
}