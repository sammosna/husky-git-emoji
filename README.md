# husky-git-emoji
A little command line tool that use husky to replace tag to emoji

With this tool all your commit created with the Angular commit synthax will be replace by emoji of [gitmoji](https://gitmoji.carloscuesta.me/).

## Installation
```
npm install husky-git-emoji --save-dev
```

Inside of your repository, you have 2 ways:

### No husky hooks for now
```
npx hge-init
```

This command is going to install the husky and the hook of husky-git-emoji

### With husky hooks
Add this in your *package.json* file
```JSON
{
    "husky": {
        "hooks": {
            "commit-msg": "npx hge-commit"
        }
    }
}
```

## Conclusion
This project in inspired by [git-emojis-hook](https://github.com/Buzut/git-emojis-hook)  
Created by Bigaston : [🐦 Twitter](https://twitter.com/Bigaston) | [💸 uTip](https://utip.io/Bigaston)