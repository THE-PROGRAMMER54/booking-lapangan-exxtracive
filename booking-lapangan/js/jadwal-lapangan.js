document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formCekJadwal");
    const hasil = document.getElementById("hasilJadwalKosong");
    const tanggalInput = document.getElementById("tanggal");
    const lapanganInput = document.getElementById("lapangan");
    const btnKeranjang = document.getElementById("btnKeranjang");
    const modal = document.getElementById("modalKeranjang");
    const closeBtn = document.querySelector(".close-btn");
    const isiBooking = document.getElementById("isiBooking");

    const semuaJam = [
        { start: '08:00', end: '09:00' },
        { start: '09:00', end: '10:00' },
        { start: '10:00', end: '11:00' },
        { start: '11:00', end: '12:00' },
        { start: '13:00', end: '14:00' },
        { start: '14:00', end: '15:00' },
        { start: '15:00', end: '16:00' },
        { start: '16:00', end: '17:00' },
        { start: '17:00', end: '18:00' },
        { start: '18:00', end: '19:00' },
        { start: '20:00', end: '21:00' },
        { start: '21:00', end: '22:00' },
        { start: '22:00', end: '23:00' },
        { start: '23:00', end: '00:00' },
    ];

    const dataBookingSimulasi = [
        { tanggal: '2025-05-01', lapangan: 'Futsal', jamMulai: '15:00', jamSelesai: '17:00' },
        { tanggal: '2025-05-01', lapangan: 'Futsal', jamMulai: '17:00', jamSelesai: '18:00' },
        { tanggal: '2025-05-03', lapangan: 'futsal', jamMulai: '08:00', jamSelesai: '13:00' }
    ];

    const dataKeranjang = [
        { lapangan: "Lapangan Futsal", alamat: "Jl. Mawar No. 123", tanggal: "2025-05-01", jamMulai: "15:00", jamSelesai: "17:00", status: "Pending" },
        { lapangan: "Lapangan Basket", alamat: "Jl. Melati No. 456", tanggal: "2025-05-02", jamMulai: "10:00", jamSelesai: "11:00", status: "Sudah Bayar" },
    ];

    function timeToMinutes(time) {
        const [hour, minute] = time.split(':').map(Number);
        return hour * 60 + minute;
    }

    function overlaps(start1, end1, start2, end2) {
        return timeToMinutes(start1) < timeToMinutes(end2) && timeToMinutes(end1) > timeToMinutes(start2);
    }

    form.addEventListener("submit", function (e) {
    e.preventDefault();

    const tanggal = tanggalInput.value;
    const lapangan = lapanganInput.value;

    console.log('Tanggal yang dipilih:', tanggal);  // Debugging tanggal
    console.log('Lapangan yang dipilih:', lapangan);  // Debugging lapangan

    if (!tanggal) {
        alert("Silakan pilih tanggal terlebih dahulu.");
        return;
    }

    // Filter data booking berdasarkan tanggal dan lapangan
    const jadwalHariIni = dataBookingSimulasi.filter(
        item => item.tanggal === tanggal && item.lapangan === lapangan
    );

    console.log('Jadwal Hari Ini:', jadwalHariIni);  // Debugging untuk hasil filter

    const jamKosong = semuaJam.filter(slot => {
        return !jadwalHariIni.some(b => overlaps(slot.start, slot.end, b.jamMulai, b.jamSelesai));
    });

    console.log('Jam Kosong:', jamKosong);  // Debugging jam kosong

    // Menampilkan hasil
    hasil.innerHTML = `<h3>Jadwal Kosong untuk ${lapangan} pada ${tanggal}</h3>`;
    
    if (jamKosong.length === 0) {
        hasil.innerHTML += "<p>Tidak ada jadwal kosong.</p>";
    } else {
        const ul = document.createElement("ul");
        jamKosong.forEach(jam => {
            const li = document.createElement("li");
            li.textContent = `${jam.start} - ${jam.end}`;
            ul.appendChild(li);
        });
        hasil.appendChild(ul);
    }

    // Menampilkan hasil
    hasil.style.display = "block";  // Menampilkan elemen hasil
});

    // Tombol keranjang
    btnKeranjang.addEventListener("click", () => {
        isiBooking.innerHTML = "";

        dataKeranjang.forEach((item, index) => {
            const statusClass = item.status === "Pending" ? "btn-pending" : "btn-paid";
            isiBooking.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.lapangan}</td>
                    <td>${item.alamat}</td>
                    <td>${item.tanggal}</td>
                    <td>${item.jamMulai} - ${item.jamSelesai}</td>
                    <td><button class="${statusClass}">${item.status}</button></td>
                    <td><button class="btn-cancel">Batalkan</button></td>
                </tr>
            `;
        });

        modal.style.display = "block";
    });

    closeBtn.onclick = () => modal.style.display = "none";

    window.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    };
});
