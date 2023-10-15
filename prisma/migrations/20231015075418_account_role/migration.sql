/*
  Warnings:

  - Added the required column `roleId` to the `ProjectAccount` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProjectAccount" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "accountId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,
    CONSTRAINT "ProjectAccount_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ProjectAccount_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ProjectAccount_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "ProjectRole" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ProjectAccount" ("accountId", "id", "projectId") SELECT "accountId", "id", "projectId" FROM "ProjectAccount";
DROP TABLE "ProjectAccount";
ALTER TABLE "new_ProjectAccount" RENAME TO "ProjectAccount";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
