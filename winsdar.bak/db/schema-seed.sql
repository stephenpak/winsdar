
CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `anime` varchar(50) NOT NULL,
  `price` INT NOT NULL,
  `address` varchar(50) NOT NULL,
  PRIMARY KEY (`client_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `products` VALUES (1,'Kagura Tanjiro','DEMON SLAYER','$50');
INSERT INTO `products` VALUES (2,'Kochou Shinobu','DEMON SLAYER','$55');
INSERT INTO `products` VALUES (3,'Rengoku Kyojurou','DEMON SLAYER','$60');
INSERT INTO `products` VALUES (4,'Enma','ONEPIECE','Waco','60');
INSERT INTO `products` VALUES (5,'Shusui','ONEPIECE','60');
INSERT INTO `products` VALUES (6,'Wado Ichimoji','ONEPIECE','60');