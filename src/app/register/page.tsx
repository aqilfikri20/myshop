import RegisterInput from "@/components/Register/RegisterInput";
import Link from "next/link";

export default function Register(){
    return(
        <div className="register-input">
        <RegisterInput/>
        <p>Sudah punya akun? Lakukan <Link href="/login">Login</Link></p>
        </div>
    )
}