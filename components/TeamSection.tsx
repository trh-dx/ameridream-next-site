const members = [
  { initials: "JW", name: "Jesse Woskowicz",  url: "https://www.teamjessehomeloans.com", red: false },
  { initials: "KS", name: "Kevin Shaw",        url: "http://www.kevinamg.com",            red: true  },
  { initials: "JM", name: "Jacob Mejia",       url: "http://www.jacobamg.com",            red: false },
  { initials: "BH", name: "Brad Hunter",       url: "https://bradamg.com",                red: true  },
  { initials: "SA", name: "Shea Armstrong",    url: "https://sheaamg.com",                red: false },
  { initials: "LR", name: "Leslie Riccitelli", url: "https://leslieamg.com",              red: true  },
  { initials: "ST", name: "Shaley Tate",       url: "https://shaleyamg.com",              red: false },
  { initials: "JM", name: "Jake Martinez",     url: "https://jakeamg.com",                red: true  },
  { initials: "MH", name: "Menda Huddleston",  url: "https://mendaamg.com",               red: false },
];

export default function TeamSection() {
  return (
    <section className="team" id="team">
      <div className="wrap">
        <span className="eyebrow">Meet the team</span>
        <h2 className="sec-title">Real people. Local experts.</h2>
        <p className="sec-sub">
          Our loan originators are based right here in North Texas. They know
          the market, the neighborhoods, and they&apos;re here to help — not
          just to close a deal.
        </p>
        <div className="team-grid">
          {members.map((member) => (
            <a
              key={member.url}
              href={member.url}
              className="team-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`t-av${member.red ? " red" : ""}`}>
                {member.initials}
              </div>
              <div className="t-info">
                <span className="t-name">{member.name}</span>
                <span className="t-role">Loan Originator</span>
              </div>
              <span className="t-arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
