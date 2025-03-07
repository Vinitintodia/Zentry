import { Navbar1 } from "@/components/Navbar";
import { Footerdemo } from "@/components/ui/footer-section";

export default function PrivacyPolicy() {
    return (
      <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <Navbar1 />
          {/* Add your privacy policy content here */}
          <div className="py-12">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            {/* Add more privacy policy content */}
          </div>
          <Footerdemo />
      </div>
    );
}