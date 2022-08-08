-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: winsdar
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `products`
--
use heroku_c96715d30aa9578;

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `product_id` int NOT NULL,
  `name` varchar(50) NOT NULL,
  `anime` varchar(50) NOT NULL,
  `price` int NOT NULL,
  `address` varchar(1000) NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Kagura Tanjiro','Demon Slayer',50,'https://www.google.com/imgres?imgurl=http%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1426%2F3142%2Fproducts%2F0001_sword2_grande.jpg%3Fv%3D1632474918&imgrefurl=https%3A%2F%2Fsugoimart.com%2Fproducts%2Fdemon-slayer-sword-hinokami-kagura-1-1&tbnid=8tNFb-pqt1TrgM&vet=12ahUKEwi4yeSHkLP4AhXlj2oFHXIHBcMQMygnegUIARDqAw..i&docid=bpWy50YdR93csM&w=600&h=487&q=kagura%20sword%20demon%20slayer&ved=2ahUKEwi4yeSHkLP4AhXlj2oFHXIHBcMQMygnegUIARDqAw'),(2,'Kochou Shinobu','Demon Slayer',55,'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51ovwIHPOUL._AC_UX385_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FSlayer-Kochou-Shinobu-Cosplay-Samurai%2Fdp%2FB08LMHR7DR&tbnid=hrwB7UYvVTqVRM&vet=12ahUKEwi90vKfk7P4AhU-gmoFHe0VCBUQMygEegUIARCCAw..i&docid=BHLbiaC4KuZUpM&w=385&h=443&q=kochou%20shinobu%20sword%20demon%20slayer&ved=2ahUKEwi90vKfk7P4AhU-gmoFHe0VCBUQMygEegUIARCCAw'),(3,'Rengoku Kyojurou','Demon Slayer',60,'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.webshopapp.com%2Fshops%2F305440%2Ffiles%2F387312494%2Fimage.jpg&imgrefurl=https%3A%2F%2Fwww.otakuninjahero.com%2Fen%2Fdemon-slayer-kyojuro-rengoku-red-nichirin-blade-wo.html&tbnid=mwYEZa4Wq9qbrM&vet=12ahUKEwj2wMv7k7P4AhWRlWoFHe3uDB8Q94IIKAZ6BQgBEPkC..i&docid=Gqk7WhI3PIkOTM&w=1000&h=1000&q=rengoku%20sword%20demon%20slayer&ved=2ahUKEwj2wMv7k7P4AhWRlWoFHe3uDB8Q94IIKAZ6BQgBEPkC'),(4,'Enma','One Piece',60,'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.ezcosplay.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F88a5a78f5dc8f5fb801e9020fd0d9592%2F2%2F7%2F2780193_1630143387_1.jpg&imgrefurl=https%3A%2F%2Fm.ezcosplay.com%2Fone-piece-roronoa-zoro-purple-enma-sword-cosplay-weapon-prop.html&tbnid=ncSIsWTpFSJlvM&vet=12ahUKEwiN3fCtlLP4AhWjj2oFHY_vBYkQMygBegUIARC7AQ..i&docid=fmNbiiq9Gb8X6M&w=500&h=600&q=enma%20sword%20one%20piece&ved=2ahUKEwiN3fCtlLP4AhWjj2oFHY_vBYkQMygBegUIARC7AQ'),(5,'Shusui','One Piece',60,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvnuguulo7nhSHyNjhX5lH-noSDwPZVbffOX3nAyuf41dgfTUUVPXcw6v0b2jlrs02EE8&usqp=CAU'),(6,'Wado Ichimojii','One Piece',60,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_jc_7xmUCb3qWf1BKymSatWuPAWsjwEGyK4CIP58uF9q492x8jDqr0HV84zevo6pbEgQ&usqp=CAU');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-16 22:54:50
