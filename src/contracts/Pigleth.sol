pragma solidity >=0.4.21 <0.7.0;

contract Pigleth {

  address public owner;
  uint public creationTime;
  enum Phase {
    Init,
    PayIn,
    PayOut,
    Dead,
    Quit
  }

  // Current Stage
  Phase public phase;

  PiglethProxy pigProx;

  // variables
  // time gets handled in weeks
  uint public pensionPayInTimeEnd;
  uint public pensionPayInAmount;
  uint public pensionPayOutTimeEnd;
  uint public pensionPayOutAmount;


  constructor(uint _pensionPayInTime, uint _pensionPayInAmount, uint _pensionPayOutTime, uint _pensionPayOutAmount) public {
    owner = msg.sender;
    creationTime = now;
    phase = Phase.Init;
    pigProx = new PiglethProxy();
    pensionPayInTimeEnd = now + _pensionPayInTime;
    pensionPayInAmount = _pensionPayInAmount;
    pensionPayOutTimeEnd = now + _pensionPayOutTime;
    pensionPayOutAmount = _pensionPayOutAmount;
  }

  // fallback function: needed to receive ether
  function() public payable {}

  // Ragequit
  function quit() public onlyOwner{
    // pay all funds to owner
    phase = Phase.Quit;
    owner.transfer(address(this).balance);

  }

  function payOut() public onlyOwner {
    require(phase == Phase.PayOut)
  }

  // Change variables
  function changePayInAmount( uint _newPayInAmount) public payable onlyOwner {
    require(msg.value >= _newPayInAmount);
    pensionPayInAmount = _newPayInAmount;
  }

  function changePayOutAmount ( uint _newPayOutAmount) public onlyOwner {
    require(msg.value >= _newPayOutAmount)
    pensionPayOutAmount = _newPayOutAmount;
  }


  function ownerDied() {
    // transfer all funds to PiglethProxy
    // self destruct


  }

  function changePhase(Phase _phase) public onlyOwner {
    require (phase != _phase, "This Phase is already set. ");
    phase = _phase;
  }

  // modifier
  modifier onlyOwner() {
    require(owner == msg.sender, "Only Owner can call this!");
    _;
  }

  modifier paidFor(uint _amount) {
    require(msg.value >= _amount);
    _;

  }

  modifier onlyWhenPhase(Phase _phase) {
    require(phase == _phase, "Cannot execute - wrong phase. ")
    _;
  }

}

contract PiglethProxy {

  address public owner;

  constructor PiglethProxy() {
    owner = msg.sender;
  }

}
