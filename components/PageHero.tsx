import Link from "next/link";

type Props = {
  /** The label shown after "Home ›" in the breadcrumb */
  breadcrumb: string;
  /** The page title — can include <em> for italic red text */
  title: React.ReactNode;
  /** The paragraph below the title */
  subtitle: string;
};

export default function PageHero({ breadcrumb, title, subtitle }: Props) {
  return (
    <div className="page-hero">
      <div className="page-hero-inner">
        <div className="breadcrumb">
          <Link href="/">Home</Link> › {breadcrumb}
        </div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
