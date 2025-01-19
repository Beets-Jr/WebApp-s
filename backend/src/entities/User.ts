import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  import { IsEmail } from "class-validator";

  @Entity('users')
  class User {
      @PrimaryGeneratedColumn('increment')
      id: number
  
      @Column('varchar', { length: 100, nullable: false })
      name: string;
  
      @Column('varchar', { length: 100, nullable: false, unique: true })
      @IsEmail({}, { message: "Invalid email address" })
      email: string;

      @Column('varchar', { length: 100, nullable: false })
      password: string;

      @Column('varchar', { length: 200, nullable: false })
      image: string;
  
      @CreateDateColumn()
      created_at: Date;

      @UpdateDateColumn()
      updated_at: Date;
  }
  
  export default User;