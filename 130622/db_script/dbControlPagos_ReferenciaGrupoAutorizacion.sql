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
-- Table structure for table `ReferenciaGrupoAutorizacion`
--

DROP TABLE IF EXISTS `ReferenciaGrupoAutorizacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ReferenciaGrupoAutorizacion` (
  `id_referenciagrupo` int NOT NULL AUTO_INCREMENT,
  `id_grupoautorizacion` int NOT NULL,
  `usuario_referencia1` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `usuario_referencia2` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `usuario_referencia3` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `activo` tinyint NOT NULL DEFAULT '1',
  `eliminado` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_referenciagrupo`),
  KEY `id_grupoautorizacion_idx` (`id_grupoautorizacion`),
  CONSTRAINT `id_grupoautorizacion_referencia` FOREIGN KEY (`id_grupoautorizacion`) REFERENCES `GrupoAutorizacion` (`id_grupoautorizacion`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ReferenciaGrupoAutorizacion`
--

LOCK TABLES `ReferenciaGrupoAutorizacion` WRITE;
/*!40000 ALTER TABLE `ReferenciaGrupoAutorizacion` DISABLE KEYS */;
INSERT INTO `ReferenciaGrupoAutorizacion` VALUES (1,7,'ASAENZ','EMATEU','JARRIAZA',1,0),(2,7,'ASAENZ','EMATEU','LARRIAZA',1,0),(3,5,'CCEDILLO','EMATEU','JARRIAZA',1,0),(4,5,'CCEDILLO','EMATEU','LARRIAZA',1,0),(5,7,'CCEDILLO','EMATEU','JARRIAZA',1,0),(6,7,'CCEDILLO','EMATEU','LARRIAZA',1,0),(7,4,'CMARTINEZ','JARRIAZA','',1,0),(8,4,'CMARTINEZ','LARRIAZA','',1,0),(9,6,'CMARTINEZ','JARRIAZA','',1,0),(10,6,'CSAGUIL','JARRIAZA','',1,0),(11,8,'CSCHAAD','JARRIAZA','',1,0),(12,7,'EAVILES','CSCHAAD','JARRIAZA',1,0),(13,7,'EAVILES','CSCHAAD','LARRIAZA',1,0),(14,5,'EMATEU','JARRIAZA','',1,0),(15,5,'EMATEU','LARRIAZA','',1,0),(16,6,'EMATEU','LARRIAZA','',1,0),(17,7,'EMATEU','JARRIAZA','',1,0),(18,7,'FLACAYO','CSCHAAD','JARRIAZA',1,0),(19,7,'FLACAYO','CSCHAAD','LARRIAZA',1,0),(20,7,'JMRAMOS','CSCHAAD','JARRIAZA',1,0),(21,7,'JMRAMOS','CSCHAAD','LARRIAZA',1,0),(22,6,'FSALAZAR','EMATEU','',1,0),(23,6,'EESPINA','EMATEU','',1,0),(24,7,'GCRISTALES','JARRIAZA','',1,0),(25,7,'GCRISTALES','LARRIAZA','',1,0),(26,8,'ILICARDIE','LARRIAZA','',1,0),(27,7,'IMENDEZ','CSCHAAD','JARRIAZA',1,0),(28,7,'IMENDEZ','CSCHAAD','LARRIAZA',1,0),(29,5,'JARRIAZA','EMATEU','JARRIAZA',1,0),(30,5,'JARRIAZA','EMATEU','LARRIAZA',1,0),(31,8,'JARRIAZA','','',1,0),(32,8,'LARRIAZA','','',1,0),(33,7,'JTELON','CSCHAAD','JARRIAZA',1,0),(34,7,'JTELON','CSCHAAD','LARRIAZA',1,0),(35,8,'LARRIAZA','','',1,0),(36,7,'MMONZON','CSCHAAD','JARRIAZA',1,0),(37,7,'MMONZON','CSCHAAD','LARRIAZA',1,0),(38,7,'MMONZON','ACARDENAS','JARRIAZA',1,0),(39,7,'MMONZON','ACARDENAS','LARRIAZA',1,0),(40,7,'FLACAYO','CSCHAAD','JARRIAZA',1,0),(41,7,'FLACAYO','CSCHAAD','LARRIAZA',1,0),(42,7,'FLACAYO','ACARDENAS','JARRIAZA',1,0),(43,7,'FLACAYO','ACARDENAS','LARRIAZA',1,0),(44,7,'MMONZON','CSAGUIL','JARRIAZA',1,0),(45,7,'MMONZON','ACARDENAS','JARRIAZA',1,0),(46,7,'WSANTOS','CSAGUIL','JARRIAZA',1,0),(47,7,'WSANTOS','ACARDENAS','JARRIAZA',1,0),(48,7,'PNAVICHOC','JARRIAZA','',1,0),(49,8,'PNAVICHOC','JARRIAZA','',1,0),(50,8,'ACARDENAS','JARRIAZA','',1,0),(51,7,'RFERNANDEZ','PNAVICHOC','JARRIAZA',1,0),(52,6,'RFERNANDEZ','ACARDENAS','JARRIAZA',1,0),(53,7,'RFERNANDEZ','CSCHAAD','JARRIAZA',1,0),(54,7,'RFERNANDEZ','CSCHAAD','LARRIAZA',1,0),(55,7,'VALVAREZ','CSCHAAD','JARRIAZA',1,0),(56,7,'VALVAREZ','CSCHAAD','LARRIAZA',1,0),(57,7,'VALVAREZ','MBALAM','JARRIAZA',1,0),(58,7,'VALVAREZ','MBALAM','LARRIAZA',1,0),(59,8,'VALVAREZ','PNAVICHOC','JARRIAZA',1,0),(60,8,'VALVAREZ','ACARDENAS','JARRIAZA',1,0),(61,8,'VALVAREZ','CSAGUIL','JARRIAZA',1,0),(62,8,'VALVAREZ','ACARDENAS','JARRIAZA',1,0),(63,7,'VALVAREZ','CSAGUIL','JARRIAZA',1,0),(64,7,'VALVAREZ','CSAGUIL','LARRIAZA',1,0),(65,7,'VALVAREZ','ACARDENAS','JARRIAZA',1,0),(66,7,'VALVAREZ','ACARDENAS','LARRIAZA',1,0),(67,8,'VALVAREZ','JARRIAZA','',1,0),(68,8,'VALVAREZ','LARRIAZA','',1,0),(69,6,'VTOC','CSAGUIL','JARRIAZA',1,0),(70,7,'WLOPEZ','JARRIAZA','',1,0),(71,7,'WLOPEZ','LARRIAZA','',1,0),(72,8,'WLOPEZ','JARRIAZA','',1,0),(73,7,'WSANTOS','CSCHAAD','JARRIAZA',1,0),(74,7,'WSANTOS','CSCHAAD','LARRIAZA',1,0);
/*!40000 ALTER TABLE `ReferenciaGrupoAutorizacion` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-19 11:48:39
