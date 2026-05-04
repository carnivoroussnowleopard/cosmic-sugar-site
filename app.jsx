const { useMemo } = React;

const systemLogs = [
  "[PRISM BARRIER STATUS: STABLE]",
  "[EMOTIONAL EXTRACTION RATE: OPTIMAL]",
  "[RETIREMENT FILE: ACCESS DENIED]",
];

const districts = [
  { name: "Pink District", desc: "주거와 교육을 위한 안전한 공간", tone: "pink" },
  { name: "Cyan District", desc: "훈련과 상업이 공존하는 활기찬 구역", tone: "cyan" },
  { name: "Silver District", desc: "SHI의 행정과 방송 중심지", tone: "silver" },
  { name: "Black District", desc: "유지보수 중. 접근 금지", tone: "black", locked: true },
];

const departments = ["CON", "MAR", "RND", "SPE"];
const hiddenDepartments = ["DEF", "VOD", "NEU", "LUNA CELL"];

const characters = [
  ["EXE-01", "Candice", "CON", "오늘도 아주 잘하고 있어요.", "미소 유지율: 100%"],
  ["MKT-09", "Berry", "MAR", "시민 감정 지표는 언제나 안정적이에요.", "핑크 입자 과다 감지"],
  ["RND-11", "Stitch", "RND", "측정되지 않는 불안은 존재하지 않습니다.", "퇴직자 파일 접근 권한: 제한됨"],
  ["SPE-04", "Kiri", "SPE", "Black District는 승인된 인원만 이동 가능합니다.", "WARNING LINE: CYAN NOISE"],
];

function Section({ title, subtitle, children }) {
  return (
    <section className="section glass">
      <div className="section-head">
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}

function App() {
  const todayMissionId = useMemo(() => `MIS-${Math.floor(Math.random() * 900 + 100)}`, []);

  return (
    <main>
      <header className="hero">
        <div>
          <p className="label">SUGAR HIGH INDUSTRIES</p>
          <h1>당신의 내일을 지키는 가장 달콤한 방벽</h1>
          <p className="lead">Welcome to Sugar High Industries. 오늘도 안전하고 달콤한 하루를 보내세요.</p>
          <div className="cta-row">
            <button>입사 안내 보기</button>
            <button>캔디 복용 규정 확인</button>
            <button className="warn">퇴직자 조회 · 권한 없음</button>
          </div>
        </div>
        <aside className="hero-card glass">
          <h3>Daily System</h3>
          <p>Mission ID: {todayMissionId}</p>
          <p>Candy Timer: 02:13:44</p>
          <p>Mood Stabilization: ACTIVE</p>
          <small>*휴식은 추출률 감소를 의미하지 않습니다.</small>
        </aside>
      </header>

      <Section title="SHI 소개" subtitle="인류 최후의 안전지대, Prism Barrier 운영 기관">
        <p>SHI는 Prism Barrier를 통해 외부 위협으로부터 시민을 보호합니다. 모든 마법소녀는 충분히 쉬고 있습니다.</p>
        <div className="log-row">{systemLogs.map((log) => <code key={log}>{log}</code>)}</div>
      </Section>

      <Section title="Candy System" subtitle="복지처럼 보이지만 정확한 시간 관리가 필요한 시스템">
        <div className="grid four">
          {["Candy Timer", "Sanity Support", "Mood Stabilization", "Extraction Compatibility"].map((s) => (
            <article key={s} className="tile"><strong>{s}</strong></article>
          ))}
        </div>
        <p className="small">복용을 잊어도 걱정하지 마세요. 12시간 후부터 담당 매니저가 자동으로 확인합니다.</p>
      </Section>

      <Section title="District System">
        <div className="grid four">
          {districts.map((d) => (
            <article key={d.name} className={`district ${d.tone} ${d.locked ? "locked" : ""}`}>
              <h3>{d.name}</h3>
              <p>{d.desc}</p>
              {d.locked && <span>ACCESS DENIED</span>}
            </article>
          ))}
        </div>
      </Section>

      <Section title="Departments" subtitle="공식 부서와 감춰진 코드">
        <div className="pill-row">{departments.map((d) => <span key={d} className="pill">{d}</span>)}</div>
        <div className="pill-row hidden">{hiddenDepartments.map((d) => <span key={d} className="pill">{d}</span>)}</div>
      </Section>

      <Section title="Character Preview">
        <div className="grid two">
          {characters.map(([code, name, dept, line, hidden]) => (
            <article key={code} className="char">
              <p className="mono">[{code}]</p>
              <h3>{name}</h3>
              <p>{dept}</p>
              <p>“{line}”</p>
              <small>{hidden}</small>
            </article>
          ))}
        </div>
      </Section>

      <section className="glitch">
        <p>Everything is sweet. Everything is safe. Everything is—</p>
        <h2>WHO ARE THE HOLLOWS?</h2>
        <p>오늘도 안전한 하루를 보내세요!</p>
      </section>

      <Section title="Opening Scenario">
        <div className="grid three">
          {[
            ["신규 입사자", "난이도: 낮음 · 시작: Pink-1"],
            ["기억 손상 직원", "난이도: 중간 · 시작: Silver-2"],
            ["Luna Cell 접촉자", "난이도: 높음 · 시작: Cyan-3"],
          ].map(([title, meta]) => (
            <article key={title} className="tile">
              <h3>{title}</h3>
              <p>{meta}</p>
            </article>
          ))}
        </div>
      </Section>

      <footer>
        <p>Sugar High Industries protects everyone.</p>
        <p>퇴직자 관련 문의는 담당 매니저를 통해 접수해주세요. Black District 접근은 승인된 인원에 한해 가능합니다.</p>
        <p className="mono">CANDY INTAKE REMINDER: REQUIRED</p>
      </footer>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
