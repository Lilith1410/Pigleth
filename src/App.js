import React, {Component} from 'react';
import logo_pink from './img/pink_piggy.png';
import logo_white from './img/white_piggy.png';
import { Heading, Button, Image, MetaMaskButton, UPortButton, Input, Text, Loader } from 'rimble-ui';
import { ThemeProvider } from 'styled-components';
import theme from './theme.js';
{/*import {PIGLETH_ADDRESS, PIGLETH_ABI, PIGHERDER_ADDRESS, PIGHERDER_ABI } from './contracts/config.js'; */}

class App extends Component {

  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <div class="header" bg='black'>
            <center>
              <img
                src={logo_white}
                alt="logo"
                borderRadius={8}
              />

              <br />
              <Heading.h1>PIGL.ETH</Heading.h1>
              <Heading.h3>piggy bank your pension fund </Heading.h3>
            </center>
          </div>

          <br />


          <div class="body">
            <center>
              <div class="login">
                <Heading.h2>Login with ... </Heading.h2>
                <MetaMaskButton>MetaMask</MetaMaskButton>
                <UPortButton>Connect with UPort</UPortButton>
                <br />
                <Button>3Box</Button>
                <Button>Torus</Button>
              </div>

              <br />

              <div class="profile">

                <Heading.h2>Profile</Heading.h2>

                {/*Connect to Pigleth owner*/}
                <div
                  data-dh-feature="customContract"
                  data-dh-property-contract-name="Pigleth"
                  data-dh-property-method-name="owner"
                  data-dh-property-method-id="001"
                  data-dh-property-auto-invoke="true">
                </div>

                <Heading.h4>Pigleth-Owner: </Heading.h4>
                {/*print out Pigleth owner*/}
                <div
                  data-dh-property-method-id="001"
                  data-dh-property-outputs="true">
                Placeholder for owner Function
                </div>

                <Heading.h4>PigHerder Address</Heading.h4>
                {/*Connect to PigHerder Address*/}
                <div
                  data-dh-feature="customContract"
                  data-dh-property-contract-name="Pigleth"
                  data-dh-property-method-name="pigHerder"
                  data-dh-property-method-id="002"
                  data-dh-property-auto-invoke="true">
                </div>
                {/*print out Pigleth owner*/}
                <div
                  data-dh-property-method-id="002"
                  data-dh-property-outputs="true">
                Placeholder for owner Function
                </div>

                <Heading.h4>End Time</Heading.h4>
                {/*Connect to endtime*/}
                <div
                  data-dh-feature="customContract"
                  data-dh-property-contract-name="Pigleth"
                  data-dh-property-method-name="endTime"
                  data-dh-property-method-id="003"
                  data-dh-property-auto-invoke="true">
                </div>
                {/*print out endtime*/}
                <div
                  data-dh-property-method-id="003"
                  data-dh-property-outputs="true">
                Placeholder for endtime
                </div>

                {/* How to get contract Balance? That would be useful here! */}
              </div>

              <br />
              <div class="setupFund">
                <Heading.h2>Setup Fund</Heading.h2>
                <Text>
                  This feature is currently disabled.
                </Text>
              </div>

              <br />

              <div class="interaction">
                <Heading.h2>Manage Piggy</Heading.h2>
                <div class="fundWithdraw"
                  data-dh-feature="customContract"
                  data-dh-property-contract-name="Pigleth"
                  data-dh-property-method-name="ownerDied"
                  data-dh-property-method-id="100"
                  data-dh-property-auto-invoke="true">
                </div>
                <div class="fundPayIn"
                  data-dh-feature="customContract"
                  data-dh-property-contract-name="Pigleth"
                  data-dh-property-method-name="payIn"
                  data-dh-property-method-id="101"
                  data-dh-property-auto-invoke="true">
                </div>
                <div class="fundWithdraw"
                  data-dh-feature="customContract"
                  data-dh-property-contract-name="Pigleth"
                  data-dh-property-method-name="payOut"
                  data-dh-property-method-id="102"
                  data-dh-property-auto-invoke="true">
                </div>
                <div class="fundWithdraw"
                  data-dh-feature="customContract"
                  data-dh-property-contract-name="Pigleth"
                  data-dh-property-method-name="smashPiggy"
                  data-dh-property-method-id="103"
                  data-dh-property-auto-invoke="true">
                </div>

                <Input type="number" required="true" placeholder="Fund Piggy..."/>
                <Button
                  data-dh-property-method-id="101"
                  data-dh-property-invoke="true">
                  Pay Piggy</Button>
                <Text>Fill up your Piggy with a delicious payment! </Text>
                <br />
                <Input type="number" required="true" placeholder="Withdraw..."/>
                <Button
                  data-dh-property-method-id="102"
                  data-dh-property-invoke="true">
                Pay Me</Button>
                <Text>Withdraw from your Piggy. </Text>
                <br />
                <Button
                  data-dh-property-method-id="103"
                  data-dh-property-invoke="true"
                >Smash Piggy :(</Button>
                <Text>Smashing your Piggy returns all funds to your address. </Text>
                <br />
                <Button
                  data-dh-property-method-id="100"
                  data-dh-property-invoke="true"
                >Owner Died</Button>
                <Text>
                When you die, your funds get transfered to the PigHerder-Contract.
                </Text>


              </div>

              <br />
              <div class="pigHerder">
                <Heading.h2>Pig Herder</Heading.h2>
                {/*Connect to PigHerder withdraw function*/}
                <div
                  data-dh-feature="customContract"
                  data-dh-property-contract-name="PigHerder"
                  data-dh-property-method-name="withdraw"
                  data-dh-property-method-id="010"
                  data-dh-property-auto-invoke="true">
                </div>
                {/*Print out PigHerder withdraw function == nothing*/}
                <div
                  data-dh-property-method-id="010"
                  data-dh-property-outputs="true">
                </div>
                {/*Connect to PigHerder owner */}
                <div
                  data-dh-feature="customContract"
                  data-dh-property-contract-name="PigHerder"
                  data-dh-property-method-name="owner"
                  data-dh-property-method-id="011"
                  data-dh-property-auto-invoke="true">
                </div>

                <br />

                <Text>
                  The PigHerder is the basic PensionFund. If you die before you drain all of your pension funds from your piggy,
                  the remaining amount gets transferred to the PigHerder contract.
                  <br />

                  The idea is that this contract gets filled by payments from your employer,
                  the government or interest earned on DeFi plattforms like Aave or Compound.

                  Submitting your address in this field allows you to drain the funds from the PigHerder Pension Fund.
                  If you are the owner of that fund (only currently for working Hackathon MVP).
                </Text>

                <br />
                <Text>
                  Print out owner of PigHerder:
                </Text>
                {/*print out PigHerder owner*/}
                <div
                  data-dh-property-method-id="011"
                  data-dh-property-outputs="true">
                Placeholder for owner Function
                </div>

                <br />
                <Input
                  type="text" required="true"
                  placeholder="Put your address here..."
                  data-dh-property-method-id="011"
                  data-dh-property-input-name="_receiver"
                />

              </div>

            </center>
          </div>

          <br />

          <div class="footer" bg='grey'>
            <center>
              <Heading.h3>Trust in Piggy!</Heading.h3>
              <img
                src={logo_pink}
                alt="logo"
                borderRadius={8}
                />
            </center>
          </div>
        </ThemeProvider>
      </div>
    )
  }
}

export default App;
