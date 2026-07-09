import { useEffect } from 'react';
import { portfolioData } from './data/portfolio';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { EducationSkills } from './components/EducationSkills';
import { WorkProcess } from './components/WorkProcess';
import { QuoteCard } from './components/QuoteCard';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-dark-950 text-dark-200">
      <Header />
      <main>
        <Hero data={portfolioData} />
        <SelectedWork projects={portfolioData.selectedWork} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-8 py-16 max-w-7xl mx-auto">
          <EducationSkills education={portfolioData.education} skills={portfolioData.skills} />
          <WorkProcess process={portfolioData.workProcess} />
          <QuoteCard quote={portfolioData.quote} />
        </div>
        <Contact data={portfolioData.contact} />
      </main>
      <Footer data={portfolioData.footer} />
    </div>
  );
}

export default App;