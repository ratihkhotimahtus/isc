//destructuring array
const listMahasiswa = ["Ozi", "Arya", "Ahmad", "Ratih", "Nabila", "Mayda"];

const [a,b,c,d,e,f] = listMahasiswa;

console.log(d);

//console.log(g);
//destructuring object
const dataDiri = {
    nama: "Ratih",
    umur: 17,
    tanggal_lahir: "11 februari 2005",
    sapa: function(){
        console.log(`Halo ${this.name}`);
    },
}

const {umur, tanggal_lahir, nama} = dataDiri;

console.log(nama);