import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { HirerAccount } from "./HirerAccount";

@Entity({ name: "Documents" })
export class Documents {
  @PrimaryColumn({ type: "int" })
  accountID: number;

  @Column({ type: "nvarchar", length: 500, nullable: true })
  driverLicence: string | null;

  @Column({ type: "nvarchar", length: 500, nullable: true })
  insuranceCert: string | null;

  @Column({ type: "nvarchar", length: 500, nullable: true })
  businessRegCert: string | null;

  @Column({ type: "nvarchar", length: 20, nullable: true })
  abnNo: string | null;

  @Column({ type: "bit", default: false })
  isApplyAsBusiness: boolean;

  @OneToOne(() => HirerAccount, (hirerAccount) => hirerAccount.documents)
  @JoinColumn({ name: "accountID", referencedColumnName: "hireAccountID" })
  hirerAccount: HirerAccount;
}
