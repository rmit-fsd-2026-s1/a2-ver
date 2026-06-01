import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
import { Venue } from "./Venue";

@Entity({ name: "VendorAccount" })
export class VendorAccount {
  @PrimaryGeneratedColumn()
  vendorAccountID: number;

  @Column({ type: "int", unique: true })
  userID: number;

  @Column({ type: "bit", default: true })
  isActive: boolean;

  @OneToOne(() => User, (user) => user.vendorAccount)
  @JoinColumn({ name: "userID", referencedColumnName: "userID" })
  user: User;

  @OneToMany(() => Venue, (venue) => venue.vendorAccount)
  venues: Venue[];
}
