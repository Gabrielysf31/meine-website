# Gemeinsames Hintergrundlicht

Stand: 30.10.2026

Gabriel möchte den warmen, leicht beleuchteten Auftritt auf allen Seiten wiederfinden. Alle Unterseiten verwenden deshalb einen gemeinsamen salbeigrünen und warmen Hintergrundschein im oberen Seitenbereich. Der Schein läuft nach unten weich aus; Bilder und Karten behalten ihre eigenen Farben.

`src/components.mjs` lädt auf Unterseiten `public/assets/ambience.css` und setzt `has-page-ambience` am Hauptinhalt. Dessen Pseudoelement liegt hinter den Inhalten, ist auf die Seitenbreite begrenzt und nimmt keine Zeigerereignisse an. Es gibt keine zusätzlichen Netzwerkdienste, Bilder oder Skripte für den Effekt.

Eine einzelne Einblendung dauert 2,8 Sekunden. Danach bleibt der Hintergrund ruhig. Bei `prefers-reduced-motion: reduce` wird er direkt statisch dargestellt. Auch ohne JavaScript ist er sichtbar. Die mobilen Verläufe sind auf schmale Ansichten abgestimmt. Weil der Effekt nicht dauerhaft läuft, braucht er keine zusätzliche Pausentaste.

Die bisherigen eigenen Lichtflächen von Wissen und Projektplaner wurden durch die gemeinsame Gestaltung ersetzt. Die Startseite behält ihr bereits bestätigtes, bewegtes und pausierbares Lichtspiel mit derselben warmen und grünen Farbfamilie.

Ansichten: [Inspiration Desktop](vorschau/ambiente-inspiration-desktop.png), [Mobil](vorschau/ambiente-inspiration-mobil.png), [Über mich Desktop](vorschau/ambiente-ueber-mich-desktop.png), [Mobil](vorschau/ambiente-ueber-mich-mobil.png), [Wissen Desktop](vorschau/ambiente-wissen-desktop.png), [Mobil](vorschau/ambiente-wissen-mobil.png).
