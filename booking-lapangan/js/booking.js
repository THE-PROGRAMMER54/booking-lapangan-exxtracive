document.addEventListener("DOMContentLoaded", function () {
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
