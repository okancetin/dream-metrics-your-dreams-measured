import { Link } from "react-router-dom";
import StarField from "@/components/StarField";
import FeatureCard from "@/components/FeatureCard";
import AppStoreButton from "@/components/AppStoreButton";
import heroBg from "@/assets/hero-bg.png";
import appMockup from "@/assets/app-mockup.png";
import { Moon, Sparkles, BookOpen, TrendingUp, Shield, MessageCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <StarField />
      
      {/* Navigation */}
      <header className="relative z-20">
        <nav className="container mx-auto px-6 py-6 flex items-center justify-between" aria-label="Main navigation">
          <a href="/" className="flex items-center gap-2 group">
            <Moon className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xl font-semibold text-foreground">Dream Metrics</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
            <a href="#support" className="text-muted-foreground hover:text-foreground transition-colors">Support</a>
            <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
            <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
          </div>
          
          <AppStoreButton className="hidden sm:flex" />
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-12 md:pt-20 pb-24">
        <div 
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Hero Content */}
            <div className="flex-1 text-center lg:text-left animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">AI-Powered Dream Analysis</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6 glow-text">
                Unlock the Secrets of Your Dreams
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Dream Metrics uses advanced AI to interpret your dreams, track patterns, and help you understand your subconscious mind. Your personal dream journal awaits.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <AppStoreButton />
                <a 
                  href="#features"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* App Mockup */}
            <div className="flex-1 flex justify-center animate-float" style={{ animationDelay: '0.2s' }}>
              <img 
                src={appMockup} 
                alt="Dream Metrics iOS app interface showing dream journal and AI analysis features"
                className="w-72 md:w-80 lg:w-96 drop-shadow-2xl glow-box rounded-3xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Powerful Features for Dream Exploration
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to understand your dreams and unlock your subconscious potential.
            </p>
          </header>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard
              icon={<Sparkles className="w-7 h-7" />}
              title="AI Dream Interpretation"
              description="Get instant, personalized interpretations of your dreams using advanced artificial intelligence trained on dream psychology."
              delay={100}
            />
            <FeatureCard
              icon={<BookOpen className="w-7 h-7" />}
              title="Dream Journal"
              description="Record your dreams with ease. Add details, emotions, and symbols to build a comprehensive dream diary."
              delay={200}
            />
            <FeatureCard
              icon={<TrendingUp className="w-7 h-7" />}
              title="Pattern Recognition"
              description="Discover recurring themes, symbols, and patterns in your dreams over time with smart analytics."
              delay={300}
            />
            <FeatureCard
              icon={<Moon className="w-7 h-7" />}
              title="Sleep Insights"
              description="Track your dream frequency and correlate with sleep quality for better rest and more vivid dreams."
              delay={400}
            />
            <FeatureCard
              icon={<Shield className="w-7 h-7" />}
              title="Private & Secure"
              description="Your dreams are personal. All data is encrypted and stored securely on your device."
              delay={500}
            />
            <FeatureCard
              icon={<MessageCircle className="w-7 h-7" />}
              title="Explore Dreams"
              description="Browse common dream themes and their meanings. Learn from a rich database of dream symbolism."
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative z-10 py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-6">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              How Dream Metrics Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Three simple steps to unlock the meaning behind your dreams.
            </p>
          </header>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Record Your Dream", desc: "Wake up and immediately write down everything you remember about your dream." },
              { step: "2", title: "Tap Analyze", desc: "Our AI processes your dream using advanced dream psychology and symbolism." },
              { step: "3", title: "Discover Meaning", desc: "Receive a personalized interpretation with insights into your subconscious mind." },
            ].map((item, idx) => (
              <article key={idx} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto p-10 md:p-16 rounded-3xl bg-card border border-border card-glow">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Start Your Dream Journey Today
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Download Dream Metrics for free and begin exploring the fascinating world of your dreams.
            </p>
            <AppStoreButton className="mx-auto" />
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="relative z-10 py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-6">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Support & Help
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're here to help you get the most out of Dream Metrics.
            </p>
          </header>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <article className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-primary" />
                Contact Us
              </h3>
              <p className="text-muted-foreground mb-4">
                Have questions or feedback? We'd love to hear from you.
              </p>
              <a 
                href="mailto:dreammetrics@proton.me" 
                className="text-primary hover:text-accent transition-colors underline underline-offset-4"
              >
                dreammetrics@proton.me
              </a>
            </article>
            
            <article className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-primary" />
                FAQ
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Is Dream Metrics free?</strong><br/>Yes, the app is free to download with optional premium features.</li>
                <li><strong className="text-foreground">Is my data secure?</strong><br/>Absolutely. All dreams are encrypted and stored locally on your device.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Moon className="w-6 h-6 text-primary" />
              <span className="text-foreground font-semibold">Dream Metrics</span>
            </div>
            
            <nav className="flex items-center gap-6 text-sm" aria-label="Footer navigation">
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Use</Link>
              <a href="mailto:dreammetrics@proton.me" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </nav>
            
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Dream Metrics. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
