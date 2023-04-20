import React from "react";
import { useEffect, useRef } from "react";
import logo from "../assets/images/gusd/logo.png";

const Profile = () => {
  return (
    <section id="profilePage">
      <div
        className="row"
        style={{ margin: "0px", height: "100%", width: "100vw" }}
      >
        <div className="col-2 sideBar">
          <div className="profileLogoWrapper">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="col-10 profileContent">
          <div className="profileCoverSection">
            <div className="coverEditIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="16"
                viewBox="0 0 14 16"
                id="gear"
              >
                <path
                  fill="#ffffff"
                  fill-rule="evenodd"
                  d="M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="profileHeaderSection">
            <div className="profilePictureWrapper">
              <img
                src="https://mirror-media.imgix.net/publication-images/ScEiSBMPTy4Zxzqsa7iqk.png?h=600&w=600"
                className="profilePicture"
                alt=""
              />
            </div>
            
          </div>
          <div className="nameSection">
            <div className="userNameWrapper">
                <h5>Gianluca D. Bella</h5>
              </div>
              
          </div>
          <div className="userDataSection">
            <h5 className="userDataSectionTitle">Bio</h5>
            <h5 className="userBio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h5>
          </div>
          <div className="userDataSection">
            <h5 className="userDataSectionTitle">Personal Info</h5>
            <br />
            <div className="row userDataRow">
                <div className="col-6 userDataTitle">Name:</div>
                <div className="col-6 userDataTitle">Email:</div>
            </div>
            <div className="row userDataRow">
                <div className="col-6 userData">Gianluca Di Bella</div>
                <div className="col-6 userData">gianlucadibella@gmail.com</div>
            </div>
            <div className="row userDataRow">
                <div className="col-6 userDataTitle">Phone:</div>
                <div className="col-6 userDataTitle">Address:</div>
            </div>
            <div className="row userDataRow">
                <div className="col-6 userData">0652541212</div>
                <div className="col-6 userData">248, AV THE ONE, AMSTERDAM</div>
            </div>
            <div className="row userDataRow">
                <div className="col-6 userDataTitle">Account type:</div>
                <div className="col-6 userDataTitle">Valid until:</div>
            </div>
            <div className="row userDataRow">
                <div className="col-6 userData">Investor</div>
                <div className="col-6 userData">02/02/2024</div>
            </div>
          </div>
          <div className="userDataSection">
            <h5 className="userDataSectionTitle">GUSD Info</h5>
            <br />
            <div className="row userDataRow">
                <div className="col-6 userDataTitle">Supply (GUSD):</div>
                <div className="col-6 userDataTitle">Supply (in USD):</div>
            </div>
            <div className="row userDataRow">
                <div className="col-6 userData">1284 GUSD</div>
                <div className="col-6 userData">$1287</div>
            </div>
            <div className="row userDataRow">
                <div className="col-6 userDataTitle">Purchases:</div>
                <div className="col-6 userDataTitle">Latest purchase:</div>
            </div>
            <div className="row userDataRow">
                <div className="col-6 userData">12 (validated)</div>
                <div className="col-6 userData">01/04/2023</div>
            </div>
            <div className="row userDataRow">
                <div className="col-6 userDataTitle">Real diamonds</div>
                <div className="col-6 userDataTitle">Diamond tokens</div>
            </div>
            <div className="row userDataRow">
                <div className="col-6 userData">1 diamond</div>
                <div className="col-6 userData">127</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
