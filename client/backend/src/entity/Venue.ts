import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BlockedSlot } from "./BlockedSlot";
import { Booking } from "./Booking";
import { RecommendedSuitability } from "./RecommendedSuitability";
import { VendorAccount } from "./VendorAccount";
import { VenuePreference } from "./VenuePreference";

@Entity({ name: "Venue" })
export class Venue {
  @PrimaryGeneratedColumn()
  venueID: number;

  @Column({ type: "int" })
  vendorAccountID: number;

  @Column({ type: "nvarchar", length: 150 })
  venueName: string;

  @Column({ type: "nvarchar", length: 255 })
  location: string;

  @Column({ type: "int" })
  capacity: number;

  @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
  price: string;

  @Column({ type: "nvarchar", length: "MAX", nullable: true })
  description: string | null;

  @Column({ type: "nvarchar", length: 500, nullable: true })
  imageUrl: string | null;

  @Column({ type: "nvarchar", length: 50, default: "available" })
  status: string;

  @Column({ type: "bit", default: false })
  isFeature: boolean;

  @ManyToOne(() => VendorAccount, (vendorAccount) => vendorAccount.venues)
  @JoinColumn({
    name: "vendorAccountID",
    referencedColumnName: "vendorAccountID",
  })
  vendorAccount: VendorAccount;

  @OneToMany(() => Booking, (booking) => booking.venue)
  bookings: Booking[];

  @OneToMany(() => BlockedSlot, (blockedSlot) => blockedSlot.venue)
  blockedSlots: BlockedSlot[];

  @OneToMany(
    () => VenuePreference,
    (venuePreference) => venuePreference.venue,
  )
  venuePreferences: VenuePreference[];

  @OneToMany(
    () => RecommendedSuitability,
    (recommendedSuitability) => recommendedSuitability.venue,
  )
  recommendedSuitabilities: RecommendedSuitability[];
}
