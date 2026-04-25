import Link from "next/link";

type Props = {
  breadcrumb: string;
  title: React.ReactNode;
  subtitle: string;
  compact?: boolean;
};

export default function PageHero({ breadcrumb, title, subtitle, compact }: Props) {
  return (
    <div className={`page-hero${compact ? " page-hero--compact" : ""}`}>
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
