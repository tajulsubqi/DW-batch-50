const judul = document.querySelector('.judul');
const huruf = [...judul.textContent].map(h => `<span>${h}</span>`).join('');
judul.innerHTML = huruf