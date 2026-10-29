# Technikmotive und Bildprompts

Erstellt mit dem eingebauten Imagegen-Werkzeug am 29.10.2026. Die generierten Motive dienen als gekennzeichnete Visualisierungen. Sie belegen weder eine konkrete Produktkompatibilität noch eine ausgeführte Elektroinstallation.

Die Originale bleiben im Imagegen-Ausgabeordner erhalten. Für die Website liegen komprimierte JPEG-Dateien im Projekt:

| Motiv                            | Datei                                      |
| -------------------------------- | ------------------------------------------ |
| Beleuchtung am Abend             | `public/assets/licht-am-abend.jpg`         |
| Außenjalousien mit Fernbedienung | `public/assets/smarte-beschattung.jpg`     |
| Elektroinstallation im Neubau    | `public/assets/neubau-elektrik.jpg`        |
| Photovoltaik und Wallbox         | `public/assets/photovoltaik-eigenheim.jpg` |

## Ergänzende Motive

| Motiv | Datei |
| --- | --- |
| Modernisierung im bestehenden Wohnraum | `public/assets/modernisierung-bestand.jpg` |
| Wallbox und Laden am Carport | `public/assets/energie-wallbox.jpg` |

Auch diese Motive wurden mit dem eingebauten Imagegen-Werkzeug erstellt. Neubau und Photovoltaik behalten die vorherigen Bildmotive.

## Verwendete Prompts

### licht

```text
Use case: photorealistic-natural. Asset type: landscape editorial photograph for a German residential electrical contractor website, 3:2 landscape. A comfortable realistic contemporary European living room at blue hour after sunset, warm oak, cream plaster walls, neutral fabric sofa, an elegant suspended LED luminaire over the table switched on, small recessed ceiling lights switched on and subtle warm LED indirect lighting on shelving visibly providing the room illumination. Clearly visible tasteful black multi-button wall controller near the room entrance, no text on it. The glass windows show dark blue twilight, no sunlight illuminating the room. Emphasis on the electrical lighting design and real everyday residential comfort. Architectural photography, natural realistic materials, calm premium look, eye-level wide framing, restrained exposure, no excessive golden glow. No words, branding, logos, watermarks, collage, diagrams, sci-fi, fake screens, or people.
```

### beschattung

```text
Use case: photorealistic-natural. Asset type: landscape editorial photograph for a German residential smart home website, 3:2 landscape. Outside terrace of a contemporary European detached house with cream plaster walls, large glass living-room windows and clearly visible external motorized venetian blinds in dark graphite aluminium, partially lowered with tilted slats. Camera three quarter architectural view, showing both facade and blinds. At the right edge of the foreground a person's naturally proportioned hand holds a plain modern smartphone showing a very simple dark control surface with a single large blind icon and vertical slider, no text or branding. The person's face is outside the frame. The clear subject is controlling external sun shading remotely while standing outside the house. Calm late afternoon, warm natural materials and planting, realistic building details, normal domestic scale, precise slats, premium natural architectural photography, restrained colors. No words, logos, watermarks, collage, fake lettering, excessive reflections, or futuristic technology.
```

### neubau

```text
Use case: photorealistic-natural. Asset type: landscape editorial photograph for a German residential electrical contractor website, 3:2 landscape. Realistic clean German detached house under construction, indoor room in the electrical rough-in phase, daylight through an unfinished window opening. Porous light masonry and partly plastered walls show neatly routed electrical conduits in vertical chases and aligned blue flush-mounted socket boxes. A small closed temporary installation distribution enclosure visible at the edge, no exposed live electrical contacts. Coiled conduit neatly on floor, modest realistic work-in-progress, no unsafe workmanship. Composition shows planning and electrical installation in new residential construction clearly rather than a bare generic building. Eye-level architecture photograph, crisp realistic material texture, neutral warm-grey and cream palette, no people, no words, branding, logos, watermarks, collage, invented diagrams or dramatic industrial factory.
```

### photovoltaik

```text
Use case: photorealistic-natural. Asset type: landscape editorial photograph for a German home electrical and solar technology website, 3:2 landscape. Contemporary realistic European detached house with a pitched dark tile roof bearing a tidy flush array of dark photovoltaic modules, photographed at a clear three-quarter angle from the driveway. The solar panels are a primary clearly visible subject, with recognizable cell grid and realistic thin aluminium mounting. In the near side of the composition a clean house wall has a compact unbranded electric vehicle wallbox with a neatly looped charging cable, visibly integrated into the residential electrical infrastructure. No car needed. Warm cream facade, some natural timber trim, restrained green planting, clear soft daylight, calm attractive domestic scene with technically plausible construction. Architectural editorial photography, real texture, no overly large mansion, no floating panels, no words, logos, watermarks, collage, diagram, fake screen or people.
```

### modernisierung

```text
Use case: photorealistic-natural. Asset type: landscape architectural editorial photograph, 3:2, for the renovation and electrical modernization section of a German residential electrician website. Show an EXISTING older European apartment being carefully modernized, clearly distinct from a new-build construction shell. A mostly finished lived-in room with original herringbone oak parquet, high cream plaster walls, preserved simple period mouldings and old panelled doorway, a modest vintage white radiator, a contemporary sofa and sideboard. The electrical upgrade is visually explicit: crisp newly fitted modern dark wall keypad next to the existing doorway at ordinary switch height, a newly installed tidy matching three-gang socket plate near the sideboard, switched-on understated ceiling track spotlights and warm under-shelf LED lighting. On a folded protective cloth at the far edge of the sideboard lies one old yellowed rocker-switch cover and a compact closed installer case, hinting at a targeted upgrade in an existing home. No bare masonry, no large open wall chases, no exposed conductors, no new construction shell. Composition gives clear importance to the upgraded wall controls and lighting while keeping the existing-home context legible. Premium realistic architectural photography with restrained warm neutral materials, natural texture, soft late-afternoon light plus visibly illuminated electrical lights. No words, brands, logos, watermarks, collage, before-after split, diagrams, huge house, artificial futuristic gadgets, or people.
```

### energie

```text
Use case: photorealistic-natural. Asset type: landscape editorial photograph, 3:2, for an Energy and Home EV Charging service page on a German residential electrical contractor website. A realistic modest private home carport with natural timber posts and a cream house wall. The clearly visible main subject is a contemporary unbranded compact electric vehicle wallbox mounted at normal practical height on the house wall, with a small simple status LED and one neatly routed cable physically plugged into the charging port on the rear side of a parked understated dark grey electric family car. Medium-wide three-quarter view, wallbox and charging connection in clear focus, only part of the car visible so the technology stays central. Ordinary tidy residential surroundings, discreet garden visible beyond the carport, soft daylight, warm cream, muted green and oak palette consistent with premium residential architecture photography. Technically plausible cable routing and plug, realistic proportions and textures. No roof or photovoltaic array as primary subject, no brand badges, words, numbers, fake dashboards, watermarks, collage, exposed electrical wires, unrealistic neon or futuristic equipment, or people.
```
