import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventList from './components/EventList';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Cursor from './components/Cursor';


const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Cursor/>  
      <Navbar />
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <EventList />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};
export default App;