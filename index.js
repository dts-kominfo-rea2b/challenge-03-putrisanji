// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
    {
        id: "D-10001",
        nama: "Minyak Goreng Delima",
        harga: 25000,
        kuantitas: 2,
    },
    {
        id: "D-10020",
        nama: "Beras Mamos",
        harga: 48000,
        kuantitas: 1,
    },
    {
        id: "F-00010",
        nama: "Larutan Cap Kaki Empat",
        harga: 7500,
        kuantitas: 8,
    },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal

function listBelanjaan(data) {
    let dataBelanja = data;
    let buyList = [];
    dataBelanja.forEach((element) => {
        buyList.push(`- ${element.nama} x ${element.kuantitas}`);
    });
    return buyList;
}

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = (data) => {
    let dataBelanja = data;
    let total = 0;
    dataBelanja.forEach((element) => {
        total += element.harga * element.kuantitas;
    });
    return total;
};

// ! JANGAN DIMODIFIKASI
const main = () => {
    console.log("Selamat datang customer");

    console.log("Belanjaan Anda adalah:");
    console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
    console.log(
        "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
    );
};

main();

module.exports = {
    dataBelanjaan,
    listBelanjaan,
    totalBelanjaan,
};
