"use client";
import styles from "./card.module.css";
import InteractiveCard from "./InteractiveCard";
import Link from "next/link";

import { Rating } from "@mui/material";

interface props {
  vid: string;
  venueName: string;
  imgSrc: string;
  rating: number;
  onRatingChange: (rating: number) => void;
}
export default function Card(props: props) {
  return (
    <InteractiveCard>
      <div className={styles.card}>
        <Link className={styles.venueLink} href={`/venue/${props.vid}`}>
          <img src={props.imgSrc} alt={props.venueName} />
          <div className={styles.text}>
            <h2>{props.venueName}</h2>
          </div>
        </Link>
        <Rating
          id={`${props.venueName} Rating`}
          name={`${props.venueName} Rating`}
          data-testid={`${props.venueName} Rating`}
          value={props.rating}
          onChange={(_, newRating) => props.onRatingChange(newRating ?? 0)}
        />
      </div>
    </InteractiveCard>
  );
}
