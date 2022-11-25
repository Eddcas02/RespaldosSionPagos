-- MySQL dump 10.13  Distrib 8.0.26, for macos11 (x86_64)
--
-- Host: 34.208.193.210    Database: dbControlPagos
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `CondicionGrupoAutorizacion`
--

DROP TABLE IF EXISTS `CondicionGrupoAutorizacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CondicionGrupoAutorizacion` (
  `id_condiciongrupoautorizacion` int NOT NULL AUTO_INCREMENT,
  `id_condicionautorizacion` int DEFAULT NULL,
  `id_grupoautorizacion` int DEFAULT NULL,
  `activo` tinyint(1) DEFAULT NULL,
  `eliminado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_condiciongrupoautorizacion`),
  KEY `condicion` (`id_condicionautorizacion`),
  KEY `grupo` (`id_grupoautorizacion`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CondicionGrupoAutorizacion`
--

LOCK TABLES `CondicionGrupoAutorizacion` WRITE;
/*!40000 ALTER TABLE `CondicionGrupoAutorizacion` DISABLE KEYS */;
INSERT INTO `CondicionGrupoAutorizacion` VALUES (1,1,1,1,0),(2,1,2,1,0),(3,2,1,1,0),(4,2,2,1,0);
/*!40000 ALTER TABLE `CondicionGrupoAutorizacion` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-19 11:49:33
