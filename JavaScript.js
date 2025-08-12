//Let
let nama ="artha";
console.log(nama);
nama = "tahta";
console.log(nama);

//Const
const pi = 3.14;
console.log(pi);

//funciton parameter & Pengembalian Nilai
function sapa(nama) {
    return `Halo, ${nama}`;
}
function sapa(nama) {
    return `Halo, ${nama}`;
}
const sapa = (nama) => {
    return `Halo, ${nama}`;
}
console.log(sapa("Artha"));


//Penggabungan String dan variable
const name= "arta";
const pesan = `tham ${name}`;
console.log(pesan);

//destructuring pada array dan object
const array = [1, 2, 3];
const [a, b, c] = array;
console.log(a, b, c);

const user = { nama: "artha", umur: 17 };
const { nama: namaUser, umur } = user;
console.log(namaUser, umur);

//spread operator
const angka1 = [1, 2, 3];
const angka2 = [angka1, 4,5];
console.log(angka2);

const user1 = { nama: "arta", umur: 17 };
const user2 = { ...user1, alamat: "Jakarta" };
console.log(user2);

function jumlahkan(...angka) {
    return angka.reduce((total, num) => total + num, 0);
}
console.log(jumlahkan(1, 2, 3, 4, 5));

//export dan import
import { tambah, Pi } from './der.js';
console.log(tambah(5, 10));
console.log(Pi);


//fungsi Promise diubah ke async/await

function sayHello() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hai ini dari Promise");
        }, 1000);
    } );
}

//panggil dengan .then
sayHello().then((pesan) => {
    console.log(pesan);
});

//panggil dengan async/await
async function main() {
    const pesan = await sayHello();
    console.log(pesan);
}
main();


//kelas sederhana dan dikembangkan dengan inheritance
 class Kendaraan {
    constructor(nama, merk ) {
        this.nama = nama;
        this.merk = merk;
    }

    info() {
        console.log(`${this.nama} memiliki ${this.merk} sebagai merk.`); 
        }
    }

    const motor = new kendaraan ("supra bapa", "Yamaha");
    motor.info();

//dikembangkan dengan inheritance
class Mobil extends Kendaraan {
    constructor(nama, warna) {
        super(nama, 4);
        this.warna = warna;
    }
    infoMobil() {
        console.log(`${this.nama} memiliki ${this.merk} sebagai merk dan berwarna ${this.warna}.`);
    }
}

const mobil = new Mobil("Alpart", "Hitam");
mobil.info();
mobil.infoMobil();


//to-do list dengan semua aspek di atas 
