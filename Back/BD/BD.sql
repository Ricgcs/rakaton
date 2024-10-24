-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema chamada
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema chamada
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `chamada` DEFAULT CHARACTER SET utf8mb3 ;
USE `chamada` ;

-- -----------------------------------------------------
-- Table `chamada`.`escola`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chamada`.`escola` (
  `Cod` INT NOT NULL AUTO_INCREMENT,
  `Nome` VARCHAR(225) NOT NULL,
  `Email` VARCHAR(225) NOT NULL,
  `Senha` VARCHAR(225) NOT NULL,
  PRIMARY KEY (`Cod`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `chamada`.`aluno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chamada`.`aluno` (
  `Cod` INT NOT NULL AUTO_INCREMENT,
  `Escola_Cod` INT NOT NULL,
  `Nome` VARCHAR(225) NOT NULL,
  `Ano` VARCHAR(225) NOT NULL,
  `sala` VARCHAR(255) NULL DEFAULT NULL,
  `senha` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`Cod`),
  INDEX `fk_Professor_Escola_idx` (`Escola_Cod` ASC) VISIBLE,
  CONSTRAINT `fk_Professor_Escola00`
    FOREIGN KEY (`Escola_Cod`)
    REFERENCES `chamada`.`escola` (`Cod`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `chamada`.`chamada`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chamada`.`chamada` (
  `cod` INT NOT NULL AUTO_INCREMENT,
  `Data` VARCHAR(255) NOT NULL,
  `Presente` VARCHAR(45) NOT NULL,
  `Nome_aluno` VARCHAR(255) NOT NULL,
  `Sala` VARCHAR(225) NOT NULL,
  `chamadacol` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`cod`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `chamada`.`professor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chamada`.`professor` (
  `Cod` INT NOT NULL AUTO_INCREMENT,
  `Escola_Cod` INT NOT NULL,
  `Nome` VARCHAR(225) NOT NULL,
  `Materia` VARCHAR(225) NOT NULL,
  `email` VARCHAR(225) NOT NULL,
  `senha` VARCHAR(225) NOT NULL,
  PRIMARY KEY (`Cod`),
  INDEX `fk_Professor_Escola_idx` (`Escola_Cod` ASC) VISIBLE,
  CONSTRAINT `fk_Professor_Escola`
    FOREIGN KEY (`Escola_Cod`)
    REFERENCES `chamada`.`escola` (`Cod`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `chamada`.`salas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chamada`.`salas` (
  `Cod` INT NOT NULL AUTO_INCREMENT,
  `Escola_Cod` INT NOT NULL,
  `Nome` VARCHAR(225) NOT NULL,
  `Capacidade` INT NOT NULL,
  PRIMARY KEY (`Cod`),
  INDEX `fk_Professor_Escola_idx` (`Escola_Cod` ASC) VISIBLE,
  CONSTRAINT `fk_Professor_Escola0`
    FOREIGN KEY (`Escola_Cod`)
    REFERENCES `chamada`.`escola` (`Cod`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
