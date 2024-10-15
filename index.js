const tabs = document.querySelectorAll('.iconf'); // Barcha tablarni olish
const all_content = document.querySelectorAll('.hotel'); // Barcha kontentlarni olish

tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        // Hamma tab va kontentlardan 'active' klassini olib tashlash
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        all_content.forEach(hotel => {
            hotel.classList.remove('active'); 
            hotel.style.display = 'none'; // Kontentni yashirish
        });

        // Hozirgi tab va kontentga 'active' klassini qo'shish
        tab.classList.add('active');
        all_content[index].classList.add('active'); 
        all_content[index].style.display = 'flex'; // Ko'rinishni faollashtirish
    });
});








