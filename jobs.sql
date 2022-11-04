-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 25, 2022 at 12:28 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jobs`
--

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `ID` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Location` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`ID`, `Name`, `Location`) VALUES
(1, 'Name', 'Location'),
(3, 'Airbase Makeup', '77A Windsor Street, Beeston, Nottingham, NG9 2BW'),
(5, 'AvailableCar Donington', 'Station Road, Castle Donington, Derbyshire, DE74 2NL'),
(6, 'AvailableCar Leeds', 'Capitol Boulevard, Capitol Park West, Leeds, LS27 0TS'),
(7, 'AvailableCar Sutton', 'Calladine Business Park, Orchard Way, Sutton-In-Ashfield, NG17 1JU'),
(8, 'Boden Associates', 'Barton House, 61 High Road, Chilwell, Nottingham, NG9 4AJ'),
(9, 'Carlingo', ''),
(10, 'Community Recording Studio', ''),
(11, 'Creative Minds', ''),
(12, 'Designer Glass', 'Rutland Lnd Park, Abbey Street, Ilkeston, DE7 8DN'),
(13, 'Drapes', 'Leopold Mill, Leopold Street, Lond Eaton, Nottinghamshire, NG10 4QD'),
(14, 'Empire Scaffolding', ''),
(15, 'EMPM', '6 Denman Court, Quarry Hill Industrial Estate, Ilkeston, DE7 4RA'),
(16, 'Emtel', ''),
(17, 'Far UK', ''),
(18, 'Forever Young (SWA Design)', ''),
(19, 'Fred Lamb', '233 Hickings Lane, Stapleford, Nottinghamshire, NG9 8PJ\r\n'),
(20, 'G.S.Couriers', 'The Clocktower, Oark Road, Bestwood, Nottingham, NG6 8TQ'),
(21, 'Grey Willow', 'Hodsons Barn, The Old Coach Yard, Navenby, Lincs, LN5 0TU'),
(22, 'H3 Performance', 'Longden Street, Nottingham, NG3 1JN'),
(23, 'Henpicked (SWA Design)', ''),
(24, 'Home Moovers', ''),
(25, 'HSC Nottingham', ''),
(26, 'JSM Engineering Ltd', '23 Glaisdale Drive East, Nottingham, NG8 4GU'),
(27, 'JT Services', '125 Park Lane, Basford, Nottingham, NG6 0DT'),
(28, 'L.R.S.', 'Unit 9-10 Belton Lane Industrial Estate, Belton Road, Grantham, NG31 9HN'),
(29, 'Mercy Care Centre', 'Highfields Park Drive, Broadway, Derby, DE22 1JX'),
(30, 'Mr Pitchforks Pickles', 'Lenton Business Centre, Unit W47, Lenton Boulevard, Nottingham, NG7 2BY'),
(31, 'Nanny Tots', '189 Wollaton Road, Beeston, Nottinghamshire, NG9 2PN'),
(32, 'Nottingham Textiles (AC Gill)', 'NTG House, Willow Road, Lenton, Nottingham, NG7 2TA'),
(33, 'Onyc Consulting', ''),
(34, 'Perfume Studio', ''),
(35, 'PowerPlus Group', ''),
(36, 'Price, Whiting Hodgson', '5 Avenue Road, Grantham, Lincs, NG31 6TA'),
(37, 'Proctors', 'Unit 5A and 5B Langar Industrial Estate South, Harby Road, Langar, Notts, NG13 9HY'),
(38, 'Profit Box', ''),
(39, 'ProGrass', ''),
(40, 'Projet', ''),
(41, 'PT7 / KLA', ''),
(42, 'Radium Lamps', 'Unit 1, Winterbeck Industrial Estate, Orston Lane, Bottesford, Nottinghamshire, NG13 0AU'),
(43, 'Red Court Care (Grantham)', '12 St Edmunds Close, Grantham, Lincs, NG31 8SA'),
(44, 'Red Roofs Care (Newark)', '35A Grange Road, Newark, NG24 4LH'),
(45, 'Red Rose Care (Farndon)', '32 Brockton Avenue, Farndon, Newark, NG24 4TH'),
(46, 'Robert Holland', '14 St Catherines Road, Grantham, Lincs, NG31 6TS'),
(47, 'Robert Holland (Home)', ''),
(48, 'Rushcliffe Fencing', '28 Leake Road, Gotham, Nottingham, NG11 0JL'),
(49, 'SGM Financial', ''),
(50, 'Silverfern', 'Minister Chambers, Church Street, Southwell, Nottinghamshire, NG25 0HD'),
(51, 'The Wedding Room', ''),
(52, 'Thor Foods', 'Kingsley House, Frieston, Grantham, Lincs, NG32 3BY'),
(53, 'Trentside Fixings', '2 Finch Close, Nottingham, NG7 2NN'),
(54, 'Utility Care', '3b Pelham Court, Pelham Road, Nottingham, NG5 1AP'),
(55, 'V & M Management (TFN)', ''),
(56, 'I love trains', '1 stianmore'),
(57, 'I love trains', '1 stianmore');

-- --------------------------------------------------------

--
-- Table structure for table `engineers`
--

CREATE TABLE `engineers` (
  `ID` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `engineers`
--

INSERT INTO `engineers` (`ID`, `Name`) VALUES
(1, 'Ash'),
(3, 'Ben'),
(4, 'Billy'),
(5, 'Dean\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `ID` int(11) NOT NULL,
  `Date` date NOT NULL,
  `Client` mediumtext NOT NULL,
  `ponumber` mediumtext NOT NULL,
  `Days` int(11) NOT NULL,
  `Hours` float NOT NULL,
  `Engineers` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`Engineers`)),
  `JobDetails` mediumtext NOT NULL,
  `Expenses` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`Expenses`)),
  `Equipment` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`Equipment`)),
  `InvoiceNumber` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`ID`, `Date`, `Client`, `ponumber`, `Days`, `Hours`, `Engineers`, `JobDetails`, `Expenses`, `Equipment`, `InvoiceNumber`) VALUES
(37, '2022-08-20', 'AvailableCar Donington', '1', 1, 1, '[\"Ben\",\"Jack\",\"\",\"\"]', 'werfqwef', '[\"3.60\",\"0.00\",\"0.00\",\"0.00\",\"0.00\"]', '[[\"dell\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"]]', 0),
(38, '2022-08-20', 'AvailableCar Donington', '1', 1, 1, '[\"Ben\",\"\",\"\",\"\"]', 'werfqwef', '[\"3.60\",\"0.00\",\"0.00\",\"0.00\",\"0.00\"]', '[[\"dell\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"]]', 0),
(39, '2022-08-26', 'AvailableCar Leeds', '1', 1, 1, '[\"Ben\",\"Dean\\n\",\"\",\"\"]', 'efqwer', '[\"3.60\",\"0.00\",\"0.00\",\"0.00\",\"0.00\"]', '[[\"dell optiplex 3090\",\"N\\/A\",\"0\",\"549\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"]]', 0),
(40, '2022-08-26', 'AvailableCar Leeds', '1', 1, 1, '[\"Ben\",\"Dean\\n\",\"\",\"\"]', 'efqwer', '[\"3.60\",\"0.00\",\"0.00\",\"0.00\",\"0.00\"]', '[[\"dell optiplex 3090\",\"N\\/A\",\"0\",\"549\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"]]', 0),
(41, '2022-08-11', 'AvailableCar Cannock', '1', 1, 1, '[\"Ash\",\"\",\"\",\"\"]', '123', '[\"3.60\",\"0.00\",\"0.00\",\"0.00\",\"0.00\"]', '[[\"dell optiplex 3090\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"]]', 0),
(42, '2022-08-11', 'AvailableCar Donington', '1', 1, 1, '[\"Ben\",\"Dean\\n\",\"\",\"\"]', 'e3e', '[\"3.60\",\"0.00\",\"0.00\",\"0.00\",\"12.00\"]', '[[\"erwer\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"]]', 0),
(43, '2022-08-13', '', '1', 1, 1, '[\"Billy\",\"\",\"\",\"\"]', 'i am gay', '[\"3.60\",\"0.00\",\"0.00\",\"0.00\",\"0.00\"]', '[[\"2rtr\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"]]', 0),
(44, '2022-09-01', 'AvailableCar Sutton', '', 1, 1, '[\"Ash\",\"\",\"\",\"Ben\"]', 'qergwergwergwerg', '[\"3.60\",\"0.00\",\"0.00\",\"0.00\",\"0.00\"]', '[[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"]]', 0),
(45, '2022-08-17', 'AvailableCar Leeds', '', 1, 1, '[\"Ash\",\"Dean\\n\",\"Billy\",\"\"]', 'erwerywe', '[\"3.60\",\"0.00\",\"0.00\",\"0.00\",\"0.00\"]', '[[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"]]', 0),
(46, '2022-08-24', 'AvailableCar Leeds', '', 1, 1, '[\"Billy\",\"Jack\",\"Ash\",\"\"]', 'twertwert', '[\"3.60\",\"0.00\",\"0.00\",\"0.00\",\"0.00\"]', '[[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"],[\"\",\"N\\/A\",\"0\",\"0\"]]', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `engineers`
--
ALTER TABLE `engineers`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `engineers`
--
ALTER TABLE `engineers`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
