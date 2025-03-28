import React, { useState } from 'react';
import { 
  Trophy, Heart, Star, Clock, Wrench,
  ChevronLeft, ChevronRight, Monitor, Cpu 
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const About = () => {
  // Gallery state
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const galleryImages = [
    'public/lovable-uploads/f5ce1825-e9e0-4ee0-adc2-11838e7180cc.png',
    'public/lovable-uploads/e6bb4fd7-b0dc-4635-a308-e0a20b31bd05.png',
    'public/lovable-uploads/0405b834-7953-44ff-abdf-f426302a2ed4.png',
    'public/lovable-uploads/6903680f-f7c2-4953-b067-cdca59858c1e.png',
    'public/lovable-uploads/88310d2b-3813-4f8e-9fa0-2d215bd838b1.png',
    'public/lovable-uploads/d3c57411-8fa4-488d-9bb3-16553c8ea572.png',
  ];

  const skills = [
    { name: 'Hardware Repair', level: 95 },
    { name: 'Diagnostics', level: 90 },
    { name: 'Circuit Analysis', level: 85 },
    { name: 'Software Troubleshooting', level: 80 },
  ];

  const softwareSkills = [
    { name: 'Software Troubleshooting', level: 98 },
    { name: 'Operating Systems', level: 95 },
    { name: 'Data Recovery', level: 90 },
    { name: 'Network Solutions', level: 85 },
  ];

  const hybridSkills = [
    { name: 'Hardware Repair', level: 90 },
    { name: 'Software Solutions', level: 92 },
    { name: 'System Integration', level: 88 },
    { name: 'Network Configuration', level: 85 },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-sparkit-dark">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center text-white">
              About <span className="text-sparkit-blue">Sparkit Electronics</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="w-20 h-1 bg-sparkit-blue mx-auto mb-8"></div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <p className="text-gray-300 text-center max-w-3xl mx-auto text-lg">
              We're a newly established electronics repair shop dedicated to providing expert repair services
              with honesty, quality, and customer satisfaction as our core values.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-sparkit-darker">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                  Our <span className="text-sparkit-blue">Mission</span> & Values
                </h2>
                <p className="text-gray-300 mb-6">
                  At Sparkit Electronics, our mission is to provide top-quality electronic repair services that extend the life of your devices, 
                  save you money, and reduce electronic waste. We believe in transparency, affordability, and exceptional service.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-sparkit-blue/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Wrench className="text-sparkit-blue" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-1">Expert Solutions</h3>
                      <p className="text-gray-400">
                        We employ the latest techniques and use high-quality parts to ensure lasting repairs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-sparkit-blue/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart className="text-sparkit-blue" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-1">Customer Satisfaction</h3>
                      <p className="text-gray-400">
                        We prioritize your needs and ensure you're completely satisfied with our services.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-sparkit-blue/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Star className="text-sparkit-blue" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-1">Quality Guarantee</h3>
                      <p className="text-gray-400">
                        All repairs come with a 90-day warranty for your peace of mind.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-sparkit-blue/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="text-sparkit-blue" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-1">Quick Turnaround</h3>
                      <p className="text-gray-400">
                        We understand the importance of your devices, so we work efficiently to minimize your downtime.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3} direction="left">
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                <img 
                  src="public/lovable-uploads/f5ce1825-e9e0-4ee0-adc2-11838e7180cc.png" 
                  alt="Sparkit Electronics Workshop" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sparkit-darker to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Quality Repairs</h3>
                  <p className="text-gray-200">
                    Using advanced tools and techniques to restore your electronics to perfect condition.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Meet the Expert */}
      <section className="py-16 bg-sparkit-dark">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-3 text-center text-white">
              Meet Our <span className="text-sparkit-blue">Team</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Our shop is led by skilled technicians with years of experience in electronic repair.
            </p>
          </ScrollReveal>

          {/* Ajmal Shaheel */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <ScrollReveal>
              <div className="relative h-[400px] overflow-hidden rounded-lg transform transition-transform hover:scale-[1.02] duration-500 group">
                <img 
                  src="public/lovable-uploads/ajmal-shaheel.png" 
                  alt="Ajmal Shaheel" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sparkit-darker via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-sparkit-darker/80 backdrop-blur-sm p-4 rounded-lg border border-sparkit-blue/30 transform transition-transform group-hover:translate-y-0 translate-y-2 duration-500">
                    <h3 className="text-2xl font-bold text-white">Ajmal Shaheel</h3>
                    <p className="text-sparkit-blue font-medium">Lead Technician & Owner</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3} direction="left">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Ajmal Shaheel
                </h3>
                <p className="text-gray-300 mb-6">
                  With over 30 years of experience in electronics repair, Ajmal has developed expertise across a wide range of devices.
                  His passion for technology and problem-solving has led him to establish Sparkit Electronics, where he applies his 
                  technical knowledge and customer-focused approach to every repair.
                </p>
                <p className="text-gray-300 mb-6">
                  Ajmal's specialties include circuit board repairs, component-level diagnostics, and 
                  reviving devices that others might consider beyond repair. His dedication to continuous learning
                  ensures that Sparkit stays at the cutting edge of repair techniques.
                </p>
                
                <div className="space-y-4 mt-8">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-sparkit-blue font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-sparkit-blue h-full rounded-full animate-pulse-slow"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Haakim Ahamed */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <ScrollReveal delay={0.3} direction="right">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Haakim Ahamed
                </h3>
                <p className="text-gray-300 mb-6">
                  Haakim is our software specialist with 2+ years of extensive knowledge in troubleshooting and resolving complex software issues across multiple operating systems and platforms. His analytical approach and attention to detail make him the go-to person for all software-related problems.
                </p>
                <p className="text-gray-300 mb-6">
                  He excels in data recovery, operating system repairs, and providing customized software solutions. Haakim continuously updates his skills to stay current with the latest software technologies and security practices.
                </p>
                
                <div className="space-y-4 mt-8">
                  {softwareSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-sparkit-blue font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-sparkit-blue h-full rounded-full animate-pulse-slow"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal>
              <div className="relative h-[400px] overflow-hidden rounded-lg transform transition-transform hover:scale-[1.02] duration-500 group">
                <img 
                  src="public/lovable-uploads/haakim.png" 
                  alt="Haakim Ahamed" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sparkit-darker via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-sparkit-darker/80 backdrop-blur-sm p-4 rounded-lg border border-sparkit-blue/30 transform transition-transform group-hover:translate-y-0 translate-y-2 duration-500">
                    <h3 className="text-2xl font-bold text-white">Haakim Ahamed</h3>
                    <p className="text-sparkit-blue font-medium">Software Specialist</p>
                    <div className="mt-2 flex items-center">
                      <Monitor className="text-sparkit-blue mr-2" size={16} />
                      <span className="text-gray-300 text-sm">Software Solutions Expert</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Abdulla Zulkifil */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative h-[400px] overflow-hidden rounded-lg transform transition-transform hover:scale-[1.02] duration-500 group">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1774&auto=format&fit=crop" 
                  alt="Abdulla Zulkifil" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sparkit-darker via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-sparkit-darker/80 backdrop-blur-sm p-4 rounded-lg border border-sparkit-blue/30 transform transition-transform group-hover:translate-y-0 translate-y-2 duration-500">
                    <h3 className="text-2xl font-bold text-white">Abdulla Zulkifil</h3>
                    <p className="text-sparkit-blue font-medium">Hardware & Software Technician</p>
                    <div className="mt-2 flex items-center">
                      <Cpu className="text-sparkit-blue mr-2" size={16} />
                      <span className="text-gray-300 text-sm">Hybrid Solutions Expert</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3} direction="left">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Abdulla Zulkifil
                </h3>
                <p className="text-gray-300 mb-6">
                  Abdulla brings versatility to our team with his 5+ years of expertise in both hardware and software repair. His comprehensive understanding of how hardware and software systems interact allows him to diagnose and fix complex issues that span both domains.
                </p>
                <p className="text-gray-300 mb-6">
                  With a background in system integration and networking, Abdulla is particularly skilled at resolving issues that require both physical repairs and software configuration. His holistic approach ensures that repairs address the root cause of problems rather than just the symptoms.
                </p>
                
                <div className="space-y-4 mt-8">
                  {hybridSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-sparkit-blue font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-sparkit-blue h-full rounded-full animate-pulse-slow"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Shop Gallery */}
      <section className="py-16 bg-sparkit-darker">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-3 text-center text-white">
              Our <span className="text-sparkit-blue">Workshop</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Take a look at our fully equipped repair shop where we bring your electronics back to life.
            </p>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ScrollReveal delay={0.4}>
              <div className="relative h-[300px] md:h-[500px]">
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  {galleryImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Shop Gallery ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-sparkit-darker/80 hover:bg-sparkit-darker text-white p-2 rounded-full transition-colors duration-300"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-sparkit-darker/80 hover:bg-sparkit-darker text-white p-2 rounded-full transition-colors duration-300"
                >
                  <ChevronRight size={24} />
                </button>
                
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        index === currentIndex ? 'bg-sparkit-blue' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Certifications/Experience */}
      <section className="py-16 bg-sparkit-dark">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-3 text-center text-white">
              Certifications & <span className="text-sparkit-blue">Experience</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Our credentials demonstrate our commitment to quality and expertise in electronics repair.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <ScrollReveal key={item} delay={0.2 + item * 0.1}>
                <div className="bg-card rounded-lg p-6 border border-border hover:border-sparkit-blue transition-all duration-300 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-sparkit-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Trophy className="text-sparkit-blue" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {item === 1 && "Certified Electronics Technician"}
                    {item === 2 && "CompTIA A+ Certification"}
                    {item === 3 && "30+ Years Experience"}
                  </h3>
                  <p className="text-gray-400">
                    {item === 1 && "Industry-recognized certification for electronics repair specialists."}
                    {item === 2 && "Globally recognized certification for PC repair and maintenance."}
                    {item === 3 && "Over three decades of combined hands-on experience with various electronic devices."}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
