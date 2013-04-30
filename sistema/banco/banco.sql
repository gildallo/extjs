-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tempo de Geração: 
-- Versão do Servidor: 5.5.27
-- Versão do PHP: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Banco de Dados: `extjs_crud`
--
CREATE DATABASE `extjs_crud` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `extjs_crud`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `contact`
--

CREATE TABLE IF NOT EXISTS `contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=210 ;

--
-- Extraindo dados da tabela `contact`
--

INSERT INTO `contact` (`id`, `email`, `name`, `phone`) VALUES
(1, 'gilcimar.dallo@gmail.com', 'Gilcimar Dallo12', '(35)3464-1353'),
(34, 'Contact@blog.com.br', 'Contact331', '(000) 000-0000'),
(44, 'Contact@blog.com.br', 'Contact432', '(000) 000-0000'),
(45, 'Contact@blog.com.br', 'Contact44', '(000) 000-0000'),
(46, 'Contact@blog.com.br', 'Contact45', '(000) 000-0000'),
(47, 'Contact@blog.com.br', 'Contact46', '(000) 000-0000'),
(48, 'Contact@blog.com.br', 'Contact47', '(000) 000-0000'),
(50, 'Contact@blog.com.br', 'Contact49', '(000) 000-0000'),
(51, 'Contact@blog.com.br', 'Contact50', '(000) 000-0000'),
(52, 'Contact@blog.com.br', 'Contact51', '(000) 000-0000'),
(53, 'Contact@blog.com.br', 'Contact52', '(000) 000-0000'),
(54, 'Contact@blog.com.br', 'Contact53', '(000) 000-0000'),
(55, 'Contact@blog.com.br', 'Contact54', '(000) 000-0000'),
(56, 'Contact@blog.com.br', 'Contact55', '(000) 000-0000'),
(57, 'Contact@blog.com.br', 'Contact56', '(000) 000-0000'),
(59, 'Contact@blog.com.br', 'Contact58', '(000) 000-0000'),
(62, 'Contact@blog.com.br', 'Contact61', '(000) 000-0000'),
(63, 'Contact@blog.com.br', 'Contact62', '(000) 000-0000'),
(64, 'Contact@blog.com.br', 'Contact63', '(000) 000-0000'),
(65, 'Contact@blog.com.br', 'Contact64', '(000) 000-0000'),
(66, 'Contact@blog.com.br', 'Contact65', '(000) 000-0000'),
(67, 'Contact@blog.com.br', 'Contact66', '(000) 000-0000'),
(68, 'Contact@blog.com.br', 'Contact67', '(000) 000-0000'),
(69, 'Contact@blog.com.br', 'Contact68', '(000) 000-0000'),
(70, 'Contact@blog.com.br', 'Contact69', '(000) 000-0000'),
(71, 'Contact@blog.com.br', 'Contact70', '(000) 000-0000'),
(72, 'Contact@blog.com.br', 'Contact71', '(000) 000-0000'),
(73, 'Contact@blog.com.br', 'Contact72', '(000) 000-0000'),
(74, 'Contact@blog.com.br', 'Contact73', '(000) 000-0000'),
(75, 'Contact@blog.com.br', 'Contact74', '(000) 000-0000'),
(76, 'Contact@blog.com.br', 'Contact75', '(000) 000-0000'),
(77, 'Contact@blog.com.br', 'Contact76', '(000) 000-0000'),
(78, 'Contact@blog.com.br', 'Contact77', '(000) 000-0000'),
(82, 'Contact@blog.com.br', 'Contact81', '(000) 000-0000'),
(83, 'Contact@blog.com.br', 'Contact82', '(000) 000-0000'),
(84, 'Contact@blog.com.br', 'Contact83', '(000) 000-0000'),
(85, 'Contact@blog.com.br', 'Contact84', '(000) 000-0000'),
(86, 'Contact@blog.com.br', 'Contact85', '(000) 000-0000'),
(87, 'Contact@blog.com.br', 'Contact86', '(000) 000-0000'),
(88, 'Contact@blog.com.br', 'Contact87', '(000) 000-0000'),
(89, 'Contact@blog.com.br', 'Contact88', '(000) 000-0000'),
(90, 'Contact@blog.com.br', 'Contact89', '(000) 000-0000'),
(91, 'Contact@blog.com.br', 'Contact90', '(000) 000-0000'),
(92, 'Contact@blog.com.br', 'Contact91', '(000) 000-0000'),
(93, 'Contact@blog.com.br', 'Contact92', '(000) 000-0000'),
(94, 'Contact@blog.com.br', 'Contact93', '(000) 000-0000'),
(95, 'Contact@blog.com.br', 'Contact94', '(000) 000-0000'),
(96, 'Contact@blog.com.br', 'Contact95', '(000) 000-0000'),
(97, 'Contact@blog.com.br', 'Contact96', '(000) 000-0000'),
(98, 'Contact@blog.com.br', 'Contact97', '(000) 000-0000'),
(99, 'Contact@blog.com.br', 'Contact98', '(000) 000-0000'),
(100, 'Contact@blog.com.br', 'Contact99', '(000) 000-0000'),
(101, 'Contact@blog.com.br', 'Contact101', '(000) 000-0000'),
(102, 'Contact@blog.com.br', 'Contact102', '(000) 000-0000'),
(103, 'Contact@blog.com.br', 'Contact103', '(000) 000-0000'),
(104, 'Contact@blog.com.br', 'Contact104', '(000) 000-0000'),
(105, 'Contact@blog.com.br', 'Contact105', '(000) 000-0000'),
(106, 'Contact@blog.com.br', 'Contact106', '(000) 000-0000'),
(107, 'Contact@blog.com.br', 'Contact107', '(000) 000-0000'),
(108, 'Contact@blog.com.br', 'Contact108', '(000) 000-0000'),
(109, 'Contact@blog.com.br', 'Contact109', '(000) 000-0000'),
(110, 'Contact@blog.com.br', 'Contact110', '(000) 000-0000'),
(111, 'Contact@blog.com.br', 'Contact111', '(000) 000-0000'),
(112, 'Contact@blog.com.br', 'Contact112', '(000) 000-0000'),
(113, 'Contact@blog.com.br', 'Contact113', '(000) 000-0000'),
(114, 'Contact@blog.com.br', 'Contact114', '(000) 000-0000'),
(115, 'Contact@blog.com.br', 'Contact115', '(000) 000-0000'),
(116, 'Contact@blog.com.br', 'Contact116', '(000) 000-0000'),
(117, 'Contact@blog.com.br', 'Contact117', '(000) 000-0000'),
(118, 'Contact@blog.com.br', 'Contact118', '(000) 000-0000'),
(119, 'Contact@blog.com.br', 'Contact119', '(000) 000-0000'),
(120, 'Contact@blog.com.br', 'Contact120', '(000) 000-0000'),
(121, 'Contact@blog.com.br', 'Contact121', '(000) 000-0000'),
(122, 'Contact@blog.com.br', 'Contact122', '(000) 000-0000'),
(123, 'Contact@blog.com.br', 'Contact123', '(000) 000-0000'),
(124, 'Contact@blog.com.br', 'Contact124', '(000) 000-0000'),
(125, 'Contact@blog.com.br', 'Contact125', '(000) 000-0000'),
(126, 'Contact@blog.com.br', 'Contact126', '(000) 000-0000'),
(127, 'Contact@blog.com.br', 'Contact127', '(000) 000-0000'),
(128, 'Contact@blog.com.br', 'Contact128', '(000) 000-0000'),
(129, 'Contact@blog.com.br', 'Contact129', '(000) 000-0000'),
(130, 'Contact@blog.com.br', 'Contact130', '(000) 000-0000'),
(131, 'Contact@blog.com.br', 'Contact131', '(000) 000-0000'),
(132, 'Contact@blog.com.br', 'Contact132', '(000) 000-0000'),
(133, 'Contact@blog.com.br', 'Contact133', '(000) 000-0000'),
(134, 'Contact@blog.com.br', 'Contact134', '(000) 000-0000'),
(135, 'Contact@blog.com.br', 'Contact135', '(000) 000-0000'),
(136, 'Contact@blog.com.br', 'Contact136', '(000) 000-0000'),
(137, 'Contact@blog.com.br', 'Contact137', '(000) 000-0000'),
(138, 'Contact@blog.com.br', 'Contact138', '(000) 000-0000'),
(139, 'Contact@blog.com.br', 'Contact139', '(000) 000-0000'),
(140, 'Contact@blog.com.br', 'Contact140', '(000) 000-0000'),
(141, 'Contact@blog.com.br', 'Contact141', '(000) 000-0000'),
(142, 'Contact@blog.com.br', 'Contact142', '(000) 000-0000'),
(143, 'Contact@blog.com.br', 'Contact143', '(000) 000-0000'),
(144, 'Contact@blog.com.br', 'Contact144', '(000) 000-0000'),
(145, 'Contact@blog.com.br', 'Contact145', '(000) 000-0000'),
(146, 'Contact@blog.com.br', 'Contact146', '(000) 000-0000'),
(147, 'Contact@blog.com.br', 'Contact147', '(000) 000-0000'),
(148, 'Contact@blog.com.br', 'Contact148', '(000) 000-0000'),
(149, 'Contact@blog.com.br', 'Contact149', '(000) 000-0000'),
(150, 'Contact@blog.com.br', 'Contact150', '(000) 000-0000'),
(151, 'Contact@blog.com.br', 'Contact151', '(000) 000-0000'),
(152, 'Contact@blog.com.br', 'Contact152', '(000) 000-0000'),
(153, 'Contact@blog.com.br', 'Contact153', '(000) 000-0000'),
(154, 'Contact@blog.com.br', 'Contact154', '(000) 000-0000'),
(155, 'Contact@blog.com.br', 'Contact155', '(000) 000-0000'),
(156, 'Contact@blog.com.br', 'Contact156', '(000) 000-0000'),
(157, 'Contact@blog.com.br', 'Contact157', '(000) 000-0000'),
(158, 'Contact@blog.com.br', 'Contact158', '(000) 000-0000'),
(159, 'Contact@blog.com.br', 'Contact159', '(000) 000-0000'),
(160, 'Contact@blog.com.br', 'Contact160', '(000) 000-0000'),
(161, 'Contact@blog.com.br', 'Contact161', '(000) 000-0000'),
(162, 'Contact@blog.com.br', 'Contact162', '(000) 000-0000'),
(163, 'Contact@blog.com.br', 'Contact163', '(000) 000-0000'),
(164, 'Contact@blog.com.br', 'Contact164', '(000) 000-0000'),
(165, 'Contact@blog.com.br', 'Contact165', '(000) 000-0000'),
(166, 'Contact@blog.com.br', 'Contact166', '(000) 000-0000'),
(167, 'Contact@blog.com.br', 'Contact167', '(000) 000-0000'),
(168, 'Contact@blog.com.br', 'Contact168', '(000) 000-0000'),
(169, 'Contact@blog.com.br', 'Contact169', '(000) 000-0000'),
(170, 'Contact@blog.com.br', 'Contact170', '(000) 000-0000'),
(171, 'Contact@blog.com.br', 'Contact171', '(000) 000-0000'),
(172, 'Contact@blog.com.br', 'Contact172', '(000) 000-0000'),
(173, 'Contact@blog.com.br', 'Contact173', '(000) 000-0000'),
(174, 'Contact@blog.com.br', 'Contact174', '(000) 000-0000'),
(175, 'Contact@blog.com.br', 'Contact175', '(000) 000-0000'),
(176, 'Contact@blog.com.br', 'Contact176', '(000) 000-0000'),
(177, 'Contact@blog.com.br', 'Contact177', '(000) 000-0000'),
(178, 'Contact@blog.com.br', 'Contact178', '(000) 000-0000'),
(179, 'Contact@blog.com.br', 'Contact179', '(000) 000-0000'),
(180, 'Contact@blog.com.br', 'Contact180', '(000) 000-0000'),
(181, 'Contact@blog.com.br', 'Contact181', '(000) 000-0000'),
(182, 'Contact@blog.com.br', 'Contact182', '(000) 000-0000'),
(183, 'Contact@blog.com.br', 'Contact183', '(000) 000-0000'),
(184, 'Contact@blog.com.br', 'Contact184', '(000) 000-0000'),
(185, 'Contact@blog.com.br', 'Contact185', '(000) 000-0000'),
(186, 'Contact@blog.com.br', 'Contact186', '(000) 000-0000'),
(187, 'Contact@blog.com.br', 'Contact187', '(000) 000-0000'),
(188, 'Contact@blog.com.br', 'Contact188', '(000) 000-0000'),
(189, 'Contact@blog.com.br', 'Contact189', '(000) 000-0000'),
(190, 'Contact@blog.com.br', 'Contact190', '(000) 000-0000'),
(191, 'Contact@blog.com.br', 'Contact191', '(000) 000-0000'),
(192, 'Contact@blog.com.br', 'Contact192', '(000) 000-0000'),
(193, 'Contact@blog.com.br', 'Contact193', '(000) 000-0000'),
(195, 'Contact@blog.com.br', 'Contact195', '(000) 000-0000'),
(209, 'gil@gil.com', '3333', '3333');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
