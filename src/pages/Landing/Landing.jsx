import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

const photo = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const NAV = [
  { href: "#school", label: "School" },
  { href: "#programmes", label: "Programmes" },
  { href: "#term", label: "This term" },
  { href: "#visit", label: "Visit" },
];

const PROGRAMMES = [
  {
    name: "Nursery",
    ages: "Ages 2–5",
    text: "Songs, stories, and a short day that still feels unhurried.",
    image: photo("photo-1588072432836-e10032774350", 1000),
  },
  {
    name: "Basic School",
    ages: "Ages 6–11",
    text: "Reading every morning. Mathematics that is practised, not rushed.",
    image: photo("photo-1503676260728-1c00da094a0b", 1000),
  },
  {
    name: "Senior School",
    ages: "Ages 12–17",
    text: "Sciences, arts, and a tutor who tracks each student’s next step.",
    image: photo("photo-1523240795612-9a054b0db644", 1000),
  },
  {
    name: "Saturday Studio",
    ages: "All ages",
    text: "Music, coding, and debate for learners who want more than the timetable.",
    image: photo("photo-1513258496099-48168024aec0", 1000),
  },
];

const NOTICES = [
  { date: "12 Jan", title: "Resumption", text: "Second term begins. Gates open at 7:15am." },
  { date: "2 Feb", title: "Open morning", text: "Parents of new families walk the campus from 9am." },
  { date: "21 Mar", title: "Inter-house", text: "Athletics on the back field. Spectators welcome." },
];

export default function Landing() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    document.title = "Leadway Academic";
    const id = "lwa-fonts";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,520;9..144,650&family=Manrope:wght@400;500;600;700&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  const close = () => setMenu(false);

  return (
    <div className="lwa">
      <header className="lwa-nav">
        <a className="lwa-brand" href="#top" onClick={close}>
          <i />
          Leadway Academic
        </a>
        <nav className={menu ? "open" : ""}>
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={close}>{item.label}</a>
          ))}
          <button type="button" onClick={() => navigate("/login")}>Portal</button>
        </nav>
        <button
          type="button"
          className="lwa-menu"
          aria-label={menu ? "Close menu" : "Open menu"}
          onClick={() => setMenu((v) => !v)}
        >
          <span />
          <span />
        </button>
      </header>

      <main id="top">
        <section className="lwa-hero">
          <div className="lwa-hero-copy">
            
            <h1>Lead the way, then bring someone with you.</h1>
            <span>
              Leadway Academic teaches nursery through senior school. The work is serious.
              The campus is calm. Families are kept in the conversation.
            </span>
            <div className="lwa-actions">
              <a href="#visit">Book a visit</a>
              <a className="ghost" href="#programmes">See programmes</a>
            </div>
          </div>
          <div className="lwa-hero-photos">
            <img src={photo("photo-1427504494785-3a9ca7044f45", 1400)} alt="Students crossing the school grounds" />
            <img src={photo("photo-1577896851231-70ef18881754", 800)} alt="A class during a morning lesson" />
            <img src={photo("photo-1524995997946-a1c2e315a42f", 800)} alt="The school library" />
          </div>
        </section>

        <section className="lwa-ribbon" aria-label="What the school stands for">
          <p>Character</p>
          <p>Clear teaching</p>
          <p>Small classes</p>
          <p>Parent notes</p>
          <p>Sport every week</p>
        </section>

        <section className="lwa-school" id="school">
          <img src={photo("photo-1509062522246-3755977927d7", 1200)} alt="A teacher with a group of students" />
          <div>
            <p className="lwa-kicker">The school</p>
            <h2>A green campus in Maitama, built for a full school day.</h2>
            <p>
              Leadway opened so families in Abuja could have a school that is close, orderly, and plain about what children are learning.
              Lessons start on time. Homework is marked. The Friday note tells you what happened, not only what is coming.
            </p>
            <div className="lwa-figures">
              <div><strong>2006</strong><span>Opened</span></div>
              <div><strong>860</strong><span>Students</span></div>
              <div><strong>16</strong><span>In a senior class</span></div>
            </div>
          </div>
        </section>

        <section className="lwa-programmes" id="programmes">
          <div className="lwa-head">
            <p className="lwa-kicker">Programmes</p>
            <h2>Four ways to be here.</h2>
          </div>
          <div className="lwa-grid">
            {PROGRAMMES.map((item) => (
              <article key={item.name}>
                <img src={item.image} alt="" />
                <div>
                  <span>{item.ages}</span>
                  <h3>{item.name}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="lwa-term" id="term">
          <div className="lwa-head light">
            <p className="lwa-kicker">This term</p>
            <h2>Dates families should keep.</h2>
          </div>
          <div>
            {NOTICES.map((item) => (
              <article key={item.title}>
                <time>{item.date}</time>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="lwa-quote">
          <img src={photo("photo-1541339907198-e08756dedf3f", 1600)} alt="Students crossing the college grounds" />
          <blockquote>
            <p>“They left able to write a clean essay and sit with a hard question.”</p>
            <cite>Speech day, senior school</cite>
          </blockquote>
        </section>

        <section className="lwa-visit" id="visit">
          <div>
            <p className="lwa-kicker">Visit</p>
            <h2>Come on a Thursday morning.</h2>
            <p>
              Tours last forty minutes and end in the nursery yard or the senior library, depending on the child.
              Tell us the year group when you write.
            </p>
            <div className="lwa-actions">
              <button type="button" onClick={() => navigate("/contact")}>Write to admissions</button>
              <button type="button" className="ghost" onClick={() => navigate("/login")}>Parent portal</button>
            </div>
          </div>
          <address>
            <strong>14 Gana Street, Maitama, Abuja</strong>
            <span>Monday to Friday, 7:30am – 3:30pm</span>
            <a href="tel:+23494612200">+234 9 461 2200</a>
            <a href="mailto:hello@leadwayacademic.edu.ng">hello@leadwayacademic.edu.ng</a>
          </address>
        </section>
      </main>

      <footer className="lwa-foot">
        <strong>Leadway Academic</strong>
        <p>Nursery, basic, and senior school in Maitama.</p>
        <a href="#programmes">Programmes</a>
        <button type="button" onClick={() => navigate("/contact")}>Contact</button>
      </footer>
    </div>
  );
}
