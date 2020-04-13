-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-04-2020 a las 17:12:34
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tienda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brands`
--

CREATE TABLE `brands` (
  `idbrand` int(30) NOT NULL,
  `namebrand` varchar(255) NOT NULL,
  `views` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `brands`
--

INSERT INTO `brands` (`idbrand`, `namebrand`, `views`) VALUES
(1, 'samsung', 11),
(2, 'xiaomi', 32),
(3, 'iphone', 68),
(4, 'sony', 93),
(5, 'motorola', 30),
(6, 'Oppo', 0),
(7, 'redmi', 0),
(8, 'hola', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cart`
--

CREATE TABLE `cart` (
  `username` varchar(255) NOT NULL,
  `idproduct` int(255) NOT NULL,
  `qty` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cart`
--

INSERT INTO `cart` (`username`, `idproduct`, `qty`) VALUES
('test', 3, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturas`
--

CREATE TABLE `facturas` (
  `idfactura` int(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `total_factura` int(255) NOT NULL,
  `fecha` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `facturas`
--

INSERT INTO `facturas` (`idfactura`, `username`, `total_factura`, `fecha`) VALUES
(1, 'test', 39558, '2020-04-13 13:57:08'),
(2, 'test', 46496, '2020-04-13 15:46:44'),
(3, 'test', 71600, '2020-04-13 17:03:38'),
(4, 'test', 50952, '2020-04-13 17:07:43');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura_linea`
--

CREATE TABLE `factura_linea` (
  `idlinea` int(255) NOT NULL,
  `idfactura` int(255) NOT NULL,
  `idproduct` varchar(255) NOT NULL,
  `qty` int(255) NOT NULL,
  `cost` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `factura_linea`
--

INSERT INTO `factura_linea` (`idlinea`, `idfactura`, `idproduct`, `qty`, `cost`) VALUES
(1, 1, '6', 4, 1908),
(2, 1, '13', 5, 37650),
(3, 2, '3', 4, 34772),
(4, 2, '5', 4, 11724),
(5, 3, '3', 6, 52158),
(6, 3, '4', 2, 8162),
(7, 3, '5', 2, 5862),
(8, 3, '20', 2, 5418),
(9, 4, '13', 4, 30120),
(10, 4, '4', 3, 12243),
(11, 4, '5', 1, 2931),
(12, 4, '2', 6, 5658);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `likes`
--

CREATE TABLE `likes` (
  `username` varchar(255) NOT NULL,
  `idproduct` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `likes`
--

INSERT INTO `likes` (`username`, `idproduct`) VALUES
('test', 0),
('test', 2),
('test', 3),
('test', 4),
('test', 5),
('test', 6),
('test', 12),
('test', 15),
('test', 19),
('test', 20);

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
-- Estructura de tabla para la tabla `tablets`
--

CREATE TABLE `tablets` (
  `idproduct` int(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `price` int(255) NOT NULL,
  `marca` int(30) NOT NULL,
  `fpublic` varchar(255) DEFAULT NULL,
  `colores` varchar(255) NOT NULL,
  `sim` varchar(255) DEFAULT NULL,
  `rating` double NOT NULL DEFAULT 0,
  `imagen` varchar(255) NOT NULL DEFAULT 'module/admin/module/tablets/view/img/default.png',
  `views` int(11) NOT NULL DEFAULT 0,
  `stock` int(255) NOT NULL DEFAULT 1000
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tablets`
--

INSERT INTO `tablets` (`idproduct`, `nombre`, `price`, `marca`, `fpublic`, `colores`, `sim`, `rating`, `imagen`, `views`, `stock`) VALUES
(1, 'Oppo B', 2215, 3, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 3.97, 'module/admin/module/tablets/view/img/7.jpg', 7, 0),
(2, 'Nokia B', 943, 1, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 1.73, 'module/admin/module/tablets/view/img/12.jpg', 11, 977),
(3, 'Alcatel A', 8693, 4, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 3.43, 'module/admin/module/tablets/view/img/4.jpg', 91, 956),
(4, 'Honor note', 4081, 3, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 9.84, 'module/admin/module/tablets/view/img/4.jpg', 54, 992),
(5, 'Cubot air', 2931, 5, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 4.13, 'module/admin/module/tablets/view/img/7.jpg', 28, 992),
(6, 'huaweiZ', 477, 3, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 8.46, 'module/admin/module/tablets/view/img/2.jpg', 2, 940),
(7, 'Umidgi J', 5126, 5, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 0.87, 'module/admin/module/tablets/view/img/2.jpg', 0, 1000),
(8, 'Xtrem A', 231, 2, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 5.02, 'module/admin/module/tablets/view/img/11.jpg', 0, 1000),
(9, 'Realme I', 9128, 4, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 0.44, 'module/admin/module/tablets/view/img/11.jpg', 4, 1000),
(10, 'Windows plus', 8873, 3, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 2.24, 'module/admin/module/tablets/view/img/9.jpg', 0, 1000),
(11, 'Umidgi B', 6299, 4, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 3.53, 'module/admin/module/tablets/view/img/11.jpg', 0, 1000),
(12, 'Meizu tab', 3852, 4, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 4.62, 'module/admin/module/tablets/view/img/2.jpg', 0, 1000),
(13, 'Xiaomi air', 7530, 5, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 8.66, 'module/admin/module/tablets/view/img/11.jpg', 2, 982),
(14, 'Oppo tab', 308, 3, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 5.33, 'module/admin/module/tablets/view/img/17.jpg', 4, 1000),
(15, 'OppoZ', 5890, 1, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 8.93, 'module/admin/module/tablets/view/img/6.jpg', 0, 998),
(16, 'Nokia tab', 6816, 4, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 2.23, 'module/admin/module/tablets/view/img/11.jpg', 0, 1000),
(17, 'Samsung mi', 1455, 5, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 2.88, 'module/admin/module/tablets/view/img/8.jpg', 0, 1000),
(18, 'Oppo C', 5560, 2, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 3.29, 'module/admin/module/tablets/view/img/1.jpg', 0, 1000),
(19, 'Meizu air', 9491, 3, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 4.53, 'module/admin/module/tablets/view/img/1.jpg', 5, 1000),
(20, 'IPad G', 2709, 2, '12/02/2019', 'Azul:Negro:Blanco:Rojo:', 'Yes', 9.76, 'module/admin/module/tablets/view/img/18.jpg', 31, 896),
(21, 'pili', 20000, 2, '03/01/2020', 'Blanco:', 'Yes', 2, 'module/admin/module/tablets/view/img/18.jpg', 6, 1000),
(22, 'teststock', 200, 2, '04/01/2020', 'Negro:', 'Yes', 2, 'module/admin/module/tablets/view/img/18.jpg', 0, 1000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `username` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `saldo` int(255) NOT NULL DEFAULT 100000
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`username`, `first_name`, `last_name`, `email`, `password`, `type`, `avatar`, `saldo`) VALUES
('test', 'test', 'test', 'test@test.com', '$2y$10$k/nYlqB7K7MOn1pm/SLYhuDnG331f3OwlGqqhfGs5eQ0DinDxSlfe', 'client', 'https://www.gravatar.com/avatar/b642b4217b34b1e8d3bd915fc65c4452?s=40&d=identicon', 998949877),
('admin', 'test', 'test', 'admin@test.com', '$2y$10$q6u4M4SsX0ZayCVKXPjeKeYC2JcgwojJPUZdDimWGXE4K1UCzlYEy', 'admin', 'https://www.gravatar.com/avatar/5b37040e6200edb3c7f409e994076872?s=40&d=identicon', 999999999),
('sinavatar', 'Vicente', 'SinAvatar', 'sinavatar@vicezon.com', '$2y$10$VL275DU7952arsU2C7f86uwyDlC5z/75YrbCRw31LnIw1IDJn1ESW', 'client', '', 999999999);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`idbrand`);

--
-- Indices de la tabla `facturas`
--
ALTER TABLE `facturas`
  ADD PRIMARY KEY (`idfactura`);

--
-- Indices de la tabla `factura_linea`
--
ALTER TABLE `factura_linea`
  ADD PRIMARY KEY (`idlinea`);

--
-- Indices de la tabla `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`idproduct`);

--
-- Indices de la tabla `tablets`
--
ALTER TABLE `tablets`
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
-- AUTO_INCREMENT de la tabla `facturas`
--
ALTER TABLE `facturas`
  MODIFY `idfactura` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `factura_linea`
--
ALTER TABLE `factura_linea`
  MODIFY `idlinea` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `tablets`
--
ALTER TABLE `tablets`
  MODIFY `idproduct` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
