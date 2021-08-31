import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Customer extends BaseEntity {
    @PrimaryGeneratedColumn({ name: 'customer_id' })
    customerId: number;

    @Column({ name: 'customer_name' })
    customerName: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}
