-- Adminer 4.7.1 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `np_product_list`;
CREATE TABLE `np_product_list` (
  `id` bigint(255) NOT NULL AUTO_INCREMENT COMMENT 'this is a primary kye',
  `pl_name` varchar(500) NOT NULL COMMENT 'product name',
  `created_date` date NOT NULL,
  `modify_date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `np_product_list` (`id`, `pl_name`, `created_date`, `modify_date`) VALUES
(1,	'Lenovo 2022',	'2021-01-16',	'2021-01-18'),
(2,	'DELL',	'2021-01-16',	'2021-01-17');

-- 2021-01-18 04:50:45
