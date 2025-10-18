const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"

export async function getProducts(){
    const res = await fetch (`$API_URL}/api/products`);
    if(!res.ok) throw new Error("Gagal Mengambil Data Produk")
        return res.json()
}

export async function getProduct(id){
    const res = await fetch (`${API_URL}/api/products/${id}`);
    if(!res.ok) throw new Error("Gagal Mengambil Data Product");
        return res.json();
}

export async function createProducts(data){
    const res = await fetch(`${API_URL}/api/products/${id}`,{
        method : "POST",
        headers:{"Content-type" : "aplication/json"},
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