import { useEffect } from "react";

export function MotionEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main > section:not(.hero), .benefits-list article",
      ),
    );
    const floatTargets = Array.from(
      document.querySelectorAll<HTMLElement>(".about-story-visual, .app-install"),
    );
    const premiumTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".place-card, .about-features article, .about-features > a, .benefits-list article, .contact-card, .app-notification, .offer-mini-card, .brand-roles article, .partner-action",
      ),
    );

    root.classList.add("motion-enabled");

    const updateViewportHeight = () => {
      root.style.setProperty("--desktop-viewport-height", `${window.innerHeight}px`);
      const header = document.querySelector<HTMLElement>(".site-header");
      if (header) {
        root.style.setProperty("--desktop-header-height", `${header.offsetHeight}px`);
      }
    };
    updateViewportHeight();

    revealTargets.forEach((element, index) => {
      element.classList.add("reveal-item");
      element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`);
    });
    floatTargets.forEach((element) => element.classList.add("motion-float"));
    premiumTargets.forEach((element) => element.classList.add("premium-hover"));

    const onPointerMove = (event: PointerEvent) => {
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>(".premium-hover");
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      target.style.setProperty("--pointer-x", `${x.toFixed(1)}%`);
      target.style.setProperty("--pointer-y", `${y.toFixed(1)}%`);
    };

    const onPointerLeave = (event: PointerEvent) => {
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>(".premium-hover");
      target?.style.removeProperty("--pointer-x");
      target?.style.removeProperty("--pointer-y");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );

    revealTargets.forEach((element) => observer.observe(element));

    let frame = 0;
    const scrollRoot = document.querySelector<HTMLElement>("main");
    const updateFloat = () => {
      frame = 0;
      const viewportCenter = window.innerHeight / 2;

      floatTargets.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const shift = Math.max(-16, Math.min(16, (viewportCenter - elementCenter) * 0.035));
        element.style.setProperty("--motion-shift", `${shift.toFixed(2)}px`);
      });
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateFloat);
    };

    updateFloat();
    scrollRoot?.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("resize", updateViewportHeight);
    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerout", onPointerLeave, { passive: true });

    return () => {
      observer.disconnect();
      scrollRoot?.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("resize", updateViewportHeight);
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerout", onPointerLeave);
      if (frame) window.cancelAnimationFrame(frame);
      root.style.removeProperty("--desktop-viewport-height");
      root.style.removeProperty("--desktop-header-height");
      root.classList.remove("motion-enabled");
    };
  }, []);

  return null;
}
