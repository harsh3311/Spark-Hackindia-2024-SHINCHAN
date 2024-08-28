import React from "react";

import {
  HeroCard1,
  HeroCard2,
  HeroCard3,
  HeroCard4,
  HeroCard5,
  HeroCard6,
  HeroCard7,
  HeroCard8,
} from "../../SVG/index";
import { FaArrowRightLong } from "../../ReactICON/index";
import Card from "./Card";
import Steps from "./Steps";

const Auth = ({
  setAddDocotr,
  setAddPatient,
  address,
  connectMetaMask,
  SHORTEN_ADDRESS,
}) => {
  return (
    <div className="auth-modal">
      <div className="authincation h-100">
        <div className="container h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-md-6">
              <div className="authincation-content">
                <div className="row no-gutters">
                  <div className="col-xl-12">
                    <div className="auth-form">
                      <div className="text-center mb-3">
                        <a>
                          <img src="images/logo-full.png" alt="" width={100}/>
                        </a>
                        <br/>
                      </div>
                      <Steps />
                      <br/>

                      <Card
                        handleClick={address ? setAddPatient : connectMetaMask}
                        title={"Patient Registration"}
                        patient={"200 +"}
                        number={"40"}
                        iconOne={<HeroCard1 />}
                        iconTwo={<HeroCard2 />}
                        classStyle={"bg-primary1"}
                      />
                      <Card
                        handleClick={address ? setAddDocotr : connectMetaMask}
                        title={"Doctor Registration"}
                        patient={"4 +"}
                        number={"14"}
                        iconOne={<HeroCard1 />}
                        iconTwo={<HeroCard4 />}
                        classStyle={"bg-primary1"}
                      />
                      <div className="new-account mt-3">
                        <p className="mb-0">
                          Welcome to{" "}
                          <a className="text-primary">
                            InnerRooh : Your Mental Health, Our Priority
                          </a>{" "}
                          "Every challenge is temporary phase, leading to brighter days ahead." <FaArrowRightLong />
                          <a
                            className="text-primary"
                            onClick={() => (address ? "" : connectMetaMask())}
                            style={{
                              cursor: "pointer",
                            }}
                          >
                            &nbsp;
                            {address
                              ? `${SHORTEN_ADDRESS(address)}`
                              : "Connect Wallet"}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
