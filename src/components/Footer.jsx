
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h4 className="font-bold mb-2">Skill Bridge</h4>
          <p>Connecting talented individuals with great opportunities since 2025.</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">For Job Seekers</h4>
          <ul>
            <li>Browse Jobs</li>
            <li>Career Resources</li>
            <li>Resume Builder</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">For Employers</h4>
          <ul>
            <li>Post a Job</li>
            <li>Browse Candidates</li>
            <li>Pricing Plans</li>
          </ul>
        </div>
      </div>
      <p className="mt-6 text-center text-sm">© 2025 Skill Bridge. All rights reserved.</p>
    </footer>
  );
}
