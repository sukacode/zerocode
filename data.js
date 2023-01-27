const nama = "ilhamalfir";
let usia = 30;

function generateBiodata() {
  if (usia == 30) {
    //first condition
    console.log("Anda Dewasa");
  } else {
    //jika kondisi tidak terpenuh
    console.log("Anda anak anak");
  }
  console.log(`nama saya adalah ${nama} dan usia saya ${usia} tahun`);
}

console.log(nama);
console.log(usia);
generateBiodata();
