import { Helmet } from "@components";
import Header from "../components/header.js";
import Footer from "../components/footer.js";

export default function EventsPage() {
  return (
    <div className="events-page">
      <Helmet />
      <Header />
      <main>
        <header className="container hero">
          <p>Events</p>
          <h1>Join and meet other SoSy students</h1>
        </header>

        <article className="container annual-events">
          <header>
            <h2>Annual Events</h2>
          </header>
          <section className="annual-events__link-items">
            <a
              className="annual-events__link-item"
              href="https://discord.com/invite/XZUd7amxPq"
            >
              <h3>Frosh</h3>
              <p>The annual first year's kick off week</p>
            </a>
            <a
              className="annual-events__link-item"
              href="https://systemshacks.sfussss.org/"
            >
              <h3>Systems Hacks</h3>
              <p>The SSSS' annual hackathon - new theme every year!</p>
            </a>
            <a
              className="annual-events__link-item"
              href="https://systemsfair.ca/"
            >
              <h3>Systems Fair</h3>
              <p>Job fair in collaboration with the MSESSS and SEESS</p>
            </a>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
