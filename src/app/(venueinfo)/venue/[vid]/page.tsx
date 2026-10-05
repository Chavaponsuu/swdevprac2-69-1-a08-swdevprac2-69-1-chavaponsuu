import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const venues = new Map([
  [
    "001",
    {
      vid: "001",
      venueName: "The Bloom Pavilion",
      imgSrc: "/images/bloom.jpg",
    },
  ],
  [
    "002",
    {
      vid: "002",
      venueName: "Spark Space",
      imgSrc: "/images/sparkspace.jpg",
    },
  ],
  [
    "003",
    {
      vid: "003",
      venueName: "The Grand Table",
      imgSrc: "/images/grandtable.jpg",
    },
  ],
]);

export default async function VenueDetailPage({
  params,
}: {
  params: Promise<{ vid: string }>;
}) {
  const { vid } = await params;
  const venue = venues.get(vid);

  if (!venue) {
    return (
      <main className={styles.notFound}>
        <p>Venue not found</p>
        <Link href="/venue">Back to venues</Link>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <section className={styles.detailCard}>
        <div className={styles.imageSection}>
          <Image
            src={venue.imgSrc}
            alt={venue.venueName}
            width={1200}
            height={800}
            className={styles.image}
            priority
          />
          <span className={styles.venueId}>Venue #{venue.vid}</span>
        </div>

        <div className={styles.content}>
          <Link href="/venue" className={styles.backLink}>
            ← Back to all venues
          </Link>
          <p className={styles.eyebrow}>Featured event space</p>
          <h1>{venue.venueName}</h1>
          <p className={styles.description}>
            A beautiful setting for memorable celebrations, meetings, and
            special occasions.
          </p>

          <div className={styles.infoRow}>
            <div>
              <span>Venue ID</span>
              <strong>{venue.vid}</strong>
            </div>
            <div>
              <span>Available for</span>
              <strong>Any occasion</strong>
            </div>
          </div>

          <Link href="/booking" className={styles.bookingLink}>
            Book this venue
          </Link>
        </div>
      </section>
    </main>
  );
}
