import React from 'react';
import './../css/LoginPageStyles.css';
class LoginPage extends React.Component {
    componentDidMount() {
        const script = document.createElement("script");

        script.src = "https://sdk.snapkit.com/js/v1/login.js";
        script.async = true;

        document.body.appendChild(script);

        const handleLogin = this.props.handleLogin;
        window.snapKitInit = function () {
            var loginButtonIconId = 'login-button-target';
            // Mount Login Button
            window.snap.loginkit.mountButton(loginButtonIconId, {
              clientId: '2fc5fe99-32c8-494c-b1f8-612b96613983',
              redirectURI: 'http://localhost:3000/login',
              scopeList: [
                'user.display_name',
                'user.bitmoji.avatar',
              ],
              handleResponseCallback: function() {
                window.snap.loginkit.fetchUserInfo()
                  .then(data => handleLogin(data));
              },
            });
          };
    }

    render() {
        return (
          <body>
          <div className="text-center">
            <img id="main-img" src="https://66.media.tumblr.com/1844b1112b107102601a6c300de4e37f/tumblr_ppxs61zEAB1yn6gjno1_1280.png" alt="welcomelogo"/>
            <p id="snapAdding"className="lead">One click snap adding</p>
            <div id="login-button-target"/>
            <p id="instructionTitle">Instructions: </p>
            <p id="instructions"> 1. <em>Login with Snapchat using the button above.</em>
            <br></br>2. <em>Allow Snapsee to access Display Name and Avatar</em>
            <br></br>3. <em>Enter your Snapchat username in the space provided</em><br></br>
            4. <em>Take, or upload a photo of your desired friend.</em><br></br>
            5. <em>Make sure the displayed username is your desired friend and add them.</em></p>
          </div>
          </body>
        );
    }
};

export default LoginPage;