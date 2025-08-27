import handshake from "../assets/handshake.jpg";

export default function HeroSection() {
  return (
    <section
      className="text-center py-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${handshake})` }}>
      <div className="bg-black/50 py-12">
        <h2 className="text-xl mb-2 text-white">
          The bridge where Employers discover talent,
        </h2>
        <p className="mb-6 text-white">and Talent meets opportunity...</p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            For Students
          </button>
          <button className="bg-white border-1 border-blue-600 text-blue-600 px-4 py-2 rounded-md">
            For Employers
          </button>
        </div>
      </div>
    </section>
  );
}
