const achievements = [
  {
    id: 1,
    title: "First Animal to Orbit Earth",
    date: "November 3, 1957",
    shortDescription:
      "Laika became the first animal to orbit Earth, proving that living organisms could survive an orbital flight.",
    image: "/images/laika.jpg",
    description:
      "Laika, a Soviet dog, became the first animal to orbit Earth aboard Sputnik 2. Her flight provided important biological data for the development of human spaceflight, although the spacecraft was not designed to return her safely.",
  },

  {
    id: 2,
    title: "First Living Organisms Safely Recovered",
    date: "August 19, 1960",
    shortDescription:
      "Belka and Strelka became the first animals to complete an orbital flight and return safely to Earth.",
    image: "/images/belka-strelka.jpg",
    description:
      "The Soviet dogs Belka and Strelka completed 17 orbits of Earth aboard Sputnik 5 and were safely recovered. They became the first living organisms to survive an orbital spaceflight and return to Earth.",
  },

  {
    id: 3,
    title: "First Human in Space",
    date: "April 12, 1961",
    shortDescription:
      "Yuri Gagarin became the first human to travel into space and orbit Earth.",
    image: "/images/yuri-gagarin.jpg",
    description:
      "Yuri Gagarin became the first human in space when he completed one orbit of Earth aboard Vostok 1. His flight lasted 108 minutes and marked the beginning of human orbital spaceflight.",
  },

  {
    id: 4,
    title: "First American in Space",
    date: "May 5, 1961",
    shortDescription:
      "Alan Shepard became the first American to travel into space during a suborbital flight.",
    image: "/images/alan-shepard.jpg",
    description:
      "Alan Shepard became the first American in space during the Freedom 7 flight. His suborbital journey lasted just over 15 minutes and reached an altitude of about 116 miles.",
  },

  {
    id: 5,
    title: "First Woman in Space",
    date: "June 16, 1963",
    shortDescription:
      "Valentina Tereshkova became the first woman to travel into space.",
    image: "/images/valentina-tereshkova.jpg",
    description:
      "Valentina Tereshkova became the first woman in space aboard Vostok 6. She spent almost three days in orbit and completed 48 orbits around Earth.",
  },

  {
    id: 6,
    title: "First Spacewalk",
    date: "March 18, 1965",
    shortDescription:
      "Alexei Leonov became the first human to leave a spacecraft and float freely in space.",
    image: "/images/alexei-leonov.jpg",
    description:
      "Alexei Leonov performed humanity's first spacewalk during the Voskhod 2 flight. He spent about 10 minutes outside his spacecraft, demonstrating that humans could work outside an orbiting vehicle.",
  },

  {
    id: 7,
    title: "First Space Docking",
    date: "March 16, 1966",
    shortDescription:
      "Two spacecraft successfully connected together while orbiting Earth.",
    image: "/images/first-docking.jpg",
    description:
      "Neil Armstrong and David Scott achieved the first docking between two spacecraft in orbit. The breakthrough established a crucial technique for future space stations, lunar missions, and spacecraft operations.",
  },

  {
    id: 8,
    title: "First Human on the Moon",
    date: "July 20, 1969",
    shortDescription:
      "Neil Armstrong became the first human to walk on another celestial body.",
    image: "/images/first-moonwalker.jpg",
    description:
      "Neil Armstrong became the first person to step onto the lunar surface. Buzz Aldrin followed shortly afterward, making humanity's first exploration of another world a reality.",
  },

  {
    id: 9,
    title: "First Reusable Spacecraft",
    date: "April 12, 1981",
    shortDescription:
      "The Space Shuttle became the world's first reusable spacecraft.",
    image: "/images/reusable-spacecraft.jpg",
    description:
      "The Space Shuttle introduced a reusable spacecraft capable of launching into orbit and returning to Earth for a runway landing. Its reusable orbiter fundamentally changed how spacecraft were designed and operated.",
  },

  {
    id: 10,
    title: "First Woman to Perform a Spacewalk",
    date: "July 25, 1984",
    shortDescription:
      "Svetlana Savitskaya became the first woman to perform a spacewalk.",
    image: "/images/svetlana-savitskaya.jpg",
    description:
      "Soviet cosmonaut Svetlana Savitskaya became the first woman to perform an extravehicular activity. She spent time outside the Salyut 7 space station testing techniques including welding in space.",
  },

  {
    id: 11,
    title: "First American Woman in Space",
    date: "June 18, 1983",
    shortDescription:
      "Sally Ride became the first American woman to travel into space.",
    image: "/images/sally-ride.jpg",
    description:
      "Sally Ride became the first American woman in space when she flew aboard Space Shuttle Challenger. Her achievement opened a new chapter for women in American human spaceflight.",
  },

  {
    id: 12,
    title: "First African-American in Space",
    date: "August 30, 1983",
    shortDescription:
      "Guion Bluford became the first African-American person to travel into space.",
    image: "/images/guion-bluford.jpg",
    description:
      "Guion 'Guy' Bluford became the first African-American to fly in space. He flew aboard Space Shuttle Challenger and later completed three additional spaceflights.",
  },

  {
    id: 13,
    title: "First American Woman Spacewalker",
    date: "October 11, 1984",
    shortDescription:
      "Kathryn Sullivan became the first American woman to perform a spacewalk.",
    image: "/images/kathryn-sullivan.jpg",
    description:
      "Kathryn Sullivan became the first American woman to perform a spacewalk during Space Shuttle Challenger's STS-41G mission. She and David Leestma demonstrated techniques for orbital refueling.",
  },

  {
    id: 14,
    title: "First Asian-American in Space",
    date: "January 24, 1985",
    shortDescription:
      "Ellison Onizuka became the first Asian-American to travel into space.",
    image: "/images/ellison-onizuka.jpg",
    description:
      "Ellison Onizuka became the first Asian-American to fly in space. He launched aboard Space Shuttle Discovery in 1985 as a mission specialist.",
  },

  {
    id: 15,
    title: "First On-Orbit Satellite Repair",
    date: "April 6, 1984",
    shortDescription:
      "Astronauts successfully repaired a damaged satellite while working in orbit.",
    image: "/images/satellite-repair.jpg",
    description:
      "Astronauts performed the first successful repair of a satellite while in orbit, replacing instruments on the Solar Maximum Mission spacecraft. The achievement demonstrated that complex spacecraft could be serviced instead of simply abandoned.",
  },

  {
    id: 16,
    title: "First African-American Woman in Space",
    date: "September 12, 1992",
    shortDescription:
      "Mae Jemison became the first African-American woman to travel into space.",
    image: "/images/mae-jemison.jpg",
    description:
      "Mae Jemison became the first African-American woman in space aboard Space Shuttle Endeavour. During her flight, she participated in experiments involving human physiology and life sciences.",
  },

  {
    id: 17,
    title: "First Wheeled Vehicle on Another Planet",
    date: "July 5, 1997",
    shortDescription:
      "Sojourner became the first wheeled vehicle to operate on another planet.",
    image: "/images/sojourner-rover.jpg",
    description:
      "The Sojourner rover became the first wheeled vehicle operated on another planet when it began exploring Mars. Its success demonstrated that mobile robotic vehicles could travel across another world's surface.",
  },

  {
    id: 18,
    title: "First Evidence of Planets Around a Sun-Like Star",
    date: "October 6, 1995",
    shortDescription:
      "51 Pegasi b became the first confirmed exoplanet discovered orbiting a Sun-like star.",
    image: "/images/51-pegasi-b.jpg",
    description:
      "Astronomers Michel Mayor and Didier Queloz announced the discovery of 51 Pegasi b, the first exoplanet identified orbiting a normal Sun-like star. The discovery transformed the search for planets beyond our Solar System.",
  },

  {
    id: 19,
    title: "First Permanent Human Presence in Space",
    date: "November 2, 2000",
    shortDescription:
      "Humans began living continuously aboard the International Space Station.",
    image: "/images/iss-permanent-presence.jpg",
    description:
      "On November 2, 2000, the Expedition 1 crew entered the International Space Station. From that day onward, humans have maintained a continuous presence aboard the station.",
  },

  {
    id: 20,
    title: "First Direct Evidence of Planet Formation",
    date: "April 26, 2001",
    shortDescription:
      "Astronomers obtained direct visual evidence of disks where planets are forming around young stars.",
    image: "/images/planet-formation.jpg",
    description:
      "Hubble observations provided some of the first direct visual evidence of protoplanetary disks around young stars. These disks contain the material from which planets can form.",
  },

  {
    id: 21,
    title: "First Exoplanet Atmosphere Detected",
    date: "November 27, 2001",
    shortDescription:
      "Astronomers made the first direct measurement of an atmosphere belonging to a planet outside our Solar System.",
    image: "/images/exoplanet-atmosphere.jpg",
    description:
      "Using the Hubble Space Telescope, astronomers detected sodium in the atmosphere of the exoplanet HD 209458 b. It was the first direct measurement of an exoplanet's atmosphere.",
  },

  {
    id: 22,
    title: "First Evidence of Dark Energy",
    date: "1998",
    shortDescription:
      "Observations revealed that the expansion of the universe is accelerating rather than slowing down.",
    image: "/images/dark-energy.jpg",
    description:
      "Astronomers studying distant Type Ia supernovae found evidence that the expansion of the universe is accelerating. The unknown phenomenon responsible for this acceleration became known as dark energy.",
  },

  {
    id: 23,
    title: "First Food Grown and Eaten in Space",
    date: "August 10, 2015",
    shortDescription:
      "Astronauts ate food grown aboard the International Space Station for the first time.",
    image: "/images/space-grown-lettuce.jpg",
    description:
      "Astronauts aboard the International Space Station ate red romaine lettuce grown in the station's Veggie plant-growth system. It was the first time astronauts had eaten food grown in space.",
  },

  {
    id: 24,
    title: "First Gravitational Waves Detected",
    date: "September 14, 2015",
    shortDescription:
      "LIGO directly detected ripples in spacetime produced by a cosmic collision.",
    image: "/images/gravitational-waves.jpg",
    description:
      "The LIGO detectors recorded gravitational waves produced by the merger of two black holes. The detection provided the first direct observation of gravitational waves and opened a new way to study the universe.",
  },

  {
    id: 25,
    title: "First Black Hole Image",
    date: "April 10, 2019",
    shortDescription:
      "Scientists revealed the first image showing the shadow of a black hole.",
    image: "/images/first-black-hole.jpg",
    description:
      "The Event Horizon Telescope collaboration produced the first image of a black hole's shadow. The target was the supermassive black hole at the center of the galaxy Messier 87.",
  },

  {
    id: 26,
    title: "First Seismic Activity Detected on Another Planet",
    date: "April 6, 2019",
    shortDescription:
      "Scientists detected the first confirmed seismic event on a world beyond Earth.",
    image: "/images/marsquake.jpg",
    description:
      "NASA's InSight mission detected seismic activity on Mars, providing the first direct evidence of marsquakes. These measurements allowed scientists to study the interior structure of another planet.",
  },

  {
    id: 27,
    title: "First Powered Flight on Another Planet",
    date: "April 19, 2021",
    shortDescription:
      "A small helicopter achieved the first powered, controlled flight on another planet.",
    image: "/images/ingenuity-flight.jpg",
    description:
      "NASA's Ingenuity helicopter became the first aircraft to make a powered, controlled flight on another planet. It successfully lifted off, hovered, and landed on Mars in an atmosphere far thinner than Earth's.",
  },

  {
    id: 28,
    title: "First Known Interstellar Object",
    date: "October 19, 2017",
    shortDescription:
      "Astronomers discovered the first known object from another star system passing through ours.",
    image: "/images/oumuamua.jpg",
    description:
      "Astronomers discovered 1I/2017 U1, later named 'Oumuamua. Its trajectory showed that it originated outside our Solar System, making it the first known interstellar object observed passing through our planetary system.",
  },

  {
    id: 29,
    title: "First U.S. Asteroid Sample Returned",
    date: "September 24, 2023",
    shortDescription:
      "Scientists received pristine material collected directly from an asteroid.",
    image: "/images/asteroid-sample.jpg",
    description:
      "NASA's OSIRIS-REx returned a sample collected from asteroid Bennu to Earth. The capsule delivered rocks and dust that had remained largely untouched since the early Solar System.",
  },

  {
    id: 30,
    title: "First Ion-Propulsion Deep-Space Demonstration",
    date: "November 24, 1998",
    shortDescription:
      "Ion propulsion was demonstrated as the primary propulsion system for a deep-space spacecraft.",
    image: "/images/ion-propulsion.jpg",
    description:
      "NASA's Deep Space 1 demonstrated the use of ion propulsion as its primary propulsion system in deep space. The technology uses electrically accelerated ions to produce a very small but highly efficient thrust over long periods.",
  },
];

export default achievements;