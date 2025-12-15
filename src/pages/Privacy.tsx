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
        
        <h1 className="text-4xl font-bold mb-4">Privacy Policy for Dream Metrics</h1>
        <p className="text-muted-foreground mb-8">Last updated: December 15, 2025</p>
        
        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p>
              Dream Metrics ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how your personal information is collected, used, 
              and disclosed by the "Dream Metrics" mobile application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
            <p className="mb-4">
              We collect the following types of information to provide our dream interpretation service:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="text-foreground">Account Information:</strong> When you sign in with Apple, 
                we receive a unique user identifier and, if you choose to share it, your name and email address.
              </li>
              <li>
                <strong className="text-foreground">User Content:</strong> We collect the text descriptions 
                of the dreams you voluntarily submit for analysis.
              </li>
              <li>
                <strong className="text-foreground">Usage Data & Purchases:</strong> We track your credit balance 
                and purchase history (via Apple StoreKit) to manage your in-app inventory.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the collected data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="text-foreground">Dream Analysis:</strong> Your dream text is transmitted 
                to our secure servers and processed by a third-party AI provider to generate an interpretation.
              </li>
              <li>
                <strong className="text-foreground">History & Synchronization:</strong> We store your dreams 
                and their interpretations in our database to allow you to view your history and access your data across devices.
              </li>
              <li>
                <strong className="text-foreground">Service Maintenance:</strong> To manage your account, 
                process credit usage, and provide customer support.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Sharing and Third Parties</h2>
            <p className="mb-4">
              We do not sell your personal data. We share data only with the trusted third-party services 
              necessary to operate the app:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="text-foreground">Cloud Hosting:</strong> Our backend infrastructure 
                is hosted on secure cloud providers.
              </li>
              <li>
                <strong className="text-foreground">AI Providers:</strong> Dream text is processed by 
                Large Language Model (LLM) providers for the sole purpose of analysis.
              </li>
              <li>
                <strong className="text-foreground">Apple:</strong> Payment transactions are handled 
                directly by Apple via the App Store. We do not process or store your credit card information.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Retention and Deletion</h2>
            <p className="mb-4">
              We retain your personal data and dream history as long as your account remains active.
            </p>
            <p>
              <strong className="text-foreground">Right to Delete:</strong> You have the right to delete 
              your account and all associated data at any time. This can be done directly within the app 
              by navigating to <span className="text-primary">Profile &gt; Delete Account</span>. Upon confirmation, 
              your user data, including all dream history and remaining credits, will be permanently removed from our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Children's Privacy</h2>
            <p>
              Our Service is not intended for use by anyone under the age of 13. We do not knowingly collect 
              personally identifiable information from children under 13. If we become aware that we have 
              collected personal data from a child under 13 without verification of parental consent, 
              we take steps to remove that information from our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Us</h2>
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
