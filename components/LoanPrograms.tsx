import Link from "next/link";

const loans = ["Conventional", "FHA", "VA", "USDA", "Jumbo", "Non-Conforming"];

export default function LoanPrograms() {
  return (
    <section className="loans" id="loans">
      <div className="wrap">
        <span className="eyebrow">Loan programs</span>
        <h2 className="sec-title">
          We have a loan for<br />your situation.
        </h2>
        <p className="sec-sub">
          From first-time buyers to seasoned investors, we work with a wide
          range of loan programs to find the best fit for your goals.
        </p>
        <div className="pills">
          {loans.map((loan) => (
            <div key={loan} className="pill">
              {loan}
            </div>
          ))}
        </div>
        <p className="loans-note">
          Not sure which one is right for you? Our loan officers will explain
          your options in plain English — no pressure, no obligation.
        </p>
        <Link href="/loan-types" className="btn-outline-white">
          Compare loan types →
        </Link>
      </div>
    </section>
  );
}
