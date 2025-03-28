import React from 'react';

import FileDown from 'lucide-react/dist/esm/icons/file-down';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin';
import GitHub from 'lucide-react/dist/esm/icons/github';
import Mail from 'lucide-react/dist/esm/icons/mail';
import Code from 'lucide-react/dist/esm/icons/code';
import Terminal from 'lucide-react/dist/esm/icons/terminal';
import Cloud from 'lucide-react/dist/esm/icons/cloud';

const Portfolio = () => {
  // Skills categorized
  const skills = {
    'Programming Languages': [
      { name: 'Python', icon: '/path/to/python-icon.png' },
      { name: 'JavaScript', icon: '/path/to/javascript-icon.png' },
      { name: 'Java', icon: '/path/to/java-icon.png' },
      { name: 'C', icon: '/path/to/c-icon.png' },
      { name: 'SQL', icon: '/path/to/sql-icon.png' },
      { name: 'PHP', icon: '/path/to/php-icon.png' },
      { name: 'HTML/CSS', icon: '/path/to/html/css-icon.png' },
      { name: 'Bash', icon: '/path/to/bash-icon.png' }
    ],
    'Frameworks & Tools': [
      { name: 'React', icon: '/path/to/react-icon.png' },
      { name: 'FastAPI', icon: '/path/to/nodejs-icon.png' },
      { name: 'Flask', icon: '/path/to/django-icon.png' },
      { name: 'Git', icon: '/path/to/django-icon.png' },
      { name: 'Github', icon: '/path/to/django-icon.png' },
      { name: 'Postman', icon: '/path/to/django-icon.png' },
    ],
    'Cloud & DevOps': [
      { name: 'Azure', icon: '/path/to/aws-icon.png' },
      { name: 'Docker', icon: '/path/to/docker-icon.png' },
      { name: 'Power Automate', icon: '/path/to/kubernetes-icon.png' },
      { name: 'Sharepoint', icon: '/path/to/docker-icon.png' }
    ]
  };

  const projects = [
    {
      title: 'FoodBank Finder',
      description: 'Full-stack application with real-time collaboration features and advanced task tracking.',
      technologies: ['Python', 'Flask', 'HTML/CSS', 'Google API'],
      githubLink: 'https://github.com/JonathonSwart/FoodBank-Finder-Hackathon-Winner',
      image: `${import.meta.env.BASE_URL}FoodBank Finder.gif`
    },
    {
      title: 'QBNB',
      description: "Developed a functional 'Airbnb' replica following SCRUM methodology to ensure a high quality and error-free performance.",
      technologies: ['Python', 'Flask', 'SQLAlchemy', 'Selenium', 'HTML/CSS', 'Docker'],
      githubLink: 'https://github.com/JonathonSwart/CISC-327-Group-Project',
      image: `${import.meta.env.BASE_URL}qbnb.png`
    }
  ];

  const experiences = [
    {
      company: 'Ericsson',
      position: 'Automation Scripting Co-op',
      duration: 'September 2023 - August 2024',
      highlights: [
        'Enhanced an Automated Reporting System: Leveraged Power BI, Power Automate, OpenPyXL, Pandas, and Azure to build and enhance reporting features.',
        'Utilized Postman, Python, and Sharepoint to test and resolve backend issues in the reporting system, improving system performance and accuracy.',
        'Collaborated closely with end-users to define and implement new functionalities.',
        'Enhanced test cases to improve the response time of the system by 85%.',
        'Developed a Web Application: Engineered a web app using FastAPI, JavaScript and websockets for seamless interaction with a Dockerized PostgreSQL database.',
        'Integrated a secure, cookie-based system for user information storage and retrieval, ensuring a streamlined and protected user experience.'
      ]
    },
    {
      company: 'Cognition+',
      position: 'Software Developer',
      duration: 'May 2022 - August 2022',
      highlights: [
        'Developed and enhanced automated systems that provide clients with accurate insurance policies and premiums with 98% accuracy.',
        "Engineered programs with the company's proprietary language to interface with a variety of file types for backend automated systems to access with 100% accuracy and utilize for computation.",
        'Quantified and verified a high level of quality by employing a test driven development cycle.'
      ]
    }
  ];

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-24 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-2/3">
            <h1 className="text-5xl font-bold mb-4">I'm Jonathon Swart, a Software Developer</h1>
            <p className="text-xl mb-6">
            Hi there! I'm, a software developer who turns caffeine into code and ideas 
            into reality. When I'm not debugging, you'll probably find me playing 
            Pokémon Go, experimenting with new recipes, or getting way too excited about 
            website ideas.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href={`${import.meta.env.BASE_URL}Resume.pdf`} target="_blank" className="bg-white text-blue-600 px-6 py-3 rounded-full flex items-center hover:bg-blue-100 transition">
                <FileDown className="mr-2" /> View Resume
              </a>
              <div className="flex space-x-4 items-center">
                <a href="https://www.linkedin.com/in/jonathon-swart/" target="_blank" className="hover:text-blue-200"><Linkedin size={28} /></a>
                <a href="https://github.com/JonathonSwart" target="_blank" className="hover:text-blue-200"><GitHub size={28} /></a>
                <a href="mailto:jonathonswart02@gmail.com" className="hover:text-blue-200"><Mail size={28} /></a>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0">
            <img 
              src="/api/placeholder/400/400" 
              alt="Profile" 
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="container mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-700 mb-4">
            I'm a passionate software developer with a strong background in backend technologies 
            and cloud computing. With a degree in Computer Science and hands-on experience 
            in developing scalable solutions, I thrive on solving complex technical challenges.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Quick Skills Snapshot:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Backend & Cloud Development</li>
              <li>Automation & Data Processing</li>
              <li>Software Architecture & Optimization</li>
              <li>Full-Stack & DevOps Integration</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category} className="bg-white shadow-md rounded-lg p-5">
              <h3 className="font-bold mb-4 flex items-center">
                {category === 'Programming Languages' && <Code className="mr-2" />}
                {category === 'Frameworks & Tools' && <Terminal className="mr-2" />}
                {category === 'Cloud & DevOps' && <Cloud className="mr-2" />}
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center"
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-100 py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div 
                key={project.title} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.githubLink} 
                      target="_blank"
                      className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp) => (
            <div 
              key={exp.company} 
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">{exp.company}</h3>
                <span className="text-gray-600">{exp.duration}</span>
              </div>
              <h4 className="text-xl text-gray-700 mb-3">{exp.position}</h4>
              <div className="text-left">
              <ul className="list-disc pl-5 text-gray-600">
                {exp.highlights.map((highlight) => (
                  <li key={highlight} className="leading-relaxed">{highlight}</li>
                ))}
              </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-blue-600 text-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl mb-8">
            Interested in collaborating or have a project in mind? 
            Feel free to reach out via email or connect on social media.
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:jonathonswart02@gmail.com" 
              className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-blue-100 transition flex items-center"
            >
              <Mail className="mr-2" /> Email Me
            </a>
            <a 
              href="https://www.linkedin.com/in/jonathon-swart/" 
              target="_blank"
              className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-blue-100 transition flex items-center"
            >
              <Linkedin className="mr-2" /> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;