import { useState } from 'react';
import AlumniCard from '../components/AlumniCard';
import SceneCanvas from "../three/SceneCanvas";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OrgCoords = [
  {
    name: "Saatvik Pandey",
    title: "Organizing Coordinator",
    image: "./Saatvik.jpg",
    linkedinUrl: "https://www.linkedin.com/in/saatvik-pandey-4a0919287/",
    email: "mailto:saatvik_2302gt02@iitp.ac.in"
  },
  {
    name: "Parth Ganjewar",
    title: "Organizing Coordinator",
    image: "./Parth.jpg",
    linkedinUrl: "https://www.linkedin.com/in/parth-ganjewar-9b2317298",
    email: "mailto:ganjewar_2301cb48@iitp.ac.in"
  }
];

const Heads = [
  {
    name: "Sujal Suryawanshi",
    title: "Web Development & Tech",
    image: "./Sujal.jpg",
    linkedinUrl: "https://linkedin.com/in/sujal-suryawanshi-898916290/",
    email: "mailto:sujal_2301ai26@iitp.ac.in"
  },
  {
    name: "Chaitanya Saagar",
    title: "Web Development & Tech",
    image: "./Chaitanya.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/chaitanya-saagar-476b562a2/",
    email: "mailto:chaitanya_2301cs77@iitp.ac.in"
  },
  {
    name: "Sasmit Shashwat",
    title: "Web Development & Tech",
    image: "./Sasmit.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sasmit-shashwat-b72622282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "mailto:sasmit_2301ai20@iitp.ac.in"
  },
  {
    name: "Aditya Mittal",
    title: "Events & Startup Relations",
    image: "./Mittal.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/adityamittalddn223/",
    email: "mailto:aditya_2301ph02@iitp.ac.in"
  },
  {
    name: "Tushar Garg",
    title: "Events & Startup Relations",
    image: "./Tushar.jpg",
    linkedinUrl: "https://www.linkedin.com/in/tushar-garg-784b9a27b",
    email: "mailto:tushar_2301ee61@iitp.ac.in"
  },
  {
    name: "Priyam Mishra",
    title: "Events & Startup Relations",
    image: "./Priyam.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/priyam-mishra-423413308",
    email: "mailto:priyam_2302vl11@iitp.ac.in"
  },
  {
    name: "Tejas Jadhav",
    title: "Events & Startup Relations",
    image: "./Tejas.jpg",
    linkedinUrl: "https://www.linkedin.com/in/tejas-jadhav-5a1b202a8",
    email: "mailto:tejas_2301cb64@iitp.ac.in"
  },
  {
    name: "Ipshita Gawande",
    title: "Sponsorship & Marketing",
    image: "./Ipshita.jpg",
    linkedinUrl: "https://www.linkedin.com/in/ipshita-gawande-a9a519298",
    email: "mailto:ipshita_2301cb17@iitp.ac.in"
  },
  {
    name: "Prajyot Khandade",
    title: "Sponsorship & Marketing",
    image: "./Prajyot.jpg",
    linkedinUrl: "https://www.linkedin.com/in/prajyot-khandade-091a94280",
    email: "mailto:prajyot_2301ct14@iitp.ac.in"
  },
  {
    name: "Ajay Kumar Saini",
    title: "Sponsorship & Marketing",
    image: "./Ajay.jpg",
    linkedinUrl: "https://www.linkedin.com/in/ajay-kumar-saini-44b99a284/",
    email: "mailto:ajay_2301mm03@iitp.ac.in"
  },
  {
    name: "Vansh Shrivastava",
    title: "Production and Design",
    image: "./Vansh.jpg",
    linkedinUrl: "https://linkedin.com/in/vansh-shrivastava-a07866290",
    email: "mailto:vansh_2301ec34@iitp.ac.in"
  },
  {
    name: "Yuvan Vanapalli",
    title: "Production and Design",
    image: "./Yuvan.jpg",
    linkedinUrl: "https://www.linkedin.com/in/yuvan-vanapalli-2912yv05",
    email: "mailto:yuvan_2301ee43@iitp.ac.in"
  },
  {
    name: "N Sameeksha",
    title: "Media & Public Relations",
    image: "./Sameeksha.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sameeksha-madhav-nagulwad-262776365",
    email: "mailto:sameeksha_2301ec23@iitp.ac.in"
  },
  {
    name: "Atharva Pawar",
    title: "Media & Public Relations",
    image: "./Atharva.jpg",
    linkedinUrl: "https://www.linkedin.com/in/atharva-pawar-a58b272b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "mailto:atharva_2301ct06@iitp.ac.in"
  },
  {
    name: "Riya Singh",
    title: "Media & Public Relations",
    image: "./Riya.jpg",
    linkedinUrl: "https://www.linkedin.com/in/riyasingh25",
    email: "mailto:riya_2301ph25@iitp.ac.in"
  },
];

const Managers = [
  {
    name: "Krish Goyal",
    title: "Web Development & Tech",
    image: "./Krish.jpg",
    linkedinUrl: "https://www.linkedin.com/in/krish-goyal-6a5362315",
    email: "mailto:krish_2401ec13@iitp.ac.in"
  },
  {
    name: "Prashant Raj",
    title: "Web Development & Tech",
    image: "./Prashant.jpg",
    linkedinUrl: "https://www.linkedin.com/in/prashant-raj-710845318",
    email: "mailto:prashant_2401cs04@iitp.ac.in"
  },
  {
    name: "Riddhi Rajani",
    title: "Web Development & Tech",
    image: "./Riddhi.jpg",
    linkedinUrl: "https://www.linkedin.com/in/riddhi-r-15a4b2248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    email: "mailto:riddhi_2401me75@iitp.ac.in"
  },
  {
    name: "Mohit Joshi",
    title: "Events & Startup Relations",
    image: "./Mohit.jpg",
    linkedinUrl: "https://www.linkedin.com/in/mohit-joshi-iitp/",
    email: "mailto:mohit_2401es08@iitp.ac.in"
  },
  {
    name: "Aditya Kailash Kuranjekar",
    title: "Events & Startup Relations",
    image: "./Aditya.jpg",
    linkedinUrl: "https://www.linkedin.com/in/aditya-kuranjekar-ba572130b/",
    email: "mailto:aditya_2403cs01@iitp.ac.in"
  },
  {
    name: "Mayur Rathi",
    title: "Events & Startup Relations",
    image: "./Mayur.jpg",
    linkedinUrl: "https://www.linkedin.com/in/mayur-prakash-rathi-a70a75310/",
    email: "mailto:mayur_2401ct01@iitp.ac.in"
  },
  {
    name: "Sahil",
    title: "Events & Startup Relations",
    image: "./Sahil.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sahil-72019a360/",
    email: "mailto:sahil_2401ee16@iitp.ac.in"
  },
  {
    name: "Parth Bhagwat",
    title: "Events & Startup Relations",
    image: "./Parth2.jpg",
    linkedinUrl: "https://www.linkedin.com/in/parth-bhagwat-928b3b354/",
    email: "mailto:bhagwat_2401ce31@iitp.ac.in"
  },
  {
    name: "Pratichi Maheshwari",
    title: "Events & Startup Relations",
    image: "./Pratichi.jpg",
    linkedinUrl: "https://www.linkedin.com/in/pratichi-maheshwari/",
    email: "mailto:pratichi_2401me07@iitp.ac.in"
  },
  {
    name: "Srijan Sharma",
    title: "Events & Startup Relations",
    image: "./Srijan.jpg",
    linkedinUrl: "https://www.linkedin.com/in/srijan-sharma-818232321/",
    email: "mailto:srijan_2401cb44@iitp.ac.in"
  },
  {
    name: "Sarthak Sharma",
    title: "Events & Startup Relations",
    image: "./Sarthak.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sarthak-sharma-91487631a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "mailto:sarthak_2401cb21@iitp.ac.in"
  },
  {
    name: "Uday Teja",
    title: "Sponsorship & Marketing",
    image: "./Uday.jpg",
    linkedinUrl: "https://www.linkedin.com/in/uday-teja-8a02b9329/",
    email: "mailto:kandregula_2403ct03@iitp.ac.in"
  },
  {
    name: "Tushar Kumar Singh",
    title: "Sponsorship & Marketing",
    image: "./Tushar2.jpg",
    // linkedinUrl: "",
    email: "mailto:tushar_2401es17@iitp.ac.in"
  },
  {
    name: "Abhishek Kumar",
    title: "Sponsorship & Marketing",
    image: "./Abhishek.jpg",
    linkedinUrl: "https://www.linkedin.com/in/abhishek-kumar-0b0720285/",
    email: "mailto:abhishek_2401cb06@iitp.ac.in"
  },
  {
    name: "Paarth Mandelia",
    title: "Sponsorship & Marketing",
    image: "./Paarth.jpg",
    linkedinUrl: "https://www.linkedin.com/in/paarth-mandelia-178236319/",
    email: "mailto:paarth_2401me01@iitp.ac.in"
  },
  {
    name: "Saksham Thakur",
    title: "Sponsorship & Marketing",
    image: "./Saksham.jpg",
    linkedinUrl: "https://www.linkedin.com/in/saksham-thakur-192826321/",
    email: "mailto:saksham_2401cb56@iitp.ac.in"
  },
  {
    name: "Ayush Yadav",
    title: "Sponsorship & Marketing",
    image: "./Ayush.png",
    linkedinUrl: "https://www.linkedin.com/in/ayushiitp/",
    email: "mailto:ayush_2401ai43@iitp.ac.in"
  },
  {
    name: "Shreya Yadav",
    title: "Sponsorship & Marketing",
    image: "./Shreya.jpg",
    // linkedinUrl: "",
    email: "mailto:shreya_2401ce14@iitp.ac.in"
  },
  {
    name: "Abhrajit Chowdhury",
    title: "Sponsorship & Marketing",
    image: "./Abhrajit.jpg",
    linkedinUrl: "https://www.linkedin.com/in/abhrajit-chowdhury-866bb0312/",
    email: "mailto:abhrajit_2401ai44@iitp.ac.in"
  },
  {
    name: "Krishna Teja",
    title: "Production and Design",
    image: "./Krishna.jpg",
    linkedinUrl: "https://www.linkedin.com/in/krishna-teja-0b293b346/",
    email: "mailto:krishna_2401ec29@iitp.ac.in"
  },
  {
    name: "Hasini NC",
    title: "Production and Design",
    image: "./Hasini.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/hasini-nallan-chakravarthula-872286335/",
    email: "mailto:nallan_2401ai22@iitp.ac.in"
  },
  {
    name: "Sandeep Sisodiya",
    title: "Production and Design",
    image: "./Sandeep.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sandeep-sisodiya-2401cb02",
    email: "mailto:sandeep_2401cb02@iitp.ac.in"
  },
  {
    name: "Anshika Singh",
    title: "Production and Design",
    image: "./Anshika.jpg",
    // linkedinUrl: "",
    email: "mailto:anshika_2401me16@iitp.ac.in"
  },
  {
    name: "Poojith Kolluri",
    title: "Media & Public Relations",
    image: "./Poojith.jpg",
    linkedinUrl: "https://www.linkedin.com/in/poojith-kolluri-iiteco/",
    email: "mailto:kolluri_2401es03@iitp.ac.in"
  },
  {
    name: "Devanarayanan J",
    title: "Media & Public Relations",
    image: "./Devanarayanan.jpg",
    linkedinUrl: "https://www.linkedin.com/in/devanarayanan-j-691014324/",
    email: "mailto:devanarayanan_2403mm02@iitp.ac.in"
  },
  {
    name: "Bhavika Mulchandani",
    title: "Media & Public Relations",
    image: "./Bhavika.jpg",
    linkedinUrl: "https://www.linkedin.com/in/bhavika-mulchandani-b99564321/",
    email: "mailto:bhavika_2403me12@iitp.ac.in"
  },
  {
    name: "Prince Kumar",
    title: "Media & Public Relations",
    image: "./Prince.jpg",
    linkedinUrl: "https://www.linkedin.com/in/prince-kumar-iitp/",
    email: "mailto:prince_2401ai38@iitp.ac.in"
  },
  {
    name: "Ayush Sen",
    title: "Media & Public Relations",
    image: "./Ayush.jpg",
    linkedinUrl: "https://www.linkedin.com/in/ayush-sen-b96870326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
    email: "mailto:ayush_2401ct04@iitp.ac.in"
  },
];

const CardSection = ({ title, people, useGrid = false, hoveredId, setHoveredId }) => (
  <div className="relative z-[10] container mx-auto">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="text-4xl font-bold text-center mb-16 leading-tight pb-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400"
    >
      {title}
    </motion.h2>

    <div
      className={
        useGrid
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto px-4"
          : "flex flex-col sm:flex-row justify-center items-center gap-24 max-w-5xl mx-auto px-4 sm:px-8"
      }
    >
      {people.map((person, index) => {
        const id = `${person.name}-${person.title}`;
        const supportsHover = window.matchMedia("(hover: hover)").matches;
        return (
          <div
            key={id}
            className="group w-full transition-all duration-300 transform"
            onMouseEnter={() => supportsHover && setHoveredId(id)}
            onMouseLeave={() => supportsHover && setHoveredId(null)}
          >
            <div
              className={`transition-all duration-300 transform ${
                hoveredId && hoveredId !== id
                  ? "scale-95 grayscale opacity-70"
                  : "scale-100 grayscale-0 opacity-100"
              }`}
            >
              <AlumniCard {...person} />
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default function AlumniGrid() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="fixed top-0 left-0 w-full h-full z-[2] pointer-events-none">
        <SceneCanvas />
      </div>

      <div className="relative z-[10] flex flex-col items-center justify-center min-h-screen text-center px-6">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-6xl sm:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400 drop-shadow-lg"
        >
          E-Cell Team
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
          className="text-3xl sm:text-4xl mt-6 text-white tracking-wide"
        >
          2025–26
        </motion.p>
      </div>

      <div className="relative z-[10]">
        <CardSection
          title="Meet Our Organizing Coordinators"
          people={OrgCoords}
          hoveredId={hoveredId}
          setHoveredId={setHoveredId}
        />
        <div className="mt-24" />
        <CardSection
          title="Meet Our Heads"
          people={Heads}
          useGrid
          hoveredId={hoveredId}
          setHoveredId={setHoveredId}
        />
        <div className="mt-24" />
        <CardSection
          title="Meet Our Managers"
          people={Managers}
          useGrid
          hoveredId={hoveredId}
          setHoveredId={setHoveredId}
        />
        <div className="mb-8" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-6 relative z-10"
      >
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-blue-400"
        >
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-white"
        >
          © 2025 E-Cell Alumni Relations. All rights reserved.
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-4"
        >
          <a href="https://www.instagram.com/ecell_iitpatna?igsh=OTJ1MmJlYTlseTN2" target="_blank" rel="noopener noreferrer" className="bg-blue-800/30 p-3 rounded-full text-blue-300 hover:text-orange-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/school/ecell-iit-patna/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="bg-blue-800/30 p-3 rounded-full text-blue-300 hover:text-orange-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1, y: -3 }}
          >
            <Link 
              to="/contact" 
              className="hover:text-orange-400 transition-colors duration-300 relative group"
            >
              Have a Doubt? Contact us
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-orange-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="mb-8" />
    </section>
  );
}