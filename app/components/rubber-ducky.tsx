"use client";

import { useEffect, useRef, useState } from "react";
import DuckSvg from "./duck-svg";
import styles from "./rubber-ducky.module.css";

export default function RubberDucky() {
  const quackRef = useRef<HTMLAudioElement | null>(null);
  const [squeezes, setSqueezes] = useState(0);

  useEffect(() => {
    const audio = new Audio("/quack.mp3");
    audio.preload = "auto";
    quackRef.current = audio;
  }, []);

  function squeeze() {
    const base = quackRef.current;
    if (base) {
      // Clone so rapid clicks overlap instead of cutting each other off
      const quack = base.cloneNode() as HTMLAudioElement;
      quack.play().catch(() => {});
    }
    setSqueezes((n) => n + 1);
  }

  return (
    <div className={styles.ducky}>
      {/* Changing the key remounts the duck so the squish animation replays on every click */}
      <div
        key={squeezes}
        className={squeezes > 0 ? `${styles.duck} ${styles.squished}` : styles.duck}
      >
        <DuckSvg className={styles.duckSvg} />
      </div>

      <button type="button" className={styles.button} onClick={squeeze}>
        Squeeze Me
      </button>
    </div>
  );
}
