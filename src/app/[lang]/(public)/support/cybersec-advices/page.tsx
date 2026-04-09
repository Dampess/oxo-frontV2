import "@/app/styles/pages/cybersecurity-advices.scss";

const articles = [
  {
    title: "Recognize phishing emails",
    desc: "Identify scams before they harm you.",
  },
  {
    title: "Secure your passwords",
    desc: "Best practices to stay safe.",
  },
];

export default function AdvicePage() {
  return (
    <main className="advice">
      <h1>Cybersecurity Advice</h1>

      <div className="articles">
        {articles.map((a, i) => (
          <div key={i} className="card">
            <h3>{a.title}</h3>
            <p>{a.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
