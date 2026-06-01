import {
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { SuitabilityTag } from "./SuitabilityTag";
import { Venue } from "./Venue";

@Entity({ name: "RecommendedSuitability" })
export class RecommendedSuitability {
  @PrimaryColumn({ type: "int" })
  tagID: number;

  @PrimaryColumn({ type: "int" })
  venueID: number;

  @ManyToOne(
    () => SuitabilityTag,
    (suitabilityTag) => suitabilityTag.recommendedSuitabilities,
  )
  @JoinColumn({ name: "tagID", referencedColumnName: "tagID" })
  suitabilityTag: SuitabilityTag;

  @ManyToOne(() => Venue, (venue) => venue.recommendedSuitabilities)
  @JoinColumn({ name: "venueID", referencedColumnName: "venueID" })
  venue: Venue;
}
