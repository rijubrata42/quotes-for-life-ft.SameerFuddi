const express = require("express");
const app = express();

const quotes = [
  {
    id: 1,
    text: "Samundar kinnare bethe raho leheren kbhi na kbhi to aayengi Kismat badle na badle par ga*d zarur dul jayegi.",
  },
  {
    id: 2,
    text: "Budhoon ke dilon mein pyaar ke diye jhal rhe hai , aur kuch log abhi tak apna n*nu mal rhe hai.",
  },
  {
    id: 3,
    text: "Humesha truth bholunga nahi bholunga kbhi jhoot , zakeen nhi hota toh tumhare samne pii jaunga apna moot.",
  },
  {
    id: 4,
    text: "Affection , Attraction aur mast**bation ki koi umar nhi hoti.",
  },
  {
    id: 5,
    text: "B*nd mein dum nahi , hum kisi se kum nahi.",
  },
  {
    id: 6,
    text: "Saanp , b*nd aur Joke moka milte hi maar do.",
  },
  {
    id: 7,
    text: " JHEL liye sb dukh humne karke kitne kaand, baby baby bol kr  Mohabbat ne hi maar li ga*d.",
  },
  {
    id: 8,
    text: "Mazdoor ko Khodna aur Baap ko Ch*dna, Mat Sikha",
  },
  {
    id: 9,
    text: "Na phere na vidhai , bas h*dai pe h*dai. !!",
  },
  {
    id: 10,
    text: "Hota aisa koi nahi , bante hai sbb bhole , ghar mein bandha nadha , Bangkok jake khole...",
  },
  {
    id: 11,
    text: "Kal kare so aaj kr , aaj kre so abb , hasthmat*un karne wale hud*i krega kbb !!!",
  },
  {
    id: 12,
    text: "Teri har harkat se tuje roka , tere har kadam pr tuje toka Hogya na khde l**d pr dokha !!!",
  },
  {
    id: 13,
    text: " Naadan Jaanwar Hai tu , iss duniya ke dukh Jhel nhi skta, ban na hai to Giraffe ban , har koi uski leh nhi sakta.",
  },
  {
    id: 14,
    text: "Bu*d mein nhi thaa gudaa , toh beech mein khahe kudaa.",
  },
  {
    id: 15,
    text: "Galti Ga*d ki trah hoti hai , dusron ki dikhti hai khud ki nahi.",
  },
  {
    id: 16,
    text: "Tanhai se nikle aansu chupaane ke liye nhaa leta hun, din ke 15 min waste na hoo isliye bathroom mein hi hila leta hoon.",
  },
  {
    id: 17,
    text: "Tamatar Khao Khun Badhao Aur Badhao Hosla, M*th Maro l*nd badhao fad dalo bho*da!",
  },
];

app.get("/", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  res.send(randomQuote);
});

app.get("/allQuotes", (req, res) => {
  res.json({ quotes });
});

app.get("/quote/:id", (req, res) => {
  const id = Number(req.params.id);
  const quote = quotes.find((q) => q.id == id);
  if (!quote) {
    return res.status(404).json({ error: "id not found" });
  }
  res.send(quote);
});

app.listen(3000, () => {
  console.log(" Succesfully Connected to PORT");
});
