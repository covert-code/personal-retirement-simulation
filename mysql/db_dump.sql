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
  CONSTRAINT `administrators_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrators`
--

LOCK TABLES `administrators` WRITE;
/*!40000 ALTER TABLE `administrators` DISABLE KEYS */;
/*!40000 ALTER TABLE `administrators` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `market_data_historical`
--

DROP TABLE IF EXISTS `market_data_historical`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `market_data_historical` (
  `mkt_year` int(10) NOT NULL,
  `mkt_return_large_cap` double NOT NULL,
  `mkt_return_small_cap` double NOT NULL,
  `mkt_return_real_estate` double NOT NULL,
  `mkt_return_international` double NOT NULL,
  `mkt_return_bonds` double NOT NULL,
  `mkt_return_cash` double NOT NULL,
  `mkt_return_gold` double NOT NULL,
  `mkt_inflation_rate` double NOT NULL,
  PRIMARY KEY (`mkt_year`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `market_data_historical`
--

LOCK TABLES `market_data_historical` WRITE;
/*!40000 ALTER TABLE `market_data_historical` DISABLE KEYS */;
INSERT INTO `market_data_historical` VALUES (1970,1.03748993553627,0.956254051307324,0.997406742469579,0.854741465362348,1.16322715526276,1.0675770289466,1.05928360915892,1.05570291777188),(1971,1.14140549165138,1.22500969675828,1.15848793137842,1.31529724750226,1.07526613921369,1.04523419662502,1.16429098468382,1.03266331658291),(1972,1.18828574436109,1.08601273488799,1.07729902254139,1.38836676332883,1.03126074684328,1.03917623533724,1.48379909726029,1.03406326034063),(1973,0.851919346110466,0.675594595113262,0.84263832284371,0.884522687430006,1.03790643631957,1.06799144436479,1.72527079835081,1.08705882352941),(1974,0.734299477488973,0.724046443068194,0.783934373368967,0.803003097925869,1.04890867308275,1.07910022640061,1.65732661664325,1.12337662337662),(1975,1.37036679130972,1.5477428105208,1.18987898613632,1.30781444068892,1.07051699127919,1.06030394737826,0.750135385397097,1.06936416184971),(1976,1.23753836887712,1.45359266568853,1.47209587937188,1.0214552766007,1.15426859710434,1.04968896498229,0.956610256888972,1.04864864864865),(1977,0.92158,1.15412605204201,1.22100972694308,1.15927911612195,1.02882009166182,1.05131783065984,1.2233357127627,1.06701030927835),(1978,1.0587145,1.17306860071709,1.10050888196543,1.31188789990793,1.01241807006558,1.07017923387847,1.3666954166569,1.09017713365539),(1979,1.1804743,1.42812936713915,1.35503936467418,1.09224047445011,1.01776622141393,1.10213441872739,2.31280206563238,1.13293943870015),(1980,1.3191568,1.38347465789649,1.24046357044721,1.23243390241884,1.02551290854133,1.11595676144113,1.12276560507129,1.1251629726206),(1981,0.947942,1.01844014477103,1.05727883353385,0.959689138909191,1.06089382891573,1.14981160274282,0.672276582196594,1.08922363847045),(1982,1.2097211,1.24722363469742,1.21285312851072,0.985186841272149,1.32422523067925,1.11367622143788,1.1556015621324,1.03829787234043),(1983,1.2129289,1.28900031529606,1.30297314092031,1.2361381088146,1.08195831428272,1.08620856431202,0.82833090996721,1.03790983606557),(1984,1.0621232,0.92533030031881,1.20613665956253,1.02762282761155,1.14974657781252,1.09865448084118,0.80421331608218,1.03948667324778),(1985,1.3122808,1.30809851101752,1.18787699709345,1.50522832741679,1.21919873473935,1.07603345701866,1.05736307948908,1.03798670465337),(1986,1.1806083,1.05489386750685,1.18848848572953,1.65017317953222,1.15092090503573,1.06076895524398,1.18675160324403,1.01097895699909),(1987,1.047053,0.910352774146257,0.961095163357782,1.24014898445513,1.0114053,1.05751217183656,1.2420081483534,1.04434389140271),(1988,1.1621994,1.24793034834182,1.13192136750538,1.27158564782595,1.073813,1.06511320324649,0.845850669751978,1.04419410745234),(1989,1.3136494,1.16053818184407,1.08558908968574,1.1138550064307,1.1369684,1.08262367737425,0.968565188733404,1.04647302904564),(1990,0.9667533,0.818729,0.84429314563162,0.768175595771869,1.0864814,1.07669492543589,0.966474153060361,1.06106264869151),(1991,1.3022153,1.4525944,1.35343919131832,1.13295892567876,1.1524739,1.05633813409316,0.912140013001237,1.03064275037369),(1992,1.0742328,1.1820273,1.14292558391577,0.885162168893343,1.0713927,1.03355510943415,0.940306536710837,1.02900652646846),(1993,1.0989239,1.1870362,1.19344345890815,1.34125882614079,1.0968232,1.0299216,1.17388046301082,1.02748414376321),(1994,1.0117592,0.9949211,1.02903150707064,1.06017081579932,0.9734401,1.0398754,0.975862831752781,1.02674897119342),(1995,1.3744574,1.2874006,1.14968021746649,1.0930268434122,1.1818152,1.0566213,1.00726656938866,1.02538410153641),(1996,1.22877,1.1811808,1.34915870143177,1.0606267462506,1.0358002,1.0525643,0.95214160979979,1.03322475570033),(1997,1.3319051,1.2459029,1.18773,0.9922636,1.0944208,1.0529352,0.783639169536905,1.01702395964691),(1998,1.286171,0.9738667,0.8367552,1.1560284,1.0858218,1.0518404,0.98925669973928,1.01611903285803),(1999,1.2106845,1.2313292,0.9596068,1.2991922,0.9924143,1.0473976,1.00599786149636,1.02684563758389),(2000,0.9094384,0.9733495,1.2634829,0.843858,1.1139285,1.0598725,0.943206153436392,1.03386809269162),(2001,0.8797686,1.0310001,1.1235464,0.7984695,1.0842821,1.0415931,1.00495709169416,1.01551724137931),(2002,0.7785489,0.7997735,1.0375423,0.8491727,1.08258,1.0168658,1.25256479055526,1.02376910016978),(2003,1.2850192,1.4562812,1.3565495,1.4033935,1.0397353,1.0099134,1.19588701058414,1.0187949143173),(2004,1.1074022,1.1989642,1.3075949,1.2083684,1.0423717,1.0117927,1.04387679450024,1.03255561584373),(2005,1.0477444,1.0736353,1.1189023,1.1557106,1.023957,1.0294297,1.17474907771893,1.03415659485024),(2006,1.1564165,1.1563735,1.3506987,1.2663694,1.0426873,1.0470536,1.22330097087379,1.02540650406504),(2007,1.0538668,1.0115575,0.8353922,1.1552229,1.0692174,1.0476396,1.30952380952381,1.04081268582755),(2008,0.629793,0.6392969,0.6295336,0.5589918,1.0505267,1.0210426,1.05454545454545,1.00091412900646),(2009,1.2648558,1.3611824,1.2957592,1.367267,1.0593461,1.0024923,1.23448275862069,1.02721331126206),(2010,1.1491373,1.2771992,1.2830477,1.1112092,1.0642151,1.0001144,1.27932960893855,1.01495723527314),(2011,1.0196601,0.9719586,1.0846558,0.8543558,1.0755792,1.0001585,1.08660844250364,1.02962418844871),(2012,1.1582468,1.1804439,1.175255,1.1814151,1.0404799,1.0001624,1.08372404554588,1.01741022368748),(2013,1.3217554,1.3761921,1.0230633,1.1504498,0.9773762,1.0001204,0.720642768850433,1.01501735619618),(2014,1.1350851,1.0736785,1.3013281,0.9576231,1.057578,1.0001,0.995711835334477,1.00756493269656),(2015,1.0124834,0.9621912,1.0221815,0.9562649,1.0029859,1.0002139,0.882859603789836,1.00729519786042),(2016,1.11816973432974,1.18173373355318,1.0833878394545,1.04652627872744,1.02497536970184,1.00254861704851,1.08878048780488,1.02074622132967),(2017,1.2166767303355,1.16101286498924,1.04825801429179,1.27395765602124,1.03461356730481,1.00795776139752,1.11559139784946,1.02109082474568);
/*!40000 ALTER TABLE `market_data_historical` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `market_data_historical_AFTER_INSERT` AFTER INSERT ON `market_data_historical` FOR EACH ROW BEGIN

UPDATE retirement_simulation_study.table_metadata
SET table_metadata.tb_count = table_metadata.tb_count + 1
WHERE table_metadata.tb_name = 'market_data_historical';

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `market_data_historical_AFTER_DELETE` AFTER DELETE ON `market_data_historical` FOR EACH ROW BEGIN

UPDATE retirement_simulation_study.table_metadata
SET table_metadata.tb_count = table_metadata.tb_count - 1
WHERE table_metadata.tb_name = 'market_data_historical';

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `simulation_log`
--

DROP TABLE IF EXISTS `simulation_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `simulation_log` (
  `log_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `log_timestamp` datetime NOT NULL,
  `session_id` int(10) unsigned NOT NULL,
  `log_user_inv_large_cap` double unsigned DEFAULT NULL,
  `log_user_inv_small_cap` double unsigned DEFAULT NULL,
  `log_user_inv_real_estate` double unsigned DEFAULT NULL,
  `log_user_inv_international` double unsigned DEFAULT NULL,
  `log_user_inv_bonds` double unsigned DEFAULT NULL,
  `log_user_inv_cash` double unsigned DEFAULT NULL,
  `log_user_inv_gold` double unsigned DEFAULT NULL,
  `log_newstate_mkt_year` int(10) NOT NULL,
  `log_newstate_large_cap` decimal(15,2) unsigned DEFAULT NULL,
  `log_newstate_small_cap` decimal(15,2) unsigned DEFAULT NULL,
  `log_newstate_real_estate` decimal(15,2) unsigned DEFAULT NULL,
  `log_newstate_international` decimal(15,2) unsigned DEFAULT NULL,
  `log_newstate_bonds` decimal(15,2) unsigned DEFAULT NULL,
  `log_newstate_cash` decimal(15,2) unsigned DEFAULT NULL,
  `log_newstate_gold` decimal(15,2) unsigned DEFAULT NULL,
  `log_newstate_returns` decimal(15,2) GENERATED ALWAYS AS (((((((`log_newstate_large_cap` + `log_newstate_small_cap`) + `log_newstate_real_estate`) + `log_newstate_international`) + `log_newstate_bonds`) + `log_newstate_cash`) + `log_newstate_gold`)) STORED,
  `log_newstate_deposit_personal` decimal(15,2) unsigned NOT NULL,
  `log_newstate_deposit_work` decimal(15,2) unsigned NOT NULL,
  `log_newstate_deposit_salary` decimal(15,2) unsigned NOT NULL,
  `log_newstate_balance` decimal(15,2) NOT NULL DEFAULT '0.00',
  `log_newstate_retirement_goal` decimal(15,2) unsigned NOT NULL,
  PRIMARY KEY (`log_id`),
  KEY `simulation_log_mkt_year_idx` (`log_newstate_mkt_year`),
  KEY `simulation_log_session_id_idx` (`session_id`),
  CONSTRAINT `simulation_log_mkt_year` FOREIGN KEY (`log_newstate_mkt_year`) REFERENCES `market_data_historical` (`mkt_year`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `simulation_log_session_id` FOREIGN KEY (`session_id`) REFERENCES `simulation_sessions` (`session_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `simulation_log`
--

LOCK TABLES `simulation_log` WRITE;
/*!40000 ALTER TABLE `simulation_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `simulation_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `simulation_sessions`
--

DROP TABLE IF EXISTS `simulation_sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `simulation_sessions` (
  `session_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `session_active` bit(1) NOT NULL,
  PRIMARY KEY (`session_id`),
  KEY `simulation_sessions_user_id_idx` (`user_id`),
  CONSTRAINT `simulation_sessions_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `simulation_sessions`
--

LOCK TABLES `simulation_sessions` WRITE;
/*!40000 ALTER TABLE `simulation_sessions` DISABLE KEYS */;
/*!40000 ALTER TABLE `simulation_sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `simulation_state`
--

DROP TABLE IF EXISTS `simulation_state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `simulation_state` (
  `session_id` int(10) unsigned NOT NULL,
  `session_year_active_num` int(10) NOT NULL,
  `session_balance` decimal(15,2) NOT NULL,
  `session_deposit_personal` decimal(15,2) unsigned NOT NULL,
  `session_deposit_work` decimal(15,2) unsigned NOT NULL,
  `session_deposit_salary` decimal(15,2) unsigned NOT NULL,
  `session_retirement_goal` decimal(15,2) unsigned NOT NULL,
  PRIMARY KEY (`session_id`),
  CONSTRAINT `simulation_state_session_id` FOREIGN KEY (`session_id`) REFERENCES `simulation_sessions` (`session_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `simulation_state`
--

LOCK TABLES `simulation_state` WRITE;
/*!40000 ALTER TABLE `simulation_state` DISABLE KEYS */;
/*!40000 ALTER TABLE `simulation_state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `simulation_year_history`
--

DROP TABLE IF EXISTS `simulation_year_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `simulation_year_history` (
  `session_id` int(10) unsigned NOT NULL,
  `session_year` int(10) NOT NULL,
  `mkt_year` int(10) NOT NULL,
  PRIMARY KEY (`session_id`,`session_year`),
  KEY `simulation_year_history_mkt_year_idx` (`mkt_year`),
  CONSTRAINT `simulation_year_history_mkt_year` FOREIGN KEY (`mkt_year`) REFERENCES `market_data_historical` (`mkt_year`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `simulation_year_history_session_id` FOREIGN KEY (`session_id`) REFERENCES `simulation_sessions` (`session_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `simulation_year_history`
--

LOCK TABLES `simulation_year_history` WRITE;
/*!40000 ALTER TABLE `simulation_year_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `simulation_year_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `survey_participants`
--

DROP TABLE IF EXISTS `survey_participants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `survey_participants` (
  `user_id` int(10) unsigned NOT NULL,
  `survey_pd_preseed` bit(1) NOT NULL DEFAULT b'0',
  `survey_pd_address_1` varchar(255) NOT NULL,
  `survey_pd_address_2` varchar(255) DEFAULT NULL,
  `survey_pd_addr_city` varchar(40) NOT NULL,
  `survey_pd_addr_state` varchar(2) NOT NULL,
  `survey_pd_addr_zip` varchar(10) NOT NULL,
  `survey_pd_birthdate` date NOT NULL,
  `survey_pd_income` decimal(15,2) unsigned NOT NULL,
  `survey_pd_marital` varchar(45) NOT NULL,
  PRIMARY KEY (`user_id`),
  CONSTRAINT `participant_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `survey_participants`
--

LOCK TABLES `survey_participants` WRITE;
/*!40000 ALTER TABLE `survey_participants` DISABLE KEYS */;
/*!40000 ALTER TABLE `survey_participants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `survey_retirement`
--

DROP TABLE IF EXISTS `survey_retirement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `survey_retirement` (
  `user_id` int(10) unsigned NOT NULL,
  `survey_rt_preseed` bit(1) NOT NULL DEFAULT b'0',
  `survey_rt_age` int(10) unsigned NOT NULL,
  `survey_rt_goal` decimal(15,2) unsigned NOT NULL,
  `survey_rt_curr_savings` decimal(15,2) unsigned NOT NULL,
  `survey_rt_employer_deposit` double unsigned NOT NULL,
  `survey_rt_lifetime_concern` bit(1) NOT NULL,
  `survey_rt_ss` bit(1) NOT NULL,
  PRIMARY KEY (`user_id`),
  CONSTRAINT `participant_surveys_user_id` FOREIGN KEY (`user_id`) REFERENCES `survey_participants` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `survey_retirement`
--

LOCK TABLES `survey_retirement` WRITE;
/*!40000 ALTER TABLE `survey_retirement` DISABLE KEYS */;
/*!40000 ALTER TABLE `survey_retirement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `table_metadata`
--

DROP TABLE IF EXISTS `table_metadata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `table_metadata` (
  `tb_name` char(45) NOT NULL,
  `tb_count` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`tb_name`),
  UNIQUE KEY `table_name_UNIQUE` (`tb_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `table_metadata`
--

LOCK TABLES `table_metadata` WRITE;
/*!40000 ALTER TABLE `table_metadata` DISABLE KEYS */;
INSERT INTO `table_metadata` VALUES ('market_data_historical',48),('users',0);
/*!40000 ALTER TABLE `table_metadata` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_session_tokens`
--

DROP TABLE IF EXISTS `user_session_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user_session_tokens` (
  `token_client_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `token_auth_code` char(40) NOT NULL,
  `token_time_create` datetime NOT NULL,
  `token_time_last` datetime NOT NULL,
  PRIMARY KEY (`token_client_id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `user_session_tokens_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_session_tokens`
--

LOCK TABLES `user_session_tokens` WRITE;
/*!40000 ALTER TABLE `user_session_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_session_tokens` ENABLE KEYS */;
UNLOCK TABLES;

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
  `user_password_salt` char(29) GENERATED ALWAYS AS (substr(`user_password`,1,29)) STORED,
  `user_title` varchar(20) DEFAULT NULL,
  `user_fname` varchar(60) NOT NULL,
  `user_initial` varchar(1) DEFAULT NULL,
  `user_lname` varchar(60) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_email_UNIQUE` (`user_email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `users_AFTER_INSERT` AFTER INSERT ON `users` FOR EACH ROW BEGIN

UPDATE retirement_simulation_study.table_metadata
SET table_metadata.tb_count = table_metadata.tb_count + 1
WHERE table_metadata.tb_name = 'users';

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `users_AFTER_DELETE` AFTER DELETE ON `users` FOR EACH ROW BEGIN

UPDATE retirement_simulation_study.table_metadata
SET table_metadata.tb_count = table_metadata.tb_count - 1
WHERE table_metadata.tb_name = 'users';

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Dumping routines for database 'retirement_simulation_study'
--
/*!50003 DROP FUNCTION IF EXISTS `auth_admin` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `auth_admin`(
	user_id int(10)
) RETURNS int(10)
    READS SQL DATA
BEGIN

DECLARE admin_user_id int(10) unsigned;

SELECT administrators.user_id INTO admin_user_id
FROM retirement_simulation_study.administrators
WHERE administrators.user_id = user_id
LIMIT 1;

RETURN admin_user_id;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `auth_session_id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `auth_session_id`(
	token_client_id int(10) unsigned,
    token_auth_code char(40)
) RETURNS int(10)
    READS SQL DATA
BEGIN

DECLARE user_id int(10) unsigned;

/* Query user_session_tokens table for auth */
SELECT
    user_session_tokens.user_id INTO user_id
FROM
    retirement_simulation_study.user_session_tokens
WHERE
    user_session_tokens.token_client_id = token_client_id
	AND user_session_tokens.token_auth_code = token_auth_code
LIMIT 1;

/* Update timestamp */
UPDATE retirement_simulation_study.user_session_tokens
SET user_session_tokens.token_time_last = now()
WHERE user_session_tokens.user_id = user_id;

/* Return result */
RETURN user_id;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `auth_user_id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `auth_user_id`(
	user_email varchar(255),
    user_password varchar(60)
) RETURNS int(10)
    READS SQL DATA
BEGIN

DECLARE user_id int(10) unsigned;

/* Query users table for auth */
SELECT 
    users.user_id INTO user_id
FROM
    retirement_simulation_study.users
WHERE
    users.user_email = user_email
        AND users.user_password = user_password
LIMIT 1;

RETURN user_id;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `simulation_next_year` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `simulation_next_year`(
	session_id INT(10) unsigned
) RETURNS int(10)
    READS SQL DATA
BEGIN

DECLARE next_mkt_year INT(10);

SELECT
	mkt_year INTO next_mkt_year
FROM
	(
		SELECT mkt_year FROM
		retirement_simulation_study.market_data_historical
		WHERE mkt_year NOT IN (
			SELECT mkt_year FROM
			retirement_simulation_study.simulation_year_history
			WHERE simulation_year_history.session_id = session_id
		)
	) AS remaining_years
ORDER BY rand()
LIMIT 1;

RETURN next_mkt_year;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `auth_login` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `auth_login`(
	IN user_email varchar(255),
    IN user_password char(60)
)
BEGIN

DECLARE user_id int(10) unsigned;
SET user_id = auth_user_id(user_email, user_password);

IF (user_id IS NOT NULL)
THEN
	INSERT INTO retirement_simulation_study.user_session_tokens
	(
		token_auth_code,
		user_id,
        token_time_create,
        token_time_last
    )
	VALUES
    (
		sha1(random_bytes(40)),
		user_id,
        now(), now()
    );

	SELECT
		token_client_id,
		token_auth_code
	FROM retirement_simulation_study.user_session_tokens
    WHERE user_session_tokens.token_client_id = LAST_INSERT_ID(); /* Possible race condition */
END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `auth_logout` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `auth_logout`(
	IN token_client_id int(10) unsigned,
    IN token_auth_code char(40)
)
BEGIN

DELETE FROM retirement_simulation_study.user_session_tokens
WHERE user_session_tokens.token_client_id = token_client_id
	AND user_session_tokens.token_auth_code = token_auth_code;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `auth_purge` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `auth_purge`(
	IN user_email varchar(255),
    IN user_password char(60)
)
BEGIN

DECLARE user_id int(10) unsigned;
SET user_id = auth_user_id(user_email, user_password);

IF (user_id IS NOT NULL) THEN
	DELETE FROM retirement_simulation_study.user_session_tokens
	WHERE user_session_tokens.user_id = user_id
		AND user_session_tokens.token_client_id IS NOT NULL;
END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `auth_salt` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `auth_salt`(
	IN user_email varchar(255)
)
BEGIN

SELECT user_password_salt FROM retirement_simulation_study.users
WHERE users.user_email = user_email;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `metadata_user_count` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `metadata_user_count`(
	IN token_client_id int(10) unsigned,
    IN token_auth_code char(40)
)
BEGIN

IF (auth_admin(auth_session_id(token_client_id, token_auth_code)) IS NOT NULL)
THEN
	SELECT tb_count as user_count
	FROM retirement_simulation_study.table_metadata
	WHERE tb_name = 'users';
END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sim_market_read` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sim_market_read`(
	IN token_client_id int(10) unsigned,
    IN token_auth_code char(40),
    IN session_id INT(10) unsigned,
    IN max_history_size int(10) unsigned
)
BEGIN

DECLARE user_id int(10) unsigned;
DECLARE session_id_validated int(10) unsigned;
DECLARE session_initial_mkt_year int(10);
DECLARE mkt_years_ct int(10);

SET user_id = auth_session_id(token_client_id, token_auth_code);

IF (user_id IS NOT NULL) THEN
	/* Set session ID */
	SELECT simulation_sessions.session_id INTO session_id_validated
    FROM retirement_simulation_study.simulation_sessions
    WHERE simulation_sessions.user_id = user_id
		AND simulation_sessions.session_id = session_id
	LIMIT 1;
END IF;

IF (session_id_validated IS NOT NULL) THEN    
	/* Set total years in mkt */
    SELECT tb_count INTO mkt_years_ct
    FROM retirement_simulation_study.table_metadata
    WHERE tb_name = 'market_data_historical';
    
    /* Set initial year */
	SELECT simulation_year_history.mkt_year INTO session_initial_mkt_year
	FROM retirement_simulation_study.simulation_year_history
	WHERE simulation_year_history.session_id = session_id_validated
		AND simulation_year_history.session_year = 0;

	/* Select Market Data */
	(
		/* Active history: years that are selected as part of the simulation */
		SELECT
			simulation_year_history.session_year,
			market_data_historical.mkt_year,
			market_data_historical.mkt_return_large_cap,
			market_data_historical.mkt_return_small_cap,
			market_data_historical.mkt_return_real_estate,
			market_data_historical.mkt_return_international,
			market_data_historical.mkt_return_bonds,
			market_data_historical.mkt_return_cash,
			market_data_historical.mkt_return_gold,
			market_data_historical.mkt_inflation_rate
		FROM
			retirement_simulation_study.simulation_year_history,
			retirement_simulation_study.market_data_historical
		WHERE
			simulation_year_history.mkt_year = market_data_historical.mkt_year
			AND simulation_year_history.session_id = session_id_validated
	)
	UNION ALL
    (
		/* Pre-Inital History: Comes before Year 0 */
		SELECT
			market_data_historical.mkt_year - session_initial_mkt_year
			- if(market_data_historical.mkt_year < session_initial_mkt_year, 0, mkt_years_ct)
				AS session_year,
			market_data_historical.mkt_year,
			market_data_historical.mkt_return_large_cap,
			market_data_historical.mkt_return_small_cap,
			market_data_historical.mkt_return_real_estate,
			market_data_historical.mkt_return_international,
			market_data_historical.mkt_return_bonds,
			market_data_historical.mkt_return_cash,
			market_data_historical.mkt_return_gold,
			market_data_historical.mkt_inflation_rate
		FROM retirement_simulation_study.market_data_historical
    )
    ORDER BY session_year DESC
    LIMIT max_history_size;

END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sim_session_close` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sim_session_close`(
	IN token_client_id int(10) unsigned,
    IN token_auth_code char(40)
)
BEGIN

DECLARE user_id int(10) unsigned;

SET user_id = auth_session_id(token_client_id, token_auth_code);

IF (user_id IS NOT NULL) THEN
	UPDATE retirement_simulation_study.simulation_sessions
	SET simulation_sessions.session_active = false
	WHERE simulation_sessions.user_id = user_id;
END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sim_session_create` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sim_session_create`(
	IN token_client_id int(10) unsigned,
    IN token_auth_code char(40),
    IN session_initial_balance decimal(15,2),
    IN session_deposit_personal decimal(15,2),
    IN session_deposit_work decimal(15,2),
    IN session_deposit_salary decimal(15,2),
    IN session_retirement_goal decimal(15,2)
)
BEGIN

DECLARE user_id int(10) unsigned;
DECLARE session_id int(10) unsigned;
DECLARE session_initial_mkt_year int(10);

SET user_id = auth_session_id(token_client_id, token_auth_code);

IF (user_id IS NOT NULL) THEN
	/* Check to make sure no active sessions exist */
	IF (NOT EXISTS(
		SELECT * FROM retirement_simulation_study.simulation_sessions
        WHERE simulation_sessions.user_id = user_id
			AND simulation_sessions.session_active
	))
	THEN
		/* Initialize new empty session */
		INSERT INTO retirement_simulation_study.simulation_sessions
		(
			user_id,
			session_active
		)
		VALUES
		(
			user_id,
			true
		);
		SET session_id = last_insert_id();
        
        /* Populate user state table  */
        INSERT INTO retirement_simulation_study.simulation_state
        (
			simulation_state.session_id,
            simulation_state.session_year_active_num,
            simulation_state.session_balance,
            simulation_state.session_deposit_personal,
            simulation_state.session_deposit_work,
            simulation_state.session_deposit_salary,
            simulation_state.session_retirement_goal
        )
        VALUES
        (
			session_id, 0,
            session_initial_balance,
            session_deposit_personal,
            session_deposit_work,
            session_deposit_salary,
            session_retirement_goal
        );
        
        /* Register into simulation year history */
        SET session_initial_mkt_year = simulation_next_year(session_id);
        INSERT INTO retirement_simulation_study.simulation_year_history
        (
			simulation_year_history.session_id,
            simulation_year_history.session_year,
            simulation_year_history.mkt_year
        )
        VALUES
        (
			session_id, 0, session_initial_mkt_year
        );
        
        /* Create log entry */
        INSERT INTO retirement_simulation_study.simulation_log
		(
			session_id,
			log_timestamp,
			log_newstate_mkt_year,
			log_newstate_balance,
			log_newstate_deposit_personal,
			log_newstate_deposit_work,
			log_newstate_deposit_salary,
			log_newstate_retirement_goal
        )
		VALUES
		(
			session_id,
			NOW(),
			session_initial_mkt_year,
			session_initial_balance,
			session_deposit_personal,
			session_deposit_work,
			session_deposit_salary,
			session_retirement_goal
        );
	
		/* Return id of new session */
		SELECT session_id;
    END IF;
END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sim_session_read` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sim_session_read`(
	IN token_client_id int(10) unsigned,
    IN token_auth_code char(40)
)
BEGIN

DECLARE user_id int(10) unsigned;
DECLARE session_id int(10) unsigned;

SET user_id = auth_session_id(token_client_id, token_auth_code);

IF (user_id IS NOT NULL) THEN
	SELECT simulation_sessions.session_id INTO session_id
    FROM retirement_simulation_study.simulation_sessions
    WHERE simulation_sessions.user_id = user_id
		AND simulation_sessions.session_active
	LIMIT 1;
END IF;

IF (session_id) IS NOT NULL THEN
	SELECT * FROM
		retirement_simulation_study.simulation_state
    WHERE
		simulation_state.session_id = session_id;
END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sim_session_status` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sim_session_status`(
	IN token_client_id int(10) unsigned,
    IN token_auth_code char(40)
)
BEGIN

DECLARE user_id int(10) unsigned;

DECLARE session_count int(10) unsigned;
DECLARE session_active bool;

SET user_id = auth_session_id(token_client_id, token_auth_code);

IF (user_id IS NOT NULL) THEN

	SELECT COUNT(*) INTO session_count
    FROM retirement_simulation_study.simulation_sessions
    WHERE simulation_sessions.user_id = user_id;
    
    SET session_active = EXISTS(
		SELECT *
        FROM retirement_simulation_study.simulation_sessions
		WHERE simulation_sessions.user_id = user_id
			AND simulation_sessions.session_active
	);
    
    SELECT session_count, session_active;
    
END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sim_session_update` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sim_session_update`(
	IN token_client_id int(10) unsigned,
    IN token_auth_code char(40),
    IN user_inv_large_cap double unsigned,
    IN user_inv_small_cap double unsigned,
    IN user_inv_real_estate double unsigned,
    IN user_inv_international double unsigned,
    IN user_inv_bonds double unsigned,
    IN user_inv_cash double unsigned,
    IN user_inv_gold double unsigned
)
BEGIN

DECLARE user_id int(10) unsigned;
DECLARE session_id int(10) unsigned;

DECLARE session_next_year int(10);
DECLARE session_next_mkt_year int(10);
DECLARE session_next_balance decimal(15,2);

DECLARE session_log_id int(10) unsigned;

SET user_id = auth_session_id(token_client_id, token_auth_code);

IF (user_id IS NOT NULL) THEN
	SELECT simulation_sessions.session_id INTO session_id
    FROM retirement_simulation_study.simulation_sessions
    WHERE simulation_sessions.user_id = user_id
		AND simulation_sessions.session_active
	LIMIT 1;
END IF;

IF (session_id) IS NOT NULL THEN
	SET session_next_mkt_year = simulation_next_year(session_id);
    
    SELECT session_year_active_num + 1 INTO session_next_year
    FROM retirement_simulation_study.simulation_state
    WHERE simulation_state.session_id = session_id;

	/* Pick a new mkt_year and add it to exclusion block */
	INSERT INTO retirement_simulation_study.simulation_year_history
	(
		session_id,
		session_year,
		mkt_year
    )
	VALUES
	(
		session_id,
		session_next_year,
		session_next_mkt_year
    );
    
    /* Calculate result and write log entry */
    INSERT INTO retirement_simulation_study.simulation_log
	(
		session_id, log_timestamp,
        /* User Inputs */
		log_user_inv_large_cap, log_user_inv_small_cap, log_user_inv_real_estate,
		log_user_inv_international, log_user_inv_bonds, log_user_inv_cash, log_user_inv_gold,
		/* Market Result */
        log_newstate_mkt_year,
		log_newstate_large_cap, log_newstate_small_cap, log_newstate_real_estate,
		log_newstate_international, log_newstate_bonds, log_newstate_cash, log_newstate_gold,
        /* Goal and Income */
		log_newstate_deposit_personal, log_newstate_deposit_work, log_newstate_deposit_salary,
		log_newstate_retirement_goal
	)
	SELECT
		session_id, now(),
        /* User Inputs */
		user_inv_large_cap, user_inv_small_cap, user_inv_real_estate,
		user_inv_international, user_inv_bonds, user_inv_cash, user_inv_gold,
        /* Market Result */
        session_next_mkt_year,
		simulation_state.session_balance * market_data_historical.mkt_return_large_cap * user_inv_large_cap,
		simulation_state.session_balance * market_data_historical.mkt_return_small_cap * user_inv_small_cap,
		simulation_state.session_balance * market_data_historical.mkt_return_real_estate * user_inv_real_estate,
		simulation_state.session_balance * market_data_historical.mkt_return_international * user_inv_international,
		simulation_state.session_balance * market_data_historical.mkt_return_bonds * user_inv_bonds,
		simulation_state.session_balance * market_data_historical.mkt_return_cash * user_inv_cash,
		simulation_state.session_balance * market_data_historical.mkt_return_gold * user_inv_gold,
        /* Goal and Income */
        simulation_state.session_deposit_personal * market_data_historical.mkt_inflation_rate,
        simulation_state.session_deposit_work * market_data_historical.mkt_inflation_rate,
        simulation_state.session_deposit_salary * market_data_historical.mkt_inflation_rate,
        simulation_state.session_retirement_goal * market_data_historical.mkt_inflation_rate
	FROM
		retirement_simulation_study.market_data_historical,
		retirement_simulation_study.simulation_state
	WHERE
		market_data_historical.mkt_year = session_next_mkt_year
		AND simulation_state.session_id = session_id
	LIMIT 1;
    SET session_log_id = last_insert_id();
    
    /* Update total balance in log entry with prior calculated sums */
    UPDATE retirement_simulation_study.simulation_log
    SET
		simulation_log.log_newstate_balance
			= simulation_log.log_newstate_returns
            + simulation_log.log_newstate_deposit_personal
            + simulation_log.log_newstate_deposit_work
            + simulation_log.log_newstate_deposit_salary
    WHERE simulation_log.log_id = session_log_id;
    
    /* Update state with new figures */
	UPDATE retirement_simulation_study.simulation_state, retirement_simulation_study.simulation_log
	SET
		simulation_state.session_year_active_num = session_next_year,
		simulation_state.session_balance = simulation_log.log_newstate_balance,
		simulation_state.session_deposit_personal = simulation_log.log_newstate_deposit_personal,
		simulation_state.session_deposit_work = simulation_log.log_newstate_deposit_work,
		simulation_state.session_deposit_salary = simulation_log.log_newstate_deposit_salary,
		simulation_state.session_retirement_goal = simulation_log.log_newstate_retirement_goal
	WHERE simulation_state.session_id = session_id
		AND simulation_log.log_id = session_log_id;
END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `survey_pd_read` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `survey_pd_read`(
	IN token_client_id int(10) unsigned,
	IN token_auth_code char(40)
)
BEGIN

SELECT
	survey_participants.survey_pd_preseed,
    survey_participants.survey_pd_address_1,
    survey_participants.survey_pd_address_2,
    survey_participants.survey_pd_addr_city,
    survey_participants.survey_pd_addr_state,
    survey_participants.survey_pd_addr_zip,
    survey_participants.survey_pd_birthdate,
    survey_participants.survey_pd_income,
    survey_participants.survey_pd_marital
FROM retirement_simulation_study.survey_participants
WHERE
	survey_participants.user_id = auth_session_id(
	token_client_id,
		token_auth_code
	);

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `survey_pd_write` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `survey_pd_write`(
	IN token_client_id int(10) unsigned,
	IN token_auth_code char(40),
	IN survey_pd_address_1 varchar(255),
	IN survey_pd_address_2 varchar(255),
	IN survey_pd_addr_city varchar(40),
	IN survey_pd_addr_state varchar(2),
	IN survey_pd_addr_zip varchar(10),
	IN survey_pd_birthdate date,
	IN survey_pd_income decimal(15,2) unsigned,
	IN survey_pd_marital varchar(45)
)
BEGIN

DECLARE user_id int(10) unsigned;
SET user_id = auth_session_id(token_client_id, token_auth_code);

IF (user_id IS NOT NULL) THEN
	REPLACE INTO retirement_simulation_study.survey_participants
	(
		survey_participants.user_id,
		survey_participants.survey_pd_preseed,
		survey_participants.survey_pd_address_1,
		survey_participants.survey_pd_address_2,
		survey_participants.survey_pd_addr_city,
		survey_participants.survey_pd_addr_state,
		survey_participants.survey_pd_addr_zip,
		survey_participants.survey_pd_birthdate,
		survey_participants.survey_pd_income,
		survey_participants.survey_pd_marital
	)
	VALUES
	(
		user_id,
		false,
		survey_pd_address_1,
		survey_pd_address_2,
		survey_pd_addr_city,
		survey_pd_addr_state,
		survey_pd_addr_zip,
		survey_pd_birthdate,
		survey_pd_income,
		survey_pd_marital
	);
END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `survey_rt_read` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `survey_rt_read`(
	IN token_client_id int(10) unsigned,
    IN token_auth_code char(40)
)
BEGIN

SELECT
	survey_retirement.survey_rt_preseed,
    survey_retirement.survey_rt_age,
    survey_retirement.survey_rt_goal,
    survey_retirement.survey_rt_curr_savings,
    survey_retirement.survey_rt_employer_deposit,
    survey_retirement.survey_rt_lifetime_concern,
    survey_retirement.survey_rt_ss
FROM retirement_simulation_study.survey_retirement
WHERE
	survey_retirement.user_id = auth_session_id(
		token_client_id,
        token_auth_code
	);

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `survey_rt_write` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `survey_rt_write`(
	IN token_client_id int(10) unsigned,
    IN token_auth_code char(40),
	IN survey_rt_age int(10) unsigned,
	IN survey_rt_goal decimal(15,2) unsigned,
	IN survey_rt_curr_savings decimal(15,2) unsigned,
	IN survey_rt_employer_deposit double unsigned,
	IN survey_rt_lifetime_concern bit(1),
	IN survey_rt_ss bit(1)
)
BEGIN

DECLARE user_id int(10) unsigned;
SET user_id = auth_session_id(token_client_id, token_auth_code);

IF (user_id IS NOT NULL) THEN
    REPLACE INTO retirement_simulation_study.survey_retirement
	(
		survey_retirement.user_id,
        survey_retirement.survey_rt_preseed,
		survey_retirement.survey_rt_age,
		survey_retirement.survey_rt_goal,
		survey_retirement.survey_rt_curr_savings,
		survey_retirement.survey_rt_employer_deposit,
		survey_retirement.survey_rt_lifetime_concern,
		survey_retirement.survey_rt_ss
    )
	VALUES
	(
		user_id,
        false,
		survey_rt_age,
		survey_rt_goal,
		survey_rt_curr_savings,
		survey_rt_employer_deposit,
		survey_rt_lifetime_concern,
		survey_rt_ss
    );
END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `user_create` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `user_create`(
	IN user_email varchar(255),
    IN user_password char(60),
    IN user_title varchar(20),
    IN user_fname varchar(60),
    IN user_initial varchar(1),
    IN user_lname varchar(60)
)
BEGIN

INSERT INTO retirement_simulation_study.users
(
	users.user_email,
    users.user_password,
    users.user_title,
    users.user_fname,
    users.user_initial,
    users.user_lname
) VALUES (
	user_email,
	user_password,
	user_title,
	user_fname,
	user_initial,
	user_lname
);

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `user_delete` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `user_delete`(
	IN user_email varchar(255),
    IN user_password varchar(60)
)
BEGIN

DECLARE user_id int(10) unsigned;
SET user_id = auth_user_id(user_email, user_password);

DELETE FROM retirement_simulation_study.users
WHERE users.user_id = user_id;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `user_exists` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `user_exists`(
	IN user_email varchar(255)
)
BEGIN
SELECT EXISTS(
	SELECT * FROM retirement_simulation_study.users
    WHERE users.user_email = user_email
) AS user_exists;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `user_read` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `user_read`(
	IN user_email varchar(255),
    IN user_password varchar(60)
)
BEGIN

SELECT
    users.user_email,
    users.user_title,
    users.user_fname,
    users.user_initial,
    users.user_lname
FROM retirement_simulation_study.users
WHERE users.user_id = auth_user_id(user_email, user_password);

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `user_update_email` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `user_update_email`(
	IN user_email varchar(255),
    IN user_password varchar(60),
    IN user_new_email varchar(60)
)
BEGIN

DECLARE user_id int(10) unsigned;
SET user_id = auth_user_id(user_email, user_password);

IF NOT EXISTS(
	SELECT * FROM retirement_simulation_study.users
    WHERE users.user_email = user_new_email
) THEN
	UPDATE retirement_simulation_study.users
	SET users.user_email = user_new_email
	WHERE users.user_id = user_id;
END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `user_update_name` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `user_update_name`(
	IN user_email varchar(255),
    IN user_password varchar(60),
    IN user_title varchar(20),
    IN user_fname varchar(60),
    IN user_initial varchar(1),
    IN user_lname varchar(60)
)
BEGIN

DECLARE user_id int(10) unsigned;
SET user_id = auth_user_id(user_email, user_password);

UPDATE retirement_simulation_study.users
SET
	users.user_title = user_title,
	users.user_fname = user_fname,
	users.user_initial = user_initial,
	users.user_lname = user_lname
WHERE users.user_id = user_id;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `user_update_password` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `user_update_password`(
	IN user_email varchar(255),
    IN user_password varchar(60),
    IN user_new_password varchar(60)
)
BEGIN

DECLARE user_id int(10) unsigned;
SET user_id = auth_user_id(user_email, user_password);

UPDATE retirement_simulation_study.users
SET users.user_password = user_new_password
WHERE users.user_id = user_id;

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

-- Dump completed on 2019-07-18 15:42:41
