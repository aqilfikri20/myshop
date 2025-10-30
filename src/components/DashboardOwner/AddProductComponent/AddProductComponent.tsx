import "addproduct.css"

export default function AddProductComponent() {
    return(
        <div className="wrap-addproduct">
            <h1>Tambah Barang</h1>
            <form>
                <input type="text" placeholder="Masukkan Nama Barang" />
                <input type="number" placeholder="Masukkan Harga Barang" />
                <input type="text" placeholder="Masukkan Deskripsi Barang" />
                <input type="text" placeholder="Masukkan Kategori Barang" />
                <input type="number" placeholder="Masukkan Banyak Barang" />
                <input type="file" />
                <button type="submit">Tambah</button>
            </form>
        </div>
    )
}
