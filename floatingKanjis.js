class floatingKanji {
  constructor(kanji,x,y,d,col,spd) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.col = col;
    this.spd = spd;
    this.kanji = kanji.charAt(0);
  }
  
  
  show() {
    textSize(this.d);
    fill(this.col);
    text(this.kanji,this.x,this.y);
    
    
    this.x += this.spd;
  }
  
}
