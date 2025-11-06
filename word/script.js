// --- 1. 기본 퀴즈 데이터 (총 40문제) ---
// v5: 발음 기호(phonetic) 추가 (v4 베이스에는 수동 입력)

// ✅ 기본단어1
const sampleQuizData1 = [
  { word: "rock", meaning: "바위", phonetic: "/rɑːk/", question: "rock", hint: "자연물", options: ["모자", "바위", "문", "인형"], correct: 1, rationale: "'rock'은(는) '바위'를 의미합니다." },
  { word: "cap", meaning: "모자", phonetic: "/kæp/", question: "cap", hint: "의류", options: ["모자", "침대", "노래하다", "바위"], correct: 0, rationale: "'cap'은(는) '모자'를 의미합니다." },
  { word: "death", meaning: "죽음", phonetic: "/dɛθ/", question: "death", hint: "생명의 반대", options: ["인형", "죽음", "성냥", "문"], correct: 1, rationale: "'death'은(는) '죽음'을 의미합니다." },
  { word: "bed", meaning: "침대", phonetic: "/bɛd/", question: "bed", hint: "자는 곳", options: ["모자", "침대", "문", "바위"], correct: 1, rationale: "'bed'은(는) '침대'를 의미합니다." },
  { word: "match", meaning: "성냥", phonetic: "/mætʃ/", question: "match", hint: "불을 붙이다", options: ["성냥", "문", "노래하다", "모자"], correct: 0, rationale: "'match'은(는) '성냥'을 의미합니다." },
  { word: "sing", meaning: "노래하다", phonetic: "/sɪŋ/", question: "sing", hint: "목소리", options: ["성냥", "노래하다", "바위", "인형"], correct: 1, rationale: "'sing'은(는) '노래하다'를 의미합니다." },
  { word: "doll", meaning: "인형", phonetic: "/dɒl/", question: "doll", hint: "장난감", options: ["침대", "인형", "모자", "성냥"], correct: 1, rationale: "'doll'은(는) '인형'을 의미합니다." },
  { word: "door", meaning: "문", phonetic: "/dɔːr/", question: "door", hint: "건물 출입", options: ["문", "바위", "모자", "노래하다"], correct: 0, rationale: "'door'은(는) '문'을 의미합니다." }
];

// ✅ 기본단어2
const sampleQuizData2 = [
  { word: "coin", meaning: "동전", phonetic: "/kɔɪn/", question: "coin", hint: "돈", options: ["동전", "상어", "시소", "화장지"], correct: 0, rationale: "'coin'은(는) '동전'을 의미합니다." },
  { word: "shark", meaning: "상어", phonetic: "/ʃɑːrk/", question: "shark", hint: "바다동물", options: ["상어", "동전", "주", "시소"], correct: 0, rationale: "'shark'은(는) '상어'를 의미합니다." },
  { word: "smell", meaning: "냄새 맡다", phonetic: "/smɛl/", question: "smell", hint: "코", options: ["상어", "냄새 맡다", "화장지", "주"], correct: 1, rationale: "'smell'은(는) '냄새 맡다'를 의미합니다." },
  { word: "seesaw", meaning: "시소", phonetic: "/ˈsiːˌsɔː/", question: "seesaw", hint: "놀이터", options: ["시소", "화장지", "상어", "동전"], correct: 0, rationale: "'seesaw'은(는) '시소'를 의미합니다." },
  { word: "tray", meaning: "쟁반", phonetic: "/treɪ/", question: "tray", hint: "식사", options: ["시소", "쟁반", "화장지", "동전"], correct: 1, rationale: "'tray'은(는) '쟁반'을 의미합니다." },
  { word: "snow", meaning: "눈", phonetic: "/snoʊ/", question: "snow", hint: "겨울", options: ["눈", "동전", "상어", "시소"], correct: 0, rationale: "'snow'은(는) '눈'을 의미합니다." },
  { word: "tissue", meaning: "화장지", phonetic: "/ˈtɪʃuː/", question: "tissue", hint: "코 닦는 것", options: ["시소", "상어", "화장지", "동전"], correct: 2, rationale: "'tissue'은(는) '화장지'를 의미합니다." },
  { word: "mouse", meaning: "쥐", phonetic: "/maʊs/", question: "mouse", hint: "작은 동물", options: ["쥐", "상어", "화장지", "눈"], correct: 0, rationale: "'mouse'은(는) '쥐'를 의미합니다." }
];

// ✅ 기본단어3
const sampleQuizData3 = [
  { word: "zebra", meaning: "얼룩말", phonetic: "/ˈziːbrə/", question: "zebra", hint: "줄무늬 동물", options: ["포도", "주머니", "얼룩말", "베개"], correct: 2, rationale: "'zebra'은(는) '얼룩말'을 의미합니다." },
  { word: "grape", meaning: "포도", phonetic: "/ɡreɪp/", question: "grape", hint: "과일", options: ["포도", "조용한", "숙녀", "베개"], correct: 0, rationale: "'grape'은(는) '포도'를 의미합니다." },
  { word: "pocket", meaning: "주머니", phonetic: "/ˈpɒkɪt/", question: "pocket", hint: "옷의 일부", options: ["주머니", "오징어", "숙녀", "조용한"], correct: 0, rationale: "'pocket'은(는) '주머니'를 의미합니다." },
  { word: "squid", meaning: "오징어", phonetic: "/skwɪd/", question: "squid", hint: "바다동물", options: ["오징어", "포도", "숙녀", "주머니"], correct: 0, rationale: "'squid'은(는) '오징어'를 의미합니다." },
  { word: "rabbit", meaning: "토끼", phonetic: "/ˈræbɪt/", question: "rabbit", hint: "귀가 긴 동물", options: ["베개", "토끼", "포도", "오징어"], correct: 1, rationale: "'rabbit'은(는) '토끼'를 의미합니다." },
  { word: "pillow", meaning: "베개", phonetic: "/ˈpɪloʊ/", question: "pillow", hint: "자는 도구", options: ["주머니", "포도", "베개", "토끼"], correct: 2, rationale: "'pillow'은(는) '베개'를 의미합니다." },
  { word: "quiet", meaning: "조용한", phonetic: "/ˈkwaɪət/", question: "quiet", hint: "소리가 없는 상태", options: ["조용한", "숙녀", "포도", "오징어"], correct: 0, rationale: "'quiet'은(는) '조용한'을 의미합니다." },
  { word: "lady", meaning: "숙녀", phonetic: "/ˈleɪdi/", question: "lady", hint: "여성", options: ["숙녀", "토끼", "포도", "베개"], correct: 0, rationale: "'lady'은(는) '숙녀'를 의미합니다." }
];

// ✅ 기본단어4
const sampleQuizData4 = [
  { word: "clothes", meaning: "옷", phonetic: "/kloʊðz/", question: "clothes", hint: "입는 것", options: ["옷", "자세", "배고픈", "산"], correct: 0, rationale: "'clothes'은(는) '옷'을 의미합니다." },
  { word: "gesture", meaning: "자세", phonetic: "/ˈdʒɛstʃər/", question: "gesture", hint: "몸짓", options: ["자세", "국가", "박물관", "소풍"], correct: 0, rationale: "'gesture'은(는) '자세'를 의미합니다." },
  { word: "giant", meaning: "큰", phonetic: "/ˈdʒaɪənt/", question: "giant", hint: "크기", options: ["옷", "큰", "국가", "산"], correct: 1, rationale: "'giant'은(는) '큰'을 의미합니다." },
  { word: "nation", meaning: "국가", phonetic: "/ˈneɪʃən/", question: "nation", hint: "나라", options: ["옷", "국가", "소풍", "산"], correct: 1, rationale: "'nation'은(는) '국가'를 의미합니다." },
  { word: "hungry", meaning: "배고픈", phonetic: "/ˈhʌŋɡri/", question: "hungry", hint: "식사 전 상태", options: ["옷", "배고픈", "자세", "국가"], correct: 1, rationale: "'hungry'은(는) '배고픈'을 의미합니다." },
  { word: "mountain", meaning: "산", phonetic: "/ˈmaʊntən/", question: "mountain", hint: "자연", options: ["박물관", "산", "소풍", "옷"], correct: 1, rationale: "'mountain'은(는) '산'을 의미합니다." },
  { word: "museum", meaning: "박물관", phonetic: "/mjuˈziːəm/", question: "museum", hint: "전시", options: ["박물관", "소풍", "옷", "국가"], correct: 0, rationale: "'museum'은(는) '박물관'을 의미합니다." },
  { word: "picnic", meaning: "소풍", phonetic: "/ˈpɪknɪk/", question: "picnic", hint: "야외 활동", options: ["소풍", "산", "박물관", "국가"], correct: 0, rationale: "'picnic'은(는) '소풍'을 의미합니다." }
];

// ✅ 기본단어5
const sampleQuizData5 = [
  { word: "restroom", meaning: "공중화장실", phonetic: "/ˈrɛstruːm/", question: "restroom", hint: "공공장소", options: ["공중화장실", "회사", "비행기", "국가"], correct: 0, rationale: "'restroom'은(는) '공중화장실'을 의미합니다." },
  { word: "danger", meaning: "위험", phonetic: "/ˈdeɪndʒər/", question: "danger", hint: "안전의 반대", options: ["위험", "아름다운", "대부분", "호기심"], correct: 0, rationale: "'danger'은(는) '위험'을 의미합니다." },
  { word: "beautiful", meaning: "아름다운", phonetic: "/ˈbjuːtɪfəl/", question: "beautiful", hint: "예쁜", options: ["대부분", "아름다운", "비행기", "회사"], correct: 1, rationale: "'beautiful'은(는) '아름다운'을 의미합니다." },
  { word: "almost", meaning: "대부분", phonetic: "/ˈɔːlmoʊst/", question: "almost", hint: "거의", options: ["아름다운", "대부분", "호기심", "회사"], correct: 1, rationale: "'almost'은(는) '대부분'을 의미합니다." },
  { word: "airplane", meaning: "비행기", phonetic: "/ˈɛrpleɪn/", question: "airplane", hint: "하늘", options: ["비행기", "회사", "위험", "공중화장실"], correct: 0, rationale: "'airplane'은(는) '비행기'를 의미합니다." },
  { word: "curious", meaning: "호기심이 많은", phonetic: "/ˈkjʊriəs/", question: "curious", hint: "알고 싶어함", options: ["호기심이 많은", "비행기", "회사", "대부분"], correct: 0, rationale: "'curious'은(는) '호기심이 많은'을 의미합니다." },
  { word: "company", meaning: "회사", phonetic: "/ˈkʌmpəni/", question: "company", hint: "직장", options: ["회사", "비행기", "위험", "공중화장실"], correct: 0, rationale: "'company'은(는) '회사'를 의미합니다." },
  { word: "history", meaning: "역사", phonetic: "/ˈhɪstəri/", question: "history", hint: "과거", options: ["역사", "회사", "호기심이 많은", "공중화장실"], correct: 0, rationale: "'history'은(는) '역사'를 의미합니다." }
];

// ✅ 통합: 기본 퀴즈 한 묶음으로 사용하기
const sampleQuizData = [
  ...sampleQuizData1,
  ...sampleQuizData2,
  ...sampleQuizData3,
  ...sampleQuizData4,
  ...sampleQuizData5
];

// --- 2. DOM 요소 ---
const startScreen = document.getElementById('start-screen');
const startQuizBtn = document.getElementById('start-quiz-btn');
const startRandomQuizBtn = document.getElementById('start-random-quiz-btn'); // v8

// 퀴즈 화면
const quizContainer = document.getElementById('quiz-container');
const quizTitleEl = document.getElementById('quiz-title');
const progressEl = document.getElementById('progress');
const quizContentEl = document.getElementById('quiz-content');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const rationaleEl = document.getElementById('rationale');

// v8: 퀴즈 화면 버튼
const homeBtn = document.getElementById('home-btn');
const quitBtn = document.getElementById('quit-btn');
const quizPrevArrow = document.getElementById('quiz-prev-arrow'); // v8
const quizNextArrow = document.getElementById('quiz-next-arrow'); // v8

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

// v7: 편집 모달 DOM 요소
const editModalBackdrop = document.getElementById('edit-modal-backdrop');
const editModal = document.getElementById('edit-modal');
const editModalCloseBtn = document.getElementById('edit-modal-close-btn');
const editModalTitle = document.getElementById('edit-modal-title');
const editQuizNameInput = document.getElementById('edit-quiz-name');
const editWordListDiv = document.getElementById('edit-word-list');
const editWordCountSpan = document.getElementById('edit-word-count');
const editNewWordInput = document.getElementById('edit-new-word');
const editNewMeaningInput = document.getElementById('edit-new-meaning');
const editNewPhoneticInput = document.getElementById('edit-new-phonetic');
const editAddWordBtn = document.getElementById('edit-add-word-btn');
const editManualAddMessage = document.getElementById('edit-manual-add-message');
const editModalSaveBtn = document.getElementById('edit-modal-save-btn');
const editModalCancelBtn = document.getElementById('edit-modal-cancel-btn');

// v8: AI 단어 추가 DOM 요소
const ocrImageInput = document.getElementById('ocr-image-input');
const ocrExtractBtn = document.getElementById('ocr-extract-btn');
const ocrMessage = document.getElementById('ocr-message');
const newWordAutoInput = document.getElementById('new-word-auto');
const addWordAutoBtn = document.getElementById('add-word-auto-btn');
const autoAddLoader = document.getElementById('auto-add-loader');
const autoAddMessage = document.getElementById('auto-add-message');


// --- 3. 퀴즈/학습 상태 변수 ---
let activeQuizData = []; 
let currentQuestionIndex = 0;
let score = 0;
let wrongAnswers = []; 

let activeStudyData = []; 
let currentCardIndex = 0;
let autoFlipTimer; 
let touchStartX = 0;
let touchEndX = 0;

// v3: 단어장 저장 변수
let savedWordLists = [];
const STORAGE_KEY = 'englishQuizLists_v8'; // v8
let tempWords = []; 

// v4: 랭킹, 기록, 오답노트 변수
let currentPlayerName = '';
const PLAYER_KEY = 'englishQuizPlayer_v8';
let rankings = {}; 
const RANKING_KEY = 'englishQuizRankings_v8';
let wrongAnswerBank = []; 
const WRONG_ANSWERS_KEY = 'englishQuizWrongAnswers_v8';
let quizHistory = []; 
const HISTORY_KEY = 'englishQuizHistory_v8';

// v7: 편집 모달 변수
let editingQuizIndex = -1;
let editingTempWords = [];

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
    
    // v8: 화살표 버튼 상태 관리
    quizPrevArrow.disabled = (currentQuestionIndex === 0);
    quizNextArrow.disabled = (currentQuestionIndex === activeQuizData.length - 1);
    
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.textContent = option;
        button.dataset.index = index;
        button.addEventListener('click', selectAnswer);
        optionsEl.appendChild(button);
        
        if (currentQuestion.answered) {
            if (index === currentQuestion.correct) {
                button.classList.add('correct');
            } else if (index === currentQuestion.selected && index !== currentQuestion.correct) {
                button.classList.add('wrong');
            }
            button.disabled = true;
        }
    });

    if (currentQuestion.answered) {
        if (currentQuestion.rationale) {
            rationaleEl.textContent = currentQuestion.rationale;
            rationaleEl.style.display = 'block';
        }
        // v8: 이미 푼 문제는 화살표만 활성화
        quizPrevArrow.disabled = (currentQuestionIndex === 0);
        quizNextArrow.disabled = false;
    } else {
         // v8: 안 푼 문제는 화살표 비활성화
        quizPrevArrow.disabled = true;
        quizNextArrow.disabled = true;
    }
}

function resetState() {
    optionsEl.innerHTML = '';
    rationaleEl.style.display = 'none';
    rationaleEl.textContent = '';
    // v8: 화살표 버튼 기본 비활성화
    quizPrevArrow.disabled = true;
    quizNextArrow.disabled = true;
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
        removeWrongAnswer(currentQuestion); 
    } else {
        selectedBtn.classList.add('wrong');
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
    
    // v8: 화살표 버튼 활성화
    quizPrevArrow.disabled = (currentQuestionIndex === 0);
    quizNextArrow.disabled = false; // 다음 문제로 가거나, 마지막이면 결과 보기
}

function showResults(isQuit = false) { 
    quizContentEl.style.display = 'none';
    resultEl.style.display = 'block';
    
    let totalAnswered, correctCount, wrongCount;
    let answeredQuestions = activeQuizData.filter(q => q.answered);
    
    if (isQuit) { 
        totalAnswered = answeredQuestions.length;
        correctCount = answeredQuestions.filter(q => q.selected === q.correct).length;
        wrongCount = totalAnswered - correctCount;
        wrongAnswers = answeredQuestions.filter(q => q.selected !== q.correct);
        
        scoreDisplayEl.textContent = `푼 문제 ${totalAnswered}개 중 ${correctCount}개를 맞추셨습니다!`;
    } else { 
        totalAnswered = activeQuizData.length;
        correctCount = activeQuizData.filter(q => q.selected === q.correct).length;
        wrongCount = totalAnswered - correctCount;
        wrongAnswers = activeQuizData.filter(q => q.answered && q.selected !== q.correct);

        scoreDisplayEl.textContent = `총 ${totalAnswered}문제 중 ${correctCount}개를 맞추셨습니다!`;
    }

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
        updateRankings(currentPlayerName, correctCount);
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
        showResults(false);
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
    renderHistory();
    
    if (filterHistoryCheckbox) {
        filterHistoryCheckbox.checked = false;
    }
    renderHistory();
    
    startLearnBtn.disabled = true;
    startQuizBtn.disabled = true;
    startRandomQuizBtn.disabled = true; // v8
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

function formatCreationDate(timestamp) {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return `생성일: ${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}.`;
}

function renderWordList() {
    quizList.innerHTML = '';
    
    const sampleQuizItem = document.createElement('div');
    sampleQuizItem.className = 'flex items-center p-3 bg-white border rounded-lg';
    sampleQuizItem.innerHTML = `
        <input type="checkbox" class="quiz-select-cb" id="quiz-cb-sample" data-index="-1">        
        <label for="quiz-cb-sample" class="quiz-item-label">
            <span>기본 퀴즈 (${sampleQuizData.length}문제)</span>
        </label>
        
        <div class="quiz-item-buttons">
            <button class="btn btn-xs btn-secondary" disabled title="기본 단어장은 편집할 수 없습니다.">
                <i class="fas fa-pencil-alt"></i>
            </button>
            <button class="btn btn-xs btn-danger" disabled title="기본 단어장은 삭제할 수 없습니다.">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    `;
    quizList.appendChild(sampleQuizItem);

    if (savedWordLists.length === 0) {
        noQuizList.classList.remove('hidden');
    } else {
        noQuizList.classList.add('hidden');
        savedWordLists.forEach((quiz, index) => {
            const listItem = document.createElement('div');
            listItem.className = 'flex items-center p-3 bg-white border rounded-lg';
            const creationDate = formatCreationDate(quiz.creationDate); 

            listItem.innerHTML = `
                <input type="checkbox" class="quiz-select-cb" id="quiz-cb-${index}" data-index="${index}">
                <label for="quiz-cb-${index}" class="quiz-item-label">
                    <span>${quiz.name} (${quiz.questions.length}문제)</span>
                    ${creationDate ? `<div class="quiz-item-date">${creationDate}</div>` : ''}
                </label>
                <div class="quiz-item-buttons">
                    <button class="btn btn-xs btn-secondary edit-quiz-btn" data-index="${index}" title="단어장 편집">
                        <i class="fas fa-pencil-alt"></i>
                    </button>
                    <button class="btn btn-xs btn-danger delete-quiz-btn" data-index="${index}" title="단어장 삭제">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            `;
            quizList.appendChild(listItem);
        });
    }
}

function renderTempWordList(words = tempWords, listElement = tempWordListDiv, countElement = tempWordCountSpan) {
    listElement.innerHTML = '';
    if (words.length === 0) {
        listElement.innerHTML = '<p class="text-gray-400">단어를 추가해주세요...</p>';
    }
    words.forEach((w, index) => {
        const div = document.createElement('div');
        div.className = "flex justify-between items-center edit-word-item"; 
        div.innerHTML = `
            <span><strong>${w.word}</strong>: ${w.meaning} ${w.phonetic ? `(${w.phonetic})` : ''}</span>
            <button class="delete-temp-word-btn text-red-500 hover:text-red-700" data-index="${index}">
                <i class="fas fa-times-circle"></i>
            </button>
        `;
        listElement.appendChild(div);
    });
    countElement.textContent = words.length;
}

function generateQuizFromWords(words) {
    const questions = [];
    const allMeanings = words.map(w => w.meaning);

    for (const wordData of words) {
        const { word, meaning, hint, phonetic } = wordData;
        
        const question = word; 
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

function loadRankings() {
    const stored = localStorage.getItem(RANKING_KEY);
    rankings = stored ? JSON.parse(stored) : { startDate: new Date().getTime(), scores: [] }; 
}

function saveRankings() {
    rankings.scores.sort((a, b) => b.totalScore - a.totalScore); 
    rankings.scores = rankings.scores.slice(0, 3); 
    localStorage.setItem(RANKING_KEY, JSON.stringify(rankings));
}

function resetRankings() {
    rankings = { startDate: new Date().getTime(), scores: [] };
    saveRankings();
    renderRankings();
}

function renderRankings() {
    rankingList.innerHTML = '';
    
    const startDate = new Date(rankings.startDate);
    const dateString = `${startDate.getFullYear()}. ${startDate.getMonth() + 1}. ${startDate.getDate()}.`;
    
    if (rankings.scores.length === 0) {
        noRankingList.classList.remove('hidden');
        noRankingList.innerHTML = `아직 랭킹이 없습니다. <span class="ranking-start-date">(기록 시작일: ${dateString})</span>`;
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
        const dateP = document.createElement('p');
        dateP.className = 'ranking-start-date text-right';
        dateP.textContent = `(기록 시작일: ${dateString})`;
        rankingList.appendChild(dateP);
    }
}

function updateRankings(name, score) {
    if (!name || score === 0) return; 
    
    const points = score * 5; 
    
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

// --- v7: 단어장 편집 모달 함수 ---
function openEditModal(index) {
    editingQuizIndex = index;
    const quiz = savedWordLists[index];
    
    editingTempWords = quiz.questions.map(q => ({
        word: q.word,
        meaning: q.meaning,
        phonetic: q.phonetic || null
    }));
    
    editModalTitle.textContent = `"${quiz.name}" 단어장 편집`;
    editQuizNameInput.value = quiz.name;
    
    renderTempWordList(editingTempWords, editWordListDiv, editWordCountSpan);
    
    editModal.classList.remove('hidden');
    editModalBackdrop.classList.remove('hidden');
}

function closeEditModal() {
    editingQuizIndex = -1;
    editingTempWords = [];
    editManualAddMessage.textContent = '';
    editNewWordInput.value = '';
    editNewMeaningInput.value = '';
    editNewPhoneticInput.value = '';
    
    editModal.classList.add('hidden');
    editModalBackdrop.classList.add('hidden');
}

function saveEditedQuiz() {
    const newName = editQuizNameInput.value.trim();
    if (!newName) {
        editManualAddMessage.textContent = '단어장 이름을 입력하세요.';
        editManualAddMessage.className = 'text-sm text-red-500 mt-2 h-4';
        return;
    }
    if (editingTempWords.length < 4) {
        editManualAddMessage.textContent = '퀴즈 생성을 위해 최소 4개의 단어가 필요합니다.';
        editManualAddMessage.className = 'text-sm text-red-500 mt-2 h-4';
        return;
    }

    const originalQuiz = savedWordLists[editingQuizIndex];
    const newQuestions = generateQuizFromWords(editingTempWords);
    
    savedWordLists[editingQuizIndex] = { 
        name: newName, 
        questions: newQuestions,
        creationDate: originalQuiz.creationDate 
    };
    
    saveWordLists();
    renderWordList();
    closeEditModal();
}

// --- v8: AI API 호출 함수 ---

// 헬퍼: 이미지를 Base64로 변환
function imageToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(',')[1]); // 'data:...' 부분 제거
        reader.onerror = error => reject(error);
    });
}

// API 호출 (공통 재시도 로직)
async function fetchWithRetry(apiUrl, payload, retries = 3, delay = 1000) {
    const apiKey = ""; // 캔버스 환경에서 자동 제공
    
    while (retries > 0) {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000); // 5초 타임아웃

            const response = await fetch(`${apiUrl}?key=${apiKey}`, {
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
                    return JSON.parse(jsonText); 
                } else {
                    throw new Error("Invalid API response structure.");
                }
            } else if (response.status === 429 || response.status >= 500) {
                console.warn(`API call failed with status ${response.status}. Retrying...`);
                await new Promise(res => setTimeout(res, delay));
                delay *= 2; 
                retries--;
            } else {
                throw new Error(`API call failed with status: ${response.status}`);
            }
        } catch (error) {
            console.error("API error:", error);
            retries--;
            if (retries <= 0) {
                return null;
            }
            await new Promise(res => setTimeout(res, delay));
            delay *= 2;
        }
    }
    return null; 
}

// v8 - 요청 2: OCR API
async function callGeminiApi_OCR(base64ImageData) {
    const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent";
    const payload = {
        contents: [{
            role: "user",
            parts: [
                { text: "Analyze this image. Extract the most prominent English word and its Korean meaning. Provide *only* JSON like {\"word\": \"EnglishWord\", \"meaning\": \"KoreanMeaning\"}. If unclear, return {\"word\": \"\", \"meaning\": \"\"}." },
                { inlineData: { mimeType: "image/jpeg", data: base64ImageData } }
            ]
        }],
        generationConfig: {
            responseMimeType: "application/json",
            responseSchema: {
                type: "OBJECT",
                properties: {
                    "word": { "type": "STRING" },
                    "meaning": { "type": "STRING" }
                }
            }
        }
    };
    return fetchWithRetry(apiUrl, payload);
}

// v8 - 요청 3: 자동 번역/발음 API
async function callGeminiApi_Translate(word) {
    const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent";
    const payload = {
        contents: [{
            role: "user",
            parts: [ { text: `Translate the English word "${word}" to Korean and find its IPA phonetic. Provide *only* JSON like {\"meaning\": \"KoreanMeaning\", \"phonetic\": \"/IPA/\"}. If invalid, return {\"meaning\": \"\", \"phonetic\": \"\"}.` }]
        }],
        generationConfig: {
            responseMimeType: "application/json",
            responseSchema: {
                type: "OBJECT",
                properties: {
                    "meaning": { "type": "STRING" },
                    "phonetic": { "type": "STRING" }
                }
            }
        }
    };
    return fetchWithRetry(apiUrl, payload);
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

// v8 - 요청 4: 랜덤 퀴즈
startRandomQuizBtn.addEventListener('click', () => {
    const { questions, title } = getCombinedQuestions();
    if (questions.length < 20) {
        selectionMessage.textContent = '랜덤 퀴즈를 위해 20개 이상의 단어를 선택하세요.';
        selectionMessage.className = 'text-sm mt-2 h-4 text-center text-red-500';
        return;
    }
    
    shuffleArray(questions);
    const randomQuizData = questions.slice(0, 20);
    startQuiz(randomQuizData, `랜덤 퀴즈 (20문제)`);
});

// 퀴즈 화면
// v8 - 요청 1: 퀴즈 스와이프/화살표
quizPrevArrow.addEventListener('click', handlePrevButton);
quizNextArrow.addEventListener('click', handleNextButton);
quizContentEl.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });
quizContentEl.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleQuizSwipe();
});

function handleQuizSwipe() {
    const swipeThreshold = 50; 
    // 스와이프는 '푼 문제'에 한해서만 동작
    const currentQuestion = activeQuizData[currentQuestionIndex];
    if (!currentQuestion.answered) return; 

    if (touchEndX < touchStartX - swipeThreshold) {
        if (!quizNextArrow.disabled) quizNextArrow.click(); // 다음
    } else if (touchEndX > touchStartX + swipeThreshold) {
        if (!quizPrevArrow.disabled) quizPrevArrow.click(); // 이전
    }
}

retryBtn.addEventListener('click', () => {
    // v7 수정
    const originalQuestions = [];
    activeQuizData.forEach(aq => {
        let found = false;
        if (sampleQuizData.some(sq => sq.word === aq.word)) {
            originalQuestions.push(sampleQuizData.find(sq => sq.word === aq.word));
            found = true;
        } else {
            for(const list of savedWordLists) {
                const match = list.questions.find(q => q.word === aq.word);
                if (match) {
                    originalQuestions.push(match);
                    found = true;
                    break;
                }
            }
        }
    });
    startQuiz(originalQuestions.length ? originalQuestions : activeQuizData, quizTitleEl.textContent);
}); 
backToMainBtn.addEventListener('click', showMainScreen);

homeBtn.addEventListener('click', () => {
    showMainScreen(); 
});
quitBtn.addEventListener('click', () => {
    showResults(true); 
});


// v2: 플래시카드 이벤트 리스너
flashcardScene.addEventListener('click', flipCard);
flashcardScene.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });
flashcardScene.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleFlashcardSwipe();
});
cardPrevArrow.addEventListener('click', (e) => {
    e.stopPropagation(); 
    showPrevCard();
});
cardNextArrow.addEventListener('click', (e) => {
    e.stopPropagation(); 
    showNextCard();
});

function handleFlashcardSwipe() {
    const swipeThreshold = 50; 
    if (touchEndX < touchStartX - swipeThreshold) {
        if (!cardNextArrow.disabled) cardNextArrow.click(); 
    } else if (touchEndX > touchStartX + swipeThreshold) {
        if (!cardPrevArrow.disabled) cardPrevArrow.click(); 
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
            startRandomQuizBtn.disabled = false; // v8
            selectionMessage.textContent = `${checkedBoxes.length}개 단어장 선택됨`;
        } else {
            startLearnBtn.disabled = true;
            startQuizBtn.disabled = true;
            startRandomQuizBtn.disabled = true; // v8
            selectionMessage.textContent = '';
        }
    }
});

quizList.addEventListener('click', (e) => {
    const target = e.target.closest('button'); 
    if (!target) return;

    const index = parseInt(target.dataset.index, 10);
    
    if (target.classList.contains('delete-quiz-btn')) {
        savedWordLists.splice(index, 1);
        saveWordLists();
        renderWordList();
        startLearnBtn.disabled = true; 
        startQuizBtn.disabled = true;
        startRandomQuizBtn.disabled = true; // v8
        selectionMessage.textContent = '';
    }
    
    if (target.classList.contains('edit-quiz-btn')) {
        openEditModal(index);
    }
});

// 아코디언 메뉴 (접기/펼치기)
accordionHeaderNewQuiz.addEventListener('click', () => {
    accordionHeaderNewQuiz.classList.toggle('open');
    accordionContentNewQuiz.classList.toggle('open');
});

// v8 - 요청 3: '영어 단어만 입력' 리스너
addWordAutoBtn.addEventListener('click', async () => {
    const word = newWordAutoInput.value.trim();
    if (!word) {
        autoAddMessage.textContent = '영어 단어를 입력하세요.';
        autoAddMessage.className = 'ai-message text-red-500';
        return;
    }

    if (tempWords.find(w => w.word.toLowerCase() === word.toLowerCase())) {
        autoAddMessage.textContent = `'${word}'는(은) 이미 추가된 단어입니다.`;
        autoAddMessage.className = 'ai-message text-yellow-600';
        return;
    }
    
    autoAddLoader.style.display = 'block';
    addWordAutoBtn.disabled = true;
    autoAddMessage.textContent = `'${word}'의 뜻과 발음을 검색 중...`;
    autoAddMessage.className = 'ai-message text-blue-600';

    try {
        const result = await callGeminiApi_Translate(word);
        if (result && result.meaning && result.phonetic) {
            tempWords.push({ word, meaning: result.meaning, hint: '', phonetic: result.phonetic });
            renderTempWordList(tempWords, tempWordListDiv, tempWordCountSpan);
            newWordAutoInput.value = '';
            autoAddMessage.textContent = `'${word}' 단어를 추가했습니다.`;
            autoAddMessage.className = 'ai-message text-green-600';
        } else {
            autoAddMessage.textContent = `'${word}'의 정보를 찾지 못했습니다. (수동 추가 권장)`;
            autoAddMessage.className = 'ai-message text-yellow-600';
        }
    } catch (error) {
        autoAddMessage.textContent = '자동 추가 중 오류가 발생했습니다.';
        autoAddMessage.className = 'ai-message text-red-500';
    } finally {
        autoAddLoader.style.display = 'none';
        addWordAutoBtn.disabled = false;
    }
});


tempWordListDiv.addEventListener('click', (e) => {
    const deleteBtn = e.target.closest('.delete-temp-word-btn');
    if (deleteBtn) {
        const indexToDelete = parseInt(deleteBtn.dataset.index, 10); 
        tempWords.splice(indexToDelete, 1);
        renderTempWordList(tempWords, tempWordListDiv, tempWordCountSpan);
        manualAddMessage.textContent = `단어가 삭제되었습니다.`;
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
    
    const newQuizSet = { 
        name, 
        questions: newQuestions, 
        creationDate: new Date().getTime() 
    };
    
    const existingIndex = savedWordLists.findIndex(q => q.name === name);
    if (existingIndex > -1) {
         newQuizSet.creationDate = savedWordLists[existingIndex].creationDate;
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
    renderTempWordList(tempWords, tempWordListDiv, tempWordCountSpan);
});

// --- v4: 랭킹, 기록, 오답노트 리스너 ---

playerNameInput.addEventListener('change', (e) => {
    savePlayerName(e.target.value);
});

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

if (filterHistoryCheckbox) {
    filterHistoryCheckbox.addEventListener('change', () => {
        renderHistory(); 
    });
}

// --- v7: 단어장 편집 모달 리스너 ---
editModalCloseBtn.addEventListener('click', closeEditModal);
editModalCancelBtn.addEventListener('click', closeEditModal);
editModalSaveBtn.addEventListener('click', saveEditedQuiz);

editAddWordBtn.addEventListener('click', () => {
    const word = editNewWordInput.value.trim();
    const meaning = editNewMeaningInput.value.trim();
    const phonetic = editNewPhoneticInput.value.trim();

    if (word && meaning) {
        if (editingTempWords.find(w => w.word.toLowerCase() === word.toLowerCase())) {
            editManualAddMessage.textContent = `'${word}'는(은) 이미 추가된 단어입니다.`;
            editManualAddMessage.className = 'text-sm text-yellow-600 mt-2 h-4';
            return;
        }
        editingTempWords.push({ word, meaning, hint: '', phonetic: phonetic || null });
        renderTempWordList(editingTempWords, editWordListDiv, editWordCountSpan); 
        editNewWordInput.value = '';
        editNewMeaningInput.value = '';
        editNewPhoneticInput.value = '';
        editNewWordInput.focus();
        editManualAddMessage.textContent = `'${word}' 단어가 추가되었습니다.`;
        editManualAddMessage.className = 'text-sm text-green-600 mt-2 h-4';
    } else {
        editManualAddMessage.textContent = '단어와 의미를 모두 입력해주세요.';
        editManualAddMessage.className = 'text-sm text-red-500 mt-2 h-4';
    }
});

editWordListDiv.addEventListener('click', (e) => {
    const deleteBtn = e.target.closest('.delete-temp-word-btn');
    if (deleteBtn) {
        const indexToDelete = parseInt(deleteBtn.dataset.index, 10);
        editingTempWords.splice(indexToDelete, 1);
        renderTempWordList(editingTempWords, editWordListDiv, editWordCountSpan);
        editManualAddMessage.textContent = `단어가 삭제되었습니다.`;
        editManualAddMessage.className = 'text-sm text-yellow-600 mt-2 h-4';
    }
});

// --- v8: AI 단어 추가 리스너 ---

// v8 - 요청 2: OCR
ocrExtractBtn.addEventListener('click', async () => {
    const file = ocrImageInput.files[0];
    if (!file) {
        ocrMessage.textContent = '이미지 파일을 선택하세요.';
        ocrMessage.className = 'ai-message text-red-500';
        return;
    }

    ocrMessage.textContent = 'AI가 이미지를 분석 중입니다...';
    ocrMessage.className = 'ai-message text-blue-600';
    ocrExtractBtn.disabled = true;

    try {
        const base64Data = await imageToBase64(file);
        const result = await callGeminiApi_OCR(base64Data);

        if (result && result.word) {
            ocrMessage.textContent = '텍스트 추출 성공! 뜻과 발음을 검색합니다...';
            ocrMessage.className = 'ai-message text-blue-600';
            
            // v8 - 요청 3: OCR -> 자동 번역 연동
            newWordAutoInput.value = result.word; 
            addWordAutoBtn.click(); // 자동 추가 버튼 클릭 트리거
            
            ocrMessage.textContent = `추출된 단어 '${result.word}'를 자동 추가했습니다.`;
            ocrMessage.className = 'ai-message text-green-600';
            
        } else {
            ocrMessage.textContent = '이미지에서 단어를 찾지 못했습니다.';
            ocrMessage.className = 'ai-message text-yellow-600';
        }
    } catch (error) {
        console.error("OCR Error:", error);
        ocrMessage.textContent = '텍스트 추출 중 오류가 발생했습니다.';
        ocrMessage.className = 'ai-message text-red-500';
    } finally {
        ocrExtractBtn.disabled = false;
        ocrImageInput.value = ''; // 파일 입력 초기화
    }
});


// --- 6. 초기화 ---
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
    renderTempWordList(tempWords, tempWordListDiv, tempWordCountSpan); 
});
