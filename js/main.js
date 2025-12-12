// localStorage ключтері
const STORAGE_LESSONS = 'math_lessons';
const STORAGE_QUESTIONS = 'math_test_questions';
const STORAGE_ADMIN_LOGGED_IN = 'admin_logged_in';

// Бастапқы деректер (егер localStorage бос болса)
const DEFAULT_LESSONS = [
    {
        id: 1,
        title: 'Қосу амалы',
        explanation: 'Қосу - бұл сандарды біріктіру. Мысалы: 2 + 3 = 5. Біз екі санды алып, оларды қосып, нәтижені аламыз. Қосу кезінде сандардың орындарын ауыстыруға болады: 3 + 2 = 2 + 3.',
        exercises: ['12 + 8 = ?', '25 + 15 = ?', '34 + 16 = ?', '47 + 23 = ?', '56 + 34 = ?']
    },
    {
        id: 2,
        title: 'Азайту амалы',
        explanation: 'Азайту - бұл сандарды алып тастау. Мысалы: 15 - 7 = 8. Біз бірінші саннан (азайғыш) екінші санды (азайтқыш) алып тастаймыз. Нәтиже әрқашан азайғыштан кіші болады.',
        exercises: ['20 - 8 = ?', '35 - 12 = ?', '48 - 19 = ?', '56 - 27 = ?', '70 - 35 = ?']
    },
    {
        id: 3,
        title: 'Көбейту амалы',
        explanation: 'Көбейту - бұл санды бірнеше рет қосу. Мысалы: 4 × 3 = 4 + 4 + 4 = 12. Көбейту кезінде сандардың орындарын ауыстыруға болады: 3 × 4 = 4 × 3. Кез келген санды 1-ге көбейтсек, сол санның өзі шығады.',
        exercises: ['6 × 4 = ?', '7 × 5 = ?', '8 × 6 = ?', '9 × 7 = ?', '5 × 8 = ?']
    },
    {
        id: 4,
        title: 'Бөлу амалы',
        explanation: 'Бөлу - бұл санды тең бөліктерге бөлу. Мысалы: 15 ÷ 3 = 5. Бұл 15-ті 3-ке бөлгенде 5 шығады дегенді білдіреді. Бөлу көбейтудің кері амалы. Егер 5 × 3 = 15 болса, онда 15 ÷ 3 = 5.',
        exercises: ['20 ÷ 4 = ?', '24 ÷ 6 = ?', '35 ÷ 5 = ?', '42 ÷ 7 = ?', '48 ÷ 8 = ?']
    },
    {
        id: 5,
        title: 'Бөлшектер',
        explanation: 'Бөлшек - бұл бүтіннің бір бөлігі. Мысалы: 1/2 (жарты), 1/4 (төрттен бір), 3/4 (үш төрттен бір). Бөлшектің үстіндегі сан - алым, астындағы - бөлім. Бөлім бүтін нешеге бөлінгенін, ал алым қанша бөлік алынғанын көрсетеді.',
        exercises: ['1/2 + 1/2 = ?', '1/4 + 2/4 = ?', '3/4 - 1/4 = ?', '1/3 + 1/3 = ?', '2/5 + 1/5 = ?']
    },
    {
        id: 6,
        title: 'Геометрия - Периметр',
        explanation: 'Периметр - бұл фигураның барлық қабырғаларының ұзындықтарының қосындысы. Тіктөртбұрыштың периметрі: P = 2 × (a + b), мұндағы a - ұзындығы, b - ені. Шаршының периметрі: P = 4 × a, мұндағы a - қабырғасы.',
        exercises: ['Қабырғасы 5 см шаршының периметрі = ?', 'Ұзындығы 8 см, ені 4 см тіктөртбұрыштың периметрі = ?', 'Қабырғасы 6 см шаршының периметрі = ?', 'Ұзындығы 10 см, ені 5 см тіктөртбұрыштың периметрі = ?', 'Қабырғасы 7 см шаршының периметрі = ?']
    },
    {
        id: 7,
        title: 'Геометрия - Аудан',
        explanation: 'Аудан - бұл фигураның ішіндегі орын. Тіктөртбұрыштың ауданы: S = a × b, мұндағы a - ұзындығы, b - ені. Шаршының ауданы: S = a × a = a², мұндағы a - қабырғасы. Аудан квадрат бірліктермен (см², м²) өлшенеді.',
        exercises: ['Ұзындығы 6 см, ені 4 см тіктөртбұрыштың ауданы = ?', 'Қабырғасы 5 см шаршының ауданы = ?', 'Ұзындығы 8 см, ені 3 см тіктөртбұрыштың ауданы = ?', 'Қабырғасы 7 см шаршының ауданы = ?', 'Ұзындығы 9 см, ені 5 см тіктөртбұрыштың ауданы = ?']
    },
    {
        id: 8,
        title: 'Сандарды салыстыру',
        explanation: 'Сандарды салыстыру - бұл қай сан үлкен, қайсысы кіші екенін анықтау. > белгісі "үлкен" дегенді, < белгісі "кіші" дегенді, = белгісі "тең" дегенді білдіреді. Мысалы: 15 > 10 (15 үлкен 10-нан), 7 < 12 (7 кіші 12-ден).',
        exercises: ['25 ? 30 (>, <, =)', '48 ? 42 (>, <, =)', '67 ? 67 (>, <, =)', '35 ? 53 (>, <, =)', '91 ? 89 (>, <, =)']
    },
    {
        id: 9,
        title: 'Өлшем бірліктері',
        explanation: 'Өлшем бірліктері - бұл шамаларды өлшеу үшін қолданылатын бірліктер. Ұзындық: 1 метр (м) = 100 сантиметр (см), 1 километр (км) = 1000 метр. Масса: 1 килограмм (кг) = 1000 грамм (г). Уақыт: 1 сағат = 60 минут, 1 минут = 60 секунд.',
        exercises: ['2 м = ? см', '500 см = ? м', '3 км = ? м', '2000 г = ? кг', '1 сағат 30 минут = ? минут']
    },
    {
        id: 10,
        title: 'Есептер шығару',
        explanation: 'Есептер шығару - бұл мәтіннен шығарылатын математикалық есептер. Есепті шығару үшін: 1) Есепті мұқият оқып, не берілгенін, не табу керектігін анықтаңыз. 2) Қандай амал қолдану керектігін шешіңіз. 3) Есептеңіз. 4) Жауапты тексеріңіз.',
        exercises: ['Айгүлде 15 алма бар. Ол 7 алма жеді. Қанша алма қалды?', 'Мектепте 24 оқушы бар. 8 оқушы кетті. Қанша оқушы қалды?', 'Бір қорапта 6 қарындаш бар. 4 қорапта неше қарындаш бар?', '36 алманы 6 балаға тең бөлдік. Әр балаға неше алма түсті?', 'Бірінші күні 25 бет оқыды, екінші күні 18 бет оқыды. Барлығы неше бет оқыды?']
    }
];

const DEFAULT_QUESTIONS = [
    {
        id: 1,
        question: '25 + 17 неге тең?',
        options: { A: '41', B: '42', C: '43' },
        correct: 'B'
    },
    {
        id: 2,
        question: '48 - 19 неге тең?',
        options: { A: '28', B: '29', C: '30' },
        correct: 'B'
    },
    {
        id: 3,
        question: '7 × 6 неге тең?',
        options: { A: '40', B: '42', C: '44' },
        correct: 'B'
    },
    {
        id: 4,
        question: '36 ÷ 4 неге тең?',
        options: { A: '8', B: '9', C: '10' },
        correct: 'B'
    },
    {
        id: 5,
        question: 'Қабырғасы 5 см шаршының периметрі неше см?',
        options: { A: '18 см', B: '20 см', C: '25 см' },
        correct: 'B'
    },
    {
        id: 6,
        question: 'Ұзындығы 8 см, ені 4 см тіктөртбұрыштың ауданы неше см²?',
        options: { A: '30 см²', B: '32 см²', C: '36 см²' },
        correct: 'B'
    },
    {
        id: 7,
        question: '1/2 + 1/4 неге тең?',
        options: { A: '2/4', B: '3/4', C: '4/4' },
        correct: 'B'
    },
    {
        id: 8,
        question: '3 метр неше сантиметр?',
        options: { A: '200 см', B: '300 см', C: '400 см' },
        correct: 'B'
    },
    {
        id: 9,
        question: '45 саны 35-тен қалай үлкен?',
        options: { A: '45 < 35', B: '45 > 35', C: '45 = 35' },
        correct: 'B'
    },
    {
        id: 10,
        question: 'Бір қорапта 8 қарындаш бар. 5 қорапта неше қарындаш бар?',
        options: { A: '38', B: '40', C: '42' },
        correct: 'B'
    }
];

// Деректерді алу функциялары
function getLessons() {
    const stored = localStorage.getItem(STORAGE_LESSONS);
    if (stored) {
        const lessons = JSON.parse(stored);
        // Егер ескі форматта деректер болса (10 сабақтан кем), жаңа деректермен ауыстыру
        if (lessons.length < 10) {
            // Жаңа деректерді сақтау
            saveLessons(DEFAULT_LESSONS);
            return DEFAULT_LESSONS;
        }
        return lessons;
    }
    // Егер деректер жоқ болса, бастапқы деректерді сақтау
    saveLessons(DEFAULT_LESSONS);
    return DEFAULT_LESSONS;
}

function saveLessons(lessons) {
    localStorage.setItem(STORAGE_LESSONS, JSON.stringify(lessons));
}

function getQuestions() {
    const stored = localStorage.getItem(STORAGE_QUESTIONS);
    if (stored) {
        const questions = JSON.parse(stored);
        // Егер ескі форматта деректер болса (10 сұрақтан кем), жаңа деректермен ауыстыру
        if (questions.length < 10) {
            // Жаңа деректерді сақтау
            saveQuestions(DEFAULT_QUESTIONS);
            return DEFAULT_QUESTIONS;
        }
        return questions;
    }
    // Егер деректер жоқ болса, бастапқы деректерді сақтау
    saveQuestions(DEFAULT_QUESTIONS);
    return DEFAULT_QUESTIONS;
}

function saveQuestions(questions) {
    localStorage.setItem(STORAGE_QUESTIONS, JSON.stringify(questions));
}

// Бастапқы деректерді мәжбүрлі түрде орнату
function forceUpdateDefaultData() {
    // Ескі деректерді тазалау және жаңа деректерді орнату
    localStorage.setItem(STORAGE_LESSONS, JSON.stringify(DEFAULT_LESSONS));
    localStorage.setItem(STORAGE_QUESTIONS, JSON.stringify(DEFAULT_QUESTIONS));
}

// Басты бет - сабақтар тізімін көрсету
function displayLessons() {
    // Егер деректер ескі форматта болса (2 сабақтан кем), жаңарту
    const stored = localStorage.getItem(STORAGE_LESSONS);
    if (stored) {
        const lessons = JSON.parse(stored);
        if (lessons.length < 10) {
            // Жаңа деректерді орнату
            forceUpdateDefaultData();
        }
    } else {
        // Егер деректер жоқ болса, бастапқы деректерді орнату
        forceUpdateDefaultData();
    }
    
    const lessons = getLessons();
    const container = document.getElementById('lessons-list');
    
    if (!container) return;
    
    if (lessons.length === 0) {
        container.innerHTML = '<p>Әлі сабақ қосылмаған. Админ панельден сабақ қосыңыз.</p>';
        return;
    }
    
    // Оптимизированный рендеринг с использованием DocumentFragment
    const fragment = document.createDocumentFragment();
    
    lessons.forEach((lesson, index) => {
        const card = document.createElement('a');
        card.href = `lesson.html?id=${lesson.id}`;
        card.className = 'lesson-card';
        card.innerHTML = `
            <h3>${lesson.title}</h3>
            <p>Сабақты оқу</p>
        `;
        fragment.appendChild(card);
    });
    
    // Используем requestAnimationFrame для плавного рендеринга
    requestAnimationFrame(() => {
        container.innerHTML = '';
        container.appendChild(fragment);
    });
}

// Сабақ беті - сабақ мазмұнын көрсету
function displayLesson() {
    const urlParams = new URLSearchParams(window.location.search);
    const lessonId = parseInt(urlParams.get('id'));
    
    if (!lessonId) {
        window.location.href = 'index.html';
        return;
    }
    
    const lessons = getLessons();
    const lesson = lessons.find(l => l.id === lessonId);
    
    if (!lesson) {
        window.location.href = 'index.html';
        return;
    }
    
    // Сабақ атауы
    document.getElementById('lesson-title').textContent = lesson.title;
    
    // Түсіндіру
    document.getElementById('lesson-explanation').textContent = lesson.explanation;
    
    // Жаттығулар - DOM API арқылы қауіпсіз түрде қосу
    const exercisesContainer = document.getElementById('exercises-container');
    if (!exercisesContainer) return;
    
    exercisesContainer.innerHTML = '';
    
    lesson.exercises.forEach((exercise, index) => {
        const exerciseId = `exercise-${index}`;
        const isFraction = exercise.includes('/') && !exercise.match(/\d+\s*[+\-×*÷/]\s*\d+/);
        const inputType = isFraction ? 'text' : 'number';
        const placeholder = isFraction ? 'Мысалы: 3/4' : 'Жауабыңызды енгізіңіз';
        
        const exerciseDiv = document.createElement('div');
        exerciseDiv.className = 'exercise-item';
        
        const exerciseP = document.createElement('p');
        exerciseP.textContent = exercise;
        
        const input = document.createElement('input');
        input.type = inputType;
        input.id = exerciseId;
        input.className = 'exercise-input';
        input.placeholder = placeholder;
        
        const button = document.createElement('button');
        button.className = 'check-btn';
        button.textContent = 'Тексеру';
        // Безопасный способ вызова функции
        button.addEventListener('click', function() {
            checkExercise(exercise, exerciseId);
        });
        
        const resultDiv = document.createElement('div');
        resultDiv.id = `${exerciseId}-result`;
        
        exerciseDiv.appendChild(exerciseP);
        exerciseDiv.appendChild(input);
        exerciseDiv.appendChild(button);
        exerciseDiv.appendChild(resultDiv);
        
        exercisesContainer.appendChild(exerciseDiv);
    });
    
    // Тест сілтемесін жаңарту
    document.getElementById('test-link').href = `test.html?lessonId=${lessonId}`;
}

// Жаттығуны тексеру
function checkExercise(exercise, inputId) {
    const input = document.getElementById(inputId);
    if (!input) {
        console.error('Input элемент табылмады:', inputId);
        return;
    }
    
    const resultDiv = document.getElementById(`${inputId}-result`);
    if (!resultDiv) {
        console.error('Result элемент табылмады:', `${inputId}-result`);
        return;
    }
    
    const userAnswerRaw = input.value.trim();
    
    if (!userAnswerRaw) {
        resultDiv.innerHTML = '<div class="exercise-result incorrect">❌ Жауап енгізіңіз!</div>';
        input.style.borderColor = '#dc3545';
        input.style.backgroundColor = '#fef2f2';
        return;
    }
    
    // Жаттығудан дұрыс жауапты есептеу
    const correctAnswer = calculateAnswer(exercise);
    
    if (correctAnswer === null || correctAnswer === undefined) {
        resultDiv.innerHTML = '<div class="exercise-result incorrect">❌ Есептеу қатесі! Есепті қайта тексеріңіз.</div>';
        input.style.borderColor = '#dc3545';
        input.style.backgroundColor = '#fef2f2';
        console.error('Есептеу қатесі. Есеп:', exercise);
        return;
    }
    
    // Салыстыру үшін - оқушы салыстыру нәтижесін сан ретінде енгізеді
    // 1 = бірінші сан үлкен, -1 = бірінші сан кіші, 0 = тең
    if (exercise.includes('?') && (exercise.includes('>') || exercise.includes('<') || exercise.includes('='))) {
        const match = exercise.match(/(\d+)\s*\?\s*(\d+)/);
        if (match) {
            const num1 = parseInt(match[1]);
            const num2 = parseInt(match[2]);
            
            // Дұрыс нәтижені есептеу
            let expectedResult = 0;
            if (num1 > num2) expectedResult = 1;
            else if (num1 < num2) expectedResult = -1;
            else expectedResult = 0;
            
            const userAnswer = parseInt(userAnswerRaw);
            if (isNaN(userAnswer)) {
                resultDiv.innerHTML = '<div class="exercise-result incorrect">❌ Сан енгізіңіз!</div>';
                input.style.borderColor = '#dc3545';
                input.style.backgroundColor = '#fef2f2';
                return;
            }
            
            if (userAnswer === expectedResult) {
                resultDiv.innerHTML = '<div class="exercise-result correct">✅ Дұрыс! Жарайсың!</div>';
                input.style.borderColor = '#28a745';
                input.style.backgroundColor = '#f0fdf4';
            } else {
                const correctSign = expectedResult === 1 ? '>' : (expectedResult === -1 ? '<' : '=');
                resultDiv.innerHTML = `<div class="exercise-result incorrect">❌ Дұрыс емес. Дұрыс жауап: ${correctSign}</div>`;
                input.style.borderColor = '#dc3545';
                input.style.backgroundColor = '#fef2f2';
            }
            return;
        }
    }
    
    // Бөлшектер үшін
    if (typeof correctAnswer === 'string' && correctAnswer.includes('/')) {
        // Бөлшекті қарапайым түрге келтіру
        const normalizeFraction = (frac) => {
            const parts = frac.split('/');
            if (parts.length !== 2) return frac;
            const num = parseInt(parts[0]);
            const den = parseInt(parts[1]);
            if (isNaN(num) || isNaN(den)) return frac;
            // ЕКОЕ табу
            const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
            const divisor = gcd(Math.abs(num), Math.abs(den));
            return `${num / divisor}/${den / divisor}`;
        };
        const normalizedUser = normalizeFraction(userAnswerRaw);
        const normalizedCorrect = normalizeFraction(correctAnswer);
        if (normalizedUser === normalizedCorrect || userAnswerRaw === correctAnswer) {
            resultDiv.innerHTML = '<div class="exercise-result correct">✅ Дұрыс! Жарайсың!</div>';
            input.style.borderColor = '#28a745';
            input.style.backgroundColor = '#f0fdf4';
        } else {
            resultDiv.innerHTML = `<div class="exercise-result incorrect">❌ Дұрыс емес. Дұрыс жауап: ${correctAnswer}</div>`;
            input.style.borderColor = '#dc3545';
            input.style.backgroundColor = '#fef2f2';
        }
        return;
    }
    
    // Сандық жауаптар үшін
    const userAnswer = parseFloat(userAnswerRaw);
    const correctAnswerNum = parseFloat(correctAnswer);
    
    if (isNaN(userAnswer)) {
        resultDiv.innerHTML = '<div class="exercise-result incorrect">❌ Жауап енгізіңіз!</div>';
        input.style.borderColor = '#dc3545';
        return;
    }
    
    if (isNaN(correctAnswerNum)) {
        resultDiv.innerHTML = '<div class="exercise-result incorrect">❌ Есептеу қатесі!</div>';
        input.style.borderColor = '#dc3545';
        return;
    }
    
    // Салыстыру (0.01 дәлдікпен)
    const difference = Math.abs(userAnswer - correctAnswerNum);
    if (difference < 0.01) {
        resultDiv.innerHTML = '<div class="exercise-result correct">✅ Дұрыс! Жарайсың!</div>';
        input.style.borderColor = '#28a745';
        input.style.backgroundColor = '#f0fdf4';
    } else {
        // Дұрыс жауапты көрсету (бүтін сан болса, ондық бөлшек көрсетпеу)
        const displayAnswer = Number.isInteger(correctAnswerNum) ? correctAnswerNum : correctAnswerNum.toFixed(2);
        resultDiv.innerHTML = `<div class="exercise-result incorrect">❌ Дұрыс емес. Дұрыс жауап: ${displayAnswer}</div>`;
        input.style.borderColor = '#dc3545';
        input.style.backgroundColor = '#fef2f2';
    }
}

// Жаттығу жауабын есептеу
function calculateAnswer(exercise) {
    // Бөлшектерді тексеру
    if (exercise.includes('/')) {
        const fractionMatch = exercise.match(/(\d+)\/(\d+)\s*([+\-])\s*(\d+)\/(\d+)/);
        if (fractionMatch) {
            const num1 = parseInt(fractionMatch[1]);
            const den1 = parseInt(fractionMatch[2]);
            const operator = fractionMatch[3];
            const num2 = parseInt(fractionMatch[4]);
            const den2 = parseInt(fractionMatch[5]);
            
            if (den1 === den2) {
                if (operator === '+') {
                    return `${num1 + num2}/${den1}`;
                } else {
                    return `${num1 - num2}/${den1}`;
                }
            }
        }
    }
    
    // Периметр есептері
    if (exercise.includes('периметр')) {
        // Шаршы периметрі
        const squareMatch = exercise.match(/Қабырғасы\s*(\d+)\s*см\s*шаршының\s*периметрі/);
        if (squareMatch) {
            return parseInt(squareMatch[1]) * 4;
        }
        // Тіктөртбұрыш периметрі
        const rectMatch = exercise.match(/Ұзындығы\s*(\d+)\s*см[,\s]*ені\s*(\d+)\s*см\s*тіктөртбұрыштың\s*периметрі/);
        if (rectMatch) {
            return (parseInt(rectMatch[1]) + parseInt(rectMatch[2])) * 2;
        }
    }
    
    // Аудан есептері
    if (exercise.includes('ауданы')) {
        // Шаршы ауданы
        const squareMatch = exercise.match(/Қабырғасы\s*(\d+)\s*см\s*шаршының\s*ауданы/);
        if (squareMatch) {
            return parseInt(squareMatch[1]) * parseInt(squareMatch[1]);
        }
        // Тіктөртбұрыш ауданы
        const rectMatch = exercise.match(/Ұзындығы\s*(\d+)\s*см[,\s]*ені\s*(\d+)\s*см\s*тіктөртбұрыштың\s*ауданы/);
        if (rectMatch) {
            return parseInt(rectMatch[1]) * parseInt(rectMatch[2]);
        }
    }
    
    // Өлшем бірліктері
    if (exercise.includes('м = ? см') || exercise.includes('м = ?см') || exercise.includes('м=? см') || exercise.includes('м=?см')) {
        const match = exercise.match(/(\d+)\s*м\s*=\s*\?\s*см/);
        if (match) return parseInt(match[1]) * 100;
    }
    if (exercise.includes('см = ? м') || exercise.includes('см = ?м') || exercise.includes('см=? м') || exercise.includes('см=?м')) {
        const match = exercise.match(/(\d+)\s*см\s*=\s*\?\s*м/);
        if (match) {
            const result = parseInt(match[1]) / 100;
            return result;
        }
    }
    if (exercise.includes('км = ? м') || exercise.includes('км = ?м') || exercise.includes('км=? м') || exercise.includes('км=?м')) {
        const match = exercise.match(/(\d+)\s*км\s*=\s*\?\s*м/);
        if (match) return parseInt(match[1]) * 1000;
    }
    if (exercise.includes('г = ? кг') || exercise.includes('г = ?кг') || exercise.includes('г=? кг') || exercise.includes('г=?кг')) {
        const match = exercise.match(/(\d+)\s*г\s*=\s*\?\s*кг/);
        if (match) {
            const result = parseInt(match[1]) / 1000;
            return result;
        }
    }
    if (exercise.includes('сағат') && exercise.includes('минут')) {
        const match = exercise.match(/(\d+)\s*сағат\s*(\d+)\s*минут\s*=\s*\?\s*минут/);
        if (match) return parseInt(match[1]) * 60 + parseInt(match[2]);
    }
    
    // Сандарды салыстыру
    if (exercise.includes('?') && (exercise.includes('>') || exercise.includes('<') || exercise.includes('='))) {
        const match = exercise.match(/(\d+)\s+\?\s+(\d+)/);
        if (match) {
            const num1 = parseInt(match[1]);
            const num2 = parseInt(match[2]);
            if (num1 > num2) return '>';
            if (num1 < num2) return '<';
            return '=';
        }
    }
    
    // Есептер (тексттік есептер)
    if (exercise.includes('алма') || exercise.includes('оқушы') || exercise.includes('қарындаш') || exercise.includes('бет')) {
        // Алма есебі - азайту
        if ((exercise.includes('жеді') || exercise.includes('кетті')) && exercise.includes('қалды')) {
            const numbers = exercise.match(/\d+/g);
            if (numbers && numbers.length >= 2) {
                return parseInt(numbers[0]) - parseInt(numbers[1]);
            }
        }
        // Көбейту есебі
        if (exercise.includes('қорапта') && (exercise.includes('неше') || exercise.includes('қанша'))) {
            const numbers = exercise.match(/\d+/g);
            if (numbers && numbers.length >= 2) {
                return parseInt(numbers[0]) * parseInt(numbers[1]);
            }
        }
        // Бөлу есебі
        if ((exercise.includes('бөлдік') || exercise.includes('әр')) && exercise.includes('неше')) {
            const numbers = exercise.match(/\d+/g);
            if (numbers && numbers.length >= 2) {
                const result = parseInt(numbers[0]) / parseInt(numbers[1]);
                return Math.round(result * 100) / 100; // Округление до 2 знаков
            }
        }
        // Қосу есебі
        if (exercise.includes('оқыды') && exercise.includes('Барлығы')) {
            const numbers = exercise.match(/\d+/g);
            if (numbers && numbers.length >= 2) {
                return parseInt(numbers[0]) + parseInt(numbers[1]);
            }
        }
    }
    
    // Қарапайым амалдар "2 + 2 = ?" сияқты форматты парсинг
    // Ең соңғы рет тексеру - егер басқа ешнәрсе жұмыс істемесе
    const match = exercise.match(/(\d+)\s*([+\-×*÷/])\s*(\d+)/);
    if (match) {
        const num1 = parseInt(match[1]);
        const operator = match[2];
        const num2 = parseInt(match[3]);
        
        switch(operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '×':
            case '*':
                return num1 * num2;
            case '÷':
            case '/':
                if (num2 === 0) {
                    console.warn('Нөлге бөлу мүмкін емес');
                    return null;
                }
                const result = num1 / num2;
                // Егер бүтін сан болса, ондық бөлшек көрсетпеу
                return Number.isInteger(result) ? result : Math.round(result * 100) / 100;
            default:
                return null;
        }
    }
    
    // Егер ешнәрсе табылмаса
    console.warn('Есептеу қатесі. Есепті танымады:', exercise);
    return null;
}

// Тест беті - тест сұрақтарын көрсету
function displayTest() {
    const questions = getQuestions();
    
    if (questions.length === 0) {
        document.getElementById('test-container').innerHTML = '<p>Әлі тест сұрақтары қосылмаған. Админ панельден сұрақ қосыңыз.</p>';
        return;
    }
    
    // 5 сұрақты көрсету (егер 5-тен көп болса, соңғы 5-ін)
    const testQuestions = questions.length > 5 ? questions.slice(-5) : questions;
    
    const testContainer = document.getElementById('test-container');
    testContainer.innerHTML = testQuestions.map((q, index) => `
        <div class="test-question" data-question-id="${q.id}">
            <h3>${index + 1}. ${q.question}</h3>
            <div class="test-options">
                <div class="test-option" onclick="selectOption(${index}, 'A')" data-option="A">
                    A) ${q.options.A}
                </div>
                <div class="test-option" onclick="selectOption(${index}, 'B')" data-option="B">
                    B) ${q.options.B}
                </div>
                <div class="test-option" onclick="selectOption(${index}, 'C')" data-option="C">
                    C) ${q.options.C}
                </div>
            </div>
        </div>
    `).join('') + `
        <button onclick="submitTest()" class="submit-test-btn">Тестті аяқтау</button>
    `;
}

// Жауап таңдау
let selectedAnswers = {};

function selectOption(questionIndex, option) {
    selectedAnswers[questionIndex] = option;
    
    // Барлық опцияларды таңдалмаған деп белгілеу
    const questionDiv = document.querySelectorAll('.test-question')[questionIndex];
    questionDiv.querySelectorAll('.test-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Таңдалған опцияны белгілеу
    const selectedOption = questionDiv.querySelector(`[data-option="${option}"]`);
    selectedOption.classList.add('selected');
}

// Тестті жіберу
function submitTest() {
    const questions = getQuestions();
    const testQuestions = questions.slice(0, 5);
    
    if (Object.keys(selectedAnswers).length < testQuestions.length) {
        alert('Барлық сұрақтарға жауап беріңіз!');
        return;
    }
    
    let correctCount = 0;
    let resultDetails = [];
    
    testQuestions.forEach((q, index) => {
        const userAnswer = selectedAnswers[index];
        const isCorrect = userAnswer === q.correct;
        
        if (isCorrect) {
            correctCount++;
        }
        
        resultDetails.push(`
            <div style="margin-bottom: 15px; padding: 10px; background: ${isCorrect ? '#d4edda' : '#f8d7da'}; border-radius: 5px;">
                <strong>${index + 1}. ${q.question}</strong><br>
                Сіздің жауабыңыз: ${userAnswer}) ${q.options[userAnswer]} ${isCorrect ? '✅' : '❌'}<br>
                Дұрыс жауап: ${q.correct}) ${q.options[q.correct]}
            </div>
        `);
    });
    
    const percentage = Math.round((correctCount / testQuestions.length) * 100);
    
    // Нәтижені көрсету
    document.getElementById('test-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('result-score').innerHTML = `
        ${correctCount} / ${testQuestions.length}<br>
        <span style="font-size: 0.6em;">${percentage}%</span>
    `;
    document.getElementById('result-details').innerHTML = resultDetails.join('');
    
    // Жауаптарды тазалау
    selectedAnswers = {};
}

// Админ панель - бастау
function initAdmin() {
    // Логин формасы
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (username === 'admin' && password === '1234') {
                localStorage.setItem(STORAGE_ADMIN_LOGGED_IN, 'true');
                showAdminPanel();
            } else {
                document.getElementById('login-error').textContent = 'Қате логин немесе пароль!';
                document.getElementById('login-error').style.display = 'block';
            }
        });
    }
    
    // Егер админ кіру жасаған болса, панельді көрсету
    if (localStorage.getItem(STORAGE_ADMIN_LOGGED_IN) === 'true') {
        showAdminPanel();
    }
}

// Админ панельді көрсету
function showAdminPanel() {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('admin-panel').style.display = 'block';
    
    // Сабақ қосу формасы
    const addLessonForm = document.getElementById('add-lesson-form');
    if (addLessonForm) {
        addLessonForm.addEventListener('submit', function(e) {
            e.preventDefault();
            addLesson();
        });
    }
    
    // Сұрақ қосу формасы
    const addQuestionForm = document.getElementById('add-question-form');
    if (addQuestionForm) {
        addQuestionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            addQuestion();
        });
    }
    
    // Тізімдерді көрсету
    displayAdminLessons();
    displayAdminQuestions();
}

// Сабақ қосу
function addLesson() {
    const title = document.getElementById('lesson-title').value;
    const explanation = document.getElementById('lesson-explanation').value;
    const exercisesText = document.getElementById('lesson-exercises').value;
    
    if (!title || !explanation || !exercisesText) {
        alert('Барлық өрістерді толтырыңыз!');
        return;
    }
    
    const exercises = exercisesText.split('\n').filter(ex => ex.trim() !== '');
    
    const lessons = getLessons();
    const newId = lessons.length > 0 ? Math.max(...lessons.map(l => l.id)) + 1 : 1;
    
    const newLesson = {
        id: newId,
        title: title,
        explanation: explanation,
        exercises: exercises
    };
    
    lessons.push(newLesson);
    saveLessons(lessons);
    
    // Форманы тазалау
    document.getElementById('add-lesson-form').reset();
    
    // Тізімді жаңарту
    displayAdminLessons();
    
    // Хабарлама
    showMessage('Сабақ сәтті қосылды!', 'success');
}

// Сұрақ қосу
function addQuestion() {
    const questionText = document.getElementById('question-text').value;
    const optionA = document.getElementById('option-a').value;
    const optionB = document.getElementById('option-b').value;
    const optionC = document.getElementById('option-c').value;
    const correctAnswer = document.getElementById('correct-answer').value;
    
    if (!questionText || !optionA || !optionB || !optionC || !correctAnswer) {
        alert('Барлық өрістерді толтырыңыз!');
        return;
    }
    
    const questions = getQuestions();
    const newId = questions.length > 0 ? Math.max(...questions.map(q => q.id)) + 1 : 1;
    
    const newQuestion = {
        id: newId,
        question: questionText,
        options: { A: optionA, B: optionB, C: optionC },
        correct: correctAnswer
    };
    
    questions.push(newQuestion);
    saveQuestions(questions);
    
    // Форманы тазалау
    document.getElementById('add-question-form').reset();
    
    // Тізімді жаңарту
    displayAdminQuestions();
    
    // Хабарлама
    showMessage('Сұрақ сәтті қосылды!', 'success');
}

// Админ панельде сабақтар тізімін көрсету
function displayAdminLessons() {
    const lessons = getLessons();
    const container = document.getElementById('lessons-list-admin');
    
    if (!container) return;
    
    if (lessons.length === 0) {
        container.innerHTML = '<p>Әлі сабақ қосылмаған.</p>';
        return;
    }
    
    container.innerHTML = lessons.map(lesson => `
        <div class="admin-item">
            <h4>${lesson.title}</h4>
            <p>${lesson.explanation.substring(0, 100)}...</p>
            <p><strong>Жаттығулар саны:</strong> ${lesson.exercises.length}</p>
            <button onclick="deleteLesson(${lesson.id})" class="delete-btn">Жою</button>
        </div>
    `).join('');
}

// Админ панельде сұрақтар тізімін көрсету
function displayAdminQuestions() {
    const questions = getQuestions();
    const container = document.getElementById('questions-list-admin');
    
    if (!container) return;
    
    if (questions.length === 0) {
        container.innerHTML = '<p>Әлі сұрақ қосылмаған.</p>';
        return;
    }
    
    container.innerHTML = questions.map(question => `
        <div class="admin-item">
            <h4>${question.question}</h4>
            <p><strong>Дұрыс жауап:</strong> ${question.correct}) ${question.options[question.correct]}</p>
            <button onclick="deleteQuestion(${question.id})" class="delete-btn">Жою</button>
        </div>
    `).join('');
}

// Сабақты жою
function deleteLesson(lessonId) {
    if (confirm('Сабақты жоюға сенімдісіз бе?')) {
        const lessons = getLessons();
        const filtered = lessons.filter(l => l.id !== lessonId);
        saveLessons(filtered);
        displayAdminLessons();
        showMessage('Сабақ жойылды!', 'success');
    }
}

// Сұрақты жою
function deleteQuestion(questionId) {
    if (confirm('Сұрақты жоюға сенімдісіз бе?')) {
        const questions = getQuestions();
        const filtered = questions.filter(q => q.id !== questionId);
        saveQuestions(filtered);
        displayAdminQuestions();
        showMessage('Сұрақ жойылды!', 'success');
    }
}

// Шығу
function logout() {
    localStorage.removeItem(STORAGE_ADMIN_LOGGED_IN);
    location.reload();
}

// Хабарлама көрсету
function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = type === 'success' ? 'success-message' : 'error-message';
    messageDiv.textContent = message;
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '20px';
    messageDiv.style.right = '20px';
    messageDiv.style.zIndex = '1000';
    messageDiv.style.minWidth = '300px';
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}
