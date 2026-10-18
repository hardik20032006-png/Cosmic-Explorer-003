const spaceMissions = [
  // ===================== YOUR ORIGINAL 6 MISSIONS (descriptions expanded) =====================
  {
    id: 1,
    slug: "apollo-11",
    title: "Apollo 11",
    agency: "NASA",
    date: "July 16, 1969",
    destination: "Moon",
    status: "Successful",
    shortDescription: "The first crewed mission to land humans on the Moon.",
    image: "/images/apollo-11.jpg",
    description:
      "Apollo 11 was the historic NASA mission that fulfilled President John F. Kennedy's 1961 goal of landing a human on the Moon and returning him safely to Earth before the end of the 1960s. A Saturn V rocket, the most powerful rocket ever flown at that time, lifted off from Launch Complex 39A at Kennedy Space Center, Florida, on July 16, 1969, carrying Commander Neil Armstrong, Lunar Module Pilot Buzz Aldrin and Command Module Pilot Michael Collins. After about three days of travel the spacecraft entered lunar orbit. The lunar module Eagle separated from the command module Columbia and began its descent on July 20. During the final minutes Armstrong took manual control to steer past a boulder-strewn crater, and the module touched down in the Sea of Tranquility with very little fuel remaining. Hours later Armstrong stepped onto the surface and spoke the now-famous words about one small step for a man and one giant leap for mankind, with an estimated 600 million people watching on television worldwide. Armstrong and Aldrin spent about two and a half hours outside the lander, collecting roughly 21.5 kilograms of lunar rock and soil, setting up a passive seismometer, a laser-ranging retroreflector (still used by scientists today) and a solar wind experiment, planting the American flag and leaving a commemorative plaque. They spent about 21 hours on the surface, then launched the ascent stage back to lunar orbit and rejoined Collins, who had orbited alone, out of contact with Earth each time he passed behind the Moon. The crew splashed down in the Pacific Ocean on July 24, 1969, was recovered by the USS Hornet and spent time in quarantine as a precaution. Apollo 11 transformed science, engineering and global culture, proved that crewed lunar exploration was possible, and returned samples that still reveal the Moon's age and origin."
  },
  {
    id: 2,
    slug: "voyager-1",
    title: "Voyager 1",
    agency: "NASA",
    date: "September 5, 1977",
    destination: "Interstellar space",
    status: "Active",
    shortDescription: "A robotic spacecraft exploring the outer Solar System and beyond.",
    image: "/images/voyager-1.jpg",
    description:
      "Voyager 1 is a robotic probe launched by NASA on September 5, 1977, from Cape Canaveral aboard a Titan IIIE-Centaur rocket, taking advantage of a rare alignment of the outer planets to study the giant worlds of the Solar System. It flew past Jupiter on March 5, 1979, returning detailed images of the Great Red Spot, the planet's turbulent cloud bands and its moons, and discovered active volcanoes on Io, the first active volcanism seen beyond Earth. It reached Saturn on November 12, 1980, and studied the ring system and the thick, hazy atmosphere of the moon Titan. The close Titan encounter bent its path out of the plane of the planets, ending its planetary tour and sending it toward interstellar space. On February 14, 1990, at the request of astronomer Carl Sagan, it turned its camera back and captured the Pale Blue Dot image showing Earth as a tiny speck in a ray of sunlight. In August 2012 Voyager 1 crossed the heliopause, the boundary where the Sun's solar wind gives way to interstellar plasma, becoming the first human-made object to enter interstellar space. It is powered by radioisotope thermoelectric generators whose output declines every year, so engineers have gradually switched off non-essential instruments and heaters to keep the remaining ones, which measure magnetic fields, plasma waves and cosmic rays, working. It carries a Golden Record containing sounds, music and images of Earth as a message for any future finder. Voyager 1 is now well over 160 times the Earth-Sun distance away, approaching a distance of one light-day, and its radio signals take many hours to reach Earth. Despite occasional faults, such as the communication problem repaired in 2024, it remains the most distant human-made object and continues to return unique data."
  },
  {
    id: 3,
    slug: "chandrayaan-3",
    title: "Chandrayaan-3",
    agency: "ISRO",
    date: "July 14, 2023",
    destination: "Moon",
    status: "Successful",
    shortDescription:
      "India's mission that achieved a successful soft landing near the lunar south pole region.",
    image: "/images/chandrayaan-3.jpg",
    description:
      "Chandrayaan-3 was India's third lunar mission and a follow-up to Chandrayaan-2, designed with a single goal: to demonstrate a safe and soft landing on the Moon along with roving and in-situ experiments. It was launched on July 14, 2023, by ISRO's LVM3 rocket from the Satish Dhawan Space Centre in Sriharikota. The spacecraft consisted of a propulsion module, which carried the lander and rover to lunar orbit, the Vikram lander and the Pragyan rover. After several orbit-raising maneuvers around Earth and a trans-lunar injection, it entered lunar orbit on August 5 and gradually lowered its orbit. On August 23, 2023, at about 6:04 PM IST, Vikram touched down near the Moon's south polar region, making India the fourth country to soft-land on the Moon and the first to do so so close to the south pole. The landing site was named Shiv Shakti Point, and August 23 is now celebrated as National Space Day in India. The six-wheeled, 26-kilogram Pragyan rover rolled down a ramp and drove across the surface. Its instruments confirmed the presence of sulfur and detected aluminium, calcium, iron, chromium, titanium, manganese, silicon and oxygen in the lunar soil. The ChaSTE probe on Vikram measured the temperature profile of the topsoil, showing a steep drop from the hot surface to a much colder layer just a few centimetres below, and the ILSA seismometer recorded local lunar seismic events. Vikram also performed a successful hop experiment, lifting off and landing again a short distance away to test technology for future sample-return missions. Both lander and rover were designed to work for one lunar day, about 14 Earth days, and were put into sleep mode before the lunar night. The propulsion module was later brought back into Earth orbit for an additional experiment. The mission cost a relatively modest amount and became a symbol of Indian engineering capability."
  },
  {
    id: 4,
    slug: "perseverance",
    title: "Mars Perseverance",
    agency: "NASA",
    date: "July 30, 2020",
    destination: "Mars",
    status: "Active",
    shortDescription:
      "A Mars rover investigating ancient environments and collecting rock samples.",
    image: "/images/perseverance.jpg",
    description:
      "The Mars 2020 mission, with its Perseverance rover, is NASA's most advanced astrobiology mission to the Red Planet. The car-sized rover was launched on July 30, 2020, aboard an Atlas V rocket from Cape Canaveral and landed in Jezero Crater on February 18, 2021, using the complex entry, descent and landing sequence known as the sky crane. Jezero was chosen because orbital images show it was once a lake fed by a river, leaving behind a delta that could have preserved signs of ancient microbial life. The rover carries seven main instruments, including the Mastcam-Z camera system, SuperCam (a laser-based rock analyzer), PIXL and SHERLOC (which examine rocks at a fine scale for chemistry and organic compounds), the RIMFAX ground-penetrating radar and the MEDA weather station. The MOXIE experiment demonstrated that oxygen can be made from the carbon dioxide in the Martian atmosphere, a key step for future human missions. Perseverance carried the small Ingenuity helicopter, which made the first powered, controlled flight on another planet on April 19, 2021, and went on to fly dozens of times before its mission ended in January 2024. The rover's most important job is to collect and seal rock and regolith samples in titanium tubes and leave them in depots for a possible future Mars Sample Return campaign, the plans for which have been repeatedly reviewed because of cost. In 2024 it examined a rock named Cheyava Falls with distinctive spots and patterns that scientists described as a potential biosignature, which still needs far more study. The rover is powered by a radioisotope generator and continues to explore the crater rim and surrounding terrain, adding to our understanding of Mars' climate, geology and habitability."
  },
  {
    id: 5,
    slug: "james-webb",
    title: "James Webb Space Telescope",
    agency: "NASA / ESA / CSA",
    date: "December 25, 2021",
    destination: "Sun–Earth L2 region",
    status: "Operational",
    shortDescription:
      "A powerful space telescope observing the early universe, galaxies, and exoplanets.",
    image: "/images/james-webb.jpg",
    description:
      "The James Webb Space Telescope (JWST) is the largest and most powerful space telescope ever built, a joint project of NASA, the European Space Agency and the Canadian Space Agency, and the scientific successor to the Hubble Space Telescope. It was launched on December 25, 2021, on an Ariane 5 rocket from Kourou, French Guiana, and travelled about a million miles to a halo orbit around the second Sun–Earth Lagrange point (L2), roughly 1.5 million kilometres from Earth. Its 6.5-metre primary mirror is made of 18 gold-coated beryllium segments that unfolded in space, and a tennis-court-sized, five-layer sunshield keeps the instruments at around minus 233 degrees Celsius, which is necessary because Webb observes mainly in infrared light. The observatory carries four main instruments: NIRCam, NIRSpec, MIRI and NIRISS with its Fine Guidance Sensor. The deployment sequence involved hundreds of single points of failure and was completed successfully in January 2022, and the first full-colour images, including Webb's First Deep Field, were released on July 12, 2022. Since then Webb has observed some of the most distant galaxies ever seen, from a time only a few hundred million years after the Big Bang, challenging models of how quickly galaxies formed. It has imaged stellar nurseries and dying stars in unprecedented detail, and detected carbon dioxide, water vapour and other molecules in the atmospheres of exoplanets such as WASP-39 b. It also studies planets and moons within our own Solar System. A very precise launch and fuel-saving maneuvers mean it can operate for well over a decade, giving astronomers a long-lasting window onto cosmic history."
  },
  {
    id: 6,
    slug: "artemis-ii",
    title: "Artemis II",
    agency: "NASA",
    date: "April 1, 2026",
    destination: "Moon flyby",
    status: "Completed",
    shortDescription:
      "A crewed Artemis mission designed to test systems for human exploration around the Moon.",
    image: "/images/artemis-ii.jpg",
    description:
      "Artemis II was the first crewed flight of NASA's Artemis program and the first time humans travelled to the Moon's vicinity since Apollo 17 in December 1972. The mission launched on April 1, 2026, atop the Space Launch System (SLS) rocket from Launch Complex 39B at Kennedy Space Center, carrying four astronauts in the Orion spacecraft: NASA's Reid Wiseman (commander), Victor Glover (pilot) and Christina Koch (mission specialist), and Jeremy Hansen of the Canadian Space Agency (mission specialist). The crew included the first woman, the first person of color and the first non-American to fly around the Moon. Unlike the uncrewed Artemis I flight of November 2022, Artemis II was a crewed test flight meant to prove that Orion's life-support system, navigation, communications, manual piloting and thermal protection work with people on board. After launch, the crew checked out the spacecraft in Earth orbit before a translunar injection burn sent Orion on a free-return trajectory, a path that loops around the far side of the Moon and brings the spacecraft back to Earth without a major engine burn, which acts as a safety measure. The astronauts observed and photographed the lunar surface and travelled farther from Earth than humans had in more than fifty years. The roughly ten-day mission ended with a high-speed re-entry and splashdown in the Pacific Ocean, validating the Orion heat shield at lunar-return speeds. Artemis II provides the operational experience needed for later Artemis missions, which aim to return astronauts to the lunar surface near the south pole and build a sustained human presence on and around the Moon as a stepping stone toward Mars."
  },

  // ===================== INDIAN SPACE MISSIONS =====================
  {
    id: 7,
    slug: "aryabhata",
    title: "Aryabhata",
    agency: "ISRO",
    date: "April 19, 1975",
    destination: "Low Earth orbit",
    status: "Completed",
    shortDescription: "India's first satellite, built indigenously and named after the ancient Indian mathematician.",
    image: "/images/aryabhata.jpg",
    description:
      "Aryabhata was India's first satellite and the beginning of the country's journey in space. It was designed and built by the Indian Space Research Organisation at its facility in Bengaluru and named after the great fifth-century Indian mathematician and astronomer Aryabhata. Because India did not yet have a launch vehicle capable of reaching orbit, the satellite was launched on April 19, 1975, by a Soviet Kosmos-3M rocket from the Kapustin Yar site, under an agreement between ISRO and the Soviet Union. The 360-kilogram, 26-sided spacecraft was covered in solar cells and carried instruments for X-ray astronomy, aeronomics (the study of the upper atmosphere) and solar physics. Although a power-supply failure ended the transmission of scientific data after about four days, the mission achieved its most important aims: it proved that Indian scientists and engineers could design, integrate, test and operate a complete satellite, set up ground tracking and command infrastructure, and gave a generation of engineers valuable experience. The satellite remained in orbit until it re-entered the atmosphere on February 11, 1992. Its image appeared on the reverse of the two-rupee banknote in the late 1970s and 1980s, showing how important it was to the nation's sense of scientific pride. Aryabhata paved the way for later satellites such as Bhaskara and the INSAT and IRS series, which today provide communication, weather forecasting, navigation and Earth-observation services across India."
  },
  {
    id: 8,
    slug: "bhaskara-1",
    title: "Bhaskara-1",
    agency: "ISRO",
    date: "June 7, 1979",
    destination: "Low Earth orbit",
    status: "Completed",
    shortDescription: "India's first experimental Earth observation satellite.",
    image: "/images/bhaskara-1.jpg",
    description:
      "Bhaskara-1 was India's first experimental Earth observation satellite and the second satellite built entirely in India. It was named after Bhaskara I, the seventh-century Indian mathematician and astronomer, and was launched on June 7, 1979, by a Soviet Kosmos-3M rocket from the Kapustin Yar launch site. The satellite weighed about 444 kilograms and was placed in a low Earth orbit at around 500 kilometres. It carried two television cameras operating in the visible and near-infrared wavelength bands to study land, forests, snow cover and hydrology, plus a three-frequency microwave radiometer called SAMIR (Satellite Microwave Radiometer) designed to measure ocean-surface conditions, atmospheric water vapour, rainfall and soil moisture. The data gathered from Bhaskara-1 were used for experimental applications in hydrology, forestry, geology and ocean studies, and helped Indian scientists understand how remote sensing could support national needs such as agriculture, water resources management and disaster monitoring. Although one of the television cameras and part of the sensors had limited performance, the mission was considered a success because it taught ISRO how to handle the design, calibration and data processing of an Earth-observation payload. Its lessons were applied directly to Bhaskara-2, launched in 1981, and eventually to the operational Indian Remote Sensing (IRS) satellite series, which has made India a leader in satellite imagery. Bhaskara-1 therefore stands as an important early step towards using space for the benefit of ordinary citizens."
  },
  {
    id: 9,
    slug: "rohini-rs-1-slv-3",
    title: "Rohini RS-1 / SLV-3",
    agency: "ISRO",
    date: "July 18, 1980",
    destination: "Low Earth orbit",
    status: "Successful",
    shortDescription: "India's first satellite launched on an Indian-built rocket, making India the sixth spacefaring nation to reach orbit by itself.",
    image: "/images/rohini-rs-1.jpg",
    description:
      "Rohini RS-1 was a small 35-kilogram satellite launched on July 18, 1980, by the Satellite Launch Vehicle-3 (SLV-3) from Sriharikota, and with it India became the sixth country in the world, after the Soviet Union, the United States, France, Japan and China, to place a satellite in orbit using its own launch vehicle. The SLV-3 was India's first experimental orbital launcher: a four-stage, all-solid-propellant rocket about 22 metres tall and weighing 17 tonnes. The project was led by Dr. A. P. J. Abdul Kalam, who later became the President of India, and drew on the work of hundreds of engineers who built propulsion, guidance, control and telemetry systems from scratch. The first launch attempt on August 10, 1979, did not reach orbit because of a failure in the control system of the second stage, a setback that taught the team valuable lessons and led to design improvements. The second developmental flight, in May 1980, carried the Rohini Technology Payload into orbit, and the third flight, on July 18, 1980, put Rohini RS-1 into an elliptical orbit with a perigee of about 300 kilometres. The satellite sent back data on the performance of the rocket's final stage and was operational for about 20 days, and it re-entered the atmosphere in May 1981. SLV-3 led directly to the larger ASLV and then to the highly successful Polar Satellite Launch Vehicle (PSLV) and the Geosynchronous Satellite Launch Vehicle (GSLV), which today launch satellites for India and many other nations."
  },
  {
    id: 10,
    slug: "soyuz-t-11-rakesh-sharma",
    title: "Soyuz T-11 (Rakesh Sharma)",
    agency: "Intercosmos / ISRO / Soviet Space Programme",
    date: "April 3, 1984",
    destination: "Salyut 7 space station",
    status: "Successful",
    shortDescription: "The first Indian citizen to travel to space.",
    image: "/images/soyuz-t-11.jpg",
    description:
      "Soyuz T-11 was a Soviet crewed mission, flown under the Intercosmos program of cooperation with friendly countries, that carried Squadron Leader Rakesh Sharma of the Indian Air Force into space on April 3, 1984, making him the first Indian citizen and the 138th person ever to travel there. He was selected from hundreds of Indian Air Force test pilots through physical and psychological screening, and trained for around eighteen months at the Yuri Gagarin Cosmonaut Training Center near Moscow alongside his backup, Ravish Malhotra. Sharma flew with Soviet commander Yuri Malyshev and flight engineer Gennadi Strekalov in a Soyuz spacecraft launched from the Baikonur Cosmodrome in Kazakhstan, and docked with the Salyut 7 space station, where they joined a long-duration crew. During roughly eight days in orbit, Sharma took part in a joint Indo-Soviet program of experiments, including remote sensing photography of India using a multi-spectral camera for resource mapping, biomedical studies on how the body adapts to weightlessness and a set of yoga exercises that were examined as a way of reducing the effects of space motion sickness. Famously, when Prime Minister Indira Gandhi asked him from Earth how India looked from space, he replied with the line Saare Jahan Se Accha (better than the whole world), which has become iconic. The crew returned to Earth on April 11, 1984, landing in Kazakhstan. Sharma's flight inspired a generation of Indians and remained the only spaceflight of an Indian citizen for more than forty years, until the Axiom-4 mission in 2025."
  },
  {
    id: 11,
    slug: "sre-1",
    title: "Space Capsule Recovery Experiment (SRE-1)",
    agency: "ISRO",
    date: "January 10, 2007",
    destination: "Low Earth orbit and re-entry",
    status: "Successful",
    shortDescription: "India's first experiment to launch a capsule into orbit and bring it safely back to Earth.",
    image: "/images/sre-1.jpg",
    description:
      "The Space Capsule Recovery Experiment (SRE-1) was a technology demonstration mission by ISRO to show that a spacecraft can be launched, kept in orbit, brought back through the atmosphere and recovered. The 550-kilogram capsule was launched on January 10, 2007, by a PSLV-C7 rocket from Sriharikota as a co-passenger alongside the Cartosat-2 Earth observation satellite and two small foreign satellites. It circled the Earth for about twelve days at an altitude of around 635 kilometres, running a series of experiments in microgravity, including studies of metal melting and crystallization of materials in a microgravity furnace. On January 22, 2007, the capsule fired its retro-rockets, de-orbited and re-entered the atmosphere at a speed of about eight kilometres per second, while its heat shield, made of carbon-phenolic material and silica tiles, protected it from the temperature of more than 2,000 degrees Celsius. After the heat shield did its job, a system of parachutes slowed the capsule down, and it splashed into the Bay of Bengal, about 140 kilometres off the coast near Sriharikota, where it was recovered by the Indian Navy and Coast Guard. The mission validated technologies for re-entry thermal protection, navigation, guidance and control, hypersonic aerothermodynamics, deceleration and floatation systems, and recovery operations. These were all essential building blocks for the later Crew Module Atmospheric Re-entry Experiment (CARE) in 2014 and for the Gaganyaan human spaceflight program."
  },
  {
    id: 12,
    slug: "chandrayaan-1",
    title: "Chandrayaan-1",
    agency: "ISRO",
    date: "October 22, 2008",
    destination: "Moon",
    status: "Completed",
    shortDescription: "India's first lunar probe, which helped confirm the presence of water molecules on the Moon.",
    image: "/images/chandrayaan-1.jpg",
    description:
      "Chandrayaan-1 was India's first mission to the Moon and the first in the Chandrayaan series. It was launched on October 22, 2008, by a PSLV-XL rocket from Sriharikota and placed into lunar orbit on November 8, 2008. The 1,380-kilogram orbiter carried eleven scientific instruments, five of them Indian and six from international partners, including NASA, the European Space Agency, Bulgaria and others. Its payload included the Terrain Mapping Camera, the Hyper Spectral Imager, the Lunar Laser Ranging Instrument, the High Energy X-ray Spectrometer, NASA's Moon Mineralogy Mapper (M3) and Mini-SAR radar. On November 14, 2008, the Moon Impact Probe, painted with the Indian tricolour, separated from the orbiter and crashed near the Shackleton crater at the lunar south pole, during which time it measured the thin lunar atmosphere and detected traces of water in it. Data from M3 and other instruments revealed the presence of water and hydroxyl molecules in the lunar soil, a finding that changed the scientific understanding of the Moon as completely dry, while Mini-SAR data indicated deposits of water ice in permanently shadowed craters near the poles. The mission also produced detailed three-dimensional maps of the lunar surface and mineral composition. The spacecraft was meant to operate for two years, but problems such as star-sensor failures and overheating led to loss of radio contact on August 29, 2009, after about ten months. It was an overwhelming success scientifically and gave India the confidence to plan Chandrayaan-2 and Chandrayaan-3. In 2016 NASA radar rediscovered the silent spacecraft still orbiting the Moon."
  },
  {
    id: 13,
    slug: "navic-irnss",
    title: "NavIC (IRNSS)",
    agency: "ISRO",
    date: "July 1, 2013",
    destination: "Geosynchronous and geostationary orbit",
    status: "Operational",
    shortDescription: "India's own regional satellite navigation system, similar to GPS.",
    image: "/images/navic.jpg",
    description:
      "NavIC, which stands for Navigation with Indian Constellation and was earlier called the Indian Regional Navigation Satellite System (IRNSS), is India's independent regional satellite navigation system developed by ISRO. Its first satellite, IRNSS-1A, was launched on July 1, 2013, by PSLV-C22 from Sriharikota, and the seven-satellite constellation was completed with IRNSS-1G on April 28, 2016. The system uses three satellites in geostationary orbit and four in inclined geosynchronous orbit, supported by ground stations for control, ranging and timing, and covers India and a region extending about 1,500 kilometres around its borders. NavIC provides two types of service: a Standard Positioning Service open to all civilian users and an encrypted Restricted Service for strategic and authorised users, with a positioning accuracy that is better than 20 metres within India. The effort was reportedly triggered by the 1999 Kargil conflict, when India was said to have been denied access to detailed GPS data from a foreign provider, which highlighted the need for an independent navigation capability. Applications of NavIC include vehicle tracking, fleet management, mapping and surveying, precise timing for power grids and telecom networks, emergency alerts for fishermen at sea, disaster management and location services in smartphones with compatible chipsets. Some of the satellites suffered failures of their rubidium atomic clocks, and replacement satellites such as NVS-01, launched in 2023 on a GSLV rocket, carry improved clocks and an additional civilian signal in the L1 band to make NavIC more compatible with global devices."
  },
  {
    id: 14,
    slug: "mangalyaan-mars-orbiter-mission",
    title: "Mars Orbiter Mission (Mangalyaan)",
    agency: "ISRO",
    date: "November 5, 2013",
    destination: "Mars",
    status: "Completed",
    shortDescription: "India's first interplanetary mission, which reached Mars orbit on its very first attempt.",
    image: "/images/mangalyaan.jpg",
    description:
      "The Mars Orbiter Mission (MOM), popularly known as Mangalyaan, which means Mars craft in Sanskrit, was India's first interplanetary mission. Launched on November 5, 2013, by a PSLV-XL rocket from Sriharikota, the spacecraft first orbited Earth, raised its orbit in six burns, and on December 1, 2013, fired its engine for the trans-Mars injection that put it on a path to the Red Planet. After a journey of about 300 days and 680 million kilometres, on September 24, 2014, it fired its main engine for more than 24 minutes after nearly ten months of inactivity and was captured in Mars orbit. This made ISRO the fourth space agency to reach Mars, India the first Asian nation to do so and the only country in the world to succeed on its first attempt. The mission was built in just about 15 months and cost around 450 crore rupees (roughly 74 million US dollars), less than the budget of some Hollywood science fiction films, making it one of the cheapest Mars missions ever. The 1,337-kilogram orbiter carried five instruments: the Mars Colour Camera, a Thermal Infrared Imaging Spectrometer, a Methane Sensor for Mars, a Lyman Alpha Photometer to measure deuterium and hydrogen in the upper atmosphere, and the Mars Exospheric Neutral Composition Analyser. It captured full-disk images of Mars, studied dust storms, Phobos and Deimos and the atmospheric escape, and produced the Mars Atlas. Designed to last six months, it worked for about eight years, until communication was lost in April 2022 after a long series of eclipses drained its battery, and ISRO declared the mission over."
  },
  {
    id: 15,
    slug: "astrosat",
    title: "AstroSat",
    agency: "ISRO",
    date: "September 28, 2015",
    destination: "Low Earth orbit",
    status: "Operational",
    shortDescription: "India's first dedicated multi-wavelength space observatory.",
    image: "/images/astrosat.jpg",
    description:
      "AstroSat is India's first dedicated multi-wavelength space telescope, designed to observe the universe in visible, ultraviolet, soft X-ray and hard X-ray wavelengths at the same time. It was launched on September 28, 2015, by PSLV-C30 from Sriharikota into a near-equatorial orbit of about 650 kilometres, and it made India one of the few countries to operate a space observatory. The 1,513-kilogram satellite carries five main instruments: the Ultra-Violet Imaging Telescope (UVIT), the Soft X-ray Telescope (SXT), the Large Area X-ray Proportional Counters (LAXPC), the Cadmium Zinc Telluride Imager (CZTI) and the Scanning Sky Monitor (SSM). The project involved ISRO, several Indian universities and research institutes such as the Tata Institute of Fundamental Research and the Indian Institute of Astrophysics, and partners from Canada and the United Kingdom. AstroSat studies black holes, neutron stars, binary star systems, active galaxies, supernova remnants and gamma-ray bursts. Its highlights include the detection of extreme ultraviolet light from a galaxy about 9.3 billion light-years away, a first for an Indian telescope, observations of the hot young stars in star clusters, and the study of the electromagnetic counterpart of gravitational waves. It also helped with the identification of the polarization of X-rays from the Crab Nebula. AstroSat was designed for a five-year lifetime but has worked much longer, and its data are open to astronomers around the world after a proprietary period, making it a valuable tool for the global astronomy community."
  },
  {
    id: 16,
    slug: "pslv-c37-104-satellites",
    title: "PSLV-C37 (104 Satellites Launch)",
    agency: "ISRO",
    date: "February 15, 2017",
    destination: "Sun-synchronous orbit",
    status: "Successful",
    shortDescription: "A world-record mission that deployed 104 satellites from a single rocket.",
    image: "/images/pslv-c37.jpg",
    description:
      "PSLV-C37 was a Polar Satellite Launch Vehicle mission that earned a place in the record books when it deployed 104 satellites in a single flight on February 15, 2017, from the Satish Dhawan Space Centre at Sriharikota. It used the XL configuration of the PSLV, the reliable workhorse of ISRO, with six strap-on boosters and a total of four stages. The primary payload was the 714-kilogram Cartosat-2D Earth observation satellite, accompanied by two Indian nano-satellites, INS-1A and INS-1B, which carried experimental payloads for studying surface reflectance and thermal properties, and 101 international nano-satellites that together weighed about 664 kilograms. Of these foreign satellites, 96 came from the United States, mostly a flock of Dove imaging satellites from the company Planet, and others came from Israel, Kazakhstan, the Netherlands, Switzerland and the United Arab Emirates. After lift-off, the rocket flew to a sun-synchronous orbit at about 500 kilometres and released the satellites one after another in carefully timed sequence and directions to avoid collisions, in a deployment that took only minutes. The launch demonstrated ISRO's ability to carry out complex multi-satellite deployments and to do so at a competitive price, and it strengthened India's reputation as a reliable and cost-effective launch provider in the growing commercial small-satellite market. The record for the most satellites on one rocket was surpassed in 2021 by a SpaceX Falcon 9 flight, but PSLV-C37 remains a landmark in India's space history."
  },
  {
    id: 17,
    slug: "chandrayaan-2",
    title: "Chandrayaan-2",
    agency: "ISRO",
    date: "July 22, 2019",
    destination: "Moon",
    status: "Partial success",
    shortDescription: "India's second lunar mission with an orbiter, lander and rover; the orbiter is still working.",
    image: "/images/chandrayaan-2.jpg",
    description:
      "Chandrayaan-2 was India's second lunar exploration mission, and it was far more ambitious than the first, with three parts: an orbiter, the Vikram lander (named after Vikram Sarabhai, the father of the Indian space program) and the Pragyan rover. It was launched on July 22, 2019, by the GSLV Mk III from Sriharikota, entered lunar orbit on August 20, and after a series of manoeuvres, the Vikram lander separated from the orbiter on September 2, 2019. The lander was supposed to touch down near the lunar south pole on September 7, 2019. The descent went well until the powered braking phase, but at an altitude of about 2.1 kilometres, communication was lost, and the lander made a hard landing, as later confirmed by images from NASA's Lunar Reconnaissance Orbiter, with the help of a debris trail identified by a Chennai-based engineer. Although the landing failed, the orbiter has been a great success. With eight instruments, including a dual-frequency synthetic aperture radar, an imaging infrared spectrometer, a terrain mapping camera and one of the highest-resolution cameras ever flown to the Moon, it has been mapping the Moon's surface, minerals and polar water ice, studying the thin lunar exosphere and the Sun's X-rays. Its data have been made available to the scientific community and have helped in choosing the landing site of Chandrayaan-3. The orbiter was designed to operate for about a year but has enough fuel for several more years. The lessons from the lander's failure, including problems with the software and the thrusters, were turned into major improvements for Chandrayaan-3's successful landing in 2023."
  },
  {
    id: 18,
    slug: "aditya-l1",
    title: "Aditya-L1",
    agency: "ISRO",
    date: "September 2, 2023",
    destination: "Sun–Earth L1 point",
    status: "Operational",
    shortDescription: "India's first dedicated space-based observatory to study the Sun.",
    image: "/images/aditya-l1.jpg",
    description:
      "Aditya-L1 is India's first space-based solar observatory and its first mission to study the Sun. It was launched on September 2, 2023, by PSLV-C57 from Sriharikota. After several orbit-raising manoeuvres around Earth, it was sent towards the first Sun–Earth Lagrange point (L1) about 1.5 million kilometres from Earth, where gravity of the Sun and the Earth balance. On January 6, 2024, it was successfully placed in a halo orbit around L1, from which it can look at the Sun continuously without eclipses or occultations. The spacecraft weighs about 1,475 kilograms and carries seven scientific payloads: the Visible Emission Line Coronagraph (VELC), the Solar Ultraviolet Imaging Telescope (SUIT), the Solar Low Energy X-ray Spectrometer (SoLEXS), the High Energy L1 Orbiting X-ray Spectrometer (HEL1OS), the Aditya Solar wind Particle Experiment (ASPEX), the Plasma Analyser Package for Aditya (PAPA) and a set of magnetometers. Together they study the solar corona, the photosphere and chromosphere, solar flares, coronal mass ejections, the origin of the solar wind and the space weather that can damage satellites, disrupt communications and affect power grids on Earth. Aditya-L1 released its first full-disc images of the Sun in near-ultraviolet in late 2023 and has since recorded solar flares and the effects of major geomagnetic storms, such as the May 2024 storm. The mission is planned for at least five years and will improve space-weather prediction, which is important for India's growing fleet of satellites."
  },
  {
    id: 19,
    slug: "gaganyaan",
    title: "Gaganyaan (Human Spaceflight Programme)",
    agency: "ISRO",
    date: "October 21, 2023 (TV-D1 test flight)",
    destination: "Low Earth orbit (planned)",
    status: "In development",
    shortDescription: "India's programme to send its own astronauts to orbit on an Indian rocket and bring them back safely.",
    image: "/images/gaganyaan.jpg",
    description:
      "Gaganyaan, which means sky vehicle in Sanskrit, is India's ambitious human spaceflight programme, intended to send a crew of up to three astronauts to a low Earth orbit of about 400 kilometres for a mission lasting up to three days and to return them safely, landing in the sea off the Indian coast. If successful, India would become only the fourth country, after Russia, the United States and China, to launch humans into space on its own vehicle. The programme uses the Human Rated Launch Vehicle Mk III (HRLVM3), a modified version of the LVM3 rocket with improved safety systems, and a spacecraft called the Orbital Module, which consists of a crew module with life support and a service module with propulsion. A key feature is the Crew Escape System, which can pull the crew module away from a failing rocket. This was tested in the TV-D1 test flight on October 21, 2023, in which the crew module separated at an altitude of about 17 kilometres and splashed down in the Bay of Bengal, where it was recovered by the Indian Navy. Four Indian Air Force test pilots were chosen as astronaut candidates and trained in Russia and India, and the programme includes uncrewed missions with a humanoid robot called Vyommitra before any human flight. Schedules for the crewed flight have changed several times, as is usual for such complex projects. Gaganyaan is also the foundation for India's planned space station, the Bharatiya Antariksh Station, and for the goal of landing an Indian on the Moon by 2040."
  },
  {
    id: 20,
    slug: "xposat",
    title: "XPoSat (X-ray Polarimeter Satellite)",
    agency: "ISRO",
    date: "January 1, 2024",
    destination: "Low Earth orbit",
    status: "Operational",
    shortDescription: "India's first dedicated polarimetry mission to study X-ray emissions from cosmic sources.",
    image: "/images/xposat.jpg",
    description:
      "The X-ray Polarimeter Satellite (XPoSat) is India's first dedicated mission to study the polarization of X-rays from bright cosmic sources, and the second such mission in the world after NASA's Imaging X-ray Polarimetry Explorer. It was launched on January 1, 2024, by PSLV-C58 from Sriharikota, giving India a New Year start in astronomy, and was placed in a circular low Earth orbit of about 650 kilometres. Polarization, which describes the direction in which the waves of light vibrate, gives information that cannot be obtained from brightness or spectra alone, such as the geometry of the emission region, the strength and direction of magnetic fields and the physical processes near black holes and neutron stars. The satellite carries two payloads. The Polarimeter Instrument in X-rays (POLIX), developed by the Raman Research Institute, measures polarization in the medium energy range of 8 to 30 kiloelectronvolts, and the X-ray Spectroscopy and Timing instrument (XSPECT), developed by the U R Rao Satellite Centre, studies the energy spectra of X-ray sources in the 0.8 to 15 kiloelectronvolt band. XPoSat targets about 40 bright sources, such as black-hole binaries, neutron stars, active galactic nuclei and supernova remnants, with early observations of objects like the Crab Nebula, Cassiopeia A and Cygnus X-1. The launch also used the PSLV Orbital Experimental Module (POEM-3), the spent fourth stage of the rocket, which hosted ten extra experiments from Indian institutions and start-ups in orbit. XPoSat is designed for about five years."
  },
  {
    id: 21,
    slug: "spadex",
    title: "SpaDeX (Space Docking Experiment)",
    agency: "ISRO",
    date: "December 30, 2024",
    destination: "Low Earth orbit",
    status: "Successful",
    shortDescription: "India's demonstration of in-orbit docking and undocking technology.",
    image: "/images/spadex.jpg",
    description:
      "The Space Docking Experiment (SpaDeX) was a low-cost technology demonstration mission by ISRO to master the rendezvous, docking and undocking of two spacecraft in orbit, a capability that is essential for building space stations, performing crewed missions, servicing satellites and returning samples from the Moon. It was launched on December 30, 2024, by PSLV-C60 from Sriharikota, carrying two small satellites of about 220 kilograms each, the Chaser (SDX01) and the Target (SDX02), into a 470-kilometre orbit. The satellites were separated and slowly drifted apart before the Chaser approached the Target in a series of carefully planned steps, from a distance of tens of kilometres down to 15 metres, 3 metres and finally contact. The docking, after a couple of postponements for further checks, was carried out successfully on January 16, 2025, making India the fourth country in the world, after the United States, Russia and China, to demonstrate space docking. A Docking Mechanism developed in India was used, and after the spacecraft were joined, electric power was successfully transferred between them, and a combined control of the two satellites was demonstrated. The satellites undocked in March 2025 and continued to operate their payloads, which include a high-resolution camera and radiation monitor. The PSLV's fourth stage, as POEM-4, carried more than twenty experiments, including a robotic arm and an experiment that sprouted cowpea seeds in orbit. SpaDeX paves the way for Chandrayaan-4, Gaganyaan and the Bharatiya Antariksh Station."
  },
  {
    id: 22,
    slug: "axiom-4-shubhanshu-shukla",
    title: "Axiom Mission 4 (Shubhanshu Shukla)",
    agency: "Axiom Space / NASA / ISRO",
    date: "June 25, 2025",
    destination: "International Space Station",
    status: "Successful",
    shortDescription: "The mission that took India's Group Captain Shubhanshu Shukla to the ISS as the first Indian aboard the station.",
    image: "/images/axiom-4.jpg",
    description:
      "Axiom Mission 4 (Ax-4) was a private crewed mission to the International Space Station, organised by the US company Axiom Space in cooperation with NASA, with seats secured by ISRO, the European Space Agency and the governments of Poland and Hungary. It lifted off on June 25, 2025, aboard a SpaceX Falcon 9 rocket and Crew Dragon capsule from Launch Complex 39A at Kennedy Space Center, and docked with the ISS the following day. The crew consisted of Commander Peggy Whitson, a former NASA astronaut with the record for the most time in space by an American; Group Captain Shubhanshu Shukla of the Indian Air Force as pilot; Sławosz Uznański-Wiśniewski of Poland, representing ESA; and Tibor Kapu of Hungary. Shukla became the second Indian in space after Rakesh Sharma in 1984, and the first Indian to visit the International Space Station, and it was also the first return of Poland and Hungary to human spaceflight in decades. During about 18 days in orbit, the crew carried out around 60 scientific experiments and demonstrations. ISRO sponsored a set of microgravity studies, including research on muscle-cell regeneration, the growth of microalgae and cyanobacteria as potential food and oxygen sources, the revival of tardigrades (microscopic animals), the sprouting of seeds such as moong and methi, and the effect of screens on human performance. The crew also did outreach activities and spoke with school children and dignitaries. They undocked in July 2025 and splashed down off the coast of California on July 15, 2025. The mission gave India invaluable experience of orbital operations for the Gaganyaan programme."
  },
  {
    id: 23,
    slug: "nisar",
    title: "NISAR (NASA-ISRO Synthetic Aperture Radar)",
    agency: "NASA / ISRO",
    date: "July 30, 2025",
    destination: "Low Earth orbit (sun-synchronous)",
    status: "Operational",
    shortDescription: "A joint NASA-ISRO radar satellite that maps changes in Earth's land and ice surfaces.",
    image: "/images/nisar.jpg",
    description:
      "NISAR is the first joint Earth-observing satellite mission between NASA and ISRO, and the first to use two radar frequencies, the L-band built by NASA's Jet Propulsion Laboratory and the S-band built by ISRO's Space Applications Centre, in one observatory. It was launched on July 30, 2025, aboard India's GSLV-F16 rocket from Sriharikota into a sun-synchronous orbit at an altitude of about 740 kilometres. The satellite has a large 12-metre deployable mesh reflector antenna, one of the biggest ever sent into space, that sweeps a 240-kilometre-wide swath of ground, and it can see through clouds, rain and darkness. NISAR scans almost all of the world's land and ice surfaces every 12 days, measuring changes as small as a centimetre by comparing radar images taken at different times, a technique known as interferometry. The data are used to track the movement of ice sheets and glaciers, the growth and loss of forests and wetlands, crop growth and soil moisture, groundwater and sea-level changes, and hazards such as earthquakes, volcanoes, landslides and subsidence. Its information will help in disaster response, agricultural management and the study of climate change in India and the rest of the world. As a mission policy, the data will be freely available to everyone shortly after observation. At a cost of over a billion dollars, NISAR is considered one of the most expensive and sophisticated Earth-imaging satellites ever built, and a major symbol of the partnership between the two countries."
  },
  {
    id: 24,
    slug: "chandrayaan-4",
    title: "Chandrayaan-4 (Lunar Sample Return)",
    agency: "ISRO",
    date: "Planned (around 2027–2028)",
    destination: "Moon",
    status: "Planned",
    shortDescription: "India's planned mission to land on the Moon, collect samples and return them to Earth.",
    image: "/images/chandrayaan-4.jpg",
    description:
      "Chandrayaan-4 is ISRO's planned lunar sample-return mission, approved by the Government of India in September 2024, and it is meant to demonstrate the technologies needed to land on the Moon, collect lunar soil and rocks, launch back from the surface, and deliver the samples safely to Earth. This is a far more complex task than any previous Indian mission since it requires multiple spacecraft to rendezvous and dock in lunar orbit. The plan envisages five modules, which would be launched on two separate rockets, an LVM3 and a PSLV, and assembled in Earth orbit before heading to the Moon. A Descender Module would land on the surface and collect samples, and an Ascender Module would lift off with them, rendezvous and dock with a Transfer Module in lunar orbit, and transfer them to a Re-entry Module, which would carry them back to Earth for a landing. The docking technology tested in the SpaDeX mission is a crucial building block. The planned landing site is near the Shiv Shakti Point, where Chandrayaan-3 landed, and the mission aims to bring back a few kilograms of material that would be studied in laboratories in India. The mission supports India's long-term goals, including the Bharatiya Antariksh Station, planned to start with its first module towards the end of this decade, and an Indian crewed landing on the Moon by 2040. India is also working on Chandrayaan-5, also called LUPEX, a joint rover mission with the Japan Aerospace Exploration Agency to study lunar polar water. Launch dates may shift as the programme develops."
  },

  // ===================== MAJOR WORLD SPACE MISSIONS =====================
  {
    id: 25,
    slug: "sputnik-1",
    title: "Sputnik 1",
    agency: "Soviet Space Program",
    date: "October 4, 1957",
    destination: "Low Earth orbit",
    status: "Successful",
    shortDescription: "The first artificial satellite ever placed in orbit around Earth.",
    image: "/images/sputnik-1.jpg",
    description:
      "Sputnik 1 was the world's first artificial satellite and the spacecraft that started the Space Age. Designed under chief designer Sergei Korolev, it was launched on October 4, 1957, by an R-7 Semyorka rocket from the Baikonur Cosmodrome in Soviet Kazakhstan, as the Soviet contribution to the International Geophysical Year. The satellite was a polished metal sphere only 58 centimetres wide and weighing about 83.6 kilograms, with four long whip antennas, and it carried batteries and a radio transmitter that sent out a steady series of beeps on two short-wave frequencies, which could be picked up by radio amateurs around the world. It circled the Earth in an elliptical orbit about every 96 minutes, travelling at about 29,000 kilometres per hour, and the signal from its transmitter allowed scientists to study the density of the upper atmosphere and the propagation of radio waves in the ionosphere. The batteries lasted about three weeks, and the satellite re-entered and burned up on January 4, 1958, after about 1,440 orbits. The launch caused shock and surprise in the United States, triggered the so-called Sputnik crisis and the space race, and led to the creation of NASA in 1958, to major investment in science education and to the development of intercontinental ballistic missile technology. Sputnik 1 showed that humanity could escape Earth's gravity and opened the way for communication, navigation, weather and Earth-observation satellites that have become a part of daily life."
  },
  {
    id: 26,
    slug: "explorer-1",
    title: "Explorer 1",
    agency: "NASA / US Army / JPL",
    date: "January 31, 1958",
    destination: "Low Earth orbit",
    status: "Completed",
    shortDescription: "The first American satellite, which discovered the Van Allen radiation belts.",
    image: "/images/explorer-1.jpg",
    description:
      "Explorer 1 was the first satellite of the United States and the first spacecraft to make a major scientific discovery in orbit. Four months after the surprise of Sputnik, a team from the Jet Propulsion Laboratory and the Army Ballistic Missile Agency, working with rocket pioneer Wernher von Braun, launched it on January 31, 1958, atop a Juno I rocket, a modified Redstone missile, from Cape Canaveral, Florida. The satellite was a slim cylinder only about two metres long and weighing 14 kilograms, and its main instrument was a cosmic-ray detector designed by physicist James Van Allen of the University of Iowa. Odd data from the detector, which sometimes stopped counting entirely when the satellite was at high altitudes, was explained by Van Allen and his team as the result of the instrument being saturated by intense radiation, and subsequent missions, including Explorer 3, confirmed the existence of two zones of trapped charged particles around the Earth, now called the Van Allen radiation belts. The satellite also carried temperature sensors and a micrometeorite detector. Its batteries ran out in May 1958, but the satellite stayed in orbit for more than a decade until it burned up in the atmosphere on March 31, 1970. The mission marked the United States' entry into the space race, led to the founding of NASA in the same year and began the field of space physics, with the radiation belts becoming an important issue for the design of all future satellites and crewed missions."
  },
  {
    id: 27,
    slug: "luna-2",
    title: "Luna 2",
    agency: "Soviet Space Program",
    date: "September 12, 1959",
    destination: "Moon",
    status: "Successful",
    shortDescription: "The first human-made object to reach the surface of the Moon.",
    image: "/images/luna-2.jpg",
    description:
      "Luna 2 was a Soviet probe, and the second spacecraft of the Luna programme to be launched towards the Moon, that became the first human-made object to reach the surface of another world. It was launched on September 12, 1959, on a Luna 8K72 rocket from Baikonur, and after a journey of about 34 hours it deliberately crashed into the Moon on September 14, 1959, east of the Mare Imbrium region near the craters Aristides, Archimedes and Autolycus. The spacecraft was a sphere about 390 kilograms in weight with several antennas sticking out and instruments including scintillation counters, Geiger counters, magnetometers and micrometeorite detectors. Because it did not have a camera or propulsion system, it simply followed its trajectory, sending back measurements until impact. Its data showed that the Moon has no significant magnetic field and no radiation belts like the Earth's, and it provided the first direct measurements of the solar wind, a stream of charged particles flowing from the Sun. The mission also released a cloud of sodium vapour to help tracking observers on Earth, and carried metal pennants engraved with the Soviet emblem and the date, intended to be scattered on impact. The sodium cloud was visible from Earth, while the final stage of the rocket also hit the Moon. Luna 2 was followed a few weeks later by Luna 3, which returned the first images of the far side of the Moon, and it marked a big step in the early race between the Soviet Union and the United States."
  },
  {
    id: 28,
    slug: "vostok-1",
    title: "Vostok 1",
    agency: "Soviet Space Program",
    date: "April 12, 1961",
    destination: "Low Earth orbit",
    status: "Successful",
    shortDescription: "The first human spaceflight, carrying Yuri Gagarin around the Earth.",
    image: "/images/vostok-1.jpg",
    description:
      "Vostok 1 was the mission that made Yuri Gagarin the first human being to travel into outer space and orbit the Earth. On April 12, 1961, the 27-year-old Soviet Air Force pilot was strapped into a small spherical capsule and launched from the Baikonur Cosmodrome by a Vostok-K rocket designed by Sergei Korolev's team. The spacecraft completed a single orbit of Earth at an altitude of up to 327 kilometres, in a flight of 108 minutes. Because doctors were not sure how a human would react to weightlessness, the spacecraft was controlled automatically, with a sealed envelope containing a code for the manual controls available only in an emergency. From orbit, Gagarin reported on the beauty of the planet, famously noting that the Earth was blue. As the capsule re-entered the atmosphere, the service module failed to separate cleanly for some time, causing the vehicle to tumble violently before it eventually broke free. At an altitude of around seven kilometres, Gagarin ejected from the capsule, as designed, and parachuted separately to a landing near the village of Smelovka in the Saratov region, while the capsule landed on its own parachute. The flight was a huge propaganda and scientific triumph for the Soviet Union, made Gagarin a global celebrity, increased the pressure on the United States and led President Kennedy to announce the Apollo programme within weeks. April 12 is now celebrated as the International Day of Human Space Flight."
  },
  {
    id: 29,
    slug: "freedom-7",
    title: "Freedom 7 (Mercury-Redstone 3)",
    agency: "NASA",
    date: "May 5, 1961",
    destination: "Suborbital flight",
    status: "Successful",
    shortDescription: "Alan Shepard's flight, the first American in space.",
    image: "/images/freedom-7.jpg",
    description:
      "Freedom 7 was the first crewed flight in the American space programme and made Alan Shepard the first American in space, less than a month after Yuri Gagarin's orbital flight. The mission was launched on May 5, 1961, from Cape Canaveral by a Mercury-Redstone rocket, an adapted ballistic missile, and carried Shepard in a small, bell-shaped Mercury capsule that he named Freedom 7. The flight was suborbital, lasting just 15 minutes and 22 seconds, rising to an altitude of about 187 kilometres and landing 487 kilometres down range in the Atlantic Ocean. During the flight, Shepard experienced about five minutes of weightlessness and about 11 times the force of gravity during re-entry, and he took manual control of the capsule's attitude, demonstrating that a pilot could control a spacecraft. After a splashdown, he was picked up by a US Marine helicopter and taken to the aircraft carrier USS Lake Champlain. Unlike the Soviet launch, the American flight was televised and broadcast in real time, to a large audience. The success of Freedom 7 boosted American confidence, and just 20 days later, on May 25, 1961, President John F. Kennedy proposed to Congress the goal of landing a man on the Moon before the end of the decade. Shepard eventually flew to the Moon as commander of Apollo 14 in 1971, where he famously hit golf balls on the lunar surface."
  },
  {
    id: 30,
    slug: "vostok-6",
    title: "Vostok 6 (Valentina Tereshkova)",
    agency: "Soviet Space Program",
    date: "June 16, 1963",
    destination: "Low Earth orbit",
    status: "Successful",
    shortDescription: "The flight that made Valentina Tereshkova the first woman in space.",
    image: "/images/vostok-6.jpg",
    description:
      "Vostok 6 was a Soviet crewed mission that carried Valentina Tereshkova, a 26-year-old textile factory worker and amateur parachutist, into orbit on June 16, 1963, making her the first woman in space. She was chosen from more than 400 applicants for a group of female cosmonaut candidates, and her skills in parachuting were especially valued, as Vostok pilots ejected from the capsule during the final descent and landed separately by parachute. Launched from the Baikonur Cosmodrome with the call sign Chaika (Seagull), she flew in a spacecraft that was about two days behind its sister ship Vostok 5, flown by Valery Bykovsky, and the two spacecraft came within a few kilometres of each other, in what was the first time that two crewed spacecraft were in orbit simultaneously. Tereshkova circled the Earth 48 times in nearly three days, a total of about 70 hours and 50 minutes, which was more time than all of the American astronauts up to that date combined. She suffered nausea and discomfort during part of the flight, and also made an error in the way the spacecraft's orientation system was set up, which was noticed and corrected from the ground. She ejected and parachuted to a landing in the Altai region of Russia on June 19. Tereshkova became a hero of the Soviet Union and an inspiration for women worldwide, and it took almost 20 years before another woman, Svetlana Savitskaya, flew in space. In later life she became a prominent politician."
  },
  {
    id: 31,
    slug: "voskhod-2",
    title: "Voskhod 2",
    agency: "Soviet Space Program",
    date: "March 18, 1965",
    destination: "Low Earth orbit",
    status: "Successful",
    shortDescription: "The mission during which Alexei Leonov performed the first spacewalk in history.",
    image: "/images/voskhod-2.jpg",
    description:
      "Voskhod 2 was a Soviet crewed spaceflight that carried Pavel Belyayev and Alexei Leonov into orbit on March 18, 1965, and gave the world its first spacewalk. The Voskhod spacecraft was a modified version of the Vostok capsule, equipped with an inflatable airlock that extended from the side of the capsule. Leonov, wearing a Berkut spacesuit with a life-support backpack, left the spacecraft and floated outside on a tether for about 12 minutes. While outside, he noticed that his suit had ballooned in the vacuum, stiffening so much that he could not bend his limbs to operate his camera or re-enter the airlock feet first. To get back inside, he had to open a valve to let out some of the air in his suit, an action that was extremely risky as it could have caused decompression sickness. He squeezed in head-first, then turned around inside the airlock. The crew faced more problems: the spacecraft's automatic landing system failed, so Belyayev had to fire the retro-rockets manually on the 17th orbit, and the capsule landed far off target in a snowy forest in the Ural Mountains near Perm. The crew had to spend two cold nights waiting for rescue teams, partly surrounded by wolves. Only decades later were the details of the difficulties made public. Voskhod 2 showed that humans could work in the vacuum of space, which was essential for building space stations and for the later Apollo moonwalks."
  },
  {
    id: 32,
    slug: "mariner-4",
    title: "Mariner 4",
    agency: "NASA / JPL",
    date: "November 28, 1964",
    destination: "Mars flyby",
    status: "Successful",
    shortDescription: "The first successful flyby of Mars, which returned the first close-up images of the planet.",
    image: "/images/mariner-4.jpg",
    description:
      "Mariner 4 was NASA's first successful mission to Mars and the first spacecraft to take close-up photographs of another planet from deep space. It was launched on November 28, 1964, atop an Atlas-Agena rocket from Cape Canaveral, three weeks after its twin Mariner 3 failed because its protective shroud did not release. The spacecraft, built by the Jet Propulsion Laboratory, had four solar panels, a television camera and instruments to measure magnetic fields, charged particles, cosmic dust and radiation. After a journey of about 7.5 months, on July 14 and 15, 1965, it passed within about 9,800 kilometres of the Martian surface and took 21 complete pictures and part of a 22nd, which were stored on a tape recorder and sent to Earth slowly at about eight bits per second, taking days to send each picture. The pictures revealed a cratered, Moon-like surface, a far cry from the canals and vegetation that some people had imagined, and measurements during an occultation by the planet showed an atmosphere with a surface pressure of less than one percent of Earth's, mostly carbon dioxide, and no global magnetic field. The results ended the hopes of many that Mars had an Earth-like environment and intelligent life, but later missions would reveal a far more complex planet with signs of past water. Contact with Mariner 4 was lost in December 1967 after it had spent more than three years in space, and its success led to the Mariner 6, 7 and 9 missions."
  },
  {
    id: 33,
    slug: "luna-9",
    title: "Luna 9",
    agency: "Soviet Space Program",
    date: "January 31, 1966",
    destination: "Moon",
    status: "Successful",
    shortDescription: "The first spacecraft to make a controlled soft landing on the Moon.",
    image: "/images/luna-9.jpg",
    description:
      "Luna 9 was a Soviet robotic lander that achieved the first soft landing on the surface of the Moon, after a string of failures in earlier Luna attempts. It was launched on January 31, 1966, from Baikonur, and landed in the Oceanus Procellarum region on February 3, 1966. The final descent was done with a retro-rocket and an airbag landing system: the 100-kilogram landing capsule was ejected from the main spacecraft just before impact, bounced several times on its inflated airbags, and came to rest. Then four petal-like covers opened to expose the television camera, antennas and stabilised the capsule. Over the next three days, until its batteries ran out, Luna 9 sent back a series of panoramic photographs of the surrounding lunar plain, covered with rocks and small craters, plus radiation measurements. The images answered one of the biggest questions of the time: some scientists had feared that the Moon was covered with a layer of dust so deep that a heavy spacecraft would sink into it. Luna 9 showed that the surface was firm enough to support a lander, an important finding for the later Apollo missions. The signal was also picked up by the Jodrell Bank Observatory in the United Kingdom, and its team, with the help of a newspaper, decoded and published the pictures before the Soviet Union released them. Luna 9 was a landmark in robotic exploration and an important step in the race to the Moon."
  },
  {
    id: 34,
    slug: "apollo-8",
    title: "Apollo 8",
    agency: "NASA",
    date: "December 21, 1968",
    destination: "Lunar orbit",
    status: "Successful",
    shortDescription: "The first crewed mission to leave Earth orbit and circle the Moon.",
    image: "/images/apollo-8.jpg",
    description:
      "Apollo 8 was the second crewed Apollo flight and the first time human beings left the gravitational influence of Earth, reached another world and returned. The original plan called for an Earth-orbit test of the lunar module, but when the module was delayed and intelligence suggested that the Soviet Union was planning a lunar flight, NASA boldly changed the mission to a lunar-orbit flight just a few months before launch. Frank Borman, Jim Lovell and William Anders lifted off on December 21, 1968, atop a Saturn V rocket, on its first crewed flight, from Kennedy Space Center. After a translunar injection burn, they flew for about three days and entered lunar orbit on December 24, circling the Moon ten times in about 20 hours at a height of about 110 kilometres. During the orbits, the crew photographed the surface, scouted future landing sites and, on Christmas Eve, broadcast a live television programme to an estimated one billion people, during which they read the opening verses of the Book of Genesis. On the fourth orbit, Anders took the photograph known as Earthrise, which shows the blue and white Earth rising above the grey lunar horizon and is often credited with changing humanity's view of its home planet and boosting the environmental movement. A crucial engine burn on the far side of the Moon, out of contact with Earth, sent them home, and they splashed down in the Pacific on December 27, 1968. Apollo 8 made the Apollo 11 landing possible, only seven months later."
  },
  {
    id: 35,
    slug: "apollo-13",
    title: "Apollo 13",
    agency: "NASA",
    date: "April 11, 1970",
    destination: "Moon (mission aborted)",
    status: "Aborted – crew returned safely",
    shortDescription: "A lunar mission aborted after an in-flight explosion, remembered as a successful failure.",
    image: "/images/apollo-13.jpg",
    description:
      "Apollo 13 was meant to be NASA's third crewed Moon landing, with an expedition to the Fra Mauro highlands, but it became famous as a dramatic rescue. The crew of Commander Jim Lovell, Command Module Pilot Jack Swigert and Lunar Module Pilot Fred Haise lifted off on April 11, 1970, on a Saturn V rocket. Swigert had replaced Ken Mattingly only days before the launch, after Mattingly was exposed to German measles. About 56 hours into the flight, when the astronauts were roughly 330,000 kilometres from Earth, a routine stirring of the oxygen tanks in the service module triggered a short circuit, damaged wiring and caused one tank to explode, crippling the power, water and oxygen supply. Swigert's calm message, Houston, we've had a problem, became a catchphrase. The mission was immediately aborted, and the crew powered down the damaged command module to save its batteries and used the lunar module Aquarius, designed for two men for two days, as a lifeboat for three men for four days. They looped around the Moon on a free-return trajectory, setting the record for the greatest distance from Earth ever reached by humans of about 400,000 kilometres, which still stands. Mission Control engineers on the ground and the crew improvised solutions, including building a makeshift adapter from cardboard, plastic bags and duct tape so that the command module's square carbon-dioxide filters could be used in the round lunar module sockets. The crew splashed down safely on April 17, 1970. The investigation led to major safety improvements."
  },
  {
    id: 36,
    slug: "apollo-17",
    title: "Apollo 17",
    agency: "NASA",
    date: "December 7, 1972",
    destination: "Moon",
    status: "Successful",
    shortDescription: "The last crewed mission to the Moon, to date, and the longest Apollo surface stay.",
    image: "/images/apollo-17.jpg",
    description:
      "Apollo 17 was the sixth and final crewed Moon landing of the Apollo programme and the most recent time human beings have walked on the Moon. It was launched on December 7, 1972, at 12:33 AM local time, the only night launch of a Saturn V, lighting up the skies of Florida. The crew consisted of Commander Eugene Cernan, Lunar Module Pilot Harrison Schmitt, the first professional geologist to go to the Moon, and Command Module Pilot Ronald Evans. Cernan and Schmitt landed the lunar module Challenger on December 11 in the Taurus-Littrow valley, a site on the edge of the Mare Serenitatis chosen for its mix of ancient highland material and younger volcanic deposits. In three moonwalks totalling more than 22 hours, they drove the Lunar Roving Vehicle for about 35 kilometres, deployed scientific experiments such as a heat-flow probe, a gravimeter and seismic profiling charges, and collected about 110 kilograms of rock and soil samples, the largest haul of the programme. Schmitt discovered a patch of orange soil, which turned out to consist of tiny glass beads from an ancient volcanic eruption. While in orbit, Evans operated a suite of remote-sensing instruments. The crew also took the famous Blue Marble photograph of the whole Earth, one of the most reproduced images in history. Before climbing back into the lander, Cernan spoke about returning to the Moon in the future. The astronauts splashed down on December 19, 1972, and the Apollo programme ended due to budget cuts and changing priorities."
  },
  {
    id: 37,
    slug: "venera-7",
    title: "Venera 7",
    agency: "Soviet Space Program",
    date: "August 17, 1970",
    destination: "Venus",
    status: "Successful",
    shortDescription: "The first spacecraft to land on another planet and transmit data from its surface.",
    image: "/images/venera-7.jpg",
    description:
      "Venera 7 was a Soviet probe, part of a long series of Venera missions to Venus, that became the first spacecraft to land on another planet and send data back from its surface. It was launched on August 17, 1970, from Baikonur, and after about four months of flight, it released its descent capsule on December 15, 1970, as it neared the planet. The capsule was designed to withstand extreme conditions, with a titanium shell and a heat shield, since previous attempts such as Venera 4, 5 and 6 had been crushed by the pressure of the Venusian atmosphere before reaching the ground. The descent used a parachute for part of the way, but the parachute failed or partly collapsed in the dense atmosphere, causing the capsule to hit the surface at a speed of about 17 metres per second and fall on its side. The transmitter's signal was very weak and was only discovered when the data were reprocessed, but it showed that the capsule continued sending a temperature reading for about 23 minutes after landing. The data showed a surface temperature of about 475 degrees Celsius and a pressure of about 90 times that of the Earth, which is hot enough to melt lead. This showed that Venus is a hellish planet and not a tropical world, as some people imagined, and dashed hopes of life on the surface. Venera 7 was followed by Venera 8 and later by Venera 9 and 10, which sent back the first photographs from the surface of Venus in 1975."
  },
  {
    id: 38,
    slug: "salyut-1",
    title: "Salyut 1",
    agency: "Soviet Space Program",
    date: "April 19, 1971",
    destination: "Low Earth orbit",
    status: "Completed",
    shortDescription: "The world's first space station.",
    image: "/images/salyut-1.jpg",
    description:
      "Salyut 1 was the first space station ever launched, and it started the era of long-duration human presence in orbit. The 18.5-tonne station was launched on April 19, 1971, by a Proton rocket from Baikonur, and consisted of three connected cylindrical sections with a total living volume of about 100 cubic metres. It had two solar panels, a docking port, a small laboratory with a telescope for astronomy and Earth observation, and a living area with exercise equipment. The first crew, Soyuz 10, tried to dock with it in April 1971, but a docking mechanism problem prevented them from entering, and they returned to Earth. The second crew, on Soyuz 11, consisting of Georgi Dobrovolsky, Vladislav Volkov and Viktor Patsayev, docked on June 7, 1971, and spent 23 days on board, a new record for time in space. They conducted experiments with plants, observed the Earth, studied the effects of weightlessness on the body and made astronomical observations. The mission ended in tragedy: during preparation for re-entry on June 30, 1971, a ventilation valve in the descent module opened prematurely, and the cabin lost air pressure, killing the three men, as they did not wear spacesuits. They remain the only people to have died in space, above the Kármán line. After this, the Soyuz was redesigned so that the crew had to wear pressure suits. The empty Salyut 1 was deliberately de-orbited on October 11, 1971, and the programme continued with Salyut 2 to 7, Mir and later the International Space Station."
  },
  {
    id: 39,
    slug: "pioneer-10",
    title: "Pioneer 10",
    agency: "NASA",
    date: "March 2, 1972",
    destination: "Jupiter and the outer Solar System",
    status: "Completed",
    shortDescription: "The first spacecraft to cross the asteroid belt and fly past Jupiter.",
    image: "/images/pioneer-10.jpg",
    description:
      "Pioneer 10 was the first spacecraft to travel through the asteroid belt, the first to fly by Jupiter and one of the first human-made objects on an escape trajectory from the Solar System. It was launched on March 2, 1972, by an Atlas-Centaur rocket from Cape Canaveral and weighed only 258 kilograms. At the time, many scientists feared that the asteroid belt could destroy a spacecraft, and that the radiation near Jupiter would damage the electronics, so the mission was a bold experiment. It safely passed through the belt in 1972 and 1973, and on December 3, 1973, it flew past Jupiter at a distance of about 130,000 kilometres, returning the first close-up images of the planet, as well as measurements of its magnetic field, radiation belts, atmosphere and moons. It showed that Jupiter is mostly made of liquid hydrogen and has an extremely strong magnetosphere and a dangerous radiation environment, data that were crucial for the design of the Voyager spacecraft and later Galileo and Juno. Powered by radioisotope generators, Pioneer 10 continued to work for many years and became the first spacecraft to cross the orbit of Neptune and later to measure the heliosphere at great distances. It carried the Pioneer plaque, designed by Carl Sagan and Frank Drake, a gold-anodised aluminium plate showing a man and a woman and the location of the Earth, as a message to any intelligent beings. The last, very weak signal was received on January 23, 2003, when it was about 12 billion kilometres from Earth, and it is travelling toward the direction of the star Aldebaran."
  },
  {
    id: 40,
    slug: "skylab",
    title: "Skylab",
    agency: "NASA",
    date: "May 14, 1973",
    destination: "Low Earth orbit",
    status: "Completed",
    shortDescription: "America's first space station, which hosted three crews and made long-duration science possible.",
    image: "/images/skylab.jpg",
    description:
      "Skylab was the first space station of the United States and the only one it launched on its own, built from the third stage of a Saturn V rocket and converted into a spacious orbital workshop. It was launched on May 14, 1973, on the final Saturn V flight, and weighed about 77 tonnes with a volume of about 360 cubic metres, much bigger than anything flown before, with a two-storey living and working area and an Apollo Telescope Mount to observe the Sun. During launch, a micrometeoroid and thermal shield tore away, taking one of the solar panels with it and jamming the other, which caused the temperature inside the station to rise to dangerous levels and left it with very little power. The first crew, Pete Conrad, Joseph Kerwin and Paul Weitz, was launched 11 days later and, in a series of spacewalks and improvisation, deployed a parasol-like sunshade through a port, and freed the remaining solar array, saving the station. Three crews visited Skylab between May 1973 and February 1974, staying 28, 59 and 84 days, the last of which set a US record of 84 days in orbit. They conducted hundreds of experiments in solar physics, Earth observation, biomedicine, materials science and astronomy, observed the comet Kohoutek and showed that humans could live and work in space for months. With no way to boost its orbit, as the space shuttle was not ready, it fell out of orbit and broke up over Australia and the Indian Ocean on July 11, 1979. Skylab was an important precursor to the International Space Station."
  },
  {
    id: 41,
    slug: "apollo-soyuz-test-project",
    title: "Apollo–Soyuz Test Project",
    agency: "NASA / Soviet Space Program",
    date: "July 15, 1975",
    destination: "Low Earth orbit",
    status: "Successful",
    shortDescription: "The first international crewed spaceflight, in which American and Soviet spacecraft docked in orbit.",
    image: "/images/apollo-soyuz.jpg",
    description:
      "The Apollo–Soyuz Test Project (ASTP) was the first joint space mission between the United States and the Soviet Union, and a symbol of the policy of détente at the height of the Cold War. On July 15, 1975, a Soyuz 19 spacecraft carrying cosmonauts Alexei Leonov and Valeri Kubasov was launched from Baikonur, and about seven and a half hours later, an Apollo spacecraft with astronauts Thomas Stafford, Vance Brand and Deke Slayton was launched by a Saturn IB from Kennedy Space Center. The two spacecraft used different atmospheres and different docking systems, so engineers from both countries spent years working together, overcoming differences in language, technology and culture, to develop a special docking module, built by North American Rockwell, which acted as an airlock and adapter, and a new androgynous docking mechanism that would become a basis for future international systems. The spacecraft docked on July 17, 1975, about 225 kilometres above the Atlantic, and the commanders, Stafford and Leonov, shared a famous handshake in space. Over the next two days, the crews visited each other's spacecraft, shared meals, exchanged gifts and flags, and conducted joint experiments on ultraviolet absorption, zone-forming fungi, and an artificial solar eclipse. They undocked on July 19, and the Soyuz returned on July 21, while the Apollo landed on July 24, with an accident in which the crew was exposed to toxic nitrogen tetroxide fumes. ASTP was the last Apollo flight and the last American crewed flight until the Space Shuttle in 1981, but it paved the way for the Shuttle–Mir programme and the International Space Station."
  },
  {
    id: 42,
    slug: "viking-1",
    title: "Viking 1",
    agency: "NASA",
    date: "August 20, 1975",
    destination: "Mars",
    status: "Successful",
    shortDescription: "The first successful American Mars lander, which searched for life on the Red Planet.",
    image: "/images/viking-1.jpg",
    description:
      "Viking 1 was the first successful American mission to land on Mars and one of the most ambitious planetary missions of its time, made up of an orbiter and a lander, with an identical twin, Viking 2. It was launched on August 20, 1975, atop a Titan IIIE-Centaur rocket from Cape Canaveral, entered Mars orbit on June 19, 1976, and after the orbiter imaged possible landing sites, the lander was released and touched down in Chryse Planitia on July 20, 1976, on the seventh anniversary of the Apollo 11 landing. It used a heat shield, a parachute and retrorockets for landing. The lander sent back the first clear colour pictures from the surface of Mars, showing a rusty red landscape, sand dunes, rocks and a pink sky, and carried a robotic arm that scooped soil, a seismometer, weather instruments and a biology laboratory with three experiments that tested the soil for signs of microbial metabolism. The results were puzzling: one of the experiments gave an apparently positive signal, but the instrument designed to detect organic molecules found none, and most scientists concluded that the reactions were due to unusual soil chemistry and not life, although the debate has never completely died out. The orbiters photographed almost the entire planet, with more than 50,000 images, revealing giant volcanoes, canyons and ancient river channels. The Viking 1 lander worked for more than six years, until November 1982, when it was lost after a faulty command, making it the longest-lived Mars surface mission for a long time. The Viking programme laid the foundations for all later Mars exploration."
  },
  {
    id: 43,
    slug: "voyager-2",
    title: "Voyager 2",
    agency: "NASA",
    date: "August 20, 1977",
    destination: "Interstellar space",
    status: "Active",
    shortDescription: "The only spacecraft to have visited all four giant planets, including Uranus and Neptune.",
    image: "/images/voyager-2.jpg",
    description:
      "Voyager 2 is a NASA robotic probe launched on August 20, 1977, 16 days before its twin Voyager 1, and is the only spacecraft that has ever visited the ice giants Uranus and Neptune. Using a rare alignment of the outer planets that occurs about once every 175 years, it took the so-called Grand Tour of the outer Solar System. It flew past Jupiter on July 9, 1979, where it studied the Great Red Spot and the volcanoes on Io and found evidence for a possible ocean under the ice of Europa, then Saturn on August 25, 1981, where it examined the rings and moons in detail. On January 24, 1986, it became the first and only spacecraft to visit Uranus, discovering 10 new moons, a ring system with new rings and a magnetic field tilted sharply from the planet's rotation axis, and also photographing the strange fractured moon Miranda. On August 25, 1989, it encountered Neptune, finding the Great Dark Spot, supersonic winds, six new moons and active geysers on its large moon Triton, which is probably a captured Kuiper Belt object. After this, it travelled out of the plane of the planets towards interstellar space, and on November 5, 2018, it crossed the heliopause and entered interstellar space, becoming the second spacecraft to do so and the first to carry a working plasma-science instrument as it crossed. Powered by radioisotope generators, Voyager 2 is still sending information to Earth, though its power is dwindling and instruments have been turned off one by one. It also carries a Golden Record, as a message to the future."
  },
  {
    id: 44,
    slug: "sts-1-columbia",
    title: "STS-1 (Space Shuttle Columbia)",
    agency: "NASA",
    date: "April 12, 1981",
    destination: "Low Earth orbit",
    status: "Successful",
    shortDescription: "The first orbital flight of the Space Shuttle, the world's first reusable winged spacecraft.",
    image: "/images/sts-1.jpg",
    description:
      "STS-1 was the first orbital test flight of NASA's Space Shuttle programme, and the first time a reusable winged spacecraft flew into orbit and returned to land like an aeroplane. The orbiter Columbia, with veteran astronaut John Young as commander and rookie Robert Crippen as pilot, lifted off from Kennedy Space Center on April 12, 1981, exactly 20 years after Yuri Gagarin's flight. This was also the first time that a crewed American spacecraft was launched on its very first flight with people on board, without any previous uncrewed orbital tests, which showed the high level of confidence, and risk, involved. The Shuttle stack consisted of the orbiter, a large orange external fuel tank and two solid rocket boosters, which were recovered and reused. During the 54-hour, 37-orbit mission, the astronauts opened the payload bay doors, tested the orbiter's systems and checked the performance of the thermal protection system. On the first day, they discovered that some heat-shield tiles had been lost or damaged during launch, an issue that was a warning about the vulnerability of the system, though Columbia returned safely. It glided to a landing at Edwards Air Force Base in California on April 14. Over the next 30 years, the Shuttle fleet flew 135 missions, launching the Hubble Space Telescope, deploying planetary probes such as Galileo, flying Spacelab research missions, servicing satellites and building the International Space Station, before being retired in 2011, after the final flight of Atlantis."
  },
  {
    id: 45,
    slug: "sts-51-l-challenger",
    title: "STS-51-L (Challenger Disaster)",
    agency: "NASA",
    date: "January 28, 1986",
    destination: "Low Earth orbit",
    status: "Failed – vehicle lost",
    shortDescription: "The Space Shuttle Challenger accident that took the lives of seven crew members 73 seconds after launch.",
    image: "/images/challenger.jpg",
    description:
      "STS-51-L was the 25th Space Shuttle mission and ended in one of the worst accidents in the history of spaceflight. On the cold morning of January 28, 1986, Space Shuttle Challenger lifted off from Kennedy Space Center, and 73 seconds later, the vehicle broke apart over the Atlantic Ocean, killing all seven crew members: Commander Dick Scobee, Pilot Michael J. Smith, Mission Specialists Ellison Onizuka, Judith Resnik and Ronald McNair, Payload Specialist Gregory Jarvis and Christa McAuliffe, a high-school teacher selected as the first participant in NASA's Teacher in Space project. The mission was intended to deploy a communications satellite and study Halley's Comet, and the presence of a teacher made it one of the most watched launches, with many school children watching live in classrooms. The Rogers Commission, which investigated the accident, found that the cause was the failure of an O-ring seal in the joint of the right solid rocket booster, which lost its elasticity in the unusually low temperature of about 2 degrees Celsius, allowing hot gas to leak out and burn through the external tank's attachment, causing a catastrophic structural failure. The commission also criticised NASA's decision-making and communication, noting that engineers at the booster manufacturer had warned against launching in the cold, but were overruled. Physicist Richard Feynman famously demonstrated the problem by dipping an O-ring sample in ice water during the hearing. The Shuttle fleet was grounded for almost three years, the boosters were redesigned and safety procedures were reformed. The accident is still studied as a case in engineering ethics and organisational culture."
  },
  {
    id: 46,
    slug: "mir",
    title: "Mir Space Station",
    agency: "Soviet Space Program / Roscosmos",
    date: "February 19, 1986",
    destination: "Low Earth orbit",
    status: "Completed",
    shortDescription: "The first modular space station, which was continuously inhabited for almost ten years.",
    image: "/images/mir.jpg",
    description:
      "Mir, which means peace or world in Russian, was a Soviet and later Russian space station that operated in low Earth orbit for 15 years, and was the first modular space station, assembled in orbit from several components. Its core module was launched on February 19, 1986, by a Proton rocket, and it was expanded over the next ten years with the addition of the Kvant-1, Kvant-2, Kristall, Spektr and Priroda modules, as well as a docking module, to a mass of about 130 tonnes. It was permanently occupied by crews from September 1989 to August 1999, and in total hosted more than 100 people from 12 countries. Cosmonaut Valeri Polyakov set the record for the longest single spaceflight of 437 days between 1994 and 1995, which still stands, and many cosmonauts spent more than a year on board. The station hosted about 20,000 scientific experiments, mostly in biology, medicine, materials science and astronomy, and gave valuable data on how the human body reacts to long periods of weightlessness. In the Shuttle–Mir programme from 1995 to 1998, American astronauts, beginning with Norman Thagard, lived on Mir, and Space Shuttles docked with it nine times, which gave crucial experience for the International Space Station. The station survived a number of crises, including a fire in February 1997, and a collision with an uncrewed Progress cargo ship in June 1997, which punctured the Spektr module, as well as computer failures and shortages of money. Mir was finally deorbited in a controlled manner and fell into the South Pacific Ocean on March 23, 2001."
  },
  {
    id: 47,
    slug: "galileo",
    title: "Galileo",
    agency: "NASA",
    date: "October 18, 1989",
    destination: "Jupiter",
    status: "Completed",
    shortDescription: "The first spacecraft to orbit Jupiter and drop a probe into its atmosphere.",
    image: "/images/galileo.jpg",
    description:
      "Galileo was NASA's mission to study Jupiter, its moons and magnetosphere in detail over a long period, and the first spacecraft to orbit an outer planet. It was launched on October 18, 1989, from the Space Shuttle Atlantis during mission STS-34 and, because of a change in the Shuttle's launch plans after the Challenger accident, it had to take a roundabout route through the inner Solar System, with gravity assists from Venus and the Earth twice, a journey that took six years. On the way, it made the first close flyby of an asteroid, Gaspra, in 1991, and found the first moon of an asteroid, Dactyl, orbiting asteroid Ida in 1993, and in 1994 it observed the impacts of fragments of Comet Shoemaker-Levy 9 on Jupiter. After the main high-gain antenna failed to open fully, the mission had to depend on a small low-gain antenna, and engineers developed data compression techniques to rescue most of the planned science. On December 7, 1995, a probe released earlier plunged into Jupiter's atmosphere, transmitting data for about 58 minutes down to a pressure of 23 times that on Earth and finding fewer clouds and less water than expected but very strong winds, while the orbiter entered orbit around Jupiter. In the next eight years, Galileo made dozens of close flybys of the large moons. It found strong evidence for a salty ocean beneath the icy crust of Europa, discovered the magnetic field of Ganymede, saw massive volcanic activity on Io and hints of subsurface oceans on Ganymede and Callisto. To protect the possibly habitable moon Europa from contamination, mission controllers sent the spacecraft into Jupiter's atmosphere on September 21, 2003."
  },
  {
    id: 48,
    slug: "hubble-space-telescope",
    title: "Hubble Space Telescope",
    agency: "NASA / ESA",
    date: "April 24, 1990",
    destination: "Low Earth orbit",
    status: "Operational",
    shortDescription: "One of the most productive space observatories in history, which transformed modern astronomy.",
    image: "/images/hubble.jpg",
    description:
      "The Hubble Space Telescope is a joint project between NASA and the European Space Agency that has been observing the universe from orbit for more than three decades. It was launched on April 24, 1990, aboard the Space Shuttle Discovery on mission STS-31, and placed in an orbit about 540 kilometres above the Earth, where it is above the blurring effects of the atmosphere. It is named after the astronomer Edwin Hubble and has a 2.4-metre primary mirror and instruments that observe in the ultraviolet, visible and near-infrared light. Soon after launch, scientists found that the primary mirror had been ground to the wrong shape, a flaw known as spherical aberration, leading to blurry images and public embarrassment. In December 1993, on Servicing Mission 1, astronauts installed corrective optics and a new camera, and Hubble's images became spectacularly sharp. Four more servicing missions, with the last in 2009, replaced instruments, gyroscopes and batteries and extended the telescope's life. Hubble helped determine the age of the universe at about 13.8 billion years, revealed the existence of supermassive black holes in the centres of galaxies, provided evidence that the expansion of the universe is accelerating because of dark energy, and captured the Deep Field images showing thousands of galaxies in a tiny patch of sky. It also tracked the impacts of Comet Shoemaker-Levy 9 on Jupiter, studied exoplanet atmospheres and produced iconic images such as the Pillars of Creation. Hubble has produced more than 1.5 million observations and data for tens of thousands of scientific papers, and it continues to operate alongside the James Webb Space Telescope."
  },
  {
    id: 49,
    slug: "mars-pathfinder-sojourner",
    title: "Mars Pathfinder and Sojourner",
    agency: "NASA / JPL",
    date: "December 4, 1996",
    destination: "Mars",
    status: "Successful",
    shortDescription: "A low-cost Mars lander that delivered the first wheeled rover to another planet.",
    image: "/images/mars-pathfinder.jpg",
    description:
      "Mars Pathfinder was a NASA Discovery-class mission designed to show that a low-cost, rapid-development spacecraft could land on Mars, and it delivered the first wheeled rover ever to operate on the surface of another planet. The mission cost around 265 million US dollars, a fraction of the earlier Viking programme, and was launched on December 4, 1996, by a Delta II rocket. On July 4, 1997, it entered the Martian atmosphere directly, without first going into orbit, slowed with a heat shield and parachute, fired rockets and then, as its final trick, dropped to the ground inside a cluster of giant airbags, bouncing several times before coming to a halt in Ares Vallis, an ancient flood plain. After the airbags deflated, the lander's petals opened, and the six-wheeled rover Sojourner, about the size of a microwave oven and weighing 10.6 kilograms, drove down a ramp onto the surface. During the 83 days, the rover travelled about 100 metres, analysing the chemistry of rocks such as Barnacle Bill and Yogi with its alpha-proton X-ray spectrometer, while the lander took more than 16,000 images and recorded weather data. The results suggested that Mars had once been warmer and wetter and that rocks were more varied than expected, including rounded pebbles that were probably shaped by flowing water. The mission also had an enormous public impact: the pictures were distributed over the early web, which recorded hundreds of millions of hits. Contact was lost in September 1997, after the lander's battery failed. The mission's techniques paved the way for Spirit, Opportunity, Curiosity and Perseverance."
  },
  {
    id: 50,
    slug: "cassini-huygens",
    title: "Cassini–Huygens",
    agency: "NASA / ESA / ASI",
    date: "October 15, 1997",
    destination: "Saturn and Titan",
    status: "Completed",
    shortDescription: "A 13-year orbital exploration of Saturn, its rings and moons, which also landed a probe on Titan.",
    image: "/images/cassini-huygens.jpg",
    description:
      "Cassini–Huygens was a collaboration between NASA, the European Space Agency and the Italian Space Agency, and the first mission to orbit Saturn, as well as the first to land a probe in the outer Solar System. The Cassini orbiter, together with the Huygens probe, was launched on October 15, 1997, by a Titan IVB-Centaur rocket and used gravity assists from Venus, Earth and Jupiter to reach Saturn on July 1, 2004. The Huygens probe, built by ESA, separated from the orbiter on Christmas Day 2004 and plunged into the thick atmosphere of Titan, Saturn's largest moon, on January 14, 2005, touching down on the surface and sending back images of a landscape with drainage channels and rounded pebbles of water ice, as well as data on the atmosphere. Over the next 13 years, Cassini made 294 orbits of Saturn and over 100 flybys of Titan, as well as many flybys of other moons, and returned over 450,000 images. Its discoveries include huge plumes of water vapour and ice grains erupting from the south pole of Enceladus, which indicate a subsurface ocean with hydrothermal activity, lakes and seas of liquid methane and ethane on Titan, a hexagonal storm at Saturn's north pole, new moons, and detailed structures in the rings. Cassini's instruments also showed that Saturn's rings are young and dynamic. As the spacecraft was running low on fuel, mission controllers planned a Grand Finale, in which it dived between Saturn and its rings 22 times in 2017 and then plunged into the planet's atmosphere on September 15, 2017, to avoid any risk of contaminating the potentially habitable moons Enceladus and Titan."
  },
  {
    id: 51,
    slug: "international-space-station",
    title: "International Space Station (ISS)",
    agency: "NASA / Roscosmos / ESA / JAXA / CSA",
    date: "November 20, 1998",
    destination: "Low Earth orbit",
    status: "Operational",
    shortDescription: "The largest structure ever built in space and a permanent international laboratory in orbit.",
    image: "/images/iss.jpg",
    description:
      "The International Space Station is a permanently crewed research laboratory in low Earth orbit, built and operated through a partnership of five space agencies: NASA, Roscosmos, the European Space Agency, the Japan Aerospace Exploration Agency and the Canadian Space Agency. Construction began on November 20, 1998, with the launch of the Russian Zarya module, followed weeks later by the American Unity node, and it grew over more than a decade of Space Shuttle and Russian Proton and Soyuz flights, with major modules such as Zvezda, Destiny, Columbus, Kibo and Cupola, as well as huge solar arrays and a robotic arm. The first long-term crew, Expedition 1, arrived on November 2, 2000, and the station has been continuously occupied ever since, which means that humans have lived in space without a break for more than two decades. With a mass of about 420 tonnes and a length of about 109 metres, it is roughly the size of a football field, orbiting at an altitude of about 400 kilometres at about 28,000 kilometres per hour and circling the Earth every 90 minutes. More than 270 people from more than 20 countries have visited it, and its crews have carried out thousands of experiments in microgravity in biology, human physiology, materials science, fluid physics, Earth observation and astronomy, testing technologies for life support and crop growth in space for future Moon and Mars missions. Cargo and crew are carried by vehicles such as Soyuz, SpaceX Dragon, Cygnus and others. The station also has served as a model of diplomatic cooperation between nations, even in times of political tension. The partners plan to operate the ISS until around 2030, after which it will be guided to a controlled re-entry over a remote area of the Pacific Ocean."
  },
  {
    id: 52,
    slug: "sts-107-columbia",
    title: "STS-107 (Columbia Disaster)",
    agency: "NASA",
    date: "January 16, 2003",
    destination: "Low Earth orbit",
    status: "Failed – vehicle lost on re-entry",
    shortDescription: "A 16-day science mission that ended with the loss of Space Shuttle Columbia and its seven crew members.",
    image: "/images/sts-107.jpg",
    description:
      "STS-107 was the 113th flight of the Space Shuttle and the 28th and final mission of Columbia, dedicated to 16 days of round-the-clock scientific research in a SPACEHAB module in the payload bay. The seven-member crew consisted of Commander Rick Husband, Pilot William McCool, Payload Commander Michael Anderson, Mission Specialists Kalpana Chawla, David Brown and Laurel Clark, and Ilan Ramon, the first Israeli astronaut. Kalpana Chawla, born in Karnal, India, was the first woman of Indian origin to travel to space, and is remembered with great pride and respect in India. The crew conducted around 80 experiments in fields such as biology, materials science, fire suppression, atmospheric dust and human physiology, working in two shifts. The mission seemed to be a complete success until the return. About 82 seconds after launch on January 16, 2003, a piece of insulating foam from the external tank broke off and hit the leading edge of the left wing of the orbiter. Although engineers on the ground discussed the impact during the flight, they thought it was not a serious threat and the crew was not informed of the potential danger. On February 1, 2003, during re-entry, super-hot gases entered the damaged wing and caused Columbia to break apart over Texas and Louisiana, about 16 minutes before the scheduled landing in Florida, killing all seven crew members. The Columbia Accident Investigation Board concluded that the cause was physical, from the foam strike, and organisational, due to NASA's culture. The Shuttle fleet was grounded for over two years, and it returned to flight in 2005 and was retired in 2011."
  },
  {
    id: 53,
    slug: "spirit-and-opportunity",
    title: "Mars Exploration Rovers: Spirit and Opportunity",
    agency: "NASA / JPL",
    date: "June 10, 2003",
    destination: "Mars",
    status: "Completed",
    shortDescription: "Twin robotic geologists that found strong evidence of past water on Mars.",
    image: "/images/mars-exploration-rovers.jpg",
    description:
      "The Mars Exploration Rover mission sent two identical solar-powered rovers, Spirit and Opportunity, to opposite sides of Mars to look for evidence of past water. Spirit was launched on June 10, 2003, and Opportunity on July 7, 2003, both on Delta II rockets, and they landed using parachutes and airbags on January 4 and January 25, 2004, in Gusev Crater and Meridiani Planum respectively. Each rover, about the size of a golf cart and weighing 185 kilograms, carried a panoramic camera, a robotic arm with a rock abrasion tool, and spectrometers to identify minerals and chemical composition. The mission was designed to last only 90 Martian days, but the rovers worked for far longer. Opportunity found small spherical grains of hematite, nicknamed blueberries, and layered rocks that formed in salty, acidic water, providing strong proof that liquid water had once existed on the surface. Spirit found deposits of nearly pure silica in an area called Home Plate that likely formed in hot springs or steam vents, an environment that could have supported microbes. Spirit's wheels broke through soft sand in 2009, and it was permanently stuck, then it sent its last message in March 2010. Opportunity kept going for more than 14 years, travelling about 45 kilometres, a record for any vehicle on another world, until a global dust storm blocked the sunlight in June 2018, and NASA declared the mission over in February 2019, with the poetic last message that its battery was low and it was getting dark. The rovers changed our view of Mars as a once wet world."
  },
  {
    id: 54,
    slug: "shenzhou-5",
    title: "Shenzhou 5",
    agency: "CNSA / China Manned Space Agency",
    date: "October 15, 2003",
    destination: "Low Earth orbit",
    status: "Successful",
    shortDescription: "China's first crewed spaceflight, carrying Yang Liwei into orbit.",
    image: "/images/shenzhou-5.jpg",
    description:
      "Shenzhou 5 was China's first crewed space mission and made China the third country, after the Soviet Union and the United States, to send a human into space with its own rocket and spacecraft. On October 15, 2003, Yang Liwei, a lieutenant colonel in the People's Liberation Army Air Force, was launched from the Jiuquan Satellite Launch Center in the Gobi Desert aboard a Long March 2F rocket. The Shenzhou spacecraft design was based on the Russian Soyuz but was built with much newer technology and larger dimensions, with an orbital module, a re-entry capsule and a service module with solar panels. Yang, who was called a taikonaut in the West, orbited the Earth 14 times in about 21 hours, travelling around 600,000 kilometres, and during the flight he ate, took photographs, filmed the Earth, unfurled flags of China and the United Nations and communicated with his family and Chinese leaders. He reported some vibrations at launch that caused discomfort, which were later addressed in future flights. The re-entry capsule landed with the help of a parachute and a retro-rocket in the grasslands of Inner Mongolia on October 16, 2003, and Yang walked out of the capsule on his own. The flight was a source of enormous national pride, and was followed by Shenzhou 6 with two crew in 2005, the first Chinese spacewalk on Shenzhou 7 in 2008, space laboratories Tiangong-1 and Tiangong-2, and later the permanent Tiangong space station."
  },
  {
    id: 55,
    slug: "rosetta-philae",
    title: "Rosetta and Philae",
    agency: "ESA",
    date: "March 2, 2004",
    destination: "Comet 67P/Churyumov–Gerasimenko",
    status: "Completed",
    shortDescription: "The first mission to orbit a comet and land a probe on its surface.",
    image: "/images/rosetta-philae.jpg",
    description:
      "Rosetta was a European Space Agency mission, with contributions from NASA and several European countries, to study a comet from close range, and it was the first mission to orbit a comet's nucleus and to deploy a lander on its surface. It was launched on March 2, 2004, by an Ariane 5 rocket and followed a ten-year, 6.4-billion-kilometre route through the inner Solar System, using gravity assists from the Earth three times and Mars once, and photographing the asteroids Steins in 2008 and Lutetia in 2010. After spending 31 months in deep-space hibernation to save power, it was woken up in January 2014 and reached comet 67P/Churyumov–Gerasimenko on August 6, 2014. On November 12, 2014, the lander Philae separated and descended to the comet, but its harpoons did not fire and it bounced twice, finally coming to rest in the shade of a cliff, which limited the sunlight on its solar panels. After about 60 hours of work on its primary battery, which included drilling and imaging the surface, Philae went into hibernation, but briefly woke up in June 2015. Meanwhile, Rosetta orbited and followed the comet as it approached the Sun and became active, studying the way jets of gas and dust formed. It found that the comet's water has a different ratio of deuterium to hydrogen than the Earth's oceans, which suggests that comets were not the main source of Earth's water, and detected organic molecules, including the amino acid glycine. On September 30, 2016, Rosetta ended its mission by landing gently on the comet."
  },
  {
    id: 56,
    slug: "new-horizons",
    title: "New Horizons",
    agency: "NASA",
    date: "January 19, 2006",
    destination: "Pluto and the Kuiper Belt",
    status: "Active",
    shortDescription: "The first spacecraft to fly past Pluto and an object in the Kuiper Belt.",
    image: "/images/new-horizons.jpg",
    description:
      "New Horizons is a NASA mission that gave humanity its first close look at Pluto and its moons, and later explored a distant object in the Kuiper Belt, the icy region beyond Neptune. The small, piano-sized spacecraft was launched on January 19, 2006, by an Atlas V rocket, at a speed of about 16 kilometres per second, one of the fastest launches of any spacecraft from Earth, and passed the Moon's orbit in just nine hours. It used a gravity assist from Jupiter in February 2007, which sped it up and also provided a chance to test its instruments on the giant planet and its moons. After a long cruise, spent mainly in hibernation, on July 14, 2015, it flew within about 12,500 kilometres of Pluto, after a journey of nine and a half years. The flyby revealed a surprisingly active and complex world, with a heart-shaped region called Tombaugh Regio, covered with nitrogen ice glaciers, mountains of water ice as high as the Rocky Mountains, a thin blue atmosphere with layers of haze and few impact craters, which suggests geological activity in the recent past. It also studied Pluto's largest moon, Charon, which turned out to have a reddish north pole and huge canyons. On January 1, 2019, the spacecraft flew past a small Kuiper Belt object, nicknamed Ultima Thule and officially named Arrokoth, a snowman-shaped contact binary and the most distant object ever explored by a spacecraft at that time. The spacecraft, which also carries some of the ashes of Pluto's discoverer, Clyde Tombaugh, is powered by a radioisotope generator and continues its extended mission, studying the outer heliosphere and distant Kuiper Belt objects."
  },
  {
    id: 57,
    slug: "kepler",
    title: "Kepler Space Telescope",
    agency: "NASA",
    date: "March 7, 2009",
    destination: "Earth-trailing heliocentric orbit",
    status: "Completed",
    shortDescription: "A planet-hunting telescope that showed that planets are common throughout the galaxy.",
    image: "/images/kepler.jpg",
    description:
      "The Kepler Space Telescope was NASA's first mission dedicated to finding Earth-sized planets orbiting other stars, and it changed our understanding of the number and variety of worlds in the galaxy. It was launched on March 7, 2009, by a Delta II rocket into an Earth-trailing orbit around the Sun, which gave it a stable and undisturbed view. Kepler had a single instrument, a very sensitive photometer with a 95-megapixel camera, and it stared continuously at a patch of sky of about 115 square degrees in the constellations of Cygnus and Lyra, monitoring the brightness of about 150,000 stars at the same time. It used the transit method, looking for tiny, periodic dips in a star's brightness that occur when a planet passes in front of it, that can be as small as 0.01 percent for an Earth-like planet. The mission confirmed over 2,600 exoplanets and found thousands of other candidates, showing that planets are more common than stars, and that small rocky planets and super-Earths are the most abundant type, even though there is nothing like them in our own Solar System. Among its discoveries were Kepler-22b, the first confirmed planet in the habitable zone of a Sun-like star, Kepler-186f, the first Earth-sized planet in the habitable zone of another star, and multi-planet systems such as Kepler-90, with eight planets. After the failure of two of its four reaction wheels in 2013, which made it impossible to point precisely, the mission was reborn as K2, which used the pressure of sunlight to keep the spacecraft stable and observed different fields along the ecliptic. NASA retired Kepler on October 30, 2018, after it ran out of fuel."
  },
  {
    id: 58,
    slug: "curiosity",
    title: "Mars Science Laboratory (Curiosity)",
    agency: "NASA / JPL",
    date: "November 26, 2011",
    destination: "Mars",
    status: "Active",
    shortDescription: "A car-sized rover that found that ancient Mars could have supported microbial life.",
    image: "/images/curiosity.jpg",
    description:
      "The Mars Science Laboratory mission delivered the Curiosity rover, a car-sized, nuclear-powered robotic geologist, to Gale Crater on Mars, where it is looking for evidence that the planet once had conditions suitable for life. It was launched on November 26, 2011, on an Atlas V rocket and landed on August 6, 2012, in a dramatic descent involving a heat shield, a supersonic parachute and a rocket-powered sky crane that lowered the rover on cables, a technique used for the first time. Weighing about 900 kilograms, Curiosity is powered by a radioisotope thermoelectric generator, which gives it a long life and allows it to operate day and night, and it carries ten scientific instruments, including the ChemCam laser, which vaporises rocks from a distance, the Sample Analysis at Mars laboratory and the CheMin X-ray diffraction instrument, that analyse drilled samples, plus cameras and weather and radiation sensors. In 2013, at a place called Yellowknife Bay, it discovered that an ancient lake bed once had fresh water, the key chemical elements for life and an energy source, which means that it was habitable. It has since found complex organic molecules in ancient mudstones, detected seasonal changes in atmospheric methane and measured radiation levels that are important for future human missions. The rover is climbing Mount Sharp, a 5-kilometre-high mountain at the centre of the crater, reading the layers like a history book of how Mars' environment changed from wet to dry. Many years after landing, it is still exploring, and has driven more than 30 kilometres, despite wear and tear on its aluminium wheels."
  },
  {
    id: 59,
    slug: "hayabusa2",
    title: "Hayabusa2",
    agency: "JAXA",
    date: "December 3, 2014",
    destination: "Asteroid Ryugu",
    status: "Successful",
    shortDescription: "A Japanese mission that returned samples from the asteroid Ryugu to Earth.",
    image: "/images/hayabusa2.jpg",
    description:
      "Hayabusa2 is a Japanese asteroid sample-return mission led by JAXA, the successor to the pioneering Hayabusa mission, which brought back a tiny amount of dust from the asteroid Itokawa in 2010. It was launched on December 3, 2014, by an H-IIA rocket and reached the carbon-rich near-Earth asteroid 162173 Ryugu in June 2018, after a journey of about three and a half years. The spacecraft spent over a year-and-a-half mapping and studying the diamond-shaped, rubble-pile asteroid, which is only about 900 metres across, and deployed two small hopping rovers, MINERVA-II1, and a lander named MASCOT, built by Germany and France, which sent back images and data from the surface. In February 2019, Hayabusa2 made a touchdown to collect a surface sample. In April 2019, it fired a copper projectile from a device called the Small Carry-on Impactor to create an artificial crater, and then in July 2019, it carried out a second, very precise touchdown to collect material from underneath the surface, which had been protected from the harsh space environment. The capsule carrying the samples was released near Earth and landed by parachute in the Woomera region of Australia on December 6, 2020, with about 5.4 grams of material, far more than the target. Analysis revealed organic molecules, including more than 20 types of amino acids, and evidence of water-altered minerals, which supports the idea that asteroids may have delivered the ingredients for life to the early Earth. The spacecraft itself continued with an extended mission to visit other small asteroids in the following years."
  },
  {
    id: 60,
    slug: "osiris-rex",
    title: "OSIRIS-REx",
    agency: "NASA",
    date: "September 8, 2016",
    destination: "Asteroid Bennu",
    status: "Successful",
    shortDescription: "NASA's first asteroid sample-return mission, which delivered material from Bennu to Earth.",
    image: "/images/osiris-rex.jpg",
    description:
      "OSIRIS-REx, which stands for Origins, Spectral Interpretation, Resource Identification and Security – Regolith Explorer, was NASA's first mission to bring a sample of an asteroid back to Earth. It was launched on September 8, 2016, by an Atlas V rocket, and it arrived at the near-Earth asteroid 101955 Bennu in December 2018, a dark, carbon-rich body about 500 metres across, which is a leftover from the early Solar System and is also one of the most potentially hazardous asteroids, with a small chance of hitting Earth in the late 22nd century. The spacecraft spent almost two years mapping Bennu in great detail, and discovered that the asteroid was shedding small particles into space and that its surface was much rockier than expected, which made choosing a safe sampling site very difficult. On October 20, 2020, in a manoeuvre called Touch-And-Go, it briefly touched the surface at the Nightingale site and fired a burst of nitrogen gas to stir up material, collecting so much that the sample container's lid was jammed open by rocks, and engineers had to quickly stow the sample to stop it leaking. After leaving Bennu in 2021, OSIRIS-REx returned to Earth and dropped its sample capsule, which landed by parachute at the Utah Test and Training Range on September 24, 2023, with about 120 grams of material. Early studies found abundant carbon and water-bearing clay minerals, and later work identified amino acids and the nucleobases of life, as well as salts that formed from evaporated water, pointing to a briny environment on Bennu's parent body. The spacecraft, renamed OSIRIS-APEX, is now travelling to study the asteroid Apophis in 2029."
  },
  {
    id: 61,
    slug: "parker-solar-probe",
    title: "Parker Solar Probe",
    agency: "NASA",
    date: "August 12, 2018",
    destination: "The Sun",
    status: "Active",
    shortDescription: "The fastest human-made object, which has flown into the Sun's corona.",
    image: "/images/parker-solar-probe.jpg",
    description:
      "The Parker Solar Probe is a NASA mission, named after the astrophysicist Eugene Parker who predicted the solar wind, which is designed to go closer to the Sun than any other spacecraft in history, to study the corona and the origins of the solar wind. It was launched on August 12, 2018, by a Delta IV Heavy rocket, and used seven gravity assists from Venus between 2018 and 2024 to gradually shrink its elliptical orbit around the Sun. Because of its closeness to the Sun, the spacecraft is protected by a 11.5-centimetre-thick carbon-composite heat shield, which faces temperatures of about 1,400 degrees Celsius, whereas the instruments behind it remain near room temperature, and the solar panels retract and tilt to avoid overheating. On April 28, 2021, it became the first spacecraft to enter the Sun's corona, effectively touching the Sun, and it has made close approaches to the Sun many times since, with its closest pass on December 24, 2024, at about 6.1 million kilometres from the solar surface, travelling at about 690,000 kilometres per hour, which makes it the fastest human-made object. Its four sets of instruments measure electric and magnetic fields, plasma waves, energetic particles and take images of the solar wind. Parker discovered that the solar wind contains zig-zag magnetic structures called switchbacks, found that the Sun's corona has a boundary called the Alfvén surface, which it crossed, and gathered evidence on how energetic particles are accelerated. The results will help scientists predict dangerous space weather that can harm satellites, astronauts and power grids on Earth."
  },
  {
    id: 62,
    slug: "chang-e-4",
    title: "Chang'e 4",
    agency: "CNSA",
    date: "December 7, 2018",
    destination: "Moon (far side)",
    status: "Successful",
    shortDescription: "The first spacecraft to soft-land on the far side of the Moon.",
    image: "/images/chang-e-4.jpg",
    description:
      "Chang'e 4 was a Chinese lunar mission that achieved the first-ever soft landing on the far side of the Moon, the hemisphere that never faces the Earth. Because direct radio communication with the far side is impossible, China first launched the Queqiao relay satellite in May 2018 to a halo orbit around the Earth–Moon L2 point, from where it could see both the Earth and the lander. Chang'e 4, which includes a lander and the Yutu-2 rover, was launched on December 7, 2018, by a Long March 3B rocket from Xichang, and it touched down on January 3, 2019, in the Von Kármán crater, in the huge South Pole–Aitken basin, which is one of the largest and oldest impact structures in the Solar System. The lander used terrain-recognition and hazard-avoidance technology for the descent. Yutu-2 (Jade Rabbit 2) drove off and began to explore, using a panoramic camera, a ground-penetrating radar to look at the layers under the surface, an infrared spectrometer to identify minerals and a neutral atom detector to study the solar wind interacting with the surface. The data suggested the presence of minerals such as olivine and low-calcium pyroxene, which may come from the Moon's mantle, providing a rare view into the Moon's interior, and the radar showed layers of ejecta and regolith to a depth of about 40 metres. The lander also carried a small biological experiment, in which cotton seeds sprouted briefly before dying in the cold lunar night. Yutu-2 became the longest-operating lunar rover, working for years beyond its design life. The mission is a major milestone for China's space programme and pioneering for far-side exploration."
  },
  {
    id: 63,
    slug: "crew-dragon-demo-2",
    title: "SpaceX Crew Dragon Demo-2",
    agency: "NASA / SpaceX",
    date: "May 30, 2020",
    destination: "International Space Station",
    status: "Successful",
    shortDescription: "The first crewed orbital launch from US soil in nine years and the first by a commercial company.",
    image: "/images/crew-dragon-demo-2.jpg",
    description:
      "Demo-2 was the final test flight of SpaceX's Crew Dragon spacecraft under NASA's Commercial Crew Program and the first time that a privately built and operated spacecraft carried astronauts into orbit. NASA astronauts Robert Behnken and Douglas Hurley, both former Space Shuttle crew members, lifted off on May 30, 2020, atop a Falcon 9 rocket from Launch Complex 39A at Kennedy Space Center, the same pad used for Apollo and Shuttle launches. It was the first time that astronauts were launched from American soil since the retirement of the Shuttle in 2011, ending a period in which NASA depended on Russian Soyuz spacecraft to reach the space station, at a cost of tens of millions of dollars per seat. The capsule, which Behnken and Hurley named Endeavour, flew autonomously to dock with the International Space Station on May 31, and the astronauts, who could take manual control with touchscreens, joined the Expedition 63 crew. During their two months on board, they helped with maintenance, took part in spacewalks and carried out science experiments. On August 2, 2020, they undocked and made a splashdown in the Gulf of Mexico off Pensacola, Florida, the first splashdown of a crewed US spacecraft since Apollo-Soyuz in 1975, in front of crowds of boats. The success of Demo-2 certified Crew Dragon for operational flights, which began with Crew-1 in November 2020, and was a major step in the commercialisation of space, leading to private missions such as Inspiration4 and Axiom flights."
  },
  {
    id: 64,
    slug: "hope-emirates-mars-mission",
    title: "Hope (Emirates Mars Mission)",
    agency: "UAE Space Agency / MBRSC",
    date: "July 19, 2020",
    destination: "Mars",
    status: "Operational",
    shortDescription: "The first interplanetary mission of the Arab world, which studies the Martian atmosphere and weather.",
    image: "/images/hope-mars-probe.jpg",
    description:
      "The Emirates Mars Mission, with its Hope orbiter, known in Arabic as Al-Amal, is the United Arab Emirates' first interplanetary mission and the first Arab mission to Mars. It was developed by the Mohammed bin Rashid Space Centre in Dubai in cooperation with the University of Colorado Boulder, Arizona State University and the University of California, Berkeley, and was launched on July 19, 2020, by a Japanese H-IIA rocket from Tanegashima Space Center. After a seven-month cruise, it fired its engines for about 27 minutes on February 9, 2021, to enter orbit around Mars, the first of three Mars missions to arrive that month, along with China's Tianwen-1 and NASA's Perseverance. The roughly 1,350-kilogram, car-sized probe is in a large elliptical orbit, which allows it to observe the whole planet and to study how the atmosphere changes during the day and over the seasons, something no earlier mission had been able to do. Its three instruments, the Emirates Exploration Imager, the Emirates Mars Infrared Spectrometer and the Emirates Mars Ultraviolet Spectrometer, measure dust, clouds, temperature, water vapour and the escape of hydrogen and oxygen into space, which may help explain how Mars lost most of its water and atmosphere. Hope has discovered a new type of aurora, called discrete aurora, which appears all around the planet in the night side, and has produced detailed pictures of the Martian moon Deimos from a close pass in 2023. All of the data are made freely available to the global scientific community. The mission has inspired a generation in the UAE and the Arab world to take an interest in science and engineering."
  },
  {
    id: 65,
    slug: "tianwen-1",
    title: "Tianwen-1",
    agency: "CNSA",
    date: "July 23, 2020",
    destination: "Mars",
    status: "Successful",
    shortDescription: "China's first Mars mission, which orbited, landed and deployed a rover in a single attempt.",
    image: "/images/tianwen-1.jpg",
    description:
      "Tianwen-1, whose name means Questions to Heaven after an ancient Chinese poem, was China's first independent mission to Mars and one of the boldest first attempts at the planet, consisting of an orbiter, a lander and a rover. It was launched on July 23, 2020, by a Long March 5 rocket from the Wenchang Space Launch Site on Hainan Island, and entered Mars orbit on February 10, 2021. After several months of surveying the landing site, the lander, protected by an aeroshell and slowed by a parachute and rocket engine, touched down on May 14, 2021, in southern Utopia Planitia, a large plain thought to have been the site of an ancient ocean. This made China only the second country, after the United States, to successfully operate a rover on Mars. The solar-powered rover Zhurong, named after a Chinese god of fire, weighed about 240 kilograms and carried six instruments, including cameras, a ground-penetrating radar, a magnetic field detector, a weather station and instruments to identify surface minerals and composition. It travelled nearly two kilometres over about a year, and its radar found layered structures beneath the surface, while it detected hydrated minerals and signs of past water activity on dunes and crusts, which suggested that water could have been present at relatively recent times in the geological history of the planet. The rover went into hibernation in May 2022 to ride out the Martian winter and dust storms, and it did not wake up as hoped. The orbiter continues to study the planet from above, and the mission paves the way for China's planned Mars sample-return mission."
  },
  {
    id: 66,
    slug: "chang-e-5",
    title: "Chang'e 5",
    agency: "CNSA",
    date: "November 23, 2020",
    destination: "Moon",
    status: "Successful",
    shortDescription: "China's lunar sample-return mission, which brought back the first Moon samples in more than 40 years.",
    image: "/images/chang-e-5.jpg",
    description:
      "Chang'e 5 was a complex Chinese lunar sample-return mission and the first in the world to bring Moon samples back to Earth since the Soviet Union's Luna 24 in 1976. It was launched on November 23, 2020, by a Long March 5 rocket from the Wenchang Space Launch Site and consisted of four parts: an orbiter, a lander, an ascender and a re-entry capsule. After entering lunar orbit, the lander and ascender combination descended to the surface and touched down on December 1, 2020, in the Mons Rümker region of Oceanus Procellarum, a volcanic area on the near side of the Moon, which was selected because the rocks are among the youngest on the Moon. Over about two days, the lander used a drill to collect material from about two metres below the surface and a scoop to gather surface material, and also took images and collected data with a ground-penetrating radar. It then packed the sample in the ascender, which launched from the Moon's surface on December 3, and carried out an automatic rendezvous and docking in lunar orbit with the orbiter, the first time this had been done by an uncrewed spacecraft around the Moon. The sample was moved to the re-entry capsule, which returned to Earth with a skip re-entry to reduce heating, and landed in Inner Mongolia on December 17, 2020, with 1,731 grams of material. Scientists dated the basalts to about 2 billion years ago, showing that volcanic activity on the Moon lasted far longer than expected, and identified a new mineral, named changesite-(Y). The mission was a key step to Chang'e 6 and to China's crewed lunar ambitions."
  },
  {
    id: 67,
    slug: "tiangong-space-station",
    title: "Tiangong Space Station",
    agency: "CNSA / China Manned Space Agency",
    date: "April 29, 2021",
    destination: "Low Earth orbit",
    status: "Operational",
    shortDescription: "China's permanently crewed modular space station.",
    image: "/images/tiangong.jpg",
    description:
      "Tiangong, which means Heavenly Palace, is China's modular space station, assembled in low Earth orbit at an altitude of about 400 kilometres to 450 kilometres, and the only other permanently crewed station in orbit besides the International Space Station. It follows China's earlier experimental space laboratories Tiangong-1 and Tiangong-2. The construction started on April 29, 2021, with the launch of the Tianhe core module on a Long March 5B rocket, which includes living quarters for three crew members, and was followed by the Wentian laboratory module in July 2022 and the Mengtian laboratory module in October 2022, which together create a T-shaped structure with a mass of about 100 tonnes, about a fifth of the ISS. The first crew, Shenzhou 12, with Nie Haisheng, Liu Boming and Tang Hongbo, arrived in June 2021 for a three-month stay, and since then crews of three have been rotated every six months aboard Shenzhou spacecraft, with Tianzhou cargo ships delivering supplies, and brief overlaps with six astronauts when crews hand over. The station has experiments in life sciences, materials, fluid physics, combustion and astronomy, and an attached large space telescope called Xuntian is planned to fly independently and dock with the station for servicing. Tiangong has an airlock for spacewalks and a robotic arm, and its crews have carried out many spacewalks and installed additional equipment. China has also opened the station to international cooperation, and has plans to include foreign astronauts, such as Pakistani astronauts, and to expand the station in the future. Tiangong is an important part of China's plan for a crewed lunar landing."
  },
  {
    id: 68,
    slug: "dart",
    title: "DART (Double Asteroid Redirection Test)",
    agency: "NASA / APL",
    date: "November 24, 2021",
    destination: "Asteroid Dimorphos",
    status: "Successful",
    shortDescription: "The first test of a planetary defence technique to deflect an asteroid.",
    image: "/images/dart.jpg",
    description:
      "The Double Asteroid Redirection Test (DART) was the first spacecraft in history designed to change the motion of a natural object in space, as a demonstration of a kinetic impactor technique that could one day protect Earth from a dangerous asteroid. It was built and managed by the Johns Hopkins Applied Physics Laboratory for NASA's Planetary Defense Coordination Office and launched on November 24, 2021, by a SpaceX Falcon 9 rocket. The target was Dimorphos, a small, 160-metre-wide moonlet orbiting the larger asteroid Didymos, which posed no threat to Earth, and was chosen because the Earth-based telescopes could measure how its orbital period changed. DART, a refrigerator-sized spacecraft weighing about 570 kilograms, flew autonomously for the last hours using a camera and a navigation system called SMART Nav to identify and steer toward the asteroid. On September 26, 2022, it struck Dimorphos at a speed of about 22,500 kilometres per hour, and its last images showed a boulder-strewn surface before the signal was lost. A small Italian CubeSat, LICIACube, released earlier, observed the impact and the plume of ejected material. Telescopes on Earth saw the impact create a huge tail of debris and, within weeks, measured that the orbital period of Dimorphos around Didymos had been shortened by about 32 minutes, from 11 hours and 55 minutes to about 11 hours and 23 minutes, much more than the minimum goal of 73 seconds. The result also showed that the ejected material provided an extra push, and that Dimorphos is a loose pile of rubble. ESA's Hera mission, launched in 2024, will visit the system to survey the crater and measure the asteroid's mass in detail."
  },
  {
    id: 69,
    slug: "juice",
    title: "JUICE (Jupiter Icy Moons Explorer)",
    agency: "ESA",
    date: "April 14, 2023",
    destination: "Jupiter and Ganymede",
    status: "In transit",
    shortDescription: "ESA's mission to study Jupiter and its potentially habitable icy moons, Ganymede, Callisto and Europa.",
    image: "/images/juice.jpg",
    description:
      "JUICE, which stands for Jupiter Icy Moons Explorer, is the first large-class mission of the European Space Agency's Cosmic Vision programme and is designed to investigate whether the ocean-bearing icy moons of Jupiter could support life. It was launched on April 14, 2023, by an Ariane 5 rocket from Kourou, French Guiana, and takes a long and complicated route, with a series of gravity assists, in which it performed the first ever lunar-Earth flyby in August 2024, a Venus flyby in August 2025, and Earth flybys in 2026 and 2029, to build up enough speed to reach Jupiter in July 2031. The spacecraft carries 10 scientific instruments, including cameras, spectrometers, a laser altimeter, a radar that can see as deep as nine kilometres into the ice, a magnetometer and radio-science and plasma experiments, and it is powered by one of the largest solar arrays ever flown on a planetary mission, about 85 square metres. For about three and a half years, JUICE will make many flybys of the moons Europa, Callisto and Ganymede, and it will then enter orbit around Ganymede in December 2034, the first time that a spacecraft has orbited a moon other than our own. Ganymede is the largest moon in the Solar System, bigger than Mercury, and the only one with its own magnetic field, and it is thought to have an underground salty ocean. The mission will map the thickness of the ice shells and the depth of the oceans, study their chemistry, and examine Jupiter's atmosphere, magnetosphere and rings. It complements NASA's Europa Clipper, which focuses on Europa."
  },
  {
    id: 70,
    slug: "slim",
    title: "SLIM (Smart Lander for Investigating Moon)",
    agency: "JAXA",
    date: "September 7, 2023",
    destination: "Moon",
    status: "Successful",
    shortDescription: "Japan's precision lunar lander, known as the Moon Sniper.",
    image: "/images/slim.jpg",
    description:
      "SLIM, the Smart Lander for Investigating Moon, is a Japanese lunar lander designed to demonstrate pinpoint landing technology, which could be used for future exploration of specific, scientifically interesting but hazardous locations. It was launched on September 7, 2023, by an H-IIA rocket, sharing the ride with the X-ray astronomy satellite XRISM, and took a fuel-efficient, slow route to the Moon, arriving in lunar orbit in December 2023. On January 19, 2024, it began its descent to a spot near the Shioli crater, a small crater with exposed rock from the Moon's mantle. Using vision-based navigation, comparing images taken by its camera to maps stored in its computer, it was able to guide itself to a landing within about 10 metres of the target, compared with the usual kilometres of previous missions, which is why it earned the nickname the Moon Sniper. This made Japan the fifth country to achieve a soft landing on the Moon. During the final descent, however, one of the two main engines failed, and the lander ended up upside down, with its solar panels pointing away from the Sun, so that it could produce little power and was switched off to save the battery. Days later, when the light shifted, the lander was successfully reactivated. SLIM carried two tiny robots, the hopping LEV-1 and the ball-shaped, baseball-sized LEV-2, which were deployed just before landing, and they sent back images of SLIM on the surface. The lander used a multi-band camera to study the composition of lunar rocks, and survived several lunar nights, far longer than expected. The mission was a great technical success."
  },
  {
    id: 71,
    slug: "intuitive-machines-im-1-odysseus",
    title: "IM-1 (Odysseus)",
    agency: "Intuitive Machines / NASA CLPS",
    date: "February 15, 2024",
    destination: "Moon",
    status: "Partial success",
    shortDescription: "The first US lunar landing in more than 50 years and the first by a commercial company.",
    image: "/images/im-1-odysseus.jpg",
    description:
      "IM-1 was the first mission of Intuitive Machines of Houston, Texas, under NASA's Commercial Lunar Payload Services (CLPS) initiative, through which NASA buys delivery services to the Moon from private companies. The Nova-C lander, named Odysseus and nicknamed Odie, was launched on February 15, 2024, by a SpaceX Falcon 9 rocket, and carried six NASA payloads and a number of commercial ones. Powered by a new liquid methane and liquid oxygen engine, the first of its kind flown in deep space, it reached lunar orbit and attempted its landing on February 22, 2024, near the crater Malapert A, close to the lunar south pole, which made it the closest approach to the south pole by any spacecraft at that time. Shortly before the descent, the team discovered that the lander's laser rangefinders, used to measure altitude and velocity, had not been activated because a safety switch had not been removed before launch. In a bold improvisation, engineers used an experimental NASA laser instrument, the Navigation Doppler Lidar, carried as a payload, to guide the final descent. Odysseus touched down, but one of its legs caught in the surface at a high horizontal speed and broke, causing the lander to tip over and rest at an angle on its side, which limited its antenna communications and solar power. The lander still operated for about nine days, sending back data and images, before running out of power. It was the first American soft landing on the Moon since Apollo 17 in 1972, and the first by a private company, and it was an important lesson for the commercial lunar delivery industry."
  },
  {
    id: 72,
    slug: "chang-e-6",
    title: "Chang'e 6",
    agency: "CNSA",
    date: "May 3, 2024",
    destination: "Moon (far side)",
    status: "Successful",
    shortDescription: "The first mission to bring samples back from the far side of the Moon.",
    image: "/images/chang-e-6.jpg",
    description:
      "Chang'e 6 was a Chinese robotic mission that made history by collecting and returning the first samples from the far side of the Moon. It was launched on May 3, 2024, by a Long March 5 rocket from Wenchang, and used the Queqiao-2 relay satellite, placed in lunar orbit earlier in 2024, to keep in contact with the Earth while on the far side. After a few weeks in lunar orbit, the lander and ascender touched down on June 1, 2024, in the Apollo Basin, located inside the huge South Pole–Aitken basin, one of the oldest and deepest impact basins in the Solar System. Over two days, the lander used a drill and a robotic scoop to collect about two kilograms of lunar soil and rock, and also set up a Chinese flag made from basalt, the first one unfurled on the far side. The ascender took off from the surface on June 3, and docked with the orbiter in lunar orbit, which transferred the sample into a re-entry capsule, and it returned to Earth, landing in Inner Mongolia on June 25, 2024, with 1,935 grams of material. The mission carried instruments from France, Italy, Sweden and the European Space Agency, and a small Pakistani satellite, ICUBE-Q, was released into lunar orbit, which is an example of international cooperation. The far-side samples have already given new information. Studies have shown that the basalts are about 2.8 billion years old, and the results indicate that the lunar mantle on the far side has less water than the near side, adding to our understanding of why the two sides of the Moon are so different."
  },
  {
    id: 73,
    slug: "europa-clipper",
    title: "Europa Clipper",
    agency: "NASA",
    date: "October 14, 2024",
    destination: "Jupiter and Europa",
    status: "In transit",
    shortDescription: "NASA's mission to investigate whether Jupiter's icy moon Europa could be habitable.",
    image: "/images/europa-clipper.jpg",
    description:
      "Europa Clipper is NASA's flagship mission to explore Europa, a moon of Jupiter that is believed to have a vast, salty ocean beneath its icy shell, containing about twice as much water as all of Earth's oceans, and which is considered one of the most promising places in the Solar System to look for life. The spacecraft, the largest ever built by NASA for a planetary mission, is about the size of a basketball court with its solar arrays extended, and was launched on October 14, 2024, by a SpaceX Falcon Heavy rocket from Kennedy Space Center. Because of the weak sunlight at Jupiter, it carries huge solar arrays of about 100 square metres, and since the rocket was not powerful enough to send it directly to Jupiter, it uses gravity assists, from Mars in March 2025 and the Earth in December 2026, to build up speed. It will arrive at the Jupiter system in April 2030 and will enter orbit around Jupiter, performing about 49 close flybys of Europa, passing as low as 25 kilometres above the surface, rather than orbiting Europa itself in order to limit the damaging effect of Jupiter's intense radiation. The nine instruments include cameras and spectrometers to map the surface and its composition, an ice-penetrating radar called REASON to measure the thickness of the ice and look for water pockets, a magnetometer to confirm and measure the ocean, a gravity experiment and instruments that can sample the dust and gas in possible plumes, looking for organic compounds. Europa Clipper will not directly search for life but will determine whether the moon has conditions suitable for life. It is also carrying a plate engraved with a poem and the names of people from around the world."
  },
  {
    id: 74,
    slug: "blue-ghost-mission-1",
    title: "Blue Ghost Mission 1",
    agency: "Firefly Aerospace / NASA CLPS",
    date: "January 15, 2025",
    destination: "Moon",
    status: "Successful",
    shortDescription: "The first fully successful commercial lunar landing, which operated on the Moon for a full lunar day.",
    image: "/images/blue-ghost-mission-1.jpg",
    description:
      "Blue Ghost Mission 1 was the first lunar lander mission of Firefly Aerospace, of Cedar Park, Texas, and the first fully successful commercial soft landing on the Moon, flown as part of NASA's Commercial Lunar Payload Services programme. The Blue Ghost lander was launched on January 15, 2025, by a SpaceX Falcon 9 rocket, together with the Japanese ispace's Resilience lander, and it spent about 45 days travelling in Earth orbit and lunar orbit before landing. On March 2, 2025, it touched down upright and stable in Mare Crisium, a large basaltic plain on the Moon's near side, near a volcanic feature called Mons Latreille. The lander carried ten NASA science and technology payloads, which included a drill and sensors to measure the temperature and heat flow below the surface, a device to study how lunar dust sticks to surfaces, a test of a new navigation technique that uses signals from GPS and Galileo satellites in a way that had not been done at the Moon, an X-ray imager to study the Earth's magnetosphere and radiation-tolerant computers. It also gave scientists a very rare view of the lunar environment, as it captured the glow of lunar dust at sunset, the horizon glow, and images of a total solar eclipse as seen from the Moon, with the Earth passing in front of the Sun, and a total lunar eclipse in March 2025. The lander worked for a full lunar day of about 14 Earth days, and a bit more, for a short period after sunset. The mission is considered an important milestone for the commercial lunar industry and for NASA's Artemis plans."
  }
];

export default spaceMissions;