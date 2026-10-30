import { escape, icon, button } from "./components.mjs";
import { serviceDetails } from "./service-details.mjs";
import { serviceIllustration } from "./service-illustrations.mjs";

export function renderServicePage(service, figure, services) {
  const details = serviceDetails[service.slug];
  if (details?.length !== service.details.length) throw new Error(`Leistungsinhalte fehlen: ${service.slug}`);
  return `<section class="page-intro container service-intro">
    <nav class="service-breadcrumb" aria-label="Brotkrumennavigation"><a href="/leistungen/">Leistungen</a><span aria-hidden="true">/</span><span aria-current="page">${escape(service.label)}</span></nav>
    <h1>${escape(service.intro)}</h1><p class="intro-copy">${escape(service.description)}</p>
  </section>
  <div class="container">${figure(service.visual, "service-figure")}</div>
  <nav class="container service-contents" aria-label="Auf dieser Leistungsseite"><p>Auf dieser Seite</p><ol>${details.map((detail, i) => `<li><a href="#${detail.id}"><span>${String(i + 1).padStart(2, "0")}</span>${escape(service.details[i][0])}${icon("arrow")}</a></li>`).join("")}</ol></nav>
  <div class="container service-chapters">${details.map((detail, i) => `<section class="service-chapter" id="${detail.id}" aria-labelledby="${detail.id}-heading"><div class="service-chapter-copy"><p class="number-label">${String(i + 1).padStart(2, "0")} / ${escape(service.label)}</p><h2 id="${detail.id}-heading">${escape(service.details[i][0])}</h2><p class="service-chapter-lead">${escape(service.details[i][1])}</p><p>${escape(detail.body)}</p><h3>Das gehört zur Planung</h3><ul>${detail.points.map(point => `<li>${escape(point)}</li>`).join("")}</ul></div><div class="service-chapter-visual">${serviceIllustration(detail)}<aside class="service-example"><h3>Ein Beispiel aus dem Alltag</h3><p>${escape(detail.example)}</p></aside></div></section>`).join("")}</div>
  <section class="container service-wrap-up" aria-labelledby="service-prepare-heading"><div class="preparation-note"><span class="feature-icon">${icon("chat")}</span><div><h2 id="service-prepare-heading">Was du schon mitbringen kannst</h2><p>${escape(service.prepare)}</p></div></div><p class="section-footnote">Geplanter Themenbereich im privaten Zukunftsentwurf. Noch kein buchbares Leistungsangebot. Die Darstellungen erklären Planungsideen und zeigen keine ausgeführten Kundenprojekte.</p>
  ${service.slug === "smart-home" ? button("Lichtstimmungen selbst ausprobieren", "/smart-home/", true) : service.slug === "energie" ? `<a class="text-link service-related-link" href="/leistungen/photovoltaik/">Mehr zur Photovoltaik${icon("arrow")}</a>` : ""}
  </section>
  <nav class="container service-other-pages" aria-label="Weitere Leistungen"><a class="text-link" href="/leistungen/">${icon("arrow", "back-arrow")}Alle Leistungen</a><p>Weitere Themen für dein Zuhause</p><div>${services.filter(other => other.slug !== service.slug).map(other => `<a href="/leistungen/${other.slug}/">${escape(other.label)}${icon("diagonal")}</a>`).join("")}</div></nav>`;
}
