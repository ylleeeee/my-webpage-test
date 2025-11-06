// --- 1. 기본 퀴즈 데이터 (20문제) ---
// v5: 발음 기호(phonetic) 추가
const sampleQuizData = [
    { word: "restroom", meaning: "화장실", phonetic: "/ˈrɛstruːm/", question: "다음 단어 'restroom'의 올바른 한국어 의미는 무엇인가요?", hint: "공공장소", options: ["숙제", "화장실", "비행기", "국가"], correct: 1, rationale: "'restroom'은(는) '화장실'을(를) 의미합니다." },
    { word: "difficult", meaning: "어려운", phonetic: "/ˈdɪfɪkəlt/", question: "다음 단어 'difficult'의 올바른 한국어 의미는 무엇인가요?", hint: "easy의 반대", options: ["어려운", "거인, 거대한", "소풍", "숙제"], correct: 0, rationale: "'difficult'은(는) '어려운'을(를) 의미합니다." },
    { word: "hungry", meaning: "배고픈", phonetic: "/ˈhʌŋɡri/", question: "다음 단어 'hungry'의 올바른 한국어 의미는 무엇인가요?", hint: "식욕을 느끼는 상태", options: ["배고픈", "산", "국가", "화장실"], correct: 0, rationale: "'hungry'은(는) '배고픈'을(를) 의미합니다." },
    { word: "beautiful", meaning: "아름다운", phonetic: "/ˈbjuːtɪfl/", question: "다음 단어 'beautiful'의 올바른 한국어 의미는 무엇인가요?", hint: "시각적/감각적", options: ["어제", "아름다운", "어려운", "옷"], correct: 1, rationale: "'beautiful'은(는) '아름다운'을(를) 의미합니다." },
    { word: "remember", meaning: "기억하다", phonetic: "/rɪˈmɛmbər/", question: "다음 단어 'remember'의 올바른 한국어 의미는 무엇인가요?", hint: "과거의 일을 떠올림", options: ["비행기", "기억하다", "박물관", "배고픈"], correct: 1, rationale: "'remember'은(는) '기억하다'을(를) 의미합니다." },
    { word: "museum", meaning: "박물관", phonetic: "/mjuːˈziːəm/", question: "다음 단어 'museum'의 올바른 한국어 의미는 무엇인가요?", hint: "유물, 예술품 전시", options: ["기억하다", "박물관", "호기심이 많은", "소풍"], correct: 1, rationale: "'museum'은(는) '박물관'을(를) 의미합니다." },
    { word: "curious", meaning: "호기심이 많은", phonetic: "/ˈkjʊəriəs/", question: "다음 단어 'curious'의 올바른 한국어 의미는 무엇인가요?", hint: "알고 싶어 하는 마음", options: ["호기심이 많은", "국가", "감자", "위험"], correct: 0, rationale: "'curious'은(는) '호기심이 많은'을(를) 의미합니다." },
    { word: "yesterday", meaning: "어제", phonetic: "/ˈjɛstərdeɪ/", question: "다음 단어 'yesterday'의 올바른 한국어 의미는 무엇인가요?", hint: "오늘의 바로 전날", options: ["위험", "산", "숙제", "어제"], correct: 3, rationale: "'yesterday'은(는) '어제'을(를) 의미합니다." },
    { word: "gesture", meaning: "몸짓, 제스처", phonetic: "/ˈdʒɛstʃər/", question: "다음 단어 'gesture'의 올바른 한국어 의미는 무엇인가요?", hint: "의사 전달 수단", options: ["몸짓, 제스처", "기억하다", "숙제", "배고픈"], correct: 0, rationale: "'gesture'은(는) '몸짓, 제스처'을(를) 의미합니다." },
    { word: "condition", meaning: "상태, 조건", phonetic: "/kənˈdɪʃn/", question: "다음 단어 'condition'의 올바른 한국어 의미는 무엇인가요?", hint: "사물/사람의 현황", options: ["아름다운", "상태, 조건", "역사", "어제"], correct: 1, rationale: "'condition'은(는) '상태, 조건'을(를) 의미합니다." },
    { word: "danger", meaning: "위험", phonetic: "/ˈdeɪndʒər/", question: "다음 단어 'danger'의 올바른 한국어 의미는 무엇인가요?", hint: "안전하지 않은 상태", options: ["위험", "옷", "화장실", "숙제"], correct: 0, rationale: "'danger'은(는) '위험'을(를) 의미합니다." },
    { word: "airplane", meaning: "비행기", phonetic: "/ˈɛərpleɪn/", question: "다음 단어 'airplane'의 올바른 한국어 의미는 무엇인가요?", hint: "하늘을 나는 교통수단", options: ["국가", "옷", "비행기", "역사"], correct: 2, rationale: "'airplane'은(는) '비행기'을(를) 의미합니다." },
    { word: "history", meaning: "역사", phonetic: "/ˈhɪstəri/", question: "다음 단어 'history'의 올바른 한국어 의미는 무엇인가요?", hint: "과거의 사실, 기록", options: ["감자", "역사", "어려운", "박물관"], correct: 1, rationale: "'history'은(는) '역사'을(를) 의미합니다." },
    { word: "clothes", meaning: "옷", phonetic: "/kloʊðz/", question: "다음 단어 'clothes'의 올바른 한국어 의미는 무엇인가요?", hint: "몸에 입는 것", options: ["옷", "소풍", "국가", "상태, 조건"], correct: 0, rationale: "'clothes'은(는) '옷'을(를) 의미합니다." },
    { word: "giant", meaning: "거인, 거대한", phonetic: "/ˈdʒaɪənt/", question: "다음 단어 'giant'의 올바른 한국어 의미는 무엇인가요?", hint: "매우 큰 사람/사물", options: ["거인, 거대한", "옷", "비행기", "감자"], correct: 0, rationale: "'giant'은(는) '거인, 거대한'을(를) 의미합니다." },
    { word: "nation", meaning: "국가", phonetic: "/ˈneɪʃn/", question: "다음 단어 'nation'의 올바른 한국어 의미는 무엇인가요?", hint: "영토와 국민을 가진 나라", options: ["국가", "기억하다", "화장실", "산"], correct: 0, rationale: "'nation'은(는) '국가'을(를) 의미합니다." },
    { word: "mountain", meaning: "산", phonetic: "/ˈmaʊntn/", question: "다음 단어 'mountain'의 올바른 한국어 의미는 무엇인가요?", hint: "높이 솟은 지형", options: ["숙제", "산", "역사", "아름다운"], correct: 1, rationale: "'mountain'은(는) '산'을(를) 의미합니다." },
    { word: "picnic", meaning: "소풍", phonetic: "/ˈpɪknɪk/", question: "다음 단어 'picnic'의 올바른 한국어 의미는 무엇인가요?", hint: "야외로 놀러 가는 것", options: ["호기심이 많은", "소풍", "어제", "기억하다"], correct: 1, rationale: "'picnic'은(는) '소풍'을(를) 의미합니다." },
    { word: "potato", meaning: "감자", phonetic: "/pəˈteɪtoʊ/", question: "다음 단어 'potato'의 올바른 한국어 의미는 무엇인가요?", hint: "땅속 덩이줄기 채소", options: ["몸짓, 제스처", "감자", "위험", "어려운"], correct: 1, rationale: "'potato'은(는) '감자'을(를) 의미합니다." },
    { word: "homework", meaning: "숙제", phonetic: "/ˈhoʊmwɜːrk/", question: "다음 단어 'homework'의 올바른 한국어 의미는 무엇인가요?", hint: "학생이 집에서 하는 과제", options: ["숙제", "상태, 조건", "어제", "산"], correct: 0, rationale: "'homework'은(는) '숙제'을(를) 의미합니다." }
];

// --- 2. DOM 요소 ---
const startScreen = document.getElementById('start-screen');
const startQuizBtn = document.getElementById('start-quiz-btn');

// 퀴즈 화면
const quizContainer = document.getElementById('quiz-container');
const quizTitleEl = document.getElementById('quiz-title');
const progressEl = document.getElementById('progress');
const quizContentEl = document.getElementById('quiz-content');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const rationaleEl = document.getElementById('rationale');
const nextBtn = document.getElementById('next-btn');

// (요청 1) v6: 퀴즈 화면 버튼 추가
const prevBtn = document.getElementById('prev-btn');
const homeBtn = document.getElementById('home-btn');
const quitBtn = document.getElementById('quit-btn');

// 결과 화면
const resultEl = document.getElementById('result');
const scoreDisplayEl = document.getElementById('score-display');
const wrongAnswersListDiv = document.getElementById('wrong-answers-list');
const retryBtn = document.getElementById('retry-btn');
const backToMainBtn = document.getElementById('back-to-main-btn');

// v2: 플래시카드 DOM 요소
const startLearnBtn = document.getElementById('start-learn-btn');
const flashcardContainer = document.getElementById('flashcard-container');
const flashcard = document.getElementById('flashcard');
const flashcardTitle = document.getElementById('flashcard-title');
const flashcardFront = document.getElementById('flashcard-front');
const flashcardBack = document.getElementById('flashcard-back');
const flashcardProgress = document.getElementById('flashcard-progress');
const prevCardBtn = document.getElementById('prev-card-btn');
const nextCardBtn = document.getElementById('next-card-btn');
const exitStudyBtn = document.getElementById('exit-study-btn');
const studyCompleteContainer = document.getElementById('study-complete-container');
const studySummaryList = document.getElementById('study-summary-list');
const startQuizFromSummaryBtn = document.getElementById('start-quiz-from-summary-btn');
const mainFromSummaryBtn = document.getElementById('main-from-summary-btn');

// v3: 단어장 저장 DOM 요소
const quizList = document.getElementById('quiz-list');
const noQuizList = document.getElementById('no-quiz-list');
const selectionMessage = document.getElementById('selection-message');
const accordionHeaderNewQuiz = document.getElementById('accordion-header-new-quiz');
const accordionContentNewQuiz = document.getElementById('accordion-content-new-quiz');
const newQuizNameInput = document.getElementById('new-quiz-name');
const tempWordListDiv = document.getElementById('temp-word-list');
const tempWordCountSpan = document.getElementById('temp-word-count');
const newWordInput = document.getElementById('new-word');
const newMeaningInput = document.getElementById('new-meaning');
// const newHintInput = document.getElementById('new-hint'); // v5: phonetic으로 대체
const addWordBtn = document.getElementById('add-word-btn');
const saveNewQuizBtn = document.getElementById('save-new-quiz-btn');
const manualAddMessage = document.getElementById('manual-add-message');

// v4: 랭킹, 기록, 오답노트 DOM 요소
const playerNameInput = document.getElementById('player-name');
const rankingList = document.getElementById('ranking-list');
const noRankingList = document.getElementById('no-ranking-list');

const accordionHeaderOndap = document.getElementById('accordion-header-ondap');
const accordionContentOndap = document.getElementById('accordion-content-ondap');
const startWrongQuizBtn = document.getElementById('start-wrong-quiz-btn');
const wrongQuizMessage = document.getElementById('wrong-quiz-message');

const accordionHeaderHistory = document.getElementById('accordion-header-history');
const accordionContentHistory = document.getElementById('accordion-content-history');
const historyList = document.getElementById('history-list');
const noHistoryList = document.getElementById('no-history-list');
const clearHistoryBtn = document.getElementById('clear-history-btn');

// v5: OCR, 발음 검색 DOM 요소
const ocrImageInput = document.getElementById('ocr-image-input');
const ocrExtractBtn = document.getElementById('ocr-extract-btn');
const ocrMessage = document.getElementById('ocr-message');
const newPhoneticInput = document.getElementById('new-phonetic');
const fetchPhoneticBtn = document.getElementById('fetch-phonetic-btn');
const phoneticLoader = document.getElementById('phonetic-loader');


// --- 3. 퀴즈/학습 상태 변수 ---
let activeQuizData = []; 
let currentQuestionIndex = 0;
let score = 0;
let wrongAnswers = []; 

let activeStudyData = []; 
let currentCardIndex = 0;
let autoFlipTimer; 

// v3: 단어장 저장 변수
let savedWordLists = [];
const STORAGE_KEY = 'englishQuizLists_v5'; // v5로 키 변경
let tempWords = []; 

// v4: 랭킹, 기록, 오답노트 변수
let currentPlayerName = '';
const PLAYER_KEY = 'englishQuizPlayer_v5';
let rankings = []; 
const RANKING_KEY = 'englishQuizRankings_v5';
let wrongAnswerBank = []; 
const WRONG_ANSWERS_KEY = 'englishQuizWrongAnswers_v5';
let quizHistory = []; 
const HISTORY_KEY = 'englishQuizHistory_v5';

// --- 4. 퀴즈 함수 (v1, v2) ---

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz(quizData, title = "단어 퀴즈") {
    if (quizData.length === 0) {
         selectionMessage.textContent = '퀴즈를 시작하려면 단어를 1개 이상 선택하세요.';
         selectionMessage.className = 'text-sm mt-2 h-4 text-center text-red-500';
         return;
    }
    activeQuizData = quizData.map(q => ({...q, answered: false, selected: -1})); 
    shuffleArray(activeQuizData); 
    
    currentQuestionIndex = 0;
    score = 0;
    wrongAnswers = [];
    
    quizTitleEl.textContent = title; 
    startScreen.classList.add('hidden');
    flashcardContainer.style.display = 'none'; 
    studyCompleteContainer.style.display = 'none'; 
    quizContainer.style.display = 'block';
    quizContentEl.style.display = 'block';
    resultEl.style.display = 'none';
    wrongAnswersListDiv.innerHTML = '';

    loadQuestion();
}

function loadQuestion() {
    resetState();
    const currentQuestion = activeQuizData[currentQuestionIndex];
    
    progressEl.textContent = `문제 ${currentQuestionIndex + 1} / ${activeQuizData.length}`;
    questionEl.textContent = currentQuestion.question;
    
    // (요청 1) v6: 이전 버튼 상태 관리
    prevBtn.disabled = (currentQuestionIndex === 0);
    
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.textContent = option;
        button.dataset.index = index;
        button.addEventListener('click', selectAnswer);
        optionsEl.appendChild(button);
        
        // (요청 1) v6: 이미 푼 문제 상태 복원
        if (currentQuestion.answered) {
            if (index === currentQuestion.correct) {
                button.classList.add('correct');
            } else if (index === currentQuestion.selected && index !== currentQuestion.correct) {
                button.classList.add('wrong');
            }
            button.disabled = true;
        }
    });

    // (요청 1) v6: 이미 푼 문제 상태 복원
    if (currentQuestion.answered) {
        if (currentQuestion.rationale) {
            rationaleEl.textContent = currentQuestion.rationale;
            rationaleEl.style.display = 'block';
        }
        nextBtn.disabled = false;
        prevBtn.disabled = (currentQuestionIndex === 0);
    } else {
        nextBtn.disabled = true;
    }
}

function resetState() {
    optionsEl.innerHTML = '';
    rationaleEl.style.display = 'none';
    rationaleEl.textContent = '';
    nextBtn.disabled = true;
    prevBtn.disabled = true; // (요청 1) v6: 이전 버튼 비활성화
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const selectedIndex = parseInt(selectedBtn.dataset.index);
    const currentQuestion = activeQuizData[currentQuestionIndex];
    const correctIndex = currentQuestion.correct;
    
    if (currentQuestion.answered) return; 
    currentQuestion.answered = true;
    currentQuestion.selected = selectedIndex;
    
    if (selectedIndex === correctIndex) {
        selectedBtn.classList.add('correct');
        score++;
        removeWrongAnswer(currentQuestion); 
    } else {
        selectedBtn.classList.add('wrong');
        wrongAnswers.push(currentQuestion); 
        addWrongAnswer(currentQuestion); 
    }
    
    Array.from(optionsEl.children).forEach(btn => {
        if (parseInt(btn.dataset.index) === correctIndex) {
            btn.classList.add('correct');
        }
        btn.disabled = true;
    });

    if (currentQuestion.rationale) {
        rationaleEl.textContent = currentQuestion.rationale;
        rationaleEl.style.display = 'block';
    }
    
    nextBtn.disabled = false;
    prevBtn.disabled = (currentQuestionIndex === 0); // (요청 1) v6: 이전 버튼 활성화
}

function showResults() {
    quizContentEl.style.display = 'none';
    resultEl.style.display = 'block';
    scoreDisplayEl.textContent = `총 ${activeQuizData.length}문제 중 ${score}개를 맞추셨습니다!`;

    const total = activeQuizData.length;
    if (total > 0) {
        const historyEntry = {
            timestamp: new Date().getTime(),
            playerName: currentPlayerName, // 1. 학습자 이름 추가
            quizName: quizTitleEl.textContent,
            total: total,
            correct: score,
            wrong: total - score
        };
        addHistoryEntry(historyEntry);
        updateRankings(currentPlayerName, score);
    }

    wrongAnswersListDiv.innerHTML = ''; 
    if (wrongAnswers.length > 0) {
        const h3 = document.createElement('h3');
        h3.textContent = '틀린 문제 목록';
        wrongAnswersListDiv.appendChild(h3);

        const ul = document.createElement('ul');
        wrongAnswers.forEach(q => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${q.word}</strong>: ${q.meaning}`;
            ul.appendChild(li);
        });
        wrongAnswersListDiv.appendChild(ul);
    } else {
        const p = document.createElement('p');
        p.textContent = '모든 문제를 맞추셨습니다! 🎉';
        p.className = 'text-center text-green-600 font-bold mt-4';
        wrongAnswersListDiv.appendChild(p);
    }
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < activeQuizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// (요청 1) v6: 이전 문제 함수
function handlePrevButton() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// --- v2: 플래시카드 함수 ---
function startStudy(studyData, title = "단어 학습") {
     if (studyData.length === 0) {
         selectionMessage.textContent = '학습을 시작하려면 단어를 1개 이상 선택하세요.';
         selectionMessage.className = 'text-sm mt-2 h-4 text-center text-red-500';
         return;
    }
    activeStudyData = studyData.map(q => ({...q})); 
    shuffleArray(activeStudyData);
    currentCardIndex = 0;

    flashcardTitle.textContent = title; 
    startScreen.classList.add('hidden');
    flashcardContainer.style.display = 'block';
    studyCompleteContainer.style.display = 'none';

    loadCard(currentCardIndex);
}

function loadCard(index) {
    if (autoFlipTimer) clearTimeout(autoFlipTimer);
    const card = activeStudyData[index];
    
    // v5: 발음 기호 표시
    flashcardFront.innerHTML = `
        <div class="text-4xl md:text-5xl font-bold">${card.word}</div>
        <div class="text-xl md:text-2xl text-gray-500 mt-3">
            ${card.phonetic ? card.phonetic : '&nbsp;'} 
        </div>
        <div class="text-lg text-gray-400 mt-4">(클릭하여 뒤집기)</div>
    `;
    flashcardBack.innerHTML = `
        <div class="text-3xl md:text-4xl font-bold">${card.meaning}</div>
        <div class="text-lg text-gray-600 mt-3">${card.hint || ''}</div>
    `;
    
    flashcard.classList.remove('is-flipped'); 
    flashcardProgress.textContent = `카드 ${index + 1} / ${activeStudyData.length}`;
    prevCardBtn.disabled = (index === 0);
    
    autoFlipTimer = setTimeout(() => {
        flipCard();
    }, 3000);
}

function flipCard() {
    if (autoFlipTimer) clearTimeout(autoFlipTimer);
    flashcard.classList.toggle('is-flipped');
}

function showNextCard() {
    if (currentCardIndex < activeStudyData.length - 1) {
        currentCardIndex++;
        loadCard(currentCardIndex);
    } else {
        showStudySummary();
    }
}

function showPrevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        loadCard(currentCardIndex);
    }
}

function showStudySummary() {
    flashcardContainer.style.display = 'none';
    studyCompleteContainer.style.display = 'block';
    
    studySummaryList.innerHTML = '';
    activeStudyData.forEach(card => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${card.word}</strong>: ${card.meaning}`;
        studySummaryList.appendChild(li);
    });
}

function showMainScreen() {
    quizContainer.style.display = 'none';
    resultEl.style.display = 'none';
    flashcardContainer.style.display = 'none';
    studyCompleteContainer.style.display = 'none';
    startScreen.classList.remove('hidden');
    
    renderWordList();
    renderRankings();
    renderWrongQuizButton();
    renderHistory();
    
    startLearnBtn.disabled = true;
    startQuizBtn.disabled = true;
    selectionMessage.textContent = '';
}


// --- v3: 단어장 저장 함수 ---

function loadWordLists() {
    const stored = localStorage.getItem(STORAGE_KEY);
    savedWordLists = stored ? JSON.parse(stored) : [];
}

function saveWordLists() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedWordLists));
}

function renderWordList() {
    quizList.innerHTML = '';
    
    const sampleQuizItem = document.createElement('div');
    sampleQuizItem.className = 'flex items-center p-3 bg-white border rounded-lg';
    sampleQuizItem.innerHTML = `
        <input type="checkbox" class="quiz-select-cb" id="quiz-cb-sample" data-index="-1">
        <label for="quiz-cb-sample" class="font-medium text-gray-700 flex-grow cursor-pointer">
            기본 퀴즈 (${sampleQuizData.length}문제)
        </label>
    `;
    quizList.appendChild(sampleQuizItem);

    if (savedWordLists.length === 0) {
        noQuizList.classList.remove('hidden');
    } else {
        noQuizList.classList.add('hidden');
        savedWordLists.forEach((quiz, index) => {
            const listItem = document.createElement('div');
            listItem.className = 'flex items-center p-3 bg-white border rounded-lg';
            listItem.innerHTML = `
                <input type="checkbox" class="quiz-select-cb" id="quiz-cb-${index}" data-index="${index}">
                <label for="quiz-cb-${index}" class="font-medium text-gray-700 flex-grow cursor-pointer">${quiz.name} (${quiz.questions.length}문제)</label>
                <button class="btn btn-sm btn-danger delete-quiz-btn" data-index="${index}">
                    <i class="fas fa-trash-alt"></i>
                </button>
            `;
            quizList.appendChild(listItem);
        });
    }
}

function renderTempWordList() {
    tempWordListDiv.innerHTML = '';
    if (tempWords.length === 0) {
        tempWordListDiv.innerHTML = '<p class="text-gray-400">단어를 추가해주세요...</p>';
    }
    tempWords.forEach(w => {
        const div = document.createElement('div');
        div.className = "flex justify-between items-center";
        div.innerHTML = `
            <span><strong>${w.word}</strong>: ${w.meaning} ${w.phonetic ? `(${w.phonetic})` : ''}</span>
            <button class="delete-temp-word-btn text-red-500 hover:text-red-700" data-word="${w.word}">
                <i class="fas fa-times-circle"></i>
            </button>
        `;
        tempWordListDiv.appendChild(div);
    });
    tempWordCountSpan.textContent = tempWords.length;
}

function generateQuizFromWords(words) {
    const questions = [];
    const allMeanings = words.map(w => w.meaning);

    for (const wordData of words) {
        // v5: phonetic 추가
        const { word, meaning, hint, phonetic } = wordData;
        
        const question = `다음 단어 '${word}'의 올바른 한국어 의미는 무엇인가요?`;
        const rationale = `'${word}' (${phonetic || 'N/A'})은(는) '${meaning}'을(를) 의미합니다.`;
        
        let distractors = allMeanings.filter(m => m !== meaning);
        shuffleArray(distractors);
        distractors = distractors.slice(0, 3);

        const baseDistractors = ["컴퓨터", "연필", "학교", "물병", "사랑", "시간", "하늘"];
        let distractorIdx = 0;
        while (distractors.length < 3) {
            const newDistractor = baseDistractors[distractorIdx % baseDistractors.length];
            distractorIdx++;
            if (newDistractor !== meaning && !distractors.includes(newDistractor)) {
                distractors.push(newDistractor);
            }
        }
        
        let options = [...distractors, meaning];
        shuffleArray(options); 
        
        const correctIndex = options.indexOf(meaning);
        
        questions.push({
            word, meaning, hint: hint || '', phonetic: phonetic || null, // v5: phonetic 저장
            question, options, correct: correctIndex, rationale
        });
    }
    return questions;
}

function getCombinedQuestions() {
    const checkedBoxes = quizList.querySelectorAll('.quiz-select-cb:checked');
    let combinedQuestions = [];
    let combinedNames = [];

    checkedBoxes.forEach(box => {
        const index = parseInt(box.dataset.index, 10);
        if (index === -1) { 
            combinedQuestions.push(...sampleQuizData);
            combinedNames.push('기본 퀴즈');
        } else {
            const quiz = savedWordLists[index];
            combinedQuestions.push(...quiz.questions);
            combinedNames.push(quiz.name);
        }
    });
    
    return { questions: combinedQuestions, title: combinedNames.join(' + ') || '단어' };
}

// --- v4: 랭킹, 기록, 오답노트 함수 ---

function loadPlayerName() {
    currentPlayerName = localStorage.getItem(PLAYER_KEY) || '';
    playerNameInput.value = currentPlayerName;
}

function savePlayerName(name) {
    currentPlayerName = name;
    localStorage.setItem(PLAYER_KEY, name);
}

function loadRankings() {
    const stored = localStorage.getItem(RANKING_KEY);
    rankings = stored ? JSON.parse(stored) : []; 
}

function saveRankings() {
    rankings.sort((a, b) => b.totalScore - a.totalScore); 
    rankings = rankings.slice(0, 3); 
    localStorage.setItem(RANKING_KEY, JSON.stringify(rankings));
}

function renderRankings() {
    rankingList.innerHTML = '';
    if (rankings.length === 0) {
        noRankingList.classList.remove('hidden');
    } else {
        noRankingList.classList.add('hidden');
        const icons = [
            '<i class="fas fa-crown gold"></i>', 
            '<i class="fas fa-crown silver"></i>', 
            '<i class="fas fa-crown bronze"></i>'
        ];
        rankings.forEach((entry, index) => {
            const div = document.createElement('div');
            div.className = 'ranking-item';
            div.innerHTML = `
                <span class="ranking-icon">${icons[index]}</span>
                <span class="ranking-name">${entry.name}</span>
                <span class="ranking-score">${entry.totalScore}점 (누적)</span>
            `;
            rankingList.appendChild(div);
        });
    }
}

function updateRankings(name, score) {
    if (!name || score === 0) return; 
    
    const existingIndex = rankings.findIndex(r => r.name === name);
    if (existingIndex > -1) {
        rankings[existingIndex].totalScore += (score * 5); // 2. (score * 5)로 수정
    } else {
        rankings.push({ name: name, totalScore: (score * 5) }); // 2. (score * 5)로 수정
    }
    saveRankings();
    renderRankings();
}

function loadWrongAnswerBank() {
    const stored = localStorage.getItem(WRONG_ANSWERS_KEY);
    wrongAnswerBank = stored ? JSON.parse(stored) : []; 
}

function saveWrongAnswerBank() {
    localStorage.setItem(WRONG_ANSWERS_KEY, JSON.stringify(wrongAnswerBank));
}

function addWrongAnswer(question) {
    if (!question.word) return; 
    const existingIndex = wrongAnswerBank.findIndex(q => q.word === question.word);
    if (existingIndex === -1) {
        wrongAnswerBank.push(question);
        saveWrongAnswerBank();
    }
}

function removeWrongAnswer(question) {
    if (!question.word) return;
    const existingIndex = wrongAnswerBank.findIndex(q => q.word === question.word);
    if (existingIndex > -1) {
        wrongAnswerBank.splice(existingIndex, 1);
        saveWrongAnswerBank();
    }
}

function renderWrongQuizButton() {
    const count = wrongAnswerBank.length;
    if (count > 0) {
        startWrongQuizBtn.disabled = false;
        startWrongQuizBtn.innerHTML = `<i class="fas fa-redo mr-2"></i> 틀린 문제 (${count}개) 다시 풀기`;
        wrongQuizMessage.textContent = '';
    } else {
        startWrongQuizBtn.disabled = true;
        startWrongQuizBtn.innerHTML = `<i class="fas fa-redo mr-2"></i> 틀린 문제 (0개) 다시 풀기`;
        wrongQuizMessage.textContent = '틀린 문제가 없습니다.';
        wrongQuizMessage.className = 'text-sm mt-2 h-4 text-center text-gray-500';
    }
}

function loadHistory() {
    const stored = localStorage.getItem(HISTORY_KEY);
    quizHistory = stored ? JSON.parse(stored) : [];
}

function saveHistory() {
    quizHistory = quizHistory.slice(0, 1000); 
    localStorage.setItem(HISTORY_KEY, JSON.stringify(quizHistory));
}

function addHistoryEntry(entry) {
    quizHistory.unshift(entry); 
    saveHistory();
}

function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}.(${days[date.getDay()]}) ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
}

function renderHistory() {
    historyList.innerHTML = '';
    if (quizHistory.length === 0) {
        noHistoryList.classList.remove('hidden');
    } else {
        noHistoryList.classList.add('hidden');
        quizHistory.forEach(item => {
            const div = document.createElement('div');
            div.className = 'history-item';
            const score = item.total > 0 ? Math.round((item.correct / item.total) * 100) : 0;
            div.innerHTML = `
                <span class="timestamp">${formatTimestamp(item.timestamp)}</span>
                <div class="details">
                    <!-- 1. 학습자 이름 표시 -->
                    <strong>${item.quizName}</strong> (학습자: ${item.playerName || '기록 없음'})
                    (${item.total}문제 중 ${item.correct}개 정답, ${item.wrong}개 오답)
                    <span class="score-badge">${score}점</span>
                </div>
            `;
            historyList.appendChild(div);
        });
    }
}

// --- v5: 발음 기호 검색 함수 ---
async function fetchPhonetic(word) {
    phoneticLoader.style.display = 'block';
    fetchPhoneticBtn.disabled = true;
    
    // 무료 사전 API (dictionaryapi.dev) 사용
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    try {
        // 3초 타임아웃 설정
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);

        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId);

        if (!response.ok) {
            newPhoneticInput.value = '';
            manualAddMessage.textContent = '발음 기호를 찾지 못했습니다.';
            manualAddMessage.className = 'text-sm text-yellow-600 mt-2 h-4';
            return null;
        }
        const data = await response.json();
        
        if (data[0] && data[0].phonetics) {
            // IPA 발음 기호 텍스트를 우선적으로 찾음
            const phoneticMatch = data[0].phonetics.find(p => p.text);
            if (phoneticMatch && phoneticMatch.text) {
                newPhoneticInput.value = phoneticMatch.text; // 예: /æpəl/
                manualAddMessage.textContent = '발음 기호를 찾았습니다.';
                manualAddMessage.className = 'text-sm text-green-600 mt-2 h-4';
                return phoneticMatch.text;
            }
        }
        newPhoneticInput.value = '';
        manualAddMessage.textContent = '발음 기호를 찾지 못했습니다.';
        manualAddMessage.className = 'text-sm text-yellow-600 mt-2 h-4';
        return null;
    } catch (error) {
        if (error.name === 'AbortError') {
             manualAddMessage.textContent = '발음 검색 시간이 초과되었습니다.';
             manualAddMessage.className = 'text-sm text-red-500 mt-2 h-4';
        } else {
            console.error("Phonetic fetch error:", error);
            manualAddMessage.textContent = '발음 기호 검색 중 오류 발생.';
            manualAddMessage.className = 'text-sm text-red-500 mt-2 h-4';
        }
        return null;
    } finally {
        phoneticLoader.style.display = 'none';
        fetchPhoneticBtn.disabled = false;
    }
}

// --- v5: OCR (Gemini) 함수 ---

// 1. 이미지를 Base64로 변환하는 함수
function imageToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(',')[1]); // 'data:image/jpeg;base64,' 부분 제거
        reader.onerror = error => reject(error);
    });
}

// 2. Gemini API 호출 함수
async function callGeminiApi(base64ImageData) {
    // API 키는 빈 문자열로 둡니다.
    const apiKey = ""; // 캔버스 환경에서 자동으로 제공됩니다.
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

    const payload = {
        contents: [
            {
                role: "user",
                parts: [
                    // Gemini에게 원하는 JSON 형식을 명확하게 지시합니다.
                    { text: "Analyze this image of a vocabulary note. Extract the English word and its Korean meaning. Provide the output *only* in JSON format like {\"word\": \"EnglishWord\", \"meaning\": \"KoreanMeaning\"}. If you cannot find a clear word/meaning pair, return {\"word\": \"\", \"meaning\": \"\"}." },
                    {
                        inlineData: {
                            mimeType: "image/jpeg", // 기본 JPEG, PNG도 가능
                            data: base64ImageData
                        }
                    }
                ]
            }
        ],
        generationConfig: {
            // Gemini가 JSON 형식으로 응답하도록 강제합니다.
            responseMimeType: "application/json",
            responseSchema: {
                type: "OBJECT",
                properties: {
                    "word": { "type": "STRING" },
                    "meaning": { "type": "STRING" }
                },
                propertyOrdering: ["word", "meaning"]
            }
        }
    };
    
    // API 호출 (지연/오류 처리를 위한 재시도 포함)
    let response;
    let retries = 3;
    let delay = 1000;

    while (retries > 0) {
        try {
            // 5초 타임아웃
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000);

            response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
                signal: controller.signal
            });
            clearTimeout(timeoutId);

            if (response.ok) {
                const result = await response.json();
                if (result.candidates && result.candidates[0].content && result.candidates[0].content.parts[0].text) {
                    const jsonText = result.candidates[0].content.parts[0].text;
                    return JSON.parse(jsonText); // {word: "...", meaning: "..."}
                } else {
                    throw new Error("Invalid API response structure.");
                }
            } else if (response.status === 429 || response.status >= 500) {
                // API 과부하 또는 서버 오류 시 재시도
                console.warn(`API call failed with status ${response.status}. Retrying in ${delay / 1000}s...`);
                await new Promise(res => setTimeout(res, delay));
                delay *= 2; // Exponential backoff
                retries--;
            } else {
                // 400 Bad Request 등 재시도가 의미 없는 오류
                throw new Error(`API call failed with status: ${response.status}`);
            }
        } catch (error) {
            console.error("Gemini API error:", error);
            retries--;
            if (retries <= 0) {
                return null; // 최종 실패
            }
            await new Promise(res => setTimeout(res, delay));
            delay *= 2;
        }
    }
    return null; // 모든 재시도 실패
}


// --- 5. 이벤트 리스너 ---

startQuizBtn.addEventListener('click', () => {
    const { questions, title } = getCombinedQuestions();
    startQuiz(questions, title + " 퀴즈");
});

startLearnBtn.addEventListener('click', () => {
    const { questions, title } = getCombinedQuestions();
    startStudy(questions, title + " 학습");
});

// 퀴즈 화면
nextBtn.addEventListener('click', handleNextButton);
prevBtn.addEventListener('click', handlePrevButton); // (요청 1) v6: 이전 버튼
retryBtn.addEventListener('click', () => startQuiz(activeQuizData, quizTitleEl.textContent)); 
backToMainBtn.addEventListener('click', showMainScreen);

// (요청 1) v6: 홈, 종료 버튼
homeBtn.addEventListener('click', () => {
    showMainScreen(); // 확인 창 없이 메인으로
});
quitBtn.addEventListener('click', () => {
    showResults(); // 확인 창 없이 결과로
});


// v2: 플래시카드 이벤트 리스너
flashcard.addEventListener('click', flipCard);
prevCardBtn.addEventListener('click', showPrevCard);
nextCardBtn.addEventListener('click', showNextCard);
exitStudyBtn.addEventListener('click', showStudySummary);
startQuizFromSummaryBtn.addEventListener('click', () => startQuiz(activeStudyData, flashcardTitle.textContent + " 퀴즈"));
mainFromSummaryBtn.addEventListener('click', showMainScreen);

// v3: 단어장 목록 및 생성 이벤트 리스너
quizList.addEventListener('change', (e) => {
    if (e.target.classList.contains('quiz-select-cb')) {
        const checkedBoxes = quizList.querySelectorAll('.quiz-select-cb:checked');
        if (checkedBoxes.length > 0) {
            startLearnBtn.disabled = false;
            startQuizBtn.disabled = false;
            selectionMessage.textContent = `${checkedBoxes.length}개 단어장 선택됨`;
        } else {
            startLearnBtn.disabled = true;
            startQuizBtn.disabled = true;
            selectionMessage.textContent = '';
        }
    }
});

quizList.addEventListener('click', (e) => {
    const target = e.target.closest('.delete-quiz-btn');
    if (target) {
        const index = parseInt(target.dataset.index, 10);
        savedWordLists.splice(index, 1);
        saveWordLists();
        renderWordList();
        startLearnBtn.disabled = true; 
        startQuizBtn.disabled = true;
        selectionMessage.textContent = '';
    }
});

// 아코디언 메뉴 (접기/펼치기)
accordionHeaderNewQuiz.addEventListener('click', () => {
    accordionHeaderNewQuiz.classList.toggle('open');
    accordionContentNewQuiz.classList.toggle('open');
});

// v5: '단어 추가' 버튼 (발음 기호 포함)
addWordBtn.addEventListener('click', () => {
    const word = newWordInput.value.trim();
    const meaning = newMeaningInput.value.trim();
    const phonetic = newPhoneticInput.value.trim(); // v5

    if (word && meaning) {
        if (tempWords.find(w => w.word.toLowerCase() === word.toLowerCase())) {
            manualAddMessage.textContent = `'${word}'는(은) 이미 추가된 단어입니다.`;
            manualAddMessage.className = 'text-sm text-yellow-600 mt-2 h-4';
            return;
        }
        tempWords.push({ word, meaning, hint: '', phonetic: phonetic || null }); // v5
        renderTempWordList();
        newWordInput.value = '';
        newMeaningInput.value = '';
        newPhoneticInput.value = ''; // v5
        newWordInput.focus();
        manualAddMessage.textContent = `'${word}' 단어가 추가되었습니다.`;
        manualAddMessage.className = 'text-sm text-green-600 mt-2 h-4';
    } else {
        manualAddMessage.textContent = '단어와 의미를 모두 입력해주세요.';
        manualAddMessage.className = 'text-sm text-red-500 mt-2 h-4';
    }
});

tempWordListDiv.addEventListener('click', (e) => {
    const deleteBtn = e.target.closest('.delete-temp-word-btn');
    if (deleteBtn) {
        const wordToDelete = deleteBtn.dataset.word;
        tempWords = tempWords.filter(w => w.word !== wordToDelete);
        renderTempWordList();
        manualAddMessage.textContent = `'${wordToDelete}' 단어가 삭제되었습니다.`;
        manualAddMessage.className = 'text-sm text-yellow-600 mt-2 h-4';
    }
});

saveNewQuizBtn.addEventListener('click', () => {
    const name = newQuizNameInput.value.trim();
    if (!name) {
        manualAddMessage.textContent = '단어장 이름을 입력해주세요.';
        manualAddMessage.className = 'text-sm text-red-500 mt-2 h-4';
        return;
    }
    if (tempWords.length < 4) {
        manualAddMessage.textContent = '퀴즈 생성을 위해 최소 4개의 단어가 필요합니다.';
        manualAddMessage.className = 'text-sm text-red-500 mt-2 h-4';
        return;
    }
    const newQuestions = generateQuizFromWords(tempWords);
    const newQuizSet = { name, questions: newQuestions };
    const existingIndex = savedWordLists.findIndex(q => q.name === name);
    if (existingIndex > -1) {
         savedWordLists[existingIndex] = newQuizSet;
         manualAddMessage.textContent = `'${name}' 단어장을 덮어썼습니다.`;
         manualAddMessage.className = 'text-sm text-yellow-600 mt-2 h-4';
    } else {
        savedWordLists.push(newQuizSet);
         manualAddMessage.textContent = `'${name}' 단어장이 저장되었습니다!`;
         manualAddMessage.className = 'text-sm text-green-600 mt-2 h-4';
    }
    saveWordLists();
    renderWordList();
    tempWords = [];
    newQuizNameInput.value = '';
    renderTempWordList();
});

// --- v4: 랭킹, 기록, 오답노트 리스너 ---

// 'input' 대신 'change' 이벤트를 사용하여, 입력이 완료된 후 (포커스를 잃었을 때) 저장합니다.
playerNameInput.addEventListener('change', (e) => {
    savePlayerName(e.target.value);
});

accordionHeaderOndap.addEventListener('click', () => {
    accordionHeaderOndap.classList.toggle('open');
    accordionContentOndap.classList.toggle('open');
});

accordionHeaderHistory.addEventListener('click', () => {
    accordionHeaderHistory.classList.toggle('open');
    accordionContentHistory.classList.toggle('open');
});

startWrongQuizBtn.addEventListener('click', () => {
    if (wrongAnswerBank.length === 0) {
        wrongQuizMessage.textContent = '다시 풀 틀린 문제가 없습니다.';
        wrongQuizMessage.className = 'text-sm mt-2 h-4 text-center text-red-500';
        return;
    }
    let questionsToQuiz = [...wrongAnswerBank];
    shuffleArray(questionsToQuiz);
    startQuiz(questionsToQuiz, "틀린 문제 퀴즈");
});

clearHistoryBtn.addEventListener('click', () => {
    quizHistory = [];
    saveHistory();
    renderHistory();
});

// --- v5: 고급 기능 리스너 ---

// 발음 기호 자동 검색
fetchPhoneticBtn.addEventListener('click', () => {
    const word = newWordInput.value.trim();
    if (word) {
        fetchPhonetic(word);
    } else {
        manualAddMessage.textContent = '영어 단어를 먼저 입력하세요.';
        manualAddMessage.className = 'text-sm text-red-500 mt-2 h-4';
    }
});

// OCR 텍스트 추출
ocrExtractBtn.addEventListener('click', async () => {
    const file = ocrImageInput.files[0];
    if (!file) {
        ocrMessage.textContent = '이미지 파일을 선택하세요.';
        ocrMessage.className = 'text-sm text-red-500 mt-2 h-4';
        return;
    }

    ocrMessage.textContent = 'AI가 이미지를 분석 중입니다...';
    ocrMessage.className = 'text-sm text-blue-600 mt-2 h-4';
    ocrExtractBtn.disabled = true;

    try {
        const base64Data = await imageToBase64(file);
        const result = await callGeminiApi(base64Data);

        if (result && result.word && result.meaning) {
            newWordInput.value = result.word;
            newMeaningInput.value = result.meaning;
            ocrMessage.textContent = '텍스트를 성공적으로 추출했습니다!';
            ocrMessage.className = 'text-sm text-green-600 mt-2 h-4';
            // 추출 후 자동으로 발음 기호 검색
            if (result.word) {
                fetchPhonetic(result.word);
            }
        } else {
            ocrMessage.textContent = '이미지에서 단어를 찾지 못했습니다.';
            ocrMessage.className = 'text-sm text-yellow-600 mt-2 h-4';
        }
    } catch (error) {
        console.error("OCR Error:", error);
        ocrMessage.textContent = '텍스트 추출 중 오류가 발생했습니다.';
        ocrMessage.className = 'text-sm text-red-500 mt-2 h-4';
    } finally {
        ocrExtractBtn.disabled = false;
        ocrImageInput.value = ''; // 파일 입력 초기화
    }
});

// --- 6. 초기화 ---
// DOM이 모두 로드된 후 스크립트가 실행되도록 보장
document.addEventListener('DOMContentLoaded', () => {
    loadWordLists();
    loadPlayerName();
    loadRankings();
    loadWrongAnswerBank();
    loadHistory();
    
    renderWordList();
    renderRankings();
    renderWrongQuizButton();
    renderHistory();
    renderTempWordList(); 
});
