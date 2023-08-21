# Student Management API

A RESTful CRUD API for managing student records, built using Node.js, Express.js,  PostgreSQL, and  PG library to connect the api to the relational data-base.

## Table of Contents

- [Overview](#overview)
- [Technical Stack](#technical-stack)
- [Database Creation](#database-creation)
- [Setting Up The Server](#setting-up-the-server)
- [Connecting to the Database with pg](#connecting-to-the-database-with-pg)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)

## Overview

The API provides functionalities to manage student records. Through the provided endpoints, users can create, read, update, or delete student information.

## Technical Stack

- **Backend Framework**: Express.js
- **Runtime**: Node.js
- **Database**: PostgreSQL
- **Query Builder**: `pg` library

## Database Creation

Before the server and endpoints were set up, a PostgreSQL database was created and populated with 20 student records using Postbird. 

## Setting Up The Server

The server is initiated using Express.js, a minimalist web framework for Node.js. Express makes it easy to define routes and handle incoming requests.

## Connecting to the Database with pg

The `pg` library for Node.js was used to facilitate connections and run SQL queries against the PostgreSQL database. With `pg`, a pool of clients is maintained, allowing for optimized querying against the database.

## API Endpoints

- **GET** `/api/v1/students`: Retrieve a list of all students.
- **POST** `/api/v1/students`: Add a new student. Requires `name`, `email`, `age`, and `dob` in the request body.
- **GET** `/api/v1/students/:id`: Retrieve a student by ID.
- **PUT** `/api/v1/students/:id`: Update a student's name by ID. Requires `name` in the request body.
- **DELETE** `/api/v1/students/:id`: Delete a student by ID.

## Error Handling

The API has a centraized error handling middlware that captures all types of errors, and provides more accurate information about the error.


