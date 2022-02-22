import axios from 'axios';


const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  return <h1>Landing Page</h1>;
};


// http://NAME_OF_SERVICE.NAMESPACE.svc.cluster.local
// http://ingress-nginx-controller.ingress-nginx.svc.cluster.local   // pass along cookie as well!


LandingPage.getInitialProps = async ({ req }) => {
  if (typeof window === 'undefined') {
    console.log('getInitialProps SERVER req:', req && req.headers );
    // we are on the server!
    // requests should be made to http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/{path}
    const { data } = await axios.get(
      // 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
      'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
      {
        headers: req.headers,  // { Host: 'example.com' },
      }
    );
    return data;

    
  } else {
    console.log('getInitialProps BROWSER req:', req && req.headers );

    // we are on the browser!
    // requests can be made with a base url of ''
    // const response = await axios.get('/api/users/currentuser');
    // { currentUser: { id: 123, email: ak@aka.ala} }  // signed-in
    // { currentUser: null }  // signed-out
    const { data } = await axios.get('/api/users/currentuser');
    return data;
  }
  return {};

  // const response = await axios.get('http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser');
  // // .catch(err => {
  // //   console.log(err.message);
  // // });
  // return response.data;
};


export default LandingPage;
