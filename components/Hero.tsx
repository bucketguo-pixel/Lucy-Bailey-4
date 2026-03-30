"use client";
import Image from "next/image";
import { Container } from "@/components/Container";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="docu-hero relative overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="docu-hero-video h-full w-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="docu-hero-overlay absolute inset-0" />
        <div className="docu-hero-grid absolute inset-0" />
      </div>

      <Container>
        <div
          ref={ref}
          className="relative z-10 grid min-h-[88svh] items-end gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20"
        >
          <div className="max-w-2xl">
            <div className={`docu-fade ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "0s" }}>
              <p className="docu-kicker">A Personal Chapter</p>
            </div>

            <div className={`docu-fade ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "0.08s" }}>
              <h1 className="docu-title">
                Lucy Bailey
              </h1>
            </div>

            <div className={`docu-fade ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "0.16s" }}>
              <p className="docu-role">Beauty Clinic Founder</p>
            </div>

            <div className={`docu-fade ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "0.26s" }}>
              <div className="docu-lines">
                <p>I am learning to build something gently.</p>
                <p>A place that feels calm.</p>
                <p>A place where beauty is not rushed.</p>
                <p>A place where people feel seen, understood, and at ease.</p>
              </div>
            </div>

            <div className={`docu-fade ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "0.42s" }}>
              <p className="docu-note">
                The work matters to me, but so does the life around it.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className={`docu-image-wrap docu-fade ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "0.22s" }}>
              <div className="docu-image-card">
                <Image
                  src="/images/hero-main-new.png"
                  alt="Lucy Bailey portrait"
                  width={900}
                  height={1200}
                  priority
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="docu-caption">
                <span>Portrait</span>
                <span>Lucy Bailey</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
