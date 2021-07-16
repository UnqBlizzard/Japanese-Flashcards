class floatingKanji {
  constructor(k,x,y,d,col,spd) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.col = col;
    this.spd = spd;
    
    this.kanji = k.charAt(0);
  }
  
  
  show() {
    textSize(this.d);
    fill(this.col);
    text(this.kanji,this.x,this.y);
    
    
    this.x += this.spd;
  }
  
}