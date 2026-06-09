'use strict';

// =====================================================
// 1. 칭찬 메시지 데이터 (레벨별로 구분)
// =====================================================

// 레벨 1-3: 따뜻하고 기본적인 칭찬
const praiseMessages_low = [
  "오늘 하루도 존재해줘서 정말 고마워요. 당신이 있다는 것 자체가 선물이에요. 💜",
  "그 작은 용기가 얼마나 대단한지 몰라요. 당신은 정말 잘하고 있어요!",
  "세상에서 가장 어려운 일은 그냥 살아가는 것인데, 당신은 오늘도 해냈어요!",
  "완벽하지 않아도 괜찮아요. 오늘의 당신은 충분히 빛나고 있어요 ✨",
  "아주 작은 한 걸음이라도, 앞으로 나아간 당신이 자랑스러워요!",
  "당신이 한 일은 결코 작지 않아요. 그 마음과 노력이 정말 대단해요.",
  "오늘도 포기하지 않은 당신, 그 자체로 충분히 멋져요! 🌟",
  "힘든 날에도 이걸 해냈다면, 당신은 생각보다 훨씬 강한 사람이에요.",
  "천천히 가도 괜찮아요. 당신만의 속도로 가는 게 가장 아름다운 여정이에요.",
  "오늘 잘한 일을 떠올리는 것 자체가 이미 대단한 용기예요! 💪",
];

// 레벨 4-6: 더 구체적이고 따뜻한 칭찬
const praiseMessages_mid = [
  "당신은 매일 조금씩 더 빛나고 있어요. 그 성장이 눈부셔요! 🌈",
  "이런 마음으로 하루하루를 살아가는 당신은 정말 특별한 사람이에요.",
  "당신이 오늘 한 일은 미래의 당신에게 큰 선물이 될 거예요. 잘했어요! 🎁",
  "그 작은 실천들이 모여 당신이라는 멋진 사람을 만들고 있어요.",
  "어떤 하루도 낭비된 날은 없어요. 오늘도 당신은 성장했어요! 🌱",
  "당신의 노력은 언제나 빛나고 있어요. 지금 당신이 너무 자랑스럽습니다!",
  "스스로를 믿어요. 당신은 이미 충분히 잘 해내고 있으니까요. ⭐",
  "오늘의 당신은 어제의 당신보다 한 뼘 더 성장했어요. 정말 대단해요!",
  "힘든 상황에서도 긍정적인 것을 찾아내는 당신의 능력이 정말 대단해요 💜",
  "당신은 생각보다 훨씬 강하고 빛나는 사람이에요. 그걸 잊지 마세요!",
];

// 레벨 7-10: 더 특별하고 감동적인 칭찬
const praiseMessages_high = [
  "🏆 당신은 이미 자신의 챔피언이에요! 오늘도 정말 대단하게 해냈어요.",
  "✨ 당신처럼 매일 최선을 다하는 사람은 정말 드물어요. 당신은 특별한 존재예요!",
  "🌟 이 순간의 당신을 기억하세요. 지금 이 모습이 얼마나 빛나는지 모를 거예요.",
  "💎 다이아몬드는 압력 아래서 만들어지듯, 당신도 매일 더 빛나고 있어요!",
  "🚀 당신이 걸어온 길을 돌아보세요. 정말 엄청난 여정을 걸어온 거예요!",
  "🌺 당신의 존재 자체가 주변 사람들에게 힘이 되고 있다는 걸 알고 있나요?",
  "💫 오늘의 당신은 역대 가장 멋진 버전의 당신이에요. 앞으로도 기대돼요!",
  "🎯 포기하지 않고 계속 나아가는 당신, 그 꾸준함이 가장 큰 재능이에요!",
  "🌙 별이 빛나려면 어둠이 필요하듯, 당신의 노력이 빛날 날이 반드시 올 거예요.",
  "👑 당신은 스스로 몰라도, 이미 많은 것을 이뤄내고 있어요. 진심으로 대단해요!",
];

// 레벨업 시 출력할 축하 메시지
const levelupMessages = [
  "점점 더 빛나고 있어요! 계속 달려봐요! 🏃",
  "대단해요! 당신의 성장이 눈부셔요! 🌟",
  "와우! 스스로를 사랑하는 여정이 계속되고 있어요! 💜",
  "축하해요! 이 속도라면 곧 최고 레벨이에요! 🚀",
  "믿기지 않을 만큼 잘 하고 있어요! 정말 자랑스러워요! 🎉",
  "레벨업! 오늘의 노력이 미래를 바꾸고 있어요! ✨",
  "이 기세라면 무엇이든 해낼 수 있어요! 파이팅! 💪",
  "매일 성장하는 당신이 정말 멋져요! 🌈",
  "거의 다 왔어요! 끝까지 함께해요! 🏆",
  "최고 레벨 달성! 당신은 진짜 챔피언이에요! 👑",
];

// =====================================================
// 2. 게임 상태 및 localStorage 키 상수
// =====================================================

const STORAGE_KEY = 'praiseGame_v1'; // localStorage에 저장할 키 이름

// 기본 게임 상태 (처음 실행 시 사용)
const defaultGameState = {
  level: 1,         // 현재 레벨 (1~10)
  xp: 0,            // 현재 경험치 (0~99)
  streak: 1,        // 연속 출석 일수
  lastPlayDate: '', // 마지막 플레이 날짜 (YYYY-MM-DD)
  records: [],      // 칭찬 기록 배열
};

// =====================================================
// 3. 유틸리티 함수들
// =====================================================

// 오늘 날짜를 YYYY-MM-DD 형식으로 반환
function getTodayString() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

// 날짜를 보기 좋은 형식으로 변환 (예: "6월 9일 (월)")
function formatDate(dateString) {
  const date = new Date(dateString);
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const dow = days[date.getDay()];
  return `${m}월 ${d}일 (${dow})`;
}

// =====================================================
// 4. 게임 데이터 저장/불러오기
// =====================================================

// localStorage에서 게임 상태를 불러옴
function loadGameState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return { ...defaultGameState };
    return JSON.parse(saved);
  } catch (e) {
    return { ...defaultGameState };
  }
}

// 현재 게임 상태를 localStorage에 저장
function saveGameState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// =====================================================
// 5. 스트릭 계산
// =====================================================

// 마지막 플레이 날짜를 기반으로 스트릭 업데이트
function updateStreak(state) {
  const today = getTodayString();
  if (!state.lastPlayDate) {
    // 처음 플레이하는 경우
    state.streak = 1;
    state.lastPlayDate = today;
    return state;
  }

  const last = new Date(state.lastPlayDate);
  const now = new Date(today);
  const diffDays = Math.round((now - last) / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    // 오늘 이미 플레이한 경우: 스트릭 유지
    return state;
  } else if (diffDays === 1) {
    // 하루 차이: 연속 출석
    state.streak += 1;
  } else {
    // 2일 이상 차이: 스트릭 초기화
    state.streak = 1;
  }

  state.lastPlayDate = today;
  return state;
}

// =====================================================
// 6. 경험치 및 레벨 계산
// =====================================================

const XP_PER_LEVEL = 100; // 레벨업에 필요한 경험치
const MAX_LEVEL = 10;      // 최대 레벨

// 경험치를 추가하고 레벨업 여부를 반환
function addXP(state, amount) {
  // 3일 이상 연속 출석 시 경험치 2배
  const bonus = state.streak >= 3 ? amount * 2 : amount;
  state.xp += bonus;

  let didLevelUp = false;

  // 경험치가 100 이상이면 레벨업
  while (state.xp >= XP_PER_LEVEL && state.level < MAX_LEVEL) {
    state.xp -= XP_PER_LEVEL;
    state.level += 1;
    didLevelUp = true;
  }

  // 최대 레벨 도달 시 경험치 고정
  if (state.level >= MAX_LEVEL) {
    state.xp = Math.min(state.xp, XP_PER_LEVEL - 1);
  }

  return { state, didLevelUp, bonus };
}

// 현재 레벨에 맞는 칭찬 메시지 배열을 반환
function getPraisePool(level) {
  if (level <= 3)  return praiseMessages_low;
  if (level <= 6)  return praiseMessages_mid;
  return praiseMessages_high;
}

// 칭찬 메시지 배열에서 랜덤으로 하나를 선택
function getRandomPraise(level) {
  const pool = getPraisePool(level);
  return pool[Math.floor(Math.random() * pool.length)];
}

// =====================================================
// 7. 화면 전환 함수
// =====================================================

// 지정한 화면 ID만 활성화하고 나머지는 숨김
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

// =====================================================
// 8. 홈 화면 렌더링
// =====================================================

function renderHome() {
  const state = loadGameState();

  // 레벨 표시
  document.getElementById('homeLevelNum').textContent = `Lv. ${state.level}`;

  // 경험치 바 업데이트
  const xpPercent = Math.min((state.xp / XP_PER_LEVEL) * 100, 100);
  document.getElementById('homeXpBar').style.width = `${xpPercent}%`;
  document.getElementById('homeXpText').textContent =
    `경험치 ${state.xp} / ${XP_PER_LEVEL}`;

  // 스트릭 배지 업데이트
  const streakBadge = document.getElementById('streakBadge');
  if (state.streak >= 2) {
    streakBadge.textContent = `🔥 ${state.streak}일 연속!`;
    streakBadge.style.display = 'block';
  } else {
    streakBadge.textContent = `🔥 1일 연속!`;
  }

  // 최대 레벨일 때 경험치 텍스트 변경
  if (state.level >= MAX_LEVEL) {
    document.getElementById('homeXpText').textContent = '🏆 최고 레벨 달성!';
  }
}

// =====================================================
// 9. 도전 화면 초기화
// =====================================================

let selectedEmotion = null;     // 선택된 감정
let selectedEmotionEmoji = '';  // 선택된 감정 이모지

function initChallengeScreen() {
  // 이전 입력 초기화
  document.getElementById('achievementInput').value = '';
  document.getElementById('charCount').textContent = '0 / 200';
  selectedEmotion = null;
  selectedEmotionEmoji = '';

  // 감정 버튼 선택 상태 초기화
  document.querySelectorAll('.btn-emotion').forEach(btn => {
    btn.classList.remove('selected');
  });
}

// =====================================================
// 10. 칭찬 결과 화면 렌더링
// =====================================================

function renderResult(achievement, emotion, emotionEmoji) {
  const state = loadGameState();

  // 스트릭 업데이트 (플레이 날짜 기록)
  const updatedState = updateStreak(state);

  // 경험치 추가 및 레벨업 확인
  const { state: newState, didLevelUp, bonus } = addXP(updatedState, 10);

  // 칭찬 메시지 선택 (레벨 기준)
  const praiseMsg = getRandomPraise(newState.level);

  // 오늘의 기록 저장
  const record = {
    date: getTodayString(),
    achievement,
    emotion,
    emotionEmoji,
    praiseMsg,
    xpGained: bonus,
  };
  newState.records.unshift(record); // 최신 기록을 앞에 추가
  // 최근 50개만 유지 (용량 관리)
  if (newState.records.length > 50) newState.records = newState.records.slice(0, 50);

  saveGameState(newState);

  // 화면에 내용 표시
  document.getElementById('praiseAchievement').textContent = achievement;
  document.getElementById('praiseMessage').textContent = praiseMsg;
  document.getElementById('praiseEmotionTag').textContent =
    `${emotionEmoji} ${emotion} 기분으로 오늘도 멋지게!`;

  // 레벨에 따른 칭찬 아이콘 변경
  const icons = ['💜', '⭐', '🌟', '✨', '🏆', '💎', '🌈', '🚀', '👑', '🌺'];
  document.getElementById('praiseIcon').textContent = icons[(newState.level - 1)] || '⭐';

  // 경험치 획득 텍스트
  const xpText = bonus > 10 ? `+${bonus} XP (스트릭 보너스! 🔥)` : `+${bonus} XP`;
  document.getElementById('xpGainText').textContent = xpText;

  // 경험치 획득 애니메이션 (약간의 지연 후 표시)
  const xpGainEl = document.getElementById('xpGain');
  xpGainEl.classList.remove('show');
  setTimeout(() => xpGainEl.classList.add('show'), 600);

  // 레벨업 팝업 처리
  if (didLevelUp) {
    setTimeout(() => showLevelUpPopup(newState.level), 1200);
    shootConfetti();
  }
}

// =====================================================
// 11. 레벨업 팝업
// =====================================================

function showLevelUpPopup(newLevel) {
  document.getElementById('levelupNewLevel').textContent = `Lv. ${newLevel} 달성!`;
  document.getElementById('levelupMessage').textContent =
    levelupMessages[newLevel - 2] || '정말 대단해요! 계속 달려봐요!';
  document.getElementById('levelupPopup').classList.add('show');
}

function hideLevelUpPopup() {
  document.getElementById('levelupPopup').classList.remove('show');
}

// =====================================================
// 12. 컨페티(confetti) 효과
// =====================================================

function shootConfetti() {
  const container = document.getElementById('confettiContainer');
  container.innerHTML = ''; // 기존 컨페티 제거

  const colors = ['#7C3AED', '#A78BFA', '#EC4899', '#F59E0B', '#10B981', '#3B82F6', '#EF4444'];

  // 60개의 컨페티 조각 생성
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('div');
    piece.classList.add('confetti-piece');

    // 랜덤 위치, 색상, 크기, 속도
    const left = Math.random() * 100;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 8 + 6;
    const duration = Math.random() * 2 + 2;
    const delay = Math.random() * 0.8;
    const isCircle = Math.random() > 0.5;

    piece.style.cssText = `
      left: ${left}%;
      background: ${color};
      width: ${size}px;
      height: ${size}px;
      border-radius: ${isCircle ? '50%' : '2px'};
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
    `;

    container.appendChild(piece);
  }

  // 3초 후 컨페티 제거
  setTimeout(() => { container.innerHTML = ''; }, 4000);
}

// =====================================================
// 13. 기록 화면 렌더링
// =====================================================

function renderHistory() {
  const state = loadGameState();
  const listEl = document.getElementById('historyList');
  listEl.innerHTML = '';

  // 최근 7일 기준으로 필터링
  const today = new Date(getTodayString());
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);

  const recentRecords = state.records.filter(r => {
    const recDate = new Date(r.date);
    return recDate >= sevenDaysAgo;
  });

  if (recentRecords.length === 0) {
    listEl.innerHTML = `
      <div class="history-empty">
        아직 기록이 없어요 😊<br/>
        첫 번째 도전을 시작해보세요!
      </div>
    `;
    return;
  }

  // 날짜별로 그룹핑하여 최신 순으로 표시
  const grouped = {};
  recentRecords.forEach(r => {
    if (!grouped[r.date]) grouped[r.date] = [];
    grouped[r.date].push(r);
  });

  const sortedDates = Object.keys(grouped).sort((a, b) => b.localeCompare(a));

  sortedDates.forEach(dateStr => {
    const dayRecords = grouped[dateStr];
    dayRecords.forEach(record => {
      const card = document.createElement('div');
      card.classList.add('history-card');

      // 오늘 날짜면 "오늘"로 표시
      const isToday = dateStr === getTodayString();
      const dateLabel = isToday ? `오늘 (${formatDate(dateStr)})` : formatDate(dateStr);

      card.innerHTML = `
        <div class="history-date">📅 ${dateLabel}</div>
        <div class="history-achievement">${record.achievement}</div>
        <div class="history-praise">${record.praiseMsg}</div>
        <div class="history-meta">
          <span class="history-emotion">${record.emotionEmoji} ${record.emotion}</span>
          <span class="history-xp">+${record.xpGained} XP</span>
        </div>
      `;
      listEl.appendChild(card);
    });
  });
}

// =====================================================
// 14. 이벤트 리스너 등록
// =====================================================

document.addEventListener('DOMContentLoaded', () => {

  // 홈 화면 초기 렌더링
  renderHome();

  // --- 홈 화면 버튼들 ---

  // "오늘의 도전 시작하기" 버튼
  document.getElementById('btnStartChallenge').addEventListener('click', () => {
    initChallengeScreen();
    showScreen('screen-challenge');
  });

  // "최근 기록 보기" 버튼
  document.getElementById('btnViewHistory').addEventListener('click', () => {
    renderHistory();
    showScreen('screen-history');
  });

  // --- 도전 화면 ---

  // 텍스트 입력 시 글자 수 카운트 업데이트
  document.getElementById('achievementInput').addEventListener('input', function () {
    document.getElementById('charCount').textContent = `${this.value.length} / 200`;
  });

  // 감정 버튼 클릭 시 선택 상태 토글
  document.querySelectorAll('.btn-emotion').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.btn-emotion').forEach(b => b.classList.remove('selected'));
      this.classList.add('selected');
      selectedEmotion = this.dataset.emotion;
      selectedEmotionEmoji = this.dataset.emoji;
    });
  });

  // "칭찬 받기" 버튼 클릭
  document.getElementById('btnSubmitPraise').addEventListener('click', () => {
    const achievement = document.getElementById('achievementInput').value.trim();

    // 유효성 검사: 텍스트 입력 확인
    if (!achievement) {
      alert('오늘 잘한 일을 적어주세요! 아주 작은 것도 괜찮아요 😊');
      document.getElementById('achievementInput').focus();
      return;
    }

    // 유효성 검사: 감정 선택 확인
    if (!selectedEmotion) {
      alert('지금 기분을 선택해주세요! 😊');
      return;
    }

    // 결과 화면으로 전환하고 렌더링
    showScreen('screen-result');
    renderResult(achievement, selectedEmotion, selectedEmotionEmoji);
  });

  // 도전 화면 뒤로가기
  document.getElementById('btnBackFromChallenge').addEventListener('click', () => {
    renderHome();
    showScreen('screen-home');
  });

  // --- 결과 화면 ---

  // 레벨업 팝업 확인 버튼
  document.getElementById('btnCloseLevelup').addEventListener('click', hideLevelUpPopup);

  // "다시 도전" 버튼
  document.getElementById('btnAgain').addEventListener('click', () => {
    hideLevelUpPopup();
    initChallengeScreen();
    showScreen('screen-challenge');
  });

  // "홈으로" 버튼
  document.getElementById('btnGoHome').addEventListener('click', () => {
    hideLevelUpPopup();
    renderHome();
    showScreen('screen-home');
  });

  // --- 기록 화면 ---

  // 기록 화면 뒤로가기
  document.getElementById('btnBackFromHistory').addEventListener('click', () => {
    showScreen('screen-home');
  });

});
