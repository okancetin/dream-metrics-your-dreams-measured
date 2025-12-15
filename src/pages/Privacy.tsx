import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container max-w-4xl mx-auto px-4 py-16">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: December 15, 2024</p>
        
        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
            <p>
              Dream Metrics ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, and safeguard your information 
              when you use our mobile application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Storage</h2>
            <p>
              Dream Metrics stores all your dream journal entries and personal data locally on your device. 
              We do not collect, transmit, or store your personal information on external servers. 
              Your dreams remain private and under your control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dream journal entries (stored locally on your device)</li>
              <li>App preferences and settings (stored locally on your device)</li>
              <li>Dream statistics and metrics (calculated and stored locally)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
            <p>
              All data processing happens locally on your device. We use your information to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Display and organize your dream journal entries</li>
              <li>Calculate dream statistics and insights</li>
              <li>Provide personalized app experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
            <p>
              Since all data is stored locally on your device, the security of your information 
              depends on your device's security measures. We recommend using device passcodes, 
              biometric authentication, and regular backups to protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Services</h2>
            <p>
              Dream Metrics does not share your personal data with third parties. 
              We do not use analytics services that track your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Children's Privacy</h2>
            <p>
              Our app is suitable for users of all ages. We do not knowingly collect 
              personal information from children under 13 without parental consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any 
              changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:{" "}
              <a 
                href="mailto:dreammetrics@proton.me" 
                className="text-primary hover:text-accent transition-colors underline underline-offset-4"
              >
                dreammetrics@proton.me
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
