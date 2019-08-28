export class Card {
  id: string;
  name: string;
  cardSet: string;
  imageUrl: string[];
  constructor(id: string, name: string, cardSet: string, imageUrl: string[]) {
    this.id = id;
    this.name = name;
    this.cardSet = cardSet;
    this.imageUrl = imageUrl;
  }
}
