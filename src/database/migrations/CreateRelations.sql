
-- ALTER TABLE `Cases` ADD FOREIGN KEY (`patient_id`) REFERENCES `Patients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
-- ALTER TABLE `Cases` ADD FOREIGN KEY (`monitoring_id`) REFERENCES `Monitoring` (`id`)  ON DELETE CASCADE ON UPDATE CASCADE;
-- ALTER TABLE `Cases` ADD FOREIGN KEY (`users_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
-- ALTER TABLE `Quiz` ADD FOREIGN KEY (`case_id`) REFERENCES `Cases` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;