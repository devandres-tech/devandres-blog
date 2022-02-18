import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import {
//   materialOceanic,
//   materialDark,
//   darcula,
//   dracula,
// } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import materialDark from '../utils/material-dark'
import { Components } from 'react-markdown/index'

const CodeBlock: Components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter
        customStyle={{
          lineHeight: '.8',
          fontSize: '15px',
          backgroundColor: '#0a0a0a',
          borderRadius: '10px',
        }}
        lineNumberStyle={{ marginLeft: '-12px', marginRight: '12px' }}
        showLineNumbers
        style={materialDark}
        language={match[1]}
        PreTag='div'
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  },
}

export default CodeBlock
