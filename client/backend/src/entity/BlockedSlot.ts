import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Venue } from "./Venue";

@Entity({ name: "BlockedSlot" })
export class BlockedSlot {
  @PrimaryGeneratedColumn()
  blockedSlotID: number;

  @Column({ type: "int" })
  venueID: number;

  @Column({ type: "datetime2" })
  startDateTime: Date;

  @Column({ type: "datetime2" })
  endDateTime: Date;

  @Column({ type: "nvarchar", length: 255, nullable: true })
  reason: string | null;

  @Column({ type: "bit", default: true })
  isActive: boolean;

  @ManyToOne(() => Venue, (venue) => venue.blockedSlots)
  @JoinColumn({ name: "venueID", referencedColumnName: "venueID" })
  venue: Venue;
}
