const Contacts = () => {
  const contacts = [
    { name: "Rochelle Berry", email: "rochelleberry731@gmail.com" },
    { name: "John Doe", email: "john.doe@example.com" },
    { name: "Jane Smith", email: "jane.smith@example.com" },
  ];
  return (
    <div className="w-72 bg-white rounded shadow-lg p-4 text-black">
      <h2 className="text-lg font-bold mb-2">Contacts</h2>
      <ul>
        {contacts.map((c) => (
          <li key={c.email} className="mb-2">
            <div className="font-semibold">{c.name}</div>
            <a href={`mailto:${c.email}`} className="text-blue-600 underline text-xs">{c.email}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
