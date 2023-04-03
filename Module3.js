let collectionNFT = [];


function mintNFT(_gender, _age, _color, _breeds) {
  const duck = {
    gender: _gender,
    age: _age,
    color: _color,
    breeds: _breeds,
  }
  collectionNFT.push(duck); }



function listNFTs() {
  for(let i = 0; i < collectionNFT.length; i++) {
    console.log(collectionNFT[i]);
  }
}

function getTotalSupply () {
  console.log("TOTAL NFT: " + collectionNFT.length);
}

mintNFT("BROWN", 9, "MALE",15);
mintNFT("WHITE", 7, "MALE",8);
mintNFT("BLACK", 7, "MALE",5);
mintNFT("BLUE", 8, "MALE",11);
mintNFT("PINK", 7, "MALE",2);
mintNFT("RED", 8, "MALE",10);

listNFTs();
getTotalSupply();
