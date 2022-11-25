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
-- Table structure for table `Banco`
--

DROP TABLE IF EXISTS `Banco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Banco` (
  `id_banco` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `direccion` varchar(200) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `codigo_transferencia` varchar(5) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `codigo_SAP` varchar(10) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `id_pais` int DEFAULT NULL,
  `activo` tinyint(1) DEFAULT NULL,
  `eliminado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_banco`),
  KEY `fk_pais` (`id_pais`),
  CONSTRAINT `fk_pais` FOREIGN KEY (`id_pais`) REFERENCES `Pais` (`IdPais`)
) ENGINE=InnoDB AUTO_INCREMENT=206 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Banco`
--

LOCK TABLES `Banco` WRITE;
/*!40000 ALTER TABLE `Banco` DISABLE KEYS */;
INSERT INTO `Banco` VALUES (1,'Banco de Guatemala','La Antigua Guatemala, Sacatepéquez','101','BGT',5,1,0),(2,'Crédito Hipotecario Nacional','Zacapa, Zacapa','104',NULL,5,1,0),(3,'Banco de Los Trabajadores','Chimaltenango, Chimaltenango','112',NULL,5,1,0),(4,'Banco Inmobiliario, S.A.','Guatemala, Guatemala','113',NULL,5,1,0),(5,'Banco Industrial, S.A.','Mixco, Guatemala','115','BI',5,1,0),(6,'Banco de Desarrollo Rural, S.A.','La Antigua Guatemala, Sacatepéquez','116','BRURAL',5,1,0),(7,'Banco Internacional, S.A.','Mixco, Guatemala','119',NULL,5,1,0),(8,'Citibank NA','Guatemala, Guatemala','130',NULL,5,1,0),(9,'Vivibanco, S.A.','Mixco, Guatemala','136',NULL,5,1,0),(10,'Banco Ficohsa Guatemala, S.A','Guatemala, Guatemala','139',NULL,5,1,0),(11,'Promerica, S.A.','Guatemala, Guatemala','140',NULL,5,1,0),(12,'Banco de Antigua, S.A.','La Antigua Guatemala, Sacatepéquez','141',NULL,5,1,0),(13,'BAC Guatemala','Guatemala, Guatemala','042','BAC',5,1,0),(14,'Banco Agromercantil','Mixco, Guatemala','144','BAM',5,1,0),(15,'Banco  G & T Continental','Guatemala, Guatemala','145',NULL,5,1,0),(16,'Banco de Credito','Mixco, Guatemala','146',NULL,5,1,0),(17,'Banco Azteca','Chimaltenango, Chimaltenango','147',NULL,5,1,0),(18,'Banco de Guatemala','Guatemala, Guatemala','201','BGT',5,1,0),(19,'Crédito Hipotecario Nacional','Mixco, Guatemala','204',NULL,5,1,0),(20,'Banco de Los Trabajadores','Quetzaltenango, Quetzaltenango','212',NULL,5,1,0),(21,'Banco Inmobiliario, S.A.','Mixco, Guatemala','213',NULL,5,1,0),(22,'Banco Industrial, S.A.','Guatemala, Guatemala','215','BI',5,0,1),(23,'Banco de Desarrollo Rural, S.A.','Guatemala, Guatemala','216','BRURAL',5,1,0),(24,'Banco Internacional, S.A.','Mixco, Guatemala','219',NULL,5,1,0),(25,'Citibank NA','Guatemala, Guatemala','230',NULL,5,1,0),(26,'Banco Ficohsa Guatemala, S.A.','La Antigua Guatemala, Sacatepéquez','239',NULL,5,1,0),(27,'Promerica, S.A.','Mixco, Guatemala','240',NULL,5,1,0),(28,'Banco de Antigua, S.A.','Guatemala, Guatemala','241',NULL,5,1,0),(29,'Banco Agromercantil','Guatemala, Guatemala','244','BAM',5,1,0),(30,'Banco  G & T Continental','Escuintla, Escuintla','245',NULL,5,1,0),(31,'Banco de Credito','Cuilapa, Santa Rosa','246',NULL,5,1,0),(32,'Banco Azteca','Guatemala, Guatemala','247',NULL,5,1,0),(33,'BANCO NACIONAL DE PANAMA','Panamá, Panamá','13',NULL,1,1,0),(34,'BANISTMO S.A.','Panamá, Panamá','26',NULL,1,1,0),(35,'CITIBANK','Panamá, Panamá','39',NULL,1,1,0),(36,'BANCO GENERAL','Panamá, Panamá','71',NULL,1,1,0),(37,'BBP BANK, S.A.','Panamá, Panamá','165',NULL,1,1,0),(38,'DAVIVIENDA','Panamá, Panamá','181',NULL,1,1,0),(39,'MULTIBANK','Panamá, Panamá','372',NULL,1,1,0),(40,'TOWERBANK','Panamá, Panamá','408',NULL,1,1,0),(41,'SCOTIABANK','Panamá, Panamá','424',NULL,1,1,0),(42,'BICSA','Panamá, Panamá','518',NULL,1,1,0),(43,'COOPERATIVA DE PROFESIONALES','Panamá, Panamá','712',NULL,1,1,0),(44,'BANVIVIENDA','Panamá, Panamá','767',NULL,1,1,0),(45,'CAJA DE AHORROS','Panamá, Panamá','770',NULL,1,1,0),(46,'METROBANK S.A.','Panamá, Panamá','1067',NULL,1,1,0),(47,'BANCO ALIADO','Panamá, Panamá','1083',NULL,1,1,0),(48,'CREDICORP BANK','Panamá, Panamá','1106',NULL,1,1,0),(49,'GLOBAL BANK','Panamá, Panamá','1151',NULL,1,1,0),(50,'BANCO UNIVERSAL','Panamá, Panamá','1258',NULL,1,1,0),(51,'BAC INTERNATIONAL BANK','Panamá, Panamá','1384',NULL,1,1,0),(52,'BCT BANK','Panamá, Panamá','1397',NULL,1,1,0),(53,'SCOTIABANK TRANSFORMÁNDOSE','Panamá, Panamá','1465',NULL,1,1,0),(54,'MMG BANK','Panamá, Panamá','1478',NULL,1,1,0),(55,'ST. GEORGES BANK','Panamá, Panamá','1494',NULL,1,1,0),(56,'BANCO AZTECA','Panamá, Panamá','1504',NULL,1,1,0),(57,'BANCO PICHINCHA PANAMA','Panamá, Panamá','1517',NULL,1,1,0),(58,'BANCO DELTA','Panamá, Panamá','1562',NULL,1,1,0),(59,'BANCO LAFISE PANAMÁ, S.A.','Panamá, Panamá','1575',NULL,1,1,0),(60,'BANESCO','Panamá, Panamá','1588',NULL,1,1,0),(61,'CAPITAL BANK','Panamá, Panamá','1591',NULL,1,1,0),(62,'BANCO PANAMA','Panamá, Panamá','1601',NULL,1,1,0),(63,'BANISI, S.A.','Panamá, Panamá','1614',NULL,1,1,0),(64,'MERCANTIL BANK','Panamá, Panamá','1630',NULL,1,1,0),(65,'PRIVAL BANK','Panamá, Panamá','1672',NULL,1,1,0),(66,'BALBOA BANK & TRUST','Panamá, Panamá','1685',NULL,1,1,0),(67,'UNI BANK & TRUST, INC','Panamá, Panamá','1708',NULL,1,1,0),(68,'BANCO FICOHSA PANAMA','Panamá, Panamá','1724',NULL,1,1,0),(69,'FPB Bank','Panamá, Panamá','1737',NULL,1,1,0),(70,'ALLBANK','Panamá, Panamá','1740',NULL,1,1,0),(71,'BANCOLOMBIA','Panamá, Panamá','1753',NULL,1,1,0),(72,'CANAL BANK','Panamá, Panamá','1779',NULL,1,1,0),(73,'COOPEDUC','Panamá, Panamá','2503',NULL,1,1,0),(74,'COOESAN','Panamá, Panamá','2516',NULL,1,1,0),(75,'CACECHI','Panamá, Panamá','2529',NULL,1,1,0),(76,'COEDUCO','Panamá, Panamá','2532',NULL,1,1,0),(77,'COOPEVE','Panamá, Panamá','2545',NULL,1,1,0),(78,'COOPERATIVA CRISTOBAL','Panamá, Panamá','5005',NULL,1,1,0),(79,'BANCO CENTRAL DE HONDURAS','Tegucigalpa, Honduras','001',NULL,4,1,0),(80,'BANCO ATLANTIDA','Tegucigalpa, Honduras','002',NULL,4,1,0),(81,'CITI BANK','Tegucigalpa, Honduras','028',NULL,4,1,0),(82,'BANCO DE LOS TRABAJADORES','Tegucigalpa, Honduras','006',NULL,4,1,0),(83,'BANCO DE OCCIDENTE','Tegucigalpa, Honduras','007',NULL,4,1,0),(84,'BANCO DE HONDURAS','Tegucigalpa, Honduras','013',NULL,4,1,0),(85,'BANCO HONDUREÑO DEL CAFE','Tegucigalpa, Honduras','014',NULL,4,1,0),(86,'BANCO DEL PAIS','Tegucigalpa, Honduras','015',NULL,4,1,0),(87,'BANCO LAFISE','Tegucigalpa, Honduras','017',NULL,4,1,0),(88,'BANCO FICENSA','Tegucigalpa, Honduras','018',NULL,4,1,0),(89,'BAC DE HONDURAS','Tegucigalpa, Honduras','024',NULL,4,1,0),(90,'BANCO PROMERICA','Tegucigalpa, Honduras','025',NULL,4,1,0),(91,'BANCO FICOHSA','Tegucigalpa, Honduras','028',NULL,4,1,0),(92,'DAVIVIENDA','Tegucigalpa, Honduras','030',NULL,4,1,0),(93,'PROCREDIT','Tegucigalpa, Honduras','031',NULL,4,1,0),(94,'BANCO AZTECA','Tegucigalpa, Honduras','032',NULL,4,1,0),(95,'BANCO BANADESA','Tegucigalpa, Honduras','051',NULL,4,1,0),(96,'CREDIQ','Tegucigalpa, Honduras','052',NULL,4,1,0),(97,'Banco Agricola','San Salvador, El Salvador','001',NULL,6,1,0),(98,'Davivienda','San Salvador, El Salvador','005',NULL,6,1,0),(99,'Citibank NA','San Salvador, El Salvador','037',NULL,6,1,0),(100,'Scotiabank','San Salvador, El Salvador','021',NULL,6,1,0),(101,'Banco América Central','San Salvador, El Salvador','025',NULL,6,1,0),(102,'Banco Industrial','San Salvador, El Salvador','032',NULL,6,1,0),(103,'Banco G&T','San Salvador, El Salvador','030',NULL,6,1,0),(104,'Banco Cuscatlán','San Salvador, El Salvador','009',NULL,6,1,0),(105,'LAFISE','Managua, Nicaragua','006',NULL,3,1,0),(106,'BAC','Managua, Nicaragua','007',NULL,3,1,0),(107,'BANPRO','Managua, Nicaragua','008',NULL,3,1,0),(108,'CITI/FICOHSA','Managua, Nicaragua','009',NULL,3,1,0),(109,'BDF','Managua, Nicaragua','012',NULL,3,1,0),(110,'PROCREDIT','Managua, Nicaragua','019',NULL,3,1,0),(111,'PRODUZCAMOS','Managua, Nicaragua','023',NULL,3,1,0),(112,'BANCORP','Managua, Nicaragua','030','BANCOR',3,1,0),(113,'Banco Central de Costa Rica','San José, Costa Rica','100',NULL,2,1,0),(114,'BAC San José S.A.','San José, Costa Rica','102',NULL,2,1,0),(115,'Banco Davivienda (Costa Rica) S.A.','San José, Costa Rica','104',NULL,2,1,0),(116,'Banco BCT, S. A.','San José, Costa Rica','107',NULL,2,1,0),(117,'Banco LAFISE S. A.','San José, Costa Rica','114',NULL,2,1,0),(118,'Banca Promérica S.A.','San José, Costa Rica','116',NULL,2,1,0),(119,'Banco Citibank (Costa Rica), S.A.','San José, Costa Rica','117',NULL,2,1,0),(120,'Banco Improsa S.A.','San José, Costa Rica','120',NULL,2,1,0),(121,'Scotiabank de Costa Rica S.A.','San José, Costa Rica','123',NULL,2,1,0),(122,'Banco Cathay de Costa Rica S.A.','San José, Costa Rica','125',NULL,2,1,0),(123,'Banco General (Costa Rica) S.A.','San José, Costa Rica','126',NULL,2,1,0),(124,'Banco CMB (Costa Rica) S.A.','San José, Costa Rica','127',NULL,2,1,0),(125,'Banco Nacional de Costa Rica','San José, Costa Rica','151',NULL,2,1,0),(126,'Banco de Costa Rica','San José, Costa Rica','152',NULL,2,1,0),(127,'Banco Crédito Agrícola de Cartago','San José, Costa Rica','153',NULL,2,1,0),(128,'Banco Popular y de Desarrollo Comunal','San José, Costa Rica','161',NULL,2,1,0),(129,'Banco Hipotecario de la Vivienda','San José, Costa Rica','162',NULL,2,1,0),(130,'Asociación Solidarista de Empleados de la CCSS (ASECCSS)','San José, Costa Rica','205',NULL,2,1,0),(131,'Financiera Cafsa S. A.','San José, Costa Rica','304',NULL,2,1,0),(132,'Financiera G&T Continental Costa Rica S. A.','San José, Costa Rica','310',NULL,2,1,0),(133,'Banco Prival Bank (Costa Rica) S.A.','San José, Costa Rica','312',NULL,2,1,0),(134,'Financiera Comeca S. A.','San José, Costa Rica','322',NULL,2,1,0),(135,'Financiera Desyfin S. A.','San José, Costa Rica','326',NULL,2,1,0),(136,'Global Exchange','San José, Costa Rica','402',NULL,2,1,0),(137,'Teledolar S.A.','San José, Costa Rica','403',NULL,2,1,0),(138,'Latin American Exchange Casa de Cambio S.A (Latinex)','San José, Costa Rica','406',NULL,2,1,0),(139,'Citi Tarjetas de Costa Rica S.A.','San José, Costa Rica','450',NULL,2,1,0),(140,'Evertec Costa Rica S.A.','San José, Costa Rica','451',NULL,2,1,0),(141,'Bolsa Nacional de Valores S.A.','San José, Costa Rica','501',NULL,2,1,0),(142,'Inversiones Sama, S.A.','San José, Costa Rica','553',NULL,2,1,0),(143,'Mercado de Valores de C. R.','San José, Costa Rica','544',NULL,2,1,0),(144,'BCT Valores','San José, Costa Rica','556',NULL,2,1,0),(145,'Citi Valores Accival, S.A.','San José, Costa Rica','558',NULL,2,1,0),(146,'ACOBO','San José, Costa Rica','559',NULL,2,1,0),(147,'INS Valores','San José, Costa Rica','568',NULL,2,1,0),(148,'Lafise Valores','San José, Costa Rica','569',NULL,2,1,0),(149,'Davivienda Puesto de Bolsa (Costa Rica) S.A.','San José, Costa Rica','570',NULL,2,1,0),(150,'Scotia Valores','San José, Costa Rica','571',NULL,2,1,0),(151,'Mutual Valores','San José, Costa Rica','574',NULL,2,1,0),(152,'Aldesa Valores','San José, Costa Rica','577',NULL,2,1,0),(153,'BAC San José','San José, Costa Rica','581',NULL,2,1,0),(154,'BN Valores','San José, Costa Rica','586',NULL,2,1,0),(155,'Popular Valores','San José, Costa Rica','587',NULL,2,1,0),(156,'BCR Valores','San José, Costa Rica','588',NULL,2,1,0),(157,'Improsa Valores','San José, Costa Rica','594',NULL,2,1,0),(158,'BN-VITAL Operadora de Planes de Pensiones Complementarias, S. A.','San José, Costa Rica','651',NULL,2,1,0),(159,'Vida Plena Operadora de Pensiones Complementarias S. A','San José, Costa Rica','653',NULL,2,1,0),(160,'Caja Costarricense de Seguro Social Operadora de Pensiones Complementarias','San José, Costa Rica','654',NULL,2,1,0),(161,'Bac San José Operadora de Pensiones Complementarias','San José, Costa Rica','655',NULL,2,1,0),(162,'O.P.C.  Banco Popular y Desarrollo Comunal','San José, Costa Rica','656',NULL,2,1,0),(163,'BCR Operadora Planes de Pensiones Complementarias','San José, Costa Rica','657',NULL,2,1,0),(164,'MIDEPLAN','San José, Costa Rica','725',NULL,2,1,0),(165,'Instituto de Fomento y Asesoría Municipal (IFAM)','San José, Costa Rica','730',NULL,2,1,0),(166,'Instituto Costarricense sobre Drogas (ICD)','San José, Costa Rica','731',NULL,2,1,0),(167,'Instituto Costarricense de Electricidad (ICE)','San José, Costa Rica','734',NULL,2,1,0),(168,'Recope','San José, Costa Rica','735',NULL,2,1,0),(169,'Ministerio de Hacienda','San José, Costa Rica','739',NULL,2,1,0),(170,'Central de Valores Bolsa Nacional de Valores (CEVAL)','San José, Costa Rica','745',NULL,2,1,0),(171,'Caja Costarricense de Seguro Social (CCSS)','San José, Costa Rica','746',NULL,2,1,0),(172,'Instituto Nacional de Seguros (INS)','San José, Costa Rica','747',NULL,2,1,0),(173,'Gob. Tribunal Supremo de Elecciones (TSE)','San José, Costa Rica','750',NULL,2,1,0),(174,'Junta de Protección Social de San José','San José, Costa Rica','754',NULL,2,1,0),(175,'Municipalidad de San José','San José, Costa Rica','755',NULL,2,1,0),(176,'Radiográfica Costarricense S.A. (RACSA)','San José, Costa Rica','756',NULL,2,1,0),(177,'Municipalidad de Cartago','San José, Costa Rica','757',NULL,2,1,0),(178,'Municipalidad de Palmares','San José, Costa Rica','758',NULL,2,1,0),(179,'Municipalidad del Guarco','Guarco, Costa Rica','759',NULL,2,1,0),(180,'Municipalidad de Alajuelita','Alajuela, Costa Rica','760',NULL,2,1,0),(181,'Grupo Mutual Alajuela la Vivienda','Alajuela, Costa Rica','803',NULL,2,1,0),(182,'Mutual Cartago de Ahorro y Préstamo','San José, Costa Rica','804',NULL,2,1,0),(183,'Cooperativa de Ahorro y Crédito de la Comunidad de Ciudad Quesada R. L. (COOCIQUE)','San José, Costa Rica','811',NULL,2,1,0),(184,'COOPE SAN MARCOS','San José, Costa Rica','812',NULL,2,1,0),(185,'Cooperativa de Ahorro y Crédito Alianza de Pérez Zeledón (COOPEALIANZA)','San José, Costa Rica','813',NULL,2,1,0),(186,'Cooperativa Nacional de Educadores. R.L. (COOPENAE)','San José, Costa Rica','814',NULL,2,1,0),(187,'SERVICOOP R.L.','San José, Costa Rica','815',NULL,2,1,0),(188,'Cooperativa de Ahorro y Crédito de Servidores Públicos R.L. (COOPESERVIDORES)','San José, Costa Rica','816',NULL,2,1,0),(189,'Cooperativa de Ahorro y Crédito ANDE Nº 1 R.L. (COOPEANDE).','San José, Costa Rica','817',NULL,2,1,0),(190,'Coop. COOPECAJA','San José, Costa Rica','820',NULL,2,1,0),(191,'Caja de Ahorro y Préstamos de ANDE','San José, Costa Rica','821',NULL,2,1,0),(192,'COOPEMEP R.L.','San José, Costa Rica','822',NULL,2,1,0),(193,'CREDECOOP','San José, Costa Rica','824',NULL,2,1,0),(194,'COOPESAN RAMON','San José, Costa Rica','825',NULL,2,1,0),(195,'COOPEBANPO','San José, Costa Rica','827',NULL,2,1,0),(196,'COOPEAMISTAD','San José, Costa Rica','829',NULL,2,1,0),(197,'COOPEGRECIA','San José, Costa Rica','831',NULL,2,1,0),(198,'COOPAVEGRA','San José, Costa Rica','832',NULL,2,1,0),(199,'COOPEUNA','San José, Costa Rica','833',NULL,2,1,0),(200,'COOPEANDE No. 7 R.L.','San José, Costa Rica','834',NULL,2,1,0),(201,'COOPESPARTA R.L.','San José, Costa Rica','835',NULL,2,1,0),(202,'Credomatic','San José, Costa Rica','837',NULL,2,1,0),(203,'Promotora del Comercio Exterior de Costa Rica (Procomer)','San José, Costa Rica','838',NULL,2,1,0),(204,'Interclear Central de Valores S.A.','San José, Costa Rica','839',NULL,2,1,0),(205,'COOPEMÉDICOS','San José, Costa Rica','840',NULL,2,1,0);
/*!40000 ALTER TABLE `Banco` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-19 11:47:36