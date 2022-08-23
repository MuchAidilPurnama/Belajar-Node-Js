var gajikotorSebulan = 4500000;
var transport = 10000;
var pajak = gajikotorSebulan * 25 / 1000;
var kerja = 24;
var infak = 50000;  
var bpjs = 250000;


var totalpot = pajak + infak + bpjs;
var totaltun = transport * 24;
var gajibersih= (gajikotorSebulan - totalpot) + totaltun;



console.log("Gaji kotor : " + gajikotorSebulan);
console.log("==============================");

console.log("Potongann pajak 2,5% : " + (gajikotorSebulan * 25 / 1000));
console.log("Potongan bpjs : Rp." + bpjs);
console.log("Potongan infak : Rp." + infak );

console.log("==============================");
console.log("Total Potongan : Rp." + totalpot);
console.log("==============================");

console.log("Tunjangan tranport : Rp." + transport);
console.log("Total Hari Kerja : 24 hari" );

console.log("==============================");

console.log("Total tunjangan : Rp." + totaltun);

console.log("==============================");

console.log("Perhitungan Gaji :");
console.log("(Gaji Kotor - Potongan) + Tunjangan")
console.log("(4500000-412500) + 240000");
 
console.log("===================================");
console.log(" Gaji Bersih : Rp." + gajibersih);
