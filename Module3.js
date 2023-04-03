let collectionNFT = [];


function mintNFT(_gender, _age, _color, _breeds) {
  const duck = {
    gender: _gender,
    age: age,
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

mintNFT("BROWN", 4, "MALE",15);
mintNFT("WHITE", 4, "MALE",8);
mintNFT("BLACK", 4, "MALE",5);
mintNFT("BLUE", 4, "MALE",11);
mintNFT("PINK", 4, "MALE",2);
mintNFT("RED", 4, "MALE",10);

listNFTs();
getTotalSupply();
