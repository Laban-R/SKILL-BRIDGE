import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';

const logos = [logo1, logo2, logo3, logo4, logo5];
export default function TrustedLogos() {
 

  return (
    <section className="py-12 text-center">
      <h3 className="mb-6 text-xl">Trusted by Leading Institutions & Organizations</h3>
      <div className="flex justify-center gap-8">
        {logos.map((logo, idx) => <img key={idx} src={logo} className="h-12" alt="logo" />)}
      </div>
    </section>
  );
}

