/*
  Warnings:

  - A unique constraint covering the columns `[eventid,attendeeid]` on the table `Eventattendee` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Eventattendee_eventid_attendeeid_key` ON `Eventattendee`(`eventid`, `attendeeid`);
