const dataDiri = {
    nama: "Ratih",
    umur: 17,
    tanggal_lahir: "11 Februari 2005", 
    sapa: function (){
        console.log(`Halo ${this.nama}`);
    },
};

dataDiri.umur = 18;

//console.log(
// `Nama saya ${dataDiri.nama} umur saya ${dataDiri.umur} lahir ${dataDiri.tanggal_lahir}`
//);

// function sapaAkuBg(namaAwal, namaAkhir = "Default"){
//     console.log(`Namaku ${namaAwal} ${namaAkhir}`);
// }

// function sapaAkuBgReturn(namaAwal, namaAkhir = "Default"){
//     return `Namaku ${namaAwal} ${namaAkhir}`;
// }

// const hasil = sapaAkuBgReturn("Value");
// console.log(hasil);

// function finalNilai(nilai){
//     if (nilai > 90){
//         return "A";
//     } else if (nilai > 70){
//         return "B";
//     } else {
//         return "C";
//         }
// } 

// const nilaiUjian = finalNilai(90);
// console.log(nilaiUjian);

//sapaAkuBg("Ratih", "Ks");
//sapaAkuBg("Deny");

const salam = (namaAwal, namaAkhir) => {
    return `Halo ${namaAwal} ${namaAkhir}`;
};

const salam2 = (nama1, nama2) => `Halo ${nama1}`;
const salam3 = (nama) =>`Halo ${nama}`;

const angkas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

const angkasKaliDua = angkas.map ((angka) => angka * 3);

angkas.forEach((value) => value * 2);

const angkaGenap = angkas.filter((value) => value % 2 == 0);

console.log(angkaGenap);

console.log("angkas", angkas);
console.log("angkasKaliDua", angkasKaliDua);

dataDiri.sapa();
