document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('formCekJadwal').addEventListener('submit', function(e) {
        e.preventDefault();
    
        const tanggal = document.getElementById('tanggal').value;
        const lapangan = document.getElementById('lapangan').value;
    
        // Simulasi data booking
        const dataBooking = [
        { tanggal: '2025-05-01', lapangan: 'Futsal', jam: '15:00 - 17:00' },
        { tanggal: '2025-05-01', lapangan: 'Futsal', jam: '17:00 - 18:00' },
        { tanggal: '2025-05-01', lapangan: 'Basket', jam: '10:00 - 11:00' },
        ];
    
        const semuaJam = [
        '08:00 - 09:00',
        '09:00 - 10:00',
        '10:00 - 11:00',
        '11:00 - 12:00',
        '13:00 - 14:00',
        '14:00 - 15:00',
        '15:00 - 16:00',
        '16:00 - 17:00',
        '17:00 - 18:00',
        '18:00 - 19:00',
        ];
    
        const hasil = document.getElementById('hasilJadwalKosong');
        hasil.innerHTML = `<h3>Jadwal Kosong untuk ${lapangan} pada ${tanggal}</h3>`;
    
        const bookingTanggalIni = dataBooking.filter(item => item.tanggal === tanggal && item.lapangan === lapangan);
        const jamTerbooking = bookingTanggalIni.map(item => item.jam);
    
        const jamKosong = semuaJam.filter(jam => !jamTerbooking.includes(jam));
    
        if (jamKosong.length === 0) {
        hasil.innerHTML += '<p>Tidak ada jadwal kosong.</p>';
        } else {
        const ul = document.createElement('ul');
        jamKosong.forEach(jam => {
            const li = document.createElement('li');
            li.textContent = jam;
            ul.appendChild(li);
        });
        hasil.appendChild(ul);
        }
    });
    
    const modal = document.getElementById("modalKeranjang");
    const btn = document.getElementById("btnKeranjang");
    const closeBtn = document.querySelector(".close-btn");
    const section = document.getElementById("isiBooking");
    
    const dataBooking = [
        { lapangan: "Lapangan Futsal", alamat: "Jl. Mawar No. 123", tanggal: "2025-05-01", jamMulai: "15:00", jamSelesai: "17:00", status: "Pending" },
        { lapangan: "Lapangan Basket", alamat: "Jl. Melati No. 456", tanggal: "2025-05-02", jamMulai: "10:00", jamSelesai: "11:00", status: "Sudah Bayar" },
        { lapangan: "Lapangan Bulutangkis", alamat: "Jl. Kenanga No. 789", tanggal: "2025-05-03", jamMulai: "12:00", jamSelesai: "14:00", status: "Pending" },
        { lapangan: "Lapangan Tenis", alamat: "Jl. Anggrek No. 101", tanggal: "2025-05-04", jamMulai: "09:00", jamSelesai: "11:00", status: "Sudah Bayar" },
        { lapangan: "Lapangan Voli", alamat: "Jl. Dahlia No. 112", tanggal: "2025-05-05", jamMulai: "16:00", jamSelesai: "18:00", status: "Pending" },
        { lapangan: "Lapangan Futsal", alamat: "Jl. Mawar No. 123", tanggal: "2025-05-06", jamMulai: "13:00", jamSelesai: "15:00", status: "Sudah Bayar" },
        { lapangan: "Lapangan Basket", alamat: "Jl. Melati No. 456", tanggal: "2025-05-07", jamMulai: "08:00", jamSelesai: "10:00", status: "Pending" },
        { lapangan: "Lapangan Bulutangkis", alamat: "Jl. Kenanga No. 789", tanggal: "2025-05-08", jamMulai: "11:00", jamSelesai: "13:00", status: "Sudah Bayar" },
        { lapangan: "Lapangan Tenis", alamat: "Jl. Anggrek No. 101", tanggal: "2025-05-09", jamMulai: "14:00", jamSelesai: "16:00", status: "Pending" },
        { lapangan: "Lapangan Voli", alamat: "Jl. Dahlia No. 112", tanggal: "2025-05-10", jamMulai: "17:00", jamSelesai: "19:00", status: "Sudah Bayar" },
        { lapangan: "Lapangan Futsal", alamat: "Jl. Mawar No. 123", tanggal: "2025-05-11", jamMulai: "19:00", jamSelesai: "21:00", status: "Pending" },
        { lapangan: "Lapangan Basket", alamat: "Jl. Melati No. 456", tanggal: "2025-05-12", jamMulai: "08:30", jamSelesai: "10:30", status: "Sudah Bayar" }
    ];

    btn.addEventListener("click", () => {
        section.innerHTML = "";
        dataBooking.forEach((item, index) => {
            section.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.lapangan}</td>
                    <td>${item.alamat}</td>
                    <td>${item.tanggal}</td>
                    <td>${item.jamMulai} - ${item.jamSelesai}</td>
                    <td>
                        <button class="${item.status === 'Pending' ? 'btn-pending' : 'btn-paid'}">${item.status}</button>
                    </td>
                    <td>
                        <button class="btn-cancel">Batalkan</button>
                    </td>
                </tr>
            `;
        });
        modal.style.display = "block";
    });

    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };
});
  