import styles from "./Nav.module.css";

const links = [
  { label: "work", href: "#work" },
  { label: "about", href: "#about" },
  { label: "contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className={styles.bar}>
      <div className={`section-shell ${styles.inner}`}>
        <a href="#top" className={styles.brand}>
          lee yang<span className={styles.cursor}>_</span>
        </a>
        <nav aria-label="Primary">
          <ul className={styles.links}>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={styles.link}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
