const reviews = [
  {
    text: "They made the entire process so smooth. We closed in under 3 weeks and our loan officer was available every time we had a question. Couldn't recommend them more.",
    initials: "SR",
    name: "Sarah R.",
    location: "The Colony, TX",
    avatarClass: "av-1",
  },
  {
    text: "As a first-time buyer I was nervous about everything. AmeriDream walked me through every step. By closing day it felt like we'd known them for years.",
    initials: "JM",
    name: "James M.",
    location: "Decatur, TX",
    avatarClass: "av-2",
  },
  {
    text: "We've used AmeriDream twice — once to buy and once to refinance. Both times were seamless. They genuinely care about getting you the best deal.",
    initials: "ML",
    name: "Maria & Tom L.",
    location: "Bridgeport, TX",
    avatarClass: "av-3",
  },
];

export default function ReviewsSection() {
  return (
    <section className="reviews" id="reviews">
      <div className="wrap">
        <div className="reviews-hdr">
          <div>
            <span className="eyebrow">Client reviews</span>
            <h2 className="sec-title">Don&apos;t take our word for it.</h2>
            <p className="sec-sub">
              Here&apos;s what North Texas homeowners say about working with
              AmeriDream.
            </p>
          </div>
          <div className="rating-block">
            <div className="rating-num">4.9</div>
            <div className="rating-stars">★★★★★</div>
            <div className="rating-lbl">200+ Google reviews</div>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.name} className="review-card">
              <div className="r-stars">★★★★★</div>
              <p className="r-text">&ldquo;{review.text}&rdquo;</p>
              <div className="r-footer">
                <div className={`r-avatar ${review.avatarClass}`}>
                  {review.initials}
                </div>
                <div>
                  <span className="r-name">{review.name}</span>
                  <span className="r-loc">{review.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
