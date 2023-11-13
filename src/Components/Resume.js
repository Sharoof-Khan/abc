import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Experince and Education"} span={"Experince"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Experince"} />
        </div>
        {/* <div className="small-title">
          <SmallTitle icon={briefcase} title={"Software Developer"} />
        </div> */}
        <div className="resume-content">
          <ResumeItem
            year={"Aug, 2022 - May,2023"}
            title={"Boppo Technologies,(Software Developer)"}
            text={"I was worked as a React Native Developer."}
          />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"May, 2023 - Present"}
            title={"Don Bosco Nerul,(Software Developer)"}
            text={"I am working as a React  Developer."}
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"2021 - 2022"}
            title={"Full Stack Developer"}
            subTitle={"Masai School, Banglore"}
            text={
              "Learned Full Stack Developement(MERN) and Communication skills. "
            }
          />
          <ResumeItem
            year={"2017 - 2020"}
            title={"Bsc IT"}
            subTitle={"Vidyalankar School Of Information Technology"}
            text={"Wadala, Mumbai:400037"}
            /* text={
              "Got 75% through out the semester. Always active in project cirriculum."
            } */
          />
          <ResumeItem
            year={"2016 - 2017"}
            title={"HSC (Science)"}
            subTitle={"GuruNanak College of Arts Commerce And Science"}
            text={"GTB Nagar, Mumbai:400037"}
          />
          <ResumeItem
            year={"2014 - 2015"}
            title={"SSC"}
            subTitle={"Sitaram Prakash High School"}
            text={"Wadala, Mumbai:400031"}
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
