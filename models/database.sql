CREATE DATABASE personalbudget;

CREATE TABLE bankaccounts(
    account_id SERIAL PRIMARY KEY,
    account_name VARCHAR(255) NOT NULL,
    account_type VARCHAR(255) NOT NULL,
    account_balance MONEY NOT NULL,
    account_date DATE NOT NULL
);

INSERT INTO bankaccounts(
    account_id, account_name, account_type, account_balance, account_date)
    VALUES(
        1, 'SECU', 'Savings', 500, '2023-04-26'
    ), (
        2, 'FHB', 'Checking', 2231.65, '2023-04-26'
    ), (
        3, 'Apple', 'Credit Card', -1441.97, '2023-04-26'
    ), (
        4, 'Chase', 'Credit Card', -352.85, '2023-04-26'
    );