import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { HirerAccount } from "./HirerAccount";
import { Venue } from "./Venue";

@Entity({ name: "VenuePreference" })
export class VenuePreference {
  @PrimaryColumn({ type: "int" })
  hireAccountID: number;

  @PrimaryColumn({ type: "int" })
  venueID: number;

  @Column({ type: "int" })
  preferenceRank: number;

  @Column({ type: "datetime2", default: () => "GETDATE()" })
  createdAt: Date;

  @ManyToOne(
    () => HirerAccount,
    (hirerAccount) => hirerAccount.venuePreferences,
  )
  @JoinColumn({
    name: "hireAccountID",
    referencedColumnName: "hireAccountID",
  })
  hirerAccount: HirerAccount;

  @ManyToOne(() => Venue, (venue) => venue.venuePreferences)
  @JoinColumn({ name: "venueID", referencedColumnName: "venueID" })
  venue: Venue;
}
