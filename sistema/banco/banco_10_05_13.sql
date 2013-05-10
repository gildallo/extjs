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
-- Banco de Dados: `controle_producao`
--
CREATE DATABASE `controle_producao` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `controle_producao`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `bancos`
--

CREATE TABLE IF NOT EXISTS `bancos` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `banco` varchar(250) COLLATE latin1_general_ci NOT NULL,
  `codigo` varchar(10) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=104 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `categoria`
--

CREATE TABLE IF NOT EXISTS `categoria` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `descricao` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `composicao_produto`
--

CREATE TABLE IF NOT EXISTS `composicao_produto` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `produto_id` int(10) DEFAULT NULL,
  `materia_prima_id` int(10) DEFAULT NULL,
  `qtd` float DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=97 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `corte`
--

CREATE TABLE IF NOT EXISTS `corte` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `datahora` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `datahora_corte` timestamp NULL DEFAULT NULL,
  `produto_id` varchar(10) DEFAULT NULL,
  `numero_corte` char(50) DEFAULT NULL,
  `qtd` float DEFAULT '0',
  `qtd_p` float DEFAULT '0',
  `qtd_m` float DEFAULT '0',
  `qtd_g` float DEFAULT '0',
  `qtd_gg` float DEFAULT '0',
  `medida_galao` char(50) DEFAULT NULL,
  `largura_galao` char(50) DEFAULT NULL,
  `equipe_corte_id` int(10) DEFAULT NULL,
  `volume` float DEFAULT '0',
  `obs` longtext,
  `oficina_id` int(11) DEFAULT NULL,
  `preco_custura` float DEFAULT '0',
  `datahora_envio_oficina` timestamp NULL DEFAULT NULL,
  `obs_oficina` longtext,
  `qtd_recebida_oficina` float DEFAULT '0',
  `status` char(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `numero_corte` (`numero_corte`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=104 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `dados_bancario`
--

CREATE TABLE IF NOT EXISTS `dados_bancario` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `pessoa_id` int(10) DEFAULT NULL,
  `banco` int(10) DEFAULT NULL,
  `agencia` char(50) DEFAULT NULL,
  `tipo_conta` char(50) DEFAULT NULL,
  `conta` char(50) DEFAULT NULL,
  `titular` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `entrada_mat_prima`
--

CREATE TABLE IF NOT EXISTS `entrada_mat_prima` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `datahora` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `numero_nf` int(11) DEFAULT NULL,
  `pessoa_id` int(11) DEFAULT NULL,
  `pessoa_nome` varchar(255) DEFAULT NULL,
  `produto_id` int(11) DEFAULT NULL,
  `qtd` float DEFAULT '0',
  `preco_compra` float DEFAULT '0',
  `obs` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=83 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `equipe_corte`
--

CREATE TABLE IF NOT EXISTS `equipe_corte` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `datahora` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `nome` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=15 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `erros`
--

CREATE TABLE IF NOT EXISTS `erros` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `descricao` longtext,
  `situacao` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `estado`
--

CREATE TABLE IF NOT EXISTS `estado` (
  `uf` char(2) NOT NULL DEFAULT '',
  `descricao` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`uf`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `login`
--

CREATE TABLE IF NOT EXISTS `login` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `pessoa_id` int(10) DEFAULT NULL,
  `data_criacao` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario` varchar(255) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `status` enum('ATIVO','INATIVO') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `pessoa`
--

CREATE TABLE IF NOT EXISTS `pessoa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `datahora` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `nome` varchar(255) NOT NULL,
  `cpf_cnpj` varchar(11) NOT NULL,
  `rg_ie` varchar(50) NOT NULL,
  `endereco` varchar(255) NOT NULL,
  `numero` varchar(20) NOT NULL,
  `complemento` varchar(255) NOT NULL,
  `bairro` varchar(255) NOT NULL,
  `cidade` varchar(255) NOT NULL,
  `uf` char(2) NOT NULL,
  `cep` char(8) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  `celular` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contato` varchar(255) NOT NULL,
  `obs` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=105 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto`
--

CREATE TABLE IF NOT EXISTS `produto` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `categoria_id` int(11) DEFAULT NULL,
  `referencia` char(50) DEFAULT NULL,
  `codigo` char(50) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `unidade_medida_id` char(50) DEFAULT NULL,
  `preco_padrao` float DEFAULT '0',
  `preco_custo` float DEFAULT '0',
  `estoque` float DEFAULT '0',
  `inf_adicionais` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=109 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `relacao_equipecorte_pessoa`
--

CREATE TABLE IF NOT EXISTS `relacao_equipecorte_pessoa` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `equipe_corte_id` int(10) DEFAULT NULL,
  `pessoa_id` int(10) DEFAULT NULL,
  `prioridade` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=39 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `relacao_pessoa_tipo`
--

CREATE TABLE IF NOT EXISTS `relacao_pessoa_tipo` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `tipo_pessoa_id` int(10) DEFAULT NULL,
  `pessoa_id` int(10) DEFAULT NULL,
  `prioridade` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=109 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tipo_pessoa`
--

CREATE TABLE IF NOT EXISTS `tipo_pessoa` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `descricao` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `unidade_medida`
--

CREATE TABLE IF NOT EXISTS `unidade_medida` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `unidade` char(50) DEFAULT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
