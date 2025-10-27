<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CBT 자격증 시험 시스템</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Noto Sans KR', sans-serif;
            background-color: #f0f2f5;
        }
        .container {
            max-width: 800px;
            margin: 2rem auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 8px 16px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .option-label {
            display: block;
            padding: 1rem;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            margin-bottom: 0.75rem;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
        }
        .option-label:hover {
            border-color: #3b82f6;
            background-color: #eff6ff;
        }
        input[type="radio"]:checked + .option-label {
            background-color: #3b82f6;
            border-color: #3b82f6;
            color: white;
            font-weight: bold;
        }
        input[type="radio"] {
            display: none;
        }
        .btn {
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            border: none;
        }
        .btn-sm {
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
        }
        .btn-primary {
            background-color: #3b82f6;
            color: white;
        }
        .btn-primary:hover {
            background-color: #2563eb;
        }
        .btn-secondary {
            background-color: #e2e8f0;
            color: #475569;
        }
        .btn-secondary:hover {
            background-color: #cbd5e1;
        }
        .btn-danger {
            background-color: #ef4444;
            color: white;
        }
        .btn-danger:hover {
            background-color: #dc2626;
        }
        .progress-bar-container {
            width: 100%;
            background-color: #e5e7eb;
            border-radius: 9999px;
            height: 10px;
        }
        .progress-bar {
            background-color: #3b82f6;
            height: 10px;
            border-radius: 9999px;
            transition: width 0.3s ease-in-out;
        }
    </style>
</head>
<body>
    
    <div id="start-screen" class="container p-8">
        <div class="text-center">
            <h1 class="text-3xl font-bold text-gray-800 mb-4">CBT 자격증 시험 시스템</h1>
            <p class="text-gray-600 mb-8">원하는 방식으로 시험을 시작하세요.</p>
        </div>
        
        <div class="space-y-8">
             <div class="border p-6 rounded-lg bg-gray-50">
                <h2 class="text-xl font-bold text-gray-700 mb-3">기본 문제풀이</h2>
                <p class="text-sm text-gray-500 mb-4">내장된 샘플 문제로 시스템을 체험해 보세요.</p>
                <button id="start-sample-btn" class="btn btn-primary w-full">샘플 문제로 시작</button>
            </div>

            <div class="border p-6 rounded-lg bg-gray-50">
                <h2 class="text-xl font-bold text-gray-700 mb-3">내 문제집 목록</h2>
                <div id="quiz-list" class="space-y-3">
                    <!-- 저장된 퀴즈 목록이 여기에 동적으로 추가됩니다 -->
                </div>
                 <p id="no-quiz-list" class="text-sm text-gray-500 text-center py-4 hidden">저장된 문제집이 없습니다.</p>
            </div>
            
            <div class="border p-6 rounded-lg bg-gray-50">
                <h2 class="text-xl font-bold text-gray-700 mb-3">새 문제집 추가</h2>
                <p class="text-sm text-gray-500 mb-4">CSV 파일을 업로드하여 '내 문제집 목록'에 추가하세요.</p>
                <label for="csv-file-input" class="btn btn-secondary w-full cursor-pointer">
                    <i class="fas fa-upload mr-2"></i> CSV 파일 선택 및 추가
                </label>
                <input type="file" id="csv-file-input" class="hidden" accept=".csv">
                <p class="text-xs text-left text-gray-500 mt-3">
                    <strong>형식:</strong> question,option1,option2,option3,option4,answer_index(0~3),explanation
                </p>
                <p id="csv-message" class="text-sm mt-2 h-4"></p>
            </div>
        </div>
    </div>

    <div id="quiz-main-container" class="container hidden">
        <!-- 퀴즈 화면 -->
        <div id="quiz-screen">
            <div class="p-8 border-b">
                <div class="flex justify-between items-center mb-4">
                    <p id="quiz-title" class="text-sm font-semibold text-gray-500"></p>
                    <p id="question-counter" class="text-lg font-bold text-gray-700"></p>
                </div>
                <div class="progress-bar-container mb-6">
                    <div id="progress-bar" class="progress-bar" style="width: 0%;"></div>
                </div>
                <h2 id="question-text" class="text-2xl font-bold text-gray-800"></h2>
            </div>
            <div id="answer-options" class="p-8"></div>
            <div id="navigation-buttons" class="flex justify-between p-8 border-t bg-gray-50">
                <button id="prev-btn" class="btn btn-secondary"><i class="fas fa-arrow-left mr-2"></i>이전</button>
                <button id="next-btn" class="btn btn-primary">다음<i class="fas fa-arrow-right ml-2"></i></button>
                <button id="submit-btn" class="btn btn-primary hidden bg-green-500 hover:bg-green-600"><i class="fas fa-check-circle mr-2"></i>답안 제출</button>
            </div>
        </div>
        <!-- 결과 화면 -->
        <div id="result-screen" class="hidden p-8">
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-2">시험 결과</h2>
            <p id="score-text" class="text-xl text-center text-gray-600 mb-8"></p>
            <div id="detailed-results" class="space-y-6"></div>
            <div class="text-center mt-12">
                 <button id="home-btn" class="btn btn-secondary mr-2"><i class="fas fa-home mr-2"></i>처음으로</button>
                <button id="restart-btn" class="btn btn-primary"><i class="fas fa-redo mr-2"></i>다시 풀기</button>
            </div>
        </div>
    </div>

    <script>
        const sampleQuizData = [
            { question: "소프트웨어 개발 방법론 중, 폭포수 모델(Waterfall Model)의 가장 큰 특징으로 옳은 것은 무엇입니까?", options: ["요구사항 변경에 유연하게 대처할 수 있다.", "각 단계가 순차적으로 진행되며, 이전 단계로 돌아가기 어렵다.", "고객과의 지속적인 소통을 가장 중요하게 생각한다.", "프로토타입을 계속해서 만들어 사용자에게 보여준다."], answer: 1, explanation: "폭포수 모델은 이름처럼 물이 떨어지듯 각 개발 단계(요구분석 → 설계 → 구현 → 테스트 → 유지보수)가 순차적으로 진행되는 선형 순차적 모델입니다. 이전 단계가 완벽히 끝나야 다음 단계로 진행할 수 있으며, 변경에 대응하기 어려운 단점이 있습니다." },
            { question: "데이터베이스에서 하나의 트랜잭션이 성공적으로 완료되었음을 확정하는 SQL 명령어는 무엇입니까?", options: ["COMMIT", "ROLLBACK", "SAVEPOINT", "TRANSACTION"], answer: 0, explanation: "COMMIT은 트랜잭션의 모든 변경 내용을 데이터베이스에 영구적으로 저장하는 명령어입니다. 반면 ROLLBACK은 트랜잭션의 모든 변경 내용을 취소하고 이전 상태로 되돌립니다." },
            { question: "OSI 7계층 중, 데이터의 암호화, 압축, 그리고 포맷 변환을 담당하는 계층은 어디입니까?", options: ["응용 계층 (Application Layer)", "표현 계층 (Presentation Layer)", "세션 계층 (Session Layer)", "전송 계층 (Transport Layer)"], answer: 1, explanation: "표현 계층(Presentation Layer)은 응용 계층으로부터 받은 데이터를 모든 시스템이 이해할 수 있는 공통된 형식으로 변환하는 역할을 합니다. 데이터의 암호화(Encryption), 압축(Compression) 등이 여기에 속합니다." },
        ];

        // --- DOM 요소 ---
        const startScreen = document.getElementById('start-screen');
        const quizMainContainer = document.getElementById('quiz-main-container');
        const startSampleBtn = document.getElementById('start-sample-btn');
        const csvFileInput = document.getElementById('csv-file-input');
        const csvMessage = document.getElementById('csv-message');
        const quizList = document.getElementById('quiz-list');
        const noQuizList = document.getElementById('no-quiz-list');
        
        const quizScreen = document.getElementById('quiz-screen');
        const resultScreen = document.getElementById('result-screen');
        const quizTitle = document.getElementById('quiz-title');
        const questionCounter = document.getElementById('question-counter');
        const progressBar = document.getElementById('progress-bar');
        const questionText = document.getElementById('question-text');
        const answerOptions = document.getElementById('answer-options');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const submitBtn = document.getElementById('submit-btn');
        const scoreText = document.getElementById('score-text');
        const detailedResults = document.getElementById('detailed-results');
        const restartBtn = document.getElementById('restart-btn');
        const homeBtn = document.getElementById('home-btn');

        // --- 퀴즈 상태 변수 ---
        let activeQuizData = [];
        let currentQuestionIndex = 0;
        let userAnswers = [];
        let savedQuizSets = [];
        const STORAGE_KEY = 'cbtQuizSets';

        // --- 함수 ---
        function loadQuizSets() {
            const storedQuizzes = localStorage.getItem(STORAGE_KEY);
            savedQuizSets = storedQuizzes ? JSON.parse(storedQuizzes) : [];
        }

        function saveQuizSets() {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(savedQuizSets));
        }

        function renderQuizList() {
            quizList.innerHTML = '';
            if (savedQuizSets.length === 0) {
                noQuizList.classList.remove('hidden');
                return;
            }
            noQuizList.classList.add('hidden');
            savedQuizSets.forEach((quiz, index) => {
                const listItem = document.createElement('div');
                listItem.className = 'flex items-center justify-between p-3 bg-white border rounded-lg';
                listItem.innerHTML = `
                    <span class="font-medium text-gray-700">${quiz.name} (${quiz.questions.length}문제)</span>
                    <div>
                        <button class="btn btn-sm btn-primary start-quiz-btn" data-index="${index}">시작</button>
                        <button class="btn btn-sm btn-danger delete-quiz-btn" data-index="${index}">삭제</button>
                    </div>
                `;
                quizList.appendChild(listItem);
            });
        }

        function parseCSV(text) {
            // ... (CSV 파싱 로직은 이전과 동일)
            const questions = [];
            const lines = text.split('\n').filter(line => line.trim() !== '');
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                const columns = [];
                let currentField = '';
                let inQuotes = false;
                for (const char of line) {
                    if (char === '"' && (line[line.indexOf(char) -1] !== '"')) { // handle "" escape
                        inQuotes = !inQuotes;
                    } else if (char === ',' && !inQuotes) {
                        columns.push(currentField.trim().replace(/^"|"$/g, '').replace(/""/g, '"'));
                        currentField = '';
                    } else {
                        currentField += char;
                    }
                }
                columns.push(currentField.trim().replace(/^"|"$/g, '').replace(/""/g, '"'));

                if (columns.length !== 7) {
                    csvMessage.textContent = `오류: ${i + 1}번째 줄의 형식이 올바르지 않습니다. (7개 열 필요)`;
                    csvMessage.className = 'text-sm text-red-500 mt-2 h-4';
                    return null;
                }
                const [question, opt1, opt2, opt3, opt4, answerStr, explanation] = columns;
                const answer = parseInt(answerStr, 10);
                if (isNaN(answer) || answer < 0 || answer > 3) {
                     csvMessage.textContent = `오류: ${i + 1}번째 줄의 정답 번호가 유효하지 않습니다. (0~3 사이)`;
                     csvMessage.className = 'text-sm text-red-500 mt-2 h-4';
                     return null;
                }
                questions.push({ question, options: [opt1, opt2, opt3, opt4], answer, explanation });
            }
            return questions;
        }

        function initializeQuiz(data, title) {
            activeQuizData = data;
            currentQuestionIndex = 0;
            userAnswers = new Array(activeQuizData.length).fill(null);
            quizTitle.textContent = title;

            startScreen.classList.add('hidden');
            quizMainContainer.classList.remove('hidden');
            resultScreen.classList.add('hidden');
            quizScreen.classList.remove('hidden');
            
            loadQuestion();
        }

        function loadQuestion() {
            const currentQuestion = activeQuizData[currentQuestionIndex];
            questionCounter.textContent = `${currentQuestionIndex + 1} / ${activeQuizData.length}`;
            progressBar.style.width = `${((currentQuestionIndex + 1) / activeQuizData.length) * 100}%`;
            questionText.textContent = currentQuestion.question;
            answerOptions.innerHTML = '';

            currentQuestion.options.forEach((option, index) => {
                const optionId = `q${currentQuestionIndex}-option${index}`;
                const optionElement = document.createElement('div');
                optionElement.innerHTML = `
                    <input type="radio" id="${optionId}" name="question${currentQuestionIndex}" value="${index}">
                    <label for="${optionId}" class="option-label">
                        <span class="mr-4 font-bold">${index + 1}.</span> ${option}
                    </label>
                `;
                answerOptions.appendChild(optionElement);
                const radioBtn = optionElement.querySelector(`#${optionId}`);
                if (userAnswers[currentQuestionIndex] === index) radioBtn.checked = true;
                radioBtn.addEventListener('change', () => { userAnswers[currentQuestionIndex] = index; });
            });
            updateNavigation();
        }

        function updateNavigation() {
            prevBtn.disabled = currentQuestionIndex === 0;
            prevBtn.classList.toggle('opacity-50', prevBtn.disabled);
            prevBtn.classList.toggle('cursor-not-allowed', prevBtn.disabled);
            if (currentQuestionIndex === activeQuizData.length - 1) {
                nextBtn.classList.add('hidden');
                submitBtn.classList.remove('hidden');
            } else {
                nextBtn.classList.remove('hidden');
                submitBtn.classList.add('hidden');
            }
        }

        function showResults() {
            quizScreen.classList.add('hidden');
            resultScreen.classList.remove('hidden');
            let score = userAnswers.reduce((acc, answer, index) => acc + (answer === activeQuizData[index].answer ? 1 : 0), 0);
            const totalQuestions = activeQuizData.length;
            const percentage = totalQuestions > 0 ? ((score / totalQuestions) * 100).toFixed(1) : 0;
            scoreText.innerHTML = `<strong class="text-blue-600">${totalQuestions}문제 중 ${score}개를 맞추셨습니다!</strong><br> 정답률: ${percentage}%`;

            detailedResults.innerHTML = activeQuizData.map((question, index) => {
                const userAnswer = userAnswers[index];
                const correctAnswer = question.answer;
                const isCorrect = userAnswer === correctAnswer;
                return `
                    <div class="border rounded-lg p-6 ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}">
                        <p class="font-bold text-lg mb-4">${index + 1}. ${question.question}</p>
                        <div class="space-y-2 text-gray-700">
                            <p><strong>정답:</strong> ${question.options[correctAnswer]}</p>
                            <p><strong>나의 답변:</strong> ${userAnswer !== null ? question.options[userAnswer] : '선택 안 함'} 
                                <i class="fas ${isCorrect ? 'fa-check-circle text-green-500' : 'fa-times-circle text-red-500'} ml-2"></i></p>
                            <div class="mt-4 pt-4 border-t border-gray-200">
                                <p class="font-semibold text-gray-800">해설</p>
                                <p class="text-sm text-gray-600 mt-1">${question.explanation}</p>
                            </div>
                        </div>
                    </div>`;
            }).join('');
        }

        // --- 이벤트 리스너 ---
        startSampleBtn.addEventListener('click', () => {
            initializeQuiz(sampleQuizData, '정보처리기사 필기 (샘플)');
        });

        csvFileInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (!file) return;

            csvMessage.textContent = '';
            const reader = new FileReader();
            reader.onload = (e) => {
                const text = e.target.result;
                const newQuestions = parseCSV(text);
                if (newQuestions && newQuestions.length > 0) {
                    const existingIndex = savedQuizSets.findIndex(q => q.name === file.name);
                    if (existingIndex > -1) {
                        if (confirm(`'${file.name}' 문제집이 이미 존재합니다. 덮어쓰시겠습니까?`)) {
                             savedQuizSets[existingIndex].questions = newQuestions;
                        } else {
                            csvFileInput.value = '';
                            return;
                        }
                    } else {
                        savedQuizSets.push({ name: file.name, questions: newQuestions });
                    }
                    saveQuizSets();
                    renderQuizList();
                    csvMessage.textContent = `'${file.name}'이(가) 목록에 추가되었습니다.`;
                    csvMessage.className = 'text-sm text-green-600 mt-2 h-4';
                } else if (!csvMessage.textContent) {
                     csvMessage.textContent = "오류: CSV 파일에 유효한 문제가 없습니다.";
                     csvMessage.className = 'text-sm text-red-500 mt-2 h-4';
                }
                csvFileInput.value = '';
            };
            reader.readAsText(file, 'UTF-8');
        });

        quizList.addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains('start-quiz-btn')) {
                const index = parseInt(target.dataset.index, 10);
                const quiz = savedQuizSets[index];
                initializeQuiz(quiz.questions, quiz.name);
            } else if (target.classList.contains('delete-quiz-btn')) {
                const index = parseInt(target.dataset.index, 10);
                 if (confirm(`'${savedQuizSets[index].name}' 문제집을 정말 삭제하시겠습니까?`)) {
                    savedQuizSets.splice(index, 1);
                    saveQuizSets();
                    renderQuizList();
                }
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentQuestionIndex < activeQuizData.length - 1) loadQuestion(++currentQuestionIndex);
        });
        prevBtn.addEventListener('click', () => {
            if (currentQuestionIndex > 0) loadQuestion(--currentQuestionIndex);
        });
        submitBtn.addEventListener('click', () => {
            const unanswered = userAnswers.filter(a => a === null).length;
            if (unanswered > 0 && !confirm(`${unanswered}개의 문항에 답하지 않았습니다. 정말 제출하시겠습니까?`)) return;
            showResults();
        });
        restartBtn.addEventListener('click', () => {
            initializeQuiz(activeQuizData, quizTitle.textContent);
        });
        homeBtn.addEventListener('click', () => {
            quizMainContainer.classList.add('hidden');
            startScreen.classList.remove('hidden');
        });

        // --- 초기화 ---
        loadQuizSets();
        renderQuizList();
    </script>
</body>
</html>

