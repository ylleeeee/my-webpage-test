// --- 1. 기본 퀴즈 데이터 (20문제) ---
// v5: 발음 기호(phonetic) 추가 (v4 베이스에는 수동 입력)
const sampleQuizData = [
    { word: "restroom", meaning: "화장실", phonetic: "/ˈrɛstruːm/", question: "restroom", hint: "공공장소", options: ["숙제", "화장실", "비행기", "국가"], correct: 1, rationale: "'restroom'은(는) '화장실'을(를) 의미합니다." },
    { word: "difficult", meaning: "어려운", phonetic: "/ˈdɪfɪkəlt/", question: "difficult", hint: "easy의 반대", options: ["어려운", "거인, 거대한", "소풍", "숙제"], correct: 0, rationale: "'difficult'은(는) '어려운'을(를) 의미합니다." },
    { word: "hungry", meaning: "배고픈", phonetic: "/ˈhʌŋɡri/", question: "hungry", hint: "식욕을 느끼는 상태", options: ["배고픈", "산", "국가", "화장실"], correct: 0, rationale: "'hungry'은(는) '배고픈'을(를) 의미합니다." },
    { word: "beautiful", meaning: "아름다운", phonetic: "/ˈbjuːtɪfl/", question: "beautiful", hint: "시각적/감각적", options: ["어제", "아름다운", "어려운", "옷"], correct: 1, rationale: "'beautiful'은(는) '아름다운'을(를) 의미합니다." },
    { word: "remember", meaning: "기억하다", phonetic: "/rɪˈmɛmbər/", question: "remember", hint: "과거의 일을 떠올림", options: ["비행기", "기억하다", "박물관", "배고픈"], correct: 1, rationale: "'remember'은(는) '기억하다'을(를) 의미합니다." },
    { word: "museum", meaning: "박물관", phonetic: "/mjuːˈziːəm/", question: "museum", hint: "유물, 예술품 전시", options: ["기억하다", "박물관", "호기심이 많은", "소풍"], correct: 1, rationale: "'museum'은(는) '박물관'을(를) 의미합니다." },
    { word: "curious", meaning: "호기심이 많은", phonetic: "/ˈkjʊəriəs/", question: "curious", hint: "알고 싶어 하는 마음", options: ["호기심이 많은", "국가", "감자", "위험"], correct: 0, rationale: "'curious'은(는) '호기심이 많은'을(를) 의미합니다." },
    { word: "yesterday", meaning: "어제", phonetic: "/ˈjɛstərdeɪ/", question: "yesterday", hint: "오늘의 바로 전날", options: ["위험", "산", "숙제", "어제"], correct: 3, rationale: "'yesterday'은(는) '어제'을(를) 의미합니다." },
    { word: "gesture", meaning: "몸짓, 제스처", phonetic: "/ˈdʒɛstʃər/", question: "gesture", hint: "의사 전달 수단", options: ["몸짓, 제스처", "기억하다", "숙제", "배고픈"], correct: 0, rationale: "'gesture'은(는) '몸짓, 제스처'을(를) 의미합니다." },
    { word: "condition", meaning: "상태, 조건", phonetic: "/kənˈdɪʃn/", question: "condition", hint: "사물/사람의 현황", options: ["아름다운", "상태, 조건", "역사", "어제"], correct: 1, rationale: "'condition'은(는) '상태, 조건'을(를) 의미합니다." },
    { word: "danger", meaning: "위험", phonetic: "/ˈdeɪndʒər/", question: "danger", hint: "안전하지 않은 상태", options: ["위험", "옷", "화장실", "숙제"], correct: 0, rationale: "'danger'은(는) '위험'을(를) 의미합니다." },
    { word: "airplane", meaning: "비행기", phonetic: "/ˈɛərpleɪn/", question: "airplane", hint: "하늘을 나는 교통수단", options: ["국가", "옷", "비행기", "역사"], correct: 2, rationale: "'airplane'은(는) '비행기'을(를) 의미합니다." },
    { word: "history", meaning: "역사", phonetic: "/ˈhɪstəri/", question: "history", hint: "과거의 사실, 기록", options: ["감자", "역사", "어려운", "박물관"], correct: 1, rationale: "'history'은(는) '역사'을(를) 의미합니다." },
    { word: "clothes", meaning: "옷", phonetic: "/kloʊðz/", question: "clothes", hint: "몸에 입는 것", options: ["옷", "소풍", "국가", "상태, 조건"], correct: 0, rationale: "'clothes'은(는) '옷'을(를) 의미합니다." },
    { word: "giant", meaning: "거인, 거대한", phonetic: "/ˈdʒaɪənt/", question: "giant", hint: "매우 큰 사람/사물", options: ["거인, 거대한", "옷", "비행기", "감자"], correct: 0, rationale: "'giant'은(는) '거인, 거대한'을(를) 의미합니다." },
    { word: "nation", meaning: "국가", phonetic: "/ˈneɪʃn/", question: "nation", hint: "영토와 국민을 가진 나라", options: ["국가", "기억하다", "화장실", "산"], correct: 0, rationale: "'nation'은(는) '국가'을(를) 의미합니다." },
    { word: "mountain", meaning: "산", phonetic: "/ˈmaʊntn/", question: "mountain", hint: "높이 솟은 지형", options: ["숙제", "산", "역사", "아름다운"], correct: 1, rationale: "'mountain'은(는) '산'을(를) 의미합니다." },
    { word: "picnic", meaning: "소풍", phonetic: "/ˈpɪknɪk/", question: "picnic", hint: "야외로 놀러 가는 것", options: ["호기심이 많은", "소풍", "어제", "기억하다"], correct: 1, rationale: "'picnic'은(는) '소풍'을(를) 의미합니다." },
    { word: "potato", meaning: "감자", phonetic: "/pəˈteɪtoʊ/", question: "potato", hint: "땅속 덩이줄기 채소", options: ["몸짓, 제스처", "감자", "위험", "어려운"], correct: 1, rationale: "'potato'은(는) '감자'을(를) 의미합니다." },
    { word: "homework", meaning: "숙제", phonetic: "/ˈhoʊmwɜːrk/", question: "homework", hint: "학생이 집에서 하는 과제", options: ["숙제", "상태, 조건", "어제", "산"], correct: 0, rationale: "'homework'은(는) '숙제'을(를) 의미합니다." }
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

// v6: 퀴즈 화면 버튼
const nextBtn = document.getElementById('next-btn');
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
const flashcardScene = document.getElementById('flashcard-scene'); // v6
const flashcard = document.getElementById('flashcard');
const flashcardTitle = document.getElementById('flashcard-title');
const flashcardFront = document.getElementById('flashcard-front');
const flashcardBack = document.getElementById('flashcard-back');
const flashcardProgress = document.getElementById('flashcard-progress');
const exitStudyBtn = document.getElementById('exit-study-btn');
const studyCompleteContainer = document.getElementById('study-complete-container');
const studySummaryList = document.getElementById('study-summary-list');
const startQuizFromSummaryBtn = document.getElementById('start-quiz-from-summary-btn');
const mainFromSummaryBtn = document.getElementById('main-from-summary-btn');
const cardPrevArrow = document.getElementById('card-prev-arrow'); // v6
const cardNextArrow = document.getElementById('card-next-arrow'); // v6

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
const newPhoneticInput = document.getElementById('new-phonetic'); // v4 (v5 AI 제외)
const addWordBtn = document.getElementById('add-word-btn');
const saveNewQuizBtn = document.getElementById('save-new-quiz-btn');
const manualAddMessage = document.getElementById('manual-add-message');

// v4: 랭킹, 기록, 오답노트 DOM 요소
const playerNameInput = document.getElementById('player-name');
const rankingList = document.getElementById('ranking-list');
const noRankingList = document.getElementById('no-ranking-list');
const rankingResetBtn = document.getElementById('ranking-reset-btn'); // v6

const accordionHeaderOndap = document.getElementById('accordion-header-ondap');
const accordionContentOndap = document.getElementById('accordion-content-ondap');
const startWrongQuizBtn = document.getElementById('start-wrong-quiz-btn');
const wrongQuizMessage = document.getElementById('wrong-quiz-message');

const accordionHeaderHistory = document.getElementById('accordion-header-history');
const accordionContentHistory = document.getElementById('accordion-content-history');
const historyList = document.getElementById('history-list');
const noHistoryList = document.getElementById('no-history-list');
const clearHistoryBtn = document.getElementById('clear-history-btn');

// v6: '내 기록만 보기' 필터 DOM 요소
const filterHistoryCheckbox = document.getElementById('filter-history-checkbox');

// --- 3. 퀴즈/학습 상태 변수 ---
let activeQuizData = []; 
let currentQuestionIndex = 0;
let score = 0;
let wrongAnswers = []; 

let activeStudyData = []; 
let currentCardIndex = 0;
let autoFlipTimer; 
let touchStartX = 0; // v6
let touchEndX = 0; // v6

// v3: 단어장 저장 변수
let savedWordLists = [];
const STORAGE_KEY = 'englishQuizLists_v6'; // v6
let tempWords = []; 

// v4: 랭킹, 기록, 오답노트 변수
let currentPlayerName = '';
const PLAYER_KEY = 'englishQuizPlayer_v6';
let rankings = {}; // v6: { startDate, scores: [] }
const RANKING_KEY = 'englishQuizRankings_v6';
let wrongAnswerBank = []; 
const WRONG_ANSWERS_KEY = 'englishQuizWrongAnswers_v6';
let quizHistory = []; 
const HISTORY_KEY = 'englishQuizHistory_v6';

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
    // wrongAnswers = []; // v6: 종료 시 판별하므로 퀴즈 시작 시 초기화 불필요
    
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
    questionEl.textContent = currentQuestion.question; // v6: 단어 표시
    
    // v6: 이전 버튼 상태 관리
    prevBtn.disabled = (currentQuestionIndex === 0);
    
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.textContent = option;
        button.dataset.index = index;
        button.addEventListener('click', selectAnswer);
        optionsEl.appendChild(button);
        
        // v6: 이미 푼 문제 상태 복원
        if (currentQuestion.answered) {
            if (index === currentQuestion.correct) {
                button.classList.add('correct');
            } else if (index === currentQuestion.selected && index !== currentQuestion.correct) {
                button.classList.add('wrong');
            }
            button.disabled = true;
        }
    });

    // v6: 이미 푼 문제 상태 복원
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
    prevBtn.disabled = true; 
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
        // score++; // v6: 점수 계산은 showResults에서
        removeWrongAnswer(currentQuestion); 
    } else {
        selectedBtn.classList.add('wrong');
        // wrongAnswers.push(currentQuestion); // v6: showResults에서
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
    prevBtn.disabled = (currentQuestionIndex === 0); 
}

// v6 - 요청 5: 퀴즈 종료 시 처리
function showResults(isQuit = false) { 
    quizContentEl.style.display = 'none';
    resultEl.style.display = 'block';
    
    let totalAnswered, correctCount, wrongCount;
    let answeredQuestions = activeQuizData.filter(q => q.answered);
    
    if (isQuit) { // 퀴즈 종료 시
        totalAnswered = answeredQuestions.length;
        correctCount = answeredQuestions.filter(q => q.selected === q.correct).length;
        wrongCount = totalAnswered - correctCount;
        wrongAnswers = answeredQuestions.filter(q => q.selected !== q.correct);
        
        scoreDisplayEl.textContent = `푼 문제 ${totalAnswered}개 중 ${correctCount}개를 맞추셨습니다!`;
    } else { // 퀴즈 완료 시
        totalAnswered = activeQuizData.length;
        correctCount = activeQuizData.filter(q => q.selected === q.correct).length; // v6: score 변수 대신 재계산
        wrongCount = totalAnswered - correctCount;
        wrongAnswers = activeQuizData.filter(q => q.answered && q.selected !== q.correct);

        scoreDisplayEl.textContent = `총 ${totalAnswered}문제 중 ${correctCount}개를 맞추셨습니다!`;
    }

    // v4: 학습 기록 및 랭킹 저장
    if (totalAnswered > 0) {
        const historyEntry = {
            timestamp: new Date().getTime(),
            playerName: currentPlayerName, 
            quizName: quizTitleEl.textContent,
            total: totalAnswered, 
            correct: correctCount, 
            wrong: wrongCount
        };
        addHistoryEntry(historyEntry);
        updateRankings(currentPlayerName, correctCount); // v6: 맞은 개수(correctCount)로 랭킹 업데이트
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
        p.textContent = (isQuit && totalAnswered === 0) ? '푼 문제가 없습니다.' : '모든 문제를 맞추셨습니다! 🎉';
        p.className = 'text-center text-green-600 font-bold mt-4';
        wrongAnswersListDiv.appendChild(p);
    }
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < activeQuizData.length) {
        loadQuestion();
    } else {
        showResults(false); // v6: 퀴즈 완료
    }
}

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
    
    // v6 - 요청 3: (클릭/스와이프) 문구 삭제
    flashcardFront.innerHTML = `
        <div class="text-4xl md:text-5xl font-bold">${card.word}</div>
        <div class="text-xl md:text-2xl text-gray-500 mt-3">
            ${card.phonetic ? card.phonetic : '&nbsp;'} 
        </div>
    `;
    flashcardBack.innerHTML = `
        <div class="text-3xl md:text-4xl font-bold">${card.meaning}</div>
        <div class="text-lg text-gray-600 mt-3">${card.hint || ''}</div>
    `;
    
    flashcard.classList.remove('is-flipped'); 
    flashcardProgress.textContent = `카드 ${index + 1} / ${activeStudyData.length}`;
    
    // v6: 화살표 버튼 상태
    cardPrevArrow.disabled = (index === 0);
    cardNextArrow.disabled = (index === activeStudyData.length - 1);
    
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
    
    if (filterHistoryCheckbox) {
        filterHistoryCheckbox.checked = false;
    }
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
        const { word, meaning, hint, phonetic } = wordData;
        
        const question = word; // v6: 퀴즈 질문을 단어로 변경
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
            word, meaning, hint: hint || '', phonetic: phonetic || null,
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

// v6: 요청 2 (랭킹 시작일)
function loadRankings() {
    const stored = localStorage.getItem(RANKING_KEY);
    rankings = stored ? JSON.parse(stored) : { startDate: new Date().getTime(), scores: [] }; 
}

function saveRankings() {
    rankings.scores.sort((a, b) => b.totalScore - a.totalScore); 
    rankings.scores = rankings.scores.slice(0, 3); 
    localStorage.setItem(RANKING_KEY, JSON.stringify(rankings));
}

// v6: 요청 1 (랭킹 초기화)
function resetRankings() {
    rankings = { startDate: new Date().getTime(), scores: [] };
    saveRankings();
    renderRankings();
}

function renderRankings() {
    rankingList.innerHTML = '';
    
    // v6: 요청 2 (랭킹 시작일)
    const startDate = new Date(rankings.startDate);
    const dateString = `${startDate.getFullYear()}. ${startDate.getMonth() + 1}. ${startDate.getDate()}.`;
    
    if (rankings.scores.length === 0) {
        noRankingList.classList.remove('hidden');
        noRankingList.innerHTML = `아직 랭킹이 없습니다. <span class"ranking-start-date">(기록 시작일: ${dateString})</span>`;
    } else {
        noRankingList.classList.add('hidden');
        const icons = [
            '<i class="fas fa-crown gold"></i>', 
            '<i class="fas fa-crown silver"></i>', 
            '<i class="fas fa-crown bronze"></i>'
        ];
        rankings.scores.forEach((entry, index) => {
            const div = document.createElement('div');
            div.className = 'ranking-item';
            div.innerHTML = `
                <span class="ranking-icon">${icons[index]}</span>
                <span class="ranking-name">${entry.name}</span>
                <span class="ranking-score">${entry.totalScore}점 (누적)</span>
            `;
            rankingList.appendChild(div);
        });
        // v6: 요청 2 (랭킹 시작일)
        const dateP = document.createElement('p');
        dateP.className = 'ranking-start-date text-right';
        dateP.textContent = `(기록 시작일: ${dateString})`;
        rankingList.appendChild(dateP);
    }
}

// v6: 요청 2 (랭킹 5점 환산)
function updateRankings(name, score) {
    if (!name || score === 0) return; 
    
    const points = score * 5; // 5점 환산
    
    const existingIndex = rankings.scores.findIndex(r => r.name === name);
    if (existingIndex > -1) {
        rankings.scores[existingIndex].totalScore += points;
    } else {
        rankings.scores.push({ name: name, totalScore: points });
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

// v6: '내 기록만 보기' 필터링 기능이 추가된 renderHistory
function renderHistory() {
    historyList.innerHTML = '';

    const showOnlyMyRecords = filterHistoryCheckbox.checked;
    const filteredHistory = showOnlyMyRecords 
        ? quizHistory.filter(item => item.playerName === currentPlayerName) 
        : quizHistory;
    
    if (filteredHistory.length === 0) {
        noHistoryList.classList.remove('hidden');
        if (showOnlyMyRecords && quizHistory.length > 0) { 
            noHistoryList.textContent = '내 학습 기록이 없습니다.';
        } else {
            noHistoryList.textContent = '학습 기록이 없습니다.';
        }
    } else {
        noHistoryList.classList.add('hidden');
        filteredHistory.forEach(item => { 
            const div = document.createElement('div');
            div.className = 'history-item';
            const score = item.total > 0 ? Math.round((item.correct / item.total) * 100) : 0;
            // 1. 이름 표시 로직
            div.innerHTML = `
                <span class="timestamp">${formatTimestamp(item.timestamp)}</span>
                <div class="details">
                    <strong>${item.quizName}</strong> (학습자: ${item.playerName || '기록 없음'})
                    (${item.total}문제 중 ${item.correct}개 정답, ${item.wrong}개 오답)
                    <span class="score-badge">${score}점</span>
                </div>
            `;
            historyList.appendChild(div);
        });
    }
}

// --- v5 AI 기능 (현재 제외됨) ---
// (이전 버전의 AI 함수는 캔버스 로딩 문제로 제외)

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
prevBtn.addEventListener('click', handlePrevButton); // v6: 이전 버튼
retryBtn.addEventListener('click', () => startQuiz(activeQuizData, quizTitleEl.textContent)); 
backToMainBtn.addEventListener('click', showMainScreen);

// v6: 홈, 종료 버튼
homeBtn.addEventListener('click', () => {
    showMainScreen(); // 확인 창 없이 메인으로
});
quitBtn.addEventListener('click', () => {
    showResults(true); // v6 - 요청 5: 퀴즈 중단
});


// v2: 플래시카드 이벤트 리스너
// v6 - 요청 3: 스와이프 및 클릭
flashcardScene.addEventListener('click', flipCard);
flashcardScene.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });
flashcardScene.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});
cardPrevArrow.addEventListener('click', (e) => {
    e.stopPropagation(); // 카드 뒤집기(click) 방지
    showPrevCard();
});
cardNextArrow.addEventListener('click', (e) => {
    e.stopPropagation(); // 카드 뒤집기(click) 방지
    showNextCard();
});

function handleSwipe() {
    const swipeThreshold = 50; // 50px 이상
    if (touchEndX < touchStartX - swipeThreshold) {
        cardNextArrow.click(); // v6: 다음 버튼 클릭으로 연동
    } else if (touchEndX > touchStartX + swipeThreshold) {
        cardPrevArrow.click(); // v6: 이전 버튼 클릭으로 연동
    }
}

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

addWordBtn.addEventListener('click', () => {
    const word = newWordInput.value.trim();
    const meaning = newMeaningInput.value.trim();
    const phonetic = newPhoneticInput.value.trim(); // v4

    if (word && meaning) {
        if (tempWords.find(w => w.word.toLowerCase() === word.toLowerCase())) {
            manualAddMessage.textContent = `'${word}'는(은) 이미 추가된 단어입니다.`;
            manualAddMessage.className = 'text-sm text-yellow-600 mt-2 h-4';
            return;
        }
        tempWords.push({ word, meaning, hint: '', phonetic: phonetic || null });
        renderTempWordList();
        newWordInput.value = '';
        newMeaningInput.value = '';
        newPhoneticInput.value = '';
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

playerNameInput.addEventListener('change', (e) => {
    savePlayerName(e.target.value);
});

// v6: 요청 1 (랭킹 초기화)
rankingResetBtn.addEventListener('click', () => {
    resetRankings();
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

// v6: '내 기록만 보기' 필터 체크박스 리스너 추가
if (filterHistoryCheckbox) {
    filterHistoryCheckbox.addEventListener('change', () => {
        renderHistory(); // 체크박스 상태가 바뀌면 기록 목록을 다시 그림
    });
}

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
