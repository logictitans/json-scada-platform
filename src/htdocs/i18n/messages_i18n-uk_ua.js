// Internationalization Messages
// {json:scada} - Copyright (c) 2008-2022 - Ricardo L. Olsen

var Msg =
{
NomeProduto: '{json:scada}',
VersaoProduto: '0.27',

NomeVisorTelas: 'Перегляд ',
NomeVisorEventos: 'Події',
NomeVisorHistorico: 'Події - Історія',
NomeVisorTabular: 'Таблиці',
NomeVisorAnormais: 'Тривоги',
NomeVisorTendencias: 'Тренд',
NomeVisorCurvas: 'Графіки',
NomeDialogoInfo: 'Інформ про точку',
NomeDialogoCmd: 'Команда',

FalhaWebserver: 'Помилка веб-сервера!',

// websage.js
BlqAnot: 'Команда заблокована анотацією.',
AcessCmd: 'Натисніть, для доступу до діалогового вікна команд.',
EstadoAtual: 'Поточний стан',
ConfNSuport: 'Непідтримувана конфігурація!',
BrowserNSup: 'Непідтримуваний браузер!',
Qualific: 'Кваліфікатор',
QFalhado: 'НЕВДАЛИЙ',
QSubst: 'ВИДАЛЕНО',
QCalculado: 'РОЗРАХОВАНО',
QManual: 'ПОСІБНИК',
QNuncaAtu: 'НЕ ОНОВЛЕНО',
QAlarmado: 'НАСТОРОЖЕНИЙ',
QAnotacao: 'НОТАТКА',
QAlmInib: 'ВІДКЛАДЕНА_ТРИВОГА',
QNaoNormal: 'ПОСТІЙНА_ТРИВОГА',
QLimiteViol: 'ПОРУШЕНИЙ_ЛІМІТ',
QCongelado: 'ЗАМОРОЖЕНИЙ',
QNormal: 'НОРМАЛЬНИЙ',
QDPIntermed: 'ПРОМІЖНИЙ',
QDPInvalido: 'НЕПРАЦЕЗДАТНИЙ',
QValor: 'Значення',
SELTELA_OPC1: 'Виберіть екран ...',

// Events.html
Eventos: 'Події',
ModoNormal: 'Нормальний режим',
ModoAgregado: 'Агрегований режим',
ModoPanico: 'Панічний режим',
ModoCongelado: 'Заморожений!',
ModoHistorico: 'Історичний',
HIST: '>Історичні події',
SPDATAINI: 'Дата: ',
SPHORAINI: 'Початковий час: ',
SPFILTRO: 'Фільтр: ',
btBuscaHist: 'Пошук',
EveNomesColunas: 'Дата,Час,мс,точка #,Ідентифікатор,Підстанція,Опис,Подія,Прапори,Кваліфікація.',
ConfirmaSaida: 'Закрити переглядач подій?',
EveFiltradosSE: 'ФІЛЬТРОВАНО',

// tabular.html
SPCOMANDAVEIS: 'Командний',
SPANORMAIS: 'Тривога',
SPSUBEST: 'Підстанція',
SPMODULO: 'Комірка',
SPFILTROID: 'Фільтр (ID)',
SELSE: 'Вибір підстанції',
SELMOD: 'Вибір комірки',
Filtro: 'Фільтр за ід.',
TabNomesColunas: 'Точка №,Іден,Підстанція, Опис,Статус/Парам,Прапор,Команда,Кваліфікація,Норм,Час тривоги',
SelectAll: 'Вибрати все',
UnselectAll: 'Скасувати вибір всіх',

// dlginfo.html
TENDTXT: '>Дотримуйтесь заходів',
TABULARTXT: '>Bay Tabular Screen',
CURVTXT: '>Відкрити в Графіках',
ANOTACAOTXT: 'Анотація:',
DESBLOQTXT: 'Команда Розблкувати',
COMANDAR: 'КОМАНДА',
CBMOREINFO: '+ Інші Параметри',
SPPONTOSUP: 'Точка Контролю:',
ALRINTXT: 'Вимкнута Тревога',
SPLIMSUP: 'Верхня Межа',
SPLIMINF: 'Нижня Межа',
SPLIMHIS: 'Гістерезис',
SPALTVALOR: 'Змінити Значення',
SAIR: 'ВИХІД',
CANCELAR: 'СКАСОВАНО',
FSINFO: 'Інфо. Точки',
FSBLKANNOT: 'Блокування Анотацій',
FSANNOT: 'Анотація',
FSOPTION: 'Параметри',

// dlgcomando.html
SPPASSO2: 'Оберіть функцію та натисніть командну кнопку.',
CMDMOREINFO: '+ Детальніше',
SPPONTOCMD: 'Введіть Команду:',
FSCMDINFO: 'Інформація про Команду',
FSCMDACTION: 'Дія Команди',
FSCMDOPTION: 'Параметри',

// trend.html
yaxisleft: 'Показати менші значення [стрілка вгору]',
yaxisright: 'Показати великі значення [стрілка вниз]',
yaxiszoomout: 'Зменшити [-]',
yaxiszoomin: 'Збільшити [+]',
yaxisminus: 'Коротше [1]',
yaxisplus: 'Taller [2]',
yaxiscolor: 'Змінити Колір [3]',
xaxisleft: 'Назад [ліва стрілка]',
xaxisright: 'Вперед [права стрілка]',
xaxiszoomout: 'Зменшити [/]',
xaxiszoomin: 'Збільшити [*]',
xaxisminus: 'Менше [<]',
xaxisplus: 'Більше [>]',
plotreset: 'Скинути Параметри [0] [Num 5]',
ValorAtual: 'Поточні Значеня',

Fim: ""
};

var Titles =
{
// screen.html
ZOOMIN_ID: 'Збільнити [Num +]',
ZOOMOUT_ID: 'Зменшити [Num -]',
ZPSobe: 'Вверх [Num 8]',
ZPDesce: 'Вниз [Num 2]',
ZPEsq: 'Ліво [Num 4]',
ZPCentro: 'Відцентрувати [Num 5]',
ZPDir: 'Право [Num 6]',
PRODUTO_ID: (Msg.NomeVisorTelas + ' - ' + Msg.NomeProduto),
TELAS_ID: 'Екран -->',
SELTELA: 'Вибір Екрана: [<]=попередній, [>]=наступний, [1]=перший, [2]=другий, ..., [0]=десятий ',
CORFUNDO_ID: 'Клік для зміни кольору тла.',
AJUDA_ID: 'Допомога',
HORA_ATU: 'Час останнього оновлення. Оновити [F5]!',
ANORM_ID: 'Показувати тривоги (без підтвердження і постійні тривоги)',
SILENCIA_ID: 'Приглушити сигнал! [F9]',
SP_ALARMES: 'Є нові події! Клацніть, щоб відкрити переглядач подій',
VENTOINHA: 'Якщо вентилятор зупинено, натисніть [F5]!',
PROXTELAID: 'Наступний екран',
ANTETELAID: 'Попередній екран',
PLAY_ID: 'Відтворити слайди',
PAUSE_ID: 'Призупинити показ слайдів',
TIMEMACHINE_ID: 'Машина Часу',
TIMEMACHINECLOSE_ID: 'Закрити Машину Часу',

// dlginfo.html
VALOR_HID: 'поточне значення',
ESTADO_HID: 'поточний стан',
SPQUALIF: 'Точки Відбору',
SPDESCR_SUP: 'Точка Дескриптора',
SPCMDINTERTRAV: 'ПОВЯЗАНІ КОМАНДИ!',
IMGANOT: 'Анотація',
ANOTACAO: 'Текст Анотації',
TABULAR: 'Відкрити Таблиці.',
TENDENCIAS: 'Відкрити Тенденції.',
DIVBLKCMD: 'Позначити команди для розблокування (заблоковано анотацією).',
COMANDAR: 'Натисніть, щоб мати доступ до діалогового вікна команд.',
CBMOREINFO: 'Клацніть, щоб показати більше інформації та параметрів',
NPONTO_SUP: 'Номер точки та ID.',
VLRNORCTRLS: 'Дозволяє змінити нормальний стан.',
DIVINIB: 'Коли відзначено гальмуе тривоги для цієї точки..',
LIMCTRLS: 'Налаштування меж, які перевіряють тривоги.',
LIMSUP: 'Верхній поріг тривоги.',
LIMINF: 'Нижній поріг тривоги.',
HISTER: 'Чутливість для створення нового сигналу тривоги.',
DIVALTVALOR: 'Дозволяє змінювати значення точки.',

// dlgcomando.html
COMANDO: 'Виберіть потрібну дію команди.',
EXECUTAR: 'Виконати команду!',
CANCELAR: 'Скасувати команду.',

// events.html
IMGEVENTOS: (Msg.NomeVisorEventos + ' - ' + Msg.NomeProduto + ' - ' + '\nQualifiers: 0-9=Пріорітет F=Помилка X=Ніколи не оновлювалось K=Командний A=Анотація L=Тривоги I=Заборона Тривоги C=Обчислення M=Вручну S=Підстановка U=Заморожено Y=Заблокована команда \n+number=Кількість додаткових прихованих подій при збігу.\nКлік, щоб показати/приховати номер точки та ID.'),
imgNormal: 'Нормальний режим: показувати всі події. [1]',
imgAgregar: 'Агрегований режим: для кожної точки відображається лише остання подія. [2]',
imgPanico: 'Режим паніки: агрегувати та показувати лише найважливіші події. [3]',
imgCongelar: 'Заморожений режим: не оновлюйте події для легшого читання. [4]',
imgHistorico: 'Історичний режим: перегляд старих, визнаних та стертих подій. [5]',
imgFontSizeUp: 'Більший штифт. [+]',
imgFontSizeDown: 'Менший шрифт. [-]',
imgReconheceTudo: 'Визнайте всі події! [F8]. Використовуйте [CTRL] + Клацніть, щоб підтвердити одну конкретну подію.',
imgEliminaTudo: 'Стерти всі події! [F2]',
imgAlarmes: 'Є нові події!',
HDATAINI: 'Дата вибору подій. [6] = Поточна дата',
HHORAINI: 'Початковий час пошуку [7] = Скинути час',
HFILTRO: 'Фільтр для пошуку подій, наприклад: ПІДСТ1 = пошукові події ПІДСТ1. [8] = Стерти ',
imgGpsOnEsc: 'GPS час для подій. Клацніть, щоб показати місцевий час.',
imgGpsOffEsc: 'Місцевий час для подій. Клацніть, щоб показати час GPS.',
imgGpsOnFx: 'Час GPS для подій.',
imgGpsOffFx: 'Місцевий час для подій.',
imgFilter: 'Фільтр підстанції. Позначте, що показати.',
imgClipboard: 'Копіювати у буфер обміну.',

// tabular.html
LEGQUAL_ID: '\nQualifiers: 0-9=Пріоритет F=Помилка X=Ніколи не оновлювався K=Командний A=Анотація L=Тривоги I=Заборона Тривоги P=Постійний сигнал тривоги C=Обчисленя M=Вручну S=Підстановка U=Заморожена Y=Заблокована команда \nКлік показати/приховати точки номери та ID',
IMGTABULAR: (Msg.NomeVisorTabular + ' - ' + Msg.NomeProduto + ' - ' + '\nQualifiers: 0-9=Пріоритет F=Невдалий X=Ніколи не оновлювався K=Командний A=Повідомлення L=Тривожний I=Заборонений сигнал тривоги C=Обчислений P=Постійний сигнал тривоги M=Посібник S=Підмічений U=Заморожений Y=Заблокована команда \nНатисніть, щоб показати/приховати номер точки та ID'),
cbMostraCmd: 'Виберіть, щоб відображалися лише командні точки. [1]',
cbForaNormal: 'Виберіть, щоб показувати лише тривожні точки. [2]',

Fim: ""
};
