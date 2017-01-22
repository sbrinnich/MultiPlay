CREATE DATABASE  IF NOT EXISTS `multipl4_DB` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;
USE `multipl4_DB`;
-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: e1.ehosts.com    Database: multipl4_DB
-- ------------------------------------------------------
-- Server version	5.5.51-38.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `4-gewinnt`
--

DROP TABLE IF EXISTS `4-gewinnt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `4-gewinnt` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `posx` tinyint(1) unsigned NOT NULL,
  `posy` tinyint(1) unsigned NOT NULL,
  `teamname` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8379 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `4-gewinnt`
--

LOCK TABLES `4-gewinnt` WRITE;
/*!40000 ALTER TABLE `4-gewinnt` DISABLE KEYS */;
INSERT INTO `4-gewinnt` VALUES (8361,2,5,'Rot'),(8362,6,5,'Blau'),(8363,4,5,'Rot'),(8364,1,5,'Blau'),(8365,2,4,'Rot'),(8366,1,4,'Blau'),(8367,6,4,'Rot'),(8368,2,3,'Blau'),(8369,2,2,'Rot'),(8370,3,5,'Blau'),(8371,0,5,'Rot'),(8372,5,5,'Blau'),(8373,3,4,'Rot'),(8374,5,4,'Blau'),(8375,0,4,'Rot'),(8376,5,3,'Blau'),(8377,4,4,'Rot'),(8378,4,3,'Blau');
/*!40000 ALTER TABLE `4-gewinnt` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-01-20 20:08:44
