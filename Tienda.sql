-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 03-02-2020 a las 22:45:57
-- Versión del servidor: 5.7.28-0ubuntu0.18.04.4
-- Versión de PHP: 7.2.24-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `Tienda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brands`
--

CREATE TABLE `brands` (
  `idbrand` int(30) NOT NULL,
  `namebrand` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `brands`
--

INSERT INTO `brands` (`idbrand`, `namebrand`) VALUES
(1, 'samsung');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `loginusers`
--

CREATE TABLE `loginusers` (
  `iduser` int(11) NOT NULL,
  `rankuser` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `loginusers`
--

INSERT INTO `loginusers` (`iduser`, `rankuser`) VALUES
(1, 'admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Tablets`
--

CREATE TABLE `Tablets` (
  `idproduct` int(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `marca` int(30) NOT NULL,
  `fpublic` varchar(255) DEFAULT NULL,
  `colores` varchar(255) NOT NULL,
  `sim` varchar(255) DEFAULT NULL,
  `rating` double NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Tablets`
--

INSERT INTO `Tablets` (`idproduct`, `nombre`, `price`, `marca`, `fpublic`, `colores`, `sim`, `rating`) VALUES
(1, 'SamsungZ', '5425', 10, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 5.31),
(2, 'huawei J', '1473', 4, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 6.67),
(3, 'Oppo D', '3243', 2, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 4.93),
(4, 'huawei C', '2483', 8, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 7.54),
(5, 'WindowsZ', '7299', 5, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 0.1),
(6, 'Meizu P', '5071', 6, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 3.72),
(7, 'Alcatel B', '4639', 8, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 7.01),
(8, 'Windows J', '1487', 9, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 2.89),
(9, 'Xiaomi A', '6390', 1, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 6.94),
(10, 'Umidgi plus', '7266', 3, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 5.91),
(11, 'Meizu note', '1063', 9, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 7.1),
(12, 'Umidgi F', '3300', 10, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 9.1),
(13, 'IPad I', '1162', 3, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 7.27),
(14, 'Alcatel I', '9983', 3, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 7.63),
(15, 'Meizu Version', '5945', 1, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 1.47),
(16, 'Oppo tab', '2917', 1, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 2.14),
(17, 'Samsung R', '5050', 5, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 0.57),
(18, 'Windows plus', '8960', 4, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 5.4),
(19, 'Alcatel F', '9456', 2, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 3.16),
(20, 'Samsung note', '5970', 3, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 3.31),
(21, 'holacaralo', '22312', 1, '02/05/2020', 'Azul:', 'No', 0),
(22, 'testbrands1', '2000', 1, '02/05/2020', 'Azul:Negro:Blanco:Rojo:', 'Yes', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`idbrand`);

--
-- Indices de la tabla `Tablets`
--
ALTER TABLE `Tablets`
  ADD PRIMARY KEY (`idproduct`),
  ADD UNIQUE KEY `nombre` (`nombre`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `brands`
--
ALTER TABLE `brands`
  MODIFY `idbrand` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `Tablets`
--
ALTER TABLE `Tablets`
  MODIFY `idproduct` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
