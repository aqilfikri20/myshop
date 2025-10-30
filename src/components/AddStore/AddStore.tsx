export default function AddStore() {
    return(
        <div>
            <h1>Buat Toko</h1>
            <form>
                <input type="text" placeholder="Nama Toko" />
                <input type="number" placeholder="Lokasi" />
                <input type="text" placeholder="Deskripsi Toko" />
                <input type="file" />
                <button type="submit">Buat</button>
            </form>
        </div>
    )
}