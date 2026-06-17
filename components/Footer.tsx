import { email, resumeUrl, socials } from "@/lib/data";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={`section-shell ${styles.inner}`}>
        <p className="eyebrow">contact</p>

        <div className={styles.actions}>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resume}
          >
            Download résumé
            <span aria-hidden="true"> ↗</span>
          </a>

          <ul className={styles.socials}>
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className={styles.colophon}>
          © {new Date().getFullYear()} Lee Yang — rebuilt with Next.js &amp;
          TypeScript.
        </p>
      </div>
    </footer>
  );
}
