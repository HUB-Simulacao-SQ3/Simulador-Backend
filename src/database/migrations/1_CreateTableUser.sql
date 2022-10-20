CREATE TABLE IF NOT EXISTS `Users` (
  `id` VARCHAR(36) PRIMARY KEY NOT NULL DEFAULT (uuid()),
  `name` VARCHAR(255) NOT NULL,
  `image` blob,
  `type` ENUM ('admin', 'user', 'teacher') NOT NULL DEFAULT "user",
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
)
