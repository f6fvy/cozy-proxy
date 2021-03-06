module.exports =

    # login page
    "login title": "Cozy - Connexion"
    "login headline": "Bienvenue"
    "login connection invitation": "Renseignez votre mot de passe pour vous connecter :"
    "login password placeholder" : "Votre mot de passe"
    "login button" : "Se connecter"
    "login forget password button" : "Avez-vous perdu votre mot de passe ?"
    "login success message": "Connexion réussie !"
    "login reset success message": "Un email a été envoyé à votre adresse, suivez les instructions de ce dernier pour réinitialiser votre mot de passe."

    # reset password page
    "reset title": "Cozy - Réinitialisation du mot de passe"
    "reset headline": "Indiquez votre nouveau mot de passe"
    "reset instructions": "Après la réinitialisation de votre mot de passe, vous devrez re-configurer vos données confidentielles (chiffrées) comme votre compte bancaire."
    "reset password placeholder": "Votre nouveau mot de passe"
    "reset button": "Réinitialiser mon mot de passe"
    "reset success message": "Mot de passe réinitialisé avec succès."
    "reset error message": "La réinitialisation du mot de passe a échoué. Votre nouveau mot de passe est trop court ou une erreur serveur est survenue."

    # register page
    "register title": "Cozy - Ouverture de votre compte"
    "register headline": "Bienvenue sur votre Cozy !"
    "register timezone placeholder": "Votre fuseau horaire"
    "register informations": "C'est la première fois que vous vous connectez."
    "register instructions": "Avant d'aller plus loin, votre Cozy requiert quelques informations :"
    "register reinsurance modification": "Ces informations sont modifiables à tout moment depuis l'écran de configuration."
    "register reinsurance share": "Et bien sûr, votre Cozy ne partagera pas vos données sans votre accord."
    "register button moreinfo": "Saisir des informations complémentaires"
    "register button separator": "ou"
    "register button": "Terminer l'inscription"
    "register success message": "L'inscription a fonctionné !"

    # register - email field
    "register email placeholder": "Votre email"
    "register email info": "Votre Cozy utilisera cette adresse en cas de perte du mot de passe ou pour vous communiquer toute sorte d'information : alerte, rapport quotidien, etc."
    "register email valid": "L'adresse email est valide."
    "register email invalid": "Indiquez une adresse email valide, de la forme john.doe@example.com."

    # register - password field
    "register password placeholder": "Choisissez un mot de passe"
    "register password info": "Choisissez un mot de passe unique, composé de chiffres et des lettres, majuscules et minuscules : c'est le rempart qui protège vos données privées !"
    "register password valid": "Mot de passe suffisamment long."
    "register password invalid": "Le mot de passe doit être composé d'au moins 5 caractères."

    # register -  check password field
    "register check password placeholder": "Confirmez votre mot de passe"
    "register check password info": "Confirmez votre mot de passe."
    "register check password valid": "Mot de passe confirmé avec succès."
    "register check password invalid": "Les deux mots de passes sont différents."

    # register - public name field
    "register public name placeholder": "Votre nom"
    "register public name info": "Votre nom public sera utilisé par votre Cozy et ses applications pour communiquer avec vous."

    # register - timezone field
    "register timezone info": "Le fuseau horaire est utilisé par Cozy et ses applications pour être toujours à la bonne heure !"

    # error page
    "error title": "Oups, une erreur est survenue"
    "error headline": "Il semble que quelque chose se soit mal passé."
    "error reinsurance": "Ne vous inquiétez pas, ce n'est probablement pas trop grave !"
    "error temporary issue": "Le problème devrait être temporaire, merci de réessayer dans 5 minutes."
    "error try restart": "Si rien n'a changé après ça, essayez de redémarrer votre Cozy."
    "error contact cozy team": "Si le problème persiste, n'hésitez pas à contacter l'équipe Cozy :"
    "error contact forum": 'Demandez de l\'aide sur notre forum :'
    "error contact email": "Envoyez un email à contact@cozycloud.cc"
    "error contact irc": "Reportez le problème sur IRC, canal #cozycloud sur irc.freenode.net"
    "error wait a bit": "Attendre 5 minutes"
    "error restart app": 'Redémarrer l\'application (onglet "Gérez vos apps")'
    "error reinstall app": "Réinstaller l'application"

    # error page -- not found
    "error not found info": "Vous essayez d'accéder à une application qui n'est pas installée ou qui est en train d'être installée."

    # error page -- error app
    "error try to fix": "Vous pouvez essayer les actions suivantes pour régler le problème :"
    "error contact developer": "Si rien n'a marché, vous pouvez contacter le développeur de l'application ou l'équipe Cozy :"

    # error page -- public app
    "error public info": "Veuillez attendre 5 minutes, puis contacter le propriétaire du Cozy si rien n'a changé !"

    # errors
    "error server": "Une erreur interne est survenue."
    "error bad credentials": "Mot de passe incorrect."
    "error keys not initialized": "Les clés ne sont pas initialisées."
    "error login failed": "Echec de la connexion."

    # reset password email
    "reset password email from": "Votre Cozy <no-reply@%{domain}>"
    "reset password email subject": "[Cozy] Réinitialiser votre mot de passe"
    "reset password email text": """
        Il semble que vous ayez oublié le mot de passe de votre Cozy.
        Ne vous inquiétez pas, suivez simplement le lien suivant pour en définir un nouveau :

        https://%{domain}/password/reset/%{key}

        N'oubliez pas de mettre à jour toutes vos données chiffrées après ça !
    """
