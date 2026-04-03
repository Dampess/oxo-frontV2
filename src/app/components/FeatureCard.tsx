import Link from "next/link";
import "../styles/components/featurecard.scss";
import { features } from "process";

type FeatureCardProps = {
  title: string;
  description: string;
  icon?: string;
  link: string;
};

export default function FeatureCard({
  title,
  description,
  icon,
  link,
}: FeatureCardProps) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>

      <div className="feature-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <Link href={`/${link}`} className="btn">
        See Product ➜
      </Link>
    </div>
  );
}
