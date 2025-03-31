import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code2, Cpu, Globe, Rocket } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-500 to-orange-600">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6">KoratXtech</h1>
          <p className="text-xl md:text-2xl mb-8">Innovating Tomorrow's Technology Today</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a href="#about" className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
              Learn More
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center mb-16">Empowering Innovation</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Code2 size={32} />}
                title="Advanced Development"
                description="Cutting-edge software solutions using the latest technologies"
              />
              <FeatureCard 
                icon={<Cpu size={32} />}
                title="Tech Innovation"
                description="Pushing boundaries with breakthrough technological advancements"
              />
              <FeatureCard 
                icon={<Globe size={32} />}
                title="Global Impact"
                description="Creating solutions that make a difference worldwide"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-orange-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center mb-16">Our Projects</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <ProjectCard 
                image="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                title="AI Innovation"
                description="Advancing artificial intelligence for real-world applications"
              />
              <ProjectCard 
                image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                title="Future Tech"
                description="Developing tomorrow's technology solutions"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-orange-50 p-6 rounded-lg text-center"
    >
      <div className="text-orange-500 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

function ProjectCard({ image, title, description }: { image: string; title: string; description: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}

export default App;