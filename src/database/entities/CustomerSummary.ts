import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn
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

    @Column({ name: 'total_credit' })
    totalCredit: number;

    @CreateDateColumn({ name: 'created_at', type: 'numeric', precision: 10, scale: 2 })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}
