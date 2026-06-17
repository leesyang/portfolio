import { stack } from "@/lib/data";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={`section-shell ${styles.hero}`} id="top">
      <p className={`eyebrow ${styles.eyebrow}`}>full stack web developer</p>

      <h1 className={styles.title}>
        Software solutions
        <br />
        <span className={styles.accent}>for enterprise challenges.</span>
      </h1>

      <p className={styles.lede}>
        I build software from concept to production. Whether it's front-end, back-end, APIs, 
        or system integrations, I partner with stakeholders and cross-functional teams to 
        deliver solutions that solve real business problems.
      </p>

      <ul className={styles.stack} aria-label="Core stack">
        {stack.map((tech) => (
          <li key={tech} className={styles.chip}>
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
}
