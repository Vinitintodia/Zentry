import { Navbar1 } from "@/components/Navbar";
import { Footerdemo } from "@/components/ui/footer-section";


export default function PrivacyPolicy() {
    return (
      <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <Navbar1 />
          <div className="py-12 prose prose-gray max-w-none dark:prose-invert">
            <h1 className="text-4xl font-bold mb-8">Zentry Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">
              <strong>Last Updated:</strong> February 15, 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground">
                Welcome to Zentry. We are committed to protecting your privacy and ensuring the security of your information. This Privacy Policy outlines how we collect, use, and disclose information when you use our website builder and related services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Account Information:</strong> When you create an account, we collect your name, email address, and any other information you provide during registration.</li>
                <li><strong>Project Data:</strong> As a website builder, we collect and store the data you input to create your websites, including text, images, and design elements.</li>
                <li><strong>Usage Data:</strong> We collect information about how you use our Services, including your IP address, browser type, operating system, pages visited, and the time and date of your use.</li>
                <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to enhance your experience, analyze website usage, and personalize content.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use your information to:</p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Provide and maintain our Services.</li>
                <li>Enable you to build and manage your websites.</li>
                <li>Communicate with you, including providing support and updates.</li>
                <li>Analyze website usage and improve our Services.</li>
                <li>Ensure compliance with our terms of service.</li>
                <li>Prevent fraud, and maintain security.</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Important Usage Guidelines</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Single Project Identity:</strong> To maintain project integrity and prevent conflicts, users are required to use only one account or project ID per active project.</li>
                <li><strong>Simplified Code Download:</strong> Zentry is designed to provide a streamlined process for downloading your website code. Please follow the provided step by step instructions within the application for easy code retrieval.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Sharing Your Information</h2>
              <p className="text-muted-foreground mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Service Providers:</strong> Third-party providers who assist us in operating our Services.</li>
                <li><strong>Legal Obligations:</strong> When required by law or to protect our rights.</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
              <p className="text-muted-foreground">
                We implement reasonable security measures to protect your information. However, no online transmission or storage is entirely secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access your personal information.</li>
                <li>Correct inaccuracies in your information.</li>
                <li>Request deletion of your information (subject to legal obligations).</li>
                <li>Opt out of marketing communications.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Cookies and Tracking</h2>
              <p className="text-muted-foreground">
                You can manage your cookie preferences through your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this policy periodically. We will notify you of significant changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground">If you have any questions, please contact us at:</p>
              <p className="text-muted-foreground">
                Email: <a href="mailto:support@zentry.com" className="text-primary hover:underline">support@zentry.com</a>
              </p>
            </section>
          </div>
          <Footerdemo />
      </div>
    );
}