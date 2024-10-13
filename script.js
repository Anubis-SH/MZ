// Language change function
// إضافة القائمة الجانبية
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.top-nav ul').classList.toggle('show');
});

function changeLanguage(language) {
  const elements = {
    en: {
      welcome: "Welcome to MZ Guild",
      aboutTitle: "About the Guild",
      aboutText: "Welcome to MZ Guild, a top-tier Lords Mobile guild. We fight in the most challenging battles and take part in global events.",
      rallyTitle: "Rally Leaders",
      newsTitle: "Guild News",
      news1Title: "Baron Battle Victory",
      news1Text: "We successfully won the recent Baron battle, securing our position as one of the top guilds.",
      news2Title: "Upcoming Events",
      news2Text: "Don't miss the upcoming Paladin event. Be sure to check the board for requirements.",
      contactTitle: "Contact Us",
      contactText: "For inquiries, reach out via our social media channels."
    },
    ar: {
      welcome: "مرحبًا بكم في نقابة MZ",
      aboutTitle: "عن النقابة",
      aboutText: "مرحبًا بكم في نقابة MZ، نقابة متقدمة في لعبة لوردس موبايل. نخوض أقوى المعارك ونشارك في الأحداث العالمية.",
      rallyTitle: "قادة التجمع",
      newsTitle: "أخبار النقابة",
      news1Title: "انتصار في معركة البارون",
      news1Text: "نجحنا في الفوز في معركة البارون الأخيرة، مما عزز مكانتنا كواحدة من أفضل النقابات.",
      news2Title: "الأحداث القادمة",
      news2Text: "لا تفوت الحدث القادم، تأكد من متابعة المتطلبات.",
      contactTitle: "اتصل بنا",
      contactText: "للاستفسارات، تواصل معنا عبر وسائل التواصل الاجتماعي."
    },
    ru: {
      welcome: "Добро пожаловать в MZ гильдию",
      aboutTitle: "О гильдии",
      aboutText: "Добро пожаловать в MZ, одну из ведущих гильдий в Lords Mobile. Мы участвуем в самых сложных битвах и мировых событиях.",
      rallyTitle: "Лидеры Ралли",
      newsTitle: "Новости гильдии",
      news1Title: "Победа в Баронской битве",
      news1Text: "Мы успешно выиграли недавнюю баронскую битву, укрепив наши позиции в топе гильдий.",
      news2Title: "Предстоящие события",
      news2Text: "Не пропустите предстоящее событие. Обязательно следуйте требованиям.",
      contactTitle: "Свяжитесь с нами",
      contactText: "Для вопросов обращайтесь через наши социальные сети."
    }
  };

  // Update text content based on selected language
  document.querySelector('h1').textContent = elements[language].welcome;
  document.querySelector('#about h2').textContent = elements[language].aboutTitle;
  document.querySelector('#about p').textContent = elements[language].aboutText;
  document.querySelector('.rally-leaders h3').textContent = elements[language].rallyTitle;
  document.querySelector('#news h2').textContent = elements[language].newsTitle;
  document.querySelector('#news article:nth-child(1) h3').textContent = elements[language].news1Title;
  document.querySelector('#news article:nth-child(1) p').textContent = elements[language].news1Text;
  document.querySelector('#news article:nth-child(2) h3').textContent = elements[language].news2Title;
  document.querySelector('#news article:nth-child(2) p').textContent = elements[language].news2Text;
  document.querySelector('#contact h2').textContent = elements[language].contactTitle;
  document.querySelector('#contact p').textContent = elements[language].contactText;
}

// Function to show the correct section on the about page
function showSection(section) {
  document.getElementById('about-us').style.display = section === 'about-us' ? 'block' : 'none';
  document.getElementById('rally-leaders').style.display = section === 'rally-leaders' ? 'block' : 'none';
}
// إظهار الزر عند التمرير للأسفل
window.addEventListener('scroll', function() {
    if (window.scrollY > window.innerHeight) {
        document.getElementById('back-to-top').classList.add('show');
    } else {
        document.getElementById('back-to-top').classList.remove('show');
    }
});

// التمرير إلى الأعلى عند الضغط على الزر
document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
const leadersData = [
    {
        name: "PlatonUr",
        champEquipment: "Full champ",
        castleStars: 193,
        artifact: {
            blessed: 118,
            totalStars: 854,
            totalLevels: 1374
        },
        troopsKilled: "2.4b"
    },
    {
        name: "roman19778",
        champEquipment: "Full champ",
        castleStars: 210,
        artifact: {
            blessed: 162,
            totalStars: 884,
            totalLevels: 1525
        },
        troopsKilled: "7.7b"
    },
    {
        name: "maxus84",
        champEquipment: "5 pieces",
        castleStars: 148,
        artifact: {
            blessed: 39,
            totalStars: 590,
            totalLevels: 831
        },
        troopsKilled: "2.9b"
    }
];

const delay = 1000; // Delay between each word
let leaderIndex = 0;

// Function to type the information for each leader
function typeInfo(leader) {
    const infoElements = {
        name: document.querySelector(`#leader${leader + 1} .name`),
        champEquipment: document.querySelector(`#leader${leader + 1} .champ-equipment`),
        castleStars: document.querySelector(`#leader${leader + 1} .castle-stars`),
        artifactBlessed: document.querySelector(`#leader${leader + 1} .artifact-blessed`),
        artifactTotalStars: document.querySelector(`#leader${leader + 1} .artifact-total-stars`),
        artifactTotalLevels: document.querySelector(`#leader${leader + 1} .artifact-total-levels`),
        troopsKilled: document.querySelector(`#leader${leader + 1} .troops-killed`)
    };

    const textArray = [
        `Name: ${leadersData[leader].name}`,
        `Champ Equipment: ${leadersData[leader].champEquipment}`,
        `Castle Stars: ${leadersData[leader].castleStars}`,
        `Artifact (Blessed: ${leadersData[leader].artifact.blessed}, Total Stars: ${leadersData[leader].artifact.totalStars}, Total Levels: ${leadersData[leader].artifact.totalLevels})`,
        `Troops Killed: ${leadersData[leader].troopsKilled}`
    ];

    textArray.forEach((text, index) => {
        setTimeout(() => {
            infoElements[Object.keys(infoElements)[index]].textContent = text;
            infoElements[Object.keys(infoElements)[index]].style.opacity = 1; // Fade in effect
        }, index * delay);
    });

    setTimeout(() => {
        leaderIndex++;
        if (leaderIndex < leadersData.length) {
            typeInfo(leaderIndex); // Call the next leader's info
        }
    }, textArray.length * delay + 3000); // Delay before the next leader
}

// Start typing the information
typeInfo(leaderIndex);
