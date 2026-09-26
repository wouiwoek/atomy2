// ==========================================
// ДАННЫЕ КВИЗА И ВЕТВЛЕНИЯ
// ==========================================
const quizData = {
    // ВЕТКА: Уход за лицом
    face: {
        title: "Какая задача сейчас самая главная для кожи лица?",
        questions: [
            {
                text: "Как твоя кожа чувствует себя в течение дня?",
                options: [
                    { text: "Хочешь убрать сухость и добавить комфорта", icon: "img/сухая.png", resultKey: "dry" },
                    { text: "Быстро появляется жирный блеск в T-зоне и поры расширены", icon: "img/капля.png", resultKey: "oily" },
                    { text: "Цвет лица тусклый, уставший вид, есть синяки под глазами", icon: "img/луна.png", resultKey: "tired" },
                    { text: "Кожа чувствительная, легко краснеет и реагирует на всё", icon: "img/щит.png", resultKey: "sensitive" }
                ]
            }
        ]
    },

    // ВЕТКА: Уход за волосами
    hair: {
        title: "Что больше всего беспокоит в состоянии волос?",
        questions: [
            {
                text: "Выбери главное проявление:",
                options: [
                    { text: "Сухие, секутся на кончиках, легко путаются", icon: "img/колос.png", resultKey: "dry" },
                    { text: "Быстро жирнятся у корней, теряют свежесть за день", icon: "img/туча.png", resultKey: "oily" },
                    { text: "Тусклые, не хватает естественного блеска и гладкости", icon: "img/зеркало.png", resultKey: "dull" },
                    { text: "Выпадают, корни ослаблены, мало густоты и объема", icon: "img/якорь.png", resultKey: "anchor"}
                ]
            }
        ]
    },

    // ВЕТКА: Тело и руки
    body: {
        title: "Где больше всего не хватает увлажнения и комфорта?",
        questions: [
            {
                text: "Выбери свой основной запрос:",
                options: [
                    { text: "Очень сохнет кожа рук от воды и за окном", icon: "img/снег.png", resultKey: "hands" },
                    { text: "Кожа тела шелушится и сохнет после душа", icon: "img/клен.png", resultKey: "dry" },
                    { text: "Хочется эстетичного парфюмированного ухода для тела", icon: "img/цветок.png", resultKey: "scent" }
                ]
            }
        ]
    },

    // ВЕТКА: ЭНЕРГИЯ И ЗДОРОВЬЕ
    health: {
        title: "Как чувствуешь свой общий уровень энергии?",
        questions: [
            {
                text: "Что ближе всего к твоему состоянию?",
                options: [
                    { text: "Быстро утомляюсь, тяжело просыпаюсь по утрам", icon: "img/10.png", resultKey: "low_energy" },
                    { text: "Энергия скачет, много стресса и фоновой нагрузки", icon: "img/зигзаг.png", resultKey: "stress" },
                    { text: "К вечеру совсем не остается ресурса на себя", icon: "img/лампочка.png", resultKey: "burnout" }
                ]
            }
        ]
    }
};

// ==========================================
// БАЗА РЕЗУЛЬТАТОВ И РЕКОМЕНДАЦИЙ ATOMY
// ==========================================
const resultsData = {
    // Рекомендации для ЛИЦА
    "face_dry": {
        title: "Глубокое увлажнение & Восстановление",
        desc: "Твоей коже не хватает барьерной защиты и влаги. Нужен мягкий уход без агрессивных компонентов.",
        products: [
            { 
                name: "Atomy 3-Second Beauty Water", 
                desc: "Ультра-увлажняющий мист с экстрактом лавра. Обеспечивает мгновенное 24-часовое увлажнение за 3 секунды после умывания. Восстанавливает водный баланс, убирает чувство стянутости и подготавливает кожу к нанесению основного ухода.", 
                price: "1 200 ₽", 
                image: "img/спрей.png" 
            },
            { 
                name: "Atomy Daily Expert Mask (Moisturizing)", 
                desc: "Инновационная гелевая маска с гиалуроновой кислотой и растительными экстрактами. Интенсивно питает обезвоженную кожу, заполняет мелкие морщинки сухости и удерживает влагу в глубоких слоях эпидермиса.",price: "900 ₽", 
                image: "img/маски.png" 
            },
            { 
                name: "Atomy Centella Toner", 
                desc: "Успокаивающий тонер на основе экстракта центеллы азиатской и мадекассосида. Быстро снимает раздражения, глубинно увлажняет, восстанавливает липидный барьер и подготавливает сверхчувствительную кожу к уходу.", 
                price: "1 300 ₽", 
                image: "img/тонер.png" 
            }
        ]
    },
    "face_oily": {
        title: "Себорегуляция & Очищение пор",
        desc: "Важно нормализовать работу сальных желез, не пересушивая верхний слой кожи.",
        products: [
            { 
                name: "Atomy Evening Care Foam Cleansing", 
                desc: "Пенка для глубокого и деликатного очищения пор. Богатая густая пена удаляет излишки себума, остатки макияжа и загрязнения, а экстракты лечебных грибов кордицепса и трутовика увлажняют и успокаивают кожу.", 
                price: "750 ₽", 
                image: "img/пенка.png" 
            },
             { 
                name: "Atomy Evening Care Deap Cleansing", 
                desc: "Насыщенный крем-демакияж для глубокого очищения пор и растворения стойкого макияжа. Содержит экстракт гинко билоба и зеленый чай, питает, смягчает кожу и подготавливает ее к дальнейшему уходу.", 
                price: "750 ₽", 
                image: "img/глубокое.png" 
            },
             { 
                name: "Atomy Evening Care Foam Cleansing", 
                desc: "Очищающая маска с подтягивающим эффектом. Очищает и сужает поры, абсорбирует излишки себума, возвращает кожи упругость и эластичность, оставляя эффект отдохнувшей и подтянутой кожи.", 
                price: "750 ₽", 
                image: "img/маскапленка.png" 
            },
            { 
                name: "Atomy Centella Ampoule", 
                desc: "Высококонцентрированная успокаивающая ампула. Нормализует работу сальных желез, снимает покраснения, ускоряет заживление воспалений и выравнивает текстуру проблемной и комбинированной кожи.", 
                price: "2 600 ₽", 
                image: "img/ампула.png" 
            }
        ]
    },
    "face_tired": {
        title: "Сияние & Ровный тон",
        desc: "Коже нужен заряд антиоксидантов и мягкий лимфодренажный уход для свежести.",
        products: [
            { 
                name: "Atomy Evening Care Peeling Gel", 
                desc: "Мягкий пилинг-скатка на основе яблочной кислоты. Бережно отшелушивает ороговевший слой кожи, убирает шелушения и выравнивает текстуру, возвращая лицу свежесть, гладкость и ровный здоровый тон без раздражения.", 
                price: "750 ₽", 
                image: "img/пилинг.png" 
            },
            { 
                name: "Atomy Hydrogel Eye Patch", 
                desc: "Морские патчи для глаз с глубоководными минералами, экстрактами водорослей и гиалуроновой кислотой. Мгновенно убирают отечность, осветляют темные круги, разглаживают мимические морщинки и освежают взгляд.", 
                price: "1 400 ₽", 
                image: "img/патчи.png" 
            },
            { 
                name: "Atomy Vitamin C", 
                desc: "Мощный антиоксидантный комплекс с 7 видами натуральных цветных продуктов (манго, клюква, тыква, мандарин и др.). Нейтрализует свободные радикалы, стимулирует выработку коллагена и возвращает коже здоровое сияние изнутри.", 
                price: "2 000 ₽", 
                image: "img/витаминс.png" 
            }
        ]
    },
    "face_sensitive": {
        title: "Успокаивающий Cica-уход",
        desc: "Коже необходим максимально деликатный состав с центеллой азиатской для снятия красноты.",
        products: [
            { 
                name: "Atomy Centella Set", 
                desc: "Полный гипоаллергенный комплекс (тонер, ампула, крем) на основе центеллы азиатской. Мгновенно успокаивает раздраженную и поврежденную кожу, снижает чувствительность, укрепляет сосуды при куперозе.", 
                price: "3 200 ₽", 
                image: "img/центелланабор.png" 
            },
            { 
                name: "Marine Ampoule Gel Mask (Moisturizing & Soothing)", 
                desc: "Премиальная гидрогелевая маска с морскими экстрактами. Охлаждает, глубоко питает и успокаивает кожу без использования тканевой сетки, что исключает любые механические раздражения.", 
                price: "2 800 ₽", 
                image: "img/морскаямаска.png" 
            }
        ]
    },

    // Рекомендации для ВОЛОС
    "hair_dry": {
        title: "Питание & Восстановление структуры",
        desc: "Сухим волосам необходимы питательные масла и протеины по всей длине.",
        products: [
            { 
                name: "Atomy Hair Essential Oil", 
                desc: "Лёгкое питательное масло с 6 натуральными маслами (аргана, жожоба, макадамия, авокадо, камелия, пенник луговой). Запечатывает секущиеся кончики, придает шелковистость и не утяжеляет волосы.", 
                price: "900 ₽", 
                image: "img/масло.png" 
            },
            {name: "Atomy Herbal Hair Treatment", 
                desc: "Восстанавливающая маска для поврежденных волос. Она мгновенно питает, разглаживает и возвращает волосам блеск без утяжеления. В составе отвары восточных целебных трав и гидролизованные растительные протеины.", 
                price: "900 ₽", 
                image: "img/маскадляволос.png" 
            }
        ]
    },
    "hair_oily": {
        title: "Свежесть & Легкий объём",
        desc: "Мягкое очищение кожи головы на травяных экстрактах без утяжеления.",
        products: [
            { 
                name: "Atomy Herbal Hair Shampoo", 
                desc: "Травяной шампунь на основе экзотических восточных растений (чистотел, хризантема, имбирь). Бережно очищает кожу головы от кожного сала, нормализует pH-баланс и сохраняет объем и свежесть на весь день.", 
                price: "1 200 ₽", 
                image: "img/хербалш.png" 
            },
            { 
                name: "Atomy Herbal Hair Conditioner", 
                desc: "Травяной кондиционер на основе экзотических восточных растений (чистотела, жгун-корня, дудника и имбиря). Разглаживает и увлажняет волосы по всей длине, запечатывает секущиеся кончики, облегчает расчесывание и придает мягкость и естественный блеск.", 
                price: "1 200 ₽", 
                image: "img/хербалк.png" 
            },
            { 
                name: "Atomy Scalpcare 2 Set", 
                desc: "Аюрведический спа-комплекс для глубокого scalping-очищения кожи головы. Шампунь с салициловой кислотой, ментолом и 28 экстрактами трав (ним, шикакай, арника) тщательно смывает излишки себума и перхоть, а кондиционер с биотином и маслом авокадо питает пряди без утяжеления, даря длительное ощущение свежести, лёгкости и ухоженности.", 
                price: "2 100 ₽", 
                image: "img/сет.png" 
            }
        ]
    },
    "hair_dull": {
        title: "Зеркальный блеск & Гладкость",
        desc: "Восстановление кутикулы волоса для отражения света.",
        products: [
            { 
                name: "Atomy Protein Intensive Hair Care Set", 
                desc: "Салонный протеиновый уход для дома (шампунь, ампульный маска-спрей). Восстанавливает сильно поврежденную структуру волоса изнутри благодаря белкам и аминокислотам.", 
                price: "2 900 ₽", 
                image: "img/протеиннабор.png" 
            }
        ]
    },
    "hair_anchor":{
        title: "Укрепление & Легкий обьем",
        desc: "Укрепление корней и свежесть кожи головы.",
        products: [
            {
                name: "Atomy Root Vital Shampoo", 
                desc: "Функциональный шампунь с высокой концентрацией кофеина (10 000 ppm) для глубокого очищения кожи головы. Мягко отшелушивает ороговевшие клетки, устраняет излишки себума и перхоть, снижает выпадение и дарит ощутимый объём от самых корней.", 
                price: "1 800 ₽", 
                image: "img/шампуньрт.png" 
            },
            { 
                name: "Atomy Root Vital Scalp Ampoule", 
                desc: "Высококонцентрированная несмываемая сыворотка (30% Root Vital Code) с удобным роллером-аппликатором. Мгновенно охлаждает, снимает зуд, точечно доставляет питательные компоненты прямо к фолликулам, укрепляя корни и стимулируя рост новых волос.", 
                price: "1 200 ₽", 
                image: "img/ампуларт.png" 
            },
            { 
                name: "Atomy Root Vital Scalp&Hair Pack", 
                desc: "Нежная маска без силиконов, которую можно и нужно наносить прямо на кожу головы. Интенсивно увлажняет, снимает раздражение, питает волосяные луковицы и одновременно разглаживает пряди по всей длине, убирая пушистость и облегчая расчесывание.", 
                price: "1 300 ₽", 
                image: "img/маскарт.png" 
            }
        ]
    },

    // Рекомендации для ТЕЛА
    "body_hands": {
        title: "Защита & Увлажнение рук",
        desc: "Интенсивный уход за сухой кожей рук для предотвращения трещинок.",
        products: [
            { 
                name: "Atomy Hand Therapy Set", 
                desc: "Набор из 4 кремов для рук с разным действием (осветление, борьба с морщинками, интенсивное питание). Содержит ниацинамид, масло ши и роза-воду для бархатистой кожи рук.", 
                price: "1 200 ₽", 
                image: "img/терапия.png" 
            },
            { 
                name: "Atomy Hand Balm", 
                desc: "Три бальзама с супер-питательной текстурой и разным действием: глубоко увлажняют, мгновенно убирают шелушения и стянутость, заживляют микротрещинки и защищают кожу рук от пересыхания. Быстро впитываются и не оставляют липкости.", 
                price: "600 ₽ за 1 шт.", 
                image: "img/бальзамыдлярук.png" 
            }
        ]
    },
    "body_dry": {
        title: "Устранение сухости & Питание тела",
        desc: "Комплексный уход против шелушений, сухости и стянутости кожи тела после душа.",
        products: [
            { 
                name: "Atomy Body Scrub", 
                desc: "Деликатно отшелушивает ороговевшие клетки благодаря натуральным кристаллам сахара и соли, убирает шелушения и выравнивает текстуру кожи. Питательные масла в составе не дают коже пересыхать во время мытья, оставляя ее гладкой, мягкой и шелковистой сразу после душа.", 
                price: "1 400 ₽", 
                image: "img/скраб.png" 
            },
            { 
                name: "Atomy Body Care Lotion", 
                desc: "Увлажняющий лосьон с гипер-питательным комплексом из свежих трав, эфирного масла яблока и ухаживающих компонентов. Быстро впитывается, убирает чувство стянутости, неприятные шелушения и успокаивает кожу сразу после душа.", 
                price: "900 ₽", 
                image: "img/лосьон.png" 
            },
            {name: "Atomy Ultra Rich Body Cream", 
                desc: "Густой насыщенный крем с 25% масла ши для очень сухой и огрубевшей кожи. Дает мощное 5-этапное увлажнение, мгновенно снимает стянутость, восстанавливает защитный барьер и питает самые проблемные зоны (локти, колени, пятки) на весь день.", 
                price: "1 400 ₽", 
                image: "img/кремрич.png" 
            }
        ]
    },
    "body_scent": {
        title: "СПА-ритуал & Парфюмированный уход",
        desc: "Эстетичный уход с нежным ароматом для расслабления.",
        products: [
            { 
                name: "Atomy Herbal Body Cleanser", 
                desc: "Парфюмированный гель для душа с богатым травяным комплексом. Мягко очищает, оставляет на коже легкий благородный шлейф натуральных эфирных масел и предупреждает сухость.", 
                price: "900 ₽", 
                image: "img/гель.png" 
            },
            { 
                name: "Atomy Body Care Lotion", 
                desc: "Увлажняющий лосьон с гипер-питательным комплексом из свежих трав, эфирного масла яблока и ухаживающих компонентов. Быстро впитывается, убирает чувство стянутости, неприятные шелушения и успокаивает кожу сразу после душа.", 
                price: "900 ₽", 
                image: "img/лосьон.png" 
            }
        ]
    },

    // Рекомендации для ЗДОРОВЬЯ
    "health_low_energy": {
        title: "Заряд энергии & Тонус",
        desc: "Поддержка уровня сил, иммунитета и выносливости организма.",
        products: [
            { 
                name: "Atomy HemoHIM", 
                desc: "Запатентованный растительный комплекс на основе дудника гигантского, бороздоплодника и пиона. Активирует иммунные клетки (NK-клетки), снижает утомляемость и помогает восстанавливать силы при физических и умственных нагрузках.", 
                price: "8 500 ₽", 
                image: "img/хх.png" 
            },
            { 
                name: "Atomy 3-in-1 Coffee", 
                desc: "Премиальный растворимый кофе из 100% арабики с добавлением натуральных обезжиренных сливок. Мягкий, сбалансированный вкус для бодрого начала дня без вреда для желудка.", 
                price: "1 200 ₽", 
                image: "img/кофе3в1.png"
            }
        ]
    },
    "health_stress": {
        title: "Антистресс & Баланс",
        desc: "Поддержка нервной системы, снятие эмоционального напряжения и мягкая адаптация организма.",
        products: [
            { 
                name: "Atomy Organic Noni (Сок Нони)", 
                desc: "100% ферментированный органический сок фрукта Нони с острова Сайпан. Мощный адаптоген: помогает организму справляться со стрессом, нормализует сон, мягко выравнивает нервную систему и восстанавливает жизненный тонус.", 
                price: "5 500 ₽", 
                image: "img/нони.png" 
            },
            { 
                name: "Atomy Probiotics 10+", 
                desc: "Сбалансированный комплекс из 12 видов полезных лакто- и бифидобактерий. Нормализует микрофлору кишечника, напрямую влияя на эмоциональный фон (ось кишечник-мозг) и защитный барьер организма.", 
                price: "2 800 ₽", 
                image: "img/пробиотик.png" 
            }
        ]
    },
    "health_burnout": {
        title: "Глубокое восстановление ресурса",
        desc: "Комплексная подпитка организма при высоких нагрузках.",
        products: [
            { 
                name: "Red Ginseng Jelly Sticks", 
                desc: "Мощный природный адаптоген в формате вкусного желе для быстрого восстановления сил и снятия хронической усталости. Повышает выносливость, укрепляет иммунитет, защищает организм от последствия стресса и даёт приток естественной, ровной энергии без перепадов давления.", 
                price: "3 500 ₽", 
                image: "img/жч.png" 
            },
             { 
                name: "rTG Omega-3", 
                desc: "Премиальная форма незаменимых жирных кислот с максимальной биодоступностью и усвоением. Мгновенно восполняет ресурс нервной системы, поддерживает работу мозга и сосудов при высоких умственных и физических нагрузках, помогая организму быстро восстанавливаться к концу дня.", 
                price: "3 900 ₽", 
                image: "img/омега3.png" 
            },
            { 
                name: "Atomy HemoHIM", 
                desc: "Курсовой прием запатентованного растительного комплекса. Глубоко восстанавливает кроветворение, укрепляет истощенный иммунитет и возвращает жизненную энергию при выгорании.", 
                price: "8 500 ₽", 
                image: "img/хх.png" 
            }
        ]
    }
};

// ==========================================
// СОСТОЯНИЕ И ПЕРЕМЕННЫЕ DOM
// ==========================================
let currentCategory = null;
let currentQuestionIndex = 0;

const screen1 = document.getElementById('screen-1');
const screenQuiz = document.getElementById('screen-quiz');
const screenResult = document.getElementById('screen-result');
const progressBar = document.getElementById('progress-bar');
const backBtn = document.getElementById('back-btn');
const quizTitle = document.getElementById('quiz-title');const optionsContainer = document.getElementById('options-container');

// Элементы модального окна
const modal = document.getElementById('product-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const modalDesc = document.getElementById('modal-desc');
const closeModalBtn = document.querySelector('.close-modal');

// ==========================================
// ЛОГИКА ПЕРЕКЛЮЧЕНИЯ
// ==========================================

// Выбор категории на Шаге 1
function selectCategory(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    
    screen1.classList.remove('active');
    screenQuiz.classList.add('active');
    if (backBtn) backBtn.style.display = 'block';
    
    updateProgress(50);
    renderQuestion();
}

// Рендер вопроса и вариантов ответов
function renderQuestion() {
    const categoryData = quizData[currentCategory];
    const question = categoryData.questions[currentQuestionIndex];
    
    quizTitle.textContent = question.text;
    optionsContainer.innerHTML = '';
    
    question.options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-card';
        btn.onclick = () => selectOption(option.resultKey);
        
        btn.innerHTML = `
            <img src="${option.icon}" alt="иконка" class="option-icon">
            <span class="option-text">${option.text}</span>
        `;
        
        optionsContainer.appendChild(btn);
    });
}

// Выбор ответа
function selectOption(resultKey) {
    const fullKey = `${currentCategory}_${resultKey}`;
    showResult(fullKey);
}

// Возврат назад
function prevQuestion() {
    screenQuiz.classList.remove('active');
    screenResult.classList.remove('active');
    screen1.classList.add('active');
    if (backBtn) backBtn.style.display = 'none';
    updateProgress(25);
}

if (backBtn) {
    backBtn.addEventListener('click', prevQuestion);
}

// Обновление прогресс-бара
function updateProgress(percent) {
    if (progressBar) progressBar.style.width = `${percent}%`;
}

// Показ результата
function showResult(key) {
    screenQuiz.classList.remove('active');
    screenResult.classList.add('active');
    updateProgress(100);
    
    // Получаем данные или фоллбэк
    const data = resultsData[key] || resultsData["face_dry"];
    
    document.getElementById('result-title').textContent = data.title;
    document.getElementById('result-desc').textContent = data.desc;
    
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';
    
    data.products.forEach(prod => {
        const item = document.createElement('div');
        item.className = 'product-item';
        
        item.innerHTML = `
            <div class="product-info">
                <div class="product-item-name">${prod.name}</div>
                <div class="product-item-desc">${prod.desc}</div>
            </div>
            <div class="product-item-price">${prod.price || ''}</div>
        `;
        
        // Добавление клика для открытия окна продукта
        item.addEventListener('click', () => openProductModal(prod));
        
        productsContainer.appendChild(item);
    });
}

// ==========================================
// УПРАВЛЕНИЕ МОДАЛЬНЫМ ОКНОМ ПРОДУКТА
// ==========================================
function openProductModal(product) {
    if (!modal) return;
    
    modalTitle.textContent = product.name;
    modalDesc.textContent = product.desc;
    modalPrice.textContent = product.price || '';
    modalImg.src = product.image || '';
    modalImg.alt = product.name;

    modal.classList.add('active');
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });
}

// Закрытие по клику вне модального окна
window.addEventListener('click', (event) => {if (event.target === modal) {
        modal.classList.remove('active');
    }
});