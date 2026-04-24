import Link from "next/link";
import { APPLY_URL } from "@/lib/constants";

type Props = {
  heading: string;
  body: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  /**
   * "blue"  → dark blue background, white text, white buttons (default — used on loan-types etc.)
   * "light" → off-white background, dark text, red + outline buttons (used on learning-center etc.)
   */
  variant?: "blue" | "light";
};

export default function PageCtaBanner({
  heading,
  body,
  primaryLabel = "Get pre-approved",
  secondaryLabel = "Talk to a loan officer",
  secondaryHref = "/contact",
  variant = "blue",
}: Props) {
  const isLight = variant === "light";

  return (
    <div
      className="cta-banner"
      style={
        isLight
          ? { background: "var(--off-white)", borderTop: "1px solid var(--border)" }
          : undefined
      }
    >
      <div className="cta-banner-inner">
        <div>
          <h2 style={isLight ? { color: "var(--text-dark)" } : undefined}>
            {heading}
          </h2>
          <p style={isLight ? { color: "var(--text-mid)" } : undefined}>
            {body}
          </p>
        </div>
        <div className="cta-banner-btns">
          {isLight ? (
            <>
              <a href={APPLY_URL} className="btn-primary">
                {primaryLabel}
              </a>
              <Link href={secondaryHref} className="btn-outline">
                {secondaryLabel}
              </Link>
            </>
          ) : (
            <>
              <a href={APPLY_URL} className="btn-white">
                {primaryLabel}
              </a>
              <Link href={secondaryHref} className="btn-ghost-white">
                {secondaryLabel}
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
