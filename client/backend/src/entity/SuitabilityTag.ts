import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RecommendedSuitability } from "./RecommendedSuitability";

@Entity({ name: "SuitabilityTag" })
export class SuitabilityTag {
  @PrimaryGeneratedColumn()
  tagID: number;

  @Column({ type: "nvarchar", length: 100, unique: true })
  recommendType: string;

  @OneToMany(
    () => RecommendedSuitability,
    (recommendedSuitability) => recommendedSuitability.suitabilityTag,
  )
  recommendedSuitabilities: RecommendedSuitability[];
}
