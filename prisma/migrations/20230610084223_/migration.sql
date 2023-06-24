/*
  Warnings:

  - A unique constraint covering the columns `[belongsToCollectionId,id]` on the table `Todo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[belongsToId,id]` on the table `UserCollection` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Todo_belongsToCollectionId_id_key" ON "Todo"("belongsToCollectionId", "id");

-- CreateIndex
CREATE UNIQUE INDEX "UserCollection_belongsToId_id_key" ON "UserCollection"("belongsToId", "id");
