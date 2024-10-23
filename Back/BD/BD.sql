-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema chamada
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema chamada
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `chamada` DEFAULT CHARACTER SET utf8 ;
USE `chamada` ;

-- -----------------------------------------------------
-- Table `chamada`.`Escola`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chamada`.`Escola` (
  `Cod` INT NOT NULL AUTO_INCREMENT,
  `Nome` VARCHAR(225) NOT NULL,
  `Nome` VARCHAR(225) NOT NULL,
  `Email` VARCHAR(225) NOT NULL,
  `Senha` VARCHAR(225) NOT NULL,
  PRIMARY KEY (`Cod`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `chamada`.`Professor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chamada`.`Professor` (
  `Cod` INT NOT NULL AUTO_INCREMENT,
  `Escola_Cod` INT NOT NULL,
  `Nome` VARCHAR(225) NOT NULL,
  `Materia` VARCHAR(225) NOT NULL,
  `Salario` DECIMAL NOT NULL,
  PRIMARY KEY (`Cod`),
  INDEX `fk_Professor_Escola_idx` (`Escola_Cod` ASC) ,
  CONSTRAINT `fk_Professor_Escola`
    FOREIGN KEY (`Escola_Cod`)
    REFERENCES `chamada`.`Escola` (`Cod`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `chamada`.`Salas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chamada`.`Salas` (
  `Cod` INT NOT NULL AUTO_INCREMENT,
  `Escola_Cod` INT NOT NULL,
  `Nome` VARCHAR(225) NOT NULL,
  `Capacidade` INT NOT NULL,
  PRIMARY KEY (`Cod`),
  INDEX `fk_Professor_Escola_idx` (`Escola_Cod` ASC) ,
  CONSTRAINT `fk_Professor_Escola0`
    FOREIGN KEY (`Escola_Cod`)
    REFERENCES `chamada`.`Escola` (`Cod`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `chamada`.`Aluno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chamada`.`Aluno` (
  `Cod` INT NOT NULL AUTO_INCREMENT,
  `Escola_Cod` INT NOT NULL,
  `Nome` VARCHAR(225) NOT NULL,
  `Ano` VARCHAR(225) NOT NULL,
  PRIMARY KEY (`Cod`),
  INDEX `fk_Professor_Escola_idx` (`Escola_Cod` ASC) ,
  CONSTRAINT `fk_Professor_Escola00`
    FOREIGN KEY (`Escola_Cod`)
    REFERENCES `chamada`.`Escola` (`Cod`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `chamada`.`Chamada`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chamada`.`Chamada` (
  `cod` INT NOT NULL AUTO_INCREMENT,
  `Data` DATETIME NOT NULL,
  `Escola_Cod` INT NOT NULL,
  `Aluno_Cod` INT NOT NULL,
  `Salas_Cod` INT NOT NULL,
  `Professor_Cod` INT NOT NULL,
  `Presente` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`cod`),
  INDEX `fk_Chamada_Escola1_idx` (`Escola_Cod` ASC) ,
  INDEX `fk_Chamada_Aluno1_idx` (`Aluno_Cod` ASC) ,
  INDEX `fk_Chamada_Salas1_idx` (`Salas_Cod` ASC) ,
  INDEX `fk_Chamada_Professor1_idx` (`Professor_Cod` ASC) ,
  CONSTRAINT `fk_Chamada_Escola1`
    FOREIGN KEY (`Escola_Cod`)
    REFERENCES `chamada`.`Escola` (`Cod`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Chamada_Aluno1`
    FOREIGN KEY (`Aluno_Cod`)
    REFERENCES `chamada`.`Aluno` (`Cod`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Chamada_Salas1`
    FOREIGN KEY (`Salas_Cod`)
    REFERENCES `chamada`.`Salas` (`Cod`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Chamada_Professor1`
    FOREIGN KEY (`Professor_Cod`)
    REFERENCES `chamada`.`Professor` (`Cod`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
