/**
 * Iron-Aura motion layer.
 *
 * Boot sequence (from the design's timestamps):
 *   T+0.00s  arc ring draws, reactor core warms, "INITIALIZING" types
 *   T+0.75s  ring locks (ticks + dotted inner ring), core ignites, "INITIALIZING SYSTEMS..."
 *   T+1.50s  "ALL SYSTEMS ONLINE" + ONLINE chip
 *   T+1.75s  fade → hero; hero intro plays
 *
 * Everything runs only under (prefers-reduced-motion: no-preference). Reduced-motion
 * visitors never see the boot overlay (see the inline script in Layout.astro), and
 * all content is visible without JS.
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const root = document.documentElement;
const EASE = "power3.out";

const $ = <T extends Element = HTMLElement>(sel: string, scope: ParentNode = document) =>
    scope.querySelector<T>(sel);
const $$ = <T extends Element = HTMLElement>(sel: string, scope: ParentNode = document) =>
    [...scope.querySelectorAll<T>(sel)];

/* ------------------------------------------------------------------ boot */

function runBoot(): Promise<void> {
    const boot = $("#boot");
    if (!boot || !root.classList.contains("booting")) return Promise.resolve();

    const part = <T extends Element = HTMLElement>(name: string) => $<T>(`[data-boot="${name}"]`, boot)!;
    const text = part("text");
    const cursor = part("cursor");
    const clock = part("clock");
    const head = part<SVGGElement>("head");

    window.scrollTo(0, 0);

    return new Promise((resolve) => {
        let released = false;
        const release = () => {
            if (released) return;
            released = true;
            try {
                sessionStorage.setItem("iron-aura-booted", "1");
            } catch {}
            resolve();
        };

        const typed = { n: "Initializing".length };
        const target = "Initializing systems...";
        const time = { t: 0 };

        const tl = gsap.timeline({
            defaults: { ease: "power2.out" },
            onComplete() {
                root.classList.remove("booting");
                boot.remove();
                ScrollTrigger.refresh();
            },
        });

        tl.to(time, {
            t: 1.75,
            duration: 1.75,
            ease: "none",
            onUpdate: () => (clock.textContent = `T+${time.t.toFixed(2)}s`),
        }, 0)
            // T+0.00 — arc draws, core warms
            .to(part("arc"), { strokeDashoffset: 0, duration: 0.75, ease: "power2.inOut" }, 0)
            .fromTo(head, { rotation: 0, svgOrigin: "80 80" }, { rotation: 360, svgOrigin: "80 80", duration: 0.75, ease: "power2.inOut" }, 0)
            .to(part("glow"), { scale: 0.7, opacity: 0.6, duration: 0.6 }, 0.1)
            .to(typed, {
                n: target.length,
                duration: 0.4,
                ease: "none",
                onUpdate: () => (text.textContent = target.slice(0, Math.round(typed.n))),
            }, 0.35)
            // T+0.75 — lock-on, ignition
            .to(head, { opacity: 0, duration: 0.15 }, 0.75)
            .to(part("ticks"), { opacity: 1, duration: 0.2 }, 0.75)
            .to(part("dots"), { opacity: 1, duration: 0.3 }, 0.75)
            .to(part("glow"), { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.6)" }, 0.75)
            .to(part("core"), { scale: 1, duration: 0.45, ease: "back.out(2.2)" }, 0.8)
            // T+1.50 — online
            .call(() => {
                text.textContent = "All systems online";
                text.classList.replace("text-arc", "text-gold");
                cursor.style.display = "none";
            }, undefined, 1.5)
            .fromTo(part("online"), { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.25 }, 1.5)
            // T+1.75 — fade → hero
            .call(release, undefined, 1.75)
            .to(boot, { autoAlpha: 0, duration: 0.55, ease: "power2.inOut" }, 1.75);

        const skip = () => tl.progress(1);
        part("skip").addEventListener("click", skip);
        document.addEventListener("keydown", (e) => e.key === "Escape" && skip(), { once: true });
    });
}

/* ------------------------------------------------------------------ hero */

function heroIntro() {
    const q = (name: string) => $$(`[data-hero="${name}"]`);
    gsap.timeline({ defaults: { ease: EASE, duration: 0.8 } })
        .from(q("portrait"), { autoAlpha: 0, scale: 0.85, duration: 1.1 }, 0)
        .from(q("chip"), { autoAlpha: 0, y: 12 }, 0.1)
        .from(q("line"), { autoAlpha: 0, yPercent: 110, stagger: 0.12, duration: 0.9 }, 0.2)
        .from(q("role"), { autoAlpha: 0, x: -16 }, 0.5)
        .from(q("copy"), { autoAlpha: 0, y: 12 }, 0.6)
        .from(q("cta"), { autoAlpha: 0, y: 14, stagger: 0.08 }, 0.7)
        .from(q("stats"), { autoAlpha: 0, y: 10 }, 0.85);

    // Portrait drifts slower than the page as the hero scrolls away.
    gsap.to("[data-parallax]", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: { trigger: "#top", start: "top top", end: "bottom top", scrub: true },
    });
}

/* --------------------------------------------------------------- reveals */

const enter = (trigger: Element, start = "top 82%") => ({ trigger, start, once: true });

function sectionHeaders() {
    $$("[data-section-header]").forEach((header) => {
        gsap.timeline({ scrollTrigger: enter(header, "top 85%"), defaults: { ease: EASE } })
            .fromTo($("[data-reveal='label']", header), { autoAlpha: 0, x: -12 }, { autoAlpha: 1, x: 0, duration: 0.5 })
            .fromTo($("[data-reveal='rule']", header), { autoAlpha: 1, scaleX: 0 }, { scaleX: 1, duration: 0.9, ease: "power2.inOut" }, 0.1)
            .fromTo($("[data-reveal='title']", header), { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.7 }, 0.15);
    });

    $$("[data-reveal='fade']").forEach((el) =>
        gsap.fromTo(el, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: EASE, scrollTrigger: enter(el, "top 88%") }),
    );
}

/** "Modules loading" — cards pop in with a short stagger. */
const loadModules = (cards: Element[], delay = 0) =>
    gsap.from(cards, { autoAlpha: 0, y: 14, scale: 0.97, duration: 0.45, stagger: 0.045, delay, ease: EASE });

function arsenal() {
    const first = $("[data-skill-panel]:not([hidden])");
    if (first) {
        ScrollTrigger.create({ ...enter(first, "top 85%"), onEnter: () => loadModules($$("[data-skill-card]", first), 0.15) });
    }
    document.addEventListener("arsenal:shown", (e) => loadModules($$("[data-skill-card]", e.target as Element)));
}

function builds() {
    const featured = $$("#builds [data-build-card]").filter((el) => !el.closest("[hidden]"));
    ScrollTrigger.batch(featured, {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
            gsap.from(batch, { autoAlpha: 0, y: 40, duration: 0.8, stagger: 0.12, ease: EASE }),
    });

    document.addEventListener("builds:expanded", (e) => {
        gsap.from($$("[data-build-card]", e.target as Element), { autoAlpha: 0, y: 24, duration: 0.5, stagger: 0.05, ease: EASE });
        ScrollTrigger.refresh();
    });

    // Scanner ring on the contract-graph visual.
    gsap.to("[data-scan-ring]", { rotation: 360, svgOrigin: "120 38", duration: 8, ease: "none", repeat: -1 });
}

function missionLog() {
    const timeline = $("[data-timeline]");
    if (!timeline) return;

    // Rail fills as you read down the record.
    gsap.fromTo("[data-timeline-fill]", { scaleY: 0 }, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: { trigger: timeline, start: "top 70%", end: "bottom 70%", scrub: 0.4 },
    });

    $$("[data-mission]").forEach((item, i) => {
        gsap.timeline({ scrollTrigger: enter(item, "top 80%"), defaults: { ease: EASE } })
            .from($("[data-node]", item), { scale: 0, duration: 0.4, ease: "back.out(3)" })
            .from([...item.children].filter((c) => !c.hasAttribute("data-node")), {
                autoAlpha: 0,
                x: i === 0 ? 0 : 24,
                y: i === 0 ? 30 : 0,
                duration: 0.7,
                stagger: 0.08,
            }, 0.1);
    });

    // Lead mission node keeps a slow reactor pulse.
    gsap.to("[data-mission]:first-child [data-node]", {
        boxShadow: "0 0 22px 6px rgb(179 18 26 / 0.65)",
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
    });
}

const drawTraces = (scope: ParentNode) =>
    gsap.fromTo($$("[data-trace]", scope), { strokeDasharray: 1, strokeDashoffset: 1 }, {
        strokeDashoffset: 0,
        duration: 1.1,
        stagger: 0.12,
        ease: "power1.inOut",
    });

function transmissions() {
    const list = $("#transmissions ul");
    if (!list) return;
    const visible = () => $$("[data-transmission]", list).filter((el) => !el.hidden);

    ScrollTrigger.create({
        ...enter(list),
        onEnter: () => {
            gsap.from(visible(), { autoAlpha: 0, y: 32, duration: 0.7, stagger: 0.12, ease: EASE });
            drawTraces(list);
        },
    });

    document.addEventListener("transmissions:expanded", () => {
        const archived = $$('[data-transmission="archive"]');
        gsap.from(archived, { autoAlpha: 0, y: 24, duration: 0.5, stagger: 0.06, ease: EASE });
        archived.forEach((el) => drawTraces(el));
        ScrollTrigger.refresh();
    });
}

function channel() {
    const terminal = $("[data-terminal]");
    if (!terminal) return;
    gsap.timeline({ scrollTrigger: enter(terminal), defaults: { ease: EASE } })
        .from(terminal, { autoAlpha: 0, scaleY: 0.9, transformOrigin: "50% 0%", duration: 0.6 })
        .from($$("form > label, form > div:not([aria-hidden])", terminal), { autoAlpha: 0, y: 12, duration: 0.45, stagger: 0.07 }, 0.3)
        .from("#channel aside", { autoAlpha: 0, x: 30, duration: 0.7 }, 0.15);
}

/* ------------------------------------------------------------------ init */

const mm = gsap.matchMedia();

mm.add("(prefers-reduced-motion: no-preference)", () => {
    root.classList.add("motion-ok");

    runBoot().then(heroIntro);
    sectionHeaders();
    arsenal();
    builds();
    missionLog();
    transmissions();
    channel();

    // Ensure trigger positions are right once fonts/images settle.
    window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });

    return () => root.classList.remove("motion-ok");
});

mm.add("(prefers-reduced-motion: reduce)", () => {
    // Covers a live switch to reduced motion: drop the overlay, show everything.
    root.classList.remove("motion-ok", "booting");
    $("#boot")?.remove();
});
