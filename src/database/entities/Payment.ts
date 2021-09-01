import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity()
export class Payment extends BaseEntity {
    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @Column({ name: 'customer_id' })
    customerId: number;

    @Column({ name: 'season_id' })
    seasonId: number;

    @Column({ name: 'amount', type: 'numeric', precision: 10, scale: 2 })
    amount: number;

    @Column({ name: 'date' })
    date: Date;
}
