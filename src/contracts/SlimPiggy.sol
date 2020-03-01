// Runtergespeckte Version von Pigleth
pragma solidity >=0.4.21 <0.7.0;

contract Pigleth {

  address public owner;
  address public pigHerder;
  uint public endTime;
  uint[] public bacon;

  // deploy smart Contract
  constructor() public {
    owner = msg.sender;
    pigHerder = new PigHerder();
    endTime = now + 1 minutes ;
  }

// pay into contract
function payIn() external payable {
  bacon.push(msg.value);
}

// pay out after interval
function payOut(uint _amount) public {
  require(owner == msg.sender, "Only Owner can get paid out!");
  require(_amount <= address(this).balance, "Piggy does not have enough funds :( ");
  reqiure(now > endTime);
  owner.transfer(_amount);
}

// smash piggy == ragequit
function smashPiggy() public {
  require(owner == msg.sender, "Only Owner can smash piggy!");
  owner.transfer(address(this).balance);
}

// die == send funds to pig herder
function ownerDied() public {
  require(owner == msg.sender, "RIP owner :( ");
  pigHerder.transfer(address(this).balance);
}

}
// pig herder contract:
contract PigHerder {
// receive funds form pigleth
  address public owner;

  constructor() public {
    owner = msg.sender;
  }

  // fallback function
  function() external payable {}

  // withdraw form PigHerder
  function withdraw(address payable _receiver) public {
    require(owner == msg.sender, "Only Owner can withdraw!");
    _receiver.transfer(address(this).balance);
  }

}
