/*
  Warnings:

  - A unique constraint covering the columns `[id,belongsToCollectionId]` on the table `Todo` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Todo_belongsToCollectionId_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "Todo_id_belongsToCollectionId_key" ON "Todo"("id", "belongsToCollectionId");
