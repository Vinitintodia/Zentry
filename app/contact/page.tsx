import { Contact } from "@/components/contact";
import { Navbar1 } from "@/components/Navbar";
import { Footerdemo } from "@/components/footer-section";
export default function contact() {
    return (
        <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">

            <Navbar1 />
            <Contact />
            <Footerdemo />
        </div>
    );
}