import { Link } from "react-router-dom";
import { Briefcase } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center border-b m-10">
      {/* Logo with briefcase */}
      <div className="flex items-center gap-2 text-xl font-bold">
        <Briefcase className="w-6 h-6 text-blue-600" />
        <span>Skill Bridge</span>
      </div>

      {/* Navigation */}
      <nav>
        <Link className="mx-2 hover:text-blue-600" to="/">Home</Link>
        <Link className="mx-2 hover:text-blue-600" to="/about">About Us</Link>
        <Link className="mx-2 hover:text-blue-600" to="/contact">Contact Us</Link>
      </nav>
    </header>
  );
}
