// app.js - SADAM VOX AI STUDIO
document.addEventListener('DOMContentLoaded', () => {
    console.log("SADAM VOX Studio Initialized...");
    
    // هنا ستقوم لاحقاً بربط الأزرار بـ API الخاص بك
    const startButtons = document.querySelectorAll('.btn-royal-gold');
    startButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('جاري تشغيل: ' + btn.innerText);
        });
    });
});
