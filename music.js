(function () {
  const track = "sweet-prism-parade.wav";
  const lyrics = `[Intro]
Sugar! Sugar! Prism go!
One, two, smile and glow!
Candy! Candy! Here we go!
Sweet Prism Parade!

[Verse 1]
ピンクのベルが鳴ったら
リボンをきゅっと結んで
今日もハートをチャージして
空までジャンプしよう

きらきら ショーウィンドウ
映るわたしに wink and wave
ちょっと怖い影だって
スプーンで混ぜちゃえば okay

[Pre-Chorus]
ねえ ほしがる夢なら
ほしになるまで届けよう
胸のライトを集めたら
明日はもっと bright

[Chorus]
Sweet! Sweet! Prism Parade
Smile, smile, never fade
きみの夢も ぼくの愛も
全部 light up, save the day

Sweet! Sweet! Sugar Parade
Pray, pray, do not stray
甘い魔法で守るから
Stay cute, stay true, stay bright

La la, love and light
La la, lie so bright
La la, high and higher
Candy hearts never tire

[Verse 2]
ガラスの空の下で
パレードは止まらない
昨日の席に咲いた花
「またね」って手を振った

くるくる メリーゴーランド
IDOL, idle, smile again
迷子の声が聞こえても
チャイムに変えたら okay

[Bridge]
슈카리-라, 프리즈마야
미라 미라, 호시나
루마 루마, nameless light
Hush now, hush now, keep it bright

만약 종이 멈춰버리면
진짜 소리가 들릴까
만약 꿈에서 깨어난다면
나는 어디로 가게 될까

그래도 괜찮아
웃으며 변신해서
눈물은 별로 바뀔 테니까
자, 한 번 더!

[Final Chorus]
Sweet! Sweet! Prism Parade
Smile, smile, never fade
너의 꿈도 나의 사랑도
전부 light up, save the day

Sweet! Sweet! Sugar Parade
Pray, pray, do not stray
닫힌 하늘이어도 날 수 있으니까
Stay cute, stay true, stay bright

Sweet! Sweet! Prism Parade
Round and round, we never fade
이름 같은 건 잊어버려도
Our hearts will keep the light

[Outro]
슈가! 슈가! 프리즘 고!
원, 투, 웃으며 빛나!
캔디! 캔디! Here we go!
Sweet Prism Parade!`;

  const style = document.createElement("style");
  style.textContent = `
    .shi-music-player {
      position: fixed;
      left: 18px;
      right: 18px;
      bottom: 16px;
      z-index: 80;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      max-width: 760px;
      margin-inline: auto;
      border: 1px solid rgba(255, 112, 184, .34);
      border-radius: 8px;
      padding: 10px 12px;
      color: #271932;
      background: rgba(255, 249, 253, .86);
      box-shadow: 0 18px 46px rgba(98, 45, 91, .22);
      backdrop-filter: blur(16px);
      font-family: "PyeongchangPeace", "Pretendard", "Noto Sans KR", system-ui, sans-serif;
    }
    .shi-music-player strong {
      display: block;
      font-size: 13px;
      font-weight: 700;
      line-height: 1.2;
    }
    .shi-music-player small {
      display: block;
      margin-top: 3px;
      color: #735d79;
      font-family: "SFMono-Regular", Consolas, monospace;
      font-size: 10px;
    }
    .shi-music-actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: 8px;
    }
    .shi-music-actions button {
      min-height: 34px;
      border: 1px solid rgba(79, 32, 82, .14);
      border-radius: 999px;
      padding: 0 12px;
      color: #271932;
      background: rgba(255, 255, 255, .82);
      font: 700 12px "PyeongchangPeace", system-ui, sans-serif;
      cursor: pointer;
    }
    .shi-music-actions button.primary {
      color: #fff;
      border-color: rgba(217, 54, 84, .25);
      background: linear-gradient(135deg, #ff70b8, #d93654);
    }
    .shi-lyrics {
      position: fixed;
      inset: 0;
      z-index: 90;
      display: none;
      place-items: center;
      padding: 22px;
      background: rgba(255, 249, 253, .78);
      backdrop-filter: blur(14px);
    }
    .shi-lyrics.open { display: grid; }
    .shi-lyrics-card {
      width: min(760px, 100%);
      max-height: min(760px, 86vh);
      overflow: auto;
      border: 1px solid rgba(255, 112, 184, .28);
      border-radius: 8px;
      padding: 20px;
      background: rgba(255, 255, 255, .92);
      box-shadow: 0 24px 70px rgba(98, 45, 91, .2);
    }
    .shi-lyrics-card h2 {
      margin: 0 0 12px;
      color: #d93654;
      font: 700 28px "PyeongchangPeace", system-ui, sans-serif;
      letter-spacing: 0;
    }
    .shi-lyrics-card pre {
      white-space: pre-wrap;
      margin: 0;
      color: #5f4b64;
      font: 300 14px/1.72 "PyeongchangPeace", "Noto Sans KR", sans-serif;
    }
    .shi-lyrics-top {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 12px;
    }
    .shi-lyrics-top button {
      height: 34px;
      border: 1px solid rgba(79, 32, 82, .14);
      border-radius: 999px;
      padding: 0 12px;
      background: rgba(255, 255, 255, .82);
      font: 700 12px "PyeongchangPeace", system-ui, sans-serif;
      cursor: pointer;
    }
    @media (max-width: 560px) {
      .shi-music-player {
        align-items: stretch;
        flex-direction: column;
      }
      .shi-music-actions {
        justify-content: flex-start;
      }
    }
  `;
  document.head.appendChild(style);

  const audio = document.createElement("audio");
  audio.src = track;
  audio.loop = true;
  audio.preload = "auto";
  audio.autoplay = true;
  audio.volume = 0.48;
  document.body.appendChild(audio);

  const player = document.createElement("aside");
  player.className = "shi-music-player";
  player.innerHTML = `
    <div>
      <strong>Sweet Prism Parade</strong>
      <small id="shiMusicStatus">AUTO PLAY REQUESTED</small>
    </div>
    <div class="shi-music-actions">
      <button class="primary" type="button" id="shiMusicPlay">재생</button>
      <button type="button" id="shiMusicMute">음소거</button>
      <button type="button" id="shiLyricsOpen">가사</button>
    </div>
  `;
  document.body.appendChild(player);

  const lyricsLayer = document.createElement("div");
  lyricsLayer.className = "shi-lyrics";
  lyricsLayer.innerHTML = `
    <section class="shi-lyrics-card" role="dialog" aria-modal="true" aria-label="Sweet Prism Parade lyrics">
      <div class="shi-lyrics-top">
        <h2>Sweet Prism Parade</h2>
        <button type="button" id="shiLyricsClose">닫기</button>
      </div>
      <pre></pre>
    </section>
  `;
  lyricsLayer.querySelector("pre").textContent = lyrics;
  document.body.appendChild(lyricsLayer);

  const status = document.getElementById("shiMusicStatus");
  const playButton = document.getElementById("shiMusicPlay");
  const muteButton = document.getElementById("shiMusicMute");
  const lyricsOpen = document.getElementById("shiLyricsOpen");
  const lyricsClose = document.getElementById("shiLyricsClose");

  function updateStatus(text) {
    status.textContent = text;
  }

  function syncButtons() {
    playButton.textContent = audio.paused ? "재생" : "일시정지";
    muteButton.textContent = audio.muted ? "음소거 해제" : "음소거";
  }

  function tryPlay() {
    audio.play()
      .then(() => {
        updateStatus("PLAYING / CANDY PARADE ACTIVE");
        syncButtons();
      })
      .catch(() => {
        updateStatus("BROWSER BLOCKED AUTOPLAY / TAP PLAY");
        syncButtons();
      });
  }

  playButton.addEventListener("click", () => {
    if (audio.paused) {
      tryPlay();
    } else {
      audio.pause();
      updateStatus("PAUSED");
      syncButtons();
    }
  });

  muteButton.addEventListener("click", () => {
    audio.muted = !audio.muted;
    syncButtons();
  });

  lyricsOpen.addEventListener("click", () => {
    lyricsLayer.classList.add("open");
  });

  lyricsClose.addEventListener("click", () => {
    lyricsLayer.classList.remove("open");
  });

  lyricsLayer.addEventListener("click", (event) => {
    if (event.target === lyricsLayer) lyricsLayer.classList.remove("open");
  });

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && audio.paused) syncButtons();
  });

  syncButtons();
  window.addEventListener("load", tryPlay, { once: true });
})();
