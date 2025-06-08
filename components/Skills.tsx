const SkillsComponent = () => {
  return (
    <div className="mt-12 bg-gradient-to-br shadow-lg rounded-lg p-8">
      <h2 className="text-4xl font-extrabold mb-6 text-center">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Languages",
            skills: "TypeScript, JavaScript, Python, Java, C++, SQL",
          },
          { title: "Backend", skills: "Node.js, Express.js, REST APIs" },
          {
            title: "Frontend",
            skills:
              "Next.js, React.js, HTML5, CSS3, Tailwind CSS, Material-UI, Shadcn/ui",
          },
          {
            title: "DevOps & Cloud",
            skills:
              "Docker, AWS (EC2, S3, CloudFront), Azure, CI/CD, GitHub Actions",
          },
          {
            title: "Database & Cache",
            skills: "PostgreSQL, MongoDB, Redis, Prisma ORM",
          },
          { title: "Tools & Security", skills: "Git, JWT, OAuth 2.0, Bcrypt" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-[#0b1016] to-[#3d3e41] text-white p-5 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg motion-safe:animate-fadeIn"
          >
            <h3 className="font-bold text-lg mb-2 text-blue-500">{item.title}:</h3>
            <p className="text-sm">{item.skills}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsComponent;
