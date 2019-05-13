const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googleBooksReact"
);

const bookSeeds = [
  {
    title: "Conversations with God",
    author: "Neale Donald Walsch",
    synopsis: "Unemployed, homeless and suffering from a debilitating injury, Neale Donald Walsch (Henry Czerny) finds himself at the lowest point of his life. Then he receives divine inspiration and turns his dialogues with the Almighty into a best-selling series of books.",
    image: "https://images-na.ssl-images-amazon.com/images/I/816qg6lrb5L.jpg",
    date: new Date(Date.now())
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    synopsis:
      "The Catcher in the Rye is a 1951 novel by J. D. Salinger. A controversial novel originally published for adults, it has since become popular with adolescent readers for its themes of teenage angst and alienation. It has been translated into almost all of the world's major languages. Around 1 million copies are sold each year with total sales of more than 65 million books. The novel's protagonist Holden Caulfield has become an icon for teenage rebellion. The novel also deals with complex issues of innocence, identity, belonging, loss, and connection.",
    image: "https://imgc.allpostersimages.com/img/print/u-g-PTSJM50.jpg?w=550&h=550&p=0",
    date: new Date(Date.now())
  },
  {
    title: "1984",
    author: "George Orwell",
    synopsis:
      "A man loses his identity while living under a repressive regime. In a story based on George Orwell's classic novel, Winston Smith (John Hurt) is a government employee whose job involves the rewriting of history in a manner that casts his fictional country's leaders in a charitable light. His trysts with Julia (Suzanna Hamilton) provide his only measure of enjoyment, but lawmakers frown on the relationship -- and in this closely monitored society, there is no escape from Big Brother.",
    image: "https://images-na.ssl-images-amazon.com/images/I/71-qZ2Z754L.jpg",
    date: new Date(Date.now())
  },
  {
    title: "Behold a Pale Horse",
    author: "Milton William Cooper",
    synopsis:
      "Bill Cooper, former United States Naval Intelligence Briefing Team member, reveals information that remains hidden from the public eye. ",
    image: "https://images-na.ssl-images-amazon.com/images/I/814Op7Z-nCL.jpg",
    date: new Date(Date.now())
  },
  {
    title: "The Art of War",
    author: "Sun Tzu",
    synopsis:
      "Know when to fight and when not to fight: avoid what is strong and strike at what is weak. Know how to deceive the enemy: appear weak when you are strong, and strong when you are weak. Know your strengths and weaknesses: if you know the enemy and know yourself, you need not fear the result of a hundred battles.",
    image: "https://images-na.ssl-images-amazon.com/images/I/41eTYPIKfwL._SX367_BO1,204,203,200_.jpg",
    date: new Date(Date.now())
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    synopsis: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
    image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    date: new Date(Date.now())
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    synopsis: "The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Romani fortune teller in a nearby town about its meaning. The woman interprets the dream as a prophecy telling the boy that he will discover a treasure at the Egyptian pyramids.",
    image: "https://images-na.ssl-images-amazon.com/images/I/41ybG235TcL._SX329_BO1,204,203,200_.jpg",
    date: new Date(Date.now())
  },
  {
    title: "Old Man and the Sea",
    author: "Ernest Hemmingway",
    synopsis: "The Old Man and the Sea is the story of an epic struggle between an old, seasoned fisherman and the greatest catch of his life. For eighty-four days, Santiago, an aged Cuban fisherman, has set out to sea and returned empty-handed.",
    image: "https://www.thoughtco.com/thmb/HgELWfwNGxscs9OlZ9vaKh-KCkg=/600x947/filters:fill(auto,1)/oldman-59886720054ad900110a2cf2.jpg"
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeeds))
  .then(data => {
    console.log(data.result.n + " new records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
