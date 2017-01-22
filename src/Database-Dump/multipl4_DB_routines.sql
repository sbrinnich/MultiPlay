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
-- Temporary view structure for view `all_game_states`
--

DROP TABLE IF EXISTS `all_game_states`;
/*!50001 DROP VIEW IF EXISTS `all_game_states`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `all_game_states` AS SELECT 
 1 AS `game`,
 1 AS `state`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `4gewinnt_sorted`
--

DROP TABLE IF EXISTS `4gewinnt_sorted`;
/*!50001 DROP VIEW IF EXISTS `4gewinnt_sorted`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `4gewinnt_sorted` AS SELECT 
 1 AS `id`,
 1 AS `posx`,
 1 AS `posy`,
 1 AS `teamname`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `all_teams`
--

DROP TABLE IF EXISTS `all_teams`;
/*!50001 DROP VIEW IF EXISTS `all_teams`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `all_teams` AS SELECT 
 1 AS `name`,
 1 AS `color`,
 1 AS `img`,
 1 AS `active`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `4gewinnt_chosencount`
--

DROP TABLE IF EXISTS `4gewinnt_chosencount`;
/*!50001 DROP VIEW IF EXISTS `4gewinnt_chosencount`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `4gewinnt_chosencount` AS SELECT 
 1 AS `posx`,
 1 AS `countposx`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `tictactoe_sorted`
--

DROP TABLE IF EXISTS `tictactoe_sorted`;
/*!50001 DROP VIEW IF EXISTS `tictactoe_sorted`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `tictactoe_sorted` AS SELECT 
 1 AS `id`,
 1 AS `posx`,
 1 AS `posy`,
 1 AS `teamname`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `tictactoe_chosencount`
--

DROP TABLE IF EXISTS `tictactoe_chosencount`;
/*!50001 DROP VIEW IF EXISTS `tictactoe_chosencount`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `tictactoe_chosencount` AS SELECT 
 1 AS `posx`,
 1 AS `posy`,
 1 AS `countposx`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `all_game_states`
--

/*!50001 DROP VIEW IF EXISTS `all_game_states`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`multipl4_dbuser`@`195.245.225.251` SQL SECURITY DEFINER */
/*!50001 VIEW `all_game_states` AS select `game-states`.`game` AS `game`,`game-states`.`state` AS `state` from `game-states` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `4gewinnt_sorted`
--

/*!50001 DROP VIEW IF EXISTS `4gewinnt_sorted`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`multipl4_dbuser`@`195.245.225.251` SQL SECURITY DEFINER */
/*!50001 VIEW `4gewinnt_sorted` AS select `4-gewinnt`.`id` AS `id`,`4-gewinnt`.`posx` AS `posx`,`4-gewinnt`.`posy` AS `posy`,`4-gewinnt`.`teamname` AS `teamname` from `4-gewinnt` order by `4-gewinnt`.`posx`,`4-gewinnt`.`posy` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `all_teams`
--

/*!50001 DROP VIEW IF EXISTS `all_teams`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`multipl4_dbuser`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `all_teams` AS select `team`.`name` AS `name`,`team`.`color` AS `color`,`team`.`img` AS `img`,`team`.`active` AS `active` from `team` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `4gewinnt_chosencount`
--

/*!50001 DROP VIEW IF EXISTS `4gewinnt_chosencount`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`multipl4_dbuser`@`195.245.225.251` SQL SECURITY DEFINER */
/*!50001 VIEW `4gewinnt_chosencount` AS select `4-gewinnt-temp`.`posx` AS `posx`,count(`4-gewinnt-temp`.`posx`) AS `countposx` from `4-gewinnt-temp` group by `4-gewinnt-temp`.`posx` order by count(`4-gewinnt-temp`.`posx`) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `tictactoe_sorted`
--

/*!50001 DROP VIEW IF EXISTS `tictactoe_sorted`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`multipl4_dbuser`@`195.245.225.251` SQL SECURITY DEFINER */
/*!50001 VIEW `tictactoe_sorted` AS select `tic-tac-toe`.`id` AS `id`,`tic-tac-toe`.`posx` AS `posx`,`tic-tac-toe`.`posy` AS `posy`,`tic-tac-toe`.`teamname` AS `teamname` from `tic-tac-toe` order by `tic-tac-toe`.`posx`,`tic-tac-toe`.`posy` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `tictactoe_chosencount`
--

/*!50001 DROP VIEW IF EXISTS `tictactoe_chosencount`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`multipl4_dbuser`@`195.245.225.251` SQL SECURITY DEFINER */
/*!50001 VIEW `tictactoe_chosencount` AS select `tic-tac-toe-temp`.`posx` AS `posx`,`tic-tac-toe-temp`.`posy` AS `posy`,count(`tic-tac-toe-temp`.`posx`) AS `countposx` from `tic-tac-toe-temp` group by `tic-tac-toe-temp`.`posx`,`tic-tac-toe-temp`.`posy` order by count(`tic-tac-toe-temp`.`posx`) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Dumping events for database 'multipl4_DB'
--

--
-- Dumping routines for database 'multipl4_DB'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-01-20 20:09:13
