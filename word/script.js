/************************************************************
 * 통합본 script.js  (기본 단어장 표시 + 새 단어장 직접 만들기修)
 * - 기본 세트는 BUILTIN_QUIZ_SETS로 명시 등록 (전역 탐색 X)
 * - 수동 추가/AI 추가/편집/삭제/퀴즈/학습/랜덤/오답/랭킹/기록 모두 포함
 ************************************************************/
// ★ 여기만 바꿈: 전역에 고정해서 어디서든 접근되게
window.BUILTIN_QUIZ_SETS = [
  { key: -1, name: '기본단어1', data: sampleQuizData1 },
  { key: -2, name: '기본단어2', data: sampleQuizData2 },
  { key: -3, name: '기본단어3', data: sampleQuizData3 },
  { key: -4, name: '기본단어4', data: sampleQuizData4 },
  { key: -5, name: '기본단어5', data: sampleQuizData5 },
];
// 추가 시: window.BUILTIN_QUIZ_SETS.push({ key:-6, name:'기본단어6', data: sampleQuizData6 });

/* ===================== 1) 기본 세트 데이터 ===================== */

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
  { word: "company", meaning: "회사", phonetic: "/ˈkʌmpəni/", question: "company", hint: "직장", options: ["회사", "비행기", "위험", "공중화장실"], correct: 0, rationale: "'company'은(는) '회사를 의미합니다." },
  { word: "history", meaning: "역사", phonetic: "/ˈhɪstəri/", question: "history", hint: "과거", options: ["역사", "회사", "호기심이 많은", "공중화장실"], correct: 0, rationale: "'history'은(는) '역사'를 의미합니다." }
];

/* ★★★ 중요: 기본 세트 명시 등록(여기만 유지/추가하면 됨) ★★★ */
const BUILTIN_QUIZ_SETS = [
  { key: -1, name: '기본단어1', data: sampleQuizData1 },
  { key: -2, name: '기본단어2', data: sampleQuizData2 },
  { key: -3, name: '기본단어3', data: sampleQuizData3 },
  { key: -4, name: '기본단어4', data: sampleQuizData4 },
  { key: -5, name: '기본단어5', data: sampleQuizData5 },
];
// 예: const sampleQuizData6 = [...]; BUILTIN_QUIZ_SETS.push({ key: -6, name: '기본단어6', data: sampleQuizData6 });

/* ===================== 2) DOM 요소 ===================== */
const startScreen = document.getElementById('start-screen');
const startQuizBtn = document.getElementById('start-quiz-btn');
const startRandomQuizBtn = document.getElementById('start-random-quiz-btn');

const quizContainer = document.getElementById('quiz-container');
const quizTitleEl = document.getElementById('quiz-title');
const progressEl = document.getElementById('progress');
const quizContentEl = document.getElementById('quiz-content');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const rationaleEl = document.getElementById('rationale');

const homeBtn = document.getElementById('home-btn');
const quitBtn = document.getElementById('quit-btn');
const quizPrevArrow = document.getElementById('quiz-prev-arrow');
const quizNextArrow = document.getElementById('quiz-next-arrow');

const resultEl = document.getElementById('result');
const scoreDisplayEl = document.getElementById('score-display');
const wrongAnswersListDiv = document.getElementById('wrong-answers-list');
const retryBtn = document.getElementById('retry-btn');
const backToMainBtn = document.getElementById('back-to-main-btn');

const startLearnBtn = document.getElementById('start-learn-btn');
const flashcardContainer = document.getElementById('flashcard-container');
const flashcardScene = document.getElementById('flashcard-scene');
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
const cardPrevArrow = document.getElementById('card-prev-arrow');
const cardNextArrow = document.getElementById('card-next-arrow');

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

const ocrImageInput = document.getElementById('ocr-image-input');
const ocrExtractBtn = document.getElementById('ocr-extract-btn');
const ocrMessage = document.getElementById('ocr-message');
const newWordAutoInput = document.getElementById('new-word-auto');
const addWordAutoBtn = document.getElementById('add-word-auto-btn');
const autoAddLoader = document.getElementById('auto-add-loader');
const autoAddMessage = document.getElementById('auto-add-message');

// 수동 추가 폼 (HTML에 id가 있어야 합니다)
const newWordManualInput = document.getElementById('new-word-manual');
const newMeaningManualInput = document.getElementById('new-meaning-manual');
const newPhoneticManualInput = document.getElementById('new-phonetic-manual');
const addWordManualBtn = document.getElementById('add-word-manual-btn');

/* ===================== 3) 상태/스토리지 키 ===================== */
let activeQuizData = [];
let currentQuestionIndex = 0;
let wrongAnswers = [];

let activeStudyData = [];
let currentCardIndex = 0;
let autoFlipTimer;
let touchStartX = 0;
let touchEndX = 0;

let savedWordLists = [];
const STORAGE_KEY = 'englishQuizLists_v8';
let tempWords = [];

let currentPlayerName = '';
const PLAYER_KEY = 'englishQuizPlayer_v8';
let rankings = {};
const RANKING_KEY = 'englishQuizRankings_v8';
let wrongAnswerBank = [];
const WRONG_ANSWERS_KEY = 'englishQuizWrongAnswers_v8';
let quizHistory = [];
const HISTORY_KEY = 'englishQuizHistory_v8';

let editingQuizIndex = -1;
let editingTempWords = [];

/* ===================== 4) 기본세트 접근 ===================== */
function getBuiltinQuizSets() {
  // 전역(window)에 없거나 비어 있으면 즉석 복구(보호로직)
  if (!Array.isArray(window.BUILTIN_QUIZ_SETS) || window.BUILTIN_QUIZ_SETS.length === 0) {
    return [
      { key: -1, name: '기본단어1', data: sampleQuizData1 },
      { key: -2, name: '기본단어2', data: sampleQuizData2 },
      { key: -3, name: '기본단어3', data: sampleQuizData3 },
      { key: -4, name: '기본단어4', data: sampleQuizData4 },
      { key: -5, name: '기본단어5', data: sampleQuizData5 },
    ];
  }
  return window.BUILTIN_QUIZ_SETS;
}

function getAllBuiltinQuestions() { return BUILTIN_QUIZ_SETS.flatMap(s => s.data || []); }

/* ===================== 5) 퀴즈 로직 ===================== */
function shuffleArray(a){ for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } }
function startQuiz(quizData, title="단어 퀴즈"){
  if(quizData.length===0){ selectionMessage.textContent='퀴즈를 시작하려면 단어를 1개 이상 선택하세요.'; selectionMessage.className='text-sm mt-2 h-4 text-center text-red-500'; return; }
  activeQuizData = quizData.map(q=>({...q, answered:false, selected:-1}));
  shuffleArray(activeQuizData); currentQuestionIndex=0;
  quizTitleEl.textContent=title;
  startScreen.classList.add('hidden');
  flashcardContainer.style.display='none'; studyCompleteContainer.style.display='none';
  quizContainer.style.display='block'; quizContentEl.style.display='block';
  resultEl.style.display='none'; wrongAnswersListDiv.innerHTML='';
  loadQuestion();
}
function loadQuestion(){
  resetState();
  const cur=activeQuizData[currentQuestionIndex];
  progressEl.textContent=`문제 ${currentQuestionIndex+1} / ${activeQuizData.length}`;
  questionEl.textContent=cur.question;
  quizPrevArrow.disabled=(currentQuestionIndex===0);
  quizNextArrow.disabled=(currentQuestionIndex===activeQuizData.length-1);
  cur.options.forEach((opt,idx)=>{
    const btn=document.createElement('button');
    btn.classList.add('option-btn'); btn.textContent=opt; btn.dataset.index=idx;
    btn.addEventListener('click',selectAnswer); optionsEl.appendChild(btn);
    if(cur.answered){ if(idx===cur.correct) btn.classList.add('correct'); else if(idx===cur.selected && idx!==cur.correct) btn.classList.add('wrong'); btn.disabled=true; }
  });
  if(cur.answered){ if(cur.rationale){ rationaleEl.textContent=cur.rationale; rationaleEl.style.display='block'; } quizPrevArrow.disabled=(currentQuestionIndex===0); quizNextArrow.disabled=false; }
  else { quizPrevArrow.disabled=true; quizNextArrow.disabled=true; }
}
function resetState(){ optionsEl.innerHTML=''; rationaleEl.style.display='none'; rationaleEl.textContent=''; quizPrevArrow.disabled=true; quizNextArrow.disabled=true; }
function selectAnswer(e){
  const sel=parseInt(e.target.dataset.index,10);
  const cur=activeQuizData[currentQuestionIndex]; if(cur.answered) return; cur.answered=true; cur.selected=sel;
  if(sel===cur.correct){ e.target.classList.add('correct'); removeWrongAnswer(cur); } else { e.target.classList.add('wrong'); addWrongAnswer(cur); }
  Array.from(optionsEl.children).forEach(b=>{ if(parseInt(b.dataset.index,10)===cur.correct) b.classList.add('correct'); b.disabled=true; });
  if(cur.rationale){ rationaleEl.textContent=cur.rationale; rationaleEl.style.display='block'; }
  quizPrevArrow.disabled=(currentQuestionIndex===0); quizNextArrow.disabled=false;
}
function showResults(isQuit=false){
  quizContentEl.style.display='none'; resultEl.style.display='block';
  const answered=activeQuizData.filter(q=>q.answered);
  let totalAnswered, correctCount, wrongCount;
  if(isQuit){ totalAnswered=answered.length; correctCount=answered.filter(q=>q.selected===q.correct).length; wrongCount=totalAnswered-correctCount; wrongAnswers=answered.filter(q=>q.selected!==q.correct); scoreDisplayEl.textContent=`푼 문제 ${totalAnswered}개 중 ${correctCount}개를 맞추셨습니다!`; }
  else { totalAnswered=activeQuizData.length; correctCount=activeQuizData.filter(q=>q.selected===q.correct).length; wrongCount=totalAnswered-correctCount; wrongAnswers=activeQuizData.filter(q=>q.answered && q.selected!==q.correct); scoreDisplayEl.textContent=`총 ${totalAnswered}문제 중 ${correctCount}개를 맞추셨습니다!`; }
  if(totalAnswered>0){ addHistoryEntry({ timestamp:Date.now(), playerName:currentPlayerName, quizName:quizTitleEl.textContent, total:totalAnswered, correct:correctCount, wrong:wrongCount }); updateRankings(currentPlayerName, correctCount); }
  wrongAnswersListDiv.innerHTML='';
  if(wrongAnswers.length>0){ const h3=document.createElement('h3'); h3.textContent='틀린 문제 목록'; wrongAnswersListDiv.appendChild(h3); const ul=document.createElement('ul'); wrongAnswers.forEach(q=>{ const li=document.createElement('li'); li.innerHTML=`<strong>${q.word}</strong>: ${q.meaning}`; ul.appendChild(li); }); wrongAnswersListDiv.appendChild(ul); }
  else { const p=document.createElement('p'); p.textContent=(isQuit && totalAnswered===0)?'푼 문제가 없습니다.':'모든 문제를 맞추셨습니다! 🎉'; p.className='text-center text-green-600 font-bold mt-4'; wrongAnswersListDiv.appendChild(p); }
}
function handleNextButton(){ currentQuestionIndex++; if(currentQuestionIndex<activeQuizData.length) loadQuestion(); else showResults(false); }
function handlePrevButton(){ if(currentQuestionIndex>0){ currentQuestionIndex--; loadQuestion(); } }
function handleQuizSwipe(){ const thr=50, cur=activeQuizData[currentQuestionIndex]; if(!cur||!cur.answered) return; if(touchEndX<touchStartX-thr){ if(!quizNextArrow.disabled) quizNextArrow.click(); } else if(touchEndX>touchStartX+thr){ if(!quizPrevArrow.disabled) quizPrevArrow.click(); } }

/* ===================== 6) 플래시카드 ===================== */
function startStudy(studyData, title="단어 학습"){
  if(studyData.length===0){ selectionMessage.textContent='학습을 시작하려면 단어를 1개 이상 선택하세요.'; selectionMessage.className='text-sm mt-2 h-4 text-center text-red-500'; return; }
  activeStudyData = studyData.map(q=>({...q})); shuffleArray(activeStudyData); currentCardIndex=0;
  flashcardTitle.textContent=title; startScreen.classList.add('hidden'); flashcardContainer.style.display='block'; studyCompleteContainer.style.display='none'; loadCard(currentCardIndex);
}
function loadCard(i){
  if(autoFlipTimer) clearTimeout(autoFlipTimer);
  const c=activeStudyData[i];
  flashcardFront.innerHTML = `<div class="text-4xl md:text-5xl font-bold">${c.word}</div><div class="text-xl md:text-2xl text-gray-500 mt-3">${c.phonetic||'&nbsp;'}</div>`;
  flashcardBack.innerHTML = `<div class="text-3xl md:text-4xl font-bold">${c.meaning}</div><div class="text-lg text-gray-600 mt-3">${c.hint||''}</div>`;
  flashcard.classList.remove('is-flipped'); flashcardProgress.textContent=`카드 ${i+1} / ${activeStudyData.length}`;
  cardPrevArrow.disabled=(i===0); cardNextArrow.disabled=(i===activeStudyData.length-1);
  autoFlipTimer=setTimeout(()=>flipCard(),3000);
}
function flipCard(){ if(autoFlipTimer) clearTimeout(autoFlipTimer); flashcard.classList.toggle('is-flipped'); }
function showNextCard(){ if(currentCardIndex<activeStudyData.length-1){ currentCardIndex++; loadCard(currentCardIndex); } else { showStudySummary(); } }
function showPrevCard(){ if(currentCardIndex>0){ currentCardIndex--; loadCard(currentCardIndex); } }
function showStudySummary(){ flashcardContainer.style.display='none'; studyCompleteContainer.style.display='block'; studySummaryList.innerHTML=''; activeStudyData.forEach(c=>{ const li=document.createElement('li'); li.innerHTML=`<strong>${c.word}</strong>: ${c.meaning}`; studySummaryList.appendChild(li); }); }

/* ===================== 7) 메인/목록 ===================== */
function showMainScreen(){
  quizContainer.style.display='none'; resultEl.style.display='none'; flashcardContainer.style.display='none'; studyCompleteContainer.style.display='none'; startScreen.classList.remove('hidden');
  renderWordList(); renderRankings(); renderWrongQuizButton(); renderHistory();
  startLearnBtn.disabled = startQuizBtn.disabled = startRandomQuizBtn.disabled = true;
  selectionMessage.textContent='';
}
function loadWordLists(){ savedWordLists = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
function saveWordLists(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(savedWordLists)); }
function formatCreationDate(ts){ if(!ts) return ''; const d=new Date(ts); return `생성일: ${d.getFullYear()}. ${d.getMonth()+1}. ${d.getDate()}.`; }

function renderWordList() {
  // ...
  const builtinSets = getBuiltinQuizSets();

  // (중략) 기본세트 + 사용자세트 렌더링

  // ★ 이 조건이 꼭 있어야 해요
  const hasAnyList = (builtinSets.length > 0) || (savedWordLists.length > 0);
  if (hasAnyList) noQuizList.classList.add('hidden');
  else noQuizList.classList.remove('hidden');
}

  // 1) 기본 세트 렌더
  builtinSets.forEach((set, idx)=>{
    const item=document.createElement('div'); item.className='flex items-center p-3 bg-white border rounded-lg';
    item.innerHTML = `
      <input type="checkbox" class="quiz-select-cb" id="quiz-cb-builtin-${idx}" data-index="${set.key}">
      <label for="quiz-cb-builtin-${idx}" class="quiz-item-label">
        <span>${set.name} (${set.data.length}문제)</span>
      </label>
      <div class="quiz-item-buttons">
        <button class="btn btn-xs btn-secondary" disabled title="기본 단어장은 편집할 수 없습니다."><i class="fas fa-pencil-alt"></i></button>
        <button class="btn btn-xs btn-danger" disabled title="기본 단어장은 삭제할 수 없습니다."><i class="fas fa-trash-alt"></i></button>
      </div>`;
    quizList.appendChild(item);
  });

  // 2) 사용자 저장본 렌더
  if(savedWordLists.length>0){
    savedWordLists.forEach((quiz,index)=>{
      const it=document.createElement('div'); it.className='flex items-center p-3 bg-white border rounded-lg';
      const creationDate=formatCreationDate(quiz.creationDate);
      it.innerHTML = `
        <input type="checkbox" class="quiz-select-cb" id="quiz-cb-${index}" data-index="${index}">
        <label for="quiz-cb-${index}" class="quiz-item-label">
          <span>${quiz.name} (${quiz.questions.length}문제)</span>
          ${creationDate ? `<div class="quiz-item-date">${creationDate}</div>` : ''}
        </label>
        <div class="quiz-item-buttons">
          <button class="btn btn-xs btn-secondary edit-quiz-btn" data-index="${index}" title="단어장 편집"><i class="fas fa-pencil-alt"></i></button>
          <button class="btn btn-xs btn-danger delete-quiz-btn" data-index="${index}" title="단어장 삭제"><i class="fas fa-trash-alt"></i></button>
        </div>`;
      quizList.appendChild(it);
    });
  }

  // 3) 안내 문구 토글
  const hasAnyList = (builtinSets.length>0) || (savedWordLists.length>0);
  if(hasAnyList) noQuizList.classList.add('hidden'); else noQuizList.classList.remove('hidden');
}

function renderTempWordList(words=tempWords, listEl=tempWordListDiv, countEl=tempWordCountSpan){
  listEl.innerHTML='';
  if(words.length===0) listEl.innerHTML='<p class="text-gray-400">단어를 추가해주세요...</p>';
  words.forEach((w,i)=>{
    const div=document.createElement('div'); div.className='flex justify-between items-center edit-word-item';
    div.innerHTML=`<span><strong>${w.word}</strong>: ${w.meaning} ${w.phonetic?`(${w.phonetic})`:''}</span>
      <button class="delete-temp-word-btn text-red-500 hover:text-red-700" data-index="${i}">
        <i class="fas fa-times-circle"></i>
      </button>`;
    listEl.appendChild(div);
  });
  countEl.textContent=words.length;
}

function generateQuizFromWords(words){
  const questions=[]; const allMeanings=words.map(w=>w.meaning);
  for(const w of words){
    const {word,meaning,hint,phonetic}=w;
    const rationale=`'${word}' (${phonetic||'N/A'})은(는) '${meaning}'을(를) 의미합니다.`;
    let distractors=allMeanings.filter(m=>m!==meaning); shuffleArray(distractors); distractors=distractors.slice(0,3);
    const base=["컴퓨터","연필","학교","물병","사랑","시간","하늘"]; let k=0;
    while(distractors.length<3){ const d=base[k++%base.length]; if(d!==meaning && !distractors.includes(d)) distractors.push(d); }
    let options=[...distractors, meaning]; shuffleArray(options);
    questions.push({ word, meaning, hint:hint||'', phonetic:phonetic||null, question:word, options, correct:options.indexOf(meaning), rationale });
  }
  return questions;
}

function getCombinedQuestions(){
  const checked=quizList.querySelectorAll('.quiz-select-cb:checked');
  const builtinSets=getBuiltinQuizSets();
  let qs=[], names=[];
  checked.forEach(box=>{
    const i=parseInt(box.dataset.index,10);
    if(i<0){ const set=builtinSets.find(s=>s.key===i); if(set){ qs.push(...set.data); names.push(set.name); } }
    else { const q=savedWordLists[i]; if(q){ qs.push(...q.questions); names.push(q.name); } }
  });
  return { questions: qs, title: names.join(' + ') || '단어' };
}

/* ===================== 8) 랭킹/오답/기록 ===================== */
function loadPlayerName(){ currentPlayerName=localStorage.getItem(PLAYER_KEY)||''; playerNameInput.value=currentPlayerName; }
function savePlayerName(n){ currentPlayerName=n; localStorage.setItem(PLAYER_KEY,n); }
function loadRankings(){ rankings=JSON.parse(localStorage.getItem(RANKING_KEY) || '{"startDate":'+Date.now()+',"scores":[]}'); }
function saveRankings(){ rankings.scores.sort((a,b)=>b.totalScore-a.totalScore); rankings.scores=rankings.scores.slice(0,3); localStorage.setItem(RANKING_KEY, JSON.stringify(rankings)); }
function resetRankings(){ rankings={ startDate:Date.now(), scores:[] }; saveRankings(); renderRankings(); }
function renderRankings(){
  rankingList.innerHTML='';
  const sd=new Date(rankings.startDate); const ds=`${sd.getFullYear()}. ${sd.getMonth()+1}. ${sd.getDate()}.`;
  if(!rankings.scores||rankings.scores.length===0){
    noRankingList.classList.remove('hidden'); noRankingList.innerHTML=`아직 랭킹이 없습니다. <span class="ranking-start-date">(기록 시작일: ${ds})</span>`;
  }else{
    noRankingList.classList.add('hidden');
    const icons=['<i class="fas fa-crown gold"></i>','<i class="fas fa-crown silver"></i>','<i class="fas fa-crown bronze"></i>'];
    rankings.scores.forEach((e,i)=>{ const d=document.createElement('div'); d.className='ranking-item'; d.innerHTML=`<span class="ranking-icon">${icons[i]||''}</span><span class="ranking-name">${e.name}</span><span class="ranking-score">${e.totalScore}점 (누적)</span>`; rankingList.appendChild(d); });
    const p=document.createElement('p'); p.className='ranking-start-date text-right'; p.textContent=`(기록 시작일: ${ds})`; rankingList.appendChild(p);
  }
}
function updateRankings(name,score){ if(!name||score===0) return; const pts=score*5; const i=(rankings.scores||[]).findIndex(r=>r.name===name); if(i>-1) rankings.scores[i].totalScore+=pts; else { if(!rankings.scores) rankings.scores=[]; rankings.scores.push({name,totalScore:pts}); } saveRankings(); renderRankings(); }

function loadWrongAnswerBank(){ wrongAnswerBank=JSON.parse(localStorage.getItem(WRONG_ANSWERS_KEY) || '[]'); }
function saveWrongAnswerBank(){ localStorage.setItem(WRONG_ANSWERS_KEY, JSON.stringify(wrongAnswerBank)); }
function addWrongAnswer(q){ if(!q.word) return; if(wrongAnswerBank.findIndex(x=>x.word===q.word)===-1){ wrongAnswerBank.push(q); saveWrongAnswerBank(); } }
function removeWrongAnswer(q){ if(!q.word) return; const i=wrongAnswerBank.findIndex(x=>x.word===q.word); if(i>-1){ wrongAnswerBank.splice(i,1); saveWrongAnswerBank(); } }
function renderWrongQuizButton(){ const c=wrongAnswerBank.length; if(c>0){ startWrongQuizBtn.disabled=false; startWrongQuizBtn.innerHTML=`<i class="fas fa-redo mr-2"></i> 틀린 문제 (${c}개) 다시 풀기`; wrongQuizMessage.textContent=''; } else { startWrongQuizBtn.disabled=true; startWrongQuizBtn.innerHTML=`<i class="fas fa-redo mr-2"></i> 틀린 문제 (0개) 다시 풀기`; wrongQuizMessage.textContent='틀린 문제가 없습니다.'; wrongQuizMessage.className='text-sm mt-2 h-4 text-center text-gray-500'; } }

function loadHistory(){ quizHistory=JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]'); }
function saveHistory(){ quizHistory=quizHistory.slice(0,1000); localStorage.setItem(HISTORY_KEY, JSON.stringify(quizHistory)); }
function addHistoryEntry(e){ quizHistory.unshift(e); saveHistory(); }
function formatTimestamp(ts){ const d=new Date(ts); const days=['일','월','화','수','목','금','토']; return `${d.getFullYear()}. ${d.getMonth()+1}. ${d.getDate()}.(${days[d.getDay()]}) ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`; }
function renderHistory(){
  historyList.innerHTML='';
  if(quizHistory.length===0){ noHistoryList.classList.remove('hidden'); noHistoryList.textContent='학습 기록이 없습니다.'; }
  else{
    noHistoryList.classList.add('hidden');
    quizHistory.forEach(it=>{ const d=document.createElement('div'); d.className='history-item'; const score=it.total>0?Math.round((it.correct/it.total)*100):0; d.innerHTML=`<span class="timestamp">${formatTimestamp(it.timestamp)}</span><div class="details"><strong>${it.quizName}</strong> (학습자: ${it.playerName||'기록 없음'}) (${it.total}문제 중 ${it.correct}개 정답, ${it.wrong}개 오답) <span class="score-badge">${score}점</span></div>`; historyList.appendChild(d); });
  }
}

/* ===================== 9) 편집 모달(선택) ===================== */
function openEditModal(index){
  editingQuizIndex=index; const quiz=savedWordLists[index];
  editingTempWords = quiz.questions.map(q=>({ word:q.word, meaning:q.meaning, phonetic:q.phonetic||null }));
  document.getElementById('edit-modal-title').textContent=`"${quiz.name}" 단어장 편집`;
  document.getElementById('edit-quiz-name').value=quiz.name;
  renderTempWordList(editingTempWords, document.getElementById('edit-word-list'), document.getElementById('edit-word-count'));
  document.getElementById('edit-modal').classList.remove('hidden');
  document.getElementById('edit-modal-backdrop').classList.remove('hidden');
}
function closeEditModal(){
  editingQuizIndex=-1; editingTempWords=[]; document.getElementById('edit-manual-add-message').textContent='';
  ['edit-new-word','edit-new-meaning','edit-new-phonetic'].forEach(id=>{ const el=document.getElementById(id); if(el) el.value=''; });
  document.getElementById('edit-modal').classList.add('hidden');
  document.getElementById('edit-modal-backdrop').classList.add('hidden');
}
function saveEditedQuiz(){
  const newName=(document.getElementById('edit-quiz-name').value||'').trim();
  const msg=document.getElementById('edit-manual-add-message');
  if(!newName){ msg.textContent='단어장 이름을 입력하세요.'; msg.className='text-sm text-red-500 mt-2 h-4'; return; }
  if(editingTempWords.length<4){ msg.textContent='퀴즈 생성을 위해 최소 4개의 단어가 필요합니다.'; msg.className='text-sm text-red-500 mt-2 h-4'; return; }
  const orig=savedWordLists[editingQuizIndex]; const newQs=generateQuizFromWords(editingTempWords);
  savedWordLists[editingQuizIndex]={ name:newName, questions:newQs, creationDate:orig.creationDate };
  saveWordLists(); renderWordList(); closeEditModal();
}

/* ===================== 10) AI API (OCR/번역) ===================== */
function imageToBase64(file){ return new Promise((res,rej)=>{ const r=new FileReader(); r.readAsDataURL(file); r.onload=()=>res(r.result.split(',')[1]); r.onerror=e=>rej(e); }); }
async function fetchWithRetry(apiUrl,payload,retries=3,delay=1000){
  const apiKey=""; 
  while(retries>0){
    try{
      const controller=new AbortController(); const timeoutId=setTimeout(()=>controller.abort(),5000);
      const resp=await fetch(`${apiUrl}?key=${apiKey}`,{ method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload), signal:controller.signal });
      clearTimeout(timeoutId);
      if(resp.ok){ const r=await resp.json(); if(r.candidates && r.candidates[0]?.content?.parts?.[0]?.text){ return JSON.parse(r.candidates[0].content.parts[0].text); } throw new Error('Invalid API response structure.'); }
      if(resp.status===429||resp.status>=500){ await new Promise(s=>setTimeout(s,delay)); delay*=2; retries--; } else { throw new Error(`API failed: ${resp.status}`); }
    }catch{ retries--; if(retries<=0) return null; await new Promise(s=>setTimeout(s,delay)); delay*=2; }
  }
  return null;
}
async function callGeminiApi_OCR(b64){
  const url="https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent";
  const payload={ contents:[{ role:"user", parts:[ {text:'Analyze this image. Extract the most prominent English word and its Korean meaning. Provide *only* JSON like {"word":"EnglishWord","meaning":"KoreanMeaning"}.'}, {inlineData:{mimeType:"image/jpeg",data:b64}} ] }], generationConfig:{ responseMimeType:"application/json", responseSchema:{ type:"OBJECT", properties:{ word:{type:"STRING"}, meaning:{type:"STRING"} } } } };
  return fetchWithRetry(url,payload);
}
async function callGeminiApi_Translate(word){
  const url="https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent";
  const payload={ contents:[{ role:"user", parts:[ {text:`Translate the English word "${word}" to Korean and find its IPA phonetic. Provide *only* JSON like {"meaning":"KoreanMeaning","phonetic":"/IPA/"}.`} ] }], generationConfig:{ responseMimeType:"application/json", responseSchema:{ type:"OBJECT", properties:{ meaning:{type:"STRING"}, phonetic:{type:"STRING"} } } } };
  return fetchWithRetry(url,payload);
}

/* ===================== 11) 이벤트 리스너 ===================== */
// 시작 버튼
startQuizBtn.addEventListener('click',()=>{ const {questions,title}=getCombinedQuestions(); startQuiz(questions, title + " 퀴즈"); });
startLearnBtn.addEventListener('click',()=>{ const {questions,title}=getCombinedQuestions(); startStudy(questions, title + " 학습"); });
startRandomQuizBtn.addEventListener('click',()=>{
  const {questions}=getCombinedQuestions();
  if(questions.length<10){ selectionMessage.textContent='랜덤 퀴즈를 위해 10개 이상의 단어를 선택하세요.'; selectionMessage.className='text-sm mt-2 h-4 text-center text-red-500'; return; }
  shuffleArray(questions); startQuiz(questions.slice(0,10),'랜덤 퀴즈 (10문제)');
});

// 퀴즈 네비/스와이프
quizPrevArrow.addEventListener('click',handlePrevButton);
quizNextArrow.addEventListener('click',handleNextButton);
quizContentEl.addEventListener('touchstart',e=>{touchStartX=e.changedTouches[0].screenX;},{passive:true});
quizContentEl.addEventListener('touchend',e=>{touchEndX=e.changedTouches[0].screenX; handleQuizSwipe();});

// 결과 리트라이/메인
retryBtn.addEventListener('click',()=>{
  const builtinAll=getAllBuiltinQuestions(); const orig=[];
  activeQuizData.forEach(aq=>{
    let f=builtinAll.find(sq=>sq.word===aq.word);
    if(f){ orig.push(f); return; }
    for(const l of savedWordLists){ const m=l.questions.find(q=>q.word===aq.word); if(m){ orig.push(m); return; } }
  });
  startQuiz(orig.length?orig:activeQuizData, quizTitleEl.textContent);
});
backToMainBtn.addEventListener('click',showMainScreen);
homeBtn.addEventListener('click',showMainScreen);
quitBtn.addEventListener('click',()=>showResults(true));

// 플래시카드 네비
flashcardScene.addEventListener('click',flipCard);
flashcardScene.addEventListener('touchstart',e=>{touchStartX=e.changedTouches[0].screenX;},{passive:true});
flashcardScene.addEventListener('touchend',e=>{touchEndX=e.changedTouches[0].screenX; const th=50; if(touchEndX<touchStartX-th){ if(!cardNextArrow.disabled) cardNextArrow.click(); } else if(touchEndX>touchStartX+th){ if(!cardPrevArrow.disabled) cardPrevArrow.click(); }});
cardPrevArrow.addEventListener('click',e=>{e.stopPropagation(); showPrevCard();});
cardNextArrow.addEventListener('click',e=>{e.stopPropagation(); showNextCard();});
exitStudyBtn.addEventListener('click',showStudySummary);
startQuizFromSummaryBtn.addEventListener('click',()=>startQuiz(activeStudyData, flashcardTitle.textContent + " 퀴즈"));
mainFromSummaryBtn.addEventListener('click',showMainScreen);

// 단어장 리스트/생성
quizList.addEventListener('change',e=>{
  if(e.target.classList.contains('quiz-select-cb')){
    const checked=quizList.querySelectorAll('.quiz-select-cb:checked'); const on=checked.length>0;
    startLearnBtn.disabled=startQuizBtn.disabled=startRandomQuizBtn.disabled=!on;
    selectionMessage.textContent = on ? `${checked.length}개 단어장 선택됨` : '';
  }
});
quizList.addEventListener('click',e=>{
  const btn=e.target.closest('button'); if(!btn) return;
  const index=parseInt(btn.dataset.index,10);
  if(btn.classList.contains('delete-quiz-btn')){ savedWordLists.splice(index,1); saveWordLists(); renderWordList(); startLearnBtn.disabled=startQuizBtn.disabled=startRandomQuizBtn.disabled=true; selectionMessage.textContent=''; }
  if(btn.classList.contains('edit-quiz-btn')){ openEditModal(index); }
});
accordionHeaderNewQuiz.addEventListener('click',()=>{ accordionHeaderNewQuiz.classList.toggle('open'); accordionContentNewQuiz.classList.toggle('open'); });

// AI 자동 추가
addWordAutoBtn.addEventListener('click',async()=>{
  const word=newWordAutoInput.value.trim();
  if(!word){ autoAddMessage.textContent='영어 단어를 입력하세요.'; autoAddMessage.className='ai-message text-red-500'; return; }
  if(tempWords.find(w=>w.word.toLowerCase()===word.toLowerCase())){ autoAddMessage.textContent=`'${word}'는(은) 이미 추가된 단어입니다.`; autoAddMessage.className='ai-message text-yellow-600'; return; }
  autoAddLoader.style.display='block'; addWordAutoBtn.disabled=true; autoAddMessage.textContent=`'${word}'의 뜻과 발음을 검색 중...`; autoAddMessage.className='ai-message text-blue-600';
  try{
    const r=await callGeminiApi_Translate(word);
    if(r&&r.meaning&&r.phonetic){ tempWords.push({word,meaning:r.meaning,hint:'',phonetic:r.phonetic}); renderTempWordList(tempWords,tempWordListDiv,tempWordCountSpan); newWordAutoInput.value=''; autoAddMessage.textContent=`'${word}' 단어를 추가했습니다.`; autoAddMessage.className='ai-message text-green-600'; }
    else { autoAddMessage.textContent=`'${word}'의 정보를 찾지 못했습니다. (아래 수동 추가를 이용하세요)`; autoAddMessage.className='ai-message text-yellow-600'; }
  }catch{ autoAddMessage.textContent='자동 추가 중 오류가 발생했습니다. (아래 수동 추가를 이용하세요)'; autoAddMessage.className='ai-message text-red-500'; }
  finally{ autoAddLoader.style.display='none'; addWordAutoBtn.disabled=false; }
});

// 수동 추가
if(addWordManualBtn){
  addWordManualBtn.addEventListener('click',()=>{
    const w=(newWordManualInput?.value||'').trim();
    const m=(newMeaningManualInput?.value||'').trim();
    const p=(newPhoneticManualInput?.value||'').trim();
    if(!w||!m){ manualAddMessage.textContent='영어·의미를 모두 입력하세요.'; manualAddMessage.className='text-sm text-red-500 mt-2 h-4'; return; }
    if(tempWords.find(t=>t.word.toLowerCase()===w.toLowerCase())){ manualAddMessage.textContent=`'${w}'는(은) 이미 추가된 단어입니다.`; manualAddMessage.className='text-sm text-yellow-600 mt-2 h-4'; return; }
    tempWords.push({word:w,meaning:m,hint:'',phonetic:p||null});
    renderTempWordList(tempWords,tempWordListDiv,tempWordCountSpan);
    if(newWordManualInput) newWordManualInput.value='';
    if(newMeaningManualInput) newMeaningManualInput.value='';
    if(newPhoneticManualInput) newPhoneticManualInput.value='';
    manualAddMessage.textContent=`'${w}' 단어가 추가되었습니다.`; manualAddMessage.className='text-sm text-green-600 mt-2 h-4';
  });
}
tempWordListDiv.addEventListener('click',e=>{
  const btn=e.target.closest('.delete-temp-word-btn'); if(!btn) return;
  const idx=parseInt(btn.dataset.index,10); tempWords.splice(idx,1);
  renderTempWordList(tempWords,tempWordListDiv,tempWordCountSpan);
  manualAddMessage.textContent='단어가 삭제되었습니다.'; manualAddMessage.className='text-sm text-yellow-600 mt-2 h-4';
});
saveNewQuizBtn.addEventListener('click',()=>{
  const name=(newQuizNameInput.value||'').trim();
  if(!name){ manualAddMessage.textContent='단어장 이름을 입력해주세요.'; manualAddMessage.className='text-sm text-red-500 mt-2 h-4'; return; }
  if(tempWords.length<4){ manualAddMessage.textContent='퀴즈 생성을 위해 최소 4개의 단어가 필요합니다.'; manualAddMessage.className='text-sm text-red-500 mt-2 h-4'; return; }
  const newQuestions=generateQuizFromWords(tempWords);
  const newSet={ name, questions:newQuestions, creationDate:Date.now() };
  const exist=savedWordLists.findIndex(q=>q.name===name);
  if(exist>-1){ newSet.creationDate=savedWordLists[exist].creationDate; savedWordLists[exist]=newSet; manualAddMessage.textContent=`'${name}' 단어장을 덮어썼습니다.`; manualAddMessage.className='text-sm text-yellow-600 mt-2 h-4'; }
  else { savedWordLists.push(newSet); manualAddMessage.textContent=`'${name}' 단어장이 저장되었습니다!`; manualAddMessage.className='text-sm text-green-600 mt-2 h-4'; }
  saveWordLists(); renderWordList(); tempWords=[]; newQuizNameInput.value=''; renderTempWordList(tempWords,tempWordListDiv,tempWordCountSpan);
});

// 오답/기록
startWrongQuizBtn.addEventListener('click',()=>{
  if(wrongAnswerBank.length===0){ wrongQuizMessage.textContent='다시 풀 틀린 문제가 없습니다.'; wrongQuizMessage.className='text-sm mt-2 h-4 text-center text-red-500'; return; }
  const qs=[...wrongAnswerBank]; shuffleArray(qs); startQuiz(qs,'틀린 문제 퀴즈');
});
clearHistoryBtn.addEventListener('click',()=>{ quizHistory=[]; saveHistory(); renderHistory(); });

playerNameInput.addEventListener('change',e=>savePlayerName(e.target.value));
rankingResetBtn.addEventListener('click',resetRankings);
accordionHeaderOndap.addEventListener('click',()=>{ accordionHeaderOndap.classList.toggle('open'); accordionContentOndap.classList.toggle('open'); });
accordionHeaderHistory.addEventListener('click',()=>{ accordionHeaderHistory.classList.toggle('open'); accordionContentHistory.classList.toggle('open'); });

// OCR
ocrExtractBtn.addEventListener('click',async()=>{
  const file=ocrImageInput.files[0];
  if(!file){ ocrMessage.textContent='이미지 파일을 선택하세요.'; ocrMessage.className='ai-message text-red-500'; return; }
  ocrMessage.textContent='AI가 이미지를 분석 중입니다...'; ocrMessage.className='ai-message text-blue-600'; ocrExtractBtn.disabled=true;
  try{
    const b64=await imageToBase64(file); const r=await callGeminiApi_OCR(b64);
    if(r&&r.word){ ocrMessage.textContent='텍스트 추출 성공! 뜻과 발음을 검색합니다...'; ocrMessage.className='ai-message text-blue-600'; newWordAutoInput.value=r.word; addWordAutoBtn.click(); ocrMessage.textContent=`추출된 단어 '${r.word}'를 자동 추가했습니다.`; ocrMessage.className='ai-message text-green-600'; }
    else { ocrMessage.textContent='이미지에서 단어를 찾지 못했습니다.'; ocrMessage.className='ai-message text-yellow-600'; }
  }catch{ ocrMessage.textContent='텍스트 추출 중 오류가 발생했습니다.'; ocrMessage.className='ai-message text-red-500'; }
  finally{ ocrExtractBtn.disabled=false; ocrImageInput.value=''; }
});

/* ===================== 12) 초기화 ===================== */
document.addEventListener('DOMContentLoaded',()=>{
  loadWordLists(); loadPlayerName(); loadRankings(); loadWrongAnswerBank(); loadHistory();
  renderWordList(); renderRankings(); renderWrongQuizButton(); renderHistory();
  renderTempWordList(tempWords, tempWordListDiv, tempWordCountSpan);
});
