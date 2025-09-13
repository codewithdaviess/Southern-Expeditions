import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#9aa04f] text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Southern Expeditions</h2>
          <p className="text-sm">
            Explore the beauty of Africa with curated tours, expert guides, and
            unforgettable experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/#" className="hover:underline">
                Tours
              </a>
            </li>
            <li>
              <a href="/#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="/#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="/#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="/#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/#" className="hover:underline">
                Help Center
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div>
            <div className="flex space-x-4">
              <a href="#" className="text-[#9aa04f] bg-white p-2 rounded-full">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#9aa04f] bg-white p-2 rounded-full">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#9aa04f] bg-white p-2 rounded-full">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#9aa04f] bg-white p-2 rounded-full">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Southern Expeditions. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
