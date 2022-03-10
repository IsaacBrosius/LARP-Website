var aThing = "JavaScript";

var sentence = function(thing2,thing3) {
    
    this.thing2 = thing2;
    this.thing3 = thing3;

};

var otherWords = ["cool","is"];

sentence.prototype.draw = function() {
    
    fill(0, 0, 0);
    
    textSize(20);
    
    text(aThing + " " + this.thing2 + " " + this.thing3, 10, 20);

};

var theSentence = new sentence(otherWords[1], otherWords[0]);

theSentence.draw();