CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 2
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/goat_small.jpg','Goat!','Photo of a goat taken at Glacier National Park.'),
('images/goat_stache.png','Different...','Different...'),
('images/cat2.png','Cat1','A cute cat is surprised to see someone');


SELECT * FROM "gallery";

DROP TABLE "gallery"