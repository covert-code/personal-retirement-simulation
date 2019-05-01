CREATE DATABASE  IF NOT EXISTS `retirement_simulation_study` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `retirement_simulation_study`;
-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: retirement_simulation_study
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `administrators`
--

DROP TABLE IF EXISTS `administrators`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `administrators` (
  `user_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `idadministrators_UNIQUE` (`user_id`),
  CONSTRAINT `administrators_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `market_data_historical`
--

DROP TABLE IF EXISTS `market_data_historical`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `market_data_historical` (
  `mkt_year` int(10) unsigned NOT NULL,
  `mkt_return_large_cap` double NOT NULL,
  `mkt_return_small_cap` double NOT NULL,
  `mkt_return_real_estate` double NOT NULL,
  `mkt_return_international` double NOT NULL,
  `mkt_return_bonds` double NOT NULL,
  `mkt_return_cash` double NOT NULL,
  `mkt_return_gold` double NOT NULL,
  `mkt_inflation_rate` double NOT NULL,
  PRIMARY KEY (`mkt_year`),
  UNIQUE KEY `mkt_year_UNIQUE` (`mkt_year`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `participant_surveys`
--

DROP TABLE IF EXISTS `participant_surveys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `participant_surveys` (
  `user_id` int(10) unsigned NOT NULL,
  `participant_ret_age` int(10) unsigned NOT NULL,
  `participant_ret_goal` decimal(10,0) unsigned NOT NULL,
  `participant_ret_curr_savings` decimal(10,0) unsigned NOT NULL,
  `participant_ret_employer_deposit` double unsigned NOT NULL,
  `participant_ret_lifetime_concern` bit(1) NOT NULL,
  `participant_ret_ss` bit(1) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`),
  CONSTRAINT `participant_surveys_user_id` FOREIGN KEY (`user_id`) REFERENCES `participants` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `participants`
--

DROP TABLE IF EXISTS `participants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `participants` (
  `user_id` int(10) unsigned NOT NULL,
  `participant_address_1` varchar(255) NOT NULL,
  `participant_address_2` varchar(255) DEFAULT NULL,
  `participant_addr_city` varchar(40) NOT NULL,
  `participant_addr_state` varchar(2) NOT NULL,
  `participant_addr_zip` varchar(10) NOT NULL,
  `participant_birthdate` date NOT NULL,
  `participant_income` decimal(10,0) unsigned NOT NULL,
  `participant_marital` varchar(45) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_uid_UNIQUE` (`user_id`),
  CONSTRAINT `participant_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `simulation_log`
--

DROP TABLE IF EXISTS `simulation_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `simulation_log` (
  `session_id` int(10) unsigned NOT NULL,
  `log_timestamp` datetime NOT NULL,
  `log_user_inv_large_cap` double unsigned DEFAULT NULL,
  `log_user_inv_small_cap` double unsigned DEFAULT NULL,
  `log_user_inv_real_estate` double unsigned DEFAULT NULL,
  `log_user_inv_international` double unsigned DEFAULT NULL,
  `log_user_inv_bonds` double unsigned DEFAULT NULL,
  `log_user_inv_cash` double unsigned DEFAULT NULL,
  `log_user_inv_gold` double unsigned DEFAULT NULL,
  `log_newstate_mkt_year` int(10) unsigned NOT NULL,
  `log_newstate_balance` decimal(10,0) NOT NULL,
  `log_newstate_deposit_personal` decimal(10,0) unsigned NOT NULL,
  `log_newstate_deposit_work` decimal(10,0) unsigned NOT NULL,
  `log_newstate_deposit_salary` decimal(10,0) unsigned NOT NULL,
  `log_newstate_retirement_goal` decimal(10,0) unsigned NOT NULL,
  PRIMARY KEY (`session_id`),
  KEY `simulation_log_mkt_year_idx` (`log_newstate_mkt_year`),
  CONSTRAINT `simulation_log_mkt_year` FOREIGN KEY (`log_newstate_mkt_year`) REFERENCES `market_data_historical` (`mkt_year`),
  CONSTRAINT `simulation_log_session_id` FOREIGN KEY (`session_id`) REFERENCES `simulation_sessions` (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `simulation_sessions`
--

DROP TABLE IF EXISTS `simulation_sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `simulation_sessions` (
  `session_id` int(10) unsigned NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `session_active` bit(1) NOT NULL,
  PRIMARY KEY (`session_id`),
  UNIQUE KEY `session_id_UNIQUE` (`session_id`),
  KEY `simulation_sessions_user_id_idx` (`user_id`),
  CONSTRAINT `simulation_sessions_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `simulation_state`
--

DROP TABLE IF EXISTS `simulation_state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `simulation_state` (
  `session_id` int(10) unsigned NOT NULL,
  `session_year_active_num` int(10) unsigned NOT NULL,
  `session_balance` decimal(10,0) NOT NULL,
  `session_deposit_personal` decimal(10,0) unsigned NOT NULL,
  `session_deposit_work` decimal(10,0) unsigned NOT NULL,
  `session_deposit_salary` decimal(10,0) unsigned NOT NULL,
  `session_retirement_goal` decimal(10,0) unsigned NOT NULL,
  PRIMARY KEY (`session_id`),
  UNIQUE KEY `session_id_UNIQUE` (`session_id`),
  CONSTRAINT `simulation_state_session_id` FOREIGN KEY (`session_id`) REFERENCES `simulation_sessions` (`session_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `simulation_year_history`
--

DROP TABLE IF EXISTS `simulation_year_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `simulation_year_history` (
  `session_id` int(10) unsigned NOT NULL,
  `session_year` int(10) unsigned NOT NULL,
  `mkt_year` int(10) unsigned NOT NULL,
  PRIMARY KEY (`session_id`,`session_year`),
  KEY `simulation_year_history_mkt_year_idx` (`mkt_year`),
  CONSTRAINT `simulation_year_history_mkt_year` FOREIGN KEY (`mkt_year`) REFERENCES `market_data_historical` (`mkt_year`) ON UPDATE CASCADE,
  CONSTRAINT `simulation_year_history_session_id` FOREIGN KEY (`session_id`) REFERENCES `simulation_sessions` (`session_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `user_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_email` varchar(255) NOT NULL,
  `user_password` char(60) NOT NULL COMMENT 'BCrypt has no salt.',
  `user_title` varchar(20) DEFAULT NULL,
  `user_fname` varchar(60) NOT NULL,
  `user_initial` varchar(1) DEFAULT NULL,
  `user_lname` varchar(60) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_email_UNIQUE` (`user_email`),
  UNIQUE KEY `user_uid_UNIQUE` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping routines for database 'retirement_simulation_study'
--
/*!50003 DROP PROCEDURE IF EXISTS `create_user` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `create_user`(
	IN new_user_email varchar(255),
    IN new_user_password char(60),
    IN new_user_title varchar(20),
    IN new_user_fname varchar(60),
    IN new_user_initial varchar(1),
    IN new_user_lname varchar(60)
)
BEGIN
insert into retirement_simulation_study.users (
	user_email,
    user_password,
    user_title,
    user_fname,
    user_initial,
    user_lname
) values (
	new_user_email,
	new_user_password,
	new_user_title,
	new_user_fname,
	new_user_initial,
	new_user_lname
);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `exists_user` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `exists_user`(
	IN test_user_email varchar(255)
)
BEGIN
declare p_user_exists bool;
set p_user_exists = exists(
	select * from retirement_simulation_study.users
    where user_email = test_user_email
);
select p_user_exists;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-01  5:41:13
