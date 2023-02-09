# Problem statement

Company X wants an application to store the GPS data of their devices and provide insights
from this data. This is the expected user experience:
Login page → GPS Summary page

# Input Data

# Import the sample GPS data collected at intervals of 5 min to RDBMS store (SQL).

# All timestamps are in the same time zone.

<!-- DeviceId Device Type Timestamp location
D-1567 Aircraft 31-08-2022 10:05 L1
D-1567 Aircraft 31-08-2022 10:10 L1
D-1567 Aircraft 31-08-2022 10:15 L1
D-1567 Aircraft 31-08-2022 10:20 L1
D-1567 Aircraft 31-08-2022 10:25 L2
D-1568 Personal 31-08-2022 10:05 L3
D-1568 Personal 31-08-2022 10:10 L3
D-1568 Personal 31-08-2022 10:15 L3
D-1568 Personal 31-08-2022 10:20 L3
D-1568 Personal 31-08-2022 10:25 L3
D-1569 Asset 31-08-2022 10:15 L4
D-1569 Asset 31-08-2022 10:20 L4
D-1569 Asset 31-08-2022 10:25 L1
D-1569 Asset 31-08-2022 10:30 L1
D-1569 Asset 31-08-2022 10:35 L2
D-1570 Personal 31-08-2022 10:35 L5
D-1571 Asset 31-08-2022 10:35 L6 -->

## Scenarios:

# Login page

1. User creation
2. Take username and password from user and store in database.
3. User login
4. Validate user credentials and allow login.

# Screenshot

![login](https://res.cloudinary.com/mcaprojectnitjsr/image/upload/v1665258554/pensive/p1_yvmi4q.png "login")
![signup](https://res.cloudinary.com/mcaprojectnitjsr/image/upload/v1665258555/pensive/p3_jwir64.png "signup")
![GPSSummary](https://res.cloudinary.com/mcaprojectnitjsr/image/upload/v1665287580/pensive/p3_pkjbat.png "GPSSummary")

# Technologies used

1. Frontend (FE): React.JS
2. Backend (BE): Node.JS
3. FE & BE communicate through REST APIs.
4. Database: RDBMS (MySql)

# Inserting Data Of GPSSummaries

INSERT INTO test.gpssummaries
(deviceId, deviceType, `timeStamp`, location)
VALUES

1. ('D-1567', 'Aircraft', '2022-08-31 10:05:00', 'L1'),
2. ('D-1567', 'Aircraft', '2022-08-31 10:10:00', 'L1'),
3. ('D-1567', 'Aircraft', '2022-08-31 10:15:00', 'L1'),
4. ('D-1567', 'Aircraft', '2022-08-31 10:20:00', 'L1'),
5. ('D-1567', 'Aircraft', '2022-08-31 10:25:00', 'L2'),
6. ('D-1568', 'Personal', '2022-08-31 10:05:00', 'L3'),
7. ('D-1568', 'Personal', '2022-08-31 10:10:00', 'L3'),
8. ('D-1568', 'Personal', '2022-08-31 10:15:00', 'L3'),
9. ('D-1568', 'Personal', '2022-08-31 10:20:00', 'L3'),
10. ('D-1568', 'Personal', '2022-08-31 10:25:00', 'L3'),
11. ('D-1569', 'Asset', '2022-08-31 10:15:00', 'L4'),
12. ('D-1569', 'Asset', '2022-08-31 10:20:00', 'L4'),
13. ('D-1569', 'Asset', '2022-08-31 10:25:00', 'L1'),
14. ('D-1569', 'Asset', '2022-08-31 10:30:00', 'L1'),
15. ('D-1569', 'Asset', '2022-08-31 10:35:00', 'L2'),
16. ('D-1570', 'Personal', '2022-08-31 10:35:00', 'L5'),
17. ('D-1571', 'Asset', '2022-08-31 10:35:00', 'L6');

# To Run this Application

1. Open Terminal and change directory separately for Backend and FrontEnd
2. Type yarn install in both and press enter.
3. After that type yarn start to run project

# To setup Mysql

write all requirement of MYSQL in .env file to connect.
