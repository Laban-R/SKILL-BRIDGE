
export default function TrustedLogos() {
  const logos = [
    '/src/assets/logo1.png',
    '/src/assets/logo2.png',
    '/src/assets/logo3.png',
    '/src/assets/logo4.png',
    '/src/assets/logo5.png'
        
  ];

  return (
    <section className="py-12 text-center">
      <h3 className="mb-6 text-xl">Trusted by Leading Institutions & Organizations</h3>
      <div className="flex justify-center gap-8">
        {logos.map((logo, idx) => <img key={idx} src={logo} className="h-12" alt="logo" />)}
      </div>
    </section>
  );
}

