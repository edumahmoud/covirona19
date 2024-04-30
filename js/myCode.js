// بعض المتغيرات لإستدعاء العناصر المطلوبة من صفحة Html
var header      = document.querySelector('.header'),
    logo        = document.querySelector('.logo'),
    listItem    = document.querySelectorAll('.list ul li'),
    totopBtn    = document.querySelector('.totop'),
    scroll      = 30,
    secHiehgt   = 600;

    // تنفيذ بعض الخواص اثناء تحرك الصفحه طولياً
    window.onscroll = function() {

        // Scroll header Change style
        if (window.scrollY >= scroll) {
            header.style.backgroundColor = '#1f7dca';
            header.style.height = '100px';
            header.style.boxShadow = '0 0 4px 1px #000';
            logo.style.top = '-50px'
        } else {
            header.style.backgroundColor = 'transparent';
            header.style.height = '200px';
            header.style.boxShadow = 'none';
            logo.style.top = '0'
        }

        // Scroll To-Top Button
        if (window.scrollY >= secHiehgt) {
            totopBtn.style.display = 'block';
        } else {
            totopBtn.style.display = 'none';
        }

        totopBtn.addEventListener('click', function (){
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

    };


// بعض المتغيرات لإستدعاء العناصر المطلوبة من صفحة Html
let closeWel  = document.getElementById('wel-close');
let welSquare = document.getElementById('wel');
let screenCov = document.getElementById('screen-cover');


    // تنفيذ اخفاء رسالة الترحيب بالضغط على الزر المرفق
    closeWel.addEventListener('click', function () {
        welSquare.style.top = '-1000px';
        screenCov.style.opacity = '0';
        setInterval(function(){
            screenCov.style.display = 'none';
        },1000)
    })


    // دالة ما اذا كان الموقع مدعوم لدى الجهاز ام لا
    function nSupport() {
        const win = window.innerWidth; // تحديد عرض الشاشة
        const nsmCover = document.getElementById('notSupported');
        
        if (win < 1200) {
            nsmCover.style.display = 'block'; // إخفاء العنصر
        } else {
            nsmCover.style.display = 'none'; // عرض العنصر
        }
    }

    // استدعاء الدالة بشكل متكرر كل 100 مللي ثانية لتنفيذ اظهار او اخفاء رسالة الدعم
    setInterval(nSupport, 100);
