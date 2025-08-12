//ada nya export dan import 
import { tambah, Pi } from './ders.js';

//variabel let dan const
let username = "Artha";
console.log(username);
username = "Tahta";
console.log(username);

const appName = "To-do List App";
console.log(`${appName} menggunakan nilai PI: ${Pi}`);

//menggabungkan nilai string dengan variabel
const sapa = (nama) => `Halo, ${nama}! Selamat datang di ${appName}`;
console.log(sapa(username));


const kategori = ["Belajar", "Kerja", "Santai"];
const [belajar, kerja, santai] = kategori;
console.log(`Kategori: ${belajar}, ${kerja}, ${santai}`);

const user = { nama: "Artha", umur: 17 };
const { nama: namaUser, umur } = user;
console.log(`Pengguna: ${namaUser}, Umur: ${umur}`);


const listAwal = ["Ngoding", "Makan"];
const listBaru = [...listAwal, "Tidur"];
console.log(listBaru);


class Task {
  constructor(title) {
    this.title = title;
    this.completed = false;
  }
  info() {
    console.log(`Tugas: ${this.title} - Selesai: ${this.completed}`);
  }
}

class UrgentTask extends Task {
  constructor(title, deadline) {
    super(title);
    this.deadline = deadline;
  }
  infoUrgent() {
    console.log(`Tugas: ${this.title} - Deadline: ${this.deadline} - Selesai: ${this.completed}`);
  }
}

const tugas1 = new Task("Belajar JavaScript");
tugas1.info();

const tugas2 = new UrgentTask("Submit Tugas", "Besok");
tugas2.info();
tugas2.infoUrgent();


function fetchTasks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Belajar", "Makan", "Tidur"]);
    }, 1000);
  });
}

async function loadTasks() {
  console.log("Memuat daftar tugas...");
  const tasks = await fetchTasks();
  console.log("Tugas berhasil dimuat:", tasks);
}
loadTasks();


console.log(`Hasil tambah dari module: ${tambah(5, 10)}`);
