SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

CREATE DATABASE IF NOT EXISTS `db_authentication` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `db_authentication`;

DROP TABLE IF EXISTS `t_users`;
CREATE TABLE `t_users` (
  `idUser` int NOT NULL,
  `useName` varchar(255) NOT NULL,
  `usePassword` varchar(255) NOT NULL,
  `useSalt` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `t_users` (`idUser`, `useName`, `usePassword`,`useSalt`) VALUES
(1, 'john', '1234','test');


ALTER TABLE `t_users`
  ADD PRIMARY KEY (`idUser`),
  ADD UNIQUE KEY `idx_unique_name` (`useName`);


ALTER TABLE `t_users`
  MODIFY `idUser` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
