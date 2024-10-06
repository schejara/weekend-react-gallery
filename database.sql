CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/cat2.png','Cat1','A cute cat is surprised to see someone'),
('images/cat6.png','Cat1','Cats have extremely strong nocturnal eyesight'),
('images/cat7.jpg','Cat!','Cats are playful animals and enjoy socializing with people'),
('images/cat8.jpg','Cat!','Cats are carnivores, or meat-eaters'),
('images/cat9.jpg','Cat!','Cats is very adorable animal'),
('images/cat10.jpeg','Cat!','Cats like to play with toys ');
