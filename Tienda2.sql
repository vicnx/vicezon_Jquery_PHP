-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 15-02-2020 a las 12:33:35
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
(1, 'samsung'),
(2, 'xiaomi'),
(3, 'iphone'),
(4, 'sony'),
(5, 'motorola'),
(6, 'Oppo'),
(7, 'redmi'),
(8, 'hola');

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
(1, 'client');

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
  `rating` double NOT NULL DEFAULT '0',
  `imagen` varchar(255) NOT NULL DEFAULT 'module/admin/module/tablets/view/img/default.png'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Tablets`
--

INSERT INTO `Tablets` (`idproduct`, `nombre`, `price`, `marca`, `fpublic`, `colores`, `sim`, `rating`, `imagen`) VALUES
(1, 'Oppo B', '2215', 3, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 3.97, 'module/admin/module/tablets/view/img/7.jpg'),
(2, 'Nokia B', '943', 1, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 1.73, 'module/admin/module/tablets/view/img/12.jpg'),
(3, 'Alcatel A', '8693', 4, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 3.43, 'module/admin/module/tablets/view/img/4.jpg'),
(4, 'Honor note', '4081', 3, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 9.84, 'module/admin/module/tablets/view/img/4.jpg'),
(5, 'Cubot air', '2931', 5, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 4.13, 'module/admin/module/tablets/view/img/7.jpg'),
(6, 'huaweiZ', '477', 3, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 8.46, 'module/admin/module/tablets/view/img/2.jpg'),
(7, 'Umidgi J', '5126', 5, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 0.87, 'module/admin/module/tablets/view/img/2.jpg'),
(8, 'Xtrem A', '231', 2, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 5.02, 'module/admin/module/tablets/view/img/11.jpg'),
(9, 'Realme I', '9128', 4, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 0.44, 'module/admin/module/tablets/view/img/11.jpg'),
(10, 'Windows plus', '8873', 3, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 2.24, 'module/admin/module/tablets/view/img/9.jpg'),
(11, 'Umidgi B', '6299', 4, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 3.53, 'module/admin/module/tablets/view/img/11.jpg'),
(12, 'Meizu tab', '3852', 4, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 4.62, 'module/admin/module/tablets/view/img/2.jpg'),
(13, 'Xiaomi air', '7530', 5, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 8.66, 'module/admin/module/tablets/view/img/11.jpg'),
(14, 'Oppo tab', '308', 3, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 5.33, 'module/admin/module/tablets/view/img/17.jpg'),
(15, 'OppoZ', '5890', 1, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 8.93, 'module/admin/module/tablets/view/img/6.jpg'),
(16, 'Nokia tab', '6816', 4, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 2.23, 'module/admin/module/tablets/view/img/11.jpg'),
(17, 'Samsung mi', '1455', 5, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 2.88, 'module/admin/module/tablets/view/img/8.jpg'),
(18, 'Oppo C', '5560', 2, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 3.29, 'module/admin/module/tablets/view/img/1.jpg'),
(19, 'Meizu air', '9491', 3, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 4.53, 'module/admin/module/tablets/view/img/1.jpg'),
(20, 'IPad G', '2709', 2, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 9.76, 'module/admin/module/tablets/view/img/18.jpg');

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
  MODIFY `idbrand` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT de la tabla `Tablets`
--
ALTER TABLE `Tablets`
  MODIFY `idproduct` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
