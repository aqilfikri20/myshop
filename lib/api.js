const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"

export async function getProducts(){
    const res = await fetch (`${API_URL}/api/products`);
    if(!res.ok) throw new Error("Gagal Mengambil Data Produk")
        return res.json()
}

export async function getProduct(id){
    const res = await fetch (`${API_URL}/api/products/${id}`);
    if(!res.ok) throw new Error("Gagal Mengambil Data Product");
        return res.json();
}

export async function createProducts(data){
    const res = await fetch(`${API_URL}/api/products`,{
        method : "POST",
        headers:{"Content-Type" : "application/json"},
            body:JSON.stringify(data),
    });
    return res.json();
}

export async function deleteProduct(id) {
    const res = await fetch(`${API_URL}/api/products/${id}`, {
        method : "DELETE",
    });
    return res.json();
}

export async function loginUser({ phone, password }) {
  const payload = { no_hp: phone, password }; // disesuaikan dengan backend Fiber
  const res = await fetch(`${API_URL}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData.error || "Login gagal. Periksa nomor HP dan password.");
  }

  return res.json(); // berisi { token, user, message }
}

export async function loginWithGoogle(id_token) {
  const res = await fetch(`${API_URL}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id_token }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || "Login Dengan Google gagal");
  }

  return res.json(); // token + user
}

export async function sendOTP(no_hp) {
  const res = await fetch(`${API_URL}/send-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ no_hp }),
  });
  return res.json();
}

export async function verifyOTP(no_hp, otp) {
  const res = await fetch(`${API_URL}/verify-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ no_hp, otp }),
  });
  return res.json();
}