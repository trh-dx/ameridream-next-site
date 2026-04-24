import Link from "next/link";
import { APPLY_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="f-brand">AmeriDream Mortgage Group, LLC</div>
          <div className="f-nmls">NMLS #275209 · Equal Housing Lender</div>
          <div className="f-desc">
            Making YOUR American Dream come true — one home loan at a time.
            Serving North Texas families since 2009.
          </div>
        </div>

        <div className="f-col">
          <h4>Quick links</h4>
          <ul className="f-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/loan-types">Loan types</Link></li>
            <li><Link href="/learning-center">Learning center</Link></li>
            <li><Link href="/checklist">Buyer checklist</Link></li>
            <li><Link href="/meet-the-team">Meet the team</Link></li>
            <li><Link href="/contact">Contact us</Link></li>
            <li><a href={APPLY_URL}>Apply now</a></li>
          </ul>
        </div>

        <div className="f-col">
          <h4>Locations</h4>
          <div className="f-location">
            <strong>The Colony (Main)</strong>
            <p>3700 Standridge Dr, Ste 101<br />The Colony, TX 75056</p>
            <a href="tel:4693624700">(469) 362-4700</a>
          </div>
          <div className="f-location">
            <strong>Decatur · NMLS #1652928</strong>
            <p>207 W Main Street<br />Decatur, TX 76234</p>
            <a href="tel:9406272034">(940) 627-2034</a>
          </div>
          <div className="f-location">
            <strong>Bridgeport · NMLS #2286544</strong>
            <p>1005 Stevens St<br />Bridgeport, TX 76426</p>
            <a href="tel:9406440024">(940) 644-0024</a>
          </div>
        </div>

        <div className="f-col">
          <h4>Hours</h4>
          <div className="f-hours">
            <p>Mon – Fri<br /><strong>9:00 am – 5:00 pm</strong></p>
            <p>Saturday<br /><strong>By appointment</strong></p>
            <p>Sunday<br /><strong>By appointment</strong></p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 AmeriDream Mortgage Group, LLC. All rights reserved.</p>
        <div className="f-bottom-links">
          <a href="https://ameridreammtg.com/privacy-policy">Privacy Policy</a>
          <a href="https://ameridreammtg.com/file-a-complaint">File a Complaint</a>
          <a href="https://www.nmlsconsumeraccess.org/">NMLS Consumer Access</a>
        </div>
      </div>

      <div className="footer-legal">
        AmeriDream Mortgage Group, LLC (NMLS #275209) is an Equal Housing
        Lender. This is not a commitment to lend or extend credit. Programs,
        rates, terms and conditions are subject to change without notice. Terms
        and conditions apply. All rights reserved. Consult a tax adviser for
        more information and tax deductions.
      </div>
    </footer>
  );
}
