// eslint configuration to temporarily silence warnings
module.exports = {
  extends: 'next',
  rules: {
    '@next/next/no-img-element': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@next/next/no-html-link-for-pages': 'off'
  },
}
