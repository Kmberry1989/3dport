const Documents = () => {
  const files = [
    { name: "Contributions", href: "/contributions.html" },
    { name: "Resume", href: "#" },
    { name: "Notes", href: "#" },
  ];
  return (
    <ul className="list-disc pl-5">
      {files.map((f) => (
        <li key={f.name}>
          <a href={f.href} target="_blank" rel="noopener noreferrer" className="underline">
            {f.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Documents;
