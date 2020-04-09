function hitung_bayar()
{
    var hrg_tiket = 0;
    var tujuan = (document.getElementById("tujuan").value);
    if (tujuan == "kampung_lalang") {
        hrg_tiket = 500000;
    } else if (tujuan == "binjai") {
        hrg_tiket = 150000;
    } else if (tujuan == "medan") {
        hrg_tiket = 400000;
    }

    var nama_pemesan = document.getElementById("nm_pemesan").value;
    if(nama_pemesan == null || nama_pemesan == ""){
        alert("Isi Nama Pemesan");
        return false;
    }

    var jml_tiket = (document.getElementById("jml_tiket").value);
    if(jml_tiket == null || jml_tiket == ""){
        alert("Isi Jumlah Tiket");
        return false;
    }
    var diskon = 0;
    var member = document.getElementById("member");
    if (member.checked){
        diskon = 0.1;
    } else {
        diskon = 0;
    }

    var subtotal = hrg_tiket * jml_tiket;
    var hrg_diskon = subtotal * diskon;
    var total = subtotal - hrg_diskon;

    alert("Harga 1 Tiket : Rp. " + hrg_tiket + "\nSub Total : Rp. " + subtotal + "\nHarga Diskon : Rp. " + hrg_diskon + "\nTotal Bayar : Rp. " + total);
}