CREATE TABLE IF NOT EXISTS "company" (
	"id" text PRIMARY KEY NOT NULL,
	"label" varchar(256) NOT NULL,
	"description" text,
	"city" varchar(256) NOT NULL,
	"country" varchar(256) NOT NULL,
	"image_url" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "contract" (
	"id" text PRIMARY KEY NOT NULL,
	"label" varchar(256) NOT NULL,
	CONSTRAINT "contract_label_unique" UNIQUE("label")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "job" (
	"id" text PRIMARY KEY NOT NULL,
	"label" varchar(256) NOT NULL,
	"description" text NOT NULL,
	"salary_min" integer NOT NULL,
	"salary_max" integer NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"company_id" text NOT NULL,
	"contract_id" text NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "job" ADD CONSTRAINT "job_company_id_company_id_fk" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "job" ADD CONSTRAINT "job_contract_id_contract_id_fk" FOREIGN KEY ("contract_id") REFERENCES "contract"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
