import "./register.css"

export default function RegisterInput(){
    return(
        <>
            <h1>Register</h1>
            <form  className='register-input'>
                <input type="text" placeholder="Masukkan User Name"/>
                <input type="email" placeholder='Masukkan Email' />
                <input type="password" placeholder='Masukkan Sandi' />
                <input type="password" placeholder='Konfirmasi Sandi' />
                <button>Register</button>
            </form>
        </>
    )
}