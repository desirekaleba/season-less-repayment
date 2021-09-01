import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity()
export class Season extends BaseEntity {
    @PrimaryGeneratedColumn({ name: 'season_id' })
    seasonId: number;

    @Column({ name: 'season_name' })
    seasonName: string;

    @Column({ name: 'start_date' })
    startDate: Date;

    @Column({ name: 'end_date' })
    endDate: Date;
}
