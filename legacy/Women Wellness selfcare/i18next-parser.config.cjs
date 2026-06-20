module.exports = {
  contextSeparator: '_',
  // Key separator used in your translation keys
  keySeparator: '.',

  namespaceSeparator: ':',

  defaultValue: (locale, namespace, key, value) => {
    return value || key;
  },

  indentation: 2,

  keepRemoved: false,


  lexers: {
    ts: [{ lexer: 'JavascriptLexer', functions: ['t'] }],
    tsx: [{ lexer: 'JsxLexer', functions: ['t'] }],
    js: [{ lexer: 'JavascriptLexer', functions: ['t'] }],
    jsx: [{ lexer: 'JsxLexer', functions: ['t'] }],
    default: [{ lexer: 'JavascriptLexer', functions: ['t'] }],
  },


  locales: ['en'],

  output: 'src/modules/$NAMESPACE/i18n/$LOCALE.json',

  input: ['src/modules/$NAMESPACE/**/*.{ts,tsx,js,jsx}'],

  sort: true,

  useKeysAsDefaultValue: false,


  verbose: false,

  failOnWarnings: false,

  customInterpolation: {
    prefix: '{{',
    suffix: '}}',
  },
};
