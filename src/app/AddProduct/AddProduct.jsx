export default function AddProduct() {
    return(
        <div>
            <h1>Tambah Barang</h1>
            <form>
                <input type="text" placeholder="Nama Barang" />
                <input type="number" placeholder="Harga Barang" />
                <input type="text" placeholder="Deskripsi Barang" />
                <input type="number" placeholder="Stok Barang" />
                <input type="file" />
                <button type="submit">Tambah</button>
            </form>
        </div>
    )
}