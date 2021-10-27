# Gatsby Source Cleasby & Vigfusson

Gatsby Source plugin for Cleasby & Vigfusson dictionary. Exposes 35 000+ Old Norse words into Gatsby datalayer.

Based on the classic dictionary by Richard Cleasby and Gudbrand Vigfusson. Depends on [Node.js version](https://github.com/stscoundrel/cleasby-vigfusson-dictionary) of the dictionary.

### Install

`yarn add gatsby-source-cleasby-vigfusson`

##### Usage

The plugin adds new `dictionaryEntry` type into datalayer. Individual entries are in format of:

```javascript
{
    word: String
    definitions: [String]
}
```


To use the plugin in your Gatsby project, just add it to plugins config:

```javascript
// gatsby-config.js
module.exports {
  // Your other configs.
  plugins: [
    "gatsby-source-cleasby-vigfusson"
  ]
}
```

If you're using default settings, dictionary entries will contain HTML markup like `<strong>` and `<i>` tags. If you wish to get dictionary data without any markup, you can register the plugin with custom settings.

```javascript
// gatsby-config.js
module.exports {
  // Your other configs.
  plugins: [
    {
      resolve: "gatsby-source-cleasby-vigfusson",
      options: {
        noMarkup: true,
      }
    }
  ]
}
```

### About Cleasby & Vigfusson Dictionary

"Icelandic-English" dictionary was started by Richard Cleasby and finished by Gudbrand Vigfusson. It was published in 1874, which leads to there being many public domain versions of the book available.