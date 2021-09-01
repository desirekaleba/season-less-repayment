import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm';

@Entity()
export class Customer extends BaseEntity {
    @PrimaryGeneratedColumn({ name: 'customer_id' })
    customerId: number;

    @Column({ name: 'customer_name' })
    customerName: string;
}
