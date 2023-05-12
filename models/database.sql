CREATE DATABASE personalbudget;


-- bankaccounts table
CREATE TABLE bankaccounts(
    account_id SERIAL PRIMARY KEY,
    account_name VARCHAR(255),
    account_type VARCHAR(255),
    balance MONEY,
    account_date DATE
);

INSERT INTO bankaccounts(
    account_id, account_name, account_type, balance, account_date)
    VALUES(
        1, 'SECU', 'Savings', 500, '2023-04-26'
    ), (
        2, 'FHB', 'Checking', 2231.65, '2023-04-26'
    ), (
        3, 'Apple', 'Credit Card', -1441.97, '2023-04-26'
    ), (
        4, 'Chase', 'Credit Card', -352.85, '2023-04-26'
    );

-- income table
CREATE TABLE income(
    income_id SERIAL PRIMARY KEY,
    income_source VARCHAR(255),
    income_amount MONEY,
    income_date DATE
);

INSERT INTO income(
    income_id, income_source, income_amount, income_date)
    VALUES(
        1, 'Unemployment', 1468, '2023-05-12'
);


-- expenses table
CREATE TABLE expenses(
    expense_id SERIAL PRIMARY KEY,
    expense_expense VARCHAR(255),
    expense_amount MONEY,
    expense_date DATE
);

INSERT INTO expenses(
    expense_id, expense_expense, expense_amount, expense_date)
    VALUES(
        1, 'Electricity', 250, '2023-05-18'
);
