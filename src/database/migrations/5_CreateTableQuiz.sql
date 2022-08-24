CREATE TABLE IF NOT EXISTS `Quiz` (
  `id` VARCHAR(36) PRIMARY KEY NOT NULL DEFAULT (uuid()),
  `case_id` VARCHAR(36) NOT NULL,
  `type` ENUM ('initial_analysis', 'physic_exam', 'conducts', 'complement_exam') NOT NULL,
  `question` VARCHAR(255) NOT NULL,
  `response` VARCHAR(255) NOT NULL,
  `file` blob,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
);
