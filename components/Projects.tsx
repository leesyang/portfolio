import Image from "next/image";
import { projects } from "@/lib/data";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section className={`section-shell ${styles.section}`} id="work">
      <div className={styles.head}>
        <p className="eyebrow">selected work</p>
        <h2 className={styles.heading}>Three things I&apos;ve made.</h2>
      </div>

      <ol className={styles.list}>
        {projects.map((p, i) => (
          <li key={p.name} className={styles.card}>
            <div className={styles.media}>
              <Image
                src={p.image}
                alt={p.alt}
                fill
                sizes="(max-width: 760px) 100vw, 46vw"
                className={styles.img}
              />
            </div>

            <div className={styles.body}>
              <p className={styles.index}>
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.blurb}>{p.blurb}</p>
              {p.note && <p className={styles.note}>{p.note}</p>}

              <ul className={styles.tags} aria-label="Built with">
                {p.tags.map((t) => (
                  <li key={t} className={styles.tag}>
                    {t}
                  </li>
                ))}
              </ul>

              <div className={styles.links}>
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {l.label}
                    <span aria-hidden="true" className={styles.arrow}>
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
