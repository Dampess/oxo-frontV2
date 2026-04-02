import "../styles/components/footer.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p className="copyright">
          © {new Date().getFullYear()} <span className="brand">Oxo</span>. All
          rights reserved.
        </p>

        <p className="links">
          <a href="mailto:support@oxo.com" className="link">
            support@oxo.com
          </a>
          {" · "}
          <Link href="/privacy" className="link">
            Privacy Policy
          </Link>
          {" · "}
          <Link href="/terms" className="link">
            Terms of Service
          </Link>
          {" · "}
          <Link href="/cgu" className="link">
            CGU
          </Link>
          {" · "}
          <Link href="/cgv" className="link">
            CGV
          </Link>
        </p>
      </div>
    </footer>
  );
}
