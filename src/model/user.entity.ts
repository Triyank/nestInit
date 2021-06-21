import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';


@Entity({ name: 'user' })
export class Users {
    @PrimaryGeneratedColumn({type: 'int'})
    id: number;

    @Column({ type: 'varchar'})
    name: string;

    @Column({ type: 'varchar'})
    password: string;

    @Column({ type: 'varchar'})
    email: string;

    @Column({ type: 'varchar'})
    username: string;
}