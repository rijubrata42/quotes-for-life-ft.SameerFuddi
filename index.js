const express = require("express");
const path    = require("path");
const { text } = require("stream/consumers");
const app     = express();

app.use((req, res, next) => {
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  res.setHeader(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self'",
      "style-src 'self' https://fonts.googleapis.com",
      "font-src https://fonts.gstatic.com",
      "img-src 'self' data:",
      "connect-src 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
    ].join("; ")
  );
  res.setHeader("Access-Control-Allow-Origin", "");
  next();
});

const publicDir = path.join(__dirname, "public");
app.use(express.static(publicDir, { index: "index.html" }));

app.disable("x-powered-by");

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
  {
    id:18,
    text:"Na maru mai peeth pe mukka na naapu mai lulli baaton se hi gaand maar du naam hai mera fuddy"
  },
  {
    id:19,
    text:"pyaar bawasir ki tarah hota hai ek Baar hota hai par Dard Bohot deta hai"
  },
  {
    id:20,
    text: "agar nasib haato mai likha hota to log uss se apna bund nahi dhote.."
  }
];

app.get("/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  res.json(randomQuote);
});

app.get("/allQuotes", (req, res) => {
  res.json({ quotes });
});

app.get("/quote/:id", (req, res) => {
  const raw = req.params.id;
  const id  = parseInt(raw, 10);
  if (isNaN(id) || id < 1 || String(id) !== raw) {
    return res.status(400).json({ error: "Invalid ID format." });
  }
  const quote = quotes.find((q) => q.id === id);
  if (!quote) {
    return res.status(404).json({ error: "Quote not found." });
  }
  res.json(quote);
});

app.listen(3000, () => {
  console.log("Server running → http://localhost:3000");
});
