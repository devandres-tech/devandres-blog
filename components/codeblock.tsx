import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import materialDark from '../utils/material-dark'
import { Components } from 'react-markdown/index'

const CodeBlock: Components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter
        customStyle={{
          lineHeight: '1.5',
          fontSize: '14px',
          backgroundColor: '#01101c',
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
