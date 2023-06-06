/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Todo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[date]` on the table `Todo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[dateVerify]` on the table `Todo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[yearMonth]` on the table `Todo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `UserCollection` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[belongsToId]` on the table `UserCollection` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Todo_title_key" ON "Todo"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Todo_date_key" ON "Todo"("date");

-- CreateIndex
CREATE UNIQUE INDEX "Todo_dateVerify_key" ON "Todo"("dateVerify");

-- CreateIndex
CREATE UNIQUE INDEX "Todo_yearMonth_key" ON "Todo"("yearMonth");

-- CreateIndex
CREATE UNIQUE INDEX "UserCollection_title_key" ON "UserCollection"("title");

-- CreateIndex
CREATE UNIQUE INDEX "UserCollection_belongsToId_key" ON "UserCollection"("belongsToId");
