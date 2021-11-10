//definisco variabili
let questionTitle;
let questionImage;
let positiveButton;
let negativeButton;
let checkButton;
let header;

function setup() {
  noCanvas();
  header = createDiv(
    "welcome to the absolute useless questions you totally need to debate on"
  );
  header.class("header");
  //prima domanda
  rossrachel();
}

function draw() {
  slideHeader();
}

//header che si muove da dx a sx spostando l'origine
function slideHeader() {
  let { x, y } = header.position();
  let { w, h } = header.size();

  x -= 2.5;
  if (x <= 0) {
    x = windowWidth;
  }

  header.position(x, 5);
}

//prima domanda: titolo + immagine + risposte + check
function rossrachel() {
  questionTitle = createDiv("were Ross and Rachel on a break?");
  questionTitle.class("title");

  questionImage = createImg("assets/ross&rachel.png");
  questionImage.class("center");

  positiveButton = createButton("of course");
  positiveButton.class("left");
  positiveButton.mouseClicked(jacktitanicdoor);

  negativeButton = createButton("hell no");
  negativeButton.class("answer");
  negativeButton.mouseClicked(jacktitanicdoor);

  checkButton = createButton("check it");
  checkButton.class("check");
  checkButton.mouseClicked(() => {
    console.log("aaaa");
    window.open(
      "https://www.reddit.com/r/AskReddit/comments/7ocaqz/were_ross_and_rachel_on_a_break_or_not_if_yes_why/"
    );
  });
}

//seconda domanda: titolo + immagine + risposte + check
function jacktitanicdoor() {
  questionTitle.remove();
  questionTitle = createDiv("could Jack have fit on the Titanic door?");
  questionTitle.class("title");

  questionImage.remove();
  questionImage = createImg("assets/titanic.png");
  questionImage.class("center");

  positiveButton.remove();
  positiveButton = createButton("duh");
  positiveButton.class("left");
  positiveButton.mouseClicked(cerealormilk);

  negativeButton.remove();
  negativeButton = createButton("no way");
  negativeButton.class("answer");
  negativeButton.mouseClicked(cerealormilk);

  checkButton.remove();
  checkButton = createButton("check it");
  checkButton.class("check");
  checkButton.mouseClicked(() => {
    window.open(
      "https://www.reddit.com/r/pics/comments/sey0u/jack_and_rose_could_have_both_fit_on_that_wooden/"
    );
  });
}

//terza domanda: titolo + immagine + risposte + check
function cerealormilk() {
  questionTitle.remove();
  questionTitle = createDiv("which one do you pour first: cereals or milk?");
  questionTitle.class("title");

  questionImage.remove();
  questionImage = createImg("assets/matilda.png");
  questionImage.class("center");

  positiveButton.remove();
  positiveButton = createButton("cereals");
  positiveButton.class("left");
  positiveButton.mouseClicked(theend);

  negativeButton.remove();
  negativeButton = createButton("milk");
  negativeButton.class("answer");
  negativeButton.mouseClicked(theend);

  checkButton.remove();
  checkButton = createButton("check it");
  checkButton.class("check");
  checkButton.mouseClicked(() => {
    window.open(
      "https://www.reddit.com/r/AskReddit/comments/27alj8/cereal_first_or_milk_first_why/"
    );
  });
}

//the end
function theend() {
  let urlString = window.location.origin;
  let url = new URL(urlString);
  window.open(url + "/theend.html");
}
