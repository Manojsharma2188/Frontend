# Employee

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## The Empployee Dairy Application in that:

Employee has id, name, designation, age, gender status. Based on role user peroform operation on employee dairy. Admin - User can create, retrieve, update, delete employee data. User - View and Upadte There is a search box for finding Employee by name.

## Login-

Login with username & password. Authorization by the role of the User (admin, user) We have 2 endpoints for authentication: api/auth/signin for User Login If Client wants to send request to protected data/endpoints, a legal JWT must be added to HTTP Authorization Header.

## Admin-

Delete the Employee using Delete button Update the Employee details with Update button Add the Employee details with Add button

## User -
Update the Employee details with Update button

Spring Boot exports REST Apis using Spring Web MVC & interacts with embedded Database using Spring Data JPA. Angular Client sends HTTP Requests and retrieve HTTP Responses, shows data on the components. We also use Angular Router for navigating to pages.

## Dependency

– If you want to use PostgreSQL:

org.postgresql postgresql runtime – or MySQL: mysql mysql-connector-java runtime
Open src/main/resources/application.properties

For PostgreSQL: spring.datasource.url= jdbc:postgresql://localhost:5432/employeeData spring.datasource.username= root spring.datasource.password=

spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation= true spring.jpa.properties.hibernate.dialect= org.hibernate.dialect.PostgreSQLDialect

Hibernate ddl auto (create, create-drop, validate, update)

spring.jpa.hibernate.ddl-auto= update

For MySQL spring.datasource.url= jdbc:mysql://localhost:3306/employeeData?useSSL=false spring.datasource.username= root spring.datasource.password=

spring.jpa.properties.hibernate.dialect= org.hibernate.dialect.MySQL5InnoDBDialect spring.jpa.hibernate.ddl-auto= update

Run Spring Boot application

mvn spring-boot:run

Run Angular App-

ng serve

## Database Quries for reference -

use employeedata;

CREATE TABLE users ( ID INT NOT NULL AUTO_INCREMENT, email VARCHAR(20), password VARCHAR(256), username VARCHAR(20), PRIMARY KEY (ID), UNIQUE KEY (EMAIL), UNIQUE KEY (username) );

CREATE TABLE roles ( ID INT NOT NULL AUTO_INCREMENT, name VARCHAR(20), PRIMARY KEY (ID) );

CREATE TABLE user_roles( USER_ID int, ROLE_ID int, FOREIGN KEY (user_id) REFERENCES user(id), FOREIGN KEY (role_id) REFERENCES role(id) );

insert into users(email,password,username) values ('doug@bailey.com','$2a$10$U2STWqktwFbvPPsfblVeIuy11vQ1S/0LYLeXQf1ZL0cMXc9HuTEA2','doug'); insert into users (email,password,username) values ('john@ferguson.com','$2a$10$YzcbPL.fnzbWndjEcRkDmO1E4vOvyVYP5kLsJvtZnR1f8nlXjvq/G', 'john');

insert into roles values(1,'ROLE_ADMIN'); insert into roles values(2,'ROLE_USER');

insert into user_roles values(1,1); insert into user_roles values(2,2);
