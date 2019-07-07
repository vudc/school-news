-- MySQL dump 10.13  Distrib 8.0.11, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: school_news
-- ------------------------------------------------------
-- Server version	8.0.11

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
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `comment` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `user_ID` int(11) DEFAULT NULL,
  `Tin_tuc_ID` int(11) DEFAULT NULL,
  `NoiDung` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `CreateAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `UpdateAt` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,1,1,'Bài này hay nè','2019-07-06 13:27:12',NULL),(2,1,1,'Bài này ổn áp','2019-07-06 13:27:12',NULL),(3,1,3,'cũng tạm','2019-07-06 13:47:50',NULL),(4,1,4,'hay','2019-07-06 13:49:15',NULL),(5,1,2,'deff','2019-07-06 13:50:43',NULL);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loai_tin`
--

DROP TABLE IF EXISTS `loai_tin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `loai_tin` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `the_loai_ID` int(11) DEFAULT NULL,
  `Ten` varchar(245) COLLATE utf8_unicode_ci DEFAULT NULL,
  `TenKhongDau` varchar(245) COLLATE utf8_unicode_ci DEFAULT NULL,
  `CreateAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `UpdateAt` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loai_tin`
--

LOCK TABLES `loai_tin` WRITE;
/*!40000 ALTER TABLE `loai_tin` DISABLE KEYS */;
INSERT INTO `loai_tin` VALUES (1,1,'Tuyển sinh','tuyen-sinh','2019-07-05 21:55:16',NULL),(2,1,'Tốt nghiệp','tot-nghiep','2019-07-05 21:55:16',NULL),(3,2,'Tuyển sinh','tuyen-sinh','2019-07-05 21:55:16',NULL),(4,2,'Liên thông','lien-thong','2019-07-05 21:55:16',NULL),(7,1,'Liên thông','lien-thong','2019-07-06 13:06:24',NULL);
/*!40000 ALTER TABLE `loai_tin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `slide`
--

DROP TABLE IF EXISTS `slide`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `slide` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Ten` varchar(245) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Hinh` varchar(245) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Link` varchar(245) COLLATE utf8_unicode_ci DEFAULT NULL,
  `CreateAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `UpdateAt` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slide`
--

LOCK TABLES `slide` WRITE;
/*!40000 ALTER TABLE `slide` DISABLE KEYS */;
/*!40000 ALTER TABLE `slide` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `the_loai`
--

DROP TABLE IF EXISTS `the_loai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `the_loai` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Ten` varchar(245) COLLATE utf8_unicode_ci DEFAULT NULL,
  `TenKhongDau` varchar(245) COLLATE utf8_unicode_ci DEFAULT NULL,
  `CreateAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `UpdateAt` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `the_loai`
--

LOCK TABLES `the_loai` WRITE;
/*!40000 ALTER TABLE `the_loai` DISABLE KEYS */;
INSERT INTO `the_loai` VALUES (1,'Cao Đẳng','cao-dang','2019-07-05 21:54:24',NULL),(2,'Đại học','dai-hoc','2019-07-05 21:54:24',NULL),(3,'Trung Cấp','trung-cap','2019-07-06 12:32:15',NULL),(5,'thể loại mới','the-loai-moi','2019-07-06 13:26:27',NULL);
/*!40000 ALTER TABLE `the_loai` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tin_tuc`
--

DROP TABLE IF EXISTS `tin_tuc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tin_tuc` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `TieuDe` varchar(245) COLLATE utf8_unicode_ci DEFAULT NULL,
  `TieuDeKhongDau` varchar(245) COLLATE utf8_unicode_ci DEFAULT NULL,
  `TomTat` varchar(2245) COLLATE utf8_unicode_ci DEFAULT NULL,
  `NoiDung` mediumtext COLLATE utf8_unicode_ci,
  `Hinh` varchar(245) COLLATE utf8_unicode_ci DEFAULT NULL,
  `NoiBat` int(11) DEFAULT NULL,
  `SoLuotXem` int(11) DEFAULT NULL,
  `Loai_tin_ID` int(11) DEFAULT NULL,
  `CreateAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `UpdateAt` datetime DEFAULT NULL,
  `user_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tin_tuc`
--

LOCK TABLES `tin_tuc` WRITE;
/*!40000 ALTER TABLE `tin_tuc` DISABLE KEYS */;
INSERT INTO `tin_tuc` VALUES (1,'bài viết 1','bai-viet-1','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, quo, minima, inventore\n                                voluptatum saepe quos nostrum provident','<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste      ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus,     voluptatibus.</p>     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius        illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure! </p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeattotam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquamenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui,necessitatibus, est!</p>',NULL,NULL,NULL,1,'2019-07-05 22:48:50',NULL,1),(2,'bài viết 2','bai-viet-2','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, quo, minima, inventore\n                                voluptatum saepe quos nostrum provident','<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste      ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus,     voluptatibus.</p>     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius        illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure! </p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeattotam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquamenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui,necessitatibus, est!</p>',NULL,NULL,NULL,1,'2019-07-05 22:48:50',NULL,1),(3,'bài viết 3','bai-viet-3','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, quo, minima, inventore\n                                voluptatum saepe quos nostrum provident','<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste      ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus,     voluptatibus.</p>     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius        illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure! </p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeattotam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquamenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui,necessitatibus, est!</p>',NULL,NULL,NULL,1,'2019-07-05 23:05:54',NULL,1),(4,'bài viết 4','bai-viet-4','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, quo, minima, inventore\n                                voluptatum saepe quos nostrum provident','<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste      ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus,     voluptatibus.</p>     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius        illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure! </p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeattotam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquamenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui,necessitatibus, est!</p>',NULL,NULL,NULL,1,'2019-07-05 23:05:54',NULL,1);
/*!40000 ALTER TABLE `tin_tuc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `CreateAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `UpdateAt` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Công Vủ','admin@gmail.com','123456','2019-07-05 14:40:44',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-07 23:09:43
