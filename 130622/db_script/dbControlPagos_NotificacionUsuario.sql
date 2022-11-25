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
-- Table structure for table `NotificacionUsuario`
--

DROP TABLE IF EXISTS `NotificacionUsuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `NotificacionUsuario` (
  `IdNotificacion` int NOT NULL AUTO_INCREMENT,
  `IdFlujo` int DEFAULT NULL,
  `IdUsuario` int DEFAULT NULL,
  `Mensaje` varchar(200) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `Leido` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`IdNotificacion`),
  KEY `nt_flujo` (`IdFlujo`),
  KEY `nt_usuario` (`IdUsuario`),
  CONSTRAINT `nt_flujo` FOREIGN KEY (`IdFlujo`) REFERENCES `Flujo` (`id_flujo`),
  CONSTRAINT `nt_usuario` FOREIGN KEY (`IdUsuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=226 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `NotificacionUsuario`
--

LOCK TABLES `NotificacionUsuario` WRITE;
/*!40000 ALTER TABLE `NotificacionUsuario` DISABLE KEYS */;
INSERT INTO `NotificacionUsuario` VALUES (1,1,1,'Autorización completa del pago 20000019',1),(2,1,2,'Autorización completa del pago 20000019',1),(3,1,10,'Autorización completa del pago 20000019',1),(4,2,1,'Autorización completa del pago 24553112',1),(5,2,2,'Autorización completa del pago 24553112',1),(6,2,10,'Autorización completa del pago 24553112',1),(7,22,1,'Autorización completa del pago 10007373',1),(8,22,2,'Autorización completa del pago 10007373',1),(9,22,10,'Autorización completa del pago 10007373',1),(10,29,1,'Autorización completa del pago 10007377',1),(11,29,2,'Autorización completa del pago 10007377',1),(12,29,10,'Autorización completa del pago 10007377',1),(19,5,1,'Autorización completa del pago 30005308',1),(20,5,2,'Autorización completa del pago 30005308',1),(21,5,10,'Autorización completa del pago 30005308',1),(22,14,2,'Pago 10007381 rechazado.',1),(23,14,6,'Pago 10007381 rechazado.',1),(24,14,10,'Pago 10007381 rechazado.',1),(25,6,2,'Pago 30005307 rechazado.',1),(26,6,6,'Pago 30005307 rechazado.',1),(27,6,10,'Pago 30005307 rechazado.',1),(28,8,10,'Autorización completa del pago 30005318',1),(29,9,1,'Pago 30005317 rechazado.',1),(30,9,2,'Pago 30005317 rechazado.',1),(31,9,10,'Pago 30005317 rechazado.',1),(32,7,1,'Autorización completa del pago 30005306',1),(33,7,2,'Autorización completa del pago 30005306',1),(34,7,10,'Autorización completa del pago 30005306',1),(35,25,1,'Pago 10007370 rechazado.',1),(36,25,2,'Pago 10007370 rechazado.',1),(37,25,6,'Pago 10007370 rechazado.',1),(38,11,2,'Pago 30005315 rechazado.',1),(39,11,6,'Pago 30005315 rechazado.',1),(40,11,10,'Pago 30005315 rechazado.',1),(44,23,2,'Pago 10007372 rechazado.',1),(45,23,6,'Pago 10007372 rechazado.',1),(46,23,10,'Pago 10007372 rechazado.',1),(47,21,2,'Pago 50000422 rechazado.',1),(48,21,6,'Pago 50000422 rechazado.',1),(49,21,10,'Pago 50000422 rechazado.',1),(50,24,1,'Pago 10007371 autorizado por completo.',1),(51,24,2,'Pago 10007371 autorizado por completo.',1),(52,24,10,'Pago 10007371 autorizado por completo.',1),(53,5,1,'Pago 30005308 compensado.',1),(54,5,6,'Pago 30005308 compensado.',1),(55,5,10,'Pago 30005308 compensado.',1),(56,7,1,'Pago 30005306 compensado.',1),(57,7,6,'Pago 30005306 compensado.',1),(58,7,10,'Pago 30005306 compensado.',1),(59,12,2,'Pago 30005314 rechazado.',1),(60,12,4,'Pago 30005314 rechazado.',1),(61,12,6,'Pago 30005314 rechazado.',1),(62,12,10,'Pago 30005314 rechazado.',1),(63,2,1,'Pago 24553112 compensado.',1),(64,2,4,'Pago 24553112 compensado.',1),(65,2,6,'Pago 24553112 compensado.',1),(66,2,10,'Pago 24553112 compensado.',1),(67,1,2,'Pago 20000019 compensado.',1),(68,1,1,'Pago 20000019 compensado.',1),(69,1,10,'Pago 20000019 compensado.',1),(70,1,6,'Pago 20000019 compensado.',1),(71,1,4,'Pago 20000019 compensado.',1),(72,1,5,'Pago 20000019 compensado.',1),(73,8,1,'Pago 30005318 compensado.',1),(74,8,10,'Pago 30005318 compensado.',1),(75,29,2,'Pago 10007377 compensado.',1),(76,29,1,'Pago 10007377 compensado.',1),(77,29,10,'Pago 10007377 compensado.',1),(78,29,6,'Pago 10007377 compensado.',1),(79,29,4,'Pago 10007377 compensado.',1),(80,29,5,'Pago 10007377 compensado.',1),(81,29,33,'Pago 10007377 compensado.',1),(82,373,33,'Pago 10008360 rechazado.',1),(83,373,35,'Pago 10008360 rechazado.',1),(84,376,33,'Pago 10008358 autorizado por completo.',1),(85,375,33,'Pago 60000470 autorizado por completo.',1),(86,375,33,'Pago 60000470 compensado.',1),(87,378,33,'Pago 10008370 autorizado por completo.',1),(88,379,33,'Pago 30006000 autorizado por completo.',1),(89,380,33,'Pago 10008394 autorizado por completo.',1),(90,381,33,'Pago 10008382 autorizado por completo.',1),(91,381,35,'Pago 10008382 autorizado por completo.',1),(92,380,33,'Pago 10008394 compensado.',1),(93,380,35,'Pago 10008394 compensado.',1),(94,380,37,'Pago 10008394 compensado.',1),(95,381,33,'Pago 10008382 compensado.',1),(96,381,35,'Pago 10008382 compensado.',1),(97,381,37,'Pago 10008382 compensado.',1),(98,392,33,'Pago 10008396 autorizado por completo.',1),(99,388,33,'Pago 10008381 autorizado por completo.',1),(100,388,2,'Pago 10008381 autorizado por completo.',1),(101,3465,33,'Pago 10010616 autorizado por completo.',1),(102,3465,2,'Pago 10010616 autorizado por completo.',1),(103,388,33,'Pago 10008381 compensado.',1),(104,388,35,'Pago 10008381 compensado.',1),(105,388,2,'Pago 10008381 compensado.',1),(106,388,33,'Pago 10008381 compensado.',1),(107,388,35,'Pago 10008381 compensado.',1),(108,392,33,'Pago 10008396 compensado.',1),(109,392,35,'Pago 10008396 compensado.',1),(110,388,33,'Pago 10008381 compensado.',1),(111,388,35,'Pago 10008381 compensado.',1),(112,392,33,'Pago 10008396 compensado.',1),(113,392,35,'Pago 10008396 compensado.',1),(114,388,33,'Pago 10008381 compensado.',1),(115,388,35,'Pago 10008381 compensado.',1),(116,392,33,'Pago 10008396 compensado.',1),(117,392,35,'Pago 10008396 compensado.',1),(118,378,33,'Pago 10008370 autorizado por completo.',1),(119,378,2,'Pago 10008370 autorizado por completo.',1),(120,379,33,'Pago 30006000 autorizado por completo.',1),(121,379,2,'Pago 30006000 autorizado por completo.',1),(122,382,33,'Pago 10008346 autorizado por completo.',1),(123,382,2,'Pago 10008346 autorizado por completo.',1),(124,389,33,'Pago 10008355 autorizado por completo.',1),(125,389,2,'Pago 10008355 autorizado por completo.',0),(126,3465,13,'Pago 10010616 compensado.',1),(127,3465,14,'Pago 10010616 compensado.',1),(128,3465,15,'Pago 10010616 compensado.',1),(129,3465,4,'Pago 10010616 compensado.',1),(130,3465,19,'Pago 10010616 compensado.',1),(131,3465,13,'Pago 10010616 compensado.',1),(132,3465,14,'Pago 10010616 compensado.',1),(133,3465,15,'Pago 10010616 compensado.',1),(134,3465,4,'Pago 10010616 compensado.',1),(135,3465,19,'Pago 10010616 compensado.',1),(136,383,33,'Pago 30006022 autorizado por completo.',1),(137,383,2,'Pago 30006022 autorizado por completo.',1),(138,378,33,'Pago 10008370 compensado.',0),(139,378,35,'Pago 10008370 compensado.',1),(140,378,2,'Pago 10008370 compensado.',0),(141,379,33,'Pago 30006000 compensado.',0),(142,379,35,'Pago 30006000 compensado.',1),(143,379,2,'Pago 30006000 compensado.',0),(144,3684,33,'Pago 10010727 autorizado por completo.',1),(145,3684,2,'Pago 10010727 autorizado por completo.',1),(146,3684,33,'Pago 10010727 autorizado por completo.',0),(147,3684,2,'Pago 10010727 autorizado por completo.',0),(148,3726,33,'Pago 10010730 autorizado por completo.',1),(149,3726,2,'Pago 10010730 autorizado por completo.',1),(150,3465,13,'Pago 10010616 compensado.',1),(151,3465,14,'Pago 10010616 compensado.',1),(152,3465,15,'Pago 10010616 compensado.',1),(153,3465,4,'Pago 10010616 compensado.',1),(154,3465,19,'Pago 10010616 compensado.',1),(155,3465,13,'Pago 10010616 compensado.',1),(156,3465,14,'Pago 10010616 compensado.',1),(157,3465,15,'Pago 10010616 compensado.',1),(158,3465,4,'Pago 10010616 compensado.',1),(159,3465,19,'Pago 10010616 compensado.',1),(160,3465,13,'Pago 10010616 compensado.',0),(161,3465,14,'Pago 10010616 compensado.',0),(162,3465,15,'Pago 10010616 compensado.',0),(163,3465,4,'Pago 10010616 compensado.',0),(164,3465,19,'Pago 10010616 compensado.',0),(165,386,33,'Pago 10008371 autorizado por completo.',1),(166,386,2,'Pago 10008371 autorizado por completo.',0),(167,386,31,'Pago 10008371 autorizado por completo.',1),(168,386,28,'Pago 10008371 autorizado por completo.',1),(169,382,33,'Pago 10008346 compensado.',0),(170,382,35,'Pago 10008346 compensado.',0),(171,382,2,'Pago 10008346 compensado.',0),(172,382,31,'Pago 10008346 compensado.',0),(173,382,28,'Pago 10008346 compensado.',0),(174,383,33,'Pago 30006022 compensado.',0),(175,383,35,'Pago 30006022 compensado.',0),(176,383,2,'Pago 30006022 compensado.',0),(177,383,31,'Pago 30006022 compensado.',0),(178,383,28,'Pago 30006022 compensado.',0),(179,362,33,'Pago 30005979 autorizado por completo.',1),(180,362,2,'Pago 30005979 autorizado por completo.',1),(181,362,31,'Pago 30005979 autorizado por completo.',1),(182,362,28,'Pago 30005979 autorizado por completo.',1),(183,3750,33,'Pago 10010764 autorizado por completo.',1),(184,3750,2,'Pago 10010764 autorizado por completo.',1),(185,3750,31,'Pago 10010764 autorizado por completo.',1),(186,3750,28,'Pago 10010764 autorizado por completo.',1),(187,362,33,'Pago 30005979 compensado.',1),(188,362,35,'Pago 30005979 compensado.',1),(189,362,2,'Pago 30005979 compensado.',0),(190,362,31,'Pago 30005979 compensado.',1),(191,362,28,'Pago 30005979 compensado.',1),(192,3750,33,'Pago 10010764 compensado.',1),(193,3750,35,'Pago 10010764 compensado.',1),(194,3750,2,'Pago 10010764 compensado.',1),(195,3750,31,'Pago 10010764 compensado.',1),(196,3750,28,'Pago 10010764 compensado.',1),(197,362,33,'Pago 30005979 compensado.',0),(198,362,35,'Pago 30005979 compensado.',0),(199,362,31,'Pago 30005979 compensado.',0),(200,362,28,'Pago 30005979 compensado.',0),(201,3750,33,'Pago 10010764 compensado.',1),(202,3750,35,'Pago 10010764 compensado.',1),(203,3750,31,'Pago 10010764 compensado.',1),(204,3750,28,'Pago 10010764 compensado.',1),(205,386,33,'Pago 10008371 compensado.',0),(206,386,35,'Pago 10008371 compensado.',0),(207,386,31,'Pago 10008371 compensado.',0),(208,386,28,'Pago 10008371 compensado.',0),(209,389,33,'Pago 10008355 compensado.',0),(210,389,35,'Pago 10008355 compensado.',0),(211,389,31,'Pago 10008355 compensado.',0),(212,389,28,'Pago 10008355 compensado.',0),(213,3726,33,'Pago 10010730 compensado.',0),(214,3726,35,'Pago 10010730 compensado.',0),(215,3726,2,'Pago 10010730 compensado.',0),(216,3726,31,'Pago 10010730 compensado.',0),(217,3726,28,'Pago 10010730 compensado.',0),(218,3726,32,'Pago 10010730 compensado.',0),(219,3750,33,'Pago 10010764 compensado.',0),(220,3750,35,'Pago 10010764 compensado.',0),(221,3750,2,'Pago 10010764 compensado.',0),(222,3750,31,'Pago 10010764 compensado.',0),(223,3750,28,'Pago 10010764 compensado.',0),(224,3750,32,'Pago 10010764 compensado.',0),(225,3750,42,'Pago 10010764 compensado.',0);
/*!40000 ALTER TABLE `NotificacionUsuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-19 11:49:03
