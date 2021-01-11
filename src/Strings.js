const Strings = {
    name: 'Scott Malley',
    About: {
        title: 'About',
        position: 'Developer, Researcher, Project Manager',
        email: 'scott.r.malley@gmail.com',
        phone: '+32 488 64 14 92',
        address: 'Gerrit Rietveldsingel 387, Diemen, The Netherlands',
        linkedIn: 'https://www.linkedin.com/in/scott-malley/',
        gitHub: 'https://github.com/scottrmalley',
        skype: 'skype:scott.malley1?chat',
        tagline: 'Hello, I\'m Scott, a research and development engineer based in Amsterdam. I have experience in mathematics, physics and computation, with skills as both a project manager and full stack developer.',
        skills: ['NodeJS', 'React', 'ReactNative', 'Python', 'Java', 'SpringBoot', 'Docker', 'Git', 'TensorFlow']
    },
    Education: {
        title: 'Education',
        awards: {
            title: 'Awards',
            cards: [
                {
                    type: 'Award',
                    name: 'Samuel F.B. Morse Medal for Excellence in Physics',
                    organization: 'New York University',
                    year: 2016
                },
                {
                    type: 'Scholarship',
                    name: 'George Granger Brown Scholarship in Physics',
                    organization: 'New York University',
                    year: 2015
                },
                {
                    type: 'Sigma Pi Sigma',
                    name: 'Physics Honors Society',
                    organization: 'New York University',
                    year: 2015
                }
            ]
        },
        schools: [
            {
                name: 'Stanford University',
                startDate: 'Sep. 2017',
                endDate: 'Apr. 2019',
                degree: 'Master of Science - Physics',
                location: 'Stanford, California',
                bullets: [
                    'Overall GPA: 3.9/4.0'
                ]
            },
            {
                name: 'New York University',
                startDate: 'Aug. 2015',
                endDate: 'May 2016',
                degree: 'Bachelor of Science - Mathematics, Physics',
                location: 'New York, New York',
                bullets: [
                    'Overall GPA: 3.97/4.0',
                    'Double Major',
                    'Honors: summa cum laude'
                ]
            },
            {
                name: 'United World College',
                startDate: 'Aug. 2010',
                endDate: 'May 2012',
                location: 'Montezuma, New Mexico',
                degree: 'International Baccalaureate Diploma',
            }
        ]
    },
    Experience: {
        title: 'Experience',
        experienceCards: [
            {
                organization: 'Sphereon B.V.',
                location: 'Maarssen, The Netherlands',
                startDate: 'Apr. 2019',
                endDate: 'Present',
                position: 'Research and Development Engineer, Digital Identity Specialist',
                bullets: [
                    'Involved in a wide range of blockchain and digital identity related projects, including DHS-SVIP and eSSIF-Labs projects.',
                    'Together with Factom Inc, and Off-Blocks, responsible for planning, design, coordination and implementation for a new blockchain-' +
                    'based supply chain solution for the US Department of Homeland Security for the tracing of raw material imports.'
                ]
            },
            {
                organization: 'Schnitzer Lab',
                location: 'Stanford, California',
                startDate: 'Apr. 2018',
                endDate: 'Dec. 2018',
                position: 'Grad Student Researcher - Advisor: Mark Schnitzer',
                bullets: [
                    'Developed computational simulations and reconstruction algorithms for nano-scale tomography of mice neurons.',
                    'Assembled, implanted and recorded data from fiber optic implants for high-speed measurement of neuronal voltage activity in mice.'
                ]
            },
            {
                organization: 'Molecular Imaging Instrumentation Lab',
                location: 'Stanford, California',
                startDate: 'Jan. 2018',
                endDate: 'Apr. 2018',
                position: 'Rotation Student - Advisor: Craig Levin',
                bullets: [
                    'Developed a technique to use Monte-Carlo simulation data to correct for scattered photon error in PET scans.',
                    'Increased contrast recovery in simulated scans by nearly 80%.'
                ]
            },
            {
                organization: 'Hanson Experimental Physics Lab',
                location: 'Stanford, California',
                position: 'Rotation Student - Advisor: Daniel Palanker',
                startDate: 'Sep. 2017',
                endDate: 'Dec. 2017',
                bullets: [
                    'Constructed setup to measure input impedance for electrodes used in electro-neural interfaces.',
                    'Designed and built interface to individually address spiking HEK cells on micro-electrode arrays.'
                ]
            },
            {
                organization: 'Center for Soft Matter Research',
                subOrganization: 'New York University',
                location: 'New York, New York',
                startDate: 'Aug. 2014',
                endDate: 'May. 2017',
                position: 'Junior Research Scientist - Advisor: Marc Gershow',
                bullets: [
                    'Led a project to design and construct a speckle pattern interferometer, intended to quantize gas flows through wavelength-tuned' +
                    'phase shifting for drosophila experiments.',
                    'Designed and implemented computational pipeline for processing laser-speckle images at video frame rates.'
                ]
            },
        ]
    },
    Projects: {
        title: 'Projects',
        cards: [
            {
                name: 'React Résumé',
                description: 'This resume project, made in ReactJS, and standardized as a template.',
                link: 'https://github.com/ScottRMalley/react-resume',
                image: '/proj-1.png'
            },
            {
                name: 'Chaotic Mixing Simulation',
                description: 'A simulation of the Aref blinking vortex flow written in Python.',
                link: 'https://github.com/ScottRMalley/blinking-vortex-sim',
                image: '/proj-0.png'
            }
        ]
    }
};

export default Strings;
