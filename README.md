## Overview
This is a meteor package to blacklist usernames you dont want your users to sign up with.

## Usage
```
meteor add mageshkhanna:meteor-username-blacklist
```

## Features
- [x] Has list of keywords ex: about, blog etc.
- [x] Has list of badwords ex: f word, n word etc.
- [x] Works alongside existing meteor package accounts-password

## Contributing
Clone and switch directory into the repository
```
git@github.com:magevadi/meteor-username-blacklist.git
cd meteor-username-blacklist
```
Adding more words: 
Inside ```meteor-username-blacklist.js``` file, add your word to the ```blacklist``` variable
