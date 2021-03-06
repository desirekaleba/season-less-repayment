import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity()
export class CustomerSummary extends BaseEntity {
    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @Column({ name: 'customer_id' })
    customerId: number;

    @Column({ name: 'season_id' })
    seasonId: number;

    @Column({ name: 'total_paid', type: 'numeric', precision: 10, scale: 2 })
    totalPaid: number;

    @Column({ name: 'total_credit', type: 'numeric', precision: 10, scale: 2 })
    totalCredit: number;
}
