const facts = [
  // =========================
  // 🌍 SOLAR SYSTEM
  // =========================

  "Mercury has a 3:2 spin-orbit resonance: it rotates three times for every two trips around the Sun.",

  "On Mercury, the Sun can appear to rise, briefly set, and then rise again because of its unusual orbit and rotation.",

  "Mercury has ice inside permanently shadowed craters even though parts of its surface become extremely hot.",

  "Mercury has a surprisingly large iron core, making up roughly 85% of the planet's radius.",

  "Mercury has a global magnetic field, even though its rotation is extremely slow.",

  "Mercury is slowly shrinking as its interior cools, leaving huge cliffs across its surface.",

  "A single solar day on Mercury lasts about 176 Earth days.",

  "Venus rotates so slowly that one Venusian rotation takes longer than its trip around the Sun.",

  "Venus spins backward compared with most planets in the Solar System.",

  "Venus has atmospheric pressure at its surface about 93 times Earth's sea-level pressure.",

  "Venus has lightning inside clouds made largely of sulfuric acid.",

  "Venus has no internally generated global magnetic field like Earth does.",

  "Venus's upper atmosphere rotates around the planet far faster than the solid surface beneath it.",

  "A spacecraft descending through Venus's atmosphere would experience pressure similar to being nearly 1 kilometer underwater on Earth.",

  "Mars has blue sunsets because its dusty atmosphere scatters sunlight differently from Earth's atmosphere.",

  "Mars contains Olympus Mons, a volcano roughly three times the height of Mount Everest.",

  "Mars has Valles Marineris, a canyon system stretching roughly 4,000 kilometers across the planet.",

  "Mars has dust devils that can grow into towering columns several kilometers high.",

  "Mars has underground water ice spread across large regions of its surface.",

  "Mars once had rivers and lakes, leaving dried channels and ancient lakebeds across its surface.",

  "Mars's atmosphere is so thin that liquid water is generally unstable on its surface today.",

  "Jupiter's magnetic field is so enormous that it creates one of the largest structures in the Solar System.",

  "Jupiter's moon Io is the most volcanically active world known in the Solar System.",

  "Io's volcanoes can eject material hundreds of kilometers above its surface.",

  "Io is continuously squeezed by Jupiter's gravity, generating enormous internal heat.",

  "Europa is covered by an icy shell hiding a global ocean containing more water than Earth's oceans.",

  "Europa's surface is crossed by enormous cracks created as its ice shell moves and flexes.",

  "Ganymede is the only moon known to have its own intrinsic magnetic field.",

  "Ganymede is larger than Mercury even though it is a moon of Jupiter.",

  "Callisto has one of the most heavily cratered surfaces in the Solar System.",

  "Jupiter's moon Amalthea is reddish and irregular, unlike the large spherical moons farther from Jupiter.",

  "Saturn's rings are mostly made of water ice rather than solid rock.",

  "Some particles in Saturn's rings are smaller than grains of sand, while others are several meters across.",

  "Saturn's moon Enceladus shoots huge plumes of water vapor and ice into space.",

  "Enceladus's geysers come from a subsurface ocean beneath its icy crust.",

  "Enceladus is actively adding material to Saturn's E ring through its icy plumes.",

  "Titan has rivers, lakes, and rain—but they are made of liquid methane and ethane.",

  "Titan has a thick atmosphere dominated by nitrogen, making it the only moon known with a dense nitrogen-rich atmosphere.",

  "Titan's atmosphere is so thick that a human-sized spacecraft could potentially glide through it with wings.",

  "Titan has an underground ocean beneath its frozen surface.",

  "Saturn's moon Iapetus has one side dramatically darker than the other, giving it a strange two-tone appearance.",

  "Iapetus has a huge ridge running almost perfectly along part of its equator.",

  "Saturn's moon Mimas has a giant crater that makes it resemble the fictional Death Star.",

  "Uranus's rings are extremely dark and reflect very little sunlight.",

  "Uranus rotates almost on its side, giving it some of the most extreme seasons in the Solar System.",

  "Uranus experiences seasons that last more than 20 Earth years because of its extreme axial tilt.",

  "Neptune has the fastest planetary winds in the Solar System, reaching over 2,000 km/h.",

  "Neptune's moon Triton orbits backward compared with Neptune's rotation, suggesting it was captured.",

  "Triton has nitrogen geysers that can shoot material several kilometers above its surface.",

  "Triton is one of the coldest known planetary bodies in the Solar System.",

  "Pluto has mountains made of water ice because water behaves like rock at its surface temperature.",

  "Pluto's heart-shaped Tombaugh Regio contains a vast basin filled with nitrogen ice.",

  "Pluto's nitrogen ice can slowly move across its surface like glaciers.",

  "Pluto has blue atmospheric haze produced by sunlight interacting with complex hydrocarbons.",

  "Charon is so large compared with Pluto that the pair orbit a point outside Pluto itself.",


  // =========================
  // ☀️ THE SUN
  // =========================

  "The Sun rotates faster at its equator than near its poles because it is made of plasma rather than solid material.",

  "The Sun's equator takes about 25 Earth days to rotate, while its poles take roughly 35 days.",

  "The Sun produces an enormous stream of charged particles called the solar wind.",

  "Solar wind particles constantly escape the Sun and fill the entire Solar System.",

  "The Sun's outer atmosphere, the corona, can reach millions of degrees while its visible surface is about 5,500°C.",

  "The Sun's magnetic field can become tangled enough to produce enormous solar flares.",

  "Solar flares can release energy equivalent to billions of nuclear bombs.",

  "The Sun produces neutrinos that pass through Earth almost completely unhindered.",

  "Millions of solar neutrinos pass through every square centimeter of your body every second.",

  "The Sun contains about 99.8% of the total mass of the Solar System.",

  "The Sun's magnetic field reverses polarity roughly every 11 years as part of the solar cycle.",

  "Huge loops of plasma called prominences can extend hundreds of thousands of kilometers above the Sun's surface.",


  // =========================
  // 🌙 THE MOON
  // =========================

  "The Moon is slowly moving away from Earth by roughly 3.8 centimeters every year.",

  "The Moon has moonquakes, including deep quakes caused by Earth's gravitational pull.",

  "Some lunar craters never receive direct sunlight because their floors remain permanently shadowed.",

  "Water ice has been detected inside permanently shadowed regions near the lunar poles.",

  "The Moon has no global atmosphere, so footprints can remain preserved for extremely long periods.",

  "The Moon's surface is covered in tiny glass beads created by ancient impacts and volcanic activity.",

  "The Moon's largest impact basin, the South Pole–Aitken Basin, is one of the largest known impact structures in the Solar System.",

  "The Moon is gradually slowing Earth's rotation through tidal interactions.",

  "The same side of the Moon always faces Earth because the Moon is tidally locked.",


  // =========================
  // 🪐 ASTEROIDS & COMETS
  // =========================

  "Asteroid Bennu is ejecting tiny particles from its surface even when no obvious impact is occurring.",

  "Bennu contains carbon-rich material and hydrated minerals formed in the presence of water.",

  "Asteroid Ryugu is extremely dark, reflecting only a small fraction of the sunlight that hits it.",

  "Some asteroids are actually piles of loosely connected rocks held together mostly by gravity.",

  "A comet's tail points away from the Sun because solar radiation and the solar wind push material outward.",

  "A comet can develop two different tails: a dust tail and an ion tail.",

  "Comet tails can stretch millions of kilometers through space.",

  "The nucleus of a comet can be surprisingly dark, sometimes reflecting less light than asphalt.",

  "Halley's Comet returns to the inner Solar System roughly once every 76 years.",

  "The asteroid belt contains millions of objects, but the average distance between large asteroids is enormous.",


  // =========================
  // ⭐ STARS
  // =========================

  "Some stars are so dense that a teaspoon of neutron-star material would weigh billions of tons on Earth.",

  "A neutron star can pack more mass than the Sun into a sphere only about 20 kilometers across.",

  "Some neutron stars rotate hundreds of times every second.",

  "A rapidly rotating neutron star can sweep beams of radiation through space like a cosmic lighthouse.",

  "These rotating neutron stars are called pulsars.",

  "Magnetars have magnetic fields trillions of times stronger than Earth's magnetic field.",

  "A magnetar's magnetic field can be strong enough to distort atoms.",

  "White dwarfs are the dense remains left behind by stars like the Sun.",

  "A white dwarf can contain roughly the Sun's mass inside a volume comparable to Earth.",

  "As some white dwarfs cool, their carbon-rich interiors can crystallize into a giant diamond-like crystal.",

  "Some stars orbit each other so closely that they exchange material between them.",

  "In a binary star system, one star can steal gas directly from its companion.",

  "Some stars explode as supernovae and briefly become brighter than entire galaxies.",

  "Supernova explosions create and distribute many of the heavy elements found throughout the universe.",

  "Gold, platinum, and other heavy elements can be produced in extreme cosmic events such as neutron-star mergers.",

  "Some stars are born in groups containing hundreds or thousands of stars.",

  "The stars in a cluster can share nearly the same age because they formed from the same cloud of gas.",


  // =========================
  // 🕳️ BLACK HOLES
  // =========================

  "A black hole is not a cosmic vacuum cleaner; objects can orbit it just as planets orbit stars.",

  "A black hole can bend light so strongly that it acts like a gravitational lens.",

  "The boundary around a black hole beyond which light cannot escape is called the event horizon.",

  "Time passes differently near a black hole because extreme gravity strongly warps spacetime.",

  "Supermassive black holes can contain millions or even billions of times the Sun's mass.",

  "Most large galaxies are believed to contain a supermassive black hole at their centers.",

  "The Milky Way's central black hole is called Sagittarius A*.",

  "Matter falling toward a black hole can form a superheated accretion disk.",

  "Accretion disks around black holes can shine brighter than entire galaxies.",

  "Some black holes launch enormous jets of particles that travel thousands or even millions of light-years.",

  "When two black holes merge, they send ripples through spacetime called gravitational waves.",

  "The first directly imaged black hole was the supermassive black hole at the center of galaxy M87.",

  "A black hole's shadow can be larger than the physical region from which light cannot escape.",


  // =========================
  // 🌌 GALAXIES & COSMOS
  // =========================

  "The Milky Way and Andromeda galaxies are expected to interact gravitationally in the distant future.",

  "The Milky Way is a barred spiral galaxy, meaning a bar-shaped structure crosses its central region.",

  "Our Solar System takes roughly 230 million years to orbit the center of the Milky Way.",

  "The Sun is located about 26,000 light-years from the center of the Milky Way.",

  "The Milky Way contains hundreds of billions of stars.",

  "Some galaxies contain enormous jets powered by supermassive black holes at their centers.",

  "Quasars can outshine their entire host galaxies even though their energy comes from a tiny central region.",

  "Some galaxies are so far away that we see them as they looked billions of years ago.",

  "Looking farther into space also means looking farther back in time.",

  "The cosmic microwave background is ancient light released roughly 380,000 years after the Big Bang.",

  "The cosmic microwave background fills the universe in almost every direction.",

  "Dark matter does not appear to emit or absorb light, but its gravity affects galaxies and light.",

  "Dark matter helps explain why many galaxies rotate as if they contain far more mass than we can see.",

  "Dark energy appears to be associated with the accelerating expansion of the universe.",

  "The expansion of the universe does not have a simple center that everything is moving away from.",

  "Some galaxies are currently colliding, but individual stars inside them rarely collide because space is so vast.",


  // =========================
  // 💥 EXTREME COSMIC EVENTS
  // =========================

  "Gamma-ray bursts can release more energy in seconds than the Sun emits over billions of years.",

  "Some gamma-ray bursts are associated with the collapse of massive stars.",

  "Short gamma-ray bursts can be produced by collisions between neutron stars.",

  "Neutron-star mergers can create both gravitational waves and powerful bursts of electromagnetic radiation.",

  "Fast radio bursts can release enormous amounts of radio energy in only milliseconds.",

  "Some fast radio bursts repeat, meaning the source survives the original burst.",

  "A kilonova occurs when extremely dense objects such as neutron stars merge.",

  "Kilonova explosions can create heavy elements through rapid neutron capture.",

  "Cosmic rays can reach energies far beyond what human-made particle accelerators can produce.",

  "Ultra-high-energy cosmic rays can carry more energy than a fast-moving baseball.",


  // =========================
  // 👽 EXOPLANETS
  // =========================

  "WASP-12b is being stretched by its star's gravity and is slowly losing material to its star.",

  "WASP-12b completes an orbit around its star in only about 1.1 Earth days.",

  "WASP-12b is being pulled into an egg-like shape by extreme tidal forces.",

  "HD 189733b appears deep blue, but its atmosphere contains clouds of silicate particles that may produce glass-like rain.",

  "WASP-76b is so hot that iron can vaporize on its dayside and potentially condense on its nightside.",

  "KELT-9b is so hot that molecules on its dayside can be torn apart into individual atoms.",

  "KELT-9b orbits its star in only about 1.5 Earth days.",

  "55 Cancri e is a super-hot world believed to have a global ocean of molten rock.",

  "55 Cancri e orbits its star in less than one Earth day.",

  "On 55 Cancri e, its star appears dramatically larger in the sky than our Sun appears from Earth.",

  "Kepler-16b orbits two stars, meaning it has two suns in its sky.",

  "The TRAPPIST-1 system contains seven roughly Earth-sized planets orbiting one small star.",

  "Several TRAPPIST-1 planets orbit so close to their star that their years last only a few Earth days.",

  "Some exoplanets are so close to their stars that their atmospheres are actively escaping into space.",

  "Some hot Jupiters are so close to their stars that they orbit faster than Mercury orbits the Sun.",

  "TOI-849 b may be the exposed rocky core of a gas giant that lost most of its atmosphere.",

  "Some exoplanets have enormous atmospheres that extend far beyond the solid planet beneath them.",

  "Some exoplanets are found orbiting pulsars rather than normal stars.",

  "The first confirmed planets discovered outside our Solar System were found orbiting a pulsar.",

  "Some exoplanets orbit so close to their stars that one year lasts only a few hours.",


  // =========================
  // 🌠 STRANGE SPACE
  // =========================

  "Rogue planets can drift through space without orbiting a star.",

  "Some rogue planets may have been ejected from their original planetary systems by gravitational interactions.",

  "There are planets where a year lasts only a few hours because they orbit extremely close to their stars.",

  "Some planets are tidally locked, meaning one side permanently faces its star.",

  "On a tidally locked planet, the star could remain almost fixed in the sky while the planet rotates once per orbit.",

  "Some worlds may have permanent day and night sides because they are tidally locked to their stars.",

  "A planet can orbit two stars at once, creating a real-life version of a double-sunset world.",

  "Some stars travel through the Milky Way at hundreds of kilometers per second.",

  "Hypervelocity stars can move fast enough to escape the gravitational pull of the Milky Way.",

  "Space is not completely empty: extremely thin clouds of gas and dust exist between stars.",

  "Interstellar space contains enormous clouds of molecules that can eventually collapse and form new stars.",

  "Some nebulae contain complex organic molecules, including carbon-based compounds.",

  "The Orion Nebula contains thousands of young stars and is one of the closest major star-forming regions to Earth.",

  "A planetary nebula has nothing to do with planets; the name comes from its planet-like appearance in early telescopes.",

  "Some nebulae are created when dying stars blow their outer layers into space.",

  "The Pillars of Creation are giant columns of gas and dust where new stars are forming.",

  "Some cosmic clouds are so cold that molecules can freeze onto tiny dust grains.",

  "Space contains enormous reservoirs of water vapor, including clouds holding vastly more water than Earth's oceans.",

  "A single water-rich molecular cloud in space can contain thousands of times more water than all of Earth's oceans.",

  "Some regions of space contain alcohol molecules, including ethanol, floating among interstellar gas.",


  // =========================
  // 🚀 SPACE EXPLORATION
  // =========================

  "Voyager 1 is the most distant human-made object ever launched.",

  "Voyager 1 continues sending extremely weak radio signals across interstellar space.",

  "Voyager's Golden Record contains sounds, images, music, and greetings from Earth.",

  "The International Space Station travels around Earth at roughly 28,000 km/h.",

  "Astronauts aboard the ISS see about 15–16 sunrises and sunsets every day.",

  "The ISS is constantly falling toward Earth but travels sideways fast enough to keep missing it.",

  "Astronauts can grow slightly taller in space because the spine expands without Earth's normal gravity.",

  "In microgravity, flames become more spherical because hot gases do not rise in the usual way.",

  "Astronauts can lose bone density in space because their skeletons no longer support normal body weight.",

  "Spacecraft can use planetary gravity assists to change speed and direction without carrying all the required fuel.",

  "Voyager 2 is the only spacecraft to have flown past Uranus and Neptune.",

  "The New Horizons spacecraft traveled more than 5 billion kilometers to reach Pluto.",

  "The Hubble Space Telescope has observed galaxies whose light has traveled for billions of years before reaching its mirror.",

  "The James Webb Space Telescope can observe some of the earliest galaxies ever seen.",

  "Space telescopes can detect planets by measuring tiny changes in the brightness of their stars.",

  "Some exoplanets were discovered because their gravity makes their stars wobble slightly.",

  "Some planets can be detected when they pass directly in front of their stars and block a tiny amount of starlight.",


  // =========================
  // 🧠 REALLY WEIRD ONES
  // =========================

  "There are stars that are literally orbiting a black hole while surviving the extreme gravity around it.",

  "A black hole can orbit another black hole, and binary black holes can eventually merge.",

  "Some neutron stars spin so rapidly that their surfaces move at a significant fraction of the speed of light.",

  "A teaspoon of neutron-star material would have an unimaginable mass because neutron stars are packed extremely tightly.",

  "White dwarfs are supported against further collapse by a quantum-mechanical effect called electron degeneracy pressure.",

  "Two stars can merge into one larger star after spiraling together through a shared envelope of gas.",

  "A star can be destroyed by a black hole through an event called a tidal disruption event.",

  "During a tidal disruption event, a star can be stretched into a long stream of gas by a black hole's gravity.",

  "Some black holes are moving through space after being kicked by asymmetric supernova explosions.",

  "Light from a distant galaxy can be bent into arcs or multiple images by the gravity of a foreground galaxy cluster.",

  "Gravitational lensing can magnify galaxies that would otherwise be too faint for telescopes to see.",

  "Some galaxies act like enormous natural telescopes by magnifying objects far behind them.",

  "The universe contains galaxies whose light has traveled for more than 13 billion years to reach us.",

  "The atoms in your body were forged from material created in earlier generations of stars.",

  "Much of the carbon, oxygen, and other heavy elements around us came from ancient stars.",

  "The iron in your blood was ultimately produced inside stars or stellar explosions.",

  "The gold on Earth likely came from extremely energetic cosmic events rather than ordinary stars.",

  "Space can contain giant magnetic fields extending across distances larger than entire galaxies.",

  "Some cosmic magnetic fields are millions of times stronger than Earth's magnetic field.",

  "The universe is filled with invisible neutrinos that pass through matter almost without interacting.",

  "Neutrinos from the Sun pass through Earth continuously without being noticeably stopped.",

  "A black hole's gravity can stretch an object vertically while compressing it sideways—a process nicknamed spaghettification.",

  "Some stars orbit each other so closely that their atmospheres can actually touch.",

  "There are stars whose outer layers have been stripped away by a companion star.",

  "Some planets may be made largely of carbon-rich material, although claims that specific worlds are completely diamond are not confirmed.",

  "A planet can lose its atmosphere so rapidly that a visible stream of gas trails behind it like a comet.",

  "Some exoplanets are so inflated that they are larger than Jupiter despite having less mass.",

  "Some gas giants have densities lower than water, meaning they would theoretically float if a giant enough ocean existed.",

  "Some exoplanets have atmospheres containing molecules that are not found naturally in Earth's atmosphere.",

  "Astronomers can determine the chemical composition of a distant planet's atmosphere by studying how it filters starlight."
];

export default facts;