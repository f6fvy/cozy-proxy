module.exports =

    # login page
    "login title": "Cozy - Sign in"
    "login headline": "Welcome"
    "login connection invitation": "Please enter your password to sign in:"
    "login password placeholder" : "Your password"
    "login button" : "Sign in"
    "login forget password button" : "Did you forget your password?"
    "login success message": "Sign in succeeded!"
    "login reset success message": "An email has been sent to your address, simply follow its instructions to get a new password."

    # reset password page
    "reset title": "Cozy - Reset password"
    "reset headline": "Enter your new password"
    "reset instructions": "After a password reset, you will have to reconfigure confidential data like your mailbox or bank accounts."
    "reset password placeholder": "Your new password"
    "reset button": "Change my password"
    "reset success message": "Password was reset successfully."
    "reset error message": "Password reset failed. Your new password was too short or a server error occured."

    # register page
    "register title": "Cozy - Sign up"
    "register headline": "Welcome to your Cozy!"
    "register informations": "This is the first time you're signing in."
    "register instructions": "Before going further, your Cozy requires:"
    "register reinsurance modification": "These information can be modified at any time from the settings screen."
    "register reinsurance share": "Your Cozy won't share this data without your consent."
    "register button moreinfo": "Enter additional information"
    "register button separator": "or"
    "register button": "Finish registration"
    "register success message": "Registration succeeded!"
    "reset error no user": "No user is registered, it can't reset the password."
    "reset error invalid key": "Security key is invalid, you should restart the reset process by asking a new password on the login page again."

    # register - email field
    "register email placeholder": "Your email"
    "register email info": "Your Cozy will use this address to help you if you lose your password, and to send you configurable alerts, daily reports, etc."
    "register email valid": "This email address is OK."
    "register email invalid": "Enter a valid email address, e.g. john.doe@example.com."

    # register - password field
    "register password placeholder": "A new password"
    "register check password placeholder": "Your new password again"
    "register password info": "Pick a unique password, made of numbers and letters, uppercase and lowercase: it's the shield that keeps your data private!"
    "register password valid": "Password is long enough."
    "register password invalid": "The password should be at least 5 characters long."

    # register -  check password field "register check password placeholder": "The password confirmation"
    "register check password info": "Confirm your password."
    "register check password valid": "Password confirmation successful."
    "register check password invalid": "The passwords don't match."

    # register - public name field
    "register public name placeholder": "Your name"
    "register timezone placeholder": "Your timezone"
    "register public name info": "Your name will be used by your Cozy and its apps to communicate with you."

    # register - timezone field
    "register timezone info": "The time zone is used by Cozy and its apps to always be on time!"

    # error page
    "error title": "Oops, an error has occurred"
    "error headline": "It seems that something went wrong."
    "error reinsurance": "Don't worry, it's probably not that bad!"
    "error temporary issue": "The problem should be temporary, please try again in 5 minutes."
    "error try restart": "If nothing has changed despite that, try to restart your Cozy."
    "error contact cozy team": "If the problem persists, feel free to contact the Cozy team:"
    "error contact forum": 'Ask for help on our forum:'
    "error contact email": "Send an email to contact@cozycloud.cc"
    "error contact irc": "Report the issue on IRC, #cozycloud on irc.freenode.net"
    "error wait a bit": "Wait for 5 minutes"
    "error restart app": 'Restart the app ("Manage your apps" menu)'
    "error reinstall app": "Reinstall the app"

    # error page -- not found
    "error not found info": "You are trying to access an app that is either not installed or currently being installed."

    # error page -- error app
    "error try to fix": "You can use the following steps to try and fix the problem:"
    "error contact developer": "If nothing worked, you can contact the developer of the app or the Cozy team:"

    # error page -- public app
    "error public info": "Please wait for 5 minutes, then contact the Cozy owner if nothing has changed!"

    # errors
    "error server": "An internal error occurred."
    "error bad credentials": "Incorrect password."
    "error keys not initialized": "The keys aren't initialized."
    "error login failed": "Login failed."

    # reset password email
    "reset password email from": "Your Cozy <no-reply@%{domain}>"
    "reset password email subject": "[Cozy] Resetting your password"
    "reset password email text": """
        It seems that you forgot the password to your Cozy.
        Not to worry, simply follow the link below to create a new one:

        https://%{domain}/password/reset/%{key}

        Don't forget to update all your encrypted data afterwards!
    """



