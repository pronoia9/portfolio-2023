import { hi, logo, bananarama, dallelyse, donutdelights, niftynoggin, organizedbliss, punymath, stellarcountdown, teetailor, westsum, donut, donutVid, road, ancientRuins, cloudStation, } from '../assets';

export const sidebarData = {
  logo: logo,
  links: [
    { title: 'Home', link: '#' },
    { title: 'Skills', link: '#skills' },
    { title: 'Works', link: '#works' },
    { title: 'Resume', link: '#resume' },
    { title: 'Contact', link: '#contact' },
  ],
};

export const socialsData = [
  { title: 'GitHub', link: 'https://github.com/pronoia9' },
  // { title: 'Facebook', link: 'https://www.facebook.com/victoriouswaffles' },
  { title: 'LinkedIn', link: 'https://www.linkedin.com/in/jayansin/' },
  { title: 'Discord', link: null, tooltip: 'pronoia9' },
];

export const sectionsData = {
  hero: { title: null, subtitle: null, background: 'Web Developer' },
  services: { title: 'What I Do', subtitle: 'My Services', background: 'Services' },
  skills: { title: 'Professional Skills', subtitle: 'My Talent', background: 'Skills' },
  works: { title: 'Portfolio', subtitle: 'My Cases', background: 'Portfolio' },
  experience: { title: 'Resume', subtitle: 'My Story', background: 'History' },
  contact: { title: 'Contact Me', subtitle: `Let's Talk About Ideas`, background: 'Contact Me' },
};

export const heroData = {
  name: 'Jay Ansin',
  occupation: 'Web Developer',
  introductions: [
    'Weaving pixels, lines, and a sprinkle of web magic to create jaw-dropping digital wonders.',
    "Turning caffeine-fueled ideas into mind-bending web experiences that leave users asking, 'How did they do that?'",
    "Bending the laws of web development like Neo bending spoons in 'The Matrix', but with more stylish CSS.",
    'Crafting web experiences so delightful, they make unicorns jealous.',
    "Mixing equal parts of coding finesse, design wizardry, and dad jokes for a web experience that's unforgettable and pun-tastic.",
    'Bringing web development prowess and a sense of humor that can make even JavaScript smile (almost).',
    'Building web applications with more flair than a magician pulling rabbits out of hats (although, ours are virtual rabbits).',
    'Infusing web development with a touch of whimsy, a dash of quirkiness, and just a hint of irreverence.',
    "Creating web experiences that are so addictive, users will keep refreshing the page hoping for more surprises (we don't recommend it, though).",
    'Unleashing a web development superpower: the ability to turn coffee into code, errors into laughter, and ideas into pixel-perfect reality.',
  ],
  backgroundTitle: 'Web Developer',
  resumeLink: 'https://www.dropbox.com/s/wkpywyn442sbbze/2021.04.16--03.32.57AM.pdf?dl=0',
  image: hi,
  badges: [
    { total: 3, plus: true, title: 'Years of', context: 'Experience' },
    { total: 85, title: 'Completed', context: 'Projects' },
  ],
};

export const servicesData = [
  {
    title: 'Captivating Web Design',
    subtitle: 'Web Development',
    description: 'Crafting visually stunning and user-friendly web designs that capture attention and deliver exceptional user experiences.',
    link: '#works'
  },
  {
    title: 'Interactive 3D Web Experiences',
    subtitle: 'Web Development',
    description: 'Creating immersive and interactive 3D web applications that engage users with captivating visuals and seamless interactions.',
    link: '#works'
  },
  {
    title: 'Backend Development Solutions',
    subtitle: 'Web Development',
    description: 'Building robust and scalable backend solutions that power web applications, ensuring efficient data handling and seamless functionality.',
    link: '#works'
  },
  {
    title: 'Database Management',
    category: 'Web Development',
    description: 'Expertise in working with databases like MongoDB and PostgreSQL, enabling efficient storage, retrieval, and manipulation of data in web applications.',
    link: '#works'
  },
  {
    title: 'Blender 3D Modeling',
    category: 'Digital Artistry',
    description: 'Utilizing Blender to create intricate and visually stunning 3D models, bringing imagination to life with precision and artistry.',
    link: '#works'
  },
];

export const skillsData = [
  {
    title: 'HTML',
    description: `A weaver of the web's foundational tapestry, crafting structured elegance that dances across the digital realm, guiding users on a visual journey of enchantment.`,
    level: 85,
  },
  {
    title: 'CSS',
    description: `A virtuoso of style and form, fashioning the visual symphony that adorns the web's canvas, harmonizing colors, layouts, and animations to create an immersive experience.`,
    level: 70,
  },
  {
    title: 'JavaScript',
    description: `An alchemist of interactivity, infusing life into web applications with spells of dynamic functionality, casting spells that engage and captivate users at every turn.`,
    level: 90,
  },
  {
    title: 'React',
    description: `A maestro of user interfaces, conducting the orchestration of reusable components and state management, composing harmonies that resonate with seamless efficiency.`,
    level: 85,
  },
  {
    title: 'Three.js',
    description: `A magician of the third dimension, conjuring captivating realms of 3D wonder, where pixels transcend their flat nature and come alive in a dance of depth and immersion.`,
    level: 70,
  },
  {
    title: 'React Three Fiber',
    description: `A sorcerer of integration, seamlessly merging the realms of React and Three.js, casting spells that empower the creation of interactive and enchanting 3D web applications.`,
    level: 70,
  },
  {
    title: 'Node.js',
    description: `A guardian of the server-side, standing steadfast as a sentinel, wielding the power of Node.js to build scalable and robust backends, ensuring a steady flow of mystical energy to power web applications.`,
    level: 60,
  },
  {
    title: 'MongoDB, PostgreSQL',
    description: `Keepers of digital knowledge, guardians of data's secrets, enabling the storage, retrieval, and manipulation of information that shapes the destiny of web applications.`,
    level: 60,
  },
  {
    title: 'Blender',
    description: `A visionary artist, wielding the brush of creativity to mold digital clay into breathtaking 3D masterpieces, breathing life into virtual sculptures that transcend imagination.`,
    level: 60,
  },
  {
    title: 'Photoshop',
    description: `A brush-wielding virtuoso, harnessing the power of pixels to shape digital realms, seamlessly blending artistry and technical prowess to create visually stunning masterpieces that captivate the senses.`,
    level: 20,
  },
  {
    title: 'Git',
    description: `A sage of version control, guarding against chaos and confusion, allowing teams to collaborate in a synchronized dance, preserving the integrity of projects with each graceful commit.`,
    level: 60,
  },
];

export const projectsData = {
  filters: [
    { title: 'all', filter: '' },
    { title: 'react', filter: 'react' },
    { title: '3d', filter: '3d' },
    { title: 'frontend', filter: 'frontend' },
    { title: 'fullstack', filter: 'fullstack' },
  ],
  projects: [
    {
      id: 'ugAU0ari79',
      title: 'Donut Delights',
      subtitle: 'Development, 3D',
      description: `Embark on a mesmerizing journey through a whimsical realm of animated donuts that come to life with vibrant colors, delightful flavors, and gravity-defying acrobatics. Let the magic unfold as you explore this app's delightful donut universe, where imagination and sweetness collide in a scrumptious symphony of joy and wonder.`,
      link: '/works',
      links: { repo: 'https://github.com/pronoia9/donut-delights', live: 'https://donut-delights.vercel.app' },
      image: donutdelights,
      year: 2023,
      date: new Date('June 6, 2023'),
      categories: ['React', '3D', 'Frontend'],
      tags: [ 'React', 'Javascript', 'HTML', 'CSS', 'Vitejs', 'Styled Components', '3D', 'Blender', 'Threejs', 'React Three Fiber', 'React Three Drei', 'React Three Postprocessing', 'Frontend', 'Shaders', ],
      info: [],
    },
    {
      title: 'Bananarama',
      id: 'ndAD7gUinD',
      subtitle: 'Development, 3D',
      description: `Transport yourself to a tropical oasis with Bananarama, an award-winning landing page that pays homage to the delightful world of bananas. Immerse yourself in a whimsical experience filled with captivating bananas floating in a vibrant backdrop. Let the playful charm of Bananarama bring a smile to your face and a touch of tropical paradise to your screen.`,
      link: '/works',
      links: { repo: 'https://github.com/pronoia9/bananarama', live: 'https://bananarama.vercel.app/' },
      image: bananarama,
      year: 2023,
      date: new Date('June 4, 2023'),
      categories: ['React', '3D', 'Frontend'],
      tags: [ 'React', 'Javascript', 'HTML', 'CSS', 'Vitejs', 'Styled Components', '3D', 'Blender', 'Threejs', 'React Three Fiber', 'React Three Drei', 'React Three Postprocessing', 'Frontend', ],
      info: [],
    },
    {
      id: 'Fwzoyy6FYR',
      title: 'DALL-Elyse',
      subtitle: 'Development, Fullstack',
      description: `Discover the extraordinary capabilities of DALL-E with DALL-Elyse, a full-stack MERN AI Image Generation App. Witness the fusion of art and technology as this showcase gallery presents awe-inspiring images generated by DALL-E. Explore the boundless possibilities of AI creativity.`,
      link: '/works',
      links: { repo: 'https://github.com/pronoia9/dall-elyse', live: 'https://dall-elyse.vercel.app/' },
      image: dallelyse,
      year: 2023,
      date: new Date('April 17, 2023'),
      categories: ['React', 'Fullstack', '3D'],
      tags: ['React', 'HTML', 'Javascript', 'CSS', 'Vitejs', 'Styled Components', 'OpenAI', 'MERN Stack', 'Fullstack', 'Backend', 'AI', 'Threejs', 'React Three Fiber', 'React Three Drei', 'Zustand', 'React Router Dom', 'Shaders', 'Photoswipe', 'Leva', 'Framer Motion', 'File Saver', 'GPT', 'Cors', 'Cloudinary', 'Dotenv', 'Expressjs', 'Nodemon', 'Mongoose', 'Nodejs'],
      info: [],
    },
    {
      id: 'cDKI2bhikl',
      title: 'Tee-Tailor',
      subtitle: 'Development, Fullstack, 3D',
      description: `Step into the realm of AI-powered product customization with Tee-Tailor. This dynamic 3D product website allows users to personalize their items with an innovative twist. Witness the magic as the latest AI technologies bring unique designs to life, enabling customers to tailor their products to perfection.`,
      link: '/works',
      links: { repo: 'https://github.com/pronoia9/tee-tailor', live: 'https://tee-tailor.vercel.app/' },
      image: teetailor,
      year: 2023,
      date: new Date('April 10, 2023'),
      categories: ['React', 'Fullstack', '3D'],
      tags: ['React', 'HTML', 'Javascript', 'CSS', 'GPT', 'OpenAI', 'Threejs', 'Tailwind', '3D', 'React Three Fiber', 'React Three Drei', 'Fullstack', 'Maath', 'React Color', 'Valtio', 'Vitejs', 'Cloudinary', 'Cors', 'Dotenv', 'Expressjs', 'Mongoose', 'Mongodb', 'MERN Stack', 'Nodemon', 'Nodejs', 'AI'],
      info: [],
    },
    {
      id: 'l8eP5m0yme',
      title: 'Puny Math',
      subtitle: 'Developer, Design',
      description: `Unleash your mathematical prowess with Puny Math, a whimsical calculator app that brings a playful twist to number crunching. From simple calculations to complex equations, this app adds a dash of humor and charm to your mathematical adventures. Crunch numbers with a smile and let Puny Math brighten your day.`,
      link: '/works',
      links: { repo: 'https://github.com/pronoia9/puny-math', live: 'https://puny-math.vercel.app/' },
      image: punymath,
      year: 2023,
      date: new Date('June 12, 2023'),
      categories: ['React', 'Design', 'Frontend Mentor'],
      tags: ['React', 'Vitejs', 'HTML', 'CSS', 'Styled Components', 'Frontend Mentor', 'Styled Components', 'React Tooltip', 'Zustand', 'Frontend'],
      info: [],
    },
    {
      id: '2MEdjsJRsp',
      title: 'Stellar Countdown',
      subtitle: 'Developer, Design',
      description: `Embark on a captivating journey with Stellar Countdown, a frontend mentor challenge that showcases a mesmerizing countdown timer. Immerse yourself in the elegant design, featuring flip clock elements that add a touch of nostalgia and anticipation. Stay captivated as time gracefully ticks away.`,
      link: '/works',
      links: { repo: 'https://github.com/pronoia9/stellar-countdown', live: 'http://stellar-countdown.vercel.app/' },
      image: stellarcountdown,
      year: 2023,
      date: new Date('July 8, 2022'),
      categories: ['React', 'Design', 'Frontend Mentor'],
      tags: ['React', 'Vitejs', 'HTML', 'CSS', 'Javascript', 'Frontend', 'Styled Components', 'Frontend Mentor'],
      info: [],
    },
    {
      id: 'kFlQKDQ0Dn',
      title: 'Organized Bliss',
      subtitle: 'Developer, Design',
      description: `Experience blissful productivity with Organized Bliss, a feature-rich todo app designed to keep your tasks in perfect harmony. Stay organized, set priorities, and track your progress effortlessly. Achieve a state of tranquil productivity with this intuitive and elegant application.`,
      link: '/works',
      links: { repo: 'https://github.com/pronoia9/organized-bliss', live: 'https://organized-bliss.vercel.app' },
      image: organizedbliss,
      year: 2023,
      date: new Date('July 1, 2022'),
      categories: ['React', 'Design', 'Frontend Mentor'],
      tags: ['React', 'Vitejs', 'HTML', 'CSS', 'Javascript', 'Frontend', 'Styled Components', 'Frontend Mentor'],
      info: [],
    },
    {
      id: 'nvnlXUQYeV',
      title: 'Nifty Noggin',
      subtitle: 'Developer, Design',
      description: `Unlock a treasure trove of wisdom with Nifty Noggin, a frontend mentor challenge that draws from the Advice Slip API. Immerse yourself in a world of random quotes of advice, where each click unveils a nugget of wisdom to inspire and guide you on your journey.`,
      link: '/works',
      links: { repo: 'https://github.com/pronoia9/nifty-noggin', live: 'https://nifty-noggin.vercel.app/' },
      image: niftynoggin,
      year: 2023,
      date: new Date('June 23, 2022'),
      categories: ['React', 'Design', 'Frontend Mentor'],
      tags: ['React', 'Vitejs', 'HTML', 'CSS', 'Javascript', 'Frontend', 'Styled Components', 'Frontend Mentor', 'API', 'Axios'],
      info: [],
    },
    {
      id: 'hqQykrd1zz',
      title: 'Westsum',
      subtitle: 'Developer, Design',
      description: `Indulge in the brilliance of Kanye West, showcasing the wisdom and wit of the legendary artist. Inspired by the innovative concept of Jeffsum, Westsum utilizes a REST API, and delivers a collection of random Kanye West quotes, inviting you to explore the profound thoughts and captivating words of this iconic figure.`,
      link: '/works',
      links: { repo: 'https://github.com/pronoia9/westsum', live: 'https://westsum.vercel.app' },
      image: westsum,
      year: 2023,
      date: new Date('May 10, 2022'),
      categories: ['React', 'Design', 'API'],
      tags: ['React', 'Vitejs', 'HTML', 'CSS', 'Javascript', 'Frontend', 'Styled Components', 'API', 'Axios', 'GSAP'],
      info: [],
    },
    {
      id: 'UjX7wDmwGm',
      title: 'Sprinkle Spectacular', 
      subtitle: '3D Modelling',
      description: `Witness the mesmerizing journey of a donut with sprinkles as it gracefully soars through the air. This animated masterpiece combines photorealism and a touch of whimsy, immersing you in a sweet and delightful adventure.`, 
      link: '/works',
      image: donut,
      video: donutVid,
      year: 2023,
      date: new Date('May 9, 2023'),
      categories: ['3D', 'Blender'], 
      tags: ['3D', 'Blender'], 
      info: [],
    },
    {
      id: 'EKrNnJbOUp',
      title: 'Serene Vistas', 
      subtitle: '3D Modelling', 
      description: `Immerse yourself in the tranquility of Serene Vistas, a captivating landscape that brings nature to life. This isometric diorama showcases lush trees, majestic rocks, and a serene lake, all rendered in delightful low poly style. Lose yourself in the beauty and serenity of this picturesque creation.`,
      link: '/works',
      image: road,
      year: 2023,
      date: new Date('May 3, 2023'),
      categories: ['3D', 'Blender'], 
      tags: ['3D', 'Blender'], 
      info: [],
    },
    {
      id: 'ZIbglpS8sO',
      title: 'Nocturnal Enigma', 
      subtitle: '3D Modelling', 
      description: `Step into a realm of mystery and wonder with Nocturnal Enigma. Behold an ancient ruin bathed in the captivating glow of volumetric lighting. This cubo-futuristic creation blends voxel art and low poly aesthetics, inviting you to explore a mesmerizing world shrouded in intrigue.`,
      link: '/works',
      image: ancientRuins, 
      year: 2023,
      date: new Date('May 4, 2023'),
      categories: ['3D', 'Blender'], 
      tags: ['3D', 'Blender'], 
      info: [],
    },
    {
      id: 'K6lI4mp9DP',
      title: 'Neon Retroverse', 
      subtitle: '3D Modelling', 
      description: `Embark on a journey to a neon-lit retrofuturistic world with Neon Retroverse. This isometric masterpiece features a dazzling station adorned with vibrant neon lights, evoking a sense of nostalgia and intrigue. Let the mesmerizing volumetric lighting guide you through this whimsical retrofuturistic realm.`,
      link: '/works',
      image: cloudStation, 
      year: 2023, 
      date: new Date('May 10, 2023'),
      categories: ['3D', 'Blender'], 
      tags: ['3D', 'Blender'], 
      info: [],
    },
    // { title: '', subtitle: '', description: '', links: { repo: '', live: '' }, image: '', year: '', date: new Date(''), categories: [], tags: [], info: [], },
  ].sort((a, b) => b.date - a.date),
};

export const histroyData = {
  education: [
    {
      title: 'Seneca College',
      subtitle: 'Computer Programming and Analysis',
      dates: [new Date('May 2016'), new Date('May 2019')],
      description: `Embarking on a thrilling three-year adventure at Seneca College, I delved into the captivating realm of Computer Programming and Analysis. Armed with programming languages, design wizardry, and system sorcery, I honed my skills in crafting dynamic web applications across diverse operating systems. Alongside, I ventured into the realm of advanced option courses, unlocking hidden levels of technical prowess.`,
    },
  ],
  courses: [
    {
      title: 'Complete React Developer with Redux, Hooks, GraphQL',
      subtitle: 'by Andrei Neagoie, Senior Software Developer',
      dates: [new Date('June 7, 2022')],
      description: `Immerse yourself in the mystical realm of React.js mastery with the guidance of the revered React.js sages. Together, we unravel the secrets of Redux, dance with React Hooks, wield GraphQL's power, and summon the mighty Context API. Brace yourself as we embark on an epic journey, conquering Firebase, Redux-Saga, Stripe, and more, crafting enchanting and powerful web applications from scratch.`,
    },
    {
      title: 'The Complete Web Developer',
      subtitle: 'by Andrei Neagoie, Senior Software Developer',
      dates: [new Date('April 29, 2022'), new Date('June 6, 2022')],
      description: `Behold, an extraordinary opportunity to walk in the footsteps of a Silicon Valley sage and a Toronto tech titan. This immersive course takes you on a whimsical adventure, unraveling the secrets of web development's enchanted arts. Unleash your creativity, master the crafts of HTML, CSS, and JavaScript, and ascend to new heights in the digital realm.`,
    },
    {
      title: 'Web Development Bootcamp',
      subtitle: 'by Dr. Angela Yu, Developer and Lead Instructor',
      dates: [new Date('February 16, 2021'), new Date('March 10, 2021')],
      description: `Step into the mystical realm of web development under the guidance of Dr. Angela Yu, the lead enchantress at the App Brewery. Brace yourself for a whirlwind of incantations and coding charms as you journey through the realms of HTML, CSS, and JavaScript. Join a league of extraordinary developers and unlock the secrets to conjuring captivating web experiences.`,
    },
    {
      title: 'ThreeJS Journey',
      subtitle: 'by Bruno Simon',
      dates: [new Date('August 16, 2022'), new Date('May 20, 2023')],
      description: `Unleashed the magic of WebGL and became a 3D web virtuoso. Mastered Three.js sorcery, crafting captivating websites with style. From mind-bending particles to physics interactions, advanced techniques became second nature. Even delved into the realm of Blender sorcery, conjuring mesmerizing 3D models. A certified web-weaver of visual wonders!`,
    },
    {
      title: 'Become A 3D Illustrator',
      subtitle: 'by Polygon Runway',
      dates: [new Date('May 3, 2023'), 'Ongoing'],
      description: `Became a skilled 3D modeler through an immersive Blender course. Mastered controls, geometry modeling, lighting, and rendering. Explored advanced tools, texture painting, and ambient lighting for captivating effects. Created diverse projects, from low-poly to isometric rooms. Proficient in realistic material rendering and smooth modeling techniques. Ready to bring innovative concepts to life.`,
    },
    {
      title: 'Blender Donut Series',
      subtitle: 'by Blender Guru',
      dates: [new Date('May 5, 2023'), new Date('May 9, 2023')],
      description: `Blender Donut Tutorial series by Blender Guru: Mastered the art of crafting tantalizing digital donuts, honing skills in modeling, texturing, lighting, and rendering under the guidance of Blender Guru's wit and charm. Transformed into a skilled donut virtuoso, capable of creating visually captivating treats.`,
    },
  ].sort((a, b) => b?.dates[0] - a?.dates[0]),
  activities: [
    {
      title: 'Destination Imagination',
      subtitle: 'Participant',
      dates: [new Date('April 2013')],
      description: `Embarked on a daring quest with the illustrious Destination Imagination crew, where creativity and problem-solving intertwined in magical harmony. Our fellowship of imaginative minds tackled challenges, bending reality to unravel ingenious solutions. Through the alchemy of teamwork and innovation, we honed our skills as future visionaries and master problem solvers.`,
    },
    {
      title: 'Caretakers of the Environment',
      subtitle: 'Volunteer',
      dates: [new Date('August 2011')],
      description: `Ventured into the realm of environmental guardianship, donning the cape of a Caretaker of the Environment. In this noble quest, I joined forces with a league of eco-warriors, embracing the responsibility of protecting our precious planet. Together, we shaped awareness, wielded education, and championed sustainable development, leaving a trail of green footsteps in our wake.`,
    },
  ].sort((a, b) => b?.dates[0] - a?.dates[0]),
};