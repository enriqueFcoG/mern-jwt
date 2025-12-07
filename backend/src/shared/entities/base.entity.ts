import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
// A base entity that includes common fields for all entities (for future extensibility)
export abstract class BaseEntity {
    
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn({ nullable: true })
    updatedAt: Date;

    @Column({ nullable: true })
    deletedAt?: Date;
}