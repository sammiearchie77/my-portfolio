import * as React from 'react'
import { Container, Grid } from '@mui/material';
import { Box } from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { profile } from '../profileData';
import profilePic from '../components/images/sam.bg.svg'
import python from '../components/images/python.png'
import javascript from '../components/images/javascript.png'



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  background: '#000',
  border: '1px solid green',
}));

const calculateAge = (dob) => {
  let diff_ms = Date.now() - dob.getTime();
  let age_dt = new Date(diff_ms);
  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

const Profile = () => {
    return (
      <div>
        <Box>
          <Container>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm:2, md:3 }}>
              <Grid item xs={8}>
                <Item>
                  <h4 className={`p-3 bg-success text-dark border text-uppercase`}>Bio Data of CodinGee </h4>
                 <Grid className={`d-flex justify-content-start`}>
                   <h6 className={`p-2 text-success text-uppercase`}>Names: </h6>
                   <h6 className={`p-2 text-success`}>{profile[0].firstName}</h6>
                   <h6 className={`p-2 text-success`}>{profile[0].middleName}</h6>
                   <h6 className={`p-2 text-success`}>{profile[0].lastName}</h6>
                 </Grid>
                 <Grid className={`d-flex justify-content-start`}>
                   <h6 className={`p-2 text-success text-uppercase`}>Date Of Birth: </h6>
                   <h6 className={`p-2 text-success`}>{profile[0].dob}{'.'}</h6>
                 </Grid>
                 <Grid className={`d-flex justify-content-start`}>
                   <h6 className={`p-2 text-success text-uppercase`}>Age: </h6>
                   <h6 className={`p-2 text-success`}>{calculateAge(new Date(1994, 4, 7))}{'.'}</h6>
                 </Grid>
                 <Grid className={`d-flex justify-content-start`}>
                   <h6 className={`p-2 text-success text-uppercase`}>programming Languages: </h6>
                   <h6 className={`p-2 text-success`}>{profile[0].programmingLanguages}{','}</h6>
                   <h6 className={`p-2 text-success`}>{profile[0].programmingLanguages1}{'.'}</h6>
                 </Grid>
                 <Grid className={`d-flex justify-content-start`}>
                   <h6 className={`p-2 text-success text-uppercase`}>Stack: </h6>
                   <h6 className={`p-2 text-success`}>{profile[0].stack}{','}</h6>
                   <h6 className={`p-2 text-success`}>{profile[0].stack1}{'.'}</h6>
                 </Grid>
                 <Grid className={`d-flex justify-content-start`}>
                   <h6 className={`p-2 text-success text-uppercase`}>Years of Experience: </h6>
                   <h6 className={`p-2 text-success`}>{profile[0].experience}{' Years,'}</h6>
                 </Grid>
                 <Grid className={`d-flex justify-content-start`}>
                   <h6 className={`p-2 text-success text-uppercase font-weight-bold`}>Job: </h6>
                   <h6 className={`p-2 text-success`}>{profile[0].job}{'.'}</h6>
                 </Grid>
                 <Grid className={`d-flex justify-content-start`}>
                   <h6 className={`p-2 text-success text-uppercase font-weight-bold`}>Job Title: </h6>
                   <h6 className={`p-2 text-success`}>{profile[0].jobTitle}{'.'}</h6>
                 </Grid>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <img className={``} src={profilePic} alt={`profile pic`} />
                </Item>
                <Item className={`d-flex justify-content-around mt-3`}>
                  <img className={`w-25 px-3`} src={javascript} alt={`profile pic`} />
                  <img className={`w-25 px-2`} src={python} alt={`profile pic`} />
                </Item>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
    );
};

export default Profile;