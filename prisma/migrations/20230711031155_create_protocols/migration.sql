-- CreateTable
CREATE TABLE "Protocol" (
    "id" TEXT NOT NULL,
    "tipoReq" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Protocol_pkey" PRIMARY KEY ("id")
);
