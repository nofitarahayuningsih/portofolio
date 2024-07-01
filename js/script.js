// UNTUK MENAMPILKAN DATA MESSAGE US
function tampilkanPesan() {

    var nama = document.getElementById('nama').value;
    if (nama == "") {
        alert('Nama wajib diisi');
        return false;
    }


    var email = document.getElementById('email').value;
    if (email == "") {
        alert('Email wajib diisi');
        return false;
    }
    var tanggalLahir = document.getElementById('tanggal-lahir').value;
    var jenisKelamin = '';
    if (document.getElementById('laki-laki').checked) {
        jenisKelamin = 'Laki-Laki';
    } else if (document.getElementById('perempuan').checked) {
        jenisKelamin = 'Perempuan';
    }
    var pesan = document.getElementById('pesan').value;

    var currentTime = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });

    document.getElementById('current-time').innerText = 'Waktu saat ini: ' + currentTime;
    document.getElementById('output-nama').innerText = 'Nama: ' + nama;
    document.getElementById('output-email').innerText = 'Email: ' + email;
    document.getElementById('output-tanggal-lahir').innerText = 'Tanggal Lahir: ' + tanggalLahir;
    document.getElementById('output-jenis-kelamin').innerText = 'Jenis Kelamin: ' + jenisKelamin;
    document.getElementById('output-pesan').innerText = 'Pesan: ' + pesan;
    document.getElementById('nama').value = "";
    document.getElementById('email').value = "";
    document.getElementById('tanggal-lahir').value = "";
    document.getElementById('pesan').value = "";


}