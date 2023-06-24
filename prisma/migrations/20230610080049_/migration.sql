/*
  Warnings:

  - A unique constraint covering the columns `[id,belongsToId]` on the table `UserCollection` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserCollection_id_belongsToId_key" ON "UserCollection"("id", "belongsToId");
