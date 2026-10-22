const quizQuestions = [
  // VERY EASY
  {
    id: 1,
    difficulty: "Very Easy",
    topic: "Solar System",
    question: "Which star is at the center of our Solar System?",
    options: ["Sirius", "The Sun", "Polaris", "Proxima Centauri"],
    correctAnswer: "The Sun",
    explanation: "The Sun is the star at the center of our Solar System."
  },
  {
    id: 2,
    difficulty: "Very Easy",
    topic: "Solar System",
    question: "Which planet do we live on?",
    options: ["Mars", "Venus", "Earth", "Jupiter"],
    correctAnswer: "Earth",
    explanation: "Earth is our home planet and the only world currently known to support life."
  },
  {
    id: 3,
    difficulty: "Very Easy",
    topic: "Moon",
    question: "What is Earth's natural satellite called?",
    options: ["Europa", "Titan", "The Moon", "Phobos"],
    correctAnswer: "The Moon",
    explanation: "The Moon is Earth's only natural satellite."
  },
  {
    id: 4,
    difficulty: "Very Easy",
    topic: "Solar System",
    question: "Which planet is famous for its large ring system?",
    options: ["Mercury", "Saturn", "Mars", "Venus"],
    correctAnswer: "Saturn",
    explanation: "Saturn has a spectacular system of rings made mostly of ice and rocky particles."
  },

  // EASY
  {
    id: 5,
    difficulty: "Easy",
    topic: "Planets",
    question: "Which is the largest planet in our Solar System?",
    options: ["Earth", "Neptune", "Saturn", "Jupiter"],
    correctAnswer: "Jupiter",
    explanation: "Jupiter is the largest planet in our Solar System by both diameter and mass."
  },
  {
    id: 6,
    difficulty: "Easy",
    topic: "Planets",
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Mercury", "Venus", "Uranus"],
    correctAnswer: "Mars",
    explanation: "Iron-rich dust on Mars gives much of its surface a reddish appearance."
  },
  {
    id: 7,
    difficulty: "Easy",
    topic: "Astronomy",
    question: "What is the name of our galaxy?",
    options: ["Andromeda", "Whirlpool", "Milky Way", "Sombrero"],
    correctAnswer: "Milky Way",
    explanation: "Our Solar System is located inside the Milky Way galaxy."
  },
  {
    id: 8,
    difficulty: "Easy",
    topic: "Moon",
    question: "What causes the Moon's phases as seen from Earth?",
    options: [
      "Earth's shadow covers the Moon every week",
      "We see different portions of its sunlit half",
      "The Moon changes its shape",
      "Clouds cover parts of the Moon"
    ],
    correctAnswer: "We see different portions of its sunlit half",
    explanation: "The Moon's phases depend on the changing geometry between the Sun, Earth, and Moon."
  },

  // MEDIUM
  {
    id: 9,
    difficulty: "Medium",
    topic: "Planets",
    question: "Which planet has the shortest day?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Jupiter",
    explanation: "Jupiter rotates in roughly 10 hours, giving it the shortest day among the planets."
  },
  {
    id: 10,
    difficulty: "Medium",
    topic: "Stars",
    question: "What process powers the Sun?",
    options: [
      "Chemical combustion",
      "Nuclear fission",
      "Nuclear fusion",
      "Radioactive decay alone"
    ],
    correctAnswer: "Nuclear fusion",
    explanation: "The Sun releases energy mainly by fusing hydrogen into helium in its core."
  },
  {
    id: 11,
    difficulty: "Medium",
    topic: "Black Holes",
    question: "What is the event horizon of a black hole?",
    options: [
      "Its solid surface",
      "The boundary beyond which light cannot escape",
      "The hottest part of its accretion disk",
      "The orbit of its farthest planet"
    ],
    correctAnswer: "The boundary beyond which light cannot escape",
    explanation: "The event horizon marks the boundary beyond which escape is impossible, even for light."
  },
  {
    id: 12,
    difficulty: "Medium",
    topic: "Space Exploration",
    question: "Which mission first landed humans on the Moon?",
    options: ["Apollo 8", "Apollo 11", "Gemini 4", "Apollo 13"],
    correctAnswer: "Apollo 11",
    explanation: "Apollo 11 landed Neil Armstrong and Buzz Aldrin on the Moon in July 1969."
  },
  {
    id: 13,
    difficulty: "Medium",
    topic: "Exoplanets",
    question: "What is an exoplanet?",
    options: [
      "A planet outside our Solar System",
      "A moon orbiting Saturn",
      "A star that has stopped shining",
      "A planet without an atmosphere"
    ],
    correctAnswer: "A planet outside our Solar System",
    explanation: "Exoplanets orbit stars other than the Sun, although some may also orbit stellar remnants."
  },
  {
    id: 14,
    difficulty: "Medium",
    topic: "Stars",
    question: "What does a light-year measure?",
    options: ["Time", "Brightness", "Distance", "Temperature"],
    correctAnswer: "Distance",
    explanation: "A light-year is the distance light travels in a vacuum in one year."
  },
  {
    id: 15,
    difficulty: "Medium",
    topic: "Solar System",
    question: "Which planet rotates on its side to an extreme degree?",
    options: ["Mars", "Uranus", "Mercury", "Jupiter"],
    correctAnswer: "Uranus",
    explanation: "Uranus has an axial tilt of about 98 degrees, making its rotation unusually sideways."
  },
  {
    id: 16,
    difficulty: "Medium",
    topic: "Cosmology",
    question: "What is the cosmic microwave background?",
    options: [
      "Radio signals from Earth",
      "Radiation left over from the early universe",
      "Heat emitted only by black holes",
      "Light from the center of the Sun"
    ],
    correctAnswer: "Radiation left over from the early universe",
    explanation: "The cosmic microwave background is ancient radiation released when the universe became transparent."
  },
  {
    id: 17,
    difficulty: "Medium",
    topic: "Space Exploration",
    question: "Which space telescope launched in 2021?",
    options: [
      "Hubble Space Telescope",
      "Kepler Space Telescope",
      "James Webb Space Telescope",
      "Chandra X-ray Observatory"
    ],
    correctAnswer: "James Webb Space Telescope",
    explanation: "The James Webb Space Telescope launched on December 25, 2021."
  },
  {
    id: 18,
    difficulty: "Medium",
    topic: "Solar System",
    question: "What is the main asteroid belt located between?",
    options: [
      "Earth and Mars",
      "Mars and Jupiter",
      "Jupiter and Saturn",
      "Uranus and Neptune"
    ],
    correctAnswer: "Mars and Jupiter",
    explanation: "The main asteroid belt lies between the orbits of Mars and Jupiter."
  },

  // HARD
  {
    id: 19,
    difficulty: "Hard",
    topic: "Stellar Evolution",
    question: "What primarily determines the main-sequence lifetime of a star?",
    options: [
      "Its mass",
      "Its distance from Earth",
      "The number of planets it has",
      "Its current position in the galaxy"
    ],
    correctAnswer: "Its mass",
    explanation: "Mass strongly affects a star's core pressure, fusion rate, and how quickly it consumes its fuel."
  },
  {
    id: 20,
    difficulty: "Hard",
    topic: "Relativity",
    question: "According to general relativity, what is gravity associated with?",
    options: [
      "A universal wind",
      "Curvature of spacetime",
      "The color of an object",
      "The chemical bonds inside matter"
    ],
    correctAnswer: "Curvature of spacetime",
    explanation: "General relativity describes gravity in terms of matter and energy curving spacetime."
  },
  {
    id: 21,
    difficulty: "Hard",
    topic: "Neutron Stars",
    question: "What is a pulsar?",
    options: [
      "A rapidly rotating neutron star emitting beams of radiation",
      "A planet that emits visible pulses",
      "A young galaxy",
      "A comet with a repeating orbit"
    ],
    correctAnswer: "A rapidly rotating neutron star emitting beams of radiation",
    explanation: "Pulsars are rotating neutron stars whose radiation beams can sweep across Earth like a lighthouse."
  },
  {
    id: 22,
    difficulty: "Hard",
    topic: "Cosmology",
    question: "What does cosmological redshift tell astronomers about distant galaxies?",
    options: [
      "They are all cooling down",
      "Their light has been stretched as the universe expands",
      "They are made mostly of red stars",
      "They are necessarily moving through space faster than light locally"
    ],
    correctAnswer: "Their light has been stretched as the universe expands",
    explanation: "Expansion of the universe stretches travelling light toward longer wavelengths."
  },

  // VERY HARD
 {
  id: 23,
  difficulty: "Very Hard",
  topic: "Black Holes",
  question: "What is the innermost stable circular orbit around a non-rotating black hole?",
  options: [
    "One Schwarzschild radius",
    "Two Schwarzschild radii",
    "Three Schwarzschild radii",
    "Six Schwarzschild radii"
  ],
  correctAnswer: "Three Schwarzschild radii",
  explanation: "For a non-rotating Schwarzschild black hole, the innermost stable circular orbit is at 6GM/c², equal to three Schwarzschild radii."
},
  {
    id: 24,
    difficulty: "Very Hard",
    topic: "Stellar Physics",
    question: "What is the Chandrasekhar limit approximately?",
    options: ["0.2 solar masses", "1.4 solar masses", "8 solar masses", "100 solar masses"],
    correctAnswer: "1.4 solar masses",
    explanation: "The Chandrasekhar limit is about 1.4 times the Sun's mass for a cold, non-rotating white dwarf under idealized assumptions."
  },
  {
    id: 25,
    difficulty: "Very Hard",
    topic: "Cosmology",
    question: "What does the term 'critical density' refer to in cosmology?",
    options: [
      "The density of the Sun's core",
      "The density that separates different large-scale expansion geometries in standard cosmology",
      "The density of matter inside a neutron star",
      "The average density of Earth's atmosphere"
    ],
    correctAnswer: "The density that separates different large-scale expansion geometries in standard cosmology",
    explanation: "Critical density is the density corresponding to a spatially flat universe in standard cosmological models."
  },
  {
    id: 26,
    difficulty: "Very Hard",
    topic: "Exoplanets",
    question: "What is the transit method for finding exoplanets?",
    options: [
      "Measuring a star's position against distant galaxies",
      "Detecting a small dip in starlight as a planet crosses its star",
      "Listening for radio signals from a planet",
      "Measuring the planet's magnetic field directly"
    ],
    correctAnswer: "Detecting a small dip in starlight as a planet crosses its star",
    explanation: "A planet passing in front of its star can block a small fraction of the star's observed light."
  },

  // TRUE COSMOS LOVER
  {
    id: 27,
    difficulty: "True Cosmos Lover",
    topic: "Gravitational Waves",
    question: "What did LIGO first directly detect in 2015?",
    options: [
      "A fast radio burst",
      "Gravitational waves from merging black holes",
      "A planet orbiting a neutron star",
      "The cosmic microwave background"
    ],
    correctAnswer: "Gravitational waves from merging black holes",
    explanation: "LIGO announced the first direct detection of gravitational waves, produced by two merging black holes."
  },
  {
    id: 28,
    difficulty: "True Cosmos Lover",
    topic: "Stellar Evolution",
    question: "What is the approximate Chandrasekhar limit in solar masses?",
    options: ["0.14", "1.4", "14", "140"],
    correctAnswer: "1.4",
    explanation: "The limit is approximately 1.4 solar masses under the standard idealized assumptions for a white dwarf."
  },
  {
    id: 29,
    difficulty: "True Cosmos Lover",
    topic: "Cosmology",
    question: "What is the name of the period when neutral atoms first formed and the universe became transparent to light?",
    options: [
      "Recombination",
      "Reionization",
      "Inflation",
      "Nucleosynthesis"
    ],
    correctAnswer: "Recombination",
    explanation: "During recombination, electrons combined with nuclei, allowing photons to travel freely and form the cosmic microwave background."
  },
  {
    id: 30,
    difficulty: "True Cosmos Lover",
    topic: "Black Holes",
    question: "What is the name of the theoretical radiation predicted to be emitted by black holes due to quantum effects?",
    options: [
      "Cherenkov radiation",
      "Hawking radiation",
      "Synchrotron radiation",
      "Cerenkov background"
    ],
    correctAnswer: "Hawking radiation",
    explanation: "Hawking radiation is a theoretical quantum effect that implies black holes can lose energy over time."
  },
    {
    id: 31,
    difficulty: "Very Easy",
    topic: "Solar System",
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Earth", "Mercury", "Mars"],
    correctAnswer: "Mercury",
    explanation: "Mercury is the innermost planet in the Solar System."
  },
  {
    id: 32,
    difficulty: "Easy",
    topic: "Space Exploration",
    question: "What was the first artificial satellite launched into Earth orbit?",
    options: ["Sputnik 1", "Explorer 1", "Vostok 1", "Voyager 1"],
    correctAnswer: "Sputnik 1",
    explanation: "The Soviet Union launched Sputnik 1 on October 4, 1957."
  },
  {
    id: 33,
    difficulty: "Hard",
    topic: "Astronomy",
    question: "What is the approximate escape velocity from the Sun's photosphere?",
    options: ["11.2 km/s", "42 km/s", "618 km/s", "1,000 km/s"],
    correctAnswer: "618 km/s",
    explanation: "The Sun's surface escape velocity is approximately 618 kilometres per second."
  },
  {
    id: 34,
    difficulty: "Very Hard",
    topic: "Cosmology",
    question: "What is the approximate temperature of the cosmic microwave background today?",
    options: ["0.27 K", "2.7 K", "27 K", "270 K"],
    correctAnswer: "2.7 K",
    explanation: "The cosmic microwave background has a present-day temperature of approximately 2.725 kelvin."
  },
  {
    id: 35,
    difficulty: "True Cosmos Lover",
    topic: "Gravitational Waves",
    question: "What is the name of the first gravitational-wave event detected by LIGO?",
    options: ["GW150914", "GW170817", "SN1987A", "M87*"],
    correctAnswer: "GW150914",
    explanation: "GW150914 was detected in September 2015 and announced in February 2016."
  },
  // =====================================================================
// NEW QUESTIONS (id 36 to 157)
// HOW TO USE: copy everything below this comment and paste it inside your
// quizQuestions array, right before the closing  ];
// =====================================================================

  // ---------------------------- VERY EASY ----------------------------
  {
    id: 36,
    difficulty: "Very Easy",
    topic: "Solar System",
    question: "Which is the smallest planet in our Solar System?",
    options: ["Mars", "Mercury", "Venus", "Earth"],
    correctAnswer: "Mercury",
    explanation: "Mercury is the smallest planet, with a diameter of about 4,879 km, only slightly larger than Earth's Moon."
  },
  {
    id: 37,
    difficulty: "Very Easy",
    topic: "Solar System",
    question: "How many planets are in our Solar System?",
    options: ["7", "8", "9", "10"],
    correctAnswer: "8",
    explanation: "The eight planets are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune."
  },
  {
    id: 38,
    difficulty: "Very Easy",
    topic: "Planets",
    question: "Which planet is the hottest in our Solar System?",
    options: ["Mercury", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Venus",
    explanation: "Venus has a thick carbon dioxide atmosphere that causes a runaway greenhouse effect, pushing surface temperatures to about 465 °C, hotter than even Mercury."
  },
  {
    id: 39,
    difficulty: "Very Easy",
    topic: "Planets",
    question: "Which planet is the farthest from the Sun?",
    options: ["Uranus", "Saturn", "Neptune", "Pluto"],
    correctAnswer: "Neptune",
    explanation: "Neptune is the eighth and farthest planet, about 30 times farther from the Sun than Earth is. Pluto is now classified as a dwarf planet."
  },
  {
    id: 40,
    difficulty: "Very Easy",
    topic: "Earth",
    question: "What causes day and night on Earth?",
    options: [
      "Earth rotating on its axis",
      "The Moon blocking the Sun",
      "Earth moving closer to and farther from the Sun",
      "The Sun turning on and off"
    ],
    correctAnswer: "Earth rotating on its axis",
    explanation: "Earth spins once about every 24 hours, so different parts of the planet face the Sun or face away from it."
  },
  {
    id: 41,
    difficulty: "Very Easy",
    topic: "Space Exploration",
    question: "What is a person who travels into space called?",
    options: ["Astronomer", "Astronaut", "Aviator", "Geologist"],
    correctAnswer: "Astronaut",
    explanation: "An astronaut is a person trained to travel and work in space. Russian space travellers are called cosmonauts and Chinese ones taikonauts."
  },
  {
    id: 42,
    difficulty: "Very Easy",
    topic: "Space Exploration",
    question: "Who was the first human to walk on the Moon?",
    options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
    correctAnswer: "Neil Armstrong",
    explanation: "Neil Armstrong stepped onto the lunar surface on July 20, 1969, during the Apollo 11 mission."
  },
  {
    id: 43,
    difficulty: "Very Easy",
    topic: "Earth",
    question: "About how long does Earth take to orbit the Sun once?",
    options: ["24 hours", "30 days", "365 days", "10 years"],
    correctAnswer: "365 days",
    explanation: "Earth takes about 365.25 days to orbit the Sun, which is why we add a leap day roughly every four years."
  },
  {
    id: 44,
    difficulty: "Very Easy",
    topic: "Earth",
    question: "Which planet is often called the Blue Planet?",
    options: ["Mars", "Venus", "Mercury", "Earth"],
    correctAnswer: "Earth",
    explanation: "About 71% of Earth's surface is covered by liquid water, which makes the planet look blue from space."
  },
  {
    id: 45,
    difficulty: "Very Easy",
    topic: "Stars",
    question: "What type of object is the Sun?",
    options: ["A planet", "A moon", "A star", "A comet"],
    correctAnswer: "A star",
    explanation: "The Sun is a star, a giant ball of hot plasma that produces energy through nuclear fusion."
  },
  {
    id: 46,
    difficulty: "Very Easy",
    topic: "Moon",
    question: "Which natural object is the brightest in Earth's night sky?",
    options: ["Sirius", "Mars", "The Moon", "Venus"],
    correctAnswer: "The Moon",
    explanation: "The Moon is by far the brightest object at night because it is so close to us and reflects sunlight."
  },
  {
    id: 47,
    difficulty: "Very Easy",
    topic: "Planets",
    question: "Which planet is the second closest to the Sun?",
    options: ["Mercury", "Earth", "Mars", "Venus"],
    correctAnswer: "Venus",
    explanation: "The order from the Sun is Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune."
  },
  {
    id: 48,
    difficulty: "Very Easy",
    topic: "Physics",
    question: "What force keeps the planets in orbit around the Sun?",
    options: ["Magnetism", "Friction", "Gravity", "Wind"],
    correctAnswer: "Gravity",
    explanation: "The Sun's gravity constantly pulls on the planets, bending their paths into orbits."
  },

  // ------------------------------ EASY ------------------------------
  {
    id: 49,
    difficulty: "Easy",
    topic: "Dwarf Planets",
    question: "Which of these is classified as a dwarf planet?",
    options: ["Mercury", "Pluto", "Neptune", "Titan"],
    correctAnswer: "Pluto",
    explanation: "Pluto was reclassified as a dwarf planet by the International Astronomical Union in 2006."
  },
  {
    id: 50,
    difficulty: "Easy",
    topic: "Planets",
    question: "On which planet is the giant storm known as the Great Red Spot found?",
    options: ["Saturn", "Jupiter", "Mars", "Neptune"],
    correctAnswer: "Jupiter",
    explanation: "The Great Red Spot is a giant storm on Jupiter that has been observed for well over a century and is wider than Earth."
  },
  {
    id: 51,
    difficulty: "Easy",
    topic: "Space Exploration",
    question: "Which animal was the first to orbit the Earth, aboard Sputnik 2 in 1957?",
    options: ["Laika the dog", "Ham the chimpanzee", "Albert II the monkey", "Félicette the cat"],
    correctAnswer: "Laika the dog",
    explanation: "Laika, a Soviet space dog, became the first animal to orbit Earth on November 3, 1957."
  },
  {
    id: 52,
    difficulty: "Easy",
    topic: "Space Exploration",
    question: "Who was the first human to travel into space?",
    options: ["Neil Armstrong", "Alan Shepard", "John Glenn", "Yuri Gagarin"],
    correctAnswer: "Yuri Gagarin",
    explanation: "Yuri Gagarin orbited Earth aboard Vostok 1 on April 12, 1961."
  },
  {
    id: 53,
    difficulty: "Easy",
    topic: "Small Bodies",
    question: "What are comets mainly made of?",
    options: [
      "Ice, dust and rock",
      "Solid iron only",
      "Liquid water only",
      "Hot burning gas"
    ],
    correctAnswer: "Ice, dust and rock",
    explanation: "Comets are often described as dirty snowballs. When they approach the Sun, their ices vaporize and form a glowing coma and tails."
  },
  {
    id: 54,
    difficulty: "Easy",
    topic: "Small Bodies",
    question: "What is a 'shooting star' actually?",
    options: [
      "A star falling to Earth",
      "A meteor burning up in Earth's atmosphere",
      "A small comet exploding",
      "A satellite crashing"
    ],
    correctAnswer: "A meteor burning up in Earth's atmosphere",
    explanation: "A shooting star is the streak of light made when a small piece of space rock (a meteoroid) burns up as it enters the atmosphere."
  },
  {
    id: 55,
    difficulty: "Easy",
    topic: "Stars",
    question: "Which is the closest known star to Earth after the Sun?",
    options: ["Sirius", "Proxima Centauri", "Betelgeuse", "Polaris"],
    correctAnswer: "Proxima Centauri",
    explanation: "Proxima Centauri is about 4.24 light-years away, making it our nearest known stellar neighbour."
  },
  {
    id: 56,
    difficulty: "Easy",
    topic: "Planets",
    question: "Which planet takes the longest to orbit the Sun?",
    options: ["Saturn", "Uranus", "Jupiter", "Neptune"],
    correctAnswer: "Neptune",
    explanation: "Neptune takes about 165 Earth years to complete one orbit because it is so far from the Sun."
  },
  {
    id: 57,
    difficulty: "Easy",
    topic: "Galaxies",
    question: "Which large spiral galaxy is the nearest to the Milky Way?",
    options: ["Triangulum", "Whirlpool", "Andromeda", "Sombrero"],
    correctAnswer: "Andromeda",
    explanation: "The Andromeda Galaxy is about 2.5 million light-years away and is the nearest large spiral galaxy to us."
  },
  {
    id: 58,
    difficulty: "Easy",
    topic: "Earth",
    question: "What causes the seasons on Earth?",
    options: [
      "Earth's tilted axis",
      "Earth being closer to the Sun in summer",
      "The Moon's gravity",
      "Changes in the Sun's size"
    ],
    correctAnswer: "Earth's tilted axis",
    explanation: "Earth's axis is tilted by about 23.5°, so each hemisphere receives more direct sunlight at different times of the year."
  },
  {
    id: 59,
    difficulty: "Easy",
    topic: "Moon",
    question: "What happens during a solar eclipse?",
    options: [
      "Earth passes between the Sun and the Moon",
      "The Moon passes between the Sun and Earth",
      "The Sun stops producing light",
      "A planet passes behind the Sun"
    ],
    correctAnswer: "The Moon passes between the Sun and Earth",
    explanation: "During a solar eclipse the Moon's shadow falls on Earth and blocks all or part of the Sun's light."
  },
  {
    id: 60,
    difficulty: "Easy",
    topic: "Astronomy",
    question: "What is a nebula?",
    options: [
      "A giant cloud of gas and dust in space",
      "A very small planet",
      "A type of comet tail",
      "A dead star made of iron"
    ],
    correctAnswer: "A giant cloud of gas and dust in space",
    explanation: "Nebulae are interstellar clouds of gas and dust. Some are stellar nurseries where new stars form, others are the remains of dying stars."
  },
  {
    id: 61,
    difficulty: "Easy",
    topic: "Astronomy",
    question: "What is a constellation?",
    options: [
      "A group of galaxies",
      "A pattern of stars seen from Earth",
      "A cluster of planets",
      "A type of telescope"
    ],
    correctAnswer: "A pattern of stars seen from Earth",
    explanation: "Constellations are patterns of stars in the sky. The International Astronomical Union recognizes 88 official constellations."
  },
  {
    id: 62,
    difficulty: "Easy",
    topic: "Moons",
    question: "What are the names of Mars's two moons?",
    options: ["Titan and Rhea", "Io and Europa", "Triton and Nereid", "Phobos and Deimos"],
    correctAnswer: "Phobos and Deimos",
    explanation: "Mars has two small, irregularly shaped moons, Phobos and Deimos."
  },
  {
    id: 63,
    difficulty: "Easy",
    topic: "Stars",
    question: "Which is the brightest star in Earth's night sky?",
    options: ["Polaris", "Vega", "Betelgeuse", "Sirius"],
    correctAnswer: "Sirius",
    explanation: "Sirius, the Dog Star in Canis Major, is the brightest star in our night sky. It is only about 8.6 light-years away and intrinsically very luminous."
  },
  {
    id: 64,
    difficulty: "Easy",
    topic: "Physics",
    question: "About how fast does light travel in a vacuum?",
    options: ["3,000 km/s", "30,000 km/s", "300,000 km/s", "3,000,000 km/s"],
    correctAnswer: "300,000 km/s",
    explanation: "Light travels at about 299,792 km/s in a vacuum, which is roughly 300,000 km/s."
  },

  // ----------------------------- MEDIUM -----------------------------
  {
    id: 65,
    difficulty: "Medium",
    topic: "Planets",
    question: "Which planet has an average density lower than water?",
    options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
    correctAnswer: "Saturn",
    explanation: "Saturn's average density is about 0.69 g/cm³, less than water's 1 g/cm³. In a bathtub big enough, it would float."
  },
  {
    id: 66,
    difficulty: "Medium",
    topic: "Planets",
    question: "Which planet has a day that is longer than its year?",
    options: ["Mercury", "Venus", "Mars", "Saturn"],
    correctAnswer: "Venus",
    explanation: "Venus takes about 243 Earth days to rotate once but only about 225 Earth days to orbit the Sun."
  },
  {
    id: 67,
    difficulty: "Medium",
    topic: "Moons",
    question: "Which is the largest moon in the Solar System?",
    options: ["Titan", "Ganymede", "Callisto", "The Moon"],
    correctAnswer: "Ganymede",
    explanation: "Jupiter's moon Ganymede is about 5,268 km wide, bigger than the planet Mercury."
  },
  {
    id: 68,
    difficulty: "Medium",
    topic: "Moons",
    question: "Which moon in the Solar System has a thick atmosphere, mostly made of nitrogen?",
    options: ["Europa", "Titan", "Io", "Triton"],
    correctAnswer: "Titan",
    explanation: "Saturn's moon Titan has a dense nitrogen-rich atmosphere and even lakes and seas of liquid methane and ethane."
  },
  {
    id: 69,
    difficulty: "Medium",
    topic: "Moons",
    question: "Which moon of Jupiter is the most volcanically active body in the Solar System?",
    options: ["Europa", "Ganymede", "Callisto", "Io"],
    correctAnswer: "Io",
    explanation: "Io is squeezed by tidal forces from Jupiter and its neighbouring moons, which heats its interior and powers hundreds of volcanoes."
  },
  {
    id: 70,
    difficulty: "Medium",
    topic: "Moons",
    question: "Which moon of Saturn shoots plumes of water vapour and ice into space from a subsurface ocean?",
    options: ["Mimas", "Rhea", "Enceladus", "Iapetus"],
    correctAnswer: "Enceladus",
    explanation: "The Cassini spacecraft found geyser-like jets at Enceladus's south pole, linked to a salty ocean beneath its icy shell."
  },
  {
    id: 71,
    difficulty: "Medium",
    topic: "Solar System",
    question: "Where is the Kuiper Belt located?",
    options: [
      "Between Mars and Jupiter",
      "Beyond the orbit of Neptune",
      "Between Earth and Venus",
      "Inside the orbit of Mercury"
    ],
    correctAnswer: "Beyond the orbit of Neptune",
    explanation: "The Kuiper Belt is a ring of icy bodies beyond Neptune, roughly 30 to 50 AU from the Sun. Pluto is one of its largest members."
  },
  {
    id: 72,
    difficulty: "Medium",
    topic: "Planets",
    question: "What is Olympus Mons?",
    options: [
      "The largest crater on the Moon",
      "A giant volcano on Mars, the tallest known in the Solar System",
      "A mountain range on Venus",
      "A moon of Jupiter"
    ],
    correctAnswer: "A giant volcano on Mars, the tallest known in the Solar System",
    explanation: "Olympus Mons is a shield volcano on Mars about 22 km high, roughly two and a half times the height of Mount Everest above sea level."
  },
  {
    id: 73,
    difficulty: "Medium",
    topic: "Galaxies",
    question: "What type of galaxy is the Milky Way?",
    options: ["Elliptical", "Irregular", "Barred spiral", "Lenticular"],
    correctAnswer: "Barred spiral",
    explanation: "The Milky Way is a barred spiral galaxy with a central bar of stars and spiral arms winding outward."
  },
  {
    id: 74,
    difficulty: "Medium",
    topic: "Stars",
    question: "What is a supernova?",
    options: [
      "A newborn star",
      "A very bright planet",
      "The explosion of a star at the end of its life",
      "A galaxy collision"
    ],
    correctAnswer: "The explosion of a star at the end of its life",
    explanation: "A supernova is a powerful stellar explosion, either from the collapse of a massive star's core or from a white dwarf exploding."
  },
  {
    id: 75,
    difficulty: "Medium",
    topic: "Sun",
    question: "About how long does sunlight take to reach Earth?",
    options: ["8 seconds", "8 minutes", "8 hours", "8 days"],
    correctAnswer: "8 minutes",
    explanation: "The Sun is about 150 million km away, and light covers that distance in roughly 8 minutes and 20 seconds."
  },
  {
    id: 76,
    difficulty: "Medium",
    topic: "Stars",
    question: "What colour are the hottest stars?",
    options: ["Red", "Yellow", "Orange", "Blue-white"],
    correctAnswer: "Blue-white",
    explanation: "A star's colour reflects its surface temperature. Blue-white stars can exceed 30,000 K, while red stars are around 3,000 K or cooler."
  },
  {
    id: 77,
    difficulty: "Medium",
    topic: "Cosmology",
    question: "About how old is the universe, according to current measurements?",
    options: ["4.6 billion years", "13.8 billion years", "100 billion years", "1 million years"],
    correctAnswer: "13.8 billion years",
    explanation: "Measurements of the cosmic microwave background and the expansion rate put the age of the universe at about 13.8 billion years."
  },
  {
    id: 78,
    difficulty: "Medium",
    topic: "Moon",
    question: "Why do we always see the same side of the Moon from Earth?",
    options: [
      "The Moon does not rotate at all",
      "The Moon is tidally locked, rotating once per orbit",
      "The other side is always dark",
      "Earth's atmosphere hides the far side"
    ],
    correctAnswer: "The Moon is tidally locked, rotating once per orbit",
    explanation: "The Moon's rotation period matches its orbital period because of tidal locking, so the same face always points toward Earth."
  },
  {
    id: 79,
    difficulty: "Medium",
    topic: "Sun",
    question: "What are sunspots?",
    options: [
      "Cooler, darker regions on the Sun's surface with strong magnetic fields",
      "Holes in the Sun",
      "Planets passing in front of the Sun",
      "Burning patches of coal"
    ],
    correctAnswer: "Cooler, darker regions on the Sun's surface with strong magnetic fields",
    explanation: "Sunspots are cooler than their surroundings (about 3,800 K versus about 5,800 K) because intense magnetic fields suppress heat flow."
  },
  {
    id: 80,
    difficulty: "Medium",
    topic: "Space Exploration",
    question: "Which Indian mission landed near the Moon's south polar region in 2023?",
    options: ["Chandrayaan-1", "Chandrayaan-2", "Chandrayaan-3", "Mangalyaan"],
    correctAnswer: "Chandrayaan-3",
    explanation: "Chandrayaan-3's Vikram lander touched down on August 23, 2023, making India the first country to soft-land near the lunar south polar region."
  },
  {
    id: 81,
    difficulty: "Medium",
    topic: "Space Exploration",
    question: "India's Mars Orbiter Mission (Mangalyaan) reached Mars orbit in 2014. What was special about it?",
    options: [
      "It was the first mission to land humans on Mars",
      "India became the first country to reach Mars orbit on its first attempt",
      "It discovered life on Mars",
      "It brought Martian soil back to Earth"
    ],
    correctAnswer: "India became the first country to reach Mars orbit on its first attempt",
    explanation: "Mangalyaan entered Mars orbit on September 24, 2014, making India the first Asian nation to reach Mars orbit and the first in the world to succeed on its first try."
  },
  {
    id: 82,
    difficulty: "Medium",
    topic: "Dwarf Planets",
    question: "In which year was Pluto reclassified as a dwarf planet?",
    options: ["1996", "2001", "2006", "2015"],
    correctAnswer: "2006",
    explanation: "In 2006 the IAU defined a planet and Pluto did not qualify because it has not cleared the neighbourhood around its orbit."
  },
  {
    id: 83,
    difficulty: "Medium",
    topic: "Astronomy",
    question: "What is one Astronomical Unit (AU)?",
    options: [
      "The distance from Earth to the Moon",
      "The average distance from Earth to the Sun",
      "The distance light travels in a year",
      "The diameter of the Sun"
    ],
    correctAnswer: "The average distance from Earth to the Sun",
    explanation: "One AU is about 149.6 million km, the average Earth-Sun distance, and is handy for measuring distances inside the Solar System."
  },
  {
    id: 84,
    difficulty: "Medium",
    topic: "Sun",
    question: "About how long is the Sun's activity (sunspot) cycle?",
    options: ["1 year", "11 years", "50 years", "365 years"],
    correctAnswer: "11 years",
    explanation: "Solar activity rises and falls in a cycle of about 11 years, with the Sun's magnetic poles flipping around each peak."
  },
  {
    id: 85,
    difficulty: "Medium",
    topic: "Earth",
    question: "What causes the auroras (northern and southern lights)?",
    options: [
      "Reflection of city lights",
      "Charged particles from the Sun interacting with Earth's magnetic field and atmosphere",
      "Moonlight scattering in clouds",
      "Volcanic gases glowing"
    ],
    correctAnswer: "Charged particles from the Sun interacting with Earth's magnetic field and atmosphere",
    explanation: "Solar wind particles are guided by Earth's magnetic field toward the poles, where they excite atmospheric gases that glow."
  },
  {
    id: 86,
    difficulty: "Medium",
    topic: "Space Exploration",
    question: "What was Ingenuity, which flew in 2021?",
    options: [
      "A telescope orbiting Jupiter",
      "A small helicopter that made powered flights on Mars",
      "A Moon rover",
      "A probe that landed on Venus"
    ],
    correctAnswer: "A small helicopter that made powered flights on Mars",
    explanation: "Ingenuity made the first powered, controlled flight on another planet on April 19, 2021, travelling with the Perseverance rover."
  },
  {
    id: 87,
    difficulty: "Medium",
    topic: "Space Exploration",
    question: "Who was the first woman to travel into space?",
    options: ["Sally Ride", "Valentina Tereshkova", "Kalpana Chawla", "Mae Jemison"],
    correctAnswer: "Valentina Tereshkova",
    explanation: "Valentina Tereshkova flew aboard Vostok 6 in June 1963 and became the first woman in space."
  },
  {
    id: 88,
    difficulty: "Medium",
    topic: "Black Holes",
    question: "What is 'spaghettification'?",
    options: [
      "A way to cool a star",
      "The stretching of an object by extreme tidal forces near a black hole",
      "A type of galaxy shape",
      "The merging of two planets"
    ],
    correctAnswer: "The stretching of an object by extreme tidal forces near a black hole",
    explanation: "Gravity near a black hole is so much stronger on the near side of an object than the far side that the object is stretched into a long thin shape."
  },
  {
    id: 89,
    difficulty: "Medium",
    topic: "Space Exploration",
    question: "In which year was the Hubble Space Telescope launched?",
    options: ["1969", "1981", "1990", "2003"],
    correctAnswer: "1990",
    explanation: "Hubble was launched in April 1990 aboard the Space Shuttle Discovery and has been observing for over three decades."
  },
  {
    id: 90,
    difficulty: "Medium",
    topic: "Dwarf Planets",
    question: "Which dwarf planet is the largest object in the asteroid belt?",
    options: ["Vesta", "Ceres", "Pallas", "Eros"],
    correctAnswer: "Ceres",
    explanation: "Ceres is about 940 km wide and is the only dwarf planet in the inner Solar System. It holds roughly a third of the belt's total mass."
  },

  // ------------------------------ HARD ------------------------------
  {
    id: 91,
    difficulty: "Hard",
    topic: "Planets",
    question: "Which of these planets rotates in the opposite direction (retrograde) to most planets?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    correctAnswer: "Venus",
    explanation: "Venus has an axial tilt of about 177° and spins backwards, so the Sun rises in the west there."
  },
  {
    id: 92,
    difficulty: "Hard",
    topic: "Planets",
    question: "Which planet has the strongest magnetic field of all the planets?",
    options: ["Earth", "Jupiter", "Mars", "Venus"],
    correctAnswer: "Jupiter",
    explanation: "Jupiter's magnetic field, generated by metallic hydrogen deep inside, is by far the strongest of any planet and creates an enormous magnetosphere."
  },
  {
    id: 93,
    difficulty: "Hard",
    topic: "Planets",
    question: "Which planet has the fastest sustained winds in the Solar System, reaching about 2,000 km/h?",
    options: ["Jupiter", "Mars", "Neptune", "Mercury"],
    correctAnswer: "Neptune",
    explanation: "Neptune's winds can exceed 2,000 km/h, the fastest measured in the Solar System, despite the planet receiving very little sunlight."
  },
  {
    id: 94,
    difficulty: "Hard",
    topic: "Solar System",
    question: "What is the Oort Cloud?",
    options: [
      "A cloud of gas around Jupiter",
      "A hypothesized spherical shell of icy bodies far beyond the planets, source of long-period comets",
      "The dust ring around Saturn",
      "A region of dark matter near the Sun"
    ],
    correctAnswer: "A hypothesized spherical shell of icy bodies far beyond the planets, source of long-period comets",
    explanation: "The Oort Cloud is thought to extend up to tens of thousands of AU from the Sun and to be the source of long-period comets. It has not been directly observed."
  },
  {
    id: 95,
    difficulty: "Hard",
    topic: "Astronomy",
    question: "One parsec is approximately equal to how many light-years?",
    options: ["0.33", "1", "3.26", "32.6"],
    correctAnswer: "3.26",
    explanation: "A parsec is the distance at which a star shows a parallax of one arcsecond, about 3.26 light-years or 3.09 × 10¹³ km."
  },
  {
    id: 96,
    difficulty: "Hard",
    topic: "Sun",
    question: "What is the approximate temperature at the core of the Sun?",
    options: ["5,500 K", "100,000 K", "15 million K", "1 billion K"],
    correctAnswer: "15 million K",
    explanation: "The Sun's core is about 15 million K, hot and dense enough for hydrogen fusion. The visible surface is only about 5,800 K."
  },
  {
    id: 97,
    difficulty: "Hard",
    topic: "Black Holes",
    question: "Roughly how massive is Sagittarius A*, the black hole at the centre of the Milky Way?",
    options: [
      "About 400 solar masses",
      "About 4 thousand solar masses",
      "About 4 million solar masses",
      "About 4 billion solar masses"
    ],
    correctAnswer: "About 4 million solar masses",
    explanation: "Stellar orbits around Sagittarius A* show it has about 4 million times the mass of the Sun."
  },
  {
    id: 98,
    difficulty: "Hard",
    topic: "Galaxies",
    question: "What is a quasar?",
    options: [
      "A very bright galactic nucleus powered by a supermassive black hole",
      "A type of dwarf planet",
      "A small neutron star",
      "A cloud of cold hydrogen"
    ],
    correctAnswer: "A very bright galactic nucleus powered by a supermassive black hole",
    explanation: "Quasars are extremely luminous active galactic nuclei where matter spiralling into a supermassive black hole radiates enormous energy."
  },
  {
    id: 99,
    difficulty: "Hard",
    topic: "Space Exploration",
    question: "Which probe, carried by the Cassini spacecraft, landed on Saturn's moon Titan in 2005?",
    options: ["Huygens", "Galileo", "Philae", "Pioneer 10"],
    correctAnswer: "Huygens",
    explanation: "The Huygens probe parachuted to Titan's surface on January 14, 2005, the farthest landing from Earth to that date."
  },
  {
    id: 100,
    difficulty: "Hard",
    topic: "Space Exploration",
    question: "Which was the first human-made spacecraft to enter interstellar space?",
    options: ["Pioneer 11", "Voyager 1", "New Horizons", "Cassini"],
    correctAnswer: "Voyager 1",
    explanation: "Voyager 1 crossed the heliopause in August 2012. Voyager 2 followed in 2018."
  },
  {
    id: 101,
    difficulty: "Hard",
    topic: "Cosmology",
    question: "According to the standard cosmological model, which best describes the universe's overall content?",
    options: [
      "About 5% ordinary matter, 27% dark matter, 68% dark energy",
      "About 95% ordinary matter, 5% dark matter",
      "About 50% stars, 50% gas",
      "About 100% dark energy"
    ],
    correctAnswer: "About 5% ordinary matter, 27% dark matter, 68% dark energy",
    explanation: "Planck satellite results indicate that ordinary atoms make up only about 5% of the universe's energy content."
  },
  {
    id: 102,
    difficulty: "Hard",
    topic: "Cosmology",
    question: "What is the approximate diameter of the observable universe?",
    options: [
      "13.8 million light-years",
      "13.8 billion light-years",
      "93 billion light-years",
      "930 billion light-years"
    ],
    correctAnswer: "93 billion light-years",
    explanation: "Because space has expanded while light travelled, the observable universe is about 93 billion light-years across, much bigger than 2 × 13.8 billion."
  },
  {
    id: 103,
    difficulty: "Hard",
    topic: "Cosmology",
    question: "What does Hubble's law state?",
    options: [
      "Stars burn hydrogen into helium",
      "Galaxies move away from us at speeds proportional to their distance",
      "Planets orbit in ellipses",
      "Light bends near massive objects"
    ],
    correctAnswer: "Galaxies move away from us at speeds proportional to their distance",
    explanation: "Hubble's law (v = H₀d) shows that the farther a galaxy is, the faster it recedes, which is evidence for the expanding universe."
  },
  {
    id: 104,
    difficulty: "Hard",
    topic: "Space Exploration",
    question: "Where is the James Webb Space Telescope located?",
    options: [
      "In low Earth orbit like Hubble",
      "Orbiting the Moon",
      "Near the Sun-Earth L2 point, about 1.5 million km from Earth",
      "On the surface of Mars"
    ],
    correctAnswer: "Near the Sun-Earth L2 point, about 1.5 million km from Earth",
    explanation: "At L2 the telescope stays in line with the Earth and Sun, so its sunshield can keep its infrared instruments extremely cold."
  },
  {
    id: 105,
    difficulty: "Hard",
    topic: "Stars",
    question: "What type of star is Betelgeuse in the constellation Orion?",
    options: ["White dwarf", "Red supergiant", "Neutron star", "Main-sequence yellow star"],
    correctAnswer: "Red supergiant",
    explanation: "Betelgeuse is a huge, cool red supergiant that will eventually end its life as a supernova."
  },
  {
    id: 106,
    difficulty: "Hard",
    topic: "Physics",
    question: "What does Kepler's third law state?",
    options: [
      "Planets move in circles",
      "The square of a planet's orbital period is proportional to the cube of its orbit's semi-major axis",
      "A planet moves fastest when farthest from the Sun",
      "Gravity depends on colour"
    ],
    correctAnswer: "The square of a planet's orbital period is proportional to the cube of its orbit's semi-major axis",
    explanation: "Kepler's third law (T² ∝ a³) links how long a planet takes to orbit the Sun with its average distance from it."
  },
  {
    id: 107,
    difficulty: "Hard",
    topic: "Planets",
    question: "How was the planet Neptune discovered in 1846?",
    options: [
      "By accident while looking at Mars",
      "By mathematical predictions based on irregularities in Uranus's orbit",
      "By a space probe",
      "By radio signals"
    ],
    correctAnswer: "By mathematical predictions based on irregularities in Uranus's orbit",
    explanation: "Urbain Le Verrier calculated where an unseen planet must be, and Johann Galle found Neptune there in September 1846."
  },
  {
    id: 108,
    difficulty: "Hard",
    topic: "Stars",
    question: "What does the Hertzsprung-Russell diagram plot?",
    options: [
      "Star distance versus age",
      "Star luminosity versus surface temperature (or spectral class)",
      "Star mass versus colour of planets",
      "Galaxy size versus redshift"
    ],
    correctAnswer: "Star luminosity versus surface temperature (or spectral class)",
    explanation: "The H-R diagram groups stars into the main sequence, giants, supergiants and white dwarfs, and shows their stage of evolution."
  },
  {
    id: 109,
    difficulty: "Hard",
    topic: "Stars",
    question: "To which spectral class does the Sun belong?",
    options: ["O", "G", "M", "B"],
    correctAnswer: "G",
    explanation: "The Sun is a G-type main-sequence star (G2V) with a surface temperature of about 5,800 K."
  },
  {
    id: 110,
    difficulty: "Hard",
    topic: "Astrobiology",
    question: "What does the Drake equation try to estimate?",
    options: [
      "The age of the universe",
      "The number of detectable civilizations in the Milky Way",
      "The mass of dark matter",
      "The number of planets in the Solar System"
    ],
    correctAnswer: "The number of detectable civilizations in the Milky Way",
    explanation: "Frank Drake proposed the equation in 1961 to organize the factors, such as star formation rate and the fraction of planets with life, that affect how many civilizations we might detect."
  },
  {
    id: 111,
    difficulty: "Hard",
    topic: "Neutron Stars",
    question: "Roughly how much would a teaspoon of neutron star material weigh?",
    options: [
      "About a kilogram",
      "About a tonne",
      "About a million tonnes",
      "About a billion tonnes"
    ],
    correctAnswer: "About a billion tonnes",
    explanation: "Neutron star matter is packed to about 10¹⁷ kg per cubic metre, so a teaspoon would weigh billions of tonnes."
  },
  {
    id: 112,
    difficulty: "Hard",
    topic: "Exoplanets",
    question: "How many Earth-sized planets are known in the TRAPPIST-1 system, about 40 light-years away?",
    options: ["Three", "Five", "Seven", "Nine"],
    correctAnswer: "Seven",
    explanation: "TRAPPIST-1, a small red dwarf star, hosts seven roughly Earth-sized planets, several of them in or near the habitable zone."
  },
  {
    id: 113,
    difficulty: "Hard",
    topic: "Stars",
    question: "The Crab Nebula is the remnant of a supernova recorded by astronomers in which year?",
    options: ["1054 CE", "1604 CE", "1969 CE", "500 BCE"],
    correctAnswer: "1054 CE",
    explanation: "Chinese and other astronomers recorded a 'guest star' in 1054 CE. Its remains are the Crab Nebula, powered by a central pulsar."
  },
  {
    id: 114,
    difficulty: "Hard",
    topic: "Space Exploration",
    question: "ISRO's Aditya-L1 solar observatory is positioned near which point?",
    options: ["Sun-Earth L1", "Sun-Earth L2", "Earth-Moon L4", "Low Earth orbit"],
    correctAnswer: "Sun-Earth L1",
    explanation: "L1 lies about 1.5 million km from Earth toward the Sun, giving Aditya-L1 an uninterrupted view of the Sun."
  },
  {
    id: 115,
    difficulty: "Hard",
    topic: "Relativity",
    question: "What is gravitational lensing?",
    options: [
      "The bending of light by the gravity of a massive object",
      "A telescope lens made of heavy metal",
      "A way to measure planet temperatures",
      "The focusing of sound waves in space"
    ],
    correctAnswer: "The bending of light by the gravity of a massive object",
    explanation: "Massive objects such as galaxies and clusters curve spacetime and bend passing light, magnifying and distorting background objects."
  },
  {
    id: 116,
    difficulty: "Hard",
    topic: "Galaxies",
    question: "What is predicted to happen to the Milky Way and Andromeda galaxies in the distant future?",
    options: [
      "They will move apart forever",
      "They will collide and merge in roughly 4 to 5 billion years",
      "Andromeda will turn into a quasar immediately",
      "They will orbit our Sun"
    ],
    correctAnswer: "They will collide and merge in roughly 4 to 5 billion years",
    explanation: "Andromeda is moving toward the Milky Way, and the two are expected to merge into a single elliptical galaxy."
  },
  {
    id: 117,
    difficulty: "Hard",
    topic: "Astrobiology",
    question: "What is the Fermi paradox?",
    options: [
      "The puzzle of why we see no clear evidence of extraterrestrial civilizations despite the universe's size and age",
      "The mystery of why the Sun shines",
      "The conflict between two models of gravity",
      "The question of why planets orbit in a plane"
    ],
    correctAnswer: "The puzzle of why we see no clear evidence of extraterrestrial civilizations despite the universe's size and age",
    explanation: "Physicist Enrico Fermi asked, 'Where is everybody?', pointing to the tension between high odds of alien life and the lack of evidence for it."
  },

  // --------------------------- VERY HARD ---------------------------
  {
    id: 118,
    difficulty: "Very Hard",
    topic: "Neutron Stars",
    question: "Approximately what is the upper mass limit of a neutron star, known as the Tolman-Oppenheimer-Volkoff limit?",
    options: [
      "About 0.5 solar masses",
      "About 1.4 solar masses",
      "About 2 to 3 solar masses",
      "About 20 solar masses"
    ],
    correctAnswer: "About 2 to 3 solar masses",
    explanation: "Beyond roughly 2 to 3 solar masses, a neutron star cannot resist gravity and is expected to collapse into a black hole. The exact value is uncertain."
  },
  {
    id: 119,
    difficulty: "Very Hard",
    topic: "Cosmology",
    question: "Who discovered the period-luminosity relation of Cepheid variable stars, a key tool for measuring cosmic distances?",
    options: ["Henrietta Leavitt", "Annie Jump Cannon", "Cecilia Payne", "Vera Rubin"],
    correctAnswer: "Henrietta Leavitt",
    explanation: "Henrietta Swan Leavitt found that brighter Cepheids pulsate more slowly, allowing astronomers to determine distances to other galaxies."
  },
  {
    id: 120,
    difficulty: "Very Hard",
    topic: "Cosmology",
    question: "Observations of which type of objects led to the 1998 discovery that the universe's expansion is accelerating?",
    options: ["Pulsars", "Type Ia supernovae", "Quasar jets", "Globular clusters"],
    correctAnswer: "Type Ia supernovae",
    explanation: "Distant Type Ia supernovae appeared dimmer than expected, showing accelerating expansion. This earned the 2011 Nobel Prize in Physics for Perlmutter, Schmidt and Riess."
  },
  {
    id: 121,
    difficulty: "Very Hard",
    topic: "Exoplanets",
    question: "Which was the first exoplanet discovered orbiting a Sun-like main-sequence star?",
    options: ["51 Pegasi b", "Proxima b", "Kepler-22b", "TRAPPIST-1e"],
    correctAnswer: "51 Pegasi b",
    explanation: "Michel Mayor and Didier Queloz announced 51 Pegasi b in 1995, a 'hot Jupiter'. They shared the 2019 Nobel Prize in Physics for it."
  },
  {
    id: 122,
    difficulty: "Very Hard",
    topic: "Black Holes",
    question: "What is the formula for the Schwarzschild radius of a non-rotating black hole of mass M?",
    options: ["GM/c²", "2GM/c²", "GM/c", "2GM/c"],
    correctAnswer: "2GM/c²",
    explanation: "The Schwarzschild radius is Rs = 2GM/c². For the Sun it would be about 3 km."
  },
  {
    id: 123,
    difficulty: "Very Hard",
    topic: "Relativity",
    question: "The orbit of Mercury precesses by an extra amount that Newtonian gravity could not explain. What explained it?",
    options: [
      "A hidden planet called Vulcan",
      "Einstein's general theory of relativity",
      "Mercury's magnetic field",
      "Solar wind pressure"
    ],
    correctAnswer: "Einstein's general theory of relativity",
    explanation: "General relativity predicts an extra perihelion shift of about 43 arcseconds per century for Mercury, matching the observations."
  },
  {
    id: 124,
    difficulty: "Very Hard",
    topic: "Relativity",
    question: "Which 1919 observation provided early confirmation of general relativity?",
    options: [
      "Measuring the Sun's neutrinos",
      "Detecting gravitational waves",
      "Measuring the bending of starlight during a solar eclipse",
      "Seeing a black hole directly"
    ],
    correctAnswer: "Measuring the bending of starlight during a solar eclipse",
    explanation: "Arthur Eddington's eclipse expedition measured starlight deflected by the Sun's gravity, in agreement with Einstein's prediction."
  },
  {
    id: 125,
    difficulty: "Very Hard",
    topic: "Stellar Physics",
    question: "What prevents a white dwarf from collapsing under its own gravity?",
    options: [
      "Nuclear fusion in its core",
      "Electron degeneracy pressure",
      "Magnetic fields",
      "Radiation from the surface"
    ],
    correctAnswer: "Electron degeneracy pressure",
    explanation: "Quantum rules (the Pauli exclusion principle) stop electrons from being squeezed into the same state, which creates pressure that supports white dwarfs."
  },
  {
    id: 126,
    difficulty: "Very Hard",
    topic: "Neutron Stars",
    question: "What is a magnetar?",
    options: [
      "A neutron star with an extremely powerful magnetic field",
      "A star made entirely of iron",
      "A planet with a magnetic core",
      "A black hole that spins very slowly"
    ],
    correctAnswer: "A neutron star with an extremely powerful magnetic field",
    explanation: "Magnetars have magnetic fields around a thousand trillion times stronger than Earth's, and they can emit giant flares of X-rays and gamma rays."
  },
  {
    id: 127,
    difficulty: "Very Hard",
    topic: "Cosmology",
    question: "Which physicist proposed the theory of cosmic inflation in 1980-81?",
    options: ["Alan Guth", "Georges Lemaître", "Edwin Hubble", "Fred Hoyle"],
    correctAnswer: "Alan Guth",
    explanation: "Alan Guth proposed that the early universe expanded exponentially for a tiny fraction of a second, explaining its flatness and uniformity."
  },
  {
    id: 128,
    difficulty: "Very Hard",
    topic: "Cosmology",
    question: "Big Bang nucleosynthesis produced mostly which elements, and in roughly what proportions by mass?",
    options: [
      "About 75% hydrogen and 25% helium",
      "About 50% hydrogen and 50% carbon",
      "About 90% helium and 10% hydrogen",
      "About 75% oxygen and 25% iron"
    ],
    correctAnswer: "About 75% hydrogen and 25% helium",
    explanation: "In the first few minutes the universe produced roughly 75% hydrogen and 25% helium by mass, with traces of deuterium and lithium. Heavier elements came later from stars."
  },
  {
    id: 129,
    difficulty: "Very Hard",
    topic: "Cosmology",
    question: "Which two scientists first detected the cosmic microwave background in 1965?",
    options: [
      "Penzias and Wilson",
      "Hubble and Humason",
      "Hewish and Bell",
      "Smoot and Mather"
    ],
    correctAnswer: "Penzias and Wilson",
    explanation: "Arno Penzias and Robert Wilson found an unexplained microwave 'noise' with a Bell Labs antenna, later identified as the CMB. They received the 1978 Nobel Prize."
  },
  {
    id: 130,
    difficulty: "Very Hard",
    topic: "Black Holes",
    question: "What is the ergosphere of a rotating (Kerr) black hole?",
    options: [
      "The region inside the event horizon",
      "A region outside the event horizon where spacetime is dragged so strongly that nothing can stay stationary",
      "The disk of gas around the black hole",
      "A region where time stops completely"
    ],
    correctAnswer: "A region outside the event horizon where spacetime is dragged so strongly that nothing can stay stationary",
    explanation: "In the ergosphere frame dragging forces everything to rotate with the black hole, but objects can still escape from it."
  },
  {
    id: 131,
    difficulty: "Very Hard",
    topic: "High-Energy Astrophysics",
    question: "What is the leading explanation for long-duration gamma-ray bursts?",
    options: [
      "Collapse of very massive stars into black holes",
      "Collisions between planets",
      "Solar flares on distant stars",
      "Comets hitting white dwarfs"
    ],
    correctAnswer: "Collapse of very massive stars into black holes",
    explanation: "Long gamma-ray bursts are linked to the core collapse of massive, rapidly rotating stars, which launch powerful relativistic jets."
  },
  {
    id: 132,
    difficulty: "Very Hard",
    topic: "Sun",
    question: "What is the 'coronal heating problem'?",
    options: [
      "The Sun's core is cooler than expected",
      "The Sun's corona is millions of degrees, far hotter than its surface",
      "The Sun is heating Earth too quickly",
      "Sunspots are hotter than the surface"
    ],
    correctAnswer: "The Sun's corona is millions of degrees, far hotter than its surface",
    explanation: "The corona reaches over a million kelvin while the surface is only about 5,800 K. How it is heated is still an active research question."
  },
  {
    id: 133,
    difficulty: "Very Hard",
    topic: "Cosmology",
    question: "In which units is the Hubble constant usually expressed?",
    options: ["km/s per megaparsec", "Light-years per year", "Kilograms per cubic metre", "Kelvin per second"],
    correctAnswer: "km/s per megaparsec",
    explanation: "The Hubble constant gives the recession speed in km/s for each megaparsec of distance, and measured values are around 67 to 73 km/s/Mpc."
  },
  {
    id: 134,
    difficulty: "Very Hard",
    topic: "Cosmology",
    question: "Olbers' paradox asks why the night sky is dark. What is the key resolution?",
    options: [
      "Stars are too small to see",
      "The universe has a finite age and is expanding, so light from the most distant regions has not all reached us",
      "Interstellar dust blocks all stars completely",
      "The Moon blocks the light of other stars"
    ],
    correctAnswer: "The universe has a finite age and is expanding, so light from the most distant regions has not all reached us",
    explanation: "If the universe were infinite, static and eternal, every line of sight would end on a star. A finite age and cosmic expansion avoid that."
  },
  {
    id: 135,
    difficulty: "Very Hard",
    topic: "Cosmology",
    question: "Why did Einstein originally introduce the cosmological constant (Λ)?",
    options: [
      "To explain black holes",
      "To allow a static, unchanging universe in his equations",
      "To describe quantum particles",
      "To measure the speed of light"
    ],
    correctAnswer: "To allow a static, unchanging universe in his equations",
    explanation: "Einstein added Λ in 1917 to balance gravity. After the expansion of the universe was discovered, the term was revived as a model for dark energy."
  },
  {
    id: 136,
    difficulty: "Very Hard",
    topic: "Celestial Mechanics",
    question: "What is the Roche limit?",
    options: [
      "The maximum speed of a spacecraft",
      "The distance within which a body held together only by its own gravity is torn apart by tidal forces from a larger body",
      "The boundary of the Solar System",
      "The distance at which a planet becomes visible"
    ],
    correctAnswer: "The distance within which a body held together only by its own gravity is torn apart by tidal forces from a larger body",
    explanation: "Inside the Roche limit, tidal forces exceed a satellite's self-gravity, which helps explain why planetary rings form close to their planets."
  },
  {
    id: 137,
    difficulty: "Very Hard",
    topic: "Stellar Physics",
    question: "What is the Eddington luminosity?",
    options: [
      "The luminosity of the Sun",
      "The maximum luminosity at which radiation pressure balances gravity for an object",
      "The brightness of the faintest star",
      "The brightness of the full Moon"
    ],
    correctAnswer: "The maximum luminosity at which radiation pressure balances gravity for an object",
    explanation: "Above the Eddington limit, outward radiation pressure exceeds gravity and blows away surrounding material. It limits how fast black holes and stars can accrete matter."
  },
  {
    id: 138,
    difficulty: "Very Hard",
    topic: "Black Holes",
    question: "At what distance from a non-rotating black hole is the photon sphere, where light can orbit?",
    options: [
      "1 Schwarzschild radius",
      "1.5 Schwarzschild radii",
      "3 Schwarzschild radii",
      "6 Schwarzschild radii"
    ],
    correctAnswer: "1.5 Schwarzschild radii",
    explanation: "The photon sphere lies at r = 3GM/c², which is 1.5 times the Schwarzschild radius. Light orbits there only on unstable circular paths."
  },
  {
    id: 139,
    difficulty: "Very Hard",
    topic: "Dark Matter",
    question: "What did Vera Rubin's measurements of galaxy rotation curves suggest?",
    options: [
      "Galaxies contain more unseen mass (dark matter) than visible matter",
      "Galaxies rotate faster at the centre than at the edge",
      "Galaxies are shrinking",
      "Galaxies contain no black holes"
    ],
    correctAnswer: "Galaxies contain more unseen mass (dark matter) than visible matter",
    explanation: "Stars at the outskirts of galaxies orbit as fast as those near the centre, which implies extra unseen mass holding them in orbit."
  },

  // ------------------------ TRUE COSMOS LOVER ------------------------
  {
    id: 140,
    difficulty: "True Cosmos Lover",
    topic: "Black Holes",
    question: "In 2019 the Event Horizon Telescope collaboration released the first image of a black hole's shadow. Which black hole was it?",
    options: ["Sagittarius A*", "M87*", "Cygnus X-1", "TON 618"],
    correctAnswer: "M87*",
    explanation: "The 2019 image showed the supermassive black hole at the centre of galaxy Messier 87, about 55 million light-years away."
  },
  {
    id: 141,
    difficulty: "True Cosmos Lover",
    topic: "Black Holes",
    question: "In which year did the Event Horizon Telescope release the first image of Sagittarius A*, the Milky Way's central black hole?",
    options: ["2012", "2016", "2019", "2022"],
    correctAnswer: "2022",
    explanation: "The image of Sagittarius A* was released in May 2022, three years after the image of M87*."
  },
  {
    id: 142,
    difficulty: "True Cosmos Lover",
    topic: "Cosmology",
    question: "What is the 'Hubble tension'?",
    options: [
      "A disagreement between measurements of the universe's expansion rate from the early and late universe",
      "The strain on the Hubble telescope's mirror",
      "A dispute about the age of the Sun",
      "The tension between dark matter and ordinary matter"
    ],
    correctAnswer: "A disagreement between measurements of the universe's expansion rate from the early and late universe",
    explanation: "CMB-based measurements give a lower expansion rate (about 67 km/s/Mpc) than local distance-ladder measurements (about 73 km/s/Mpc). This could hint at new physics."
  },
  {
    id: 143,
    difficulty: "True Cosmos Lover",
    topic: "Gravitational Waves",
    question: "What made the 2017 event GW170817 a landmark in astronomy?",
    options: [
      "It was the first neutron star merger seen in both gravitational waves and light, including a kilonova",
      "It was the first detection of a black hole merger",
      "It detected the first planet outside the galaxy",
      "It proved that dark matter exists"
    ],
    correctAnswer: "It was the first neutron star merger seen in both gravitational waves and light, including a kilonova",
    explanation: "GW170817 was observed in gravitational waves, gamma rays and across the spectrum. It showed that such mergers forge heavy elements like gold and platinum."
  },
  {
    id: 144,
    difficulty: "True Cosmos Lover",
    topic: "Large-Scale Structure",
    question: "What is the name of the galaxy supercluster that contains the Milky Way, defined in 2014?",
    options: ["Laniakea", "Shapley", "Perseus-Pisces", "Coma"],
    correctAnswer: "Laniakea",
    explanation: "Laniakea, Hawaiian for 'immense heaven', contains about 100,000 galaxies and spans roughly 500 million light-years."
  },
  {
    id: 145,
    difficulty: "True Cosmos Lover",
    topic: "Large-Scale Structure",
    question: "What is the 'Great Attractor'?",
    options: [
      "A gravitational anomaly pulling our region of galaxies toward it, partly hidden behind the Milky Way",
      "A giant black hole at the centre of the Milky Way",
      "A star cluster inside Orion",
      "An alien megastructure"
    ],
    correctAnswer: "A gravitational anomaly pulling our region of galaxies toward it, partly hidden behind the Milky Way",
    explanation: "The Great Attractor is a concentration of mass in the direction of the Norma cluster that influences the motion of many galaxies. The Milky Way's disk hides much of it."
  },
  {
    id: 146,
    difficulty: "True Cosmos Lover",
    topic: "Large-Scale Structure",
    question: "What is the Boötes Void?",
    options: [
      "A vast, nearly empty region of space about 330 million light-years across",
      "A black hole in Boötes",
      "A planet-free solar system",
      "A dark nebula near the Sun"
    ],
    correctAnswer: "A vast, nearly empty region of space about 330 million light-years across",
    explanation: "The Boötes Void is one of the largest known cosmic voids, with very few galaxies compared with typical regions of space."
  },
  {
    id: 147,
    difficulty: "True Cosmos Lover",
    topic: "Black Holes",
    question: "What is the black hole information paradox?",
    options: [
      "A conflict between quantum mechanics, which says information is preserved, and the apparent loss of information in Hawking radiation",
      "The difficulty of sending radio messages near black holes",
      "The fact that black holes cannot be photographed",
      "The idea that black holes are made of dark matter"
    ],
    correctAnswer: "A conflict between quantum mechanics, which says information is preserved, and the apparent loss of information in Hawking radiation",
    explanation: "If a black hole evaporates into purely thermal radiation, the information about what fell in seems lost. That clashes with quantum theory and is still unresolved."
  },
  {
    id: 148,
    difficulty: "True Cosmos Lover",
    topic: "Neutrino Astronomy",
    question: "When supernova SN 1987A exploded in the Large Magellanic Cloud, how did the detected neutrinos compare in timing with the visible light?",
    options: [
      "They arrived hours before the light brightened",
      "They arrived exactly at the same moment",
      "They arrived days after the light",
      "No neutrinos were ever detected"
    ],
    correctAnswer: "They arrived hours before the light brightened",
    explanation: "Neutrino detectors recorded a burst a few hours before the supernova was seen optically, because neutrinos escape the collapsing core before the shock breaks out of the star."
  },
  {
    id: 149,
    difficulty: "True Cosmos Lover",
    topic: "Radio Astronomy",
    question: "The first fast radio burst, the 'Lorimer burst', was found in archival data from which telescope?",
    options: ["Parkes", "Arecibo", "Very Large Array", "Hubble"],
    correctAnswer: "Parkes",
    explanation: "Duncan Lorimer's team discovered the burst in 2007 in 2001 data from the Parkes radio telescope in Australia. FRBs last only milliseconds."
  },
  {
    id: 150,
    difficulty: "True Cosmos Lover",
    topic: "Quantum Gravity",
    question: "What is the approximate value of the Planck length?",
    options: ["1.6 × 10⁻³⁵ m", "1.6 × 10⁻¹⁵ m", "1.6 × 10⁻¹⁰ m", "1.6 × 10⁻⁵ m"],
    correctAnswer: "1.6 × 10⁻³⁵ m",
    explanation: "The Planck length is about 1.6 × 10⁻³⁵ m, the scale at which quantum effects of gravity are expected to become important."
  },
  {
    id: 151,
    difficulty: "True Cosmos Lover",
    topic: "Cosmology",
    question: "The cosmic neutrino background is a relic of which epoch?",
    options: [
      "About one second after the Big Bang, when neutrinos decoupled",
      "About 380,000 years after the Big Bang",
      "About 1 billion years after the Big Bang",
      "The formation of the Solar System"
    ],
    correctAnswer: "About one second after the Big Bang, when neutrinos decoupled",
    explanation: "Neutrinos stopped interacting with other matter about a second after the Big Bang. The relic background (about 1.9 K) is predicted but not yet directly detected."
  },
  {
    id: 152,
    difficulty: "True Cosmos Lover",
    topic: "Dark Matter",
    question: "Why is the Bullet Cluster important in the dark matter debate?",
    options: [
      "Lensing shows most of its mass is separated from the hot gas, supporting dark matter",
      "It is the closest galaxy cluster to Earth",
      "It contains the largest known star",
      "It proves that there are no black holes"
    ],
    correctAnswer: "Lensing shows most of its mass is separated from the hot gas, supporting dark matter",
    explanation: "In the collision of two clusters, the hot gas lagged behind while the mass traced by lensing passed through, evidence for dark matter."
  },
  {
    id: 153,
    difficulty: "True Cosmos Lover",
    topic: "Small Bodies",
    question: "Which object, discovered in 2017, was the first confirmed interstellar object seen passing through our Solar System?",
    options: ["ʻOumuamua", "Halley's Comet", "Ceres", "Sedna"],
    correctAnswer: "ʻOumuamua",
    explanation: "ʻOumuamua was found by the Pan-STARRS telescope in Hawaii on a hyperbolic path, which showed that it came from outside the Solar System."
  },
  {
    id: 154,
    difficulty: "True Cosmos Lover",
    topic: "Small Bodies",
    question: "Which object, discovered in July 2025, became the third known interstellar object to pass through our Solar System?",
    options: ["3I/ATLAS", "2I/Borisov", "1I/ʻOumuamua", "C/2025 Rho"],
    correctAnswer: "3I/ATLAS",
    explanation: "3I/ATLAS was discovered on July 1, 2025 by the ATLAS survey. It followed ʻOumuamua (1I) and Borisov (2I)."
  },
  {
    id: 155,
    difficulty: "True Cosmos Lover",
    topic: "Gravitational Waves",
    question: "The Hulse-Taylor binary pulsar provided the first indirect evidence for gravitational waves. What did they observe?",
    options: [
      "The orbit shrinking at exactly the rate general relativity predicts",
      "A burst of gamma rays",
      "A direct ripple in a laser detector",
      "The pulsar changing colour"
    ],
    correctAnswer: "The orbit shrinking at exactly the rate general relativity predicts",
    explanation: "The orbital period of PSR B1913+16 decreases because the system radiates gravitational waves, matching general relativity. Hulse and Taylor received the 1993 Nobel Prize."
  },
  {
    id: 156,
    difficulty: "True Cosmos Lover",
    topic: "Gravitational Waves",
    question: "In 2023, pulsar timing arrays such as NANOGrav reported evidence for what?",
    options: [
      "A background of very low-frequency (nanohertz) gravitational waves",
      "The first planet outside the galaxy",
      "The decay of dark matter",
      "A new moon of Neptune"
    ],
    correctAnswer: "A background of very low-frequency (nanohertz) gravitational waves",
    explanation: "Tiny correlated changes in the arrival times of pulsar signals point to a gravitational-wave background, possibly from merging supermassive black holes."
  },
  {
    id: 157,
    difficulty: "True Cosmos Lover",
    topic: "Black Holes",
    question: "Roger Penrose shared the 2020 Nobel Prize in Physics for showing what?",
    options: [
      "That black hole formation is a robust prediction of general relativity",
      "That the universe is expanding",
      "That neutrinos have mass",
      "That dark energy exists"
    ],
    correctAnswer: "That black hole formation is a robust prediction of general relativity",
    explanation: "Penrose's 1965 singularity theorem showed that once a region collapses far enough, a singularity is unavoidable in general relativity."
  },
];

export default quizQuestions;