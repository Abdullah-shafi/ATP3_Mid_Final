-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 06, 2020 at 08:38 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customer_id` int(20) NOT NULL,
  `username` varchar(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `type` varchar(200) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `email` varchar(200) NOT NULL,
  `c_image` varchar(200) NOT NULL,
  `active_posts` int(10) NOT NULL,
  `pending_posts` int(10) NOT NULL,
  `sold_posts` int(10) NOT NULL,
  `total_posts` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_id`, `username`, `name`, `password`, `type`, `phone`, `email`, `c_image`, `active_posts`, `pending_posts`, `sold_posts`, `total_posts`) VALUES
(1, 'abd', 'ab', 'ab', 'customer', '01787990813', 'abdullahshafi@gmail.', '', 1, 0, 0, 1),
(3, 'abc', 'aaaasss', 'ab', 'ac', '01787990813', 'abdullahshafi66@gmail.com', 'my_photo.JPG', 2, 1, 2, 5);

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `message_id` int(20) NOT NULL,
  `from` varchar(10) NOT NULL,
  `to` int(10) NOT NULL,
  `msg` varchar(500) NOT NULL,
  `msg_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `property`
--

CREATE TABLE `property` (
  `username` varchar(200) NOT NULL,
  `property_id` int(10) NOT NULL,
  `property_price` int(200) NOT NULL,
  `property_area` varchar(256) NOT NULL,
  `p_type` varchar(10) NOT NULL,
  `style` varchar(200) NOT NULL,
  `bed` int(10) NOT NULL,
  `bath` int(10) NOT NULL,
  `feet` int(20) NOT NULL,
  `title` varchar(200) NOT NULL,
  `floor` varchar(10) NOT NULL,
  `description` varchar(500) NOT NULL,
  `status` varchar(20) NOT NULL,
  `no_of_clicks` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `property`
--

INSERT INTO `property` (`username`, `property_id`, `property_price`, `property_area`, `p_type`, `style`, `bed`, `bath`, `feet`, `title`, `floor`, `description`, `status`, `no_of_clicks`, `date`) VALUES
('abd', 1, 1200000, 'kuril', 'Appaetment', 'Rent', 3, 3, 80, '', '', '', '', 0, '2020-03-05'),
('abc', 5, 1200033, 'bg', 'Bechelor', 'ss', 3, 3, 90, '', '', '', '', 0, '2020-03-05');

-- --------------------------------------------------------

--
-- Table structure for table `property_picture`
--

CREATE TABLE `property_picture` (
  `property_id` int(20) NOT NULL,
  `property_image_id` int(10) NOT NULL,
  `image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `property_picture`
--

INSERT INTO `property_picture` (`property_id`, `property_image_id`, `image`) VALUES
(1, 1, '1.jpg'),
(5, 2, '2.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`message_id`);

--
-- Indexes for table `property`
--
ALTER TABLE `property`
  ADD PRIMARY KEY (`property_id`);

--
-- Indexes for table `property_picture`
--
ALTER TABLE `property_picture`
  ADD PRIMARY KEY (`property_image_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `customer_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `message_id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `property`
--
ALTER TABLE `property`
  MODIFY `property_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `property_picture`
--
ALTER TABLE `property_picture`
  MODIFY `property_image_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
