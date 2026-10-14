document.addEventListener('DOMContentLoaded', function () {

    // --- Словник перекладів (Українська / Російська) ---
    var translations = {
        uk: {
            page_title: "Артур - Веб-розробник",
            nav_home: "Головна",
            nav_about: "Про мене",
            nav_stack: "Стек",
            nav_portfolio: "Робота",
            nav_workflow: "Процес",
            nav_contact: "Контакти",

            hero_badge: "Відкритий до замовлень і стажування",
            hero_name: "Артур",
            hero_title: "Початківець веб-розробник",
            hero_desc: "Живу в Харкові. Нещодавно зайшов у веб-розробку та щодня вдосконалюю навички. Не вигадую штучний досвід: цей сайт створений та зверстаний мною власноруч з нуля і показує те, що я реально вмію робити.",
            btn_work: "Подивитися роботу",
            btn_tg: "Написати в Telegram",
            avatar_placeholder: "Місце для аватарки",

            about_title: "Про мене та мій старт",
            about_subtitle: "Харків, Україна. Чесний підхід і практика",
            about_text_1: "Я нещодавно розпочав свій шлях у веб-розробці. Замість того, щоб вигадувати неіснуючі кейси чи чужі відгуки, я демонструю свій реальний рівень.",
            about_text_2: "Цей сайт — моя головна візитка та робота. Тут чиста семантична верстка, акуратні стилі, адаптивність під телефони й планшети та плавний інтерактив без сторонніх перевантажених фреймворків.",
            about_text_3: "Мій напрям зараз: адаптивна верстка сайтів, сучасний чистий JavaScript, якісні інтерфейси та увага до структури коду.",
            fact_loc_title: "Локація: Харків",
            fact_loc_desc: "Працюю віддалено, завжди на зв'язку через Telegram та електронну пошту.",
            fact_pr_title: "Практика щодня",
            fact_pr_desc: "Верстка макетів, вивчення стандартів, робота з Git та написання скриптів.",
            fact_ready_title: "Готовий до задач",
            fact_ready_desc: "Беруся за верстку блоків, лендингів або навчальні проекти на адекватних умовах.",

            stack_title: "Мій технологічний стек",
            stack_subtitle: "Інструменти та технології, які я використовую та практикую щодня",
            skill_html_desc: "Семантична розмітка, доступність, валідна структура сторінки",
            skill_level_base: "Впевнена база",
            skill_css_desc: "Flexbox, CSS Grid, адаптивність, CSS-змінні, сучасна анімація",
            skill_level_adapt: "Адаптив і стилі",
            skill_js_desc: "Робота з DOM, обробка подій, динамічне перемикання тем та мов, валідація",
            skill_level_inter: "Інтерактив",
            skill_git_desc: "Контроль версій, фіксація змін, публікація робіт на GitHub",
            skill_level_git: "Контроль версій",
            skill_responsive_title: "Адаптивна верстка",
            skill_responsive_desc: "Коректне відображення на мобільних телефонах, планшетах та десктопах",
            skill_level_mobile: "Mobile First",
            skill_figma_desc: "Точний перенос макетів у код із дотриманням відступів, шрифтів та кольорів",
            skill_level_pixel: "Pixel-accurate",

            work_title: "Моя робота",
            work_subtitle: "Без вигадок і чужих скріншотів: живе підтвердження поточних навичок",
            card_main_badge: "Головний проект",
            card_tag: "Живий проект",
            card_title: "Сайт-портфоліо веб-розробника",
            card_desc: "Сайт, на якому ви зараз знаходитесь, розроблений мною з нуля. Він вирішує ключову задачу: наочно продемонструвати реальні навички верстки, стилізації та логіки без вигадок.",
            feat_1: "Повна двомовність (Українська та мова на вибір)",
            feat_2: "Адаптивна верстка під будь-які роздільні здатності екрана",
            feat_3: "Сучасна біло-синя гама з чистим дизайном",
            feat_4: "Чистий Vanilla JavaScript без громіздких бібліотек",
            btn_top: "Початок сайту",

            future_title: "Що я розробляю та вивчаю зараз",
            future_1_title: "Лендинг сервісу",
            future_1_desc: "Практика конверсійної структури сторінки, плавної анімації та форми замовлення.",
            future_2_title: "Таск-менеджер",
            future_2_desc: "Додаток на чистому JavaScript із збереженням списку задач у браузерному сховищі LocalStorage.",
            future_3_title: "Віджет погоди через API",
            future_3_desc: "Робота з Fetch API, отримання даних у форматі JSON та динамічне виведення прогнозу.",

            flow_title: "Як будується співпраця",
            flow_subtitle: "Зрозумілі й прозорі етапи від обговорення до готового сайту",
            flow_1_title: "Обговорення",
            flow_1_desc: "Ви розповідаєте про задачу, показуєте макет або референси того, що потрібно зробити.",
            flow_2_title: "Верстка",
            flow_2_desc: "Пишу акуратний код, налаштовую шрифти, стилі та обов'язковий мобільний адаптив.",
            flow_3_title: "Перевірка",
            flow_3_desc: "Тестую відображення на різних пристроях та правильну роботу всіх кнопок і форм.",
            flow_4_title: "Здача коду",
            flow_4_desc: "Передаю чистий вихідний код проекту або допомагаю опублікувати його на хостинг.",

            contact_title: "Зв'язатися зі мною",
            contact_subtitle: "Якщо вам потрібна верстка чи співпраця — пишіть напряму",
            contact_info_title: "Контакти для зв'язку",
            contact_info_desc: "Відповідаю оперативно протягом дня. Зручніше за все спілкуватися через Telegram.",
            contact_loc_label: "Місто",
            contact_loc_val: "Харків, Україна",
            contact_tg_label: "Telegram (найшвидше)",
            form_name: "Ваше ім'я",
            form_email: "Ваш Email або Telegram",
            form_subject: "Тема або суть задачі",
            form_msg: "Опишіть ваше завдання",
            form_btn: "Надіслати повідомлення",
            form_hint: "Або пишіть одразу в Telegram:",
            form_success: "Повідомлення надіслано!",

            footer_desc: "Артур — початківець веб-розробник із Харкова",
            footer_rights: "Всі права захищено."
        },

        ru: {
            page_title: "Артур - Веб-разработчик",
            nav_home: "Главная",
            nav_about: "О себе",
            nav_stack: "Стек",
            nav_portfolio: "Работа",
            nav_workflow: "Процесс",
            nav_contact: "Контакты",

            hero_badge: "Открыт к заказам и стажировке",
            hero_name: "Артур",
            hero_title: "Начинающий веб-разработчик",
            hero_desc: "Живу в Харькове. Недавно зашел в веб-разработку и ежедневно прокачиваю навыки. Не придумываю фейковый опыт: этот сайт сделан и сверстан мною с нуля и наглядно показывает то, что я умею делать уже сейчас.",
            btn_work: "Посмотреть работу",
            btn_tg: "Написать в Telegram",
            avatar_placeholder: "Место для фото",

            about_title: "О себе и моем старте",
            about_subtitle: "Харьков, Украина. Честный подход и практика",
            about_text_1: "Я недавно начал свой путь в веб-разработке. Вместо того чтобы придумывать несуществующие кейсы и чужие отзывы, я предпочитаю показывать реальный результат.",
            about_text_2: "Этот сайт — моя визитная карточка и первая серьезная работа. Здесь чистая верстка, аккуратный код, адаптив под все экраны и интерактивность без тяжелых сторонних фреймворков.",
            about_text_3: "Мой фокус сейчас: адаптивная верстка сайтов, чистый JavaScript, работа с интерфейсами и внимание к деталям.",
            fact_loc_title: "Локация: Харьков",
            fact_loc_desc: "Работаю удаленно, всегда на связи через Telegram и электронную почту.",
            fact_pr_title: "Практика каждый день",
            fact_pr_desc: "Верстка, код, разбор стандартов, работа с Git и написание скриптов.",
            fact_ready_title: "Готов к задачам",
            fact_ready_desc: "Берусь за небольшие задачи, лендинги и верстку макетов по адекватным условиям.",

            stack_title: "Мой технологический стек",
            stack_subtitle: "Инструменты и технологии, с которыми я работаю и которые развиваю каждый день",
            skill_html_desc: "Семантическая разметка, доступность, микроразметка, правильная структура",
            skill_level_base: "Уверенная база",
            skill_css_desc: "Flexbox, CSS Grid, адаптивная верстка, CSS-переменные, анимации",
            skill_level_adapt: "Адаптив и стили",
            skill_js_desc: "Работа с DOM, обработка событий, переключение тем и языков, валидация",
            skill_level_inter: "Интерактив",
            skill_git_desc: "Контроль версий, фиксация изменений, хостинг проектов на GitHub",
            skill_level_git: "Контроль версий",
            skill_responsive_title: "Адаптивная верстка",
            skill_responsive_desc: "Корректное отображение на экранах любых размеров: от смартфона до 4K",
            skill_level_mobile: "Mobile First",
            skill_figma_desc: "Точный перенос дизайна в рабочий сайт с соблюдением отступов и типографики",
            skill_level_pixel: "Pixel-accurate",

            work_title: "Моя работа",
            work_subtitle: "Без выдумок и чужих скриншотов: живое подтверждение моих текущих навыков",
            card_main_badge: "Главный проект",
            card_tag: "Живой проект",
            card_title: "Сайт-портфолио веб-разработчика",
            card_desc: "Сайт, на котором вы сейчас находитесь, спроектирован и написан с нуля. Он решает главную задачу — презентовать реальные навыки начинающего специалиста без лишнего шума и выдумок.",
            feat_1: "Полная двуязычность (Украинский и Русский языки)",
            feat_2: "Полностью адаптивная верстка (мобильные, планшеты, ПК)",
            feat_3: "Строгая бело-синяя палитра и современный дизайн",
            feat_4: "Чистый Vanilla JavaScript без тяжелых сторонних фреймворков",
            btn_top: "Оценить сайт с начала",

            future_title: "Что я разрабатываю и изучаю прямо сейчас",
            future_1_title: "Лендинг для сервиса",
            future_1_desc: "Практика конверсионной структуры, плавной анимации и формы сбора заявок.",
            future_2_title: "Таск-трекер",
            future_2_desc: "Приложение на чистом JavaScript с сохранением задач в браузере через LocalStorage.",
            future_3_title: "Виджет погоды через API",
            future_3_desc: "Интеграция со сторонним REST API, получение JSON и вывод прогноза.",

            flow_title: "Как строится процесс",
            flow_subtitle: "Прозрачный процесс от первого сообщения до готового результата",
            flow_1_title: "Обсуждение",
            flow_1_desc: "Вы рассказываете, какой сайт или блок вам нужен, показываете примеры или макет.",
            flow_2_title: "Верстка",
            flow_2_desc: "Пишу чистую разметку, настраиваю стили и обязательный адаптив под мобильные устройства.",
            flow_3_title: "Тестирование",
            flow_3_desc: "Проверяю отображение в разных браузерах, скорость работы и работу всех элементов.",
            flow_4_title: "Сдача проекта",
            flow_4_desc: "Передаю готовый исходный код или помогаю выгрузить сайт на хостинг.",

            contact_title: "Связаться со мной",
            contact_subtitle: "Если вам нужен сайт, верстка или вы хотите предложить задачу — пишите напрямую",
            contact_info_title: "Контакты для связи",
            contact_info_desc: "Отвечаю оперативно в течение дня. Быстрее всего связаться в Telegram.",
            contact_loc_label: "Город",
            contact_loc_val: "Харьков, Украина",
            contact_tg_label: "Telegram (быстрее всего)",
            form_name: "Ваше имя",
            form_email: "Ваш Email или Telegram",
            form_subject: "Тема или суть задачи",
            form_msg: "Опишите вашу задачу",
            form_btn: "Отправить сообщение",
            form_hint: "Или напишите прямо в Telegram:",
            form_success: "Сообщение отправлено!",

            footer_desc: "Артур — начинающий веб-разработчик из Харькова",
            footer_rights: "Все права защищены."
        }
    };

    var currentLang = localStorage.getItem('site_lang') || 'uk';

    function setLanguage(lang) {
        if (!translations[lang]) return;
        currentLang = lang;
        localStorage.setItem('site_lang', lang);
        document.documentElement.lang = lang;

        // Оновлюємо заголовок сторінки
        document.title = translations[lang].page_title;

        // Оновлюємо всі елементи з data-i18n
        var elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Перемикаємо активні кнопки в шапці
        var langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(function (btn) {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Слухач на кнопки мов
    var langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var selected = this.getAttribute('data-lang');
            setLanguage(selected);
        });
    });

    // Ініціалізація збереженої мови
    setLanguage(currentLang);

    // --- Індикатор прокрутки сторінки зверху та шапка ---
    var header = document.getElementById('header');
    var scrollTop = document.getElementById('scrollTop');
    var scrollProgress = document.getElementById('scrollProgress');

    window.addEventListener('scroll', function () {
        var winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = height > 0 ? (winScroll / height) * 100 : 0;

        if (scrollProgress) {
            scrollProgress.style.width = scrolled + '%';
        }

        if (winScroll > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        if (winScroll > 350) {
            scrollTop.classList.add('visible');
        } else {
            scrollTop.classList.remove('visible');
        }
    });

    scrollTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- Мобільне меню (бургер) ---
    var burger = document.getElementById('burger');
    var nav = document.getElementById('nav');
    var navLinks = document.querySelectorAll('.nav__link');

    if (burger && nav) {
        burger.addEventListener('click', function () {
            burger.classList.toggle('active');
            nav.classList.toggle('open');
        });

        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                burger.classList.remove('active');
                nav.classList.remove('open');
            });
        });
    }

    // --- Підсвічування активного пункту навігації при скролі ---
    var sections = document.querySelectorAll('section[id]');

    function setActiveLink() {
        var scrollPos = window.scrollY + 120;

        sections.forEach(function (section) {
            var top = section.offsetTop;
            var height = section.offsetHeight;
            var id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(function (link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);

    // --- Анімація появи елементів при скролі (Scroll Reveal) ---
    var animatedElements = [
        '.section__title',
        '.section__subtitle',
        '.about__image',
        '.about__content',
        '.skill-card',
        '.featured-card',
        '.future-card',
        '.step-card',
        '.contact__item',
        '.contact__form'
    ];

    // Додаємо клас reveal і чергу затримок
    document.querySelectorAll('.skills__grid, .future-grid, .workflow__steps').forEach(function (grid) {
        var children = grid.children;
        for (var i = 0; i < children.length; i++) {
            children[i].classList.add('reveal');
            children[i].classList.add('delay-' + ((i % 4) + 1));
        }
    });

    document.querySelectorAll('.section__title, .section__subtitle, .about__image, .about__content, .featured-card, .contact__info, .contact__form').forEach(function (el) {
        el.classList.add('reveal');
    });

    // Спостерігач перетину (Intersection Observer)
    if ('IntersectionObserver' in window) {
        var revealObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        document.querySelectorAll('.reveal').forEach(function (el) {
            revealObserver.observe(el);
        });
    } else {
        // Fallback для старих браузерів
        document.querySelectorAll('.reveal').forEach(function (el) {
            el.classList.add('visible');
        });
    }

    // --- Обробка контактної форми ---
    var form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var btn = form.querySelector('button[type="submit"]');
            var originalHtml = btn.innerHTML;
            var successText = translations[currentLang].form_success;

            btn.innerHTML = '<i class="fa-solid fa-check"></i> ' + successText;
            btn.style.background = '#16a34a';
            btn.style.borderColor = '#16a34a';
            btn.disabled = true;

            setTimeout(function () {
                btn.innerHTML = originalHtml;
                btn.style.background = '';
                btn.style.borderColor = '';
                btn.disabled = false;
                form.reset();
            }, 3000);
        });
    }

});
