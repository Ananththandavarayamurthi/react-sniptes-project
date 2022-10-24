/* eslint-disable */
import './App.css';
import Price from './components/Price';
import React from 'react';

let card=[
  { price:0,
    user:"Single User",
    userEnabler:true,
    storage:"5GB Storage",
    storageEnabler:true,
    projects:"Unlimited Public Poroject",
    projectsEnabler:true,
    access:"Community Access",
    accessEnabler:true,
    privateprojects:"unlimited Private projects",
    privateprojectsEnabler:false,
    support:"Dedicated Phone Support",
    supportEnabler:false,
    domain:"Free Subdomain",
    domainEnabler:false,
    status:"Monthly Status Report",
    statusEnabler:false,
  },
  { price:9,
    user:"5 User",
    userEnabler:true,    
    storage:"50GB Storage",
    storageEnabler:true,
    projects:"Unlimited Public Poroject",
    projectsEnabler:true,
    access:"Community Access",
    accessEnabler:true, 
    privateprojects:"unlimited Private projects",
    privateprojectsEnabler:true,
    support:"Dedicated Phone Support",
    supportEnabler:true,
    domain:"Free Subdomain",
    domainEnabler:true,
    status:"Monthly Status Report",
    statusEnabler:false,
 
  },
  { price:49,
    user:"Unlimited User",
    userEnabler:true,   
    storage:"150GB Storage",
    storageEnabler:true,
    projects:"Unlimited Public Poroject",
    projectsEnabler:true,
    access:"Community Access",
    accessEnabler:true,
    privateprojects:"unlimited Private projects",
    privateprojectsEnabler:true,
    support:"Dedicated Phone Support",
    supportEnabler:true,
    domain:"Unlimited Free Subdomain",
    domainEnabler:true,
    status:"Monthly Status Report",
    statusEnabler:true,
 
  }];

function App() {
  return (
   <>
   <section className="pricing py-5">
  <div className="container">
    <div className="row">
      <Price value={card[0]}/> 
      <Price value={card[1]}/>
      <Price value={card[2]}/>
      
    </div>
  </div>
</section>
   </> 
  );
}

export default App;
