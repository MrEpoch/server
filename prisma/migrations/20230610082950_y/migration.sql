-- DropForeignKey
ALTER TABLE "UserCollection" DROP CONSTRAINT "UserCollection_belongsToId_fkey";

-- AddForeignKey
ALTER TABLE "UserCollection" ADD CONSTRAINT "UserCollection_belongsToId_fkey" FOREIGN KEY ("belongsToId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
