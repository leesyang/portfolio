import Image from "next/image";
import { profileImage } from "@/lib/data";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={`section-shell ${styles.section}`} id="about">
      <p className="eyebrow">about</p>

      <div className={styles.grid}>
        {/* The signature: bio rendered as an open file in a code editor. */}
        <div className={styles.editor}>
          <div className={styles.chrome}>
            <span className={styles.dots} aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className={styles.filename}>bio.md</span>
          </div>

          <pre className={styles.code}>
            <code>
              <span className={styles.ln} data-ln="1" />
              <span className={styles.h1}># Lee Yang</span>
              {"\n"}
              <span className={styles.ln} data-ln="2" />
              {"\n"}
              <span className={styles.ln} data-ln="3" />
              <span className={styles.text}>
                Experienced web developer with a passion for building great
                applications with clean, re-usable code. I work across back-end
                and front-end, and I love taking a project from start to finish.
              </span>
              {"\n"}
              <span className={styles.ln} data-ln="4" />
              {"\n"}
              <span className={styles.ln} data-ln="5" />
              <span className={styles.text}>
                There&apos;s something beautiful about code that isn&apos;t just
                functional, but DRY, efficient, and well-formatted.
              </span>
              {"\n"}
              <span className={styles.ln} data-ln="6" />
              {"\n"}
              <span className={styles.ln} data-ln="7" />
              <span className={styles.comment}>
                {"// currently fueled by Journey Coffee, Vacaville CA"}
              </span>
              {"\n"}
              <span className={styles.ln} data-ln="8" />
              <span className={styles.comment}>
                {"// status: open to building good things"}
              </span>
              <span className={styles.caret} aria-hidden="true" />
            </code>
          </pre>
        </div>

        <figure className={styles.portrait}>
          <Image
            src={profileImage}
            alt="Lee Yang"
            width={420}
            height={420}
            className={styles.photo}
          />
          <figcaption className={styles.cap}>Lee Yang</figcaption>
        </figure>
      </div>
    </section>
  );
}
